import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-converter',
  standalone: true,
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    NgIf,
    NgFor,
  ],
})
export class ConverterComponent {
  temperature!: number; // Input temperature
  unit!: string; // Selected unit
  results: string[] = []; // Converted results

  // Method to handle temperature conversion
  convertTemperature() {
    if (!this.temperature || !this.unit) {
      return;
    }

    this.results = []; // Clear previous results

    if (this.unit === 'Celsius') {
      this.results.push(`${(this.temperature * 9) / 5 + 32} °F (Fahrenheit)`);
      this.results.push(`${this.temperature + 273.15} K (Kelvin)`);
    } else if (this.unit === 'Fahrenheit') {
      this.results.push(`${((this.temperature - 32) * 5) / 9} °C (Celsius)`);
      this.results.push(
        `${((this.temperature - 32) * 5) / 9 + 273.15} K (Kelvin)`
      );
    } else if (this.unit === 'Kelvin') {
      this.results.push(`${this.temperature - 273.15} °C (Celsius)`);
      this.results.push(
        `${((this.temperature - 273.15) * 9) / 5 + 32} °F (Fahrenheit)`
      );
    }
  }
}
