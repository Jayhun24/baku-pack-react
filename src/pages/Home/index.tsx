import { Button, Grid, Typography, Box, Container, Stack } from "@mui/material";
import PageContainer from "../../components/PageContainer";
import giftTop from "assets/img/home/gift_top.png"
import dots from "assets/img/dots.png"
import BrandCarousel from "../../components/BrandCarousel"
import qutu1 from "assets/img/home/qutu/qutu1.png"
import qutu2 from "assets/img/home/qutu/qutu2.png"
import qutu3 from "assets/img/home/qutu/qutu3.png"
import qutu4 from "assets/img/home/qutu/qutu4.png"
import HomeCard from "components/HomeCard";
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import HomeBoxCard from "components/HomeBoxCard";
import ContactForm from "components/ContactForm";
import { useContext, useEffect } from 'react'
import { AlertContext } from "context/AlertContext";

const Home = () => {

    const alertNotify = useContext(AlertContext)

    useEffect(() => {
        alertNotify({ type: 'info', message: 'Xos gelmisiniz deyerli istifadeci!', timeout: 5000 })
    }, )

    return (
        <>
            <PageContainer>
                <Box>
                    <Box sx={{
                        backgroundColor: 'rgba(246, 245, 240, 1)',
                        borderRadius: "0 0 0 200px",
                        position: "relative",
                        "&::after": {
                            content: '""',
                            position: "absolute",
                            width: 200,
                            height: 180,
                            backgroundColor: 'rgba(246, 245, 240, 1)',
                            zIndex: -1,
                            right: 0
                        }
                    }}>
                        <Container maxWidth="xl" style={{ padding: '20px 0' }}>
                            <Grid container sx={{ padding: "40px 0" }}>
                                <Grid item xs={12} md={5}>
                                    <div className="home_gifttop">
                                        <div className="backgroundWithDots" style={{
                                            backgroundImage: `url(${dots})`,
                                            left: 200,
                                            top: 80,
                                            width: "200px",
                                            height: "200px",
                                            zIndex: 3
                                        }}></div>
                                        <img src={giftTop} alt="" style={{ position: 'relative', zIndex: 5 , bottom:135}} />
                                    </div>
                                </Grid>
                                <Grid item xs={10} md={6} lg={5} sx={{
                                    margin: {
                                        xs: "0 auto",
                                        md: 0
                                    }
                                }}>
                                    <Typography variant="h2" component="h1" fontWeight={700}>Bir-birind??n f??rqli dizaynda <Typography variant="h2" component="span" fontWeight={700} sx={{ color: 'gold' }}>qutular</Typography> se??in</Typography>
                                    <Typography sx={{
                                        // fontFamily
                                    }}>Fikirl??rinizi h??yata ke??irin v?? ya brendinizi f??rql??ndirin. M????t??ril??rimizin ist??yn?? v?? z??vq??n?? uy??un dizaynlar?? haz??rlamaqla birlikd?? ??z t??klifl??rimiz d?? t??qdim edirik.</Typography>
                                    <Button sx={{ padding: '10px 80px', marginTop: "40px", color: 'black', backgroundColor: "white" }}>Hamisi</Button>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Box sx={{
                        backgroundColor: 'white',
                        borderRadius: "0 200px 0 0",
                    }}>
                        <Container maxWidth="xl" style={{ padding: '20px 0' }}>
                            <BrandCarousel />
                        </Container>
                    </Box>
                    <Container maxWidth="xl">
                        <Grid container sx={{
                            paddingTop: 10
                        }}>
                            <Grid item xs={12} md={5} xl={6} sx={{
                                padding: '10px 40px',
                                paddingTop: 10,
                            }}>
                                <Typography variant="h4" fontWeight={700}>Baku Polygraphy</Typography>
                                <Typography>BakuPolygraphy 50 n??f??r?? yax??n hey??td??n ibar??t olan v?? yeni avadl??qlarla t??min olunan ??irk??tdir v?? b??t??n n??v karton qutu v?? qabla??d??rma m??hsullar??n?? haz??rlamaq g??c??n?? malikdir. Biz q??sa m??dd??t ??rzind?? m????t??ril??rimizn ??ox y??ks??k r??yin?? nail olma???? bacarm??????q. ??irk??t t??l??b olunan istehsalat prosesinin h??r m??rh??l??sin?? q??sursuz v?? keyfiyy??tl?? yana????r, imic v?? reputasyas??n?? qoruyur</Typography>
                                <Button sx={{ padding: '10px 80px', marginTop: "40px", color: 'black', backgroundColor: "white", boxShadow: 2 }}>Hamisi</Button>
                            </Grid>
                            <Grid item xs={12} md={7} xl={6}
                            >
                                <Box
                                    className="backgroundWithDots"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "flex-end",
                                        '&::after': {
                                            left: 70,
                                            bottom: -20,
                                            zIndex: -1
                                        }
                                    }}
                                >
                                    <Box className="backgroundWithDots" sx={{
                                        width: 'fit-content', maxWidth: 300, paddingLeft: "20px",
                                        "&::after": {
                                            top: -10,
                                            zIndex: -1,
                                            left: '70%'
                                        },
                                        "&::before": {
                                            content: '""',
                                            border: '10px solid orange',
                                            width: 120,
                                            height: 120,
                                            position: 'absolute',
                                            borderRadius: '50%',
                                            top: 60,
                                            right: -140,
                                            zIndex: -1
                                        }
                                    }}>
                                        <img src={qutu3} />
                                        <img src={qutu1} style={{
                                            position: 'relative',
                                            left: -40
                                        }} />
                                    </Box>
                                    <img src={qutu2} />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container py={20}>
                            <Grid item xs={12}>
                                <Typography textAlign="center" mb="10px" variant="h4" fontWeight={700}>Niy?? bizi se??m??lisiniz?</Typography>
                                <Typography textAlign="center" mb={8} >3 add??mda</Typography>
                            </Grid>
                            <Grid item container spacing={4}>
                                <Grid item xs={12} md={4}>
                                    <HomeCard title="Pe????kar dizaynlar" bgcolor="rgb(255, 243, 205)" text="M????t??ril??rimizin ist??yin?? v?? z??vq??n?? uy??un dizaynlar?? haz??rlamaqla birlikd?? ??z t??klifl??rimizi d?? t??qdim edirik." icon={<GroupIcon sx={{ fontSize: 50, color: "rgb(255, 183, 6)" }} />} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeCard title="B??y??k h??cmli sifari??l??r" bgcolor="rgb(255, 238, 232)" text="B??y??k h??cimli sifari??l??rin q??sa m??dd??td?? istehsal??na z??man??t veririk. Keyfiyy??t v?? s??r??t t??sad??f??n n??tic??s deyil!" icon={<ShoppingCartIcon sx={{ fontSize: 50, color: "rgb(215, 71, 63)" }} />} />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <HomeCard title="??atd??r??lma" bgcolor="rgb(241, 252, 239)" text="Qay????ke?? v?? diqq??tli kadrlar??m??zla m??hsulunuzun yerin?? ??atd??r??lmas??n?? ??z ??z??rimiz?? g??t??r??r??k. M????t??ri m??mnuniyy??ti h??mi???? ??n planda! " icon={<AccessAlarmsIcon sx={{ fontSize: 50, color: "rgb(50, 157, 126)" }} />} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography textAlign="center" mb="10px" variant="h4" fontWeight={700}>Qabla??d??rma</Typography>
                                <Typography textAlign="center" mb={8} sx={{ maxWidth: 600 }} mx="auto" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</Typography>
                            </Grid>
                            <Grid sx={{
                                gap: '40px 40px',
                            }} item container justifyContent="center">
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                                <HomeBoxCard img={qutu4} title="Karton Qutular" text="Lorem Ipsum is simply dummy text of the printing and type" />
                            </Grid>
                        </Grid>
                        <ContactForm sx={{
                            maxWidth: "sm",
                            mx: "auto",
                            my: 10
                        }} />
                    </Container>
                </Box>
            </PageContainer>
        </>
    )
}
export default Home;