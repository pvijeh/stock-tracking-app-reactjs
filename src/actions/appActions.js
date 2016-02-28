import AppDispatcher from '../core/Dispatcher'; 

// this should be changed to ES6
var AppActions = {
    displayPopup : function (content){
         AppDispatcher.handleViewAction({
          actionType: 'display-popup',
          content: content
        });
    }, 
    addNewStockItem : function (content){
         AppDispatcher.handleViewAction({
          actionType: 'add-stock-item',
          content: content
        });
    }
};

export default AppActions;