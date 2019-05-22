import { Component, OnInit } from '@angular/core';
import { ItemModel } from '../../../models/item.model';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

item:ItemModel;

  constructor(public itemService:ItemService) { }

  ngOnInit() {
  }


 
onPost()
{
this.item.Id = this.itemService.Items.length;
this.itemService.AddItem(this.item);
}

}
