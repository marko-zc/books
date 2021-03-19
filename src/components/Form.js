import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component
{
    static propTypes = {
        handleSubmit: PropTypes.func,
        handleChange: PropTypes.func
    };

    handleChange = (value) =>
    {
        this.props.onChange(value);
    }

    handleSubmit = (event) =>
    {
        event.preventDefault();
        this.props.onSubmit();
    }

    render()
    {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange}></input>
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Form;