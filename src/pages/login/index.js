import React from 'react'

import './style.css'

import CardLogin from '../../components/card-login'

class Login extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className='container-login'>
                <CardLogin />
            </div>
        )
    }

}

export default Login