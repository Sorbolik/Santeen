import React from 'react';
import { Grid, Card, CardMedia, Typography } from '@mui/material';

const Home = () => {

    // Un array di oggetti che rappresentano i gioielli da mostrare nella griglia
    const jewelry = [
        {
            image: 'necklace-with-spherical-pendants.jpg',
            alt: 'Una collana con molteplici pendenti sferici'
        },
        {
            image: 'leaf-shaped-objects.jpg',
            alt: 'Una collezione di oggetti a forma di foglia, possibilmente pendenti o decorazioni'
        },
        {
            image: 'mobile-like-hanging-decoration.jpg',
            alt: 'Una decorazione appesa a forma di mobile con elementi sferici attaccati a delle aste che formano una forma astratta'
        },
        {
            image: 'round-earrings-with-leaf-design.jpg',
            alt: 'Un paio di orecchini rotondi con una caratteristica centrale che ricorda una foglia o una piuma'
        },
        {
            image: 'necklace-with-asymmetrical-pendants.jpg',
            alt: "Un'altra collana con pendenti sferici, ma questa li ha disposti in un modello asimmetrico lungo la catena"
        },
        {
            image: 'square-shaped-earrings-with-spherical-element.jpg',
            alt: 'Un paio di orecchini a forma di quadrato che contengono un piccolo elemento sferico'
        },
        {
            image: 'circular-pendant-with-intricate-design.jpg',
            alt: 'Un pendente circolare adornato con vari elementi più piccoli che creano un design intricato intorno al suo perimetro'
        },
        {
            image: 'circular-pendant-with-spherical-elements.jpg',
            alt: 'Un altro pendente circolare, più semplice, con molti elementi sferici che pendono sotto di esso in modo ordinato'
        }
    ];

    return (
        <div>
            <div>
                {/* Crea una griglia di 4 colonne per mostrare i gioielli */}
                <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                    {jewelry.map((item, index) => (
                        // Usa il componente Card per mostrare ogni gioiello
                        <Grid item xs={index % 3} key={index}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.alt}
                                    height="200"
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div>
                {process.env.REACT_APP_FIRST_KEY}
            </div>
        </div>
    );
};

export default Home;
