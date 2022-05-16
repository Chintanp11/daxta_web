import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'daxta';

  constructor(){
    var userLang = window.navigator.language;
    console.log(userLang);
    if(userLang === 'es' || userLang === 'es-ES'){
      localStorage.setItem('language',JSON.stringify('es'));
    } else if(userLang == 'pt-BR'){
      localStorage.setItem('language', JSON.stringify('br'));
    } else{
      localStorage.setItem('language', JSON.stringify('us'));
    }
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  
}
