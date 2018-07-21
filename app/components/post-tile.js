import Component from '@ember/component';

export default Component.extend({
  actions: {
    handleUpdate(postId) {
      let updatedTitle = this.get('updatedTitle');
      let updatedContent = this.get('updatedContent');
      this.get('onUpdate')(postId, updatedTitle, updatedContent);
    },
    destroyPost() {
      let destroyId = this.get('destroyId');
      let post = this.get('model').findBy('id', destroyId);
      post.destroyRecord;
    }
  }

});
