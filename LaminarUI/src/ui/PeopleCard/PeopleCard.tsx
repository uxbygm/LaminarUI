import React from "react";
import { Card, Grid, Avatar, Typography, IconButton, CardContent, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleCardMenu from "./PeopleCardMenu"

type PeopleCard = {
  headshot: string;
  name: string;
  title: string;
  onClickCard: React.MouseEventHandler<HTMLButtonElement>;
  onClickDelete: React.MouseEventHandler<HTMLButtonElement>;
}

export const PeopleCard = (props: PeopleCard) => {
  const { headshot, name, title, onClickCard, onClickDelete } = props;

  return (
    <Card sx={{ maxWidth: 645 }}>
      <Grid container spacing={0} padding={0}>
        <Grid item xs={10}>
          <CardActionArea onClick={onClickCard}>
            <CardContent sx={{ p: 0 }}>
              <Grid container spacing={0} padding={0}>
                <Grid item xs="auto">
                  <Avatar
                    alt={name}
                    src={headshot}
                    sx={{ width: 56, height: 56, m: 1 }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography variant="subtitle1" mt={1.5} fontWeight={600}>
                    {name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {title}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Grid>
        <Grid item container xs="auto" style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-end" }} >
          <CardActions >
            <IconButton onClick={onClickDelete}>
              <DeleteIcon fontSize='small' />
            </IconButton>
            <PeopleCardMenu />
          </ CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
export default PeopleCard

