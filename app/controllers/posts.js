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
    updatePost(post) {
      let updatedTitle = this.get('updatedTitle');
      let updatedContent = this.get('updatedContent');
      //let post = this.get('model').findBy('id', post.id);
      post.set('title', updatedTitle);
      post.set('content', updatedContent);
      post.save();
    },
    destroyPost() {
      let destroyId = this.get('destroyId');
      let post = this.get('model').findBy('id', destroyId);
      post.destroyRecord;
    }
  }
});
