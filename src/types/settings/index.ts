import { DeepPartial } from 'utility-types';

import type { LobeAgentSession } from '@/types/session';

import { GlobalBaseSettings } from './base';
import { GlobalLLMConfig } from './modelProvider';
import { GlobalTTSConfig } from './tts';

export type GlobalDefaultAgent = Pick<LobeAgentSession, 'config' | 'meta'>;

export * from './base';
export * from './modelProvider';
export * from './tts';

export type UserPrompt = {
  content: string;
  id: string;
  name: string;
};

export interface GlobalTool {
  dalle: {
    autoGenerate: boolean;
  };
}

export interface GlobalServerConfig {
  customModelName?: string;
  defaultAgent?: DeepPartial<GlobalDefaultAgent>;
  enabledOAuthSSO?: boolean;
  languageModel?: DeepPartial<GlobalLLMConfig>;
}

/**
 * 配置设置
 */
export interface GlobalSettings extends GlobalBaseSettings {
  defaultAgent: GlobalDefaultAgent;
  languageModel: GlobalLLMConfig;
  tool: GlobalTool;
  tts: GlobalTTSConfig;
  userPrompts: UserPrompt[];
}
