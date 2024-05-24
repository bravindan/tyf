import React, { useEffect, useRef } from 'react';
import CircularProgress, { ProgressRef } from 'react-native-circular-progress-indicator';

export default function ProgressIndicator() {
  
  return (
    <CircularProgress
      value={100}
      radius={120}
      duration={1000000}
      progressValueColor={'#ecf0f1'}
      // activeStrokeColor={'#f39c12'}
      // activeStrokeColor={'#ecf0f1'}

      inactiveStrokeColor={'#ecf0f1'}
      inactiveStrokeOpacity={0.5}
      inactiveStrokeWidth={20}
      activeStrokeWidth={20}
      valueSuffix={'%'}
    />
  );
}
