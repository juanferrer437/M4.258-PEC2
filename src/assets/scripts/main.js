/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import 'bootstrap';
import "cookieconsent";

import DataTable from 'datatables.net-dt';
 

 

/**
 * Write any other JavaScript below
 */


let table = new DataTable('#myTable', {
  language: {
    url:'https:////cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
}
});

let table2 = new DataTable('#myTable2', {
  language: {
    url:'https:////cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
}
});


document.querySelector("#logo").addEventListener("click",function() {
location.href="index.html";
});


window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#1d8a8a"
      },
      "button": {
        "background": "#62ffaa"
      }
    },
    "content": {
      "message": "Esta web utiliza cookies para asegurarle la mejor experiencia.",
      "dismiss": "Vale",
      "link": "Aprender más"
    }
  });

  
