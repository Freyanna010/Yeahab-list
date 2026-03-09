import { useState, type ReactNode } from 'react';
import clsx from 'clsx';

import classes from './Accordion.module.scss';
import acc_down from '../../assets/acc_down.png';
import acc_up from '../../assets/acc_up.png';

interface AccordionProps {
  title: string | ReactNode;
  children: ReactNode;
  className?: string;
}
const Accordion = ({ title, children, className }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className={clsx(classes.wrapper, className)}>
      <div className={classes.header} onClick={toggleAccordion}>
        <div className={classes.title}>{title}</div>
        <button className={classes.icon}>
          {isOpen ? <img src={acc_down} /> : <img src={acc_up} />}
        </button>
      </div>

      {isOpen && <div className={classes.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
