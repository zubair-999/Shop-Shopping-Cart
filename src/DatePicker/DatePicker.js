import React, { useState } from 'react'
import DateView from 'react-datepicker'
import { Form } from 'react-bootstrap'
const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Form.Group>
      <DateView

        className="form-control"
        selected={startDate}
        onChange={date => setStartDate(date)}
      />
    </Form.Group>
  )
}

export default DatePicker
