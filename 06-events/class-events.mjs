import { error } from 'console';
import EventEmitter from 'events';

class Post extends EventEmitter {
  constructor(author, text) {
    super();
    this.author = author;
    this.text = text;
    this.likesQty = 0;
    this.on('likePost', (userName) => {
      console.log(`${userName} like your post`);
    });
    this.on('err', (err) => {
      console.error(err);
    });
  }
  like(userName) {
    if (!userName) {
      return this.emit('err', new Error('No userName'));
    }
    this.likesQty += 1;
    this.emit('likePost', userName);
  }
}
const myPost = new Post('Vlad', 'My great post!!!');
console.log(myPost.author);
console.log(myPost.text);
console.log(myPost.likesQty);
myPost.like('alice');
myPost.like();
setTimeout(() => myPost.like('den'), 1000);
setTimeout(() => myPost.like('egor'), 3000);
myPost.like('alex');
setTimeout(() => console.log(myPost.likesQty), 5000);
