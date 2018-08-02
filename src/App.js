import React, { Component } from 'react';
import './App.css';
import Page1 from './components/Page1';


class App extends Component {
  state ={
    route :'page1',
    component:''
  }
  
  onRouteChange=(route)=>{
    //this.setState({route:route});
    if(route==='page1'){
      this.setState({route:route})
    } 
    else if(route==='page2'){// import page2, return a promise and update the state
        import('./components/Page2').then((Page2)=>{
          // console.log(Page2);
          this.setState({route:route, component:Page2.default}); //ading default because we export it like this
        });
    }
    else if(route==='page3'){// import page3, return a promise and update the state
      import('./components/Page3').then((Page3)=>{
        this.setState({route:route, component:Page3.default});
      });
  }
  }
  render() {

      // if(this.state.route==='page1'){
      //   return  <Page1 onRouteChange={this.onRouteChange}/>
      // } 
      // else if(this.state.route==='page2'){
      //     return  <Page2 onRouteChange={this.onRouteChange}/>
      // }
      // else{
      //   return  <Page3 onRouteChange={this.onRouteChange}/>
      // }
      if(this.state.route === 'page1'){
        return  <Page1 onRouteChange={this.onRouteChange}/>
      }
      else {
        return <this.state.component onRouteChange={this.onRouteChange}/>
      }
  }
}

export default App;
