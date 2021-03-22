import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(
        private https: HttpClient
    ) { }

    // tslint:disable-next-line:typedef
    get(url, params) {
        return this.https.get(url, {
            params
        }).pipe(catchError((err: HttpErrorResponse) => {
            if (err.status === 401 || err.status === 440) {
                window.location.replace('/logout');
                return throwError(err);
            }  else if (!err.ok) {
                return throwError(false);
            }
        }));
    }

    // tslint:disable-next-line:typedef
    post(url, params) {
        return this.https.post(url, params).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401 || err.status === 440) {
                    window.location.replace('/logout');
                    return throwError(err);
                } else if (err.status === 422) {
                    return throwError(err.error.errors);
                }  else if (!err.ok) {
                    return throwError(false);
                }
            })
        );
    }
}
