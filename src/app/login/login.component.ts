import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
declare var ePub : any;

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {

  constructor(private _router : Router) {}

  ngOnInit() {
    let Book = ePub("../assets/Metamorphosis-jackson.epub");
    console.log(Book);
    let rendition = Book
      .renderTo("area")
      .then(function () {
        var next = document.getElementById("next");
        next.addEventListener("click", function (e) {
          Book.nextPage();
          e.preventDefault();
        }, false);
      });

    var prev = document.getElementById("prev");
    prev.addEventListener("click", function (e) {
      Book.prevPage();
      e.preventDefault();
    }, false);

    // Book   .renderTo("area")   .then(function () {     Book.nextPage();   });
    Book
      .getMetadata()
      .then(function (meta) {
        console.log(meta)
      });

  }
  onLoginSubmit() {
    this
      ._router
      .navigate(['/home'])
  }

}
