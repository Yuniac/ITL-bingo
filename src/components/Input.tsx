import React, { forwardRef, InputHTMLAttributes } from "react";
import { Button } from "./Button";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  onSubmit?: VoidFunction;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <div className="flex flex-col w-full max-w-80 justify-center items-start">
      {props.title ? (
        <label htmlFor={props.id} className="text-s text-center text-sub">
          {props.title}
        </label>
      ) : null}
      <div className="relative w-full flex gap-4">
        <input
          ref={ref}
          className="bg-white p-4 pl-2 rounded-sm placeholder:text-left focus:border-sub focus:outline-none focus:ring-0"
          {...props}
        />
        {props.onSubmit ? (
          <Button loading={false} text="+" onClick={props.onSubmit} />
        ) : null}
      </div>
    </div>
  );
});

Input.displayName = "Input";
