import { useState } from "react";
import { Box, Tabs, Tab, Typography, makeStyles } from "@material-ui/core";
import Desk from "./__Desk"
import InterestRate from "./InterestRate";
import Inflation from "./inflation/Inflation"
import QuantitativeEasing from "./QuantitativeEasing"
// import CompoundInterestCalculator from "../../__reusable/tools/CompoundInterestCalculator";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    overflow: "hidden",
  },
}));
export default function MonetaryPolicy() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index } = props;
    return <>{value === index && <>{children}</>}</>;
  }
  return (
    <Box className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Monetary Policy
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider", margin: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Desk" />
          <Tab label="Interest Rate" />
          <Tab label="Inflation" />
          <Tab label="Quantitative Easing" />
          <Tab label="Forward Guidance" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Desk />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InterestRate />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Inflation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <QuantitativeEasing/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        forward guidance
      </TabPanel>
    </Box>
  );
}
