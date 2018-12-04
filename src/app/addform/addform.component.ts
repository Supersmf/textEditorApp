import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';
import { ListitemsComponent } from '../listitems/listitems.component';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.scss']
})
export class AddformComponent implements OnInit {
  @Output() render = new EventEmitter();
	@Output() filter = new EventEmitter();

  tags = ["All"];
	showForm: boolean = false;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.importTags();
  }

  onShowForm(){
  	this.showForm = !this.showForm;
  }

  onSubmit(form){
  	this.data.addNote({
  		id: 0,
  		title: form.value.title,
  		content: form.value.content,
  		tags: form.value.tag.split(' '),  		
  		edit: false
  	});
  	this.onShowForm();
  	this.render.emit();
  }

  onSelect(str: string) {
    this.filter.emit(str);
  }

  importTags() {
    let items = this.data.getData();
    items.forEach(e => {
      e.tags.forEach(a => {
        if(!~this.tags.indexOf(a)) {
          this.tags.push(a);
        }
      })
    })
  }
}
