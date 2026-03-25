import classes from './InfoRow.module.scss';

interface InfoRowProps {
  label: string;
  value: string | number;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <div className={classes.continer}>
    <span className={classes.lebel}>{label}</span>
    <span className={classes.value}>{value}</span>
  </div>
);

export default InfoRow;
