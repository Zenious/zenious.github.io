import React from "react"
import Status404Logo from "../images/404-not-found.png"


const NotFoundPage = () => (
    <div style={{
        'backgroundColor': '#50514F',
        'height': '100vh',
    }}>
        <div style={{
            'margin': '0 auto',
            'textAlign': 'center',
            'verticalAlign': 'middle',
            'width': '90%',
            'padding': '30px',
            'color': '#ececec'
        }}>
        <h1>Opps... You reached page that yet to exist</h1>
        <img src={Status404Logo} />
        <h2>Return to <a href="/" style={{
        'color' : '#ececec',
        }}>Hello World </a></h2>
    </div>
    </div>
)

export default NotFoundPage
