import { Component } from '@angular/core';
import { ConverterComponent } from './converter/converter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ConverterComponent],
})
export class AppComponent {
  title = 'Temperature Converter';
}
