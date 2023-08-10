import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaPesquisaComponent } from './pessoas/pessoa-pesquisa/pessoa-pesquisa.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';

const routes: Routes = [
  {path: "pessoa", component: PessoaPesquisaComponent},
  {path: "pessoa/novo", component: PessoaCadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }