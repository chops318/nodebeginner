function route(handle, pathname, response, postData) {
  console.log('About to route a req for ' + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](response, postData);
  } else {
    console.log('No request handler for ' + pathname);
    return '404 Not found';
  }
}

exports.route = route;
