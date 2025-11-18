import './InputField.css';

function InputField({label, id, name, value, onChange}) {

    return (
        <label htmlFor={id}>
            {label}
            <input type="text"
                   id={id}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
        </label>
    )
}

export default InputField;