import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'blog',
                loadChildren: './blog/blog.module#BlogDemoBlogModule'
            },
            {
                path: 'entry',
                loadChildren: './entry/entry.module#BlogDemoEntryModule'
            },
            {
                path: 'tag',
                loadChildren: './tag/tag.module#BlogDemoTagModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogDemoEntityModule {}
