/*global $ events */

var DocumentBodyView = function() {};

DocumentBodyView.prototype.initEvents = function() {
  this.subscribers();
};

DocumentBodyView.prototype.subscribers = function() {
  var self = this;

  $.Topic(events.startTextSelection).subscribe(function() {
    self.displayDisabledText();
  });

  $.Topic(events.cancelTextSelection).subscribe(function() {
    self.displayEnabledText();
  });

  $.Topic(events.outsideDocumentMouseDown).subscribe(function() {
    self.disableTextSelection();
  });

  $.Topic(events.outsideDocumentMouseUp).subscribe(function() {
    self.enableTextSelection();
  });
};

DocumentBodyView.prototype.displayDisabledText = function() {
  $('.js-documentBody').addClass('-supressed');
};

DocumentBodyView.prototype.displayEnabledText = function() {
  $('.js-documentBody').removeClass('-supressed');
};

DocumentBodyView.prototype.enableTextSelection = function() {
  $('.js-documentBody').removeClass('-voidselection');
};

DocumentBodyView.prototype.disableTextSelection = function() {
  $('.js-documentBody').addClass('-voidselection');
};