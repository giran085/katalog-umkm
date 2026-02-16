// SEO Helper Functions

/**
 * Generate reading time estimate from article content
 * @param {string} content - HTML content string
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(content) {
    const wordsPerMinute = 200;
    const text = content.replace(/<[^>]*>/g, ''); // Strip HTML tags
    const wordCount = text.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
}

/**
 * Generate JSON-LD structured data for article
 * @param {Object} article - Article object
 * @param {string} baseUrl - Base URL of the website
 * @returns {Object} - JSON-LD structured data
 */
export function generateArticleSchema(article, baseUrl = 'https://afcjapanstore.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.featuredImage || `${baseUrl}/default-article.jpg`,
        datePublished: article.publishedAt || article.createdAt,
        dateModified: article.updatedAt,
        author: {
            '@type': 'Organization',
            name: article.author || 'AFC Japan Store ID',
            url: baseUrl,
        },
        publisher: {
            '@type': 'Organization',
            name: 'AFC Japan Store ID',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/artikel/${article.slug}`,
        },
        keywords: article.keywords?.join(', ') || '',
    };
}

/**
 * Generate JSON-LD structured data for article list (Blog)
 * @param {string} baseUrl - Base URL of the website
 * @returns {Object} - JSON-LD structured data
 */
export function generateBlogSchema(baseUrl = 'https://afcjapanstore.com') {
    return {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'AFC Japan Store ID Blog',
        description: 'Artikel kesehatan, nutrisi, dan informasi produk AFC Japan',
        url: `${baseUrl}/artikel`,
        publisher: {
            '@type': 'Organization',
            name: 'AFC Japan Store ID',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/logo.png`,
            },
        },
    };
}

/**
 * Generate breadcrumb structured data
 * @param {Array} items - Array of breadcrumb items {name, url}
 * @returns {Object} - JSON-LD breadcrumb data
 */
export function generateBreadcrumbSchema(items) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * Generate slug from title
 * @param {string} title - Article title
 * @returns {string} - URL-friendly slug
 */
export function generateSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
        .trim();
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength = 160) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
}

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @returns {string} - Formatted date string
 */
export function formatDate(date) {
    const d = new Date(date);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return d.toLocaleDateString('id-ID', options);
}

/**
 * Generate meta tags for article
 * @param {Object} article - Article object
 * @param {string} baseUrl - Base URL
 * @returns {Object} - Meta tags object
 */
export function generateArticleMetadata(article, baseUrl = 'https://afcjapanstore.com') {
    const url = `${baseUrl}/artikel/${article.slug}`;
    const image = article.featuredImage || `${baseUrl}/default-article.jpg`;

    return {
        title: article.metaTitle || article.title,
        description: article.metaDescription || article.excerpt,
        keywords: article.keywords?.join(', '),
        openGraph: {
            title: article.metaTitle || article.title,
            description: article.metaDescription || article.excerpt,
            url: url,
            type: 'article',
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
            article: {
                publishedTime: article.publishedAt || article.createdAt,
                modifiedTime: article.updatedAt,
                authors: [article.author || 'AFC Japan Store ID'],
                tags: article.keywords || [],
            },
        },
        twitter: {
            card: 'summary_large_image',
            title: article.metaTitle || article.title,
            description: article.metaDescription || article.excerpt,
            images: [image],
        },
    };
}
