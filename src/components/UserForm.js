import React from 'react'

export default function UserForm(props) {
    const { value, onChange, onSubmit, user } = props

    return <div>
        <h3>Pick your name</h3>
        <form onSubmit={onSubmit}>
            <input type="text" value={value} onChange={onChange} placeholder={user} />
            <button type="submit">Send</button>
        </form>
    </div>
}
