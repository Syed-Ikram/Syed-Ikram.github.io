import React from "react";

/*const Demo = ()=>{
    return(
        <div id='hello'class='dummy'>
            <h1>Helllo world</h1>
        </div>
    );
}*/
const Demojsx=()=>{
    return(
        React.createElement(
            'div',
            {id:'hello',class:'dummy'},
            React.createElement('h1',null,'hello world')
        )
    );
}
export default Demojsx;
