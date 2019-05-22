import { Injectable, Input } from "@angular/core";
import { ItemModel } from "../models/item.model";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import {Http} from "@angular/http";
import { environment } from "../../environments/environment.prod";

@Injectable()
export class ItemService{


    BASE_URL = environment.baseurl;

    TOKEN_KEY = 'token';

    constructor(private http:Http,private router:Router,private sb: MatSnackBar)
    {}
    public Items:ItemModel[] = [];

    async AddItem(item)
    {
    try {
        var result = await this.http.post(this.BASE_URL+'/addMessage',item).toPromise();

        this.Items.push(result.json());
        
    } catch (error) {
        this.handlingErrorMessages("opss you can not post this information try again later!");
    }

    }

    GetAllItems()
    {

        this.Items.push(new ItemModel(1,"Hello world 1"));
        this.Items.push(new ItemModel(2,"Hello world 2"));
        this.Items.push(new ItemModel(3,"Hello world 3"));
    }

    handlingErrorMessages(error)
    {
    this.sb.open(error,"close",{duration:2000});
    }

}