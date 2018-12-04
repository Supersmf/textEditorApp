import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.scss']
})

export class ListitemsComponent implements OnInit  {
  @Output() moveTag = new EventEmitter();

  items: Item[];
  editTag: boolean = false;
  newTag: string;
  
  constructor(private data: DataService) { }

  ngOnInit() {
  	this.items = this.data.getData();
  }

  onEdit(item: Item){
    item.edit = !item.edit;
    /*if(item.edit) {
      item.tags.forEach(e => {
        item.content = (item.content.replace(/e/g, `<span class="bg-success text-white>${e}</span>`));
      })
    }*/
  }

  onCancel(item: Item){
  	this.items = this.data.getData();
  }

  onUpdate(item: Item){
  	this.onEdit(item);
  	this.data.updateItem(item);  	
  	this.items = this.data.getData();
  }  

  onRemove(id: number){
  	this.data.removeItem(id);
  	this.items = this.data.getData();
    this.moveTag.emit();
  }

  onTagRemove(item: Item, tagId: number) {
  	item.tags.splice(tagId, 1);
    this.moveTag.emit();
  }

  onTagAdd(item) {
  	item.tags.push(this.newTag);
    this.newTag = '';
    this.editTag = !this.editTag;
    this.onUpdate(item);
    this.moveTag.emit();
  }

  onFilter(str: string) {
    let temp = [];
    
    this.items = this.data.getData();
    
    if(str === 'All') return;

    this.items.forEach(e => {
      e.tags.forEach(a =>  {
        if(a === str) temp.push(e);
      });
    })
    this.items = temp;
  }

}
