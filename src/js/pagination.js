import Tui from 'tui-pagination';
import './pagination.css';

class Pagination {
  constructor(totalItems, itemsPerPage, buttonHolderID) {
    this.totalItems = totalItems;
    this.itemsPerPage = itemsPerPage;
    this.buttonHolderID = buttonHolderID;
  }

  handler = null;
  buttonHolder = null;

  create() {
    this.buttonHolder = document.getElementById(this.buttonHolderID);
    this.handler = new Tui(this.buttonHolder, {
      totalItems: this.totalItems,
      itemsPerPage: this.itemsPerPage,
      visiblePages: 5,
      centerAlign: true,
    });
  }

  reset() {
    if (this.handler){
      this.handler = null;
      this.buttonHolder.innerHTML = '';
      this.buttonHolder = null;
    }
  }
}

// ***How to use?***
//
// *Create new instation of Pagination class
// examplePagination = new Pagination(totalItems, itemsPerPage, buttonHolderID);
//
// *Use create method to add handler
// examplePagination.create();
//
// *Use handler method on with parameter 'afterMove' and callback function to connect with fetch function and logic
// examplePagination.handler.on('afterMove', function (eventData) {
//   gallery.innerHTML = '';
//   actualPage = eventData.page;
//   fetchPhotos(currentSearchName, actualPage);
//   return;
// });
//
//*If U would like to remove handler use just reset method :)
//GOOD LUCK MY TEAM! <3

export default Pagination;
