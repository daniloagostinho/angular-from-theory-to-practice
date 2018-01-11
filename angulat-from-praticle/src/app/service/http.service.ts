import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpSelectService {

  constructor(private http: HttpClient) { }

    getQuestoes() {
        return this.http.get('http://pokeapi.co/api/v2/pokemon/1');
    }

}
