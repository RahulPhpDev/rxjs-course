import { Observable } from "rxjs";

export const courseRecord = (url:string) =>  Observable.create( observer => {
  fetch(url)
  .then( rec => {
   return rec.json();
  })
  .then ( body => {
    observer.next(body);
    observer.complete();
  })
  .catch ( err => {
    console.log(err)
    observer.error(err);
  })

})

