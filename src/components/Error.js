import React from 'react';
import { useSelector } from 'react-redux';

function Error() {
  const { errorState } = useSelector((state) => ({
    errorState: state.fetchReducer.error,
  }));

  return (
    <div>
      {errorState ? (
        <p className="error">
          <strong>{errorState.response.status} : </strong>
          {errorState.response.data.message}
        </p>
      ) : null}
    </div>
  );
}

export default Error;
