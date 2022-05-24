import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, useScrollTrigger, Container, Slide } from "@mui/material";

import Link from '../../atoms/Link/Link';
import styles from "./Topbar.module.css";
import DatePicker from '../DatePicker/DatePicker';


function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};


const Index = (props) => {

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6" component="div">
              <Link href="/" name="Sachin Cinemas" />
            </Typography>
            <div className={styles.sections}>
              <Link href="/movies" name="Movies" />
            </div>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Container>
        {props.children}
      </Container>
    </>
  );
}


export default Index;