import uuid from "uuid";

const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text,
    id: uuid.v4()
  }
}

const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id
  }
}

const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id
  }
}


export {ADD_COMMENT};
export {addComment};

export {EDIT_COMMENT};
export {editComment};

export {REMOVE_COMMENT};
export {removeComment};

export {THUMB_UP_COMMENT};
export {thumbUpComment};

export {THUMB_DOWN_COMMENT};
export {thumbDownComment};
