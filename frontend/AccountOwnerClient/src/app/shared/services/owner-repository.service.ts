import { EnvironmentUrlService } from './environment-url.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Owner } from 'src/app/_interfaces/owner.model';

@Injectable({
  providedIn: 'root'
})
export class OwnerRepositoryService {
  constructor(private http: HttpClient, private envUrl: EnvironmentUrlService) { }

  private createCompleteRoute(route: string, envAddress: string): string {
    return `${envAddress}/${route}`;
  }

  public getOwners = (route: string) => {
    return this.http.get<Owner[]>(this.createCompleteRoute(route, this.envUrl.urlAddress));
  }
}
