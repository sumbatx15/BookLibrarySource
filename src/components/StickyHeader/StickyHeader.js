import React, { Component } from 'react';
import SearchBook from '../../components/SearchBook/SearchBook'
import Logo from '../../assets/logo.svg'
import './StickyHeader.css'

class StickyHeader extends Component {
    constructor() {
        super()
        this.state = { isSticky: false }
    }
    componentWillMount() {
        window.onscroll = e => {
            e.preventDefault()
            if (window.pageYOffset >= 1) {
                if(this.state.isSticky) return
                this.setState({ isSticky: true })
                window.scrollTo(0,1)
            }
        }
    }
    render() {
        return (
            <div className={'sticky-header-container ' + (this.state.isSticky ? 'is-header-container-sticky' : '') }>
                <header className={'sticky-header animated fadeIn ' + (this.state.isSticky ? 'is-header-sticky' : '')}>
                    <img className="logo animated zoomInDown" src={Logo} alt="" />
                    <span className="subtitle has-text-white has-shadow animated fadeInUp">Ohh... this is a subtitle react.js</span>
                    <SearchBook store={this.props.store} />
                </header>
            </div>

        )
    }
}

export default StickyHeader;
