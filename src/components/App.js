import React from 'react';
import TopicsSearch from './TopicsSearch';

class App extends React.Component { 
    state = {value:null};  

    handleChange = (newValue) => {
        this.setState({value:newValue});
    }

    render() {
        return (
            <div className="ui container">     
                <TopicsSearch />
            </div>
        );
    }
}
export default App;