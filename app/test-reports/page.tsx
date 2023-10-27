'use client'
import React, {useEffect, useState} from 'react';
import {makeStyles} from '@mui/styles';
import {useTheme} from '@mui/material/styles';
import {Grid, Typography} from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import female from "./../../public/female.png";
import database from "./../../public/database.png";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useMediaQuery from '@mui/material/useMediaQuery';
import TopImage from "../../components/TopImage";
import parse from "html-react-parser";
import style from './TestService.module.scss'
import {makeStrapiRequest} from "@/utils/makeStrapiRequest";


const useStyles = makeStyles<any>(theme => ({
    boldText: {
        fontWeight: "bold"
    },
    border: {
        border: "1px solid grey",
        width: "63.2em",
        height: "6500px",
        marginLeft: "400px !important",
        [theme?.breakpoints?.down("md")]: {
            width: "40em",
            height: "9700px",
            marginLeft: "60px !important",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: "45px !important",
            width: "50em",
            height: "9000px",
        },
        [theme.breakpoints.down("sm")]: {
            width: "21em",
            marginLeft: "20px !important",
        },
        [theme.breakpoints.only('lg')]: {
            marginLeft: "120px !important"
        }
    },
    creditReport: {
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: "45px !important"
        },
        [theme.breakpoints.only('lg')]: {
            marginLeft: "120px !important"
        }
    },
    divider: {
        width: "58.3em",
        fontWeight: "bold !important",
        borderBottom: "1px solid black",
        [theme.breakpoints.down("md")]: {
            width: "35em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    boldDivider: {
        width: "58.3em",
        borderBottom: "1px solid black",
        borderWidth: "3px !important",
        [theme.breakpoints.down("md")]: {
            width: "35em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    blueDivider: {
        width: "49.2em",
        borderBottom: "1px solid #0795fe",
        borderWidth: "2px !important",
        marginLeft: "8.5em !important",
        [theme.breakpoints.down("md")]: {
            marginLeft: "0px !important",
            width: "35em",
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em",
            marginLeft: "0px !important"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em",
            marginLeft: "0px !important"
        }
    },
    greydivider: {
        width: "58.3em",
        fontWeight: "bold !important",
        borderBottom: "1px solid grey",
        [theme.breakpoints.down("md")]: {
            width: "35em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    halfDevider: {
        width: "27em",
        fontWeight: "bold !important",
        borderBottom: "3px solid black",
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    halfgreyDevider: {
        width: "27.5em",
        fontWeight: "bold !important",
        borderBottom: "1px solid grey",
        [theme.breakpoints.down("md")]: {
            width: "35em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    halfBlackDivider: {
        width: "24.1em",
        fontWeight: "bold !important",
        borderBottom: "1px solid black",
        [theme.breakpoints.down("md")]: {
            width: "28em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "16.5em"
        }
    },
    halfBlackDividerRight: {
        width: "25.2em",
        fontWeight: "bold !important",
        borderBottom: "1px solid black",
        [theme.breakpoints.down("md")]: {
            width: "28em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "24.2em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "16.5em"
        }
    },
    halfgreyDeviderRight: {
        width: "29em",
        fontWeight: "bold !important",
        borderBottom: "1px solid grey",
        [theme.breakpoints.down("md")]: {
            width: "35em"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: "45em"
        },
        [theme.breakpoints.down("sm")]: {
            width: "20em"
        }
    },
    blueColor: {
        color: theme.palette.common.infoBlue,
        [theme.breakpoints.down("md")]: {
            marginRight: "30px !important"
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: "10px !important",
            marginTop: "3em !important"
        }
    },
    tableDesign: {
        border: "1px solid black",
        [theme.breakpoints.down("md")]: {
            maxWidth: "28em !important"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: "24.2em !important"
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: "18px !important",
            maxWidth: "16.5em !important"
        }
    },
    tableRight: {
        borderTop: "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "1px solid black",
        [theme.breakpoints.down("md")]: {
            borderLeft: "1px solid black",
            maxWidth: "28em !important",
            marginLeft: "5.7em !important"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: "24.2em !important",
            borderLeft: "1px solid black",
            marginLeft: "8.3em !important"
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "35.5px !important",
            maxWidth: "16.5em !important"
        }
    },
    cardBorder: {
        border: "1px solid black",
        marginRight: "72px !important",
        maxWidth: "58.3em !important",
        [theme.breakpoints.down("md")]: {
            maxWidth: "34.5em !important"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: "45em !important"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "20em !important"
        },
    },
    footer: {
        height: "80px",
        backgroundColor: "#D9D9D9",
        position: "relative",
        [theme.breakpoints.down("sm")]: {
            height: "58px"
        }
    },
    Mobile: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1rem"
        }
    },
    logoMobile: {
        [theme.breakpoints.down("sm")]: {
            width: "4em"
        }
    },
    mobileBlock: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem !important"
        }
    },
    mobileType: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.75rem !important"
        }
    },
    size: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8rem !important"
        }
    },
    size3: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.63rem !important"
        }
    },
    sizesmall: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.7rem !important"
        }
    },
    arrangeDubleTable: {
        [theme.breakpoints.down("sm")]: {
            maxWidth: "20em !important"
        }
    },
    primaryIndicatorTable: {
        [theme.breakpoints.down("md")]: {
            maxWidth: "35em !important"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            marginLeft: "0px !important",
            maxWidth: "45em !important"
        },
    },
    blueTable: {
        width: "49.2em",
        [theme.breakpoints.down("md")]: {
            maxWidth: "35em !important"
        },
        [theme.breakpoints.between('md', 'lg')]: {
            maxWidth: "45em !important",
            marginLeft: "0px !important"
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "20em !important"
        }
    },
    dubleTable: {
        marginLeft: "50px !important",
        [theme.breakpoints.down("md")]: {
            marginLeft: "10px !important"
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px !important"
        }
    }
}))

async function getTestReports(lang: string) {
    const {data} = await makeStrapiRequest.get(`/test-service?locale=${lang}`)

    return data
}

export default function TestService() {
    const classes = useStyles();
    const theme = useTheme<any>();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [testServiceItems, setTestServiceItems] = useState<any>([])

    useEffect(() => {
        getTestReports(localStorage.getItem('language') || 'ro').then((res) => {
            setTestServiceItems(res.data)
        })
    }, [])

    return (
        <>
            {
                <>
                    <TopImage/>
                    <Grid container direction="column">
                        <br/> <br/>
                        <Grid item ml={matchesMD ? 7.5 : 50} className={classes.creditReport}>
                            <Typography variant='h5' className={style.titleTestService}>{parse(String(testServiceItems.attributes?.title))}</Typography>
                        </Grid>
                        <br/> <br/>
                        <Grid item className={classes.border} style={{marginBottom: "2em"}}>
                            <Grid container direction="column" ml={matchesSM ? 1 : 5} className={classes.Mobile}>
                                <Grid item container direction="row" justifyContent="space-between">
                                    <Grid item mt={matchesSM ? 1 : 5}><img alt='company logo' src='/logo.png'
                                                                           className={classes.logoMobile}/></Grid>
                                    <Grid item mt={matchesSM ? 1 : 5} mr={matchesSM ? 2 : 10} style={{textAlign: 'right'}}>
                                        <Typography className={classes.size}>Raport nr.: 26652</Typography>
                                        <Typography className={classes.size}>Data ora solicitării 2022-10-13
                                            00:00:00</Typography>
                                        <Typography className={classes.size}>Data ora eliberării: 2022-10-13
                                            00:00:00</Typography>
                                        <Typography className={classes.size}>Solicitant: SC ABC TEST COMPANY SRL</Typography>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.divider} mt={matchesSM ? 1 : 4}></Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>Tip subiect:</Typography>
                                    <Typography className={classes.size} ml={19.5}>Persoană fizică</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size} variant='h6'>Prenume:</Typography>
                                    <Typography className={classes.size} variant='h6'
                                                ml={matchesSM ? 21 : 19}>Ioana</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size} variant='h6'>Nume:</Typography>
                                    <Typography className={classes.size} variant='h6'
                                                ml={matchesSM ? 23.1 : 22.5}>Popescu</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.size} variant='h6'>Patronimic:</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>CNP:</Typography>
                                    <Typography className={classes.size} ml={matchesSM ? 23.8 : 25.5}>2190495432524</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>Actul de identitate:</Typography>
                                    <Typography className={classes.size} ml={matchesSM ? 14.3 : 13.5}>MZ033076</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>Expiră la:</Typography>
                                    <Typography className={classes.size} ml={matchesSM ? 20.8 : 21.9}>2026-04-19</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>Data importării primelor date:</Typography>
                                    <Typography className={classes.size} ml={matchesSM ? 6.5 : 4}>2022-10-12</Typography>
                                </Grid>
                                <Grid item container direction="row">
                                    <Typography className={classes.size}>Data ultimei actualizări a datelor:</Typography>
                                    <Typography className={classes.size} ml={matchesSM ? 4 : 0.7}>2022-10-12</Typography>
                                </Grid>
                                <Grid item className={classes.halfDevider}></Grid>
                                <Grid container direction="row">
                                    <Grid item>
                                        <Grid item container direction="column">
                                            <Grid item mt={2}><img alt={'female'} src='/female.png'/></Grid>
                                            <Typography mt={0.5} className={classes.size3}>Feminin</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item container direction="column" ml={4} className={classes.mobileBlock}>
                                            <Grid item mt={1.7}><Typography className={classes.size3}><BusinessCenterIcon/>Nu
                                                sunt</Typography> </Grid>
                                            <Typography className={classes.size3}>date</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item container direction="column" ml={4}>
                                            <Grid item mt={1.1}><Typography className={classes.size3}><img alt={'database'} src='/database.png'
                                                                                                           style={{
                                                                                                               width: "30px",
                                                                                                               height: "30px"
                                                                                                           }}/>Nu
                                                sunt</Typography> </Grid>
                                            <Typography className={classes.size3}>date</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid item container direction="column" ml={4}>
                                            <Grid item mt={2}><Typography className={classes.size3}><SchoolIcon/>Nu
                                                sunt</Typography></Grid>
                                            <Typography className={classes.size3}>date</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item className={classes.halfDevider} mt={1}></Grid>
                                <Grid item mt={0.7}>
                                    <Typography className={classes.size}>Lista adreselor raportate:</Typography>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography className={classes.mobileType}>- Tip Adresă de bază , Romania ,Iasi , Iasi,
                                        Tineretului , 3,</Typography>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography className={classes.size}>Lista contactelor raportate:</Typography>
                                </Grid>
                                <Grid item mt={2}>
                                    <Typography className={classes.size}>- 0749596229 raportat la 2022-10-12</Typography>
                                </Grid>
                                <br/> <br/>
                                <Grid item container justifyContent="center">
                                    <Typography variant={matchesSM ? "h5" : "h4"}>Indicatori primari</Typography>
                                </Grid>
                                <Grid item className={classes.greydivider}></Grid>
                                <Grid item container direction="row">
                                    <Grid item container direction="column" lg={5.2} mr={matchesSM ? "15px" : "0px"}
                                          className={classes.primaryIndicatorTable}>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Număr angajamente</Typography>
                                            <Typography>3</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Număr angajamente bancare</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Număr surse</Typography>
                                            <Typography>1</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={2}>
                                            <Typography>Număr surse bancare</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider} mt={2}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Data primului import</Typography>
                                            <Typography>2022-10-12</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={2}>
                                            <Typography>Data primului import bancar</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider} mt={2}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma total achitată</Typography>
                                            <Typography>22630.24</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma totală achitată la bănci</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor 1 an</Typography>
                                            <Typography>71971.34</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor bancare 1 an</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor 2 ani</Typography>
                                            <Typography>71971.34</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor bancare 2 ani</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor 5 ani</Typography>
                                            <Typography>71971.34</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma angajamentelor bancare 5 ani</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma totală a angajamentelor</Typography>
                                            <Typography>71971.34</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma totală a angajamentelor bancare</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography className={classes.size}>Angajamente noi deschise ultimele 24
                                                luni</Typography>
                                            <Typography>3</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDevider}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography className={classes.size}>Angajamente bancare noi deschise ultimele 24
                                                luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" lg={5.5} ml={matchesMD ? 0 : 4}
                                          mr={matchesSM ? "15px" : "0px"} className={classes.primaryIndicatorTable}>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente închise ultimele 24 luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography className={classes.size}>Angajamente bancare închise ultimele 24
                                                luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography className={classes.size}>Angajamente închise în termen ultimele 24
                                                luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Grid item>
                                                <Grid item container direction="column">
                                                    <Typography className={classes.size}>Angajamente bancare închise în termen
                                                        ultimele 24</Typography>
                                                    <Typography>luni</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item mt={1}>
                                                <Typography>0</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography className={classes.size}>Angajamente închise anticipat ultimele 24
                                                luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={2}>
                                            <Typography className={classes.mobileType}>Angajamente bancare închise anticipat
                                                ultimele 24 luni</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight} mt={2}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente compromise</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente bancare compromise</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente active</Typography>
                                            <Typography>3</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente bancare active</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente restanțe</Typography>
                                            <Typography>2</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Angajamente bancare restanțe</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Restanța maxima curentă</Typography>
                                            <Typography>84</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Restanța maxima curentă bancară</Typography>
                                            <Typography>0</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Suma maximă achitată intr-o lună</Typography>
                                            <Typography>71971.34</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Soldul curent total</Typography>
                                            <Typography>49341.10</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Soldul curent total net</Typography>
                                            <Typography>49341.10</Typography>
                                        </Grid>
                                        <Grid className={classes.halfgreyDeviderRight}></Grid>
                                        <Grid item container direction="row" justifyContent="space-between" mt={1}>
                                            <Typography>Total serviciile datoriilor</Typography>
                                            <Typography>9817.07</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.divider} mt={1}></Grid>
                                </Grid>
                                <br/>
                                <Grid item container justifyContent="center">
                                    <Typography variant='h5'>Angajamente</Typography>
                                </Grid>
                                <br/>
                                <Grid item container direction="row" justifyContent="space-between">
                                    <Grid item>
                                        <Typography>1</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>angajamente active cu istoric pozitiv</Typography>
                                    </Grid>
                                    <Grid item></Grid>
                                </Grid>
                                <Grid item className={classes.divider}></Grid>
                                <Grid item container direction="row" className={classes.arrangeDubleTable}>
                                    <Grid item mt={matchesSM ? 1 : 15} className={classes.dubleTable}>
                                        <Typography variant={matchesSM ? "h3" : "h1"}
                                                    className={classes.blueColor}>1</Typography>
                                    </Grid>
                                    <Grid item container direction="column" lg={4.6} ml={matchesMD ? 0 : 4} mt={1.5}
                                          className={classes.tableDesign}>
                                        <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                            <Typography>Rol:</Typography>
                                            <Typography ml={matchesSM ? 21.5 : 20}>Titular</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data importării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "50px" : "79px"}}>2022-10-12</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={5.5} style={{marginLeft: "2px"}}>
                                            <Typography>Ultimul eveniment:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "28px" : "55px"}}>2022-09-01</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={4.5}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography className={classes.size}>Tip angajament:</Typography>
                                            <Typography className={classes.size}
                                                        style={{marginLeft: matchesSM ? "48px" : "72px"}}>Credit de
                                                consum</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data semnării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "55px" : "85px"}}>2022-05-17</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data încheierii:</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Limita de credit:</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Durata:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "177px" : "137px"}}>6</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Grid item mt={matchesSM ? 4 : 7}>
                                                <Typography className={classes.size}>Statut angajament:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid item container direction="column"
                                                      style={{marginLeft: matchesSM ? "10px" : "52px"}}>
                                                    <Typography className={classes.sizesmall}>Credit/debit fără
                                                        restante</Typography>
                                                    <Typography className={classes.sizesmall}>(dar soldul este diferit
                                                        de</Typography>
                                                    <Typography className={classes.sizesmall}>zero), sau in cazul
                                                        care</Typography>
                                                    <Typography className={classes.sizesmall}>termenul de restanta
                                                        la</Typography>
                                                    <Typography className={classes.sizesmall}>plata este mai puțin de
                                                        30</Typography>
                                                    <Typography className={classes.sizesmall}>de zile.</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Sold net:</Typography>
                                            <Typography style={{marginLeft: "123px"}}>9015.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Total achitat:</Typography>
                                            <Typography style={{marginLeft: "95px"}}>9015.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                            <Typography>Suma scadentă:</Typography>
                                            <Typography style={{marginLeft: "68px"}}>3005.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Serviciul datoriei:</Typography>
                                            <Typography style={{marginLeft: "60px"}}>4507.50</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" lg={4.8} mt={1.5} className={classes.tableRight}>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}}>
                                            <Grid item mt={2}>
                                                <Typography className={classes.size}>Creditor:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid item container direction="column" ml={matchesSM ? 7 : 16} mt={1}>
                                                    <Typography className={classes.size}>Organizație de creditare</Typography>
                                                    <Typography className={classes.size}>nebancară</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography className={classes.size}>Ultima actualizare:</Typography>
                                            <Typography className={classes.size}
                                                        style={{marginLeft: matchesSM ? "72px" : "56px"}}>2022-10-12</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Grid item mt={4.5}>
                                                <Typography className={classes.size}>Tip portofoliu:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid item container direction="column"
                                                      style={{marginLeft: matchesSM ? "25px" : "91px"}}>
                                                    <Typography className={classes.size}>Altele (datorii de la </Typography>
                                                    <Typography className={classes.size}>persoane fizice, altele</Typography>
                                                    <Typography className={classes.size}>care nu se încadrează in</Typography>
                                                    <Typography className={classes.size}>celelalte categorii)</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Contract nr.:</Typography>
                                            <Typography style={{marginLeft: "100px"}}>****1709</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Data expirării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "70px" : "90px"}}>2022-11-16</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Suma împrumutului:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "38px" : "45px"}}>15000.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Valuta:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "165px" : "142px"}}>RON</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Frecvența achitării:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "100px" : "55px"}}>M</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}}
                                              mt={matchesSM ? 0.5 : 8}>
                                            <Typography>Sold:</Typography>
                                            <Typography style={{marginLeft: "155px"}}>9015.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight} mt={matchesSM ? 0.5 : 8}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Soldul penalităților:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "80px" : "55px"}}>0.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Scadența:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "94px" : "119px"}}>2022-09-16</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Grid item>
                                                <Grid item container direction="column">
                                                    <Typography>Prima scadență</Typography>
                                                    <Typography>neonorată:</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{marginLeft: matchesSM ? "53px" : "78px"}}>
                                                <Typography>2022-08-16</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                    </Grid>
                                    <Grid item ml={matchesSM ? 7 : 16.8} mt={2}>
                                        <Typography>Plățile pentru angajamentul: ****1709</Typography>
                                    </Grid>
                                    <Grid item className={classes.blueDivider} mt={1}></Grid>
                                    <Grid item ml={matchesMD ? 0 : 16.8} className={classes.blueTable}>
                                        <TableContainer>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Data scadentă</TableCell>
                                                        <TableCell>Data achitării</TableCell>
                                                        <TableCell>Suma scadentă</TableCell>
                                                        <TableCell>Suma achitată</TableCell>
                                                        <TableCell>Suma rămasă</TableCell>
                                                        <TableCell>Suma totală rămasă</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>2022-06-16</TableCell>
                                                        <TableCell>2022-06-24</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-07-16</TableCell>
                                                        <TableCell>2022-08-18</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-08-16</TableCell>
                                                        <TableCell>2022-09-01</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-09-16</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-10-16</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-11-16</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>3005</TableCell>
                                                        <TableCell>3005</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item container direction="row" justifyContent="space-between" mt={2}>
                                        <Grid item>
                                            <Typography>2</Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography>angajamente active cu istoric negativ</Typography>
                                        </Grid>
                                        <Grid item></Grid>
                                    </Grid>
                                    <Grid item className={classes.divider} mt={1}></Grid>
                                </Grid>
                                <Grid item container direction="row" className={classes.arrangeDubleTable}>
                                    <Grid item mt={matchesSM ? 1 : 15} className={classes.dubleTable}>
                                        <Typography variant={matchesSM ? "h3" : "h1"}
                                                    className={classes.blueColor}>1</Typography>
                                    </Grid>
                                    <Grid item container direction="column" lg={4.6} ml={matchesMD ? 0 : 4} mt={1.5}
                                          className={classes.tableDesign}>
                                        <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                            <Typography>Rol:</Typography>
                                            <Typography ml={matchesSM ? 21.5 : 20}>Titular</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data importării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "50px" : "79px"}}>2022-10-12</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={5.5} style={{marginLeft: "2px"}}>
                                            <Typography>Ultimul eveniment:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "28px" : "55px"}}>2022-09-01</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={4.5}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography className={classes.size}>Tip angajament:</Typography>
                                            <Typography className={classes.size}
                                                        style={{marginLeft: matchesSM ? "48px" : "72px"}}>Credit de
                                                consum</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data semnării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "55px" : "85px"}}>2022-03-01</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Data încheierii:</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Limita de credit:</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Durata:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "173px" : "137px"}}>12</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography className={classes.size}>Statut angajament:</Typography>
                                            <Typography className={classes.size}
                                                        style={{marginLeft: matchesSM ? "2px" : "51px"}}>Debit restant 31-60
                                                zile.</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Sold net:</Typography>
                                            <Typography style={{marginLeft: "123px"}}>9325.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Total achitat:</Typography>
                                            <Typography style={{marginLeft: "95px"}}>7415.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider}></Grid>
                                        <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                            <Typography>Suma scadentă:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "78px" : "68px"}}>955.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                        <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                            <Typography>Serviciul datoriei:</Typography>
                                            <Typography style={{marginLeft: "60px"}}>1865.00</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item container direction="column" lg={4.8} mt={1.5} className={classes.tableRight}>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}}>
                                            <Grid item mt={2}>
                                                <Typography className={classes.size}>Creditor:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid item container direction="column" ml={matchesSM ? 7 : 16} mt={1}>
                                                    <Typography className={classes.size}>Organizație de creditare</Typography>
                                                    <Typography className={classes.size}>nebancară</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography className={classes.size}>Ultima actualizare:</Typography>
                                            <Typography className={classes.size}
                                                        style={{marginLeft: matchesSM ? "72px" : "56px"}}>2022-10-12</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Grid item mt={4.5}>
                                                <Typography className={classes.size}>Tip portofoliu:</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid item container direction="column"
                                                      style={{marginLeft: matchesSM ? "25px" : "91px"}}>
                                                    <Typography className={classes.size}>Altele (datorii de la </Typography>
                                                    <Typography className={classes.size}>persoane fizice, altele</Typography>
                                                    <Typography className={classes.size}>care nu se încadrează in</Typography>
                                                    <Typography className={classes.size}>celelalte categorii)</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Contract nr.:</Typography>
                                            <Typography style={{marginLeft: "100px"}}>****0113</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Data expirării:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "68px" : "90px"}}>2023-02-28</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Suma împrumutului:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "38px" : "45px"}}>12000.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Valuta:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "165px" : "142px"}}>RON</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Frecvența achitării:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "100px" : "55px"}}>M</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Sold:</Typography>
                                            <Typography style={{marginLeft: "155px"}}>9325.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Soldul penalităților:</Typography>
                                            <Typography style={{marginLeft: matchesSM ? "80px" : "55px"}}>0.00</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Typography>Scadența:</Typography>
                                            <Typography
                                                style={{marginLeft: matchesSM ? "94px" : "119px"}}>2022-08-31</Typography>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                            <Grid item>
                                                <Grid item container direction="column">
                                                    <Typography>Prima scadență</Typography>
                                                    <Typography>neonorată:</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item style={{marginLeft: matchesSM ? "53px" : "78px"}}>
                                                <Typography>2022-07-31</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item className={classes.halfBlackDividerRight}></Grid>
                                    </Grid>
                                    <Grid item ml={matchesSM ? 7 : 16.8} mt={2}>
                                        <Typography>Plățile pentru angajamentul: ****0113</Typography>
                                    </Grid>
                                    <Grid item className={classes.blueDivider} mt={1}></Grid>
                                    <Grid item ml={matchesMD ? 0 : 16.8} className={classes.blueTable}>
                                        <TableContainer>
                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Data scadentă</TableCell>
                                                        <TableCell>Data achitării</TableCell>
                                                        <TableCell>Suma scadentă</TableCell>
                                                        <TableCell>Suma achitată</TableCell>
                                                        <TableCell>Suma rămasă</TableCell>
                                                        <TableCell>Suma totală rămasă</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>2022-03-31</TableCell>
                                                        <TableCell>2022-04-01</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-04-30</TableCell>
                                                        <TableCell>2022-05-04</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-05-31</TableCell>
                                                        <TableCell>2022-06-16</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-06-30</TableCell>
                                                        <TableCell>2022-07-30</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-07-31</TableCell>
                                                        <TableCell>2022-09-01</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>0</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-08-31</TableCell>
                                                        <TableCell>2022-09-01</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>440</TableCell>
                                                        <TableCell>955</TableCell>
                                                        <TableCell>955</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-09-30</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-10-31</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-11-30</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2022-12-31</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2023-01-31</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>2023-02-28</TableCell>
                                                        <TableCell></TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>0</TableCell>
                                                        <TableCell>1395</TableCell>
                                                        <TableCell>1395</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                    <Grid item container direction="row" className={classes.arrangeDubleTable}>
                                        <Grid item mt={matchesSM ? 1 : 15} className={classes.dubleTable}>
                                            <Typography variant={matchesSM ? "h3" : "h1"}
                                                        className={classes.blueColor}>2</Typography>
                                        </Grid>
                                        <Grid item container direction="column" lg={4.6} ml={matchesMD ? 0 : 4} mt={1.5}
                                              className={classes.tableDesign}>
                                            <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                                <Typography>Rol:</Typography>
                                                <Typography ml={matchesSM ? 21.5 : 20}>Titular</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Data importării:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "50px" : "79px"}}>2022-10-12</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={5.5} style={{marginLeft: "2px"}}>
                                                <Typography>Ultimul eveniment:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "28px" : "55px"}}>2022-09-01</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider} mt={4.5}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography className={classes.size}>Tip angajament:</Typography>
                                                <Typography className={classes.size}
                                                            style={{marginLeft: matchesSM ? "48px" : "72px"}}>Credit de
                                                    consum</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Data semnării:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "55px" : "85px"}}>2022-06-22</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Data încheierii:</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Limita de credit:</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Durata:</Typography>
                                                <Typography style={{marginLeft: matchesSM ? "173px" : "137px"}}>12</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography className={classes.size}>Statut angajament:</Typography>
                                                <Typography className={classes.size}
                                                            style={{marginLeft: matchesSM ? "2px" : "51px"}}>Debit restant 31-60
                                                    zile.</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Sold net:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "114px" : "123px"}}>31001.10</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Total achitat:</Typography>
                                                <Typography style={{marginLeft: "95px"}}>6200.24</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider}></Grid>
                                            <Grid item container direction="row" mt={2} style={{marginLeft: "2px"}}>
                                                <Typography>Suma scadentă:</Typography>
                                                <Typography style={{marginLeft: "68px"}}>3100.11</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDivider} mt={2}></Grid>
                                            <Grid item container direction="row" mt={1} style={{marginLeft: "2px"}}>
                                                <Typography>Serviciul datoriei:</Typography>
                                                <Typography style={{marginLeft: "60px"}}>3444.57</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" lg={4.8} mt={1.5}
                                              className={classes.tableRight}>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}}>
                                                <Grid item mt={2}>
                                                    <Typography className={classes.size}>Creditor:</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid item container direction="column" ml={matchesSM ? 7 : 16} mt={1}>
                                                        <Typography className={classes.size}>Organizație de
                                                            creditare</Typography>
                                                        <Typography className={classes.size}>nebancară</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography className={classes.size}>Ultima actualizare:</Typography>
                                                <Typography className={classes.size}
                                                            style={{marginLeft: matchesSM ? "72px" : "56px"}}>2022-10-12</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Grid item mt={4.5}>
                                                    <Typography className={classes.size}>Tip portofoliu:</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid item container direction="column"
                                                          style={{marginLeft: matchesSM ? "25px" : "91px"}}>
                                                        <Typography className={classes.size}>Altele (datorii de la </Typography>
                                                        <Typography className={classes.size}>persoane fizice,
                                                            altele</Typography>
                                                        <Typography className={classes.size}>care nu se încadrează
                                                            in</Typography>
                                                        <Typography className={classes.size}>celelalte categorii)</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Contract nr.:</Typography>
                                                <Typography style={{marginLeft: "100px"}}>****2209</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Data expirării:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "68px" : "90px"}}>2023-06-21</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Suma împrumutului:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "38px" : "45px"}}>30000.00</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Valuta:</Typography>
                                                <Typography style={{marginLeft: matchesSM ? "165px" : "142px"}}>RON</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Frecvența achitării:</Typography>
                                                <Typography style={{marginLeft: matchesSM ? "100px" : "55px"}}>M</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Sold:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "145px" : "155px"}}>31001.10</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Soldul penalităților:</Typography>
                                                <Typography style={{marginLeft: matchesSM ? "80px" : "55px"}}>0.00</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Typography>Scadența:</Typography>
                                                <Typography
                                                    style={{marginLeft: matchesSM ? "94px" : "119px"}}>2022-09-21</Typography>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                            <Grid item container direction="row" style={{marginLeft: "2px"}} mt={1}>
                                                <Grid item>
                                                    <Grid item container direction="column">
                                                        <Typography>Prima scadență</Typography>
                                                        <Typography>neonorată:</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item style={{marginLeft: matchesSM ? "53px" : "78px"}}>
                                                    <Typography>2022-07-21</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid item className={classes.halfBlackDividerRight}></Grid>
                                        </Grid>
                                        <Grid item ml={matchesSM ? 7 : 16.8} mt={2}>
                                            <Typography>Plățile pentru angajamentul: ****2209</Typography>
                                        </Grid>
                                        <Grid item className={classes.blueDivider} mt={1}></Grid>
                                        <Grid item ml={matchesMD ? 0 : 16.8} className={classes.blueTable}>
                                            <TableContainer>
                                                <Table aria-label="simple table">
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell>Data scadentă</TableCell>
                                                            <TableCell>Data achitării</TableCell>
                                                            <TableCell>Suma scadentă</TableCell>
                                                            <TableCell>Suma achitată</TableCell>
                                                            <TableCell>Suma rămasă</TableCell>
                                                            <TableCell>Suma totală rămasă</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>2022-07-21</TableCell>
                                                            <TableCell>2022-09-01</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>0</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2022-08-21</TableCell>
                                                            <TableCell>2022-09-01</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>0</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2022-09-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2022-10-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2022-11-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2022-12-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-01-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-02-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-03-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-04-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-05-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2023-06-21</TableCell>
                                                            <TableCell></TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>0</TableCell>
                                                            <TableCell>3100</TableCell>
                                                            <TableCell>3100</TableCell>
                                                        </TableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Grid>
                                        <Grid item container mt={2} justifyContent="center">
                                            <Typography>0 angajamente pasive cu istoric pozitiv</Typography>
                                        </Grid>
                                        <Grid item className={classes.boldDivider} mt={1}></Grid>
                                        <Grid item container mt={1} justifyContent={matchesMD ? "flex-start" : "center"}
                                              ml={matchesMD ? "20px" : "inherit"}>
                                            <Typography className={classes.sizesmall}>0 angajamente pasive care au fost supuse
                                                cărorva etape de colectare</Typography>
                                        </Grid>
                                        <Grid item className={classes.boldDivider} mt={0.5}></Grid>
                                        <Grid item container mt={6} justifyContent={matchesMD ? "flex-start" : "center"}>
                                            <Typography variant='h4'>Lista solicitărilor rapoartelor de credit</Typography>
                                        </Grid>
                                        <Grid item container justifyContent="flex-start" mt={2}>
                                            <Typography>Solicitări in ultimile 15 zile: 2 </Typography>
                                        </Grid>
                                        <Grid item container justifyContent="flex-start">
                                            <Typography>Solicitări bancare in ultimile 15 zile: 1</Typography>
                                        </Grid>
                                        <Grid item className={classes.boldDivider} mt={0.5}></Grid>
                                        <Grid item container mt={1} justifyContent={matchesSM ? "flex-start" : "center"}>
                                            <Typography className={classes.size}>Date din Monitorul Oficial Romaniei și alte
                                                surse</Typography>
                                        </Grid>
                                        <Grid item className={classes.boldDivider} mt={0.5}></Grid>
                                        <Grid item container justifyContent="flex-start" mt={1}>
                                            <Typography>Nu sunt date din alte surse!</Typography>
                                        </Grid>
                                        <Grid item className={classes.divider} mt={0.5}></Grid>
                                        <Grid item container direction="column">
                                            <Grid item>
                                                <Grid item container direction="row">
                                                    <Grid item mt={3}>
                                                        <Typography>Biroul Istoriilor de
                                                            Credit INFODEBIT CREDIT REPORT SRL</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid item container direction="column" mt={2}
                                                              ml={matchesSM ? 0.2 : 7.5}>
                                                            <Grid item textAlign={matchesSM ? "start" : "end"}>
                                                                <Typography>OPERATOR DE DATE PERSONALE</Typography>
                                                                <Typography>84945</Typography>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Grid item container direction="column" mt={5}
                                                              className={classes.cardBorder}>
                                                            <Grid item mt={2} style={{marginLeft: "2px"}}>
                                                                <Typography>Prezentul Raport de verificare este generat in
                                                                    concordanța cu legislația în vigoare, inclusiv Legea privind
                                                                    birourile istoriilor de</Typography>
                                                                <Typography>credit și Legea privind protecția datelor cu
                                                                    caracter personal. Accesul la datele conținute în acest
                                                                    raport este limitat, conform</Typography>
                                                                <Typography>prevederilor legale.</Typography>
                                                            </Grid>
                                                            <Grid item mt={2} style={{marginLeft: "2px"}}>
                                                                <Typography>Răspunderea limitată: Rapoartele INFODEBIT au
                                                                    caracter informativ și NU constituie un sfat, recomandare,
                                                                    ofertă sau o invitație</Typography>
                                                                <Typography>de a cumpăra sau nu a cumpăra, de a subscrie sau nu
                                                                    - produse și/sau servicii, și nici nu pot sta la baza
                                                                    încheierii sau încetarii</Typography>
                                                                <Typography>unui contract/act juridic sau a unui angajament de
                                                                    orice natură și nici nu reprezintă o garanție privind
                                                                    minimizarea sau eliminarea anumitor
                                                                    riscuri asociate activitații utilizatorului sau terțului
                                                                    justificat.</Typography>
                                                            </Grid>
                                                            <Grid item mt={2} style={{marginLeft: "2px"}}>
                                                                <Typography>Utilizarea informațiilor din rapoartele INFODEBIT se
                                                                    face exclusiv pe riscul și sub răspunderea utilizatorului.
                                                                    INFODEBIT și</Typography>
                                                                <Typography>oricare dintre angajații săi nu acceptă nici o
                                                                    răspundere privind: pierderi de natură economică inclusiv
                                                                    dar nelimitativ, pierderea</Typography>
                                                                <Typography>de venituri, de profituri, de contracte, de
                                                                    folosință, de oportunitate, de afacere sau realizate în
                                                                    legatură cu utilizarea</Typography>
                                                                <Typography>www.infodebit.md și/sau https://bic.infodebit.md
                                                                    și/sau a rapoartelor oferite. În cazul necesitații
                                                                    corectării unor date, urmează sa</Typography>
                                                                <Typography>ne sesizați pentru verificarea și, după caz,
                                                                    ajustarea lor.</Typography>
                                                            </Grid>
                                                            <Grid item mt={2} style={{marginLeft: "2px"}}>
                                                                <Typography>Informații suplimentare despre INFODEBIT, despre
                                                                    produsle INFODEBIT, le găsiți accesând
                                                                    <span style={{color: "blue"}}><a
                                                                        href="https://www.infodebit.ro./"> https://www.infodebit.ro.</a></span>
                                                                </Typography>
                                                            </Grid>
                                                            <Grid item mt={4}></Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </>
    )
}