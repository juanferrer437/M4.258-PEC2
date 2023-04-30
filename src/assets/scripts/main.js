/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import 'bootstrap';
import "@fortawesome/fontawesome-free/js/all";
import "cookieconsent";
/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


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

