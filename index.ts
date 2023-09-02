import { repeat, delay } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/utility/repeat
// Example 1: Repeat 3 times

console.clear();

const delayedThing = of('delayed value').pipe(delay(2000));

delayedThing.pipe(repeat(3)).subscribe(console.log);
