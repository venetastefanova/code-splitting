import React, {Component} from 'react';


export default function asyncComponent (importComponent){
    class AsyncComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                component:null
            }
        }

       async componentDidMount(){ // same as the one in App.ks
            const {default:component} = await importComponent(); // gets the component default and adds it to the state
            this.setState({
                component:component
            })
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component { ...this.props}/> : null
        }
    }

    return AsyncComponent;
}