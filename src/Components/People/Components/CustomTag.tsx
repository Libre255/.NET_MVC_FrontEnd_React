import React, { LegacyRef } from 'react'
import { Dropdown, InputGroup } from 'react-bootstrap'
import styles from '../CSS/PersonForm.module.css';

type CustomToggleProps = {
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  };
const CustomTag :React.FC = () => {
    const Tagstyle:string = `${styles.Tags} d-flex justify-content-center align-items-center `;

    const CustomToggle = React.forwardRef(({ children, onClick }:CustomToggleProps, ref:LegacyRef<HTMLDivElement> | undefined) => (
        <div
            className={Tagstyle}
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
          &#x25bc;
        </div>
      ));
      
  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown >
            <Dropdown.Toggle as={CustomToggle}  >
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </InputGroup>
  )
}

export default CustomTag 