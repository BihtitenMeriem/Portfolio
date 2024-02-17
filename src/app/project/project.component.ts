import { NgFor } from '@angular/common';
import { Component,OnInit} from '@angular/core';
import { HttpClientModule ,HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [NgFor,HttpClientModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  data: any=[];
  constructor(private http: HttpClient) { }
  // getDataFromGitHub() {
  //   const url = 'https://api.github.com/users/Marybih/repos';
  //   const token = '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';
  
  //   const headers = new HttpHeaders({
  //     'Authorization': `token ${token}`
  //   });
  
  //   this.http.get(url, { headers }).subscribe(
  //     (response) => {
  //       console.log('GitHub API Response:', response);
  //       this.data = response;
  //     },
  //     (error: HttpErrorResponse) => {
  //       console.log("undefind data");
  //     }
  //   );
  // }

  getDataFromGitHub() {
    const url = 'https://api.github.com/users/BihtitenMeriem/repos'; // Replace {username} with your GitHub username
    this.http.get(url).subscribe(
      (response) => {
        console.log('GitHub API Response:', response);
        this.data = response;
        // Process the response data as needed
      },
      (error) => {
        console.error('Error fetching data from GitHub:', error);
      }
    );
  }
  ngOnInit() {
    this.getDataFromGitHub();
  }

}
