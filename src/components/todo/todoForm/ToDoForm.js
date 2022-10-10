import React from 'react'
import "./todoForm.css"

/**
 *
 * @param onAdd function to be called when add Todo
 * @return {JSX.Element}
 * @constructor
 */
export function ToDoForm({ onAdd }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        onAdd(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}