import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'submit-btn',
  styleUrl: 'submit-btn.css',
  shadow: true,
})
export class SubmitBtn {

  @Event() submitForm: EventEmitter;

  onSubmit(event) {
    this.submitForm.emit(event);
  }

  render() {
    return (
      <button type="submit" value="submit" onClick={this.onSubmit.bind(this)}> Submit </button>
    );
  }

}
