import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost() {
      let newTitle = this.get('newTitle');
      let newContent = this.get('newContent') || 'default content';
      alert(newContent);
      let newRecord = this.store.createRecord('post', {
        title: newTitle,
        content: newContent,
        key: "joe.hoskisson"
      });
      newRecord.save();
    },
    readPost() {
      this.store.findRecord('post', 1).then((post) => {
        alert(post.get('title') + ' ' + game.get('id'))
      });
    },
    updatePost(postId, updatedTitle, updatedContent) {
      if(updatedContent === undefined) {
        updatedContent = '';
      }
      let post = this.get('model').findBy('id', postId);
      console.log(post);
      post.set('title', updatedTitle);
      post.set('content', updatedContent);
      post.save().then(function(model) {
        // save worked
      }, function(error) {
        console.log(error);
      });
    },
    deletePost(postId) {
      let post = this.get('model').findBy('id', postId);
      post.destroyRecord();
    }
  }
});
