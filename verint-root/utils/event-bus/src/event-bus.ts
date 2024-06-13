import { Subject } from 'rxjs';

const subject = new Subject<string>();

export const eventBus = {
  sendMessage: (message: string) => subject.next(message),
  getMessage: () => { 
    console.log('Hello');
    
    return subject.asObservable();

  }
};