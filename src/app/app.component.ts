import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaAlumnosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-05-comunicacion';

  alumnosAprobados = ['Naruto', 'Goku'];
  alumnosDesaprobados = ['Gohan'];

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
