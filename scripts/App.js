console.log("App.js >>>>>>>>>>>>>>>> start");
import React, { PropTypes } from 'react';
import Searchform from './components/Searchform';
import DocumentTitle from 'react-document-title';

let App = class {
    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <DocumentTitle title='Sample App'>
                <div className='App'>
                    <Searchform {...this.props} />
                    <hr />
                    {this.props.children}
                </div>
            </DocumentTitle>
        );
    }
}
console.log("App.js <<<<<<<<<<<<<<<<<< end");
export default App;
