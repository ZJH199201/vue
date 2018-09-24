import { Request } from './../request'

// //---------------------------下面接口是=psf产品填报参数设置ProductList.vue-----------------------------
// //API--demo
// export function psfdemoapi(params) {
//     return Request.http.post("/getproductpage", params, 119);
// }

// //---------------------------下面接口是=zgh   siderbar-----------------------------
// //API--demo
// export function psfdemoapi(params) {
//   return Request.http.post("/getproductpage", params, 119);
// }

//--------------------------------以下接口是“分配受理审核专家”/Assigntheexpertstoaccepttheaudit_Productauditspecialist/productinfolist---------------------------------
//分配数量（红字）
export function selectCount(params) {
  return Request.http.get("/audit/selectCount", params, 120);
}
//分配专家
export function distributionExpert(params) {
  return Request.http.post("/audit/distributionExpert", params, 120);
}
//批量分配专家
export function distributionExpertBatch(params) {
  return Request.http.post("/audit/distributionExpertBatch", params, 120);
}
//查询列表
export function acceptanceAuditSearch(params) {
  return Request.http.post("/audit/search", params, 120);
}
//专家列表
export function auditSpecialist(id, params) {
  return Request.http.get("/expertList/selectSLList/" + id, params, 120);
}

//--------------------------------以下接口是“列入技术审查”/Includeintecreview_product/new---------------------------------
//产品列入
export function include(id, params) {
  return Request.http.post("/technology/include/" + id, params, 120);
}
//批量列入
export function includeBatch(id, params) {
  return Request.http.post("/technology/include?" + id, params, 120);
}
//查询列表
export function includeInTechnicalReviewSearch(params) {
  return Request.http.post("/technology/search", params, 120);
}

//--------------------------------以下接口是“分配技术审查专家”/Assigntechnicalreviewexperts_product/productinfolist---------------------------------
//查询列表
export function assignedProductReviewSearch(params) {
  return Request.http.post("/technology/selectProducts", params, 120);
}
//专家列表
export function technicalAuditSpecialist(id, params) {
  return Request.http.post("/expertList/selectJSList/" + id, params, 120);
}

