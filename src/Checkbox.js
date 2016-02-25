
import React from 'react'
import Label from './Label'

/**
 * Checkbox input with label
 */

const Checkbox = ({ label, name, style, children, ...props }) => (
  <div className='Checkbox'>
    <Label htmlFor={name}
      style={{
        display: 'flex',
        alignItems: 'baseline'
      }}>
      <input
        {...props}
        type='checkbox'
        style={{
          ...style,
          marginRight: 8
        }} />
      {label}
    </Label>
  </div>
)

Checkbox.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

export default Checkbox

