// import { request as  oldRequest } from '@/api/service';
import request from "@/api/newRequest.js"
let host = 'http://127.0.0.1:8000';
// let host = 'http://api.keyou.site:8000';


// 登录
// export const login = params => { return request.post(`${host}/user/login/`, params) };

// 注册
// export const register = params => { return request.post(`${host}/user/register/`, params) };

// 判断用户名是否注册
// export const check_username = username => { return request.get(`${host}/user/` + username + '/count/') };

// 判断邮箱是否注册
// export const check_email = email => { return request.get(`${host}/user/` + email + '/count/') };

// 获取项目列表信息
export const projects_list = params => { return request.get(`${host}/projects/?page=` + params.page + '&size=' + params.size) };

// 删除某个项目
export const delete_project = id => { return request.delete(`${host}/projects/` + id + '/') };

// 修改某个项目
export const edit_project = (id, params) => { return request.put(`${host}/projects/` + id + '/', params) };

// 新增项目
export const add_project = params => { return request.post(`${host}/projects/`, params) };
// export const add_project = params => request({
//   url: `${host}/projects/`,
//   method: 'POST',
//   data: params
// })

// 获取所有项目ID和名称
export const projects_names = () => { return request.get(`${host}/projects/names/`) };
// export const projects_names  = () => request({
//   url: `${host}/projects/names/`,
//   method: 'GET',
// })

// 获取所有环境变量的ID和名称
export const envs_names = () => { return request.get(`${host}/envs/names/`) };

// 通过项目来运行用例
export const run_by_project = (project_id, env_id) => { return request.post(`${host}/projects/` + project_id + '/run/', {'env_id': env_id}) };

// 获取内置函数列表信息
export const builtins_list = params => { return request.get(`${host}/debugtalks/?page=` + params.page + '&size=' + params.size) };
// export const builtins_list = params =>request({
//   url: `${host}/debugtalks/?page=` + params.page + '&size=' + params.size
// });

// 获取内置函数源码
export const builtins_code = id => { return request.get(`${host}/debugtalks/` + id + '/') };

// 修改指定的内置函数源码
export const builtins_update = (id, code) => { return request.put(`${host}/debugtalks/` + id + '/', {'debugtalk': code}) };

// 获取接口列表信息
export const interfaces_list = params => { return request.get(`${host}/interfaces/?page=` + params.page + '&size=' + params.size) };

// 删除某个接口
export const delete_interface = id => { return request.delete(`${host}/interfaces/` + id + '/') };

// 修改某个接口
export const edit_interface = (id, params) => { return request.put(`${host}/interfaces/` + id + '/', params) };

// 新增接口
export const add_interface = params => { return request.post(`${host}/interfaces/`, params) };

// 通过接口来运行用例
export const run_by_interface = (interface_id, env_id) => { return request.post(`${host}/interfaces/` + interface_id + '/run/', {'env_id': env_id}) };

// 获取套件列表信息
export const testsuites_list = params => { return request.get(`${host}/testsuits/?page=` + params.page + '&size=' + params.size) };

// 删除某个套件
export const delete_testsuite = id => { return request.delete(`${host}/testsuits/` + id + '/') };

// 新增套件
export const add_testsuite = params => { return request.post(`${host}/testsuits/`, params) };

// 获取套件详情
export const get_detail_testsuite = id => { return request.get(`${host}/testsuits/`+ id + '/') };

// 修改套件
export const update_testsuite = (id, params) => { return request.put(`${host}/testsuits/` + id + '/', params) };


// 通过套件来运行用例
export const run_by_testsuite = (testsuite_id, env_id) => { return request.post(`${host}/testsuits/` + testsuite_id + '/run/', {'env_id': env_id}) };

// 获取某个项目下的所有接口信息
export const interfaces_by_project_id = id => { return request.get(`${host}/projects/` + id + '/interfaces/') };

// 获取用例列表信息
export const testcases_list = params => { return request.get(`${host}/testcases/?page=` + params.page + '&size=' + params.size) };

// 删除某个用例
export const delete_testcase = id => { return request.delete(`${host}/testcases/` + id + '/') };

// 获取某个接口下的所有配置信息
export const configures_by_interface_id = id => { return request.get(`${host}/interfaces/` + id + '/configs/') };

// 获取某个接口下的所有用例信息
export const testcases_by_interface_id = id => { return request.get(`${host}/interfaces/` + id + '/testcases/') };

// 新增用例
export const add_testcase = params => { return request.post(`${host}/testcases/`, params) };

// 运行用例
export const run_by_testcase = (testcase_id, env_id) => { return request.post(`${host}/testcases/` + testcase_id + '/run/', {'env_id': env_id}) };

// 获取用例详情
// export const get_detail_testcase = id => { return request.get(`${host}/testcases/`+ id + '/details/') };
export const get_detail_testcase = id => { return request.get(`${host}/testcases/`+ id + '/') };

// 修改用例
export const update_testcase = (id, params) => { return request.put(`${host}/testcases/` + id + '/', params) };

// 获取测试报告列表信息
export const reports_list = params => { return request.get(`${host}/reports/?page=` + params.page + '&size=' + params.size) };

// 删除某个测试报告
export const report_delete = id => { return request.delete(`${host}/reports/` + id + '/') };

// 下载测试报告
export const report_download = id => {
    return request.get(`${host}/reports/` + id + '/download/',
        {
            responseType: 'blob'
        });
};

// 打开测试报告
// export const report_open = id => { return request.get(`${host}/reports/` + id + '/open/') };
export const report_view = id => { return request.get(`${host}/reports/` + id + '/') };

// 获取配置列表信息
export const configures_list = params => { return request.get(`${host}/configures/?page=` + params.page + '&size=' + params.size) };

// 删除某个配置
export const delete_configure = id => { return request.delete(`${host}/configures/` + id + '/') };

// 新增配置
export const add_configure = params => { return request.post(`${host}/configures/`, params) };

// 获取配置详情
// export const get_detail_configure = id => { return request.get(`${host}/configures/`+ id + '/details/') };
export const get_detail_configure = id => { return request.get(`${host}/configures/`+ id + '/') };

// 修改配置
export const update_configure = (id, params) => { return request.put(`${host}/configures/` + id + '/', params) };

// 获取环境列表信息
export const envs_list = params => { return request.get(`${host}/envs/?page=` + params.page + '&size=' + params.size) };

// 删除某个环境
export const delete_env = id => { return request.delete(`${host}/envs/` + id + '/') };

// 修改某个环境
export const edit_env = (id, params) => { return request.put(`${host}/envs/` + id + '/', params) };

// 新增环境
export const add_env = params => { return request.post(`${host}/envs/`, params) };

// 获取所有统计信息
export const summary = () => { return request.get(`${host}/summary/`) };
// export const summary = () => oldRequest({
//   url: `${host}/summary/`
// })
// { return request.get(`${host}/summary/`) };
