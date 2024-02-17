import { Component, AfterViewInit, ElementRef, Renderer2 ,HostListener } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import Typed from 'typed.js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private http: HttpClient,private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const yOffset = window.scrollY;
    if (yOffset > 100) {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.scroll-to-bottom'), 'display', 'none');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement.querySelector('.scroll-to-bottom'), 'display', 'block');
    }
  }

  downloadFile(): void {
    const url = '../../assets/CV-Meriem-BIHTITEN.pdf';
    this.http.get(url, { responseType: 'blob' }).subscribe(response => {
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(blob);
      downloadLink.setAttribute('download', 'CV-Meriem-BIHTITEN.pdf'); // Set the filename here
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  ngAfterViewInit() {
    const typedTextOutput = document.querySelector('.typed-text-output');
        if (typedTextOutput !== null) {
            const typedStringsElement = document.querySelector('.typed-text');
            if (typedStringsElement !== null) {
                const typed_strings = typedStringsElement.textContent;
                const typed = new Typed('.typed-text-output', {
                    strings: typed_strings ? typed_strings.split(', ') : [],
                    typeSpeed: 100,
                    backSpeed: 20,
                    smartBackspace: false,
                    loop: true
                });
            }
        }

        }

    

}
