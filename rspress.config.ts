import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'AI Agent HandBook',
  description:
    '按照 Agent 的架构、构建、运行、治理和调优应用生命周期，总结企业级 Agent 落地实践。',
  logoText: 'AI Agent HandBook',
  base: '/ai-agent-handbook/',
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/Master-Frank/ai-agent-handbook',
      },
    ],
    lastUpdated: true,
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新',
    prevPageText: '上一页',
    nextPageText: '下一页',
    searchPlaceholderText: '搜索文档',
  },
});
