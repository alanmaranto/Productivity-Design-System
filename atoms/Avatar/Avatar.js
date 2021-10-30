import React from "react";
import PropTypes from "prop-types";
import Picture from "../Picture";
import { mapSize } from "./helpers";
import styles from "./Avatar.module.css";
import { options } from "./constants";
import withStyles from "../../hoc/withStyles";

const Avatar = ({ src, size, styles }) => {
  return (
    <div className={styles("avatar")}>
      <Picture
        src={src}
        width={mapSize(size)}
        height={mapSize(size)}
        isRounded
      />
    </div>
  );
};

Avatar.defaultProps = {
  size: "md",
};

Avatar.propTypes = {
  size: PropTypes.oneOf(options.sizes).isRequired,
  src: PropTypes.string.isRequired,
  styles: PropTypes.func.isRequired,
};

export default withStyles(styles)(Avatar);
