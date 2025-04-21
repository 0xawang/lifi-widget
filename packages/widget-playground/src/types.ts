import type {
  CardProps,
  ComponentsOverrides,
  ComponentsVariants,
} from '@mui/material'
import type { CSSProperties } from 'react'

export type ObjectWithFunctions = { [key: string]: any }

export type FunctionReference = {
  path: (string | number)[]
  funcRef: () => void
  substituteId?: string
}

export type Collection = Record<string | number, any>

declare module '@mui/material/styles' {
  interface TypographyVariants {
    '@supports (font-variation-settings: normal)': React.CSSProperties
  }
  interface TypographyVariantsOptions {
    '@supports (font-variation-settings: normal)'?: React.CSSProperties
  }
  interface Shape {
    borderRadius: number
    borderRadiusSecondary: number
    borderRadiusTertiary: number
  }
  interface Theme {
    shape: Shape
    container: CSSProperties
    header: CSSProperties
  }
  interface ThemeOptions {
    shape?: Partial<Shape>
    container?: CSSProperties
    header?: CSSProperties
  }
  interface ComponentNameToClassKey {
    MuiInputCard: 'root'
  }
  interface ComponentsPropsList {
    MuiInputCard: Partial<CardProps>
  }
  interface Components {
    MuiInputCard?: {
      defaultProps?: ComponentsPropsList['MuiInputCard']
      styleOverrides?: ComponentsOverrides<
        Omit<Theme, 'components'>
      >['MuiInputCard']
      variants?: ComponentsVariants['MuiInputCard']
    }
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    filled: true
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    '@supports (font-variation-settings: normal)': true
  }
}
