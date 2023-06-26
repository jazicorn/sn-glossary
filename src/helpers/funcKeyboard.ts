// Keyboard Help Functions

import { KeyboardEvent } from "react";

export const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent) => {
    const target = e.target as HTMLInputElement
    if (e.key === "Enter") {
      target.blur()
    }
};
  
export const handleKeyEnterClear = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    if (e.key === "Enter") {
      target.value = '';
    }
  };

export const handleKeyExit = (e: React.KeyboardEvent<HTMLInputElement> | React.KeyboardEvent) => {
const target = e.target as HTMLInputElement
if (e.key === "Escape") {
    target.blur()
}
}