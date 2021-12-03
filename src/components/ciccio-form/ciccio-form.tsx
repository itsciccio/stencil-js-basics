import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'ciccio-form',
  styleUrl: 'ciccio-form.css',
  shadow: true,
})
export class CiccioForm {

  @State() nodeName: string = '';
  @State() nodeUrl: string = '';
  @State() isValidator: boolean = false;
  @State() isArchive: boolean = false;
  @State() isMonitor: boolean = true;

  @Listen('submitForm')
  submitForm(e) {
    e.preventDefault();
    console.log("Form submitted!...");
    console.log(`Node name: ${this.nodeName}`);
    console.log(`Node url: ${this.nodeUrl}`);
    console.log(`Is Validator: ${this.isValidator}`);
    console.log(`Is Archive: ${this.isArchive}`);
    console.log(`Is Monitor: ${this.isMonitor}`);

    this.nodeName = '';
    this.nodeUrl = '';
    this.isValidator = false;
    this.isArchive = false;
    this.isMonitor = false;

  }

  @Listen('changeValue')
  handleNameChange(param) {
    switch (param.detail.field) {
      case 'Name':
        this.nodeName = param.detail.value;
        break;
      case 'URL':
        this.nodeUrl = param.detail.value;
        break;
      case 'Validator':
        this.isValidator = param.detail.value;
        break;
      case 'Archive':
        this.isArchive = param.detail.value;
        break;
      case 'Monitor':
        this.isMonitor = param.detail.value;
        break;
    }
  }

  render() {
    return (
      <form class="form">
        <div class="title-holder">
          <text class="title">
            Node Creation Form
          </text>
        </div>
        <div>
          <text-field fieldId="name" fieldName="Name" fieldValue={this.nodeName}></text-field>
          <text-field fieldId="url" fieldName="URL" fieldValue={this.nodeUrl} ></text-field>
          <div class="checkbox-list">
            <checkbox-vanilla itemId="validator" name="Validator" checkboxValue={this.isValidator}></checkbox-vanilla>
            <checkbox-vanilla itemId="archive" name="Archive" checkboxValue={this.isArchive}></checkbox-vanilla>
            <checkbox-vanilla itemId="monitor" name="Monitor" checkboxValue={this.isMonitor}></checkbox-vanilla>
          </div>
        </div>
        <submit-btn />
      </form >
    );
  }

}
