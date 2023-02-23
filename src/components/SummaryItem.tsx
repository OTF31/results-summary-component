import { Box, Container, PaletteColor, Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactSVG } from "react-svg";

interface Props {
  category: string;
  score: number;
  icon: string;
  color: PaletteColor;
}

const SummaryItem = (props: Props) => {
  const { category, score, icon, color } = props;

  return (
    <Container
      disableGutters
      sx={{
        bgcolor: color.contrastText,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingY: 1.5,
        paddingX: 2,
        borderRadius: 3,
      }}
    >
      <Stack direction={"row"} spacing={1}>
        <ReactSVG src={icon} />
        <Typography fontWeight={600} color={color.main}>
          {category}
        </Typography>
      </Stack>
      <Box sx={{ display: "flex", flexDirection: "row", fontWeight: 600 }}>
        <Typography fontWeight={600}>{score}</Typography>&nbsp;
        <Typography fontWeight={600} color={grey[600]}>
          / 100
        </Typography>
      </Box>
    </Container>
  );
};

export default SummaryItem;
