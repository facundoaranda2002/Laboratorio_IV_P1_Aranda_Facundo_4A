import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(),provideFirebaseApp(() => initializeApp({"projectId":"laboratorio4parcial1aranda","appId":"1:916804422078:web:5f7cdaf226a8bd122d11ef","storageBucket":"laboratorio4parcial1aranda.appspot.com","apiKey":"AIzaSyDbCnHIHYLv3yu32kH3EOzaQHB8A2GP4DY","authDomain":"laboratorio4parcial1aranda.firebaseapp.com","messagingSenderId":"916804422078"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
