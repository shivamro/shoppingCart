import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormdataService } from 'src/app/formdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private router:Router,
              private formdata : FormdataService) { }

  states  =  [{stateId:1, stateName: 'Tamil Nadu'},{stateId:2, stateName: 'Andhra Pradesh'},{stateId:3, stateName: 'Delhi'},{stateId:4, stateName: 'Uttar Pradesh'}];
  detailsForm: any
  formSubmitAttempt=false;

  ngOnInit(): void {

  //   this.detailsForm  = new FormGroup({
  //     'firstName' : new FormControl("" , [Validators.required, this.nameValidator]),
  //     'lastName' : new FormControl("" , [Validators.required , this.nameValidator]),
  //     'email': new FormControl(null ,[Validators.required , Validators.email]),
  //     'mobile': new FormControl("",[Validators.required , this.phoneValidator]),
  //     'add1': new FormControl(null,[Validators.required]),
  //     'add2': new FormControl(null,[Validators.required]) ,
  //     'city' : new FormControl("",[Validators.required , this.nameValidator]) , 
  //     'state' : new FormControl("",[Validators.required]),
  //     'zipCode': new FormControl("",[Validators.required , this.zipValidator]),
  //     'paym': new FormControl("" ,[Validators.required])
  //   })

  this.detailsForm = this.formdata.detailsForm
  }

  onSubmit(){

    this.formSubmitAttempt = true

    console.log(this.detailsForm)
    if(this.detailsForm.valid){
      this.router.navigate(['/checkout']);
    }
  }

  continueShopping(){

    this.router.navigate(['/products'])
  }

  nameValidator(control : FormControl){

    // length check
    if(control.value.length <3 || control.value.length>40){

      return {'notValid':true}
    }
    //charcters check
    for(let i of control.value){

      if(!((i>='a' && i<='z') || (i>='A' && i<='Z')) && !(i==' ')){

        return {'notValid':true}

      }
    }
    // logical check
    if(control.value[0]==' '){
      return {'notValid':true}

    }

    return null;
  }

  phoneValidator(control : FormControl){

    if(control.value.length!=10 || control.value[0]=='0'){
      return {'notValid':true}
      
    }
    return null;
  }

  zipValidator(control : FormControl){

    if(isNaN(control.value)){
      return {'notValid':true}
      
    }
    return null;
  }

}
