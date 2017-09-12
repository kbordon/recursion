$(document).ready(function() {
  initialDoot();
});


function initialDoot() {
  $("li").click(function () {
    $(this).after('<ul><li>Boop</li></ul>');
    var childDoot = $(this).next("ul").children("li").last();
    childDoot.click(function() {
      recursiveDoot(childDoot);
    });
  });
}

function recursiveDoot(childDoot) {
  childDoot.after('<ul><li>Boop</li></ul>');
  var nextChild = childDoot.next("ul").children("li").last();

  nextChild.click(function() {
    recursiveDoot(nextChild);
  });
}
