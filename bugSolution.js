```javascript
// Solution: Force re-render with a key
import { useState, useEffect } from 'react';

function MyComponent() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Simulate dynamic content update
    const intervalId = setInterval(() => {
      setIsHovered(!isHovered);
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div key={isHovered} className={`bg-red-500 ${isHovered ? 'bg-blue-700' : ''}`} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
      Hover over me!
    </div>
  );
}
export default MyComponent;
```