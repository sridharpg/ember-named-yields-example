import Controller from '@ember/controller';
import {action, get, set} from '@ember/object';
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
  }, {
    id: 3,
    name: 'Group 3',
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

  @tracked isIamAttending = false;

  copyValuesFromOrder(index) {
    set(this.groups[index].fields[0], 'value', this.orderForm.fields[0].value);
    set(this.groups[index].fields[1], 'value', this.orderForm.fields[1].value);
    set(this.groups[index].fields[2], 'value', this.orderForm.fields[2].value);
  }

  setProps(key, value) {
    set(this.groups[0].fields[0], key, value);
    set(this.groups[0].fields[1], key, value);
    set(this.groups[0].fields[2], key, value);
  }

  @action
  changed(event) {
    this.isIamAttending = event.target.checked;

    this.setProps('disabled', this.isIamAttending);

    if(this.isIamAttending) {
      this.copyValuesFromOrder(0);
    }
  }

  @action
  copyFromOrder(index) {
    this.copyValuesFromOrder(index);
  }

  @action
  toggleCommonOptions() {
    let isHidden = !get(this.groups[0], '_showCommonOptions');
    set(this.groups[0], '_showCommonOptions', isHidden);
    this.setProps('_hidden', isHidden);
  }
}
