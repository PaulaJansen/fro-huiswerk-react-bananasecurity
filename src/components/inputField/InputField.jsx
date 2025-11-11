import './InputField.css';

function InputField({label, name, value, onChange}) {

    const id = name;

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