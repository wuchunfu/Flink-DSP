/* eslint-disable no-useless-escape */
export default {
  route: {
    dashboard: '仪表盘',
    running: '运行状态',
    process: '数据处理',
    application: '应用管理',
    flow: '流程管理',
    plugin: '插件管理',
    userManage: '用户管理',
    users: '用户列表',
    roles: '角色列表',
    permission: '权限列表',
    system: '系统管理',
    settings: '个人设置',
    schedule: '任务调度',
    devops: '运维调度',
    config: '配置管理',
    overview: '状态概览',
    applicationDetail: '应用详情',
    flowDetail: '流程详情'
  },
  dsp: {
    version: '版本',
    flinkVersion: 'Flink 版本',
    buildVersion: '构建 版本',
    jdkVersion: 'JDK 版本',
    mavenVersion: 'Maven 版本',
    hadoopVersion: 'Hadoop 版本',
    name: 'Project'
  },
  userManage: {
    userNumber: '用户编号',
    userName: '用户名',
    roleNames: '拥有的角色列表',
    locked: '是否锁定',
    action: '操作',
    all: '全部',
    edit: '编辑',
    other: '更多',
    disable: '禁用',
    enable: '启用',
    newUser: '新建用户',
    delete: '删除',
    settings: '设置',
    logout: '注销',
    docs: '文档',
    version: '版本',
    versionTitle: 'Flink-Dsp 版本'
  },
  application: {
    task: '任务',
    running: '运行中',
    deployed: '已部署',
    needRestart: '需要重启',
    total: '总应用',
    canceled: '取消',
    finished: '完成',
    failed: '失败',
    appName: '应用名称',
    jobId: '作业ID',
    appType: '应用类型',
    appState: '应用状态',
    flowName: '流程名称',
    createTime: '创建时间',
    remark: '备注',
    action: '操作',
    deployFlow: '部署流程',
    deployInfo: '部署信息',
    runningState: '运行状态',
    otherInfo: '其他信息',
    jobFile: '作业文件',
    startTime: '启动时间',
    endTime: '结束时间',
    restartTime: '重启时间',
    duration: '持续时间',
    createUser: '创建用户',
    updateTime: '更新时间',
    deleteConfirm: '是否删除该应用?',
    startApp: '启动应用',
    stopApp: '停止应用',
    viewLog: '查看日志',
    updateApp: '更新应用',
    deleteApp: '删除应用',
    newApp: '新建应用'
  },
  appCreate: {
    appDetails: '应用详情',
    appName: '应用名称',
    appType: '应用类型',
    appFlow: '应用流程',
    engineType: '引擎类型',
    engineMode: '引擎模式',
    engineConfig: '引擎配置',
    otherConfig: '其他配置',
    speedLimit: '限速',
    readSpeed: '读取速率 (条)',
    processSpeed: '处理速率 (条)',
    writeSpeed: '写出速率 (条)',
    timeUnit: '单位时间 (秒)',
    unresolved: '未解析',
    unresolvedHandler: '收集器',
    unresolvedHandlerDesc: '选择未解析数据收集器',
    maxAmount: '最大收集 (条)',
    handlerConfig: '收集器配置',
    metrics: '监控',
    metricsMsg: '注意',
    // eslint-disable-next-line no-template-curly-in-string
    metricsDesc: '这里配置的MetricReport使用到的reporter需要能够在\$\{FLINK_HOME\}\/lib目录中找到，需要手动添加。',
    reporter: 'Reporter',
    reportInterval: 'Report间隔',
    reportHost: 'Report主机',
    reportPort: 'Report端口',
    customConfig: '自定义配置',
    customVars: '自定义变量',
    remarkMsg: '备注',
    remarkMsgDesc: '请输入应用备注信息',
    inputAppName: '请输入一个应用名称',
    duplicateAppName: '名称已被占用',
    chooseAppType: '请选择一个应用类型',
    chooseAppFlow: '请选择一个关联流程',
    oneFlowOnly: '只能选择一个流程',
    chooseEngineType: '请选择一个引擎类型',
    chooseEngineTypeFirst: '请先选择一个引擎类型',
    chooseEngineMode: '请选择一个引擎模式',
    notifyValidateError: '请检查表单填写是否正确',
    createSuccess: '保存应用成功',
    createFailed: '保存应用失败'
  },
  flow: {
    flowId: '流程ID',
    flowName: '流程名称',
    disableMark: '启用/禁用',
    createUser: '创建用户',
    createTime: '创建时间',
    remarkMsg: '备注',
    action: '操作',
    createButton: '新建流程',
    uploadButton: '上传流程',
    flowRefs: '流程引用',
    deleteConfirm: '是否删除该流程?'
  },
  flowCreate: {
    flowNameTip: '请输入流程名称',
    flowRemarkTip: '请输入流程备注',
    zeroNodeWarn: '至少需要添加一个节点',
    zeroReaderNodeWarn: '至少需要添加一个输入节点',
    emptyNodeWarn: '存在空节点, 请添加插件! ',
    nodeType: '节点类型',
    nodeName: '节点名称',
    nodeConfig: '配置节点',
    nodeSettings: '节点设置',
    basicInfo: '基本信息',
    nodeDesc: '节点备注',
    nodeSpeed: '节点限速',
    nodeUnresolvedCollector: '节点未解析收集',
    nodeNameTip: '请输入一个节点名称',
    nodeDescTip: '请输入节点备注信息',
    pluginConfigs: '插件配置',
    pluginInfo: '插件信息'
  },
  flowNode: {
    readerNodeWarn: 'Reader节点只能挂载1个插件, 请先移除已经挂载的插件!',
    processNodeWarn: 'Process节点最多可以挂载8个插件, 但不建议在一个处理节点配置超过5个插件!',
    writerNodeWarn: 'Writer节点最多可以挂载3个插件, 但不建议在一个输出节点配置多个输出插件!',
    unionNodeWarn: 'UNION节点无需额外添加插件',
    unmatchPluginWarn: '插件和节点类型不匹配, 节点类型: ',
    unknownPluginWarn: '未知的插件类型, 请检查插件是否正常',
    plugin: '插件: ',
    addSuccessfully: ' 已经成功添加到节点: '
  },
  plugin: {
    createButton: '创建插件',
    pluginId: '插件ID',
    pluginName: '插件名称',
    pluginType: '插件类型',
    pluginTypes: {
      input: '输入',
      output: '输出',
      process: '处理',
      split: '拆分',
      UNION: '合并',
      SYSTEM: '系统',
      UNKNOWN: '未知'
    },
    pluginClass: '插件Class',
    pluginDescription: '插件描述',
    pluginConfigs: {
      key: '参数名称',
      defaultValue: '默认值',
      type: '参数类型',
      required: '是否必须',
      optionals: '可选项',
      description: '参数说明'
    },
    pluginJarId: '插件包ID',
    pluginJarAlias: '插件包别名',
    pluginJarName: '插件包名称',
    pluginJarOrigin: {
      title: '来源',
      system: '系统',
      user: '用户'
    },
    disableMark: '禁用',
    pluginNum: '插件数量',
    createTime: '创建时间',
    updateTime: '更新时间',
    uploadTime: '上传时间',
    remark: '备注',
    flowRef: '流程引用',
    deleteConfirm: '是否删除该插件?',
    pluginInfo: '基本信息',
    pluginJarMd5: '插件包MD5',
    pluginJarUrl: '插件包Url',
    pluginDefFile: '插件定义文件',
    pluginDefFileContent: '插件定义文件内容',
    pluginList: '插件列表',
    extInfo: '扩展信息',
    pluginAlias: '插件别名',
    pluginDetailInfo: '插件详情',
    fileSize: '插件包大小(B)',
    uploadPlugin: '上传插件',
    uploadDesc: '上传一个插件Jar包',
    verifyPlugin: '校对信息',
    verifyDesc: '核对并补全插件基本信息',
    stepOneDesc: 'Step 1: 选择或拖拽一个插件Jar文件进行上传',
    stepTwoDesc: 'Step 2: 对上传的插件Jar文件进行校验',
    stepOneMsg1: '请点击右侧校验按钮进行校验',
    stepOneMsg2: '请注意: 不要关闭该窗口, 长时间未完成请重新上传插件。校验开始后, 下方会显示校验进度以及校验是否成功。',
    uploadFileTip1: '选择或拖拽一个插件Jar文件至此区域',
    uploadFileTip2: '仅支持上传 *.jar 格式文件, 不支持上传多个文件, 文件大小不超过512M。',
    verify: '验证',
    verifying: '验证中',
    tryAgain: '重试',
    complete: '通过',
    previous: '上一步',
    next: '下一步',
    finish: '完成',
    notifyReloadSuccess: '插件重新加载成功',
    notifyUploadSuccess: '插件上传成功',
    notifyFileUploadSuccess: '文件上传成功',
    notifyFileUploadFail: '文件上传失败',
    reloadWarn: '重新加载插件可能会导致插件和相关流无法正常工作！请确保上传的插件是正确的，并意识到可能的影响'
  },
  engine: {
    engineType: '引擎类型',
    engineMode: '引擎模式',
    engineConfigs: '引擎配置'
  },
  form: {
    enable: '启用',
    disable: '禁用',
    edit: '修改',
    delete: '删除',
    deleteCheck: '确认删除?',
    submit: '提交',
    save: '保存',
    cancel: '取消',
    action: '操作',
    view: '查看',
    upload: '上传',
    search: '搜索',
    reset: '重置',
    deleteOk: '确认删除',
    deleteCancel: '取消',
    add: '添加',
    key: '参数',
    value: '值',
    desc: '备注',
    download: '下载'
  },
  dict: {
    appType: {
      stream: '流应用',
      batch: '批应用',
      sql: 'SQL应用'
    },
    appState: {
      running: '运行',
      stopped: '停止',
      canceled: '取消',
      finished: '完成',
      starting: '启动中',
      stopping: '停止中',
      canceling: '取消中',
      restarting: '重启中',
      failed: '失败',
      error: '错误',
      unknown: '未知',
      init: '初始化',
      disable: '已禁用',
      waiting: '等待中'
    },
    pluginType: {
      input: '输入',
      process: '处理',
      split: '拆分',
      output: '输出',
      unknown: '未知'
    }
  },
  message: {
    success: '成功',
    failed: '失败',
    system: {
      failed: '系统错误，请稍后再试'
    },
    flow: {
      disable: '禁用流程成功',
      enable: '启用流程成功',
      delete_success: '删除流程成功',
      delete_failed: '删除流程失败',
      update_success: '更新流程成功',
      update_failed: '更新流程失败',
      create_success: '创建流程成功',
      create_failed: '创建流程失败',
      upload_success: '上传流程成功',
      upload_failed: '上传流程失败'
    },
    application: {
      disable: '禁用应用成功',
      enable: '启用应用成功',
      delete_success: '删除应用成功',
      delete_failed: '删除应用失败',
      update_success: '更新应用成功',
      update_failed: '更新应用失败',
      create_success: '创建应用成功',
      create_failed: '创建应用失败'
    },
    logout: '确定要注销登录吗?',
    warn: '提示',
    welcome: '欢迎',
    welcomeBack: '欢迎回来!',
    goodEvening: '晚上好',
    goodMorning: '早上好',
    goodAfternoon: '下午好',
    goodNoon: '中午好'
  }
}
