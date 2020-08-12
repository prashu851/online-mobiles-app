import React from 'react'
import './NavBar.css'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
class NavBar extends React.Component {
    render(){
        return(
            <div className="nav-bar">
                <div className="app-name">
                    <h3>Online Mobiles App</h3>
                </div>
                <div className="search-bar">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                    placeholder="Search for Mobiles"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className="cart">
                    <IconButton>
                        <ShoppingCartIcon />
                    </IconButton>
                </div>
                <div className="login-btn">
                    <Button color="default">Login</Button>
                </div>
            </div>
        )
    }
}

export default NavBar;