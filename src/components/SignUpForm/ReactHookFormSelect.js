import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const ReactHookFormSelect = ({
  name,
  label,
  control,
  children,
  defaultValue,
  handleChange,
}) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange } }) => {
          return (
            <Select
              label={label}
              onChange={(value) => {
                onChange(value);
                handleChange && handleChange(value);
              }}
            >
              {children}
            </Select>
          );
        }}
      />
    </FormControl>
  );
};
export default ReactHookFormSelect;
