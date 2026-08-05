import { MetadataRoute } from 'next';
import { COURSES } from '@/content/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.virensurati.in';

  // Static routes
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/courses',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic course routes
  const courseRoutes = COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...courseRoutes];
}
