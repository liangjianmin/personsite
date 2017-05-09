export const roleFormat = (role) => {
  if (role == 0) {
    return '超级管理员'
  } else if (role == 1) {
    return '管理员'
  } else {
    return '普通用户'
  }
}
