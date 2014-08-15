/**
 * Copyright 2014, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
'use strict';

var util = require('util'),
    EventEmitter = require('events').EventEmitter,
    CHANGE_EVENT = 'change';

/**
 * @class BaseStore
 * @param dispatcher The dispatcher interface
 * @constructor
 */
function BaseStore(dispatcher) {
    this.dispatcher = dispatcher;
    if (this.initialize) {
        this.initialize();
    }
}

util.inherits(BaseStore, EventEmitter);

/**
 * Add a listener for the change event
 * @param {Function} callback
 */
BaseStore.prototype.addChangeListener = function(callback) {
  this.on(CHANGE_EVENT, callback);
};

/**
 * Remove a listener for the change event
 * @param {Function} callback
 */
BaseStore.prototype.removeChangeListener = function(callback) {
  this.removeListener(CHANGE_EVENT, callback);
};

/**
 * Emit a change event
 */
BaseStore.prototype.emitChange = function() {
  this.emit(CHANGE_EVENT);
};

module.exports = BaseStore;