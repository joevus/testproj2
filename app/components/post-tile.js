import Component from '@ember/component';

export default Component.extend({
  actions: {
    handleUpdate(postId) {
      let updatedTitle = this.get('updatedTitle');
      let updatedContent = this.get('updatedContent');
      this.get('onUpdate')(postId, updatedTitle, updatedContent);
    },
    handleDelete(postId) {
      this.get('onDelete')(postId);
    }
  }

});
