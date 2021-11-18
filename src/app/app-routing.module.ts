import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", loadChildren: ()=>import('./product/product.module')
  .then(mod=>mod.ProductModule)
},
  {path: "products", loadChildren: ()=>import('./product/product.module')
  .then(mod=>mod.ProductModule)
}
,
{path: "billing", loadChildren: ()=>import('./billing/billing.module')
  .then(mod=>mod.BillingModule)
} , 

{path: "checkout", loadChildren: ()=>import('./checkout/checkout.module')
  .then(mod=>mod.CheckoutModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
