import { Component } from '@angular/core'
import { SpeechRecognitionService } from './shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = `boarBot`
  subtitle = `Prawdziwy dzik wsórd asystentów głosowych`
  boarSrc = "../assets/boar.svg"
  constructor(private speechRecognitionService: SpeechRecognitionService) {

  }

  activate(): void {
    this.speechRecognitionService.record()
    .subscribe(
      (value) => {
        console.log(value)
      },
      (err) => {
        console.log(err)
        if(err.error === "no-speach") {
          console.log("Restart")
          this.activate()
        }
      },
      () => {
        console.log("Restart")
        this.activate()
      }
    )
  }
}
