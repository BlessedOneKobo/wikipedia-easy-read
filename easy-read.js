const content = document.getElementById('content');
const navigation = document.getElementById('mw-navigation');

if (navigation) {
  navigation.remove();
}

if (content) {
  // Clean up links
  const anchorElementCollection = content.getElementsByTagName('a');

  Array.prototype.forEach.call(anchorElementCollection, elm => {
    elm.style.color = 'inherit';
    elm.style.textDecoration = 'underline';
  });

  // Change content margin
  content.style.width = '80%';
  content.style.margin = '0 auto';
}
