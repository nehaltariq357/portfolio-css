import Card from "./component/Card/page";
import Content from "./component/Content/page";
import Content2 from "./component/Content2/page";
import Content3 from "./component/Content3/page";
import Content4 from "./component/Content4/page";
import Footer from "./component/Footer/page";
import Project from "./component/Project/page";

export default function Home() {
  return (
    <div>
      <Content />
      <Card />
      <Content2 />
      <Project />
      <Content3 />
      <Content4 />
      <Footer />
    </div>
  );
}
