import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
          root: {
                    flexGrow: 1
          },

          paper: {
                    padding: theme.spacing(2),
                    textAlign: 'center',
                    color: theme.palette.text.secondary
          }
});


const Container = props => <Grid container {...props} />
// const Item = props => <Grid item {...props} />
const Item = props => <Grid item xs={12} sm={6} md={3} {...props} />


const AbsContainerAndItem = withStyles(styles) (({ classes, justifyContent }) => (

          <div className={classes.root}>

                    <Container spacing={4} >

                              <Item md={6}>
                                        <Paper className={classes.paper} >

                                                  <Container container direction="row" spacing={2} justifyContent='space-around' >
                                                            <Item>
                                                                      <Chip label="xs=12" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="sm=6" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="md=3" />
                                                            </Item>
                                                  </Container>

                                        </Paper>
                              </Item>

                              <Item md={6} >
                                        <Paper className={classes.paper} >

                                                  <Container container direction="row" spacing={2} justifyContent='space-around' >
                                                            <Item>
                                                                      <Chip label="xs=12" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="sm=6" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="md=3" />
                                                            </Item>
                                                  </Container>

                                        </Paper>
                              </Item>

                              <Item md={6} >
                                        <Paper className={classes.paper} >

                                                  <Container container direction="row" spacing={2} justifyContent='space-around' >
                                                            <Item>
                                                                      <Chip label="xs=12" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="sm=6" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="md=3" />
                                                            </Item>
                                                  </Container>

                                        </Paper>
                              </Item>

                              <Item md={6}>
                                        <Paper className={classes.paper} >

                                                  <Container container direction="row" spacing={2} justifyContent='space-around' >
                                                            <Item >
                                                                      <Chip label="xs=12" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="sm=6" />
                                                            </Item>

                                                            <Item>
                                                                      <Chip label="md=3" />
                                                            </Item>
                                                  </Container>

                                        </Paper>
                              </Item>

                    </Container>

          </div>
));


export default AbsContainerAndItem;