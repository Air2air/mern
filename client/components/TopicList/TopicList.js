import React from 'react';
import { useSelector } from 'react-redux';
import R from 'ramda';

import Topic from './../Topic';

export default function TopicList() {
  const { topics } = useSelector(R.pick(['topics']));

  return (
    <ul className="topic-list">
      {R.reverse(topics).map(topic => <Topic key={topic.id} {...topic} />)}
    </ul>
  );
}
