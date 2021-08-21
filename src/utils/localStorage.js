export const getEventDetails = () => {
  const eventName = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : [];
  const eventName = localStorage.getItem("name")
    ? JSON.parse(localStorage.getItem("name"))
    : [];

  return eventName;
};

export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem("saved_books");
  }
};

export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter(
    (savedBookId) => savedBookId !== bookId
  );
  localStorage.setItem("saved_books", JSON.stringify(updatedSavedBookIds));

  return true;
};
