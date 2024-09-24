import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { ModalComponent } from './components/modal/modal.component';
import { CommonModule } from '@angular/common';

// interface Alumno {
//   nombre: string;
// }

// const miAlumno: Alumno = {
// }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListaAlumnosComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  modalVisible = false;

  title = 'clase-05-comunicacion';

  alumnosAprobados = ['Naruto', 'Goku'];
  alumnosDesaprobados = ['Gohan'];

  @ViewChild('myButton') myButtonRef?: ElementRef<HTMLButtonElement>;

  @ViewChild(ListaAlumnosComponent)
  listaAlumnosComponentRef?: ListaAlumnosComponent;

  constructor() {
    console.log(this.myButtonRef);
  }

  ngAfterViewInit(): void {
    console.log(this.myButtonRef);
    console.log(this.listaAlumnosComponentRef);
  }

  eliminarAlumno(index: number, from: 'aprobados' | 'desaprobados') {
    // this.alumnosAprobados = this.alumnosAprobados.splice(
    //   index === 0 ? index : index - 1,
    //   1
    // );
    if (from === 'aprobados') {
      this.alumnosAprobados = this.alumnosAprobados.filter(
        (_, i) => index != i
      );
    } else {
      this.alumnosDesaprobados = this.alumnosDesaprobados.filter(
        (_, i) => index != i
      );
    }
  }
}
