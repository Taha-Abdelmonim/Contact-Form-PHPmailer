let aullInput = document.querySelectorAll("input");
const checkValid = () => {
  let result = false;
  aullInput.forEach((ele) => {
    if (ele.value.length < 1) {
      result = false;
    } else {
      result = true;
    }
  });
  return result;
};
document.forms[0].onsubmit = (e) => {
  if (checkValid()) {
    return true;
  } else {
    e.preventDefault();
  }
};
