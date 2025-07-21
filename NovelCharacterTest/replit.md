# Replit.md

## Overview

This is a multilingual personality quiz web application based on the popular Korean webnovel "Omniscient Reader's Viewpoint" (전지적 독자시점). The application allows users to take a personality assessment to determine which character from the series they are most similar to. The quiz supports multiple languages (Korean, English, Japanese, Chinese) and includes social sharing features and Google AdSense integration for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Type**: Single Page Application (SPA)
- **Technology**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: CSS Grid and Flexbox with gradient backgrounds and glass-morphism effects
- **Responsive Design**: Mobile-first approach with viewport meta tags
- **Fonts**: Google Fonts (Noto Sans family for multilingual support)
- **Icons**: Font Awesome 6.4.0

### Language Support
- **Internationalization**: Client-side translation system
- **Supported Languages**: Korean (ko), English (en), Japanese (ja), Chinese (zh)
- **Storage**: LocalStorage for language preference persistence
- **Implementation**: Object-based translation dictionary with dynamic content switching

### Data Architecture
- **Character Data**: Static JavaScript objects containing character profiles
- **Quiz Logic**: Question-answer mapping with weighted scoring system
- **Structure**: Each character has traits, personality descriptions, strengths, weaknesses, and relationships

## Key Components

### 1. Character Database (`characters.js`)
- Contains detailed character profiles for 8 main characters
- Multilingual character descriptions and personality traits
- Relationship mappings between characters
- Character avatars and identifying information

### 2. Quiz Engine (`quiz-data.js`, `script.js`)
- 20-question personality assessment
- Weighted scoring system that maps answers to character traits
- Progress tracking and answer storage
- Result calculation algorithm

### 3. Translation System (`translations.js`)
- Comprehensive multilingual support
- Dynamic UI text replacement
- Language preference persistence
- Fallback mechanism for missing translations

### 4. UI Components
- **Home Screen**: Character preview grid and quiz introduction
- **Quiz Interface**: Progressive question display with answer selection
- **Results Screen**: Detailed character match with personality analysis
- **Language Selector**: Fixed position dropdown for language switching

### 5. Monetization Integration
- Google AdSense implementation
- Ad placement containers (header, sidebar, content areas)
- Responsive ad units

## Data Flow

1. **Initialization**: Load saved language preference and initialize UI
2. **Quiz Flow**: 
   - User selects answers → Store in userAnswers array
   - Progress tracking through currentQuestionIndex
   - Calculate character matches based on weighted scoring
3. **Result Generation**: 
   - Aggregate scores across all character traits
   - Determine best match character
   - Display comprehensive personality analysis
4. **Social Sharing**: Generate shareable text with character result

## External Dependencies

### CDN Resources
- **Google Fonts**: Noto Sans family for multilingual typography
- **Font Awesome**: Icon library for UI elements
- **Google AdSense**: Monetization platform

### APIs and Services
- **Google AdSense**: Advertisement serving and revenue generation
- **Social Sharing**: Native Web Share API with fallback mechanisms

### Browser APIs
- **LocalStorage**: Language preference and user data persistence
- **Web Share API**: Native sharing capabilities on supported devices

## Deployment Strategy

### Static Hosting Ready
- Pure client-side application requiring no server-side processing
- All assets are static files (HTML, CSS, JS)
- CDN-friendly architecture with external resource optimization

### Performance Optimizations
- Preconnect hints for external font resources
- Async loading for non-critical scripts (AdSense)
- Efficient CSS with modern layout techniques
- Minimal JavaScript bundle with modular organization

### SEO and Social Media
- Comprehensive meta tags for search optimization
- Open Graph tags for social media sharing
- Semantic HTML structure
- Language-specific content optimization

### Scalability Considerations
- Modular code structure for easy feature additions
- Extensible character and question databases
- Language system designed for easy translation additions
- Component-based CSS architecture for maintainability

The application is designed to be easily deployable on static hosting platforms like Netlify, Vercel, or GitHub Pages, with all necessary configurations included for immediate deployment.