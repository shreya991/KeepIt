import React from 'react'
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

export const Header = () => {
    return (
        <>
            <div>
                <nav className="navbar navbar-dark bg-warning" >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><EmojiObjectsIcon/> Keep It</a>
                    </div>
                </nav>

            </div>
        </>
    )
}
