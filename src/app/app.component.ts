import { Component } from '@angular/core';
import { HellojsService } from 'ngx-hellojs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
constructor(private _hellojsService: HellojsService){
  this._hellojsService.init({
    facebook: '420128681768953',
  });
  this._hellojsService.on('auth.login', this.messageAfterLogin);
this._hellojsService.off('auth.login', this.messageAfterLogin);


}
facebookMe(data: any){
  console.log('Me');
  console.log(data);
  debugger;

  this._hellojsService.api('facebook', 'me/friends', null, {limit: 1}).subscribe(dataFriends => {
    this.facebookMeFriends(dataFriends);
  }, error => {
    console.log('error in friends');
    console.log(error);
  });

}
facebookMeFriends(data: any){
  console.log('fb friends');
  console.log(data);
  debugger;
}
messageAfterLogin = () => {
  debugger;
  console.log('Login successfully');
}
  facebookLogin():void{
    debugger
    this._hellojsService.login('facebook', {
      scope: 'email, friends, photos, publish'
    }).subscribe(data => {
    debugger
    console.log('Success:');
    console.log(data.authResponse);
    console.log(data.network);


    this._hellojsService.api('facebook', 'me').subscribe(dataMe => {
      this.facebookMe(dataMe);
    }, error => {});

    }, error => {
      debugger
      console.log('Error:');
      console.log(error);
    });
  // console.log("Facebook Login");
  const fbResult = this._hellojsService.getAuthResponse('facebook');
  console.log('fb result');
  console.log(fbResult);
  }
  logout():void{
    this._hellojsService.logout('facebook').subscribe(data => {}, error => {});
  }
}
