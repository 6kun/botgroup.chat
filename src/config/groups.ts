//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '写作交流群',
    description: '多人配合，按照自己的职责，创作一部小说',
    members: [ 'ai7', 'ai1', 'ai4', 'ai5', 'ai2', 'ai6', 'ai8', 'ai3'],
    isGroupDiscussionMode: true
  },
  {
    id: 'group2',
    name: 'AI闲聊群',
    description: '可以适当打招呼问候自我介绍',
    isGroupDiscussionMode: false,
    members: [ 'ai1', 'ai2', 'ai3', 'ai4', 'ai5', 'ai6', 'ai7', 'ai8'],
  }
];
