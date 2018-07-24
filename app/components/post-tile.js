import Component from '@ember/component';

export default Component.extend({
  actions: {
    handleFileLoad(event) {
      let file = event.target.files[0];
      this.get('onFileLoad')(file);
    },
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
