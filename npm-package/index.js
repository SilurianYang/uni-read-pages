const path = require('path')
const CONFIG={
	cli:false,
	includes:['path','aliasPath','name']	
}
const rootPath={
	true:'',
	false:path.resolve(process.cwd(), 'node_modules')
}
class TransformPages {
	constructor(config) {
		config={...CONFIG,...config};
        this.CONFIG=config;
		this.webpack=require(this.resolvePath('webpack'));
		this.uniPagesJSON=require(this.resolvePath('@dcloudio/uni-cli-shared/lib/pages.js'))
		this.routes=this.getPagesRoutes();
	}
	/**
	 * 获取所有pages.json下的内容 返回json
	 */
	get pagesJson(){
		return this.uniPagesJSON.getPagesJson();
	}
	/** 解析绝对路径
	 * @param {Object} dir 
	 */
	resolvePath(dir){
		return path.resolve(rootPath[this.CONFIG.cli],dir);
	}
	/**
	 * 通过读取pages.json文件 生成直接可用的routes
	 */
	getPagesRoutes(){
		const {pages}=this.pagesJson;
		const routes=[];
		for(let i=0;i<pages.length;i++){
			const item=pages[i];
			const route={};
			for(let j=0;j<this.CONFIG.includes.length;j++){
				const key =this.CONFIG.includes[j];
				let value=item[key];
				if(key==='path'){
					value=`/${value}`
				}
				if(key==='aliasPath'&&i==0){
					route[key]=route[key]||'/'
				}else if(value!==undefined){
					route[key]=value;
				}
			}
			routes.push(route);
		}
		return routes;
	}
	/**
	 * 单条page对象解析
	 * @param {Object} pageCallback 
	 * @param {Object} subPageCallback
	 */
	parsePages(pageCallback, subPageCallback){
		this.uniPagesJSON.parsePages(this.pagesJson,pageCallback,subPageCallback)
	}
}
module.exports = TransformPages
