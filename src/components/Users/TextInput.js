import React from 'react'
import { FormFeedback, FormGroup, Label, Input} from 'reactstrap'

const TextInput = ({label, name, input, width, type, placeholder, meta: { touched, error } }) => {
    return (
        <FormGroup error={error} width={width}>
            <Label for={name}>{label}</Label>
            <Input {...input} valid={touched && !!error} invalid={touched && !!error} placeholder={placeholder} type={type} />
            {touched && error && <FormFeedback>{error}</FormFeedback>}
        </FormGroup>
    )
}

export default TextInput