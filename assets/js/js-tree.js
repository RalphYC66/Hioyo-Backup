$(document).ready(function() {
    $('#tree').jstree({
      'core' : {
        'data' : [
          {
            "text" : "Root node",
            "children" : [
              { "text" : "Child node 1" },
              { "text" : "Child node 2" }
            ]
          }
        ]
      }
    });
  });