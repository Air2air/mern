import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { parseISO, formatDistanceToNow } from 'date-fns';


import { faBan } from '@fortawesome/free-solid-svg-icons/faBan';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import { faSave } from '@fortawesome/free-solid-svg-icons/faSave';
import { faSquare } from '@fortawesome/free-regular-svg-icons/faSquare';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons/faCheckSquare';

import { attemptToggleCompleteTopic, attemptUpdateTopic, attemptDeleteTopic } from '_thunks/topics';
import ConfirmModal from './../ConfirmModal';

const fromNow = date => formatDistanceToNow(parseISO(date), { addSuffix: true });

export default function Topic({ id, text, completed, createdAt, updatedAt }) {
  const dispatch = useDispatch();

  const [currentText, setCurrentText] = useState(text);
  const [edit, setEdit] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState('');
  const [createdMessage, setCreatedMessage] = useState('');

  const updateMessages = () => {
    setUpdatedMessage(updatedAt ? fromNow(updatedAt) : '');
    setCreatedMessage(fromNow(createdAt));
  };

  useEffect(() => {
    updateMessages();
    const interval = window.setInterval(updateMessages, 1000);

    return () => clearInterval(interval);
  }, [updatedAt]);

  const openModal = () => setConfirm(true);
  const closeModal = () => setConfirm(false);
  const updateText = e => setCurrentText(e.target.value);
  const editTopic = () => setEdit(true);

  const cancelEdit = () => {
    setEdit(false);
    setCurrentText(text);
  };

  const handleUpdateTopic = () => {
    if (currentText) {
      dispatch(attemptUpdateTopic(id, currentText))
        .then(() => setEdit(false));
    }
  };

  const toggleCompleteTopic = () => dispatch(attemptToggleCompleteTopic(id));

  const deleteTopic = () => dispatch(attemptDeleteTopic(id));

  return (
    <li className="topic box">
      <article className="media">
        <figure className="media-left">
          <span className="icon" onClick={toggleCompleteTopic} onKeyPress={toggleCompleteTopic}>
            {completed
              ? <FontAwesomeIcon icon={faCheckSquare} size="lg" />
              : <FontAwesomeIcon icon={faSquare} size="lg" />}
          </span>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <small>
                {`created ${createdMessage}`}
              </small>
            </p>
            {edit ? (
              <textarea
                className="textarea"
                value={currentText}
                onChange={updateText}
              />
            ) : (
              <p>
                {text}
              </p>
            )}
          </div>

          <nav className="level is-mobile">
            <div className="level-left">
              {!!updatedAt && (
                <small>
                  {`edited ${updatedMessage}`}
                </small>
              )}
            </div>
            <div className="level-right">
              {edit ? (
                <span className="icon space-right" onClick={handleUpdateTopic} onKeyPress={handleUpdateTopic}>
                  <FontAwesomeIcon icon={faSave} size="lg" />
                </span>
              ) : (
                <span className="icon space-right" onClick={editTopic} onKeyPress={editTopic}>
                  <FontAwesomeIcon icon={faPencilAlt} size="lg" />
                </span>
              )}
              {edit ? (
                <span className="icon" onClick={cancelEdit} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faBan} size="lg" />
                </span>
              ) : (
                <span className="icon" onClick={openModal} onKeyPress={cancelEdit}>
                  <FontAwesomeIcon icon={faTrashAlt} size="lg" />
                </span>
              )}
            </div>
          </nav>
        </div>
      </article>
      <ConfirmModal
        confirm={confirm}
        closeModal={closeModal}
        deleteTopic={deleteTopic}
      />
    </li>
  );
}

Topic.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
};

Topic.defaultProps = {
  updatedAt: null,
};
