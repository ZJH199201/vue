import { Request } from './../request'

//苏东染API--demo
export function sdrdemoapi(params) {
    return Request.http.post("/getproductpage", params, 117);
}

//========================================================================================
// 技术审核结论反馈管理->产品结论反馈查询列表->新产品-->列表/查询(共用于申诉产品管理，反馈结论))
export function Technicalreviewconclusionfeedbackmanag_product_new(params) {
  return Request.http.post("/audit/selectApplyAuditResult", params, 117);
}

// 技术审核结论反馈管理->产品结论反馈查询列表->新产品-->红字(共用于合并结论反馈)
// 12技术审查完成（技术审查结论反馈管理模块），22合并结论（合并结论反馈模块）
export function Technicalreviewconclusionfeedbackmanag_product_new_red(params) {
  return Request.http.get("/audit/countNewProduct", params, 117);
}

// 技术审核结论反馈管理->产品结论反馈查询列表->新产品-->结论反馈
export function Technicalreviewconclusionfeedbackmanag_product_new_feedback(uuid,params) {
  return Request.http.post("/audit/backVerdict/"+uuid, params, 117);
}

// 技术审核结论反馈管理->产品结论反馈查询列表->新产品-->批量结论反馈
export function Technicalreviewconclusionfeedbackmanag_product_new_batchfeedback(params) {
  return Request.http.post("/audit/batchBackVerdict",params,117);
}

// 技术审核结论反馈管理->产品结论反馈查询列表->新产品-->更改结论
export function Technicalreviewconclusionfeedbackmanag_product_new_change(params) {
  return Request.http.post("/audit/changeVerdict", params, 117);
}
//========================================================================================
//合并结论反馈->合并结论列表->新产品-->列表/查询
export function Combinedconclusionfeedback_list_new(params) {
  return Request.http.post("/audit/mergeVerdict", params, 117);
}

//========================================================================================
//申诉产品管理->分配审查专家查询列表-->列表/查询
export function Complaintproductmanag_distribution_new(params) {
  return Request.http.post("/audit/selectAppealInfo", params, 117);
}

