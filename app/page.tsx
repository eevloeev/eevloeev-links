import { Box, Button, Stack, Typography } from "@mui/joy"
import { Metadata } from "next"
import TelegramIcon from "@mui/icons-material/Telegram"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import ParticlesBackground from "@/components/ParticlesBackground"

export const metadata: Metadata = {
  title: "Aslan Evloev — Full-Stack Developer",
  description:
    "5+ years of experience in web application development. Went from developing marketing websites to highly loaded services with a large number of active users, and still going.",
}

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/eevloeev",
    icon: <GitHubIcon />,
  },
  {
    name: "Telegram",
    href: "https://t.me/eevloeev",
    icon: <TelegramIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/eevloeev/",
    icon: <LinkedInIcon />,
  },
]

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography
          level="h2"
          sx={{
            marginTop: 1,
            textAlign: "center",
            fontSize: {
              xs: "1.5rem",
              sm: "2rem",
              lg: "2.5rem",
              xl: "3.5rem",
            },
          }}
        >
          Full-Stack Developer
        </Typography>
        <Typography
          level="h1"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "3rem",
              sm: "4rem",
              lg: "5rem",
              xl: "7rem",
            },
          }}
        >
          Aslan Evloev
        </Typography>
        <Stack
          sx={{
            marginTop: 1,
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
          }}
        >
          {socials.map((social) => (
            <Button
              key={social.name}
              variant="soft"
              startDecorator={social.icon}
              component="a"
              href={social.href}
              rel="noopener noreferrer"
              target="_blank"
              size="lg"
            >
              {social.name}
            </Button>
          ))}
        </Stack>
      </Box>
    </>
  )
}
