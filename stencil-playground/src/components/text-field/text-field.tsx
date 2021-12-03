import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class TextField {

  @Prop() fieldId: string;

  @Prop() fieldName: string;

  @Prop() fieldValue: string;

  @Event() changeValue: EventEmitter;

  onChange(event) {
    this.changeValue.emit({
      value: event.target.value,
      field: this.fieldName,
    });
  }

  render() {
    return (
      <div>
        <label>
          {`${this.fieldName}: `}
        </label>
        <input
          type="text"
          value={this.fieldValue}
          placeholder={`Input ${this.fieldName} here!`}
          id={this.fieldId}
          name={this.fieldName}
          onInput={this.onChange.bind(this)}
        />
      </div>
    );
  }

}
