# 🎬 CinemaHub - Movie Discovery Web App

A modern, responsive web application that helps you discover and search for movies you'll enjoy. Built with React and powered by the OMDB API, CinemaHub provides an intuitive interface for movie exploration with trending analytics powered by Appwrite.

## ✨ Features

- **🔍 Smart Movie Search**: Search for movies with debounced input for optimal performance
- **📊 Trending Movies**: View the most searched movies based on user activity
- **🎭 Movie Cards**: Beautiful, responsive movie cards with posters and details
- **⚡ Real-time Updates**: Live search results with loading states and error handling
- **📱 Responsive Design**: Optimized for all devices with Tailwind CSS
- **🚀 Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Technologies Used

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS 4
- **Backend**: Appwrite (Cloud Database)
- **API**: OMDB API for movie data
- **State Management**: React Hooks with custom state management
- **Utilities**: React-use for debounced search

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Appwrite account and project setup
- OMDB API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd movie-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_OMDB_API_KEY=your_omdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📁 Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx      # Individual movie display component
│   ├── Search.jsx         # Search input component
│   └── Spinner.jsx        # Loading spinner component
├── assets/                 # Static assets and images
├── App.jsx                # Main application component
├── appwrite.js            # Appwrite database operations
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌟 Key Features Explained

### Smart Search
- Debounced search input (1-second delay) to reduce API calls
- Real-time results with loading states
- Error handling for failed API requests

### Trending Analytics
- Tracks search terms and movie popularity
- Stores search data in Appwrite database
- Displays top 5 most searched movies

### Movie Display
- Responsive grid layout for movie cards
- Movie posters, titles, and basic information
- Fallback to default movies when no search is active

## 🔌 API Integration

### OMDB API
- Fetches movie data based on search queries
- Handles pagination for large result sets
- Error handling for API failures

### Appwrite Integration
- Cloud database for storing search analytics
- Real-time trending movie calculations
- Efficient data querying and updates

## 🎨 Styling & UI

- **Tailwind CSS 4**: Modern utility-first CSS framework
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Custom Patterns**: Background patterns and gradients for visual appeal
- **Loading States**: Smooth transitions and loading indicators

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OMDB API](https://www.omdbapi.com/) for providing movie data
- [Appwrite](https://appwrite.io/) for backend services
- [React](https://reactjs.org/) team for the amazing framework
- [Vite](https://vitejs.dev/) for the fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

If you have any questions or need help with the project, please open an issue on GitHub or contact the development team.

---

**Happy Movie Hunting! 🎬✨**
