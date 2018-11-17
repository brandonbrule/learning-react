import { Config } from '../config/Config.js';

// Sets a top level object from app name config
if(!localStorage.getItem(Config.app.name)){
  const obj = {};
  localStorage.setItem(Config.app.name, JSON.stringify(obj));
}

export default {
    exists(key){
      const obj = JSON.parse(localStorage.getItem( Config.app.name));
      if(obj[key]){
        return true;
      } else{
        return false;
      }
    },

    set(key, value) {
      console.log('set() ' + key + ' : ' + value);
      const obj = JSON.parse(localStorage.getItem( Config.app.name));
      obj[key] = value;
      localStorage.setItem(Config.app.name, JSON.stringify( obj ) );
    },

    get(key) {
      //console.log('get: ' + key);
      const obj =  JSON.parse(localStorage.getItem( Config.app.name ) );
      return obj[key];
    },

    remove(key) {
      const obj =  JSON.parse(localStorage.getItem( Config.app.name ) );
      delete obj[key];

      localStorage.setItem(Config.app.name, JSON.stringify( obj ) );
    }
}
