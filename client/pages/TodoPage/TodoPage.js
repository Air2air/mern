import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import R from 'ramda';

import { attemptGetTopics } from '_thunks/topics';
import TopicSection from './../../templates/TopicSection';

export default function TopicPage() {
  const dispatch = useDispatch();
  const { user } = useSelector(R.pick(['user']));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (R.isEmpty(user)) {
      dispatch(push('/login'));
    } else {
      dispatch(attemptGetTopics())
        .catch(R.identity)
        .then(() => setLoading(false));
    }
  }, []);

  return !loading && (
    <div className="topic-page page">
      <TopicSection />
    </div>
  );
}
