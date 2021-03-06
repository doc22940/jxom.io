import React from 'react';
import { Container, Heading, Stack, Link, List } from 'bumbag';

export default function TalksSection() {
  return (
    <Stack width="100%">
      <Container breakpoint="tablet">
        <Stack spacing="major-2">
          <Heading>Talks</Heading>
          <List listStyleType="disc" listStylePosition="inside" marginLeft={{ 'min-tablet': 'major-2' }} fontSize={{ default: '400', mobile: '300' }}>
            <List.Item>
              {'"'}
              Take a load off with React
              {'"'}
            </List.Item>
            <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
              <List.Item>
                <Link href="https://youtu.be/XpdernT9E64">ReactConf AU, 2020</Link>
              </List.Item>
              <List.Item>MelbJS, 2020</List.Item>
              <List.Item>ComponentsConf Meetup, 2019</List.Item>
            </List>
            <List.Item marginTop="major-2">
              {'"'}
              Hooked on Hooks
              {'"'}
            </List.Item>
            <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
              <List.Item>MelbJS, 2019</List.Item>
              <List.Item>
                <Link href="https://youtu.be/bkJ_SFhUrZ4?t=4260">React Melbourne, 2018</Link>
              </List.Item>
            </List>
            <List.Item marginTop="major-2">
              {'"'}
              Async/await in Node
              {'"'}
            </List.Item> 
            <List listStyleType="circle" listStylePosition="inside" marginLeft="major-4">
              <List.Item>Node Melbourne, 2017</List.Item>
            </List>
          </List>
        </Stack>
      </Container>
    </Stack>
  );
}
