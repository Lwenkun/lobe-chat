import {
  NeutralColors,
  Swatches,
  findCustomThemeName,
  neutralColors,
  neutralColorsSwatches,
} from '@lobehub/ui';
import { memo } from 'react';

import { useSettings } from '@/store/settings';

const ThemeSwatchesNeutral = memo(() => {
  const [neutralColor, setSettings] = useSettings((s) => [s.settings.neutralColor, s.setSettings]);

  const handleSelect = (v: any) => {
    const name = findCustomThemeName('neutral', v) as NeutralColors;
    setSettings({ neutralColor: name || '' });
  };

  return (
    <Swatches
      activeColor={neutralColor ? neutralColors[neutralColor] : undefined}
      colors={neutralColorsSwatches}
      onSelect={handleSelect}
    />
  );
});

export default ThemeSwatchesNeutral;