import React from 'react';
import { Container, Heading, LayoutSet, Link, List } from 'fannypack';

export default function TalksSection() {
  return (
    <LayoutSet width="100%">
      <Container breakpoint="tablet">
        <LayoutSet spacing="major-2">
          <Heading>Talks</Heading>
          <List listStyleType="disc" listStylePosition="inside" marginLeft={{ 'min-tablet': 'major-2' }}>
            <List.Item>
              {'"'}
              Take a load off with React
              {'"'}
            </List.Item>
            <List listStyleType="circle" listStylePosition="inside">
              <List.Item>ReactConf AU, 2020</List.Item>
              <List.Item>MelbJS, 2020</List.Item>
              <List.Item>ComponentsConf Meetup, 2019</List.Item>
            </List>
            <List.Item>
              {'"'}
              Hooked on Hooks
              {'"'}
            </List.Item>
            <List listStyleType="circle" listStylePosition="inside">
              <List.Item>MelbJS, 2019</List.Item>
              <List.Item>
                <Link href="https://youtu.be/bkJ_SFhUrZ4?t=4260">React Melbourne, 2018</Link>
              </List.Item>
            </List>
            <List.Item>
              {'"'}
              Async/await in Node
              {'"'}
            </List.Item>
            <List listStyleType="circle" listStylePosition="inside">
              <List.Item>Node Melbourne, 2017</List.Item>
            </List>
          </List>
        </LayoutSet>
      </Container>
    </LayoutSet>
  );
}