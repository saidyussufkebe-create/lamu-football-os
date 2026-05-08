import React from 'react';

export interface Post {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    verified: boolean;
  };
  content: string;
  timestamp: string;
  media?: string[];
  likes: number;
  comments: number;
  shares: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

export interface Story {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  hasUnread: boolean;
}