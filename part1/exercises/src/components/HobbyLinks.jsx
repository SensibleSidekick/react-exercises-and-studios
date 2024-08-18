import React from 'react';
import classes from './HobbyLinks.module.css';

class HobbyLinks extends React.Component {
    render() {
        const hobbyLinks = ["https://www.twitch.tv", "https://www.roll20.net"]

        return (
            <div className={classes.hobby}>
                <h4 className ={classes.hobbyHeading}>Hobbies</h4>
                <a className={classes.hobbyLink} href={hobbyLinks[0]}>Twitch</a> <br></br>
                <a className={classes.hobbyLink} href={hobbyLinks[1]}>Roll 20</a> 
            </div>    
        )

    }
}

export default HobbyLinks;