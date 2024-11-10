import { Input } from "@nextui-org/react";

import myValidator from "@/pages/api/classes/myValidator";
export const InputComponent = (input, onInputChange) => {
  const validator = new myValidator();
  // TODO: add validator

  console.log(onInputChange);

  input = input.input;

  return (
    <Input
      type="text"
      placeholder={input ? input : "Please Enter Content-ID"}
      onInput={(e) => onInputChange(validator.clean(e.target.value))}
    />
  );
};
