import { getPosts } from "@/app/utils/utils";
import { Column, Text, Grid } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  const getDateValue = (dateStr: string) => {
    if (dateStr.includes("present")) {
      return new Date().getTime() + 1000;
    }

    if (dateStr.includes("/")) {
      const [startDate, endDate] = dateStr.split("/");

      if (endDate.includes("-")) {
        const [endYear, endMonth] = endDate.split("-");
        return new Date(`${endYear}-${endMonth}-01`).getTime();
      }

      const [startYear, startMonth] = startDate.split("-");
      return new Date(`${startYear}-${endDate}-01`).getTime();
    }

    return new Date(dateStr).getTime();
  };

  const sortedProjects = allProjects.sort((a, b) => {
    return (
      getDateValue(b.metadata.publishedAt) -
      getDateValue(a.metadata.publishedAt)
    );
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      <Text variant="display-strong-m">Building...</Text>
      <Grid columns="2" mobileColumns="1" fillWidth gap="12">
        {displayedProjects.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            // previewPoints={post.metadata.preview || []}
            // links={post.metadata.links || []}
            content={post.content}
            tag={post.metadata.tag}
            publishedAt={post.metadata.publishedAt}
          />
        ))}
      </Grid>
    </Column>
  );
}
