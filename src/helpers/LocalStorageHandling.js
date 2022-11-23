// Function for set user to local storage
const setUserToLocal = (data) => {
  try {
    localStorage.setItem("userLogin", JSON.stringify(data));
  } catch (err) {
    return err;
  }
};

// Function for get user from local storage
const getUserFromLocal = () => {
  try {
    const loginUser = localStorage.getItem("userLogin");
    const {
      authentication,
      token,
      data: { id, fullName, userType },
    } = JSON.parse(loginUser);

    return {
      authentication,
      token,
      id,
      fullName,
      userType,
    };
  } catch (err) {
    return err;
  }
};

// Function for set chat data to local storage
const setChatDataToLocal = (data) => {
  try {
    localStorage.setItem("chatData", JSON.stringify(data));
  } catch (err) {
    return err;
  }
};

// Function for get chat data from local storage
const getChatDataFromLocal = () => {
  try {
    let data = JSON.parse(localStorage.getItem("chatData"));
    if (data) {
      return data;
    } else {
      return [];
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  setUserToLocal,
  setChatDataToLocal,
  getUserFromLocal,
  getChatDataFromLocal,
};
