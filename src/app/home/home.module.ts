import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './../header/header.component';

import { Routes, RouterModule } from '@angular/router'

const homeRoutes: Routes = [
    {
        path: '', component: HomeComponent
    }

]

@NgModule(
    {
        imports: [CommonModule, RouterModule.forChild(homeRoutes)],
        declarations: [HomeComponent, HeaderComponent]
    })
export class HomeModule { }