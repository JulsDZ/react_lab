import React from 'react';

export default (Component) => {
    class WrapComponent extends React.Component {
        render() {
            return <Component />
        }
    }
}