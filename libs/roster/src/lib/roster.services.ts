import { ApiService } from '@realworld/core/http-client';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RosterResponse} from "../../../../apps/backend/src/user/user.interface";

@Injectable({ providedIn: 'root' })
export class RosterService {
  constructor(private apiService: ApiService) {}

  getRoster(): Observable<RosterResponse> {
    return this.apiService.get('/users/roster');
  }
}
