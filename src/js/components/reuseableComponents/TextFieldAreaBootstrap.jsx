import React from "react";
import { string, func } from "prop-types";
import classnames from "classnames";

const TextFieldAreaBootstrap = ({
  name,
  placeholder,
  type,
  onChange,
  info,
  disabled,
  error,
  value
}) => {
  return (
    <div>
      <div className="form-group">
        <textarea
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
          required
        />
        {error && <div className="invalid-feedback">{error}</div>}
        {info && <small className="form-text text-muted">{info}</small>}
      </div>
    </div>
  );
};

TextFieldAreaBootstrap.defaultProps = {
  type: string
};

TextFieldAreaBootstrap.propTypes = {
  name: string.isRequired,
  placeholder: string.isRequired,
  info: string,
  error: string,
  onChange: func.isRequired,
  value: string.isRequired
};

export default TextFieldAreaBootstrap;
