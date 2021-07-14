import "./App.css";
import { BatchUpdate } from "./components/batch-update";
import { SuspensePage } from "./components/suspense";
import { StartTransitionPage } from "./components/start-transition";
import { DeferredValuePage } from "./components/deferred-value";

// createRoot
// Batch update - flushSync
// Suspense
// startTransition -- useDeferredValue
// Streaming ssr

export const App = () => {
  return (
    <div>
      {/* <BatchUpdate /> */}
      {/* <SuspensePage /> */}
      {/* <StartTransitionPage /> */}
      <DeferredValuePage />
    </div>
  );
};
