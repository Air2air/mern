import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';
import Button from 'react-bulma-companion/lib/Button';
import Input from 'react-bulma-companion/lib/Input';

import { attemptAddTopic } from '_thunks/topics';
import useKeyPress from '_hooks/useKeyPress';

export default function AddTopic() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleAddTopic = () => {
    if (text) {
      dispatch(attemptAddTopic(text));
      setText('');
    }
  };

  useKeyPress('Enter', handleAddTopic);

  const updateText = e => setText(e.target.value);

  return (
    <Columns className="add-topic" gapless>
      <Column size="10">
        <Input value={text} onChange={updateText} />
      </Column>
      <Column size="2">
        <Button color="success" onClick={handleAddTopic} fullwidth>
          Add
        </Button>
      </Column>
    </Columns>
  );
}
