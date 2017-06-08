export const commentFormate = (value) => {
    if(value == 0){
        return '暂无评论'
    }else{
        return value;
    }
}
export const statusFormat = (value) => {
    if(value == 1){
        return '未付款'
    }else if(value == 2){
        return '代发货';
    }else if(value == 3){
        return '已配货';
    }else if(value == 4){
        return '已完成';
    }
}

