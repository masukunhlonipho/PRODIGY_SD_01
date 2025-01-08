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
  temperature!: string; // Input temperature (using string to validate input)
  unit!: string; // Selected unit
  results: string[] = []; // Converted results
  errorMessage: string = ''; // For validation error messages

  // Method to handle temperature conversion
  convertTemperature() {
    // Clear error message
    this.errorMessage = '';

    // Validation: Check if input is a valid number
    if (!this.temperature || isNaN(Number(this.temperature))) {
      this.errorMessage = 'Please enter a valid number for the temperature.';
      return;
    }

    // Validation: Check if a unit is selected
    if (!this.unit) {
      this.errorMessage = 'Please select a unit for conversion.';
      return;
    }

    const temp = parseFloat(this.temperature); // Convert string to number
    this.results = []; // Clear previous results

    if (this.unit === 'Celsius') {
      this.results.push(`${(temp * 9) / 5 + 32} °F (Fahrenheit)`);
      this.results.push(`${temp + 273.15} K (Kelvin)`);
    } else if (this.unit === 'Fahrenheit') {
      this.results.push(`${((temp - 32) * 5) / 9} °C (Celsius)`);
      this.results.push(`${((temp - 32) * 5) / 9 + 273.15} K (Kelvin)`);
    } else if (this.unit === 'Kelvin') {
      this.results.push(`${temp - 273.15} °C (Celsius)`);
      this.results.push(`${((temp - 273.15) * 9) / 5 + 32} °F (Fahrenheit)`);
    }
  }

  // Method to clear/reset the form
  clearForm() {
    this.temperature = '';
    this.unit = '';
    this.results = [];
    this.errorMessage = '';
  }
}
