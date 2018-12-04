import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Item } from '../models/item';


@Injectable({
  providedIn: 'root'
})
export class DataService{

	constructor(private http: HttpClient) {
		if(!JSON.parse(localStorage.getItem('items'))){
			this.setLocalStorageNotes(require('../../assets/data.json'));
		}		
	}

	getData(): Item[] {
		return JSON.parse(localStorage.getItem('items')).items;
	}

	removeItem(id: number){
		let items = this.getData();

		items.forEach((e, i) => {
			if(e.id === id){
				items.splice(i, 1);
			}});

		this.setLocalStorageNotes(items);
	}
	updateItem(item: Item): void {
		let items = this.getData();

		items.forEach((e, i) => {
			if(e.id === item.id){
				items.splice(i, 1, item);
			}});

		this.setLocalStorageNotes(items);
	}

	addNote(item: Item){
		let data = this.getData();
		item.id = data[data.length-1].id + 1;
		data.push(item);
		this.setLocalStorageNotes(data);
	}

	private setLocalStorageNotes(items: Item[]): void {
		localStorage.setItem('items', JSON.stringify({ items: items }));
	}
}
