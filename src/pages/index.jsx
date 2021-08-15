import Head from 'next/head';
import {
  Button, Typography, Container
} from '@material-ui/core';
import Hero from '../components/sections/hero/Hero';

// TODO: Translate
export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to the Next.JS Template</title>
        <meta name="description" content="A Next.JS Template to create the website you dreamed of!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero
        className="mb-6"
        title={(
          <>
            <span className="text-secondaryMain">Next.JS</span>
            <span> Template</span>
          </>
        )}
        subtitle="A template to create the website you dreamed of!"
        cta={(
          <Button variant="contained" color="primary" size="large">
            Tell me more
          </Button>
        )}
        contactMe
      />

      <section>
        <Container>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Praesent cursus dui eget neque placerat venenatis.Proin scelerisque justo in mi ullamcorper lacinia.
            In eget aliquet risus, vel porttitor mi. Sed mauris enim, fringilla id libero et, tempor ultricies nisl.
            In euismod hendrerit venenatis. Integer quis consequat turpis.
            Etiam tristique ante quis leo ultricies, sed imperdiet justo imperdiet.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan mattis mi at aliquam.
            Nunc nisl quam, semper nec tempor sollicitudin, porttitor ac libero. Ut non ex erat.
            Integer condimentum eu nibh nec dictum.
            Suspendisse viverra massa est, a pharetra nulla tincidunt sit amet.
            Ut nec orci vitae massa faucibus volutpat. Mauris urna justo, placerat quis gravida a, tempor non libero.
          </Typography>

          <Typography variant="body1" className="mb-2">
            Aliquam luctus elit tortor. Quisque urna ex, lacinia ac iaculis non, bibendum ut risus.
            Aenean hendrerit enim ac tellus ornare lacinia. Nam tempor dignissim egestas. Nulla facilisi.
            In hac habitasse platea dictumst. Morbi ante magna, tempor sit amet sapien sit amet, sodales tempor turpis.
            Integer eget venenatis risus, eget interdum ex. Nulla dictum nisl quis ultrices malesuada.
            Etiam mi purus, venenatis in odio id, sodales tincidunt lectus.
            Nulla condimentum massa non mauris dictum posuere. Vestibulum euismod vitae lacus id mattis.
            In est mi, elementum at efficitur ac, posuere quis neque.
            Sed fringilla dolor ut justo bibendum sollicitudin. Maecenas auctor et nisl ut sodales.
          </Typography>

          <Typography variant="body1" className="mb-2">
            Curabitur sed eros ut felis viverra pulvinar.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Quisque iaculis luctus eros vitae porttitor. Quisque nec iaculis eros. Etiam at porta turpis.
            Proin id mollis est. Sed sed lectus eu tellus ullamcorper suscipit.
            Ut eget imperdiet ante, id consectetur libero. In in euismod elit. Vestibulum tristique vel nisi ut iaculis.
            Phasellus volutpat tellus ac porta varius.
            Proin facilisis cursus lectus at pharetra. Quisque rutrum molestie odio, id ultricies nisl semper eu.
          </Typography>

          <Typography variant="body1" className="mb-2">
            Aliquam erat volutpat. Suspendisse ligula felis, pretium quis faucibus consectetur, fermentum ut purus.
            Integer lobortis tellus sed urna fringilla, id dapibus nibh ultrices.
            Duis elementum accumsan purus, nec dapibus libero vestibulum non.
            Integer sagittis ut urna molestie vestibulum. Sed quis enim ornare, lobortis eros in, ultricies nisl.
            Vestibulum pulvinar gravida nisl id gravida. Phasellus cursus massa eu mattis semper.
            Sed interdum pharetra lectus sed interdum. Quisque velit felis, varius tempus dapibus a, auctor ac ipsum.
            Nunc orci turpis, porta et nisi quis, tincidunt commodo ipsum. Ut ut auctor ante, sit amet laoreet nisl.
            Curabitur nisi orci, volutpat at aliquet viverra, pellentesque id felis. Donec nec lobortis urna.
          </Typography>

          <Typography variant="body1" className="mb-2">
            Sed congue velit at urna cursus gravida.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Cras in justo nibh.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Duis sed urna augue. Vivamus semper scelerisque massa sit amet placerat.
            Ut tincidunt varius facilisis. Sed sit amet ultricies orci. Mauris dictum et diam ut pellentesque.
          </Typography>
        </Container>
      </section>
    </div>
  );
}
