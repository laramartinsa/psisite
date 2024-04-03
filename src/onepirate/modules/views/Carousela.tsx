import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Markdown from "../components/Markdown";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { isMobile } from 'react-device-detect';
import Image from 'mui-image'


const number = {
  fontSize: 24,
  fontFamily: "default",
  color: "secondary.main",
  fontWeight: "medium",
};

function Carousela() {
  const [markdown, setMarkdown] = useState("");
  const [handWidth, setHandWidth] = useState(window.innerWidth * 0.85);
  const [handPercentageOffset] = useState(0.9);

  // https://github.com/webpack/webpack/issues/6680
  useEffect(() => {
    import("./texts/biography.md")
      .then((content) => fetch(content.default))
      .then((response) => response.text())
      .then((responseText) => setMarkdown(responseText));

    function handleResize() {
      setHandWidth(window.innerWidth * 0.85);
    }
    window.addEventListener('resize', handleResize)
  });

  return (
    <Box
      component="section"
      sx={{ display: "flex", bgcolor: "secondary.light", overflow: "hidden" }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" marked="center" component="h2" sx={{ mb: 14 }}>
          Depoimentos?
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                  }}
                >
                </Box>
     
            </Grid>
            <Grid item xs={12} md={6}>
              <Markdown>{markdown}</Markdown>
            </Grid>
          </Grid>
        </div>
        {isMobile ? (
          <Parallax
            translateX={[`${handWidth}px`, `${handWidth - (window.innerWidth * handPercentageOffset)}px`]}
            scale={[0.55, 0.65]}
            rotate={[-80, -90]}
            easing="easeInOutCubic"
          >
   
          </Parallax>
        ) : null}
      </Container>
      {isMobile ? null : (
        <>
          <Parallax
            translateX={[`-${window.innerWidth + 80}px`, `-${window.innerWidth - 150}px`]}
            scale={[0.45, 0.65]}
            rotate={[-180, 0]}
            easing="easeInOutQuint"
          > 
          </Parallax>
          <Parallax
            translateX={['300px', '-100px']}
            scale={[0.55, 0.65]}
            rotate={[-80, -90]}
            easing="easeInOutCubic"
          >
          </Parallax>
        </>
      )}
    </Box>
  );
}

export default Carousela;
