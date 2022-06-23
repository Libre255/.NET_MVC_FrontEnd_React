import React, { LegacyRef } from 'react'
import { Button, Dropdown, InputGroup } from 'react-bootstrap'
import styles from '../../CSS/PersonForm.module.css';
import { IPeople } from '../../Ipeople';

type CustomToggleProps = {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
};

const Tagstyle:string = `${styles.Tags} `;
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
  </div>
));
interface Props{
  PersonState:[IPeople, React.Dispatch<React.SetStateAction<IPeople>>]
}
const CustomTag :React.FC<Props> = ({PersonState}) => {
  const [personFormProps, setPersonFormProps] = PersonState;

  const handleSelectTag = (e:any)=> setPersonFormProps(l => ({...l, languages:[...l.languages, e.target.value]}));
  return(
    <InputGroup className="input-group mb-3">
        <InputGroup.Text id="basic-addon1">Language</InputGroup.Text>
        <Dropdown >
            <Dropdown.Toggle as={CustomToggle}>
                {personFormProps.languages.map((t, index)=> <Button className='m-1' key={index}>{t}</Button>)}
            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item onClick={handleSelectTag} as={"button"} value="111">Test1</Dropdown.Item>
                <Dropdown.Item onClick={handleSelectTag} as={"button"} value="222">Test2</Dropdown.Item>
                <Dropdown.Item onClick={handleSelectTag} as={"button"} value="444">Test3</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    </InputGroup>
  )
}

export default CustomTag 