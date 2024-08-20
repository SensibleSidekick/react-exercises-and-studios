import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    let authorLink ='https://gatherforbread.com/easy-perfect-yeast-bread/';
    let authorPhoto = 'https://gatherforbread.com/wp-content/themes/foodiepro%202/images/Melanie.png';
    let authorName = 'Melanie Kathryn';

    return(
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "A woman in her 30's looking straight at the camera with a smile." className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Gather for Bread</a> 
            </div>
     </div>
    )
}

class RecipeDescription extends React.Component {
   render() {
        return(
            <div> 
                <div>
                    <h1>Easy Perfect Yeast Bread</h1>
                    <p>An easy, beginner recipe for baking your own yeast bread!</p>
                </div>
                <RecipeAuthor />
            </div>
        )
    }
}

export default RecipeDescription