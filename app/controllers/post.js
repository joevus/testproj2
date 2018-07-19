import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createPost() {
      let newPost = this.get('newPost');
      let newRecord = this.store.createRecord('post', {
        title: newPost
      });
      newPost.save();
    },
    readPost() {
      this.store.findRecord('post', 1).then((post) => {
        alert(post.get('title') + ' ' + game.get('id'))
      });
    },
    updatePost() {
      let updatedTitle = this.get('updatedTitle');
      let post = this.get('model').findBy('id', '1');
      post.set('title', updatedTitle);
      post.save();
    },
    destroyPost() {
      let destroyId = this.get('destroyId');
      let post = this.get('model').findBy('id', destroyId);
      post.destroyRecord;
    }
  }
});
