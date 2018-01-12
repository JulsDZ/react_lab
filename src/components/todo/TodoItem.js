import React from 'react';
import PropTypes from 'prop-types';
import { partial } from '../../lib/utils';
    
export const TodoItem = (props) => {
    const handleToggle = partial(props.handleToggle, props.id);
    return (
        <div>
            <li>
                <input 
                    type="checkbox"
                    onChange={handleToggle}
                    checked={props.isComplete} 
                />
                {props.name}
            </li>
        </div>
    );
}

TodoItem.propTypes = {
    isComplete: PropTypes.bool,
    name: PropTypes.string.isRequired
}