export default function() {

  this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  this.timing = 0;      // delay for each request, automatically set to 0 during testing

  this.get('/projects/:id', function(db, request) {  
    let id = request.params.id;

    return {
      data: {
        type: 'project',
        id: id,
        attributes: db.projects.find(id)
      }
    };
  });

  this.get('/projects', function(db, request) {  
    return {
      data: db.projects.all().models.map(attrs => (
        {type: 'project', id: attrs.id, attributes: attrs }
      ))
    };
  });
}
