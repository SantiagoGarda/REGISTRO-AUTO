export class Matriz {
    mtx:number [][];

    constructor(){
        this.mtx=[
            [1,2,3,4,5,6],
            [2,4,6,8,9,7],
        ]
    }

    getposition(posX:number,posY:number){
        return `el valor de la posicion ${posX} y la posicion ${posY} es: ${this.mtx[posX][posY]}`
    }
}