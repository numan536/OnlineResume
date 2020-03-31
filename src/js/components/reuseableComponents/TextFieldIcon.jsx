import React from "react";
import classnames from "classnames";
import { string, func, bool } from "prop-types";

const TextFieldIcon = ({
  name,
  onChange,
  placeholder,
  value,
  error,
  info,
  disabled,
  type,
  icon
}) => {
  return (
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} />
          </span>
        </div>
        <input
          type={type}
          onChange={onChange}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error,
            "form-control form-control-lg": !error
          })}
          placeholder={placeholder}
          name={name}
          value={value}
          disabled={disabled}
        />
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextFieldIcon.defaultProps = {
  type: string
};

TextFieldIcon.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  info: string,
  error: string,
  onChange: func.isRequired,
  disabled: bool
};
export default TextFieldIcon;
