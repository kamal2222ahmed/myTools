function formatDate(datefmt) {
  // return window.moment('Thu Apr 23 2015 14:02:06 GMT+0100 (BST)').format(fmt);
  return window.moment(datefmt[0]).format(datefmt[1]);
}

export { formatDate };
