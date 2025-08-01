# Epic Stream - Netflix-Style Streaming Platform

A modern, responsive streaming platform built with React, TypeScript, and Tailwind CSS. Features a dynamic sidebar navigation, video player integration, and trending content carousel.

## 🎬 Features

### **Main Menu Navigation**

- **Floating Sidebar**: Animated sidebar that expands on hover
- **Profile Section**: User profile with avatar and name
- **Navigation Icons**: Search, Home, TV Shows, Movies, Genres, Watch Later
- **Help Section**: LANGUAGE, GET HELP, EXIT options
- **Smooth Animations**: Left-to-right gradient opacity effects

### **Featured Content**

- **Dynamic Video Player**: Background video playback without controls
- **Movie Information**: Title, category, release year, MPA rating, duration
- **Interactive Buttons**: Play and More Info buttons
- **2-Second Delay**: Videos start playing after 2 seconds as per requirements

### **Trending Now Section**

- **Carousel Display**: Horizontal scrolling with 8 items visible
- **50 Item Limit**: Maximum 50 trending videos
- **Smart Sorting**: Recently viewed videos appear first
- **Session Storage**: Remembers user viewing history
- **Responsive Design**: Adapts to different screen sizes

### **Video Management**

- **Smooth Transitions**: Seamless video switching
- **Working Sample Videos**: Uses Google's public video samples
- **Background Playback**: Videos play in background without UI interference
- **State Management**: Proper video state handling

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd epic-stream

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Carousel**: React Slick
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📁 Project Structure

```
epic-stream/
├── src/
│   ├── components/
│   │   ├── HomePageHeading/     # Featured content display
│   │   ├── TrendingNow/         # Trending videos carousel
│   │   └── layout/
│   │       ├── Layout/          # Main layout wrapper
│   │       ├── Sidebar/         # Navigation sidebar
│   │       └── HomeWrapper/     # Home page wrapper
│   ├── pages/
│   │   ├── Home/                # Main home page
│   │   └── NotFound/            # 404 error page
│   ├── constants/
│   │   ├── data.json           # Movie/video data
│   │   └── index.ts            # Navigation items
│   ├── utils/
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── helper.ts           # Utility functions
│   ├── assets/                 # Images and icons
│   └── router.tsx              # Application routing
├── public/                     # Static assets
└── package.json
```

## 🎯 Key Features Implementation

### **Sidebar Navigation**

- Hover-based expansion with smooth animations
- Profile section at top, help section at bottom
- Transparent background for video recording compatibility
- Left-to-right gradient opacity for main content

### **Video Player**

- Background video playback without controls
- 2-second delay before video starts
- Smooth video switching between trending items
- Session storage for viewing history

### **Trending Carousel**

- React Slick carousel with 8 visible items
- Responsive design for different screen sizes
- Click handlers for video selection
- Smart sorting based on viewing history

### **404 Error Handling**

- Custom 404 page with navigation options
- Go Back and Go Home buttons
- Consistent styling with main application

## 🔧 Configuration

### **Video URLs**

All sample videos use Google's public video storage:

- BigBuckBunny.mp4
- ElephantsDream.mp4
- ForBiggerBlazes.mp4
- And more...

### **Data Structure**

```typescript
interface TrendingItem {
  Id: string;
  Title: string;
  CoverImage: string;
  TitleImage: string;
  Date: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
  Duration: string;
  VideoUrl: string;
  Description: string;
}
```

## 🎨 Design Features

- **Dark Theme**: Netflix-style dark interface
- **Responsive Design**: Works on desktop and mobile
- **Smooth Animations**: CSS transitions and transforms
- **Modern UI**: Clean, professional streaming platform look
- **Accessibility**: Proper contrast and hover states

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The application can be deployed to any static hosting service:

```bash
# Build the application
npm run build

# Deploy the dist/ folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎬 Demo

The application demonstrates:

- Modern React patterns with TypeScript
- Responsive design with Tailwind CSS
- Video player integration
- State management best practices
- Clean component architecture

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**
