import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
    
    var payload = {
        source: action.actionType,
        action: action.content
    };
    this.dispatch(payload);
};

export default AppDispatcher;