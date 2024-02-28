import{_ as t,c as e,o as a,a2 as r}from"./chunks/framework.R-gSLuN0.js";const u=JSON.parse('{"title":"Window","description":"","frontmatter":{},"headers":[],"relativePath":"技术笔记/其他/window.md","filePath":"技术笔记/其他/window.md","lastUpdated":1709093239000}'),i={name:"技术笔记/其他/window.md"},o=r('<h1 id="window" tabindex="-1">Window <a class="header-anchor" href="#window" aria-label="Permalink to &quot;Window&quot;">​</a></h1><h2 id="命令行" tabindex="-1">命令行 <a class="header-anchor" href="#命令行" aria-label="Permalink to &quot;命令行&quot;">​</a></h2><p>批处理 bat:</p><ul><li><a href="https://www.yiibai.com/batch_script/batch_script_overview.html" target="_blank" rel="noreferrer">易百教程</a></li><li><a href="https://www.yiibai.com/batch_script/batch_script_commands.html#" target="_blank" rel="noreferrer">易百教程 - 常用命令列表</a></li></ul><p>powershell:</p><ul><li><a href="https://www.yiibai.com/powershell/" target="_blank" rel="noreferrer">易百教程</a></li><li><a href="https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.2" target="_blank" rel="noreferrer">微软教程</a></li></ul><h2 id="注册表" tabindex="-1">注册表 <a class="header-anchor" href="#注册表" aria-label="Permalink to &quot;注册表&quot;">​</a></h2><p>注册表是 windows 系统中具有层次结构的核心数据库，储存的数据对 windows 和 Windows 上运行的应用程序和服务至关重要。 注册表是帮助 windows 控制硬件、软件、用户环境和 windows 界面的一套数据文件。</p><div class="note custom-block github-alert"><p class="custom-block-title">启动方式</p><p>Win + R 打开启动框，输入 regedit，点击运行</p></div><h3 id="编辑软件自启动" tabindex="-1">编辑软件自启动 <a class="header-anchor" href="#编辑软件自启动" aria-label="Permalink to &quot;编辑软件自启动&quot;">​</a></h3><p>位置：</p><ul><li>计算机\\HKEY_CURRENT_USER\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</li><li>计算机\\HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run</li></ul><h3 id="编辑右键菜单" tabindex="-1">编辑右键菜单 <a class="header-anchor" href="#编辑右键菜单" aria-label="Permalink to &quot;编辑右键菜单&quot;">​</a></h3><p>位置：</p><ul><li>计算机\\HKEY_CLASSES_ROOT\\Directory\\Background\\shell</li></ul><table><thead><tr><th>数据项类型</th><th>名称</th><th>取值</th><th>功能</th></tr></thead><tbody><tr><td>字符串值</td><td>Extended</td><td></td><td>按住 shift 键点击鼠标右键才出现在菜单</td></tr><tr><td>字符串值</td><td>Icon</td><td></td><td>图标</td></tr></tbody></table>',16),l=[o];function d(n,s,h,c,_,w){return a(),e("div",null,l)}const b=t(i,[["render",d]]);export{u as __pageData,b as default};
