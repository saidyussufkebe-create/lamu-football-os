# Social Feed Implementation Plan

Transform the Home tab into a vibrant, glassmorphism-style social feed for Lamu Sports Hub.

## Phase 1: Social Feed Architecture
1. **Directory Setup**: Create `src/components/feed` for modular social components.
2. **Data Mocking**: Create initial mock data for stories and posts using generated images.

## Phase 2: Component Development
1. **Sticky Header**: 
    - Enhance existing header with LSH branding.
    - Add notification and message badges with real-time-like counters.
2. **Stories Row**:
    - Implement horizontal scrollable list.
    - Gradient rings for unread stories.
    - "Add Story" button with icon.
3. **Post Composer**:
    - 280-character limit with live counter.
    - Media buttons (Image, Video, Poll).
    - Image preview grid before posting.
4. **Feed Filters**:
    - Tab pills: All Posts, Following, Media, Matches.
5. **Rich Post Cards**:
    - Avatar with verification badges.
    - Timestamp and hashtag highlighting.
    - Responsive media grid (1-4 images).
    - Interaction row (Like, Comment, Share, Favorite).

## Phase 3: Interactions & State
1. **Interactions**:
    - Like: Animated heart (framer-motion) with counter.
    - Comment: Full modal with threaded replies.
    - Share: Bottom sheet with multiple options.
    - Favorite: Bookmark toggle.
2. **State Management**:
    - Use React `useState` for post interactions, composing, and filters.
    - Use `sonner` for interaction feedback.

## Phase 4: Integration
1. **App.tsx Update**:
    - Import `HomeFeed` component.
    - Set `dashboard` view to render `HomeFeed`.
    - Enhance the sticky header for both mobile and desktop.

## Phase 5: Advanced UX (Bonus/Refinement)
1. **Glassmorphism**: Apply `backdrop-blur` and translucent backgrounds to all feed elements.
2. **Responsive Design**: Ensure the feed looks great on mobile and desktop.
