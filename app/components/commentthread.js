<CommentThread>
  <Comment author="Someone Else" postDate="20 hrs">
  hope everything is ok!</Comment>
  ...
</CommentThread>

import React from 'react';
import CommentEntry from './commententry';

export default class CommentThread extends React.Component {
  render() {
    return (
      <ul className="media-list">
        {React.Children.map(this.props.children, function(child) {
        return (
          <li className="media">
          {child}
          </li>
        )
        })}
        <li className="media">
          <CommentEntry />
        </li>
      </ul>
    )
  }
}
