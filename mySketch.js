class Mirilla {
	constructor(_lado) {
		this.lado=_lado;
		this.x=mouseX;
		this.y=mouseY;
	}
	dibujar(){
		fill(255,0,0,20);
		this.x=mouseX;
		this.y=mouseY;		
		ellipse(this.x, this.y, this.lado/2, this.lado/2);
		line(this.x-this.lado/2, this.y, this.x+this.lado/2, this.y);
		line(this.x, this.y-this.lado/2, this.x, this.y+this.lado/2);
	}
}
class Globo {
	constructor(_diametro,_velocidad) {
		this.diametro=_diametro;
		this.radio=_diametro/2;
		this.velocidad=_velocidad;
		this.nuevoGlobo();
	}
	dibujar(){
		fill(this.c);
		if(this.y<0-this.radio){
			this.nuevoGlobo();
		}
		ellipse(this.x,this.y,this.diametro,this.diametro);
		this.y-=this.velocidad;
	}
	nuevoGlobo(){
		this.y=height + this.radio;
		this.x=random(300, width-this.radio);
		this.c=color(random(255),random(255),random(255));
	}
}

class Dado {
	constructor(_caras, _numero) {
		this.caras = _caras;
		this.numero = _numero;
	}
	mostrar() {
		if (this.numero > 0 && this.numero < 1) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(150, 150, 50, 50);
			suma = 1;
		}
		if (this.numero > 1 && this.numero < 2) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(100, 100, 50, 50);
			ellipse(200, 200, 50, 50);
			suma = 2;
		}
		if (this.numero > 2 && this.numero < 3) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(75, 75, 50, 50);
			ellipse(150, 150, 50, 50);
			ellipse(225, 225, 50, 50);
			suma = 3;
		}
		if (this.numero > 3 && this.numero < 4) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(100, 100, 50, 50);
			ellipse(100, 200, 50, 50);
			ellipse(200, 100, 50, 50);
			ellipse(200, 200, 50, 50);
			suma = 4;
		}
		if (this.numero > 4 && this.numero < 5) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(75, 75, 50, 50);
			ellipse(75, 225, 50, 50);
			ellipse(150, 150, 50, 50);
			ellipse(225, 75, 50, 50);
			ellipse(225, 225, 50, 50);
			suma = 5;
		}
		if (this.numero > 5 && this.numero < 6) {
			fill(255);
			rect(20, 20, 260, 260, 50);
			fill(0);
			ellipse(75, 75, 50, 50);
			ellipse(75, 150, 50, 50)
			ellipse(75, 225, 50, 50);
			ellipse(225, 150, 50, 50);
			ellipse(225, 75, 50, 50);
			ellipse(225, 225, 50, 50);
			suma = 6;
		}
	}
}

let miGlobo;
let miMira;
var puntuacion = 0;
var suma = 0;
function setup(){
	createCanvas(720,500);
	document.getElementById("numero_dado").innerHTML = "Puntuación: 0";
	miGlobo = new Globo(80, 5);
	miMira = new Mirilla (80);
	cambiarNumero();
}
function draw(){
	background(144, 225, 245);
	miGlobo.dibujar();
	miMira.dibujar();
	dado.mostrar();
	if(mouseIsPressed){
		if(comprobarDisparo()==true){
			miGlobo.nuevoGlobo();
			cambiarNumero();
			puntuacion = puntuacion+suma;
			document.getElementById("victoria").innerHTML = "";
			document.getElementById("numero_dado").innerHTML = "Puntuación: " + puntuacion;
		}
	}
	if(puntuacion >= 50){
		puntuacion = 0;
		document.getElementById("numero_dado").innerHTML = "¡HAS GANADO!";
		document.getElementById("victoria").innerHTML = "Pulsa para reiniciar";
	}
}
function comprobarDisparo(){
	if((miMira.x>miGlobo.x-miGlobo.radio) && 
		 (miMira.x<miGlobo.x+miGlobo.radio) &&
		 (miMira.y>miGlobo.y-miGlobo.radio) &&
		 (miMira.y<miGlobo.y+miGlobo.radio)   ){
		return true;
	} else{
		return false;
	}
}
function cambiarNumero() {
	numero = random(0, 6);
	dado = new Dado(6, numero);
	dado.mostrar();
}
