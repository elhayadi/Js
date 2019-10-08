

class Vecteur{
	constructor(x,y){
    this.x = x;
    this.y = y;
}

}
Vecteur.prototype.mod=function (){
return(Math.sqrt((this.x**2) + (this.y**2)));
}
Vecteur.prototype.egale=function (v){
	let _isequal=false;
  if(this.x==v.x && this.y==v.y){
  	_isequal=true;
  }
  return(_isequal);
}

var v1 = new Vecteur(8,6);
var v2 = new Vecteur(8,6);
console.log(v1.mod());
console.log(v2.mod());
console.log(v1.egale(v2));
