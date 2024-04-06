import * as React from 'react';
import SourceCodeSection from '@site/src/components/SourceCodeSection';
import MyComponentSource from '!!raw-loader!@site/src/components/examples/source-code/AnimatedRating';
import MyComponentStyleSource from '!!raw-loader!@site/src/css/AnimatedRating.css';

const BluePicker = () => {
  return (
    <SourceCodeSection
      componentSource={MyComponentSource}
      componentStyleSource={MyComponentStyleSource}
    />
  );
};

export default BluePicker;
