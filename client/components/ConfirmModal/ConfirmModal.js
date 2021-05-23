import React from 'react';
import PropTypes from 'prop-types';

import Modal from 'react-bulma-companion/lib/Modal';

import ConfirmDeleteTopic from './../ConfirmDeleteTopic';

export default function ConfirmModal({ confirm, closeModal, deleteTopic }) {
  return (
    <Modal className="confirm-modal" active={confirm}>
      <Modal.Background />
      <Modal.Content>
        <ConfirmDeleteTopic closeModal={closeModal} deleteTopic={deleteTopic} />
      </Modal.Content>
      <Modal.Close size="large" aria-label="close" onClick={closeModal} />
    </Modal>
  );
}

ConfirmModal.propTypes = {
  confirm: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  deleteTopic: PropTypes.func.isRequired,
};
