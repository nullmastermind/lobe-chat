import { BookX, Bot, Mic2, Settings2, Webhook } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { SettingsTabs } from '@/store/global/initialState';

import Item from './Item';

export interface SettingListProps {
  activeTab?: SettingsTabs;
  mobile?: boolean;
}

const SettingList = memo<SettingListProps>(({ activeTab, mobile }) => {
  const { t } = useTranslation('setting');

  const items = [
    { icon: Settings2, label: t('tab.common'), value: SettingsTabs.Common },
    { icon: Webhook, label: t('tab.llm'), value: SettingsTabs.LLM },
    { icon: Mic2, label: t('tab.tts'), value: SettingsTabs.TTS },
    { icon: BookX, label: t('tab.prompt'), value: SettingsTabs.Prompt },
    { icon: Bot, label: t('tab.agent'), value: SettingsTabs.Agent },
  ];

  return items.map(({ value, icon, label }) => (
    <Link aria-label={label} href={`/settings/${value}`} key={value}>
      <Item
        active={mobile ? false : activeTab === value}
        hoverable={!mobile}
        icon={icon}
        label={label}
      />
    </Link>
  ));
});

export default SettingList;
