import React, { useState, } from 'react'
import { Typography, Grid, Stack, Button, Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { topics, faqs } from 'src/constants'
import { icChevronDown, faqIllustration } from 'src/assets';

const Faqs = ({theme}) => {
    const [expanded, setExpanded] = useState({ '0-0': true });

    const handleAccordionChange = (stackIndex, panelIndex) => (event, isExpanded) => {
        setExpanded(prevState => ({
            ...prevState,
            [`${stackIndex}-${panelIndex}`]: isExpanded,
        }));
    };

    return (
        <Grid container spacing={10} className='mt-8'>
            <Grid item md={4}>
                <Stack direction="column" spacing={{ xs: 6, sm: 10 }}>
                    {topics.map((topic, i) => (
                        <Stack key={i} direction="column" spacing={{ xs: 2, sm: 4 }}>
                            <Typography variant='h4' className='font-montExtraBold' style={{ color: theme === 'light' ? 'black' : 'white' }}>{topic.title}</Typography>
                            {topic.descriptions.map((desc, index) => (
                                <Typography key={index} variant='h6' className='' style={{ color: theme === 'light' ? 'black' : 'white' }}>{desc}</Typography>
                            ))}
                        </Stack>
                    ))}
                    <Box className="px-6">
                        <Stack 
                            className='bg-[#006064] rounded-[29px]'
                            direction="column" 
                            sx={{
                                background: 'linear-gradient(to bottom, #311B92, #434CA9, #5D95CC)',
                            }}
                        >
                            <Box>
                                <img src={faqIllustration} className='-mt-[20px] ml-[40px]' />
                            </Box>
                            <Stack direction="column" spacing={2} padding="7px 15px">
                                <Typography variant='h4' className='font-montSemiBold text-center'>Still no luck? We can help!</Typography>
                                <Stack direction="column" spacing={2} padding="0 12px 13px 0">
                                    <Typography variant='h6' className='font-montSemiBold text-center'>Contact us and we’ll get back to you as soon as possible.</Typography>
                                    <Button className='w-full bg-[#84FFFF] uppercase text-[#006064] text-[16px] font-montSemiBold rounded-full p-[10px]'>
                                        Submit a request
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
            <Grid item md={8}>
                <Stack direction="column" spacing={{ xs: 6, sm: 12, md: 16 }}>
                    {faqs.map((faq, stackIndex) => (
                        <Stack key={stackIndex} direction="column" spacing={5}>
                            <Typography variant="h2" className="font-montExtraBold text-[24px] sm:text-[36px]" style={{ color: theme === 'light' ? 'black' : 'white' }}>{faq.title}</Typography>
                            <Stack direction="column" spacing={{ xs: 2, sm: 4, md: 6 }}>
                                {faq.pannels.map((panel, panelIndex) => (
                                    <Accordion
                                        key={`${stackIndex}-${panelIndex}`}
                                        expanded={expanded[`${stackIndex}-${panelIndex}`] || false}
                                        onChange={handleAccordionChange(stackIndex, panelIndex)}
                                        disableGutters
                                        elevation={0}
                                        sx={{
                                            backgroundColor: expanded[`${stackIndex}-${panelIndex}`] ? '#651FFF' : '#272432',
                                            borderRadius: '10px',
                                            padding: {
                                                xs: '5px 10px',
                                                sm: '10px 25px',
                                                md: '10px 40px',
                                            },
                                            transition: 'background-color 0.3s ease',
                                            '&:before': {
                                                display: 'none',
                                            },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<img src={icChevronDown} className="text-[24px] text-white rotate-180" />}
                                            aria-controls={`pannel-${stackIndex}-${panelIndex}-content`}
                                            id={`pannel-${stackIndex}-${panelIndex}-header`}
                                            sx={{
                                                fontFamily: 'Montserrat-SemiBold',
                                                color: '#ffffff',
                                                fontSize: {
                                                    xs: '18px',
                                                    sm: '24px',
                                                    md: '24px',
                                                },
                                            }}
                                        >
                                            {panel.title}
                                        </AccordionSummary>
                                        <AccordionDetails
                                            sx={{
                                                fontFamily: 'Montserrat',
                                                color: '#ffffff',
                                                fontSize: {
                                                    xs: '18px',
                                                    sm: '24px',
                                                    md: '24px',
                                                },
                                            }}
                                        >
                                            {panel.description}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </Stack>
                        </Stack>
                    ))}
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Faqs