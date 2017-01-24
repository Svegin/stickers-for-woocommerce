// function assembles html element
function assembleSpan() {
      const prBook = document.createElement('span');
      prBook.className='sticker soldout_ribbon_right pos_right';
      const txt_prBook = document.createTextNode('Печатное издание');
      prBook.append(txt_prBook);
      return prBook;
}
// get className what we need
const books = document.querySelectorAll('li.pa_varient_of_book-printed_book, div.pa_varient_of_book-printed_book .one-second.product_image_wrapper');
console.log('trashItem',books);

// insert html element for each className
for (var i = 0; i < books.length; i++) {
  const spanString = assembleSpan();
  books[i].appendChild(spanString);
}
