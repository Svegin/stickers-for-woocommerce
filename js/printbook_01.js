function assembleSpan() {
      const prBook = document.createElement('span');
      prBook.className='sticker soldout_ribbon_right pos_right';
      const txt_prBook = document.createTextNode('Печатное издание');
       return prBook.append(txt_prBook);
       console.log(prBook);
}


const books = document.querySelect
orAll('.pa_varient_of_book-printed_book');
// array posts keeps id of print books on page
// console.log(books);

if (books.length === 0) {
  console.log('bookList empty');
} else {
    var posts =[];
    for (var i = 0; i < books.length; i++) {
      posts[i]= Array.from(books[i].className.split(' ',1));
    }
    console.log('posts', posts);
}

const prBook = document.createElement('span');
prBook.className='sticker soldout_ribbon_right pos_right';
const txt_prBook = document.createTextNode('Печатное издание')
prBook.append(txt_prBook);

console.log(prBook);

for (var i = 0; i < posts.length; i++) {
  let x = posts[i].toString();
  console.log('x= ', x);
  document.querySelector('.pa_varient_of_book-printed_book').appendChild(prBook);
}
