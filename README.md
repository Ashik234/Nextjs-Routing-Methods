# Next.js Routing Examples

A comprehensive repository demonstrating the core routing patterns in Next.js 14+ with the App Router.

## 🚀 Features

This repository showcases three main routing patterns:

### 1. Basic Routes
- **File-based routing** with `page.tsx`, `layout.tsx`
- **Dynamic routes** with `[id]` segments
- **Nested routes** for hierarchical navigation

**Examples:**
- `/about` - Simple static route
- `/products` - Product listing with dynamic routes
- `/products/[id]` - Individual product pages
- `/blog` - Blog listing
- `/blog/[id]` - Individual blog posts

### 2. Parallel Routes
- **Named slots** using `@folder` convention
- **Simultaneous rendering** of multiple route segments
- **Independent navigation** within slots
- **Default fallbacks** with `default.tsx`

**Example:**
- `/dashboard` - Dashboard with parallel `@analytics` and `@team` routes
- Shows analytics metrics and team status simultaneously
- Each section can be navigated independently

### 3. Intercepting Routes
- **Modal experiences** while preserving URL state
- **Conditional rendering** based on navigation context
- **Shareable URLs** that work in both modal and full-page contexts
- **Graceful fallbacks** for direct navigation

**Example:**
- `/gallery` - Photo gallery with modal intercepting routes
- Photos open in modals when navigated from gallery
- Direct URLs show full-page photo views
- Uses `(.)` convention for same-level interception

## 📁 Project Structure

\`\`\`
app/
├── layout.tsx                 # Root layout
├── page.tsx                   # Home page
├── globals.css               # Global styles
│
├── about/
│   └── page.tsx              # Basic route: /about
│
├── products/
│   ├── page.tsx              # Products listing: /products
│   └── [id]/
│       └── page.tsx          # Dynamic route: /products/[id]
│
├── blog/
│   ├── page.tsx              # Blog listing: /blog
│   └── [id]/
│       └── page.tsx          # Dynamic route: /blog/[id]
│
├── dashboard/                # Parallel routes example
│   ├── layout.tsx            # Layout with parallel slots
│   ├── page.tsx              # Main dashboard content
│   ├── @analytics/           # Analytics slot
│   │   ├── page.tsx
│   │   └── default.tsx
│   └── @team/                # Team slot
│       ├── page.tsx
│       └── default.tsx
│
├── gallery/                  # Intercepting routes example
│   ├── layout.tsx            # Layout with modal slot
│   ├── page.tsx              # Gallery listing
│   └── @modal/
│       ├── (.)photo/
│       │   └── [id]/
│       │       └── page.tsx  # Intercepted modal route
│       └── default.tsx
│
└── photo/
    └── [id]/
        └── page.tsx          # Full page photo view
\`\`\`

## 🛠️ Key Concepts Demonstrated

### Basic Routes
- **File-based routing**: Each `page.tsx` becomes a route
- **Dynamic segments**: `[id]` captures URL parameters
- **Nested layouts**: Shared UI across route segments

### Parallel Routes
- **Slots as Props**: Layout receives `analytics` and `team` as props
- **Independent State**: Each slot maintains its own navigation state
- **Default Fallbacks**: `default.tsx` files handle unmatched routes
- **Conditional Rendering**: Different content based on route matching

### Intercepting Routes
- **Route Interception**: `(.)` intercepts same-level routes
- **Modal Context**: Shows content in modal when intercepted
- **URL Preservation**: Maintains proper URLs for sharing
- **Fallback Behavior**: Direct navigation shows full page

## 🎯 Use Cases

### Basic Routes
- Standard website pages
- Product catalogs
- Blog systems
- Documentation sites

### Parallel Routes
- **Dashboards** with multiple data sections
- **Admin panels** with sidebar + main content
- **Analytics views** with charts + tables
- **Social feeds** with posts + sidebar

### Intercepting Routes
- **Photo galleries** with modal previews
- **Product quick views** without leaving listing
- **User profiles** in modal overlays
- **Document previews** in modal windows

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd nextjs-routing-examples
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📚 Learning Path

1. **Start with Basic Routes** - Understand file-based routing
2. **Explore Dynamic Routes** - Learn about `[id]` parameters
3. **Try Parallel Routes** - See simultaneous rendering in action
4. **Test Intercepting Routes** - Experience modal navigation
5. **Combine Patterns** - Build complex routing scenarios

## 🔗 Useful Links

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Parallel Routes Guide](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [Intercepting Routes Guide](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
- [File Conventions Reference](https://nextjs.org/docs/app/api-reference/file-conventions)

## 🤝 Contributing

Feel free to contribute by:
- Adding more routing examples
- Improving documentation
- Fixing bugs or issues
- Suggesting new patterns

## 📄 License

This project is open source and available under the MIT License.
