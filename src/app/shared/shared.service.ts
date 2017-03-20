import { Injectable, NgZone } from '@angular/core'
import { Observable } from 'rxjs/Observable'

interface IWindow extends Window {
    webkitSpeechRecognition: any
    speechRecognition: any
}

@Injectable()
export class SpeechRecognitionService {
    speechRecognition: any;

    constructor(private zone: NgZone) {
    }

    record(): Observable<string> {

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window
            this.speechRecognition = new webkitSpeechRecognition()
            this.speechRecognition.continuous = true
            this.speechRecognition.lang = 'en-US' //TODO: implement language change
            this.speechRecognition.maxAlternatives = 1

            this.speechRecognition.onresult = speech => { //todo: refactor
                let term: string = ""
                if (speech.results) {
                    var result = speech.results[speech.resultIndex]
                    var transcript = result[0].transcript
                    if (result.isFinal) {
                        term = transcript
                        console.log("Rozpoznałem słowo: " + term + " z poziomem ufności równym " + result[0].confidence)
                        
                    }
                }
                this.zone.run(() => {
                    observer.next(term)
                });
            };

            this.speechRecognition.onerror = error => {
                observer.error(error)
            };

            this.speechRecognition.onend = () => {
                observer.complete()
            };

            this.speechRecognition.start()
            console.log("Rozpoczynam słuchanie")
        });
    }

    DestroySpeechObject() {
        if (this.speechRecognition)
            this.speechRecognition.stop()
    }

}