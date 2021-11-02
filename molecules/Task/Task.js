import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Task.module.css";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";

import Card from "../../atoms/Card";
import Check from "../../atoms/Check";
import Spacer from "../../layout/Spacer";
import Paragraph from "../../atoms/Paragraph";
import Icon from "../../atoms/Icon";

const handleClick =
  ({ checked, setChecked, onCheck }) =>
  () => {
    setChecked(!checked);
    onCheck(!checked);
  };

export const Task = ({
  children,
  styles,
  defaultChecked,
  onCheck,
  onDelete,
}) => {
  const [checked, setChecked] = useState(defaultChecked);
  return (
    <Card onClick={handleClick({ checked, setChecked, onCheck })}>
      <div className={styles("task")}>
        <div className={styles("content")}>
          <Check checked={checked} />
          <Spacer.Vertical size="xs" />
          <Paragraph
            color={checked ? "muted" : "base"}
            weight="medium"
            isStriked={checked}
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
  styles: PropTypes.func.isRequired,
  type: PropTypes.oneOf(options.types),
  defaultChecked: PropTypes.bool,
  onCheck: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  styles: () => {},
  onCheck: () => {},
  onDelete: () => {},
  defaultChecked: false,
};

export default withStyles(styles)(Task);
