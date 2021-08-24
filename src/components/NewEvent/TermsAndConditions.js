import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export default function TermsAndConditions({ stepThreeActions }) {
  console.log(stepThreeActions);
  const line1 = "Your Agreement!";
  const line2 =
    "Please be advised if you wish to set up a charitable event in the UK you shall make sure that your charity event complies with the law and fundraising legal duties of the country No matter how you decide to fundraise.";
  const line3 = "Kindly read the guide lines";
  const govUrl =
    "https://www.gov.uk/guidance/fundraising-legally-and-responsibly";
  const line4 =
    "to make sure you have understood the conditions and criteria to set up the charity event.Failing to do so would result into legal consequences. Cha-cha-charity is not held responsible if the applicant fails to full–fill the necessary contract between the concerning parties. Kindly only check the box if you have: Read and understood the above and take full responsibility of your action.";

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Terms & Conditions
      </Typography>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={15}
          helperText="*You must read and accept our Terms and Conditions to create a new event!"
          fullWidth
          defaultValue={`${line1}\n${line2}\n${line3}[url=${govUrl}] \n ${line4}`}
          variant="outlined"
        />

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox required color="secondary" name="agreeTC" value="yes" />
            }
            label="Check here to indicate that you have read and agree to the terms of the Cha-Cha-Charity."
            onChange={(event) =>
              stepThreeActions.setHasReadTermsAndConditions(
                event.target.checked
              )
            }
          />
        </Grid>
        <Grid item xs={12}></Grid>
      </Grid>
    </React.Fragment>
  );
}
