import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {IndexComponent} from "./app/index/index.component";
import {AuthIndexComponent} from "./app/authentication/auth-index/auth-index.component";
import {SinginComponent} from "./app/authentication/singin/singin.component";
import {SingupComponent} from "./app/authentication/singup/singup.component";
import {WalletIndexComponent} from "./app/wallet/wallet-index/wallet-index.component";
import {WalletTransferComponent} from "./app/wallet/wallet-transfer/wallet-transfer.component";
import {WalletHistoryComponent} from "./app/wallet/wallet-history/wallet-history.component";
import {SettingsComponent} from "./app/wallet/settings/settings.component";
import {AccountComponent} from "./app/wallet/account/account.component";

export const routes: Routes = [
  {
    path: "", component: IndexComponent
  },
  {
    path: "auth", component: AuthIndexComponent, children: [
      {
        path: "signin", component: SinginComponent
      },
      {
        path: "", component: SingupComponent
      }
    ]
  },
  {
    path: "wallet", component: WalletIndexComponent, children: [
      {
        path: "transfer", component: WalletTransferComponent
      },
      {
        path: "history", component: WalletHistoryComponent
      },
      {
        path: "settings", component: SettingsComponent
      },
      {
        path: "account", component: AccountComponent
      },
      {
        path: "", component: WalletTransferComponent
      }
    ]
  }
];
