import Controller from '@ember/controller';
import {action, set} from '@ember/object';
import { tracked } from '@glimmer/tracking';

class Form {
  id;
  @tracked name;
  @tracked fields;

  constructor(id, name, fields) {
    this.id = id;
    this.name = name;
    this.fields = fields;
  }
}

export default class ApplicationController extends Controller {
  orderForm = {
    id: 0,
    name: 'Order Form',
    fields: [
      {
        name: 'First Name',
        value: 'Sridhar'
      }, {
        name: 'Last Name',
        value: 'P.G'
      }, {
        name: 'Mobile',
        value: ''
      }
    ]
  }

  @tracked groups = [{
    id: 1,
    name: 'Group 1',
    fields: [
      {
        name: 'First Name',
        value: ''
      }, {
        name: 'Last Name',
        value: ''
      }, {
        name: 'Mobile',
        value: ''
      }
    ]
  }, {
    id: 2,
    name: 'Group 2',
    fields: [
      {
        name: 'First Name',
        value: ''
      }, {
        name: 'Last Name',
        value: ''
      }, {
        name: 'Mobile',
        value: ''
      }
    ]
  }]

  @action
  changed(event) {
    set(this.groups[0].fields[0], 'disabled', event.target.checked);
    set(this.groups[0].fields[1], 'disabled', event.target.checked);
    if(event.target.checked) {
      set(this.groups[0].fields[0], 'value', this.orderForm.fields[0].value);
      set(this.groups[0].fields[1], 'value', this.orderForm.fields[1].value);
    }
  }
}
