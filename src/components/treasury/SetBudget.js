import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import "./Treasury.css";

const useStyles = makeStyles(() => ({
  totals: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "space-around",
  },
  total: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  totalBtn: {
    fontSize: "0.8rem",
    width: "3rem",
    marginRight: "5px",
  },
  totalBtnTitle: {
    color: "#808080",
  },
  totalBtnNum: {
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
}));

export default function SetBudget({
  openSpendingCalculator,
  openTaxCalculator,
  totalTax,
  totalSpending,
  deficit,
  settingBudget,
  onSubmitBudget,
}) {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.totals}>
        <Box className={classes.total}>
        <Button
            color="secondary"
            variant="contained"
            className={classes.totalBtn}
            onClick={openTaxCalculator}
          >
            Tax
          </Button>
          <Typography className={classes.totalBtnNum}>
            £{totalTax} bn
          </Typography>
        </Box>
        <Box className={classes.total}>
        <Button
            color="secondary"
            variant="contained"
            className={classes.totalBtn}
            onClick={openSpendingCalculator}
          >
            Spend
          </Button>
          <Typography className={classes.totalBtnNum}>
            £{totalSpending} bn
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" align="left">{deficit > 0 ? "Surplus" : "Deficit"}: £{deficit}bn</Typography>
      <Button
        variant="contained"
        color="primary"
        disabled={!settingBudget}
        onClick={() => onSubmitBudget(totalTax, totalSpending)}
      >
        Submit Annual Budget
      </Button>
    </>
  );
}