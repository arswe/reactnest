import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded'
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded'
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded'
import dashdark from '../assets/dash-dark.png'
import dashLight from '../assets/dash-light.png'
import heroDark from '../assets/hero-dark.png'
import heroLight from '../assets/hero-light.png'
import mobileDark from '../assets/mobile-dark.png'
import mobileLight from '../assets/mobile-light.png'

export const FeaturesItems = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: 'Dashboard',
    description:
      'This item could provide a snapshot of the most important metrics or data points related to the product.',
    imageLight: `url(${dashLight})`,
    imageDark: `url(${dashdark})`,
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: 'Mobile integration',
    description:
      'This item could provide information about the mobile app version of the product.',
    imageLight: `url(${mobileLight})`,
    imageDark: `url(${mobileDark})`,
  },
  {
    icon: <DevicesRoundedIcon />,
    title: 'Available on all platforms',
    description:
      'This item could let users know the product is available on all platforms, such as web, mobile, and desktop.',
    imageLight: `url(${heroLight})`,
    imageDark: `url(${heroDark})`,
  },
]
