# @r/event-emitter

> event-emitter for @r.



## Install

> npm i --save @blood5/r-emitter



## Usage

```js
import EE from '@blood5/r-emitter';

const ee = new EE();

ee.on('mouseover', () => {});

ee.once('click', () => {});

ee.on('*', () => {});

ee.emit('click', 1, 'hello', true);

ee.off('click');
```



## API

Simple and similar with `event-emitter`.
 - `on(evt: string, callback: Function)`: listen an event.
 - `once(evt: string, callback: Function)`: listen a event only once.
 - `emit(evt: string, ...parameters: any[])`: emit / trigger an event with parameters.
 - `off(evt?: string, callback?: Function)`: unsubscribe an event.
 - `getEvents()`: get all the exist events.
