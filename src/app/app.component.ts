import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {}
  deploymentMarker: number = 3;
  title = 'cookie-test-frontend';
  message: string = 'Click on above buttons to test';
  url = 'https://cookie-test-backend-qaba.onrender.com';

  checkConnection() {
    try {
      this.message = 'Loading';
      this.httpClient.get(this.url + '/api').subscribe({
        next: (response: any) => {
          this.message = response.message;
        },
        error: (error: any) => {
          this.message = 'Error';
          console.error(error.error);
        },
      });
    } catch (error) {
      console.error(error);
    }
  }

  setCookie() {
    try {
      this.message = 'Loading';
      this.httpClient
        .get(this.url + '/set-cookie', {
          withCredentials: true,
          observe: 'response',
        })
        .subscribe({
          next: (response: any) => {
            console.log(response.headers.get('access_token'));
            this.message = response.body.message;
          },
          error: (error: any) => {
            this.message = 'Error';
            console.error(error.error);
          },
        });
    } catch (error) {
      console.error(error);
    }
  }

  verifyCookie() {
    try {
      this.message = 'Loading';
      this.httpClient
        .get(this.url + '/verify-cookie', { withCredentials: true })
        .subscribe({
          next: (response: any) => {
            this.message = response.message;
          },
          error: (error: any) => {
            this.message = 'Error';
            console.error(error.error);
          },
        });
    } catch (error) {
      console.error(error);
    }
  }

  clearCookie() {
    try {
      this.message = 'Loading';
      this.httpClient
        .get(this.url + '/clear-cookie', { withCredentials: true })
        .subscribe({
          next: (response: any) => {
            this.message = response.message;
          },
          error: (error: any) => {
            this.message = 'Error';
            console.error(error.error);
          },
        });
    } catch (error) {
      console.error(error);
    }
  }
}
