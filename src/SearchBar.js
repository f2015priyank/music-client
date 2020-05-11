 import React from 'react';
 import './App.css';

 class SearchBar extends React.Component {
     state = { term: '' };

     onFormSubmit = (event) => {
         event.preventDefault();
         this.props.onSubmit(this.state.term);
     }
     render() {
         return ( <
             div className = "card card-body mt-3" >
             <
             form onSubmit = { this.onFormSubmit } >
             <
             div className = "row" >
             <
             label className = "col-sm-2 col-form-label" > Search Music.. < /label> <
             input className = "col-sm-10 form-control form-control-lg"
             type = "text"
             value = { this.state.term }
             onChange = {
                 (e) => this.setState({ term: e.target.value })
             }
             /> < /
             div > <
             /form> < /
             div >
         );
     }
 }

 export default SearchBar;