import SecondNav from "@/components/SecondNav";
import BlogPost from "@/components/BlogPost";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;


  return (
    <div className="bg-gray-50 min-h-screen flex flex-col lg:pt-[5%]">
      <SecondNav />
     <BlogPost  slug={slug ?? ""} />
    </div>
  );
}
