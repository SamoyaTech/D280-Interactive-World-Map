import { Component } from '@angular/core'; //part c
import { HttpClient } from '@angular/common/http';
import { WorldComponent } from './world/world.component';

@Component({
  selector: 'app-root',
  imports: [WorldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'd280-app';
  countryData: any;


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // fetch data for a specific country 
    this.getCountryData('USA');
  }


//fetch country data from API
  getCountryData(countryCode: string): void {
    console.log('Fetching details for:', countryCode);
    const url = `https://api.worldbank.org/v2/country/${countryCode}?format=json`;

    this.http.get<any>(url).subscribe({
      next: (response) => {
        // The World Bank API returns an array where:
        //   response[0] is metadata and response[1] is the array of country objects.
        if (response && response.length > 1 && response[1].length > 0) {
          this.countryData = response[1][0];
          console.log('Extracted Country Data:', this.countryData);
        } else {
          console.error('No valid country data found for:', countryCode);
        }
      },
      error: (error) => {
        console.error('API Request Failed:', error);
      }
    });
  }
}
