import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://167.99.111.228:4000',
  urlForUpdateRecord(id, modelName, snapshot) {
    return `${this.host}/posts/${id}?key=joe.hoskisson`;
  }

  // see https://www.emberjs.com/api/ember-data/3.3/classes/DS.Adapter/methods/updateRecord?anchor=updateRecord

  // from a someone's twiddle https://ember-twiddle.com/770987632182082b98346a2b761a4826?fileTreeShown=false&numColumns=3&openFiles=routes.application.js%2Ctemplates.application.hbs%2Cadapters.application.js


  // attempt to force a PUT request when I thought it was a PATCH request
  // turns out it was already a PUT request. jsonapiAdapter uses PATCH I think.

  // updateRecord(store, type, snapshot) {
  //
  //   var data = {};
  //   var serializer = store.serializerFor(type.modelName);
  //
  //   serializer.serializeIntoHash(data, type, snapshot, { includeId: true });
  //   alert(JSON.stringify(data));
  //   var id = snapshot.id;
  //   // var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord', {key: "joe.hoskisson"});
  //   var url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');
  //   url += '?key=joe.hoskisson';
  //   return this.ajax(url, 'PUT', data);
  // }

});
