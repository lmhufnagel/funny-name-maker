import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const location_options = [
  { key: 'NYC', text: 'New York, NY', value: 'New York, NY' },
  { key: 'BOS', text: 'Boston', value: 'Boston' },
  { key: 'DC', text: 'Washington, DC', value: 'Washington, DC' },
  { key: 'PHIL', text: 'Philidelphia, PA', value: 'Philidelphia, PA' }
]

const month = [{key: 'Jan', text: 'Jan', value:'Jan'}, {key: 'Feb', text: 'Feb', value:'Feb'},
{key: 'Mar', text: 'Mar', value:'Mar'}, {key: 'Apr', text: 'Apr', value:'Apr'},
{key: 'May', text: 'May', value:'May'}, {key: 'Jun', text: 'Jun', value:'Jun'},
{key: 'Jul', text: 'Jul', value:'Jul'}, {key: 'Aug', text: 'Aug', value:'Aug'},
 {key: 'Sept', text: 'Sept', value:'Sept'}, {key: 'Oct', text: 'Oct', value:'Oct'},
 {key: 'Nov', text: 'Nov', value:'Nov'}, {key: 'Dec', text: 'Dec', value:'Dec'}]

 const day = [{key: '1', text: '1', value:'1'},{key: '2', text: '2', value:'2'},{key: '3', text: '3', value:'3'},
 {key: '4', text: '4', value:'4'},{key: '5', text: '5', value:'5'},{key: '6', text: '6', value:'6'},
 {key: '7', text: '7', value:'7'}, {key: '8', text: '8', value:'8'}, {key: '9', text: '9', value:'9'},
 {key: '10', text: '10', value:'10'}, {key: '11', text: '11', value:'11'}, {key: '12', text: '12', value:'12'},
 {key: '13', text: '13', value:'13'}, {key: '14', text: '14', value:'14'}, {key: '15', text: '15', value:'15'},
 {key: '16', text: '16', value:'16'}, {key: '17', text: '17', value:'17'}, {key: '18', text: '18', value:'18'},
 {key: '19', text: '19', value:'19'}, {key: '20', text: '20', value:'20'}, {key: '21', text: '21', value:'21'},
 {key: '22', text: '22', value:'22'}, {key: '23', text: '23', value:'23'}, {key: '24', text: '24', value:'24'},
 {key: '25', text: '25', value:'25'}, {key: '26', text: '26', value:'26'}, {key: '27', text: '27', value:'27'},
 {key: '28', text: '28', value:'28'}, {key: '29', text: '29', value:'29'}, {key: '30', text: '30', value:'30'},
 {key: '31', text: '31', value:'31'}]

 const time = [{key: '1:00', text: '1:00', value:'1:00'}, {key: '1:30', text: '1:30', value:'1:30'},
  {key: '2:00', text: '2:00', value:'2:00'}, {key: '2:30', text: '2:30', value:'2:30'},
 {key: '3:00', text: '3:00', value:'3:00'}, {key: '3:30', text: '3:30', value:'3:30'},
 {key: '4:00', text: '4:00', value:'4:00'},  {key: '4:30', text: '4:30', value:'4:30'},
 {key: '5:00', text: '5:00', value:'5:00'}, {key: '5:30', text: '5:30', value:'5:30'},
 {key: '6:00', text: '6:00', value:'6:00'}, {key: '6:30', text: '6:30', value:'6:30'},
 {key: '7:00', text: '7:00', value:'7:00'}, {key: '7:30', text: '7:30', value:'7:30'},
 {key: '8:00', text: '8:00', value:'8:00'}, {key: '8:30', text: '8:30', value:'8:30'},
 {key: '9:00', text: '9:00', value:'9:00'},  {key: '9:30', text: '9:30', value:'9:30'},
 {key: '10:00', text: '10:00', value:'10:00'},  {key: '10:30', text: '10:30', value:'10:30'},
 {key: '11:00', text: '11:00', value:'11:00'}, {key: '11:30', text: '11:30', value:'11:30'},
 {key: '12:00', text: '12:00', value:'12:00'}, {key: '12:30', text: '12:30', value:'12:30'}]

 const am_pm = [{key: 'am', text: 'am', value:'am'}, {key: 'pm', text: 'pm', value:'pm'}]

class CreateTrip extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    start_location: "",
    start_time: "",
    end_location: "",
    end_time: "",
    car: "",
    available_seats: null,
    duration: "",
    comments: ""
  }

 handleChange = (e, { value }) => this.setState({ value })

 render() {
   const { value } = this.state
   return (
     <Form>
      <Form.Group widths='equal'>
        <Form.Input label='Driver username' placeholder='username' />
        <Form.Input label='Driver First name' placeholder='First name' />
        <Form.Input label='Driver Last name' placeholder='Last name' />
       </Form.Group>
      <Form.Group widths='equal'>
        <Form.Select label='Depart' options={location_options} placeholder='Depart From' />
        <Form.Select label='Departure Month' options={month} placeholder='Select' />
        <Form.Select label='Day' options={day} placeholder='Select' />
        <Form.Select label='Time' options={time} placeholder='Select' />
        <Form.Select label='am/pm' options={am_pm} placeholder='Select' />
       </Form.Group>
       <Form.Group widths='equal'>
        <Form.Select label='Destination' options={location_options} placeholder='Destination' />
        <Form.Select label='Arrival Time' options={time} placeholder='Select' />
        <Form.Select label='am/pm' options={am_pm} placeholder='Select' />
       </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input label='Car Make/Model' placeholder='' />
       </Form.Group>
       <Form.Group widths='equal'>
        <Form.Input label='Seats Available' placeholder='' />
        <Form.Input label='Estimated length of trip' placeholder='in hours' />
       </Form.Group>
       <Form.TextArea label='Comments' placeholder='Anything else your riders should know? Music preferences, will you make stops...' />
       <Form.Checkbox label='I agree to the Terms and Conditions' />
       <Form.Button>Submit</Form.Button>
     </Form>
   )
 }
};

export default CreateTrip;
