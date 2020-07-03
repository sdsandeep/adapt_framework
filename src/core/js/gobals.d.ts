import Backbone = require("backbone");
declare global {

  interface Window {
    __loadScript: Function;
  }

}
