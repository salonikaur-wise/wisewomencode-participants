import { Grid } from "@mui/material";

const CenteredComponent = ({ children }) => {
  return (
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}
>
  <Grid item xs={1}>
    {children}
  </Grid>
</Grid>
  );
};
export default CenteredComponent;
