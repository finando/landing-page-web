import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const head = useDocumentHead();
  const { url } = useLocation();

  return (
    <>
      <meta charSet='utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, maximum-scale=1, interactive-widget=resizes-content'
      />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

      <title>{head.title}</title>

      <link rel='canonical' href={url.href} />

      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <meta name='apple-mobile-web-app-title' content='Finando' />
      <meta name='application-name' content='Finando' />
      <meta name='msapplication-TileColor' content='#1c1c1c' />
      <meta name='theme-color' content='#1c1c1c' />
      <link rel='icon' href='/favicon.ico' sizes='any' />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />

      <link rel='manifest' href='/manifest.json' />

      <link rel='preconnect' href='https://rsms.me/' />
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />

      {head.meta.map((meta) => (
        <meta key={meta.key} {...meta} />
      ))}

      {head.links.map((link) => (
        <link key={link.key} {...link} />
      ))}

      {head.styles.map(({ key, props, style }) => (
        <style key={key} {...props} dangerouslySetInnerHTML={style} />
      ))}

      {head.scripts.map(({ key, props, script }) => (
        <script key={key} {...props} dangerouslySetInnerHTML={script} />
      ))}

      <script src='/config.js' />
    </>
  );
});
