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
