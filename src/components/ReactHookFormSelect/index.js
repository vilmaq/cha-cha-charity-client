import classNames from "classnames";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "8px 16px",
    minWidth: "100%",
  },
  formLabel: {
    padding: "8px 16px",
  },
}));

const ReactHookFormSelect = ({
  name,
  label,
  control,
  children,
  defaultValue,
  handleChange,
  rules,
}) => {
  const classes = useStyles();

  return (
    <Controller
      name={name}
      control={control}
      rules={rules || {}}
      render={({ field: { onChange }, fieldState: { error } }) => (
        <FormControl className={classes.formControl}>
          <InputLabel
            className={classNames(classes.formControl, {
              "form-error": error,
            })}
          >
            {label}
          </InputLabel>
          <Select
            label={label}
            defaultValue={defaultValue || ""}
            onChange={(value) => {
              onChange(value);
              handleChange && handleChange(value);
            }}
          >
            {children}
          </Select>
        </FormControl>
      )}
    />
  );
};
export default ReactHookFormSelect;
