import React from 'react';
import classes from './ChoresList.module.css';

class ChoresList extends React.Component {
   render() {
      const chores = ["Do Dishes", "Clean Floors", "Fight a Dragon"];
      return (
         <div>
            <h2 className = {classes.choresHeading}>Chores List</h2>
               <ol>
                  <li className = {classes.choresText}>{chores[0]}</li>
                  <li className = {classes.choresText}>{chores[1]}</li>
                  <li className = {classes.choresText}>{chores[2]}</li>
               </ol>
         </div>
      );
   }
}

export default ChoresList;