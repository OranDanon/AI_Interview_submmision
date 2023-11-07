import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {UserStats} from "../../../../apps/backend/src/user/user.interface";
import {CommonModule} from "@angular/common";
import {RosterService} from "@realworld/roster/src/lib/roster.services";

@Component({
  selector: 'realworld-roster',
  templateUrl: './roster.component.html',
  styleUrls: [],
  providers: [],
  imports: [CommonModule],
  standalone: true,
})
export class RosterComponent {
  // @ts-ignore
  roster$: Observable<UserStats[]>;
  constructor(private rosterService: RosterService) {}

  ngOnInit() {
    // @ts-ignore
    this.roster$ = this.rosterService.getRoster()
  }
}
