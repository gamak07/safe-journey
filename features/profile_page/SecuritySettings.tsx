'use client'

import React, { useState } from 'react';
import { FiKey, FiChevronRight } from 'react-icons/fi';
import Toggle from '../../ui/Toggle';
import { FaChevronRight, FaKey } from 'react-icons/fa';

type settingType = 'toggle' | 'link';

interface SecuritySetting {
  key: string;
  title: string;
  desc: string;
  icon?: React.ReactNode;
  enabled?: boolean;
  type: settingType;
}

const securitySettings: SecuritySetting[] = [
  {
    key: 'changePassword',
    title: 'Change Password',
    desc: 'Update your account password',
    icon: <FaKey className="text-xl text-gray-500 mr-3" />,
    type: 'link',
  },
  {
    key: 'twoFactor',
    title: 'Two-Factor Authentication',
    desc: 'Add an extra layer of security',
    enabled: false,
    type: 'toggle',
  },
  {
    key: 'biometric',
    title: 'Biometric Login',
    desc: 'Use fingerprint or face recognition',
    enabled: true,
    type: 'toggle',
  },
  {
    key: 'location',
    title: 'Location Sharing',
    desc: 'Share location with emergency contacts',
    enabled: true,
    type: 'toggle',
  },
];


export default function SecuritySettings() {
  const [settings, setSettings] = useState(securitySettings);

  const handleToggle = (idx:any) => {
    setSettings(settings => settings.map((s, i) => i === idx ? { ...s, enabled: !s.enabled } : s));
  };

  return (
    <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Security Settings</h2>
      <div className="divide-y divide-gray-200">
        {settings.map((item, idx) => (
          <div key={item.key} className="flex items-center justify-between py-5">
            <div className="flex items-center">
              {item.icon && <span>{item.icon}</span>}
              <div>
                <div className={`text-base font-semibold text-gray-900${item.icon ? '' : ''}`}>{item.title}</div>
                <div className="text-sm text-gray-500">{item.desc}</div>
              </div>
            </div>
            {item.type === 'toggle' ? (
              <Toggle checked={!!item.enabled} onChange={() => handleToggle(idx)} />
            ) : (
              <FaChevronRight className="text-gray-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
