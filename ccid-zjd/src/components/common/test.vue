<template>
  <div class="ccid_addresseeWrap">
    <div class="ccid_search">
      <div class="firstFloor">
        <h2>一：表单</h2>
        <div>
          <div class="text">
            <h3>1)：单行文本框(宽度规范没有要求)</h3>
            <div class="content">
              <input type="text" class="ccid_singleText" placeholder="请输入">
              <div>
                <pre><code><</code><code>input</code><code> type="text" class="ccid_singleText" placeholder="请输入"</code><code>></code></pre>
              </div>
            </div>

          </div>
          <div class="text">
            <h3>2)：多行文本框(宽高规范没有要求)</h3>
            <div class="content">
              <textarea class="ccid_multiText" placeholder="请输入"></textarea>
              <div>
                <pre><code><</code><code>textarea</code><code> class="ccid_multiText" placeholder="请输入"</code><code>></code><code></</code><code>textarea</code><code>></code></pre>
              </div>
            </div>
            <div>class="ccid_multiText"</div>
          </div>
          <div class="text">
            <h3>3)：下拉选框(宽高规范没有要求)</h3>
            <div class="content">
              <select class="ccid_selectOption">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <div>
                <pre><code><</code><code>select</code> <code>class="ccid_selectOption"></code>
      <code><</code><code>option</code> <code>value="1"></code><code>1</code><code></</code><code>option></code>
      <code><</code><code>option</code> <code>value="2"></code><code>2</code><code></</code><code>option></code>
<code></</code><code>select</code><code>></code></pre>
              </div>
            </div>
            <!-- <div>class="ccid_selectOption"</div> -->
          </div>
          <div class="text">
            <h3>4)：单选框</h3>
            <div class="content">
              <div class="ccid_singleSelect">
                <label class="ccid_selectLeft"><input type="radio" name="radio"><span>选择一</span></label>
                <label class="ccid_selectLeft"><input type="radio" name="radio"><span>选择二</span></label>
              </div>
              <div>
                <pre><code><</code><code>div</code><code> class="ccid_singleSelect"></code>
       <code><</code><code>label class="ccid_selectLeft"><</code><code>input</code><code> type="radio" name="radio"><</code><code>span>选择一</</code><code>span</code><code>></code><code></</code><code>label</code><code>></code>
       <code><</code><code>label class="ccid_selectLeft"><</code><code>input</code><code> type="radio" name="radio"><</code><code>span>选择二</</code><code>span</code><code>></code><code></</code><code>label</code><code>></code>
<code><</code><code>/div</code><code>></code>
                </pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>5)：复选框</h3>
            <div class="content">
              <div class="ccid_checkSelect">
                <label class="ccid_selectLeft"> <input type="checkbox"> 选择一</label>
                <label class="ccid_selectLeft"> <input type="checkbox"> 选择一</label>
              </div>
              <div>
                <pre><code><</code><code>div</code><code> class="ccid_checkSelect"></code>
       <code><</code><code>label class="ccid_selectLeft"><</code><code>input</code><code> type="checkbox"><</code><code>span>选择一</</code><code>span</code><code>></code><code></</code><code>label</code><code>></code>
       <code><</code><code>label class="ccid_selectLeft"><</code><code>input</code><code> type="checkbox"><</code><code>span>选择二</</code><code>span</code><code>></code><code></</code><code>label</code><code>></code>
<code><</code><code>/div</code><code>></code>
                </pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>6)：单行警示框</h3>
            <div class="content">
              <input type="text" class="ccid_singleWarningText" placeholder="请输入">
              <div class="ccid_getFocus">错误信息</div>
              <div>
                <pre><code><</code><code>input</code><code> type="text" class="ccid_singleWarningText" placeholder="请输入"></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>7)：搜索框</h3>
            <div class="content">
              <input type="text" class="ccid_singleText" placeholder="请输入">
              <img src="/static/images/icon_search.png" alt="" class="ccid_search_Btn">
              <div class="mt5">
                <pre><code><</code><code>input type="text" class="ccid_singleText" placeholder="请输入"></code>
<code><</code><code>img src="/static/images/icon_search.png" alt="" class="ccid_search_Btn"></code></pre>
              </div>
            </div>
            
          </div>
          <div class="text">
            <h3>8)：时间选择一</h3>
            <div class="content">
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
              </el-date-picker>
              <div class="mt5">
                <pre><code><</code><code>el-date-pickerv-model="value1" type="date" placeholder="选择日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></</code><code>el-date-picker</code><code>></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>9)：时间选择二</h3>
            <div class="content">
              <el-date-picker
                v-model="value2"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd">
              </el-date-picker>
              <div class="mt5">
                <pre><code><</code><code>el-date-picker v-model="value2" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" format="yyyy-MM-dd" value-format="yyyy-MM-dd"><</code><code>/el-date-picker></code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>二：按钮</h2>
        <div>
          <div class="text">
            <h3>1)：表格内操作按钮</h3>
            <div class="content">
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span><input type="button" value='辑' class="ccid_editBtn ccid_editBtnDef">
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span><input type="button" value="辑" class="ccid_editBtn ccid_editBtnHover">
              </div>
              <div class="mt5">
                <pre><code><</code><code>input type="button" value='辑' class="ccid_editBtn ccid_editBtnDef"></code>
<code><</code><code>input type="button" value="辑" class="ccid_editBtn ccid_editBtnHover"></code></pre>
              </div>
            </div>
            <div class="content"> 
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span><input type="button" value='删' class="ccid_editBtn ccid_editBtnDel">
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span><input type="button" value="删" class="ccid_editBtn ccid_editBtnHoverDel">
              </div>
              <div class="mt5">
                <pre><code><</code><code>input type="button" value='删' class="ccid_editBtn ccid_editBtnDel"></code>
<code><</code><code>input type="button" value="删" class="ccid_editBtn ccid_editBtnHoverDel"></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>2)：表格内操作按钮二</h3>
            <div class="content">
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span><input type="button" value='编 辑' class="ccid_editBtnSecond ccid_editBtnSecondDef">
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span><input type="button" value="编 辑" class="ccid_editBtnSecond ccid_editBtnSecondHover">
              </div>
              <div class="mt5">
                <pre><code><</code><code>input type="button" value='编 辑' class="ccid_editBtnSecond ccid_editBtnSecondDef"></code>
<code><</code><code>input type="button" value="编 辑" class="ccid_editBtnSecond ccid_editBtnSecondHover"></code></pre>
              </div>
            </div>
            <div class="content">
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span><input type="button" value='编 辑' class="ccid_editBtnSecond ccid_editBtnSecondDel">
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span><input type="button" value="编 辑" class="ccid_editBtnSecond ccid_editBtnSecondHoverDel">
              </div>
              <div class="mt5">
                <pre><code><</code><code>input type="button" value='编 辑' class="ccid_editBtnSecond ccid_editBtnSecondDel"></code>
<code><</code><code>input type="button" value="编 辑" class="ccid_editBtnSecond ccid_editBtnSecondHoverDel"></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>3)：批量操作按钮</h3>
            <div class="content">
                <div style="display:inline-block;width:300px">
                    <span class="width">正常状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditDef"><img src="/static/images/icon_dell.png" class="ccid_batchEditAdd_icon">批量删除</button>
                </div>
                <div style="display:inline-block;width:300px">
                    <span class="width">hover状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditHover"><img src="/static/images/icon_dell.png" class="ccid_batchEditAdd_icon">批量删除</button>
                </div>
                <div class="mt5">
                  <pre><code><</code><code>button class="ccid_batchEdit ccid_batchEditDef"><</code><code>img src="/static/images/icon_dell.png" class="ccid_batchEditAdd_icon">批量删除<</code><code>/button></code>
<code><</code><code>button class="ccid_batchEdit ccid_batchEditHover"><</code><code>img src="/static/images/icon_dell.png" class="ccid_batchEditAdd_icon">批量删除</</code><code>button></code></pre>
                </div>
            </div>
            <div class="content">
                <div style="display:inline-block;width:300px">
                    <span class="width">正常状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditDef"><img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">批量添加</button>
                </div>
                <div style="display:inline-block;width:300px">
                    <span class="width">hover状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditHover"><img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">批量添加</button>
                </div>
                <div class="mt5">
                  <pre><code><</code><code>button class="ccid_batchEdit ccid_batchEditDef"><</code><code>img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">批量添加<</code><code>/button></code>
<code><</code><code>button class="ccid_batchEdit ccid_batchEditHover"><</code><code>img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">批量添加</</code><code>button></code></pre>
                </div>
            </div>
            <div class="content">
                <div style="display:inline-block;width:300px">
                    <span class="width">正常状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditDef"><img src="/static/images/icon_tuih.png" class="ccid_batchEditAdd_icon">批量退回</button>
                </div>
                <div style="display:inline-block;width:300px">
                    <span class="width">hover状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditHover"><img src="/static/images/icon_tuih.png" class="ccid_batchEditAdd_icon">批量退回</button>
                </div>
                <div class="mt5">
                  <pre><code><</code><code>button class="ccid_batchEdit ccid_batchEditDef"><</code><code>img src="/static/images/icon_tuih.png" class="ccid_batchEditAdd_icon">批量退回<</code><code>/button></code>
<code><</code><code>button class="ccid_batchEdit ccid_batchEditHover"><</code><code>img src="/static/images/icon_tuih.png" class="ccid_batchEditAdd_icon">批量退回</</code><code>button></code></pre>
                </div>
            </div>
            <div class="content">
                <div style="display:inline-block;width:300px">
                    <span class="width">正常状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditDef"><img src="/static/images/icon_tij.png" class="ccid_batchEditAdd_icon">批量提交</button>
                </div>
                <div style="display:inline-block;width:300px">
                    <span class="width">hover状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditHover"><img src="/static/images/icon_tij.png" class="ccid_batchEditAdd_icon">批量提交</button>
                </div>
                <div class="mt5">
                  <pre><code><</code><code>button class="ccid_batchEdit ccid_batchEditDef"><</code><code>img src="/static/images/icon_tij.png" class="ccid_batchEditAdd_icon">批量提交<</code><code>/button></code>
<code><</code><code>button class="ccid_batchEdit ccid_batchEditHover"><</code><code>img src="/static/images/icon_tij.png" class="ccid_batchEditAdd_icon">批量提交</</code><code>button></code></pre>
                </div>
            </div>
            <div class="content">
                <div style="display:inline-block;width:300px">
                    <span class="width">正常状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditAdd"><img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">新增产品</button>
                </div>
                <div style="display:inline-block;width:300px">
                    <span class="width">hover状态：</span>
                    <button class="ccid_batchEdit ccid_batchEditHoverAdd"><img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">新增产品</button>
                </div>
                <div class="mt5">
                  <pre><code><</code><code>button class="ccid_batchEdit ccid_batchEditAdd"><</code><code>img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">新增产品<</code><code>/button></code>
<code><</code><code>button class="ccid_batchEdit ccid_batchEditHoverAdd"><</code><code>img src="/static/images/icon_xinz.png" class="ccid_batchEditAdd_icon">新增产品</</code><code>button></code></pre>
                </div>
            </div>
            <div class="content">

            </div>
          </div>
          <div class="text">
            <h3>4)：确定按钮</h3>
            <div class="content">
                <div style="display:inline-block;width:300px">
                  <span class="width">正常状态：</span><input type="button" value="确 定" class="ccid_certainBtn ccid_certainBtnDef">
                </div>
                <div style="display:inline-block;width:300px">
                  <span class="width">hover状态：</span><input type="button" value="确 定" class="ccid_certainBtn ccid_certainBtnHover">
                </div>
                <div class="mt5">
                  <pre><code><</code><code>input type="button" value="确 定" class="ccid_certainBtn ccid_certainBtnDef"></code>
<code><</code><code>input type="button" value="确 定" class="ccid_certainBtn ccid_certainBtnHover"></code></pre>
                </div>
            </div>
            <div class="content">
                <div style="display:inline-block;width:300px">
                 <span class="width">正常状态：</span> <input type="button" value="取 消" class="ccid_certainBtn ccid_certainBtnCancel">
                </div>
                <div style="display:inline-block;width:300px">
                 <span class="width">hover状态：</span> <input type="button" value="取 消" class="ccid_certainBtn ccid_certainBtnHoverCancel">
                </div>
                <div class="mt5">
                  <pre><code><</code><code>input type="button" value="取 消" class="ccid_certainBtn ccid_certainBtnCancel"></code>
<code><</code><code>input type="button" value="取 消" class="ccid_certainBtn ccid_certainBtnHoverCancel"></code></pre>
                </div>
            </div>
            
          </div>
          <div class="text">
            <h3>5)：综合查询按钮</h3>
            <div class="content">
              <div  style="display:inline-block;width:300px;height:60px;vertical-align: middle;line-height:60px">
                <span class="width fl">正常状态：</span>
                <input type="button" name="" class="ccid_searchBtn ccid_searchBtnDef">
              </div>
              <div  style="display:inline-block;width:300px;height:60px;vertical-align: middle;line-height:60px">
                <span class="width fl">hover状态：</span>
                <input type="button" name="" class="ccid_searchBtn ccid_searchBtnHover">
              </div>
              <div class="mt5">
                <pre><code><</code><code>input type="button" name="" class="ccid_searchBtn ccid_searchBtnDef"></code>
<code><</code><code>input type="button" name="" class="ccid_searchBtn ccid_searchBtnHover"></code></pre>
              </div>
              <br>
            </div>
          </div>
          <div class="text">
            <h3>6)：增删表格按钮</h3>
            <div class="content">
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span>
                <i class="el-icon-plus ccid_addBtn ccid_addBtnDef"></i>
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span>
                <i class="el-icon-plus ccid_addBtn ccid_addBtnHover"></i> 
              </div>
              <div class="mt5">
                <pre><code><</code><code>i class="el-icon-plus ccid_addBtn ccid_addBtnDef"></i></code>
<code><</code><code>i class="el-icon-plus ccid_addBtn ccid_addBtnHover"></i></code></pre>
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">正常状态：</span>
                <i class="el-icon-close ccid_addBtn ccid_addBtnDel"></i>
              </div>
              <div style="display:inline-block;width:300px">
                <span class="width">hover状态：</span>
                <i class="el-icon-close ccid_addBtn ccid_addBtnHoverDel"></i> 
              </div>
              <div>
                <pre><code><</code><code>i class="el-icon-close ccid_addBtn ccid_addBtnDel"></i></code>
<code><</code><code>i class="el-icon-close ccid_addBtn ccid_addBtnHoverDel"></i></code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>三：表格规范</h2>
        <div>
          <div class="text">
            <h3>1)：一般表格</h3>
            <div class="content">
              <form accept-charset="utf-8" class="ccid_tableNomal">
                <table>
                  <thead>
                    <tr>
                      <th>header.1</th>
                      <th>header.2</th>
                      <th>header.3</th>
                      <th>header.4</th>
                      <th>header.5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div class="mt5">
                <pre><code><</code><code>form accept-charset="utf-8" class="ccid_tableNomal"></code>
  <code><</code><code>table></code>
    <code><</code><code>thead></code>
      <code><</code><code>tr></code>
        <code><</code><code>th>header.1</</code><code>th></code>
        <code><</code><code>th>header.2</</code><code>th></code>
        <code><</code><code>th>header.3</</code><code>th></code>
        <code><</code><code>th>header.4</</code><code>th></code>
        <code><</code><code>th>header.5</</code><code>th></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/thead></code>
    <code><</code><code>tbody></code>
      <code><</code><code>tr></code>
        <code><</code><code>td>内容一</</code><code>td></code>
        <code><</code><code>td>内容二</</code><code>td></code>
        <code><</code><code>td>内容三</</code><code>td></code>
        <code><</code><code>td>内容四</</code><code>td></code>
        <code><</code><code>td>内容五</</code><code>td></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/tbody></code>
  <code><</code><code>/table></code>
<code><</code><code>/form></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>2)：三级表格</h3>
            <div class="content">
              <form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tableNomal ccid_thirdTable">
                <table>
                  <thead>
                    <tr>
                      <th colspan="5">header.1</th>
                    </tr>
                    <tr>
                      <th colspan="5">header.2</th>
                    </tr>
                    <tr>
                      <th colspan="5">header.3</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div class="mt5">
                <pre><code><</code><code>form accept-charset="utf-8" class="ccid_tableNomal ccid_thirdTable"></code>
  <code><</code><code>table></code>
    <code><</code><code>thead></code>
      <code><</code><code>tr></code>
        <code><</code><code>th colspan="5">header.1</</code><code>th></code>
      <code><</code><code>/tr></code>
      <code><</code><code>tr></code>
        <code><</code><code>th colspan="5">header.2</</code><code>th></code>
      <code><</code><code>/tr></code>
      <code><</code><code>tr></code>
        <code><</code><code>th colspan="5">header.3</</code><code>th></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/thead></code>
    <code><</code><code>tbody></code>
      <code><</code><code>tr></code>
        <code><</code><code>td>内容一</</code><code>td></code>
        <code><</code><code>td>内容二</</code><code>td></code>
        <code><</code><code>td>内容三</</code><code>td></code>
        <code><</code><code>td>内容四</</code><code>td></code>
        <code><</code><code>td>内容五</</code><code>td></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/tbody></code>
  <code><</code><code>/table></code>
<code><</code><code>/form></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>3)：弹出窗口内表格</h3>
            <div class="content">
              <form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tableNomal ccid_dialogTable">
                <table>
                  <thead>
                    <tr>
                      <th>header.1</th>
                      <th>header.2</th>
                      <th>header.3</th>
                      <th>header.4</th>
                      <th>header.5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div class="mt5">
                <pre><code><</code><code>form accept-charset="utf-8" class="ccid_tableNomal ccid_dialogTable"></code>
  <code><</code><code>table></code>
    <code><</code><code>thead></code>
      <code><</code><code>tr></code>
        <code><</code><code>th>header.1</</code><code>th></code>
        <code><</code><code>th>header.2</</code><code>th></code>
        <code><</code><code>th>header.3</</code><code>th></code>
        <code><</code><code>th>header.4</</code><code>th></code>
        <code><</code><code>th>header.5</</code><code>th></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/thead></code>
    <code><</code><code>tbody></code>
      <code><</code><code>tr></code>
        <code><</code><code>td>内容一</</code><code>td></code>
        <code><</code><code>td>内容二</</code><code>td></code>
        <code><</code><code>td>内容三</</code><code>td></code>
        <code><</code><code>td>内容四</</code><code>td></code>
        <code><</code><code>td>内容五</</code><code>td></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/tbody></code>
  <code><</code><code>/table></code>
<code><</code><code>/form></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>4)：数据表格</h3>
            <div class="content">
              <form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tableNomal ccid_dataTable">
                <table>
                  <tbody>
                    <tr>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                      <td>表格一</td>
                    </tr>
                    <tr>
                      <td>表格一</td>
                      <td style="width: 25%;">
                        <input type="text" class="ccid_singleText" placeholder="请输入">
                      </td>
                      <td>表格一</td>
                      <td>表格一</td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div class="mt5">
                <pre><code><</code><code>form accept-charset="utf-8" class="ccid_tableNomal ccid_dataTable"></code>
  <code><</code><code>table></code>
    <code><</code><code>thead></code>
      <code><</code><code>tr></code>
        <code><</code><code>td width="25%>header.1</</code><code>td></code>
        <code><</code><code>td>header.2</</code><code>td></code>
        <code><</code><code>td>header.3</</code><code>td></code>
        <code><</code><code>td>header.4</</code><code>td></code>
        <code><</code><code>td>header.5</</code><code>td></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/thead></code>
    <code><</code><code>tbody></code>
      <code><</code><code>tr></code>
        <code><</code><code>td>
          <code><</code><code>input type="text" class="ccid_singleText" placeholder="请输入"></code>
        </</code><code>td></code>
        <code><</code><code>td>内容二</</code><code>td></code>
        <code><</code><code>td>内容三</</code><code>td></code>
        <code><</code><code>td>内容四</</code><code>td></code>
        <code><</code><code>td>内容五</</code><code>td></code>
      <code><</code><code>/tr></code>
    <code><</code><code>/tbody></code>
  <code><</code><code>/table></code>
<code><</code><code>/form></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>5)：插签切换表格</h3>
            <div class="content">
              <div class="ccid_box">
                <div class="ccid_tab-tit">
                  <a href="javascript:;" @click="msg=0" :class="{'ccid_cur':msg===0}">111</a>
                  <a href="javascript:;" @click="msg=1" :class="{'ccid_cur':msg===1}">222</a>
                </div>
                <div class="ccid_tab-con">
                  <div v-show="msg===0">
                    <form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tabForm1">
                      <table>
                        <thead>
                          <tr>
                            <th colspan="2">&nbsp;</th>
                          </tr>
                          <tr>
                            <th colspan="2">header</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>data</td>
                            <td>data</td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                  <div v-show="msg===1">
                    <form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tabForm1">
                      <table>
                        <thead>
                          <tr>
                            <th colspan="2">&nbsp;</th>
                          </tr>
                          <tr>
                            <th colspan="2">header111</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>data111</td>
                            <td>data111</td>
                          </tr>
                        </tbody>
                      </table>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt5">
                <pre>
<code>TEMPLATE</code>

<code><</code><code>div class="ccid_box"></code>  
  <code><</code><code>div class="ccid_tab-tit"></code>
    <code><</code><code>a href="javascript:;" @click="msg=0" :class="{'ccid_cur':msg===0}">111</</code><code>a></code>
    <code><</code><code>a href="javascript:;" @click="msg=1" :class="{'ccid_cur':msg===1}">222</</code>a></code>
  <code><</code><code>/div></code>
  <code><</code><code>div class="ccid_tab-con"></code>
    <code><</code><code>div v-show="msg===0"></code>
      <code><</code><code>form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tabForm1"></code>
        <code><</code><code>table></code>
          <code><</code><code>thead></code>
            <code><</code><code>tr></code>
              <code><</code><code>th colspan="2">&nbsp;</</code><code>th></code>
            <code><</code><code>/tr></code>
            <code><</code><code>tr></code>
              <code><</code><code>th colspan="2">header</</code><code>th></code>
            <code><</code><code>/tr></code>
          <code><</code><code>/thead></code>
          <code><</code><code>tbody></code>
            <code><</code><code>tr></code>
              <code><</code><code>d>data</</code><code>td></code>
              <code><</code><code>td>data</</code><code>td></code>
            <code><</code><code>/tr></code>
          <code><</code><code>/tbody></code>
        <code><</code><code>/table></code>
      <code><</code><code>/form></code>
    <code><</code><code>/div></code>
    <code><</code><code>div v-show="msg===1"></code>
      <code><</code><code>form action="test_submit" method="get" accept-charset="utf-8" class="ccid_tabForm1"></code>
        <code><</code><code>table></code>
          <code><</code><code>thead></code>
            <code><</code><code>tr></code>
              <code><</code><code>th colspan="2">&nbsp;</</code><code>th></code>
            <code><</code><code>/tr></code>
            <code><</code><code>tr></code>
              <code><</code><code>th colspan="2">header111</</code><code>th></code>
            <code><</code><code>/tr></code>
          <code><</code><code>/thead></code>
          <code><</code><code>tbody></code>
            <code><</code><code>tr></code>
              <code><</code><code>d>data111</</code><code>td></code>
              <code><</code><code>td>data111</</code><code>td></code>
            <code><</code><code>/tr></code>
          <code><</code><code>/tbody></code>
        <code><</code><code>/table></code>
      <code><</code><code>/form></code>
    <code><</code><code>/div></code>
  <code><</code><code>/div></code>
<code><</code><code>/div></code>

<code>SCRIPT</code>
<code>
data() {
  return {
      msg: 0,
  };
}
</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>四：模态框</h2>
        <div>
          <div class="text">
            <h3>1)：小模态框</h3>
            <div class="content">
              <el-button type="text" @click="open">点击打开</el-button>
              <div class="mt5">
                <pre>
<code>TEMPLATE</code>
  <code><</code><code>el-button type="text" @click="open">点击打开</</code><code>el-button></code>
<code>SCRIPT</code>
<code>  methods: {
      open() {
          this.$alert("", "提示警告内容", {
              confirmButtonText: "确定",
              type: "warning",
              center: true
          });
      }
  } 
</code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>1)：中模态框</h3>
            <div class="content">
              <el-button type="text" @click="dialogVisible = true">点击打开</el-button>
              <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
                <span>这是一段信息</span>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false" class="ccid_certainBtn ccid_certainBtnCancel ccid_certainBtnCancelDialog">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false" class="ccid_certainBtn ccid_certainBtnDialog">确 定</el-button>
                </span>
              </el-dialog>
              <div class="mt5">
                <pre>
<code>TEMPLATE</code>
  <code><</code><code>el-button type="text" @click="dialogVisible = true">点击打开</</code><code>el-button></code>
  <code><</code><code>el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center></code>
    <code><</code><code>span>这是一段信息</</code><code>span></code>
    <code><</code><code>span slot="footer" class="dialog-footer"></code>
      <code><</code><code>el-button @click="dialogVisible = false" class="ccid_certainBtn ccid_certainBtnCancel ccid_certainBtnCancelDialog">取 消</</code><code>el-button></code>
      <code><</code><code>el-button type="primary" @click="dialogVisible = false" class="ccid_certainBtn ccid_certainBtnDialog">确 定</</code><code>el-button></code>
    <code><</code><code>/span></code>
  <code><</code><code>/el-dialog></code>
<code>SCRIPT</code>
  <code>data() {
    return {
        dialogVisible: false,
    };
  }
</code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>3)：大模态框</h3>
            <div class="content">
              <el-button type="text" @click="dialogBigVisible = true">点击打开</el-button>
              <el-dialog title="标题" :visible.sync="dialogBigVisible" class="dialogContent">
                <div class="ccid_dialogBig">
                  demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo
                </div>
              </el-dialog>
              <div class="mt5">
                <pre>
<code>TEMPLATE</code>
  <code><</code><code>el-button type="text" @click="dialogBigVisible = true">点击打开<</code><code>/el-button></code>
  <code><</code><code>el-dialog title="标题" :visible.sync="dialogBigVisible" class="dialogContent"></code>
    <code><</code><code>div class="ccid_dialogBig"></code>
      <code>demodemodemodemodemodemodemodemodemodemodemodemodemodemodemode
        modemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemo
        demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodem
        odemodemodemodemodemodemodemodemodemodemodemodemodemodemodeodemodem
        odemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemode
        modemodemodemodemodemodemodemodemodemodemodemodemodemodemodemodemod
        emo demodemodemodemodemodemodemodemodemodemodemodemodemodemodemodem</code>
    <code><</code><code>/div></code>
  <code><</code><code>/el-dialog></code>
<code>SCRIPT</code>
  <code>data() {
    return {
        dialogBigVisible: false,
    };
  }
  </code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>4)：通知</h3>
            <div class="content">
              <el-button plain @click="open3"> 成功 </el-button>
              <div class="mt5">
                <pre>
<code>TEMPLATE</code>
  <code><</code><code>el-button plain @click="open3"> 成功 <</code><code>/el-button></code>
<code>SCRIPT</code>
  <code> methods: {
      open3() {
        this.$notify({
            title: "成功",
            message: "这是一条成功的提示消息",
            type: "success",
            customClass:"position-center",
        });
      }
    }</code></pre>
              </div>
            </div>
            <div class="content">
              <el-button plain @click="open4"> 警告 </el-button>
            <div class="mt5">
                <pre>
<code>TEMPLATE</code>
  <code><</code><code>el-button plain @click="open4"> 警告 <</code><code>/el-button></code>
<code>SCRIPT</code>
  <code> methods: {
      open4() {
          this.$notify({
              title: "警告",
              message: "这是一条警告的提示消息",
              type: "warning",
              customClass:"position-center",
          });
      }
    }</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>五：进度条</h2>
        <div>
          <div class="text">
            <h3>1)：横进度条</h3>
            <div class="content">
              <div class="ccid_processBox">
                <div class="ccid_line"></div>
                <ul>
                  <li class="ccid_activeProcess">
                    <p>1</p>
                    <span class="ccid_active_font">填写企业准入申请书</span>
                  </li>
                  <li>
                    <p>2</p>
                    <span>填写企业申请文件</span>
                  </li>
                  <li>
                    <p>3</p>
                    <span>上传材料</span>
                  </li>
                </ul>
              </div>
              <div class="mt5">
                <pre>
<code><</code><code>div class="ccid_processBox"></code>
  <code><</code><code>div class="ccid_line"></</code><code>div></code>
  <code><</code><code>ul></code>
    <code><</code><code>li class="ccid_activeProcess"></code>
      <code><</code><code>p>1</</code><code>p></code>
      <code><</code><code>span class="ccid_active_font">填写企业准入申请书</</code><code>span></code>
    <code><</code><code>/li></code>
    <code><</code><code>li></code>
      <code><</code><code>p>2<</code><code>/p></code>
      <code><</code><code>span>填写企业申请文件</</code><code>span></code>
    <code><</code><code>/li></code>
    <code><</code><code>li></code>
      <code><</code><code>p>3</</code><code>p></code>
      <code><</code><code>span>上传材料</</code><code>span></code>
    <code><</code><code>/li></code>
  <code><</code><code>/ul></code>
<code><</code><code>/div></code></pre>
              </div>
            </div>
          </div>
          <div class="text">
            <h3>2)：竖进度条</h3>
            <div class="content">
              <div class="ccid_processBox_vertical">
                <div class="ccid_line"></div>
                <ul>
                  <li>
                    <p class="ccid_activeProcess">1</p>
                    <span class="ccid_active_font">填写企业准入申请书</span>
                  </li>
                  <li>
                    <p>2</p>
                    <span>填写企业申请文件</span>
                  </li>
                  <li>
                    <p>3</p>
                    <span>上传材料</span>
                  </li>
                </ul>
              </div>
              <div class="mt5">
                <pre>
                  <code><</code><code>div class="ccid_processBox_vertical"></code>
                    <code><</code><code>div class="ccid_line"></</code><code>div></code>
                    <code><</code><code>ul></code>
                      <code><</code><code>li class="ccid_activeProcess"></code>
                        <code><</code><code>p class="ccid_activeProcess">1</</code><code>p></code>
                        <code><</code><code>span class="ccid_active_font">填写企业准入申请书</</code><code>span></code>
                      <code><</code><code>/li></code>
                      <code><</code><code>li></code>
                        <code><</code><code>p>2<</code><code>/p></code>
                        <code><</code><code>span>填写企业申请文件</</code><code>span></code>
                      <code><</code><code>/li></code>
                      <code><</code><code>li></code>
                        <code><</code><code>p>3</</code><code>p></code>
                        <code><</code><code>span>上传材料</</code><code>span></code>
                      <code><</code><code>/li></code>
                    <code><</code><code>/ul></code>
                  <code><</code><code>/div></code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>六：选项卡</h2>
        <div>
          <div class="text">
            <h3>1)：选项卡</h3>
            <div class="content">
              <ul class="ccid_producttabs">
                <li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)" :key='index'>{{item}}</li>
              </ul>
              <div class="ccid_tabcontent" v-show="num==0">
                1111
              </div>
              <div class="ccid_tabcontent" v-show="num==1">
                2222
              </div>
            </div>
            <div class="mt5">
              <pre>
<code>TEMPLATE</code>
  <code><</code><code>ul class="ccid_producttabs"></code>
    <code><</code><code>li v-for="(item,index) in tabs" :class="{active:index == num}" @click="tab(index)" :key='index'></code><code>{</code><code>{item}}<</code><code>/li></code>
  <code><</code><code>/ul></code>
  <code><</code><code>div class="ccid_tabcontent" v-show="num==0"></code>
    <code>1111</code>
  <code><</code><code>/div></code>
  <code><</code><code>div class="ccid_tabcontent" v-show="num==1"></code>
    <code>2222</code>
  <code><</code><code>/div></code>
<code>SCRIPT</code>
  <code>data() {
        return {
            tabs: ["1111", "2222"],
            num: 0
        };
    },
    methods: {
        tab(index) {
            this.num = index;
        }
    }</code></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="firstFloor">
        <h2>七：分页</h2>
        <div>
          <div class="text">
            <h3>1)：分页</h3>
            <div class="content">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
            <div class="mt5">
              <pre>
                <code><</code><code>el-pagination</code>
                <code>background
                layout="prev, pager, next"
                :total="1000"</code>
                <code>></code>
                <code><</code><code>/</code><code>el-pagination</code><code>></code>
                <code>注：更多分页接口或样式参照： http://element-cn.eleme.io/#/zh-CN/component/pagination</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            tabId: 0,
            dialogVisible: false,
            dialogBigVisible: false,
            msg: 0,
            tabs: ["1111", "2222"],
            num: 0,
            value1:"",
            value2:"",
            value3:""
        };
    },
    methods: {
        open() {
            this.$alert("", "提示警告内容", {
                confirmButtonText: "确定",
                type: "warning",
                center: true
            });
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        open3() {
            this.$notify({
                title: "成功",
                message: "这是一条成功的提示消息",
                type: "success",
                customClass:"position-center",
                duration:2000
            });
        },

        open4() {
            this.$notify({
                title: "警告",
                message: "这是一条警告的提示消息",
                type: "warning",
                customClass:"position-center",
                duration:2000
            });
        },
        /* 插签切换表格 */
        /* 选项卡 */
        tab(index) {
            this.num = index;
        }
    }
};
</script>
<style lang="sass" scoped>
.ccid_addresseeWrap{
    .ccid_search{
        margin: 0 auto;
        width: 90%;
        height: 180px;
        padding-top: 40px;
        line-height: 32px;
    }
    .text{
      margin-left: 1em;
      .content{
        margin-left: 1em;
      }
    }
}
.width{
  display:inline-block;
  width:100px;
}
</style>
