var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EventEmitter = require('events').EventEmitter;
var React = require('react/addons');

var CHANGE_EVENT = "change";


var _adminNewOrder = [];

function _addItem(item){
  console.log("Dashboard");
}

/**
 * handle user info
 * @type {Array}
 */



var AppStore = React.addons.update(EventEmitter.prototype, {$merge: {
  emitChange:function(){
    this.emit(CHANGE_EVENT);
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  setAdminNewOrder: function(params){
    _adminNewOrder = params;
    console.log(_adminNewOrder);
  },
  getAdminNewOrder: function() {
    return _adminNewOrder;
  },


  dispatcherIndex:AppDispatcher.register(function(payload){
    var action = payload.action; // this is our action from handleViewAction
    switch(action.actionType){
      case AppConstants.GET_ADMIN_NEW_ORDER:
      AppStore.setAdminNewOrder(action.data);
      break;



      //case AppConstants.REFRESH_ORDER:

      /* SHORT USAGE BOILERPLATE (EXAMPLE - uncomment if required)
      case AppConstants.ADD_ITEM:
        _addItem(payload.action.item);
        break;
      */
    }
    AppStore.emitChange();

    return true;
  })
}});

module.exports = AppStore;