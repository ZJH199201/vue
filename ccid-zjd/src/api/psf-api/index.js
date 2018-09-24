import { Request } from './../request'

//---------------------------下面接口是=psf产品填报参数设置ProductList.vue-----------------------------
//API--demo
export function psfdemoapi(params) {
    return Request.http.post("/getproductpage", params, 119);
}
// 产品类别设置==查询全部节点信息==列表查询使用
export function cplbszcxqbjd(params) {
    return Request.http.post("/dictSblb/selectDictSblbEnableparent", params, 119);
}
// 产品类别设置==申报类别停用
export function cplbszsblbty(params, accessToken) {
    return Request.http.get(`/dictSblb/updateDictSblbEnable/${params}`, accessToken, 119);
}
// 产品类别设置==查询父节点信息
export function cplbszcxfjdxx(params) {
    return Request.http.get('/dictSblb/selectDictSblblevel', params, 119);
}
// 产品类别设置==新增申报类别
export function cplbszxzsblb(params) {
    return Request.http.post('/dictSblb/insertDictSblb', params, 119);
}


// 产品类型字典表==查询一级产品类别
export function cplbszcxyjcplb(params) {
    return Request.http.post('/dictProductType/selectDictProductType', params, 119);
}