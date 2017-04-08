import {OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs/Rx';

export abstract class SuperComponent implements OnDestroy {

    timer: Subscription = null;

    constructor() { }

    startTimer(interval: number): void {
        this.stopTimer();
        this.timer = Observable.timer(2000, interval).subscribe(t => this.refresh());
    }

    stopTimer(): void {
        if (this.timer != null) {
            this.timer.unsubscribe();
            this.timer = null;
        }
    }

    ngOnDestroy() {
        this.stopTimer();
    }

    abstract refresh(): void;
}
