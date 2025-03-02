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
    members: [ 'ai7', 'ai4', 'ai5', 'ai6', 'ai8', 'ai3'],
    isGroupDiscussionMode: false
  },
  {
    id: 'group2',
    name: '成语接龙游戏',
    description: '可以适当打招呼问候自我介绍，但是本群主线是成语接龙游戏，请严格按照文字成语接龙规则，不能过度闲聊',
    isGroupDiscussionMode: true,
    members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
  }
];
