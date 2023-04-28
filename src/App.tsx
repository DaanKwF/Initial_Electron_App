import { useState } from "react";

import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          This is an alert! Click the cross to dismiss!
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)} type="info">
        What is an alert???
      </Button>
    </div>
  );
}

export default App;
