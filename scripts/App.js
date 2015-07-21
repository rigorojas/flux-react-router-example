import React, { PropTypes } from 'react';
import Searchform from './components/Searchform';
import DocumentTitle from 'react-document-title';

export default class App {
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
