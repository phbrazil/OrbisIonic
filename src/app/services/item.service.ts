import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items: Array<any> = [
    {
      'id': "1",
      'title': "Atividade 1",
      'description': 'atividades 1'
    },
    {
      'id': "2",
      'title': "Atividade 2",
      'description': 'atividades 2'
    },
    {
      'id': "3",
      'title': "Atividade 3",
      'description': 'atividades 3'
    },
    {
      'id': "4",
      'title': "Atividade 4",
      'description': 'atividades 4'
    }
  ]

  constructor() { }

  createItem(title, description){
    let randomId = Math.random().toString(36).substr(2, 5);
    this.items.push({
      'id': randomId,
      'title': title,
      'description': description
    });
  }

  getItems(){
    return this.items;
  }

  updateItem(newValues){
    let itemIndex = this.items.findIndex(item => item.id == newValues.id);
    this.items[itemIndex] = newValues;
  }


}
