import Head from 'next/head';
import { memo } from 'react';

function MetaData({ title, description }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

interface Props {
  title: string;
  description?: string;
}

export default memo(MetaData);
