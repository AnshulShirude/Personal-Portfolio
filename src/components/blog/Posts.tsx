import { getPosts } from "@/app/utils/utils";
import { Grid } from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  direction?: "row" | "column";
}

export function Posts({
  range,
  columns = "1",
  thumbnail = false,
  direction,
}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);

  const getDateValue = (dateStr: string) => {
    // Handle present dates (e.g., "2025-05-present")
    if (dateStr.includes("present")) {
      return new Date().getTime() + 1000;
    }

    // Handle date ranges (e.g., "2023-09/2024-12")
    if (dateStr.includes("/")) {
      const [startDate, endDate] = dateStr.split("/");
      const [endYear, endMonth] = endDate.split("-");
      return new Date(`${endYear}-${endMonth}-01`).getTime();
    }

    // Handle simple dates (e.g., "2023-01")
    return new Date(dateStr).getTime();
  };

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      getDateValue(b.metadata.publishedAt) -
      getDateValue(a.metadata.publishedAt)
    );
  });

  const displayedBlogs = range
    ? sortedBlogs.slice(
        range[0] - 1,
        range.length === 2 ? range[1] : sortedBlogs.length
      )
    : sortedBlogs;

  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid
          columns={columns}
          mobileColumns="1"
          fillWidth
          marginBottom="40"
          gap="12"
        >
          {displayedBlogs.map((post) => (
            <Post
              key={post.slug}
              post={post}
              thumbnail={thumbnail}
              direction={direction}
            />
          ))}
        </Grid>
      )}
    </>
  );
}
