"use client";

import React from "react";
import { AlertCircle } from "lucide-react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-6">
          <div className="max-w-md w-full text-center space-y-6">
            <div className="flex justify-center">
              <AlertCircle className="h-16 w-16 text-accent" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Something went wrong
              </h1>
              <p className="text-foreground/60 mb-6">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: undefined });
                  window.location.href = "/";
                }}
                className="px-6 py-3 bg-foreground text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/30 focus-visible:ring-offset-1"
              >
                Go to Homepage
              </button>
            </div>
            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="text-left mt-8 p-4 bg-foreground/5 rounded-lg border border-foreground/10">
                <summary className="cursor-pointer text-sm font-bold text-foreground/60 mb-2">
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-foreground/40 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

