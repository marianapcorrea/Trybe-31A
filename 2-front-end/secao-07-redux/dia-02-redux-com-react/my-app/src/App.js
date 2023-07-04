import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreator } from './redux/actions';

class App extends Component {
 render() {
    const { dispatch, countState } = this.props;
   return (
     <div>
       <h1>Contador</h1>
        <h2>{ countState }</h2>
       <button onClick={() => dispatch(actionCreator())}>Incrementa 1</button>
       <button onClick={() => dispatch(actionCreator(5))}>Incrementa 5</button>
     </div>
   );
 }
}


//Retorna os valores armazenados na store
const mapStateToProps = (state) => ({
  countState: state.count,
});

export default connect(mapStateToProps)(App);
