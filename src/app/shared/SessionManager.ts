import { Injectable } from '@angular/core';
//import { Lookup } from '../models/Lookup.model';
@Injectable()
export class SessionManager {
    //#region Constants
    private static tokenKey = 'Token';
    private static authorization = 'notAuthorized';
    
    //#endregion
    //#region Token
    public static setToken(tokenValue: string): void {
        sessionStorage.setItem(this.tokenKey, tokenValue);
    }
    public static getToken(): string {
        if (sessionStorage.getItem(this.tokenKey) == null) {
            return this.tokenKey;
        }
        return sessionStorage.getItem(this.tokenKey);
    }
    public static clearToken(): void {
        sessionStorage.removeItem(this.tokenKey);
    }
    //#endregion


     //#region authorization
     public static setAuthorization(authoriz: string): void {
        sessionStorage.setItem(this.authorization, authoriz);
    }
    public static getAuthorization(): string {
        if (sessionStorage.getItem(this.authorization) == null) {
            return this.authorization;
        }
        return sessionStorage.getItem(this.authorization);
    }
    public static clearAuthorization(): void {
        sessionStorage.removeItem(this.authorization);
    }
    //#endregion



 
  
}
