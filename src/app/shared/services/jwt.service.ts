import { Injectable } from '@angular/core';
import { jwtDecode } from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class JwtService {
  private tokenKey: string = 'token';
  private sessionKey: string = 'session';
  private sessionDetails: string = 'sessionDetails';

  constructor() { }

  // Récupérer le token depuis sessionStorage
  // getToken(): string | null {
  //   return sessionStorage.getItem(this.tokenKey);
  // }
  getToken(): string | null {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('token');
    }
    return null;
  }


  // Stocker le token dans sessionStorage
  setToken(token: string): void {
    sessionStorage.setItem(this.tokenKey, token);
  }

  getCurrentUser(): any {
    const decoded: any = this.decodeToken()
    return decoded
  }
  getUserName(): any {
    const decoded: any = this.decodeToken()
    return decoded.infos?.prenom + " " + decoded.infos?.nom;
  }
  // getUserProfil(): any {
  //   const decoded: any = this.decodeToken()
  //   return decoded.infos.profil[0].code;
  // }
  getUserProfil(): string | null {
    const decoded: any = this.decodeToken();
    return decoded?.infos?.profil?.[0]?.code || null;
  }

  // getUserProfilLibelle(): any {
  //   const decoded: any = this.decodeToken()
  //   return decoded.infos?.profil[0].libelle;
  // }
  getUserProfilLibelle(): string | null {
    const decoded: any = this.decodeToken();
    return decoded?.infos?.profil?.[0]?.libelle || null;
  }


  // getCurrentUser() : any {
  // }
  // Supprimer le token de sessionStorage
  removeToken(): void {
    sessionStorage.removeItem(this.tokenKey);
    sessionStorage.removeItem(this.sessionKey);
    sessionStorage.removeItem(this.sessionDetails);
  }


  // Décoder le token
  // decodeToken() {
  //   const token = this.getToken();
  //   if (token) {
  //     return jwtDecode(token);
  //   }
  //   return 'inconnue';
  // }
  decodeToken(): any | null {
    const token = this.getToken();
    try {
      return token ? jwtDecode(token) : null;
    } catch (error) {
      console.error("Token invalide :", error);
      return null;
    }
  }


  // Vérifier si le token est expiré
  isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }
    const decoded: any = this.decodeToken();
    if (!decoded || !decoded.exp) {
      return true;
    }
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decoded.exp);
    return expirationDate < new Date();
  }

  // Récupérer la date d'expiration du token
  getTokenExpirationDate(): Date | null {
    const decoded: any = this.decodeToken();
    if (!decoded || !decoded.exp) {
      return null;
    }
    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(decoded.exp);
    return expirationDate;
  }
  //session
  setSession(session: string): void {
    sessionStorage.setItem(this.sessionKey, session);
  }

  getSession(): string | null {
    return sessionStorage.getItem(this.sessionKey);
  }



  setSessionDetails(session: any): void {
    sessionStorage.setItem(this.sessionDetails, session);
  }

  getSessionDetails(): string | null {
    return sessionStorage.getItem(this.sessionDetails);
  }

}
