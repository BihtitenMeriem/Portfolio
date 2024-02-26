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

  getDataFromGitHub() {
    const url = 'https://api.github.com/users/BihtitenMeriem/repos';
    this.http.get(url).subscribe(
      (response) => {
        console.log('GitHub API Response:', response);
        this.data = response;
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
