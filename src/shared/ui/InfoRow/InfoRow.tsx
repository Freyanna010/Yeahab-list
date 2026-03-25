import { Flex } from '@/shared/ui/Flex';

import classes from './InfoRow.module.scss';

interface InfoRowProps {
  label: string;
  value: string | number;
}

const InfoRow = ({ label, value }: InfoRowProps) => (
  <Flex justify="space-between" align="center" className={classes.infoItem}>
    <span>{label}</span>
    <span className={classes.value}>{value}</span>
  </Flex>
);

export default InfoRow;
