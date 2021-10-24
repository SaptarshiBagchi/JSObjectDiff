const obj = {
  f_name: "Saptarshi",
  l_name: "Bagchi",
  user_data: {
    address: "Old Address",
    jwt: {
      issue_time: "Today and old",
      new_data: {
        someKey: "This is some new dat",
      },
    },
  },

  previous_data: {
    f_name: "Saptarshi",
    l_name: "test",
    user_data: {
      address: "New Address",
      jwt: {
        issue_time: "Today and old",
        // new_data: {
        //   someKey: "This is old dat",
        // },
      },
    },
  },
};

detectChanges = (currentObject, previous_data) => {
  /**
   * 1. Determine keys
   * 2. Iterate through every key apart from the "previous_data" key
   * 3. if the key is an Object repeat step 1.
   * 4. Check if the current key is differen to the same key in previous_data
   * 5. Perform the adequate delete operations
   */
  const keys = Object.keys(currentObject);

  let i = 0;
  while (i++ < keys.length) {
    if (keys[i - 1] !== "previous_data") {
      if (typeof currentObject[keys[i - 1]] === "object") {
        detectChanges(currentObject[keys[i - 1]], previous_data[keys[i - 1]]);
        //if the returned object is an empty object, remove this as well
        if (Object.keys(currentObject[keys[i - 1]]).length === 0) {
          delete currentObject[keys[i - 1]];
        }

        //just for cases where the new data might have extra fields than previous data (works for schema changes)
        if (
          previous_data[keys[i - 1]] &&
          Object.keys(previous_data[keys[i - 1]]).length === 0
        ) {
          delete previous_data[keys[i - 1]];
        }

        //A condition needs to be added to check whether previous_dat[keys[i-1]] even has a key
      } else if (previous_data && currentObject) {
        if (currentObject[keys[i - 1]] === previous_data[keys[i - 1]]) {
          delete currentObject[keys[i - 1]];
          delete previous_data[keys[i - 1]];
        }
      }
    }
  }
};

detectChanges(obj, obj.previous_data);
console.log(JSON.stringify(obj));
