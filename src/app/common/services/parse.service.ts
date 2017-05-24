import { Injectable } from '@angular/core';
@Injectable()
export class ParseService {

	constructor() {
    Parse.initialize('9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
    Parse.serverURL = 'https://api.schoolpop.ng/1';
	}
  
}