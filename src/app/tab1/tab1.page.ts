import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private viagens:any[] = [{
    pais: 'Brasil',
    local: 'Fernando de Noronha',
    imagem: 'https://planetaamerica.com/wp-content/uploads/2013/02/Fotolia_5681513_Subscription_Monthly_XL.jpg',
    descricao: ''
  },
  {
  pais: 'EUA',
  local: 'Nova Iork',
  imagem: 'https://planetaamerica.com/wp-content/uploads/2013/02/Fotolia_5681513_Subscription_Monthly_XL.jpg',
  descricao: ''
},
{
  pais: 'EUA',
  local: 'Grand Cannyon',
  imagem: 'https://www.aprendizdeviajante.com/wp-content/uploads/2010/10/grandcanyon-696x451.jpg',
  descricao: ''
}
];

  constructor() {}

}
