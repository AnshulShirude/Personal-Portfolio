"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
  Row,
  SmartImage,
} from "@/once-ui/components";
import { formatDate } from "@/app/utils/formatDate";

interface ProjectCardProps {
  priority?: boolean;
  href: string;
  images?: string[];
  title: string;
  description: string;
  previewPoints?: string[];
  links?: Array<{ title: string; url: string }>;
  content: string;
  tag?: string;
  publishedAt: string;
}

export function ProjectCard({
  priority,
  href,
  images,
  title,
  description,
  previewPoints = [],
  links = [],
  content,
  tag,
  publishedAt,
}: ProjectCardProps) {
  return (
    <SmartLink href={href} className="no-underline">
      <Column gap="m" padding="m" radius="l" border="neutral-alpha-medium">
        {images?.[0] && (
          <SmartImage
            priority={priority}
            aspectRatio="16 / 9"
            radius="m"
            alt={title}
            src={images[0]}
          />
        )}
        <Column gap="s">
          <Row horizontal="space-between" vertical="center">
            <Text variant="label-strong-m">{title}</Text>
            {tag && (
              <Text variant="label-default-s" onBackground="neutral-weak">
                {tag}
              </Text>
            )}
          </Row>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
          {previewPoints.length > 0 && (
            <Column gap="xs" marginTop="s">
              {previewPoints.map((point, index) => (
                <Text
                  key={index}
                  variant="body-default-s"
                  onBackground="neutral-weak"
                >
                  • {point}
                </Text>
              ))}
            </Column>
          )}
          <Text variant="label-default-xs" onBackground="neutral-weak">
            {formatDate(publishedAt)}
          </Text>
          {links.length > 0 && (
            <Row gap="m" marginTop="s">
              {links.map((link, index) => (
                <SmartLink
                  key={index}
                  href={link.url}
                  target="_blank"
                  // variant="label-default-s"
                  // onBackground="brand-weak"
                >
                  {link.title} →
                </SmartLink>
              ))}
            </Row>
          )}
        </Column>
      </Column>
    </SmartLink>
  );
}
