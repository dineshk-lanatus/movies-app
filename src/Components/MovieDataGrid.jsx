import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { EditNote, DeleteOutline } from '@mui/icons-material';
import { DataGridPro, GridActionsCellItem } from '@mui/x-data-grid-pro';
import { MoviesContext } from '../Context/MoviesContext';
import { Link } from 'react-router-dom';

export default function MovieDataGrid() {
  const { searched, setSearched, setMovie } = useContext(MoviesContext);

  const handleDeleteClick = (id) => () => {
    setSearched((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setSearched(newRowModesModel);
  };

  const columns = [
    { field: 'title', headerName: 'Movie Title', width: 482 },
    {
      field: 'rating',
      headerName: 'Rating',
      type: 'number',
      width: 140,
      align: 'left',
      headerAlign: 'left',
    },
    {
      field: 'date',
      headerName: 'Release Date',
      width: 284,
    },

    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 149,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        return [
          <Link to={`/${id}/editing`}>
            <GridActionsCellItem
              sx={{ '&:hover svg': { fill: 'gold' } }}
              icon={
                <EditNote
                  sx={{
                    p: 0.7,
                    fill: 'black',
                  }}
                />
              }
              label="Edit"
              className="textPrimary"
              onClick={() => {
                setMovie(searched[id - 1]);
              }}
            />
          </Link>,
          <GridActionsCellItem
            sx={{ '&:hover svg': { fill: 'red' } }}
            icon={<DeleteOutline sx={{ p: 0.7 }} />}
            label="Delete"
            onClick={handleDeleteClick(id)}
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        p: 2,
        backgroundColor: 'white',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: 'column',

        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <Box>
        <Typography color="primary" variant="h4" fontWeight={700}>
          Movie List
        </Typography>
      </Box>

      <DataGridPro
        sx={{
          mt: 2,
          backgroundColor: 'grey',
          borderRadius: '14px',
          height: 464,
          color: 'white',
          overflow: 'auto',
        }}
        rows={Object.values(searched)}
        columns={columns}
        editMode="row"
        onRowModesModelChange={handleRowModesModelChange}
        slotProps={{
          toolbar: { setSearched },
        }}
      />
    </Box>
  );
}
