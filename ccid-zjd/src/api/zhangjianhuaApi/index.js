import { Request } from './../request'

//----------------
//提交专家审核意见
export function commitExpertAudit(params) {
    return Request.http.post("/expert/commitExpertAudit", params, 121);
}

//查找专家审核详情
export function getExpertAuditInfo(params) {
    return Request.http.get("/expert/getExpertAuditInfo", params, 121);
}

//查找专家历史审核详情
export function getExpertAuditInfoHis(params) {
    return Request.http.get("/expert/getExpertAuditInfoHis", params, 121);    
}

//根据专家查找需要审核的产品列列表
export function getProductListFromExpert(params) {
    return Request.http.get("/expert/getProductListFromExpert", params, 121);    
}