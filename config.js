/**
 * 个人网站配置文件
 * 修改此文件中的数据可以自定义网站内容
 */

const websiteConfig = {
  // 基本信息
  basics: {
    name: "Chendaye",
    title: "全栈开发工程师",
    devName: "全栈开发者", // 首页终端显示的名称
    location: "重庆, 中国",
    email: "i@chendaye.com",
    github: "github.com/ichendaye",
    githubUrl: "https://github.com/ichendaye",
    linkedin: "#",
    linkedinUrl: "#",
    wechat: "#",
    status: "目前正在寻找挑战性项目和创新机会...", // 首页状态消息
    education: "计算机科学与技术学士",
    experience: "10年+",
  },

  // GitHub置顶项目
  githubPinnedRepos: [
    // {
    //   name: "",
    //   description: "XXX系统",
    //   language: "TypeScript",
    //   languageColor: "#2b7489", // JavaScript颜色
    //   stars: 1138,
    //   forks: 135,
    //   repoUrl: "https://github.com/123xiao/sex-agreement-app",
    //   demoUrl: "https://001.123408.xyz",
    //   topics: ["react", "node", "Next", "DaisyUI"],
    // }
  ],

  // 技能列表（首页终端显示）
  skills: ["Java", "JavaScript", "Python", "React", "Node.js", "DevOps"],

  // 详细技能评分
  skillsDetail: {
    frontend: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Vue.js", level: 80 },
    ],
    backend: [
      { name: "Java", level: 80 },
      { name: "Node.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "SQL", level: 80 },
    ],
    devtools: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 85 },
    ],
  },

  // 兴趣爱好
  interests: ["Web开发", "开源项目", "人工智能", "Web逆向"],

  // 项目列表
  projects: [
    // {
    //   title: "万用代理",
    //   description: "一个基于Cloudflare Workers的万用代理",
    //   technologies: [],
    //   githubUrl: "#",
    //   liveUrl: "https://cf-proxy.123408.xyz",
    // }
  ],

  // 博客文章
  blogPosts: [
    // {
    //   title: "WebAssembly: 网页应用的未来",
    //   excerpt:
    //     "探索WebAssembly如何让浏览器运行高性能应用，以及它将如何改变Web开发的未来...",
    //   tags: ["WebAssembly", "前端", "性能优化"],
    //   date: {
    //     day: "15",
    //     month: "六月",
    //     year: "2023",
    //   },
    //   url: "#",
    // }
  ],

  // 社交媒体链接
  socialLinks: {
    github: "https://github.com/ichendaye",
    twitter: "#",
    linkedin: "#",
    weixin: "#",
  },

  // 个人照片URL（可以替换为您自己的照片链接）
  profileImage: "https://avatars.githubusercontent.com/u/17847207?v=4",

  // 版权信息
  copyright: {
    year: new Date().getFullYear(),
    name: "Chendaye",
  },
};
