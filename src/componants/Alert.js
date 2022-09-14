import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '60px' }}>
            {props.alert &&
                <div class={`alert alert-${props.alert.type} alert-primary`} role="alert"  >
                  <p>  {props.alert.messege} </p>           </div>}
        </div>


    )
}

export default Alert
