import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  constructor() { }

  detailsForm  = new FormGroup({
    'firstName' : new FormControl("" , [Validators.required, this.nameValidator]),
    'lastName' : new FormControl("" , [Validators.required , this.nameValidator]),
    'email': new FormControl("" ,[Validators.required , Validators.email]),
    'mobile': new FormControl("",[Validators.required , this.phoneValidator]),
    'add1': new FormControl("",[Validators.required]),
    'add2': new FormControl("",[Validators.required]) ,
    'city' : new FormControl("",[Validators.required , this.nameValidator]) , 
    'state' : new FormControl("",[Validators.required]),
    'zipCode': new FormControl("",[Validators.required , this.zipValidator]),
    'paym': new FormControl("" ,[Validators.required])
  })

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
