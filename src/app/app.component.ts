import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  Form: FormGroup;
  ngOnInit(): void {
    this.Form = new FormGroup({
      range: new FormArray([
        new FormGroup({
          max: new FormControl(300),
        }),
      ]),
    });
  }
  getInitalValueMax() {
    return (this.Form.get('range') as FormArray).controls[0].get('max').value?(this.Form.get('range') as FormArray).controls[0].get('max').value:'null';
  }
  getInitalValueMin() {
    return (this.Form.get('range') as FormArray).controls[0].get('max').value?(this.Form.get('range') as FormArray).controls[0].get('min').value:'null';
  }
  getInitalValueMaxTrue(){
    return (this.Form.get('range') as FormArray).controls[0].get('max').value?(this.Form.get('range') as FormArray).controls[0].value:'null'
  }
  chnageInitalValue(value) {
    (this.Form.get('range') as FormArray).controls.splice(0,1)
    if (value === 'min') {
      (this.Form.get('range') as FormArray).controls.push(new FormGroup({
        min:new FormControl(100)
      }))
      console.log((this.Form.get('range') as FormArray).controls[0].value);

    }
    if (value === 'max') {
      (this.Form.get('range') as FormArray).controls.push(new FormGroup({
        max:new FormControl(3000)
      }))
      console.log((this.Form.get('range') as FormArray).controls[0].value);
    }
    if (value === 'true') {
      (this.Form.get('range') as FormArray).controls.push(new FormGroup({
        min:new FormControl(100),
        max:new FormControl(3000)
      }))
      console.log((this.Form.get('range') as FormArray).controls[0].value)
    }
  }
}
