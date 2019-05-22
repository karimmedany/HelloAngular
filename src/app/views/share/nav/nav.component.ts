import { Component, OnInit } from '@angular/core';

import { Subscription } from "rxjs";
import { TranslateService } from "ng2-translate";
import { ActivatedRoute } from "@angular/router";

import { Utility } from '../../../services/utility.service';


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private utility:Utility ) { }

  ngOnInit() {
  }

  onChangeLanguage(lang)
{
  this.utility.changeLanguage(lang);
}
}
