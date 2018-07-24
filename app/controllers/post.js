import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    fileData: null,
    fileLoad(file) {
      console.log("triggered fileLoad:" );
      console.log(file);
      const reader = new FileReader();
      let fileData;
      // maybe see if can put this in database later
      // let filePath;
      reader.onload = () => {
        fileData = reader.result;
        this.fileData = fileData;
        console.log(this.fileData);
      }

      if (file) {
        // check file size, only continue reading if less than 50kb.
        if(file.size > 50000) {
          alert("Dag yo, you can't upload a file greater than 50kb. The current file will not be uploaded to the server.");
        } else {
          reader.readAsDataURL(file);
        }
      }
    },
    updatePost(postId, updatedTitle, updatedContent) {
      if(updatedContent === undefined) {
        updatedContent = '';
      }
      // let post = this.get('model').findBy('id', postId);
      let post = this.get('model');
      console.log(post);
      post.set('title', updatedTitle);
      post.set('content', updatedContent);
      // include attachment if user uploaded one
      if(this.fileData !== null) {
        post.set('attachment', this.fileData);
      }
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
