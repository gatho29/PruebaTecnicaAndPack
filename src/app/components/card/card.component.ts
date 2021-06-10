import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { user } from 'src/app/interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';
import { DetailsComponent } from 'src/app/user-list/details/details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  @Input() user;
  userSubscription: Subscription;
  detailsUsers: MatDialogRef<DetailsComponent>;
  users: user[] = [];

  constructor(private srvUser: UsersService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getListUsers();
    console.log(this.user);
  }

  ngOnDestroy(): void {
    this.userSubscription && this.userSubscription.unsubscribe();
  }

  getListUsers(): void {
    this.userSubscription = this.srvUser.getUsers().subscribe(
      users => this.users = users,
      error => console.log(error)
    );

  }

  shwoUserDetails(): void {
    this.detailsUsers = this.dialog.open(DetailsComponent, { width: '400px', data: this.user, panelClass: 'dialogWhite' });
  }

}
