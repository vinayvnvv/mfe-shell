import Head from "next/head";
import dynamic from "next/dynamic";

const UsersDetails = dynamic(() => import("userdetails/user-details"));

export default function Home({ ...props }) {
  return (
    <>
      <Head>
        <title>User Details</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <UsersDetails {...props} />
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const remotePage = await import("userdetails/user-details");

  if (remotePage.getServerSideProps) {
    return remotePage.getServerSideProps(ctx);
  }

  return {
    props: {},
  };
};
