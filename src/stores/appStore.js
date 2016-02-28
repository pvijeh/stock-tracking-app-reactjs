import AppDispatcher from '../core/Dispatcher'; 
import EventEmitter from 'eventemitter3'; 
import assign from 'object-assign'; 

let _popupState = '',
_newStockItem = {}; 

class AppStoreProto extends EventEmitter {

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback, context) {
        this.on('change', callback, context); 
    }

    removeChangeListener(callback, context) {
        this.removeListener('change', callback, context); 
    }

} 

export const AppStorePopup = new AppStoreProto();

AppStorePopup.sendPopupState = function (){
    return _popupState; 
}


export const AppStoreNewItem = new AppStoreProto();

AppStoreNewItem.sendNewStockItem = function (){           
        return _newStockItem; 
}


AppStorePopup.dispatchToken = AppDispatcher.register(function (payload) {

    switch(payload.source){

        case 'display-popup':
        _popupState = payload.action;
        AppStorePopup.emitChange();
        break;
        case 'add-stock-item':
        _newStockItem = payload.action; 
        AppStoreNewItem.emitChange(); 
        break;
    }

});

