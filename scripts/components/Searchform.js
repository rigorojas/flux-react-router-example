console.log("Searchform.js");
import React, { Component, PropTypes, findDOMNode } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

const DEFAULT_LOGIN = 'rigorojas';

let Searchform = class Searchform extends Component {
    static propTypes = {
        params: PropTypes.shape({
            login: PropTypes.string,
            name: PropTypes.string
        })
    };

    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    // source: https://github.com/gaearon/react-pure-render
    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleGoClick = this.handleGoClick.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.state = {
            loginOrRepo: this.parseFullName(props.params)
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            loginOrRepo: this.parseFullName(nextProps.params)
        });
    }

    render() {
        return (
            <div className='Searchform'>
                <div>Username/repo:</div>
                <input size='45'
                    ref='loginOrRepo'
                    onKeyUp={this.handleKeyUp}
                    onChange={this.handleOnChange}
                    value={this.state.loginOrRepo}
                />
                <button onClick={this.handleGoClick}>Go!</button>
            </div>
        );
    }

    handleKeyUp(e) {
        if (e.keyCode === 13) {
            this.handleGoClick();
        }
    }

    handleOnChange() {
        this.setState({
            loginOrRepo: this.getInputValue()
        });
    }

    handleGoClick() {
        this.context.router.transitionTo(`/${this.getInputValue()}`);
    }

    getInputValue() {
        return findDOMNode(this.refs.loginOrRepo).value;
    }

    parseFullName(params) {
        if (!params.login) {
            return DEFAULT_LOGIN;
        }
        return params.login + (params.name ? '/' + params.name : '');
    }
}

export default Searchform;
