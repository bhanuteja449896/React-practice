


function Hello({name}){
    return <p>Hello {name}</p>
}

function HigerOrderComponent(WrappedComponent){
    return function enhanced(props){
        return <WrappedComponent {...props} name={Ajay}/>
    }
}