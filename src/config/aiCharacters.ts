// 首先定义模型配置
export const modelConfigs = [
  {
    model: "qwen-plus",
    apiKey: "DASHSCOPE_API_KEY", // 这里存储环境变量的 key 名称
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "deepseek-v3",
    apiKey: "DASHSCOPE_API_KEY",
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "hunyuan-standard",
    apiKey: "HUNYUAN_API_KEY",
    baseURL: "https://api.hunyuan.cloud.tencent.com/v1"
  },
  {
    model: "ep-20250302115943-c2wrf",//豆包模型|火山引擎接入点（改成自己的）
    apiKey: "ARK_API_KEY",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3"
  },
  {
    model: "ep-20250302121141-svzbn",//deepseek-r火山引擎接入点（改成自己的）
    apiKey: "ARK_API_KEY",
    baseURL: "https://ark.cn-beijing.volces.com/api/v3"
  },
  {
    model: "glm-4-plus",
    apiKey: "GLM_API_KEY",
    baseURL: "https://open.bigmodel.cn/api/paas/v4/"
  },
  {
    model: "qwen-turbo",//调度模型
    apiKey: "DASHSCOPE_API_KEY", // 这里存储环境变量的 key 名称
    baseURL: "https://dashscope.aliyuncs.com/compatible-mode/v1"
  },
  {
    model: "gemini-2.0-pro-exp-02-05",//调度模型
    apiKey: "GEMINI_API_KEY", // 这里存储环境变量的 key 名称
    baseURL: "https://generativelanguage.googleapis.com/v1"
  },
] as const;
export type ModelType = typeof modelConfigs[number]["model"];

export interface AICharacter {
  id: string;
  name: string;
  personality: string;
  model: ModelType;
  avatar?: string;  // 可选的头像 URL
  custom_prompt?: string; // 可选的个性提示
  tags?: string[]; // 可选的标签
}

// 调度器配置信息
export function shedulerAICharacter(message: string, allTags: string[]): AICharacter {
  return {
      id: 'ai0',
      name: "调度器",
      personality: "sheduler",
      model: modelConfigs[5].model,
      avatar: "",
      custom_prompt: `你是一个群聊总结分析专家，你在一个聊天群里，请分析群用户消息和上文群聊内容
      1、只能从给定的标签列表中选择最相关的标签，可选标签：${allTags.join(', ')}。
      2、请只返回标签列表，用逗号分隔，不要有其他解释, 不要有任何前缀。
      3、回复格式示例：文字游戏, 生活助手, 娱乐`
    }
}

// 添加一个函数来生成带有群名的角色配置
export function generateAICharacters(groupName: string): AICharacter[] {
  return [
    { 
      id: 'ai1', 
      name: "大纲", 
      personality: "high_eq",
      model: modelConfigs[2].model,
      avatar: "",  // 如果有头像资源可以添加路径,
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责根据其他人提供的内容提出意见`
    },
    { 
      id: 'ai2', 
      name: "剧情", 
      personality: "low_eq",
      model: modelConfigs[2].model,
      avatar: "",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责情节冲突"剧情"部分的创作，`
    },
    { 
      id: 'ai3', 
      name: "谷哥", 
      personality: "gemini",
      model: modelConfigs[7].model,
      avatar: "",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责根据其他人提供的内容完成创作并润色`
    },
    { 
      id: 'ai4', 
      name: "元宝", 
      personality: "yuanbao",
      model: modelConfigs[2].model,
      avatar: "/img/yuanbao.png",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责规划"大纲"部分的创作`,
      tags: ["微信", "聊天", "新闻报道", "文字游戏", "生活助手", "娱乐", "信息总结"]
    },
    { 
      id: 'ai5', 
      name: "豆包", 
      personality: "doubao",
      model: modelConfigs[3].model,
      avatar: "/img/doubao_new.png",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责情节冲突"剧情"部分的创作`,
      tags: ["聊天", "文字游戏", "学生", "娱乐", "抖音"]
    },
    { 
      id: 'ai6', 
      name: "千问", 
      personality: "qianwen",
      model: modelConfigs[0].model,
      avatar: "/img/qwen.jpg",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责角色设定"人物"部分的创作`,
      tags: ["广告文案","分析数据","文字游戏","信息总结", "聊天"]
    },
    { 
      id: 'ai7', 
      name: "DeepSeek", 
      personality: "deepseek-r1",
      model: modelConfigs[4].model,
      avatar: "/img/ds.svg",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责规划整体结构和方向创作`,
      tags: ["深度推理", "编程", "文字游戏", "数学", "信息总结", "聊天"]
    },
    { 
      id: 'ai8', 
      name: "智谱", 
      personality: "glm",
      model: modelConfigs[5].model,
      avatar: "/img/glm.gif",
      custom_prompt: `你是一个小说家，正在集体写作一本小说，你当前在一个叫"${groupName}" 的群里，负责根据其他人提供的内容提出意见`,
      tags: ["深度推理","数学","信息总结", "分析数据","文字游戏", "聊天"]
    }
  ];
}

