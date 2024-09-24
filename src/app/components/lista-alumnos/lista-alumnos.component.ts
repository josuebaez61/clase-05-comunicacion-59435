import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-lista-alumnos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.scss',
})
export class ListaAlumnosComponent {
  /**
   * El decorador @Input nos sirve para indicar que esta propiedad
   * la vamos a recibir desde el padre
   */
  @Input() alumnos: string[] = [];

  /**
   * El decorador @Ouput nos sirve para notificar al padre de que algo
   * sucedio
   */
  @Output() eliminarAlumno = new EventEmitter<{
    index: number;
    nombre: string;
  }>();
}
