import React, { LegacyRef } from "react";
import { Dropdown } from "react-bootstrap";
import styles from '../../../CSS/PersonForm.module.css';
import PlusIcon from "./PlusIcon";

type CustomToggleProps = {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  };
  
export const TagInputBoxStyle:string = `${styles.Tags} d-flex justify-content-center align-items-center`;

export const CustomToggle = React.forwardRef(({ children, onClick }:CustomToggleProps, ref:LegacyRef<HTMLDivElement> | undefined) => (
    <div
      className={TagInputBoxStyle}
      ref={ref}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {children}
    </div>
));

export const CustomToggleBtn:React.FC = ()=>(
  <Dropdown.Toggle as={CustomToggle}>
    <PlusIcon/>
  </Dropdown.Toggle>
)