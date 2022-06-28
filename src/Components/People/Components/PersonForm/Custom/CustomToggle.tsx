import React, { LegacyRef } from "react";
import styles from '../../../CSS/PersonForm.module.css';

type CustomToggleProps = {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  };
  
export const TagInputBoxStyle:string = `${styles.Tags}`;
export const CustomToggle = React.forwardRef(({ children, onClick }:CustomToggleProps, ref:LegacyRef<HTMLDivElement> | undefined) => (
    <div
      className={TagInputBoxStyle}
      ref={ref}
      onClick={(e) => {
        onClick(e);
        // e.preventDefault();
      }}
    >
      {children}
    </div>
  ));