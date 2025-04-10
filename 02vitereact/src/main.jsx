import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'


// function Message(){
//   return(
//     <h1>Chai Pilo | Vishal</h1>
//   )
// }

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://google.com',
//       target : '_blank'
//   } ,
//   children : 'Click me to visit Google'
// }

const anotherUser = "Chai par Baat";

const reactElement = React.createElement( 
     'a',
     {href:'https://google.com' , target: '_blank'},
     'Click me to visit Google',
     anotherUser
)



// const Message = (
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

ReactDOM.createRoot(document.getElementById('root')).render(
    // Message()
    // <Message/>

    reactElement

    // Message
    // <App />


)
