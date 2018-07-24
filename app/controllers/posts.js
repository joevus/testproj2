import Controller from '@ember/controller';

export default Controller.extend({
  // for sorting posts.
  byTitle: ['title'],
  sortedByTitle: Ember.computed.sort('model', 'byTitle'),

  byCreatedAt: ['created_at'],
  sortedByCreatedAt: Ember.computed.sort('model', 'byCreatedAt'),

  isSortByCreatedAt: true,

  newPostFileData: null,

  updatedPostFileData: null,

  actions: {
    toggleSort(sortOption) {
      if(sortOption === "date") {
        this.set('isSortByCreatedAt', true);
      } else {
        this.set('isSortByCreatedAt',false);
      }
    },

    newPostFileLoad(event) {
      let file = event.target.files[0];
      console.log("triggered fileLoad:" );
      console.log(file);
      const reader = new FileReader();
      let fileData;
      // maybe see if can put filePath in database later
      // let filePath;

      reader.onload = () => {
        fileData = reader.result;
        this.newPostFileData = fileData;
        console.log(this.newPostFileData);
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

    // For posts that are being edited
    updateFileLoad(file) {
      const reader = new FileReader();
      let fileData;
      // maybe see if can put this in database later
      // let filePath;
      reader.onload = () => {
        fileData = reader.result;
        this.updatedPostFileData = fileData;
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

    createPost() {
      let self = this;
      let newTitle = this.get('newTitle');
      let newContent = this.get('newContent') || 'default content';
      let attachment = this.get('newPostFileData');

      let newRecord = this.store.createRecord('post', {
        title: newTitle,
        content: newContent,
        attachment: attachment,
        key: "joe.hoskisson"
      });
      newRecord.save();

    },
    readPosts() {
      this.store.findAll('post');
    },
    updatePost(postId, updatedTitle, updatedContent) {
      if(updatedContent === undefined) {
        updatedContent = '';
      }
      let post = this.get('model').findBy('id', postId);
      console.log(post);
      post.set('title', updatedTitle);
      post.set('content', updatedContent);
      post.set('attachment', this.updatedPostFileData);
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
