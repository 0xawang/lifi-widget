import TabContext from '@mui/lab/TabContext'
import { Box, Typography } from '@mui/material'
import { GatsbyLogo } from '../../../logo/Gatsby'
import { NextLogo } from '../../../logo/Next'
import { NuxtLogo } from '../../../logo/Nuxt'
import { RainbowKitLogo } from '../../../logo/RainbowKit'
import { RemixLogo } from '../../../logo/Remix'
import { SvelteLogo } from '../../../logo/Svelte'
import { ViteLogo } from '../../../logo/Vite'
import { VueLogo } from '../../../logo/Vue'
import { useCodeToolValues } from '../../../store/editTools/useCodeToolValues'
import { useEditToolsActions } from '../../../store/editTools/useEditToolsActions'
import { Card } from '../../Card/Card.style'
import { Tab, Tabs } from '../../Tabs/Tabs.style'
import { TabContentContainer } from '../DrawerControls.style'
import { CodeEditor } from './CodeEditor'
import { FontEmbedInfo } from './FontEmbedInfo'
import { ProjectButton } from './ProjectButton'

export const CodeControl = () => {
  const { codeControlTab } = useCodeToolValues()
  const { setCodeControlTab } = useEditToolsActions()

  return (
    <Card
      sx={[
        {
          p: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        },
        codeControlTab === 'config'
          ? {
              flexGrow: 1,
            }
          : {
              flexGrow: 0,
            },
      ]}
    >
      <Box sx={{ maxWidth: 326, height: 56 }}>
        <Tabs
          value={codeControlTab}
          aria-label="tabs"
          indicatorColor="primary"
          onChange={(_, value) => setCodeControlTab(value)}
        >
          <Tab label={'Config'} value="config" disableRipple />
          <Tab label={'Examples'} value="examples" disableRipple />
        </Tabs>
      </Box>
      <TabContext value={codeControlTab}>
        <TabContentContainer value="config" sx={{ gap: 1 }}>
          <Typography variant="caption">
            Add this configuration to your widget
          </Typography>
          <CodeEditor />
          <FontEmbedInfo />
        </TabContentContainer>
        <TabContentContainer value="examples" sx={{ gap: 1, paddingBottom: 1 }}>
          <Typography variant="caption">
            Examples of the widget used in different projects
          </Typography>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/gatsby"
            icon={<GatsbyLogo />}
          >
            Gatsby
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/nextjs"
            icon={<NextLogo />}
          >
            Next.js
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/nuxt"
            icon={<NuxtLogo />}
          >
            Nuxt
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/remix"
            icon={<RemixLogo />}
          >
            Remix
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/svelte"
            icon={<SvelteLogo />}
          >
            Svelte
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/vite"
            icon={<ViteLogo />}
          >
            Vite
          </ProjectButton>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/vue"
            icon={<VueLogo />}
          >
            Vue
          </ProjectButton>
          <Typography variant="caption">
            Example of the widget with external wallet management
          </Typography>
          <ProjectButton
            href="https://github.com/lifinance/widget/tree/main/examples/rainbowkit"
            icon={<RainbowKitLogo />}
          >
            Rainbowkit
          </ProjectButton>
        </TabContentContainer>
      </TabContext>
    </Card>
  )
}
