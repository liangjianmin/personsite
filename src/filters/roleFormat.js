export const roleFormat = (role) => {
  if (role == 0) {
    return '超级管理员'
  } else if (role == 1) {
    return '管理员'
  } else if(role == 2){
    return '普通用户'
  }else{
    return '未登录'
  }
}
export const ruleFormat = (role) => {
    if (role == 0) {
        return '服饰美妆'
    } else if (role == 1) {
        return '家用电器'
    } else if(role == 2){
        return '电脑数码'
    }
}