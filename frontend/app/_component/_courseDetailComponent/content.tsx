import { ContentItem } from '@/app/interface/content';
import React from 'react'


interface ContentProps {
  data: ContentItem;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <div style={{ flex: 1, padding: '1rem' }}>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  );
};

export default Content