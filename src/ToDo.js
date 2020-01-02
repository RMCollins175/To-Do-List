import React from 'react'

class ToDo extends React.Component {
    render() {
        return(
            <div>
                <li>{this.props.item}</li>
            </div>
        )
    }
}

export default ToDo