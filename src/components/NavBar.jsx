import React from 'react'
import './NavBar.css'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="app-name">
                    <h3>Online Mobiles App</h3>
                </div>
                <div className="search-bar">
                    <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
        )
    }
}

export default NavBar;