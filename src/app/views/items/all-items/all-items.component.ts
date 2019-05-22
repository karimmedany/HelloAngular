import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../../services/item.service';

@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.css']
})
export class AllItemsComponent implements OnInit {

  constructor(public itemService:ItemService) { }

  ngOnInit() {
    this.itemService.GetAllItems();
  }

}
