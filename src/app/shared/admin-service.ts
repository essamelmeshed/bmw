import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionManager } from '../shared/SessionManager';

@Injectable()
export class adminService {
    token: string = '';
    constructor(private http: HttpClient) { }

    postService(svcUrl: string, httpBody: any, jsonConvert: boolean = true): Observable<any> {

        const body = jsonConvert ? JSON.stringify(httpBody) : httpBody;

        let header: HttpHeaders = new HttpHeaders();
        header = header.append('Content-Type', 'application/json');
        const httpOptions = {
            headers: header
        };

        return this.http.post<any>(svcUrl, body, httpOptions);
    }





    postNewItem(svcUrl: string, httpBody: any, jsonConvert: boolean = true): Observable<any> {

        const body = jsonConvert ? JSON.stringify(httpBody) : httpBody;

        let header: HttpHeaders = new HttpHeaders();
        header = header.append('Content-Type', 'application/json');
        header = header.append('Authorization', SessionManager.getToken());

        const httpOptions = {
            headers: header
        };

        return this.http.post<any>(svcUrl, body, httpOptions);
    }


    getList(svcUrl: string): Observable<any> {

        let header: HttpHeaders = new HttpHeaders();
        header = header.append('Content-Type', 'application/json');
        header = header.append('Authorization', SessionManager.getToken());

        const httpOptions = {
            headers: header
        };

        return this.http.get<any>(svcUrl, httpOptions);
    }


}