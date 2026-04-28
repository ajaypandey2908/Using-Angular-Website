import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Loginpage } from './pages/loginpage/loginpage';
import { Forgetpassword } from './pages/forgetpassword/forgetpassword';
import { Products } from './pages/products/products';
import { Features } from './pages/features/features';
import { Marketplace } from './pages/marketplace/marketplace';
import { Company } from './pages/company/company';

export const routes: Routes = [
    {path: '',component: Home},
    {path:'loginpage', component:Loginpage},
    {path:'forgetpassword', component:Forgetpassword},
    {path:'products', component:Products},
    {path:'features',component:Features},
    {path:'marketplace', component:Marketplace},
    {path:'company',component:Company}
];
