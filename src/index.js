import Header from './header.js';
import Footer from './footer.js';
import snapshot from './debug_snapshot.png';

new Header();
new Footer();
console.log(snapshot);

let image = new Image();
image.src = snapshot;

let root = document.getElementById("root");
root.append(image);
