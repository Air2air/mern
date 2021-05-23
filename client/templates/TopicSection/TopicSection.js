import React from 'react';
import AddTopic from './../AddTopic';
import TopicList from './../TopicList';

import Section from 'react-bulma-companion/lib/Section';
import Title from 'react-bulma-companion/lib/Title';
import Columns from 'react-bulma-companion/lib/Columns';
import Column from 'react-bulma-companion/lib/Column';

export default function TopicSection() {
  return (
    <Section className="topic-section">
      <Title size="1" className="has-text-centered">
        Topic List:
      </Title>
      <Columns>
        <Column size="8" offset="2" className="has-text-centered">
          <AddTopic />
        </Column>
      </Columns>
      <Columns>
        <Column size="8" offset="2" className="has-text-left">
          <TopicList />
        </Column>
      </Columns>
    </Section>
  );
}
