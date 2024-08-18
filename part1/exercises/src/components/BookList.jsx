import React from 'react';
import classes from './BookList.module.css';

class BookList extends React.Component {
   render() {

   let pageTitle = "Reading is Fundamental";
   let book1 = "https://prodimage.images-bn.com/pimages/9780060853976_p0_v12_s1200x630.jpg";
   let book2 = "https://m.media-amazon.com/images/I/81UgIZXiolL._AC_UF1000,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/81thdg0KmZL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div className={classes.bookList}>
         <h3 className={classes.bookHeading}>{pageTitle}</h3>
         <img src={book1} alt="Good Omens by Neil Gaiman and Terry Prachett" className = {classes.bookImg1} />
         <img src={book2} alt="Gideon the Ninth by Tamsyn Muir" className = {classes.bookImg2}  />
         <img src={book3} alt="All Systems Read by Martha Wells" className = {classes.bookImg3}  />
      </div>      
   );
}
}

export default BookList;