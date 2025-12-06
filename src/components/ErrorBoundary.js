import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.error('[ErrorBoundary] Caught error:', error, errorInfo, {
      label: this.props.label || 'unknown'
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', color: '#b00020' }}>
          <h2>Une erreur est survenue{this.props.label ? ` dans ${this.props.label}` : ''}.</h2>
          <p>Merci de recharger la page ou de réessayer plus tard.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;


