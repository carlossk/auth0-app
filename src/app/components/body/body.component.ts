import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    mostrar: Boolean = true;
    mensaje: any = {
        frase: 'Hola que hace',
        autor: 'la llama loca'
    };
    personajes: string[] = ['Thor', 'Thanos', 'iron-man', 'BlackPanter'];
    constructor() {

    }
}
