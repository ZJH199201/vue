import axios from "axios";
import { Request } from "./../request";

/********************************************************************************* 
                                登陆
**********************************************************************************/

//创建人：阎彬
//创建时间：2018-06-09
//参数：parmas: username:用户名，userpass：密码，password：确认密码
//功能描述：login


//----------------------------下面接口是page下面basicInfo下面general.vue-----------------------------
//查询所有产品商标
export function selectTrademarkList(params) {
    return Request.http.get("/pTrademark/selectTrademarkList", params, 1);
}
//查询所有产品类别
export function selectProductCarType(params) {
    return Request.http.get("/productCarType/selectProductCarType", params, 1);
}
//查询所有生产地址
export function selectEnterpriseAddressList(params) {
    return Request.http.get("/enterpriseAddress/selectEnterpriseAddressList", params, 1);
}
//查询所有申报类别
export function selectCategoryList(params) {
    return Request.http.get("/pCategory/selectCategoryList", params, 1);
}
//查询所有检测机构
export function selectTestingOrgList(params) {
    return Request.http.get("/testingOrg/selectTestingOrgList", params, 1);
}
//查询所有定型机构
export function selectShapingOrgList(params) {
    return Request.http.get("/shapingOrg/selectShapingOrgList", params, 1);
}
//新增基本情况
export function insertRetnEntity(params) {
    return Request.http.post("/productBasic/insertRetnEntity", params, 1);
}
// 修改基本情况
export function updateRetnEntiry(params) {
    return Request.http.post("/productBasic/updateRetnEntiry", params, 1);
}
//----------------------------下面接口是page下面homepage.vue主界面-----------------------------
// 必读公告
export function selectMustNotice(params) {
    return Request.http.get("/EnterpriseIndex/selectMustNotice", params, 3);
}
// 查询公告通知信息
export function selectBulletinMessage(params) {
    return Request.http.get("/EnterpriseIndex/selectBulletinMessage", params, 3);
}
// 查询文件&资料列表（固定八条）
export function selectFileAndData(params) {
    return Request.http.get("/EnterpriseIndex/selectFileAndData", params, 3);
}
// 下载文件
export function downloadFileAndData(params) {
    return Request.http.post("EnterpriseIndex/downloadFileAndData", params, 3);
}