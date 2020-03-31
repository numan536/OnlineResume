import React from "react";
import classnames from "classnames";
import { string, func, bool } from "prop-types";

const TextFieldBootstrap = ({
  name,
  onChange,
  placeholder,
  value,
  error,
  info,
  disabled,
  type
}) => {
  return (
    <div>
      <div className="form-group">
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
        {info && <small className="form-text text-muted">{info}</small>}
      </div>
    </div>
  );
};
TextFieldBootstrap.defaultProps = {
  type: string
};

TextFieldBootstrap.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  info: string,
  error: string,
  onChange: func.isRequired,
  disabled: bool
};
export default TextFieldBootstrap;
