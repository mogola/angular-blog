export class Blog{
	id:number;
	loveIts:number;
	created_at;
	constructor(
		public title:string,
		public content:string
	){}
}