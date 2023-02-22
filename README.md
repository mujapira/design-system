<h1 align="center">
Mujapira UI
</h1>
Acesse de maneira fácil e prática uma gama de Tokens (cores, espaçamentos...) e Componentes (botões, inputs...)!
<br/>
Veja os exemplos <a href="https://mujapira.github.io/design-system/?path=/story/home--page">aqui<a/>
Link para o NPM! <a href="https://www.npmjs.com/settings/mujapira-ui/packages">Mujapira UI</a>

<h2 align="center">🏃‍♂️Instruções para usar no Next.js</h1>

### Em caso de dúvida, consulte o projeto <a href="https://github.com/mujapira/agenda-facil">Agenda Fácil</a>

```bash
npm i @mujapira-ui/react
```

global.ts
```js
import { globalCss } from '@mujapira-ui/react'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },
})
```

_document.page.tsx
```js
import { getCssText } from '@mujapira-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
```

_app.page.tsx
```js
import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({
  Component,
  pageProps: {},
}: AppProps) {
  return (  
   <Component {...pageProps} />
  )
}
```
