import React from 'react';

const SearchName = React.createClass({
  render: function(){
    return(
      <h3>Search by Name:</h3>
      <input onChange={this.props.onChangeName} type='text' placeholder='search by name' />
      <button className="Submit" onClick={this.props.onSubmit} type='button'>ehflwfhlwhSubmit!</button>
    );
  }
});

export default SearchName;
