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
    updatePost() {
      let updatedTitle = this.get('updatedTitle');
      let updatedContent = this.get('updatedContent');
      let post = this.get('model').findBy('id', '3fdbfa60-8b91-11e8-8433-317a693cba8a');
      post.set('title', updatedTitle);
      post.set('conent', updatedContent);
      post.save();
    },
    destroyPost() {
      let destroyId = this.get('destroyId');
      let post = this.get('model').findBy('id', destroyId);
      post.destroyRecord;
    },
    showPost(post) {
      alert(post.id);
    }
  }
});
