import { getApiDocs } from "@/utils/swagger";
import ReactSwagger from "@/components/ReactSwagger";

export default async function IndexPage() {
  const spec = await getApiDocs();
  return (
    <section className="container">
      <ReactSwagger spec={spec} />
    </section>
  );
}