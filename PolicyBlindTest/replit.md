# 블라인드 정책 선호 확인지 (Blind Policy Preference Test)

## Overview

This is a Korean political orientation assessment web application that helps users determine their political alignment through blind policy preference testing. The application presents 30 policy questions without revealing which political parties support them, allowing users to make decisions based purely on policy preferences rather than party loyalty.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: Static web application with no server-side dependencies
- **Multi-page structure**: Separate pages for home (index.html), survey (survey.html), and results (results.html)
- **Client-side state management**: Uses localStorage for persisting user progress and results
- **Responsive design**: Mobile-first approach with Korean typography (Noto Sans KR font)

### Key Components

#### 1. Survey System
- **Question Management**: 30 policy questions across multiple categories (economy, foreign policy, social issues, etc.)
- **Progress Tracking**: Real-time progress bar and question navigation
- **Answer Persistence**: Saves user responses to localStorage to prevent data loss

#### 2. Political Party Analysis Engine
- **Party Database**: Detailed information for 5 major Korean political parties:
  - 국민의힘 (People Power Party) - Conservative
  - 더불어민주당 (Democratic Party) - Center-left
  - 개혁신당 (Reform Party) - Centrist reform
  - Additional parties with full policy positions
- **Scoring Algorithm**: Calculates compatibility percentages based on policy alignment

#### 3. Results Display System
- **Primary Match**: Shows top party match with percentage
- **Category Breakdown**: Policy area analysis (economy, social, foreign policy, etc.)
- **Comparative Analysis**: Shows alignment with all parties
- **Social Sharing**: Meta tags configured for social media sharing

## Data Flow

1. **Question Presentation**: Questions loaded from SURVEY_QUESTIONS array in data.js
2. **Answer Collection**: User responses stored in localStorage as array
3. **Score Calculation**: ResultsManager calculates party compatibility scores
4. **Result Display**: Multiple visualizations of political alignment
5. **Persistence**: All data maintained client-side for session continuity

## External Dependencies

### Third-party Services
- **Google Fonts**: Noto Sans KR for Korean typography
- **Google AdSense**: Monetization through display advertisements
- **Social Media Meta Tags**: Open Graph tags for sharing optimization

### No Backend Dependencies
- **No Database**: All data stored client-side
- **No Server**: Static hosting capable
- **No APIs**: Self-contained application

## Deployment Strategy

### Static Hosting Requirements
- **Simple Deployment**: Can be hosted on any static web hosting service
- **No Build Process**: Direct file serving without compilation
- **CDN Compatible**: All assets can be cached effectively

### Performance Considerations
- **Minimal Dependencies**: Only Google Fonts external dependency
- **Local Storage**: Fast client-side data persistence
- **Progressive Loading**: Questions loaded dynamically for smooth UX

### SEO Optimization
- **Korean Language**: Proper lang attributes and meta descriptions
- **Structured Content**: Semantic HTML for search engine crawling
- **Social Sharing**: Open Graph meta tags for social media previews

## Key Technical Decisions

### Client-Side Architecture Choice
- **Problem**: Need for simple, fast political assessment tool
- **Solution**: Pure client-side JavaScript application
- **Rationale**: Eliminates server costs, ensures user privacy, enables offline functionality
- **Trade-offs**: No user analytics, limited data collection capabilities

### LocalStorage for State Management
- **Problem**: Prevent loss of user progress during long survey
- **Solution**: Persistent storage using browser localStorage
- **Rationale**: Simple implementation, works offline, respects user privacy
- **Trade-offs**: Limited to single browser/device, data not synchronized

### Static Multi-Page Structure
- **Problem**: Clear separation of concerns for different app states
- **Solution**: Separate HTML files for each major section
- **Rationale**: Simple navigation, clear user flow, easy maintenance
- **Trade-offs**: Page reloads between sections, some code duplication

The application is designed for maximum accessibility and ease of use while maintaining political neutrality through its blind testing approach.