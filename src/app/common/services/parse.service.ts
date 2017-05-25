import { Injectable } from '@angular/core';
@Injectable()
export class ParseService {

	constructor() {
    Parse.initialize('9o87s1WOIyPgoTEGv0PSp9GXT1En9cwC');
    Parse.serverURL = 'https://api.schoolpop.ng/1';
	}

	getOne(query: Parse.Query) {
		return new Promise((resolve, reject) => {
			query.first().then((object) => {
				resolve(object);
			}, (err) => {
				reject(err);
			});
		});
	}

	getMany(query: Parse.Query) {
		return new Promise((resolve, reject) => {
			query.find().then((objects) => {
				resolve(objects);
			}, (err) => {
				reject(err);
			});
		});
	}

	saveObject(object: Parse.Object) {
		return new Promise((resolve, reject) => {
			object.save().then((object) => {
				resolve(object);
			}, (err) => {
				reject(err);
			})
		})
	}

	deleteObject(object: Parse.Object) {
		return new Promise((resolve, reject) => {
			object.destroy().then((object) => {
				resolve(object);
			}, (err) => {
				reject(err);
			})
		})
	}

	run(endPoint:string, data?:any, options?:Parse.Cloud.RunOptions) {
		return new Promise((resolve, reject) => {
			Parse.Cloud.run(endPoint, data, options).then((result) => {
				resolve(result);
			}, (err) => {
				reject(err);
			});
		});
	}
  
}