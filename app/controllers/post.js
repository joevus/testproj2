import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    updatePost(postId, updatedTitle, updatedContent) {
      if(updatedContent === undefined) {
        updatedContent = '';
      }
      // let post = this.get('model').findBy('id', postId);
      let post = this.get('model');
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
      // let post = this.get('model').findBy('id', postId);
      let post = this.get('model');
      post.destroyRecord();
    }
  }
});
