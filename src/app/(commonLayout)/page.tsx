// import { Button } from "@/components/ui/button";
import BlogCard from "@/components/modules/homepage/BlogCard";
import { blogService } from "@/services/blog.service";
import { BlogPost } from "@/types";
// import { userService } from "@/services/user.service";
// import { cookies } from "next/headers";
// import { authClient } from "@/lib/auth-client";


export default async function Home() {
 const { data } = await blogService.getBlogPosts(
    {
      isFeatured: false,
    },
    {
      cache: "no-store",
    }
  );

  console.log(data);

  // const { data } = await userService.getSession()
  // console.log(data)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto px-4 gap-5">
      {/* <Button>CLICK HERE BABY</Button> */}
      {data?.data?.map((post: BlogPost) => (
        <BlogCard key={post.id } post={post} />
     ))}
  
    </div>
  );
}
