import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'sb-nav',
    templateUrl: './sb-nav.component.html',
    styleUrls: ['./sb-nav.component.scss']
})
export class SbNavComponent {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );
    constructor(private breakpointObserver: BreakpointObserver) { }

}
