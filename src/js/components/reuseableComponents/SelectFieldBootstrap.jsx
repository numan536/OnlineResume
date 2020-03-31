import React from "react";
import classnames from "classnames";
import { string, func, bool, arrayOf, any } from "prop-types";

const SelectFieldBootstrap = ({
  name,
  onChange,
  value,
  error,
  info,
  disabled,
  type,
  options
}) => {
  const selectFieldOption = options.map(option => (
    <option key={option.label} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div>
      <div className="form-group">
        <select
          type={type}
          onChange={onChange}
          className={classnames("form-control form-control-lg", {
            "is-invalid": error,
            "form-control form-control-lg": !error
          })}
          name={name}
          value={value}
        >
          {selectFieldOption}
        </select>
        {error && <div className="invalid-feedback">{error}</div>}
        {info && <small className="form-text text-muted">{info}</small>}
      </div>
    </div>
  );
};

SelectFieldBootstrap.defaultProps = {
  type: string
};

SelectFieldBootstrap.propTypes = {
  name: string.isRequired,
  info: string,
  error: string,
  onChange: func.isRequired,
  disabled: bool,
  options: arrayOf(any).isRequired
};

export default SelectFieldBootstrap;
