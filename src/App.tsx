import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "./App.css";

import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";
import SummaryItem from "./components/SummaryItem";
import data from "./data/data.json";

const App = () => {
  const theme = useTheme();
  const colors = [
    theme.palette.lightRed,
    theme.palette.orangeYellow,
    theme.palette.greenTeal,
    theme.palette.cobaltBlue,
    theme.palette.lightRed,
  ];
  const icons = [iconReaction, iconMemory, iconVerbal, iconVisual];
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      minHeight={"100vh"}
      maxWidth={"100vw"}
    >
      <Container disableGutters maxWidth={mobile ? "xs" : "sm"}>
        <Grid
          container
          sx={{
            borderColor: theme.palette.paleBlue.main,
            boxShadow: `0px 20px 50px ${theme.palette.paleBlue.main}`,
            borderWidth: 0,
            overflow: "hidden",
            borderRadius: mobile ? 0 : 6,
          }}
        >
          <Grid
            item
            xs={mobile ? 12 : 6}
            sx={{
              background: `linear-gradient(to bottom, ${theme.palette.lightSlateBlue.main}, ${theme.palette.lightRoyalBlue.main})`,
              borderTopRightRadius: mobile ? 0 : 24,
              borderBottomRightRadius: 24,
              borderBottomLeftRadius: mobile ? 24 : 0,
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              paddingX={6}
              paddingY={4}
            >
              <Typography
                variant={"h6"}
                component={"h2"}
                fontWeight={600}
                color={theme.palette.lightLavender.main}
              >
                Your Result
              </Typography>
              <Stack
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                width={"150px"}
                height={"150px"}
                borderRadius={"50%"}
                border={0}
                marginY={4}
                sx={{
                  background: `linear-gradient(to bottom, ${theme.palette.violetBlue.main}, ${theme.palette.persianBlue.main})`,
                }}
              >
                <Typography color={"white"} variant={"h3"} component={"h3"} fontWeight={600}>
                  76
                </Typography>
                <Typography color={theme.palette.lightLavender.main} variant={"body2"}>
                  of 100
                </Typography>
              </Stack>
              <Typography color={"white"} variant={"h5"} component={"h2"} fontWeight={600}>
                Great
              </Typography>
              <Typography
                variant={"body2"}
                component={"p"}
                color={theme.palette.lightLavender.main}
                textAlign={"center"}
                marginTop={2}
              >
                You scored higher than 65% of the people who have taken these tests.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={mobile ? 12 : 6}>
            <Box paddingX={4} paddingY={4}>
              <Typography variant={"h5"} component={"h2"} fontWeight={600}>
                Summary
              </Typography>
              <Stack spacing={1.5} marginY={3}>
                {data.map((item, index) => (
                  <SummaryItem key={index} {...item} color={colors[index]} icon={icons[index]} />
                ))}
              </Stack>
              <Button
                variant={"contained"}
                fullWidth
                sx={{
                  borderRadius: 6,
                  background: theme.palette.darkGrayBlue.main,
                  textTransform: "capitalize",
                  ":hover": {
                    background: `linear-gradient(to bottom, ${theme.palette.lightSlateBlue.main}, ${theme.palette.lightRoyalBlue.main})`,
                  },
                }}
              >
                Continue
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
