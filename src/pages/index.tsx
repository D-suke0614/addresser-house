import { css } from "@emotion/react";
import { Box, Container, Typography, Button } from "@mui/material";

import type { NextPage } from "next";

import Link from "@/components/Link";

const yellowButtonCss = css`
  color: green;
  background-color: yellow;

  :hover {
    background-color: #919100;
  }
`

const Index: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      <Box>
        <Button variant="contained" color="primary">
          Css
        </Button>
        <Button variant="contained" css={yellowButtonCss}>
          Css
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
