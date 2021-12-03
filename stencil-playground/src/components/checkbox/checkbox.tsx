import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'checkbox-vanilla',
  styleUrl: 'checkbox.css',
  shadow: true,
})
export class Checkbox {

  @Prop() itemId: string;

  @Prop() name: string;

  @Prop() checkboxValue: boolean;

  @Event() changeValue: EventEmitter;

  onChange(event) {
    this.changeValue.emit({
      value: event.target.checked,
      field: this.name,
    });
  }

  render() {
    return (
      <div class="container">
        <div class="label">
          <label>
            {this.name}
          </label>
        </div>
        <div class="checkbox">
          <input
            type="checkbox"
            checked={this.checkboxValue}
            id={this.itemId}
            name={this.name}
            onChange={this.onChange.bind(this)}
          />
        </div>
      </div>

    );
  }
}

