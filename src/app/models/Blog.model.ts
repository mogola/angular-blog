export class Blog{
	id:number;

	constructor(
		public title:string,
		public content:string,
		public loveIts:number = 0,
		public created_at: string = new Date().toString()
	){}
