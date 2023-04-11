export default function Home() {
  return <></>;
}
export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "/metric-builder/metric-template",
    },
    props: {}, // will be passed to the page component as props
  };
}
