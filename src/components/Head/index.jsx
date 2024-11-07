import { Helmet } from "react-helmet-async";
import SkullFoto from "../../assets/images/removebg.png";


export default function Head({ title,desc, keywords }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href={SkullFoto} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="robots" content="index, follow" />
      </Helmet>
    </>
  );
}
