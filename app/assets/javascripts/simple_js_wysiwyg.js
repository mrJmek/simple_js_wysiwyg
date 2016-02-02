var inputTextArea;

window.onload = function initTextEditor() {
  var styleButton = document.getElementsByClassName("textStyle");
  var styleSelector = document.getElementsByClassName("textStyleSelector");

  inputTextArea = document.getElementById("textBox");

  setupListener(styleButton, 'click');
  setupListener(styleSelector, 'change');
}

function setupListener(element, action) {
  for (i = 0; i < element.length; i++) {
    element[i].addEventListener(action, getStyleParams, false);
  }
}

function getStyleParams() {
  var formatCommand, formatValue;
  formatCommand = this.getAttribute("data-format-command");
  formatValue = this.value;
  formatText(formatCommand, formatValue);
}

function formatText(command, value) {
  document.execCommand(command, false, value);
  inputTextArea.focus();
}
