const getDataFromLocalStorage = () => {
  const data = localStorage.getItem("bookings");
  if (data) {
    return JSON.parse(data);
  }
  return [];
};

const saveDataOnLocalStorage = (id) => {
  const data = getDataFromLocalStorage();
  if (data.includes(id)) {
    return false;
  } else {
    data.push(id);
    localStorage.setItem("bookings", JSON.stringify(data));
    return true;
  }
};

const removeDataFromLocalStorage = (id) => {
  const data = getDataFromLocalStorage();
  const newData = data.filter((bookingId) => bookingId !== id);
  localStorage.setItem("bookings", JSON.stringify(newData));
};

export {
  getDataFromLocalStorage,
  saveDataOnLocalStorage,
  removeDataFromLocalStorage,
};
