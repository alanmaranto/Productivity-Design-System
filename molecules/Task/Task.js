import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { options } from './constants';
import withStyles from '../../hoc/withStyles';

import Card from '../../atoms/Card';
import Check from '../../atoms/Check';
import Spacer from '../../layout/Spacer';
import Paragraph from '../../atoms/Paragraph';
import Icon from '../../atoms/Icon';

const handleClick =
  ({ isChecked, setIsChecked, isPending, onCheck }) =>
  () => {
    if (!isPending) {
      setIsChecked(!isChecked);
      onCheck(!isChecked);
    }
  };

export const Task = ({
  children,
  getStyles,
  defaultIsChecked,
  onCheck,
  onDelete,
}) => {
  const [isChecked, setIsChecked] = useState(defaultIsChecked);
  return (
    <Card onClick={handleClick({ isChecked, setIsChecked, onCheck })}>
      <div className={getStyles('task')}>
        <div className={getStyles('content')}>
          <Check checked={isChecked} />
          {/* <Spacer.Vertical size="xs" /> */}
          <Paragraph
            color={isChecked ? 'muted' : 'base'}
            weight="medium"
            isStriked={isChecked}
          >
            {children}
          </Paragraph>
        </div>
        <Spacer.Vertical size="sm" />
        <div onClick={(event) => event.stopPropagation()}>
          <Icon
            name="trash"
            size="sm"
            onClick={onDelete}
            background="highlight"
          />
        </div>
      </div>
    </Card>
  );
};

Task.propTypes = {
  children: PropTypes.node.isRequired,
  getStyles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultIsChecked: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  getStyles: () => {},
  onCheck: () => {},
  onDelete: () => {},
  defaultIsChecked: false,
};

export default withStyles(styles)(Task);
