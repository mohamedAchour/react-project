import React from 'react';

interface SubmittButtonProps {
  disabled: boolean;
  isSubmitting: boolean;
  label?: string;
}

export const SubmittButton = (props: SubmittButtonProps) => {
  const { disabled, isSubmitting, label } = props;
  return (
    <button type="submit" disabled={disabled} className={`btn btn-primary`}>
      <span
        className={
          isSubmitting ? 'spinner-border spinner-border-sm me-2' : 'd-none'
        }
        role="status"
        aria-hidden="true"
      ></span>
      {/* {isSubmitting ? 'Loging...' : 'Login'} */}
      {label || 'submit'}
    </button>
  );
};
