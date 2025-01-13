import { Routes } from "@angular/router";
import { MainComponent } from "../../../../shared/layouts/main/main.component";
import { ListeUtilisateursComponent } from "./components/liste-utilisateurs/liste-utilisateurs.component";
import { DetailsUtilisateursComponent } from "./components/details-utilisateurs/details-utilisateurs.component";
import { SingleUtilisateurComponent } from "./components/single-utilisateur/single-utilisateur.component";

export const userRoutes: Routes = [
  {
    path: "",
    component: MainComponent,
    data: {
      breadcrumb: 'Gestion des utilisateurs'
    },
    children: [
      {
        path: "utilisateurs",
        component: ListeUtilisateursComponent,
        data: {
          breadcrumb: ''
        }
      },

      {
        path: ":userId",
        component: SingleUtilisateurComponent,
        data: {
          breadcrumb: ''
        },
        children: [

          {
            path: 'details',
            component: DetailsUtilisateursComponent,
            data: {
              breadcrumb: 'Détails Utilisateur'
            }
          },
          { path: '', redirectTo: '', pathMatch: 'full' }
        ]
      },
      {
        path: "",
        redirectTo: "utilisateurs",
        pathMatch: "full"
      }
    ]
  }
];
