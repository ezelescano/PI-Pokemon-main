export const validateForm = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z]+$/.test(input.name)) {
      errors.name = "Name must be plain text";
    }
    if (!input.image) {
      errors.image = "Image is required";
    } else if (
      !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
        input.image
      )
    ) {
      errors.image = "An URL of an image is required";
    }
  
    if (!input.type1 || input.type1 === "type1") {
      errors.type1 = "Type can not be empty";
    }
    if (input.type2 === "type2") {
      errors.type2 = "Type can not be empty";
    }
    if (!input.height) {
      errors.height = "Height is required";
    } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.height)) {
      errors.height = "Height must be between 1 and 1000";
    }
    if (!input.weight) {
      errors.weight = "Weight is required";
    } else if (!/^([1-9]\d{0,2}|1000)$/.test(input.weight)) {
      errors.weight = "Weight must be between 1 and 1000";
    }
  
    if (!input.hp) {
      errors.hp = "Hp is required";
    } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
      errors.hp = "Hp must be between 1 and 255";
    }
    if (!input.attack) {
      errors.attack = "Attack is required";
    } else if (
      !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)
    ) {
      errors.attack = "Attack must be between 1 and 255";
    }
    if (!input.defense) {
      errors.defense = "Defense is required";
    } else if (
      !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)
    ) {
      errors.defense = "Defense must be between 1 and 255";
    }
    if (!input.speed) {
      errors.speed = "Speed is required";
    } else if (
      !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)
    ) {
      errors.speed = "Speed must be between 1 and 255";
    }
  
    return errors;
  };

  export default validateForm;