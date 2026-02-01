export type NewsItem = {
  id: string;
  date: string;
  category: 'Press' | 'Update' | 'Event';
  title: string;
  slug: string;
  content: string;
  image?: string;
};

export const newsData: NewsItem[] = [
  {
    id: '1',
    date: '2025.12.23',
    category: 'Press',
    title: 'Tabideaをプレリリースしました。',
    slug: 'tabidea-prerelease',
    content: `
      <p>この度、Tabideaは、新しい旅の体験を提供するプラットフォーム「Tabidea」をプレリリースいたしました。</p>
      <p>Tabideaは、「旅」と「アイデア」を掛け合わせ、予期せぬ「出会い」を創出するサービスです。これまでの旅行計画サービスとは一線を画し、ユーザーの潜在的な興味や関心に基づいて、まだ見ぬ目的地や体験を提案します。</p>
      <h3>主な特徴</h3>
      <ul>
        <li><strong>AIによるパーソナライズ提案:</strong> 独自のアルゴリズムが、あなたの好みに合わせた最適な旅のプランを生成します。</li>
        <li><strong>直感的なインターフェース:</strong> 複雑な操作は一切不要。いくつかの質問に答えるだけで、あなただけの旅が始まります。</li>
        <li><strong>コミュニティ機能:</strong> 同じ興味を持つ他のトラベラーと情報を共有し、新たな発見を得ることができます。</li>
      </ul>
      <p>今回のプレリリースでは、主要な機能を先行して公開しており、ユーザーの皆様からのフィードバックをもとに、さらなる改善を行ってまいります。グランドオープンは2026年春を予定しております。</p>
      <p>今後ともTabideaをよろしくお願いいたします。</p>
    `,
  },
];
