import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost() {
      let newTitle = this.get('newTitle');
      let newContent = this.get('newContent');
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
      // let updatedTitle = this.get('post.updatedTitle');
      // let updatedContent = this.get('post.updatedContent');
      // let updatedTitle = selectedPost.updatedTitle;
      // let updatedContent = selectedPost.updatedContent;
      // let post = this.get('model').findBy('id', postId);
      let post = this.get('model').findBy('id', postId);
      post.set('title', updatedTitle);
      post.set('content', updatedContent);
      post.save().then(function(model) {
        // save worked
      }, function(error) {
        console.log(error);
      });
    },
    destroyPost() {
      let destroyId = this.get('destroyId');
      let post = this.get('model').findBy('id', destroyId);
      post.destroyRecord;
    }
  }
});
