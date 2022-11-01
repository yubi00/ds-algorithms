//object literal pattern
let myModule = {
  data: [],
  render: () => {},
  add: () => {},
  remove: () => {}
};

//module pattern
let modulePattern = (() => {
  let _data = [];
  let _render = () => {
    //click listener for _add and _remove
  };

  let _add = () => {
    _data.push("something");
  };

  let _remove = () => {
    _data.pop();
  };

  return {
    render: _render
  };
})();

modulePattern.render();
