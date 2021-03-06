import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[customMin][formControlName],[customMin][formControl],[customMin][ngModel]',
    providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {
    @Input()
    customMin: number;

    validate(c: FormControl): {[key: string]: any} {
        const v = c.value;
        return (v !== null && v !== undefined && v[0] !== '' && v !== '' && v < this.customMin) ? {customMin: true} : null;
    }
}
