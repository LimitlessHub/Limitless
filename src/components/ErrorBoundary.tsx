import React, { Component, ErrorInfo, ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-red-900/20 p-4">
          <Card className="w-full max-w-2xl bg-gray-800 border-red-500/50 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-3 text-red-400">
                <AlertTriangle className="w-8 h-8" />
                <span className="text-2xl">Application Error</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 mb-4">
                Sorry, something went wrong. This is the error boundary catching a runtime error.
              </p>
              <details className="bg-gray-900/70 p-4 rounded-md">
                <summary className="cursor-pointer text-blue-300">Error Details</summary>
                <pre className="mt-2 text-sm text-red-300 whitespace-pre-wrap break-all" style={{ fontFamily: 'monospace' }}>
                  {this.state.error?.toString()}
                  <br />
                  <br />
                  {this.state.error?.stack}
                </pre>
              </details>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
