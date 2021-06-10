import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { user } from 'src/app/interfaces/interfaces';
import { UsersService } from 'src/app/services/users.service';
import { Md5 } from 'ts-md5/dist/md5';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  detailsUsers: MatDialogRef<DetailsComponent>;
  subscriptionUser: Subscription;
  users: user[] = [];
  md5 = new Md5();
  filtroValor = '';


  constructor(private srvUser: UsersService, private dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getListUsers();
  }

  ngOnDestroy(): void {
    this.subscriptionUser && this.subscriptionUser.unsubscribe();
  }

  getListUsers(): void {
    this.subscriptionUser = this.srvUser.getUsers().subscribe(
      users => {
        this.users = users.map(user => {
          const md5Str = this.md5.appendStr(user.email).end()
          return { ...user, image: `https://www.gravatar.com/avatar/${md5Str}?d=robohash` }
        })

      },
      error => console.log(error)
    );

  }

  mostrarDetallesUsuario(): void {
    this.detailsUsers = this.dialog.open(DetailsComponent);
  }

  searchUser(value: string): void {
    this.filtroValor = value
  }

}
