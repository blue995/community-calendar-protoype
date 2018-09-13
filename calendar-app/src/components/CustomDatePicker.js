import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';
import 'moment/locale/de';
moment.locale('de')
 

 
// CSS Modules, react-datepicker-cssmodules.css
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class CustomInput extends React.Component {

  render () {
    return (
      <button
        className="example-custom-input"
        onClick={this.props.onClick}>
        {this.props.value}
      </button>
    )
  }
}

CustomInput.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string
};


class DatePickerComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 
  render() {
    return (
      <div>
        <DatePicker
          customInput={<CustomInput />}
          selected={this.state.startDate}
          onChange={this.handleChange}

          showTimeSelect
          timeIntervals={15}
          timeFormat="HH:mm"
          dateFormat="LLL"
          timeCaption="Zeit"

          minDate={moment()}
          showDisabledMonthNavigation

          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          
          withPortal
          shouldCloseOnSelect={false}
          locale="de_DE"
        />
        <input type="datetime-local" name="bdaytime"></input>
        <input type="time" name="usr_time"></input>
      </div>
    
    );
  }
}


export default DatePickerComponent;