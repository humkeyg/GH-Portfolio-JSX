import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

<div id="app-modal"/>

function ModalContainer({ setOpen, data, setData }) {
  const [localData, setLocalData] = useState(data);
  const { clicks } = localData;
  function close() {
    setOpen(false);
  }
  function submit() {
    setData({
      clicks,
    });
    close();
  }
  const content = new Array(1).fill(
    <p>
      Edit the clicks below by clicking on the number input or typing in your
      own value.
    </p>,
  );
  return ReactDOM.createPortal(
    <>
      <div className='modal-shadow' onClick={close} />
      <div className='modal'>
        <div className='modal-banner'>Edit Clicks</div>
        <div className='modal-content'>
          {content}
          <label>
            Clicks
            <input
              value={clicks}
              type="number"
              onChange={e => setLocalData({ clicks: e.target.value })}
            />
          </label>
        </div>
        <div>
          <button className='confirm-button' onClick={submit}> Submit </button>
        </div>
      </div>
    </>,
    document.getElementById('app-modal'),
  );
}
export function ModalExample(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ clicks: 0 });
  return (
    <div>
      <div>Clicks: {data.clicks}</div>
      <button className='main-button'
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </button>
      {open && (
        <ModalContainer
          {...props}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      )}
    </div>
  );
}