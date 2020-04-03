(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{303:function(t,a,s){"use strict";s.r(a);var n=s(11),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux-文件压缩和解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件压缩和解压"}},[t._v("#")]),t._v(" Linux 文件压缩和解压")]),t._v(" "),s("blockquote",[s("p",[t._v("关键词："),s("code",[t._v("tar")]),t._v(", "),s("code",[t._v("gzip")]),t._v(", "),s("code",[t._v("zip")]),t._v(", "),s("code",[t._v("unzip")])])]),t._v(" "),s("h2",{attrs:{id:"_1-linux-文件压缩和解压要点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-文件压缩和解压要点"}},[t._v("#")]),t._v(" 1. Linux 文件压缩和解压要点")]),t._v(" "),s("ul",[s("li",[t._v("压缩和解压 tar 文件 - 使用 "),s("a",{attrs:{href:"#tar"}},[t._v("tar")])]),t._v(" "),s("li",[t._v("压缩和解压 gz 文件 - 使用 "),s("a",{attrs:{href:"#gzip"}},[t._v("gzip")])]),t._v(" "),s("li",[t._v("压缩和解压 zip 文件 - 分别使用 "),s("a",{attrs:{href:"#zip"}},[t._v("zip")]),t._v("、"),s("a",{attrs:{href:"#unzip"}},[t._v("unzip")])])]),t._v(" "),s("h2",{attrs:{id:"_2-命令常见用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令常见用法"}},[t._v("#")]),t._v(" 2. 命令常见用法")]),t._v(" "),s("h3",{attrs:{id:"_2-1-tar"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-tar"}},[t._v("#")]),t._v(" 2.1. tar")]),t._v(" "),s("blockquote",[s("p",[t._v("tar 命令可以为 linux 的文件和目录创建档案。利用 tar，可以为某一特定文件创建档案（备份文件），也可以在档案中改变文件，或者向档案中加入新的文件。tar 最初被用来在磁带上创建档案，现在，用户可以在任何设备上创建档案。利用 tar 命令，可以把一大堆的文件和目录全部打包成一个文件，这对于备份文件或将几个文件组合成为一个文件以便于网络传输是非常有用的。")]),t._v(" "),s("p",[t._v("参考：http://man.linuxde.net/tar")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -cvf log.tar log2012.log            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仅打包，不压缩")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zcvf log.tar.gz log2012.log        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包后，以 gzip 压缩")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -jcvf log.tar.bz2 log2012.log       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包后，以 bzip2 压缩")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -ztvf log.tar.gz                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查阅上述 tar 包内有哪些文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf log.tar.gz                    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 tar 包解压缩")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf log30.tar.gz log2013.log      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只将 tar 内的部分文件解压出来")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-gzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-gzip"}},[t._v("#")]),t._v(" 2.2. gzip")]),t._v(" "),s("blockquote",[s("p",[t._v("gzip 命令用来压缩文件。gzip 是个使用广泛的压缩程序，文件经它压缩过后，其名称后面会多出“.gz”扩展名。")]),t._v(" "),s("p",[t._v("gzip 是在 Linux 系统中经常使用的一个对文件进行压缩和解压缩的命令，既方便又好用。gzip 不仅可以用来压缩大的、较少使用的文件以节省磁盘空间，还可以和 tar 命令一起构成 Linux 操作系统中比较流行的压缩文件格式。据统计，gzip 命令对文本文件有 60%～ 70%的压缩率。减少文件大小有两个明显的好处，一是可以减少存储空间，二是通过网络传输文件时，可以减少传输的时间。")]),t._v(" "),s("p",[t._v("参考：http://man.linuxde.net/gzip")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" * "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将所有文件压缩成 .gz 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -l * "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 详细显示压缩文件的信息，并不解压")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -dv * "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压上例中的所有压缩文件，并列出详细的信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -r log.tar     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 压缩一个 tar 备份文件，此时压缩文件的扩展名为.tar.gz")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -rv test/      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归的压缩目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" -dr test/      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 递归地解压目录")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-zip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-zip"}},[t._v("#")]),t._v(" 2.3. zip")]),t._v(" "),s("blockquote",[s("p",[t._v("zip 命令可以用来解压缩文件，或者对文件进行打包操作。zip 是个使用广泛的压缩程序，文件经它压缩后会另外产生具有“.zip”扩展名的压缩文件。")]),t._v(" "),s("p",[t._v("参考：http://man.linuxde.net/zip")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 /home/Blinux/html/ 这个目录下所有文件和文件夹打包为当前目录下的 html.zip")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" -q -r html.zip /home/Blinux/html\n")])])]),s("h3",{attrs:{id:"_2-4-unzip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-unzip"}},[t._v("#")]),t._v(" 2.4. unzip")]),t._v(" "),s("blockquote",[s("p",[t._v("unzip 命令用于解压缩由 zip 命令压缩的“.zip”压缩包。")]),t._v(" "),s("p",[t._v("参考：http://man.linuxde.net/unzip")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" test.zip              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压 zip 文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -n test.zip -d /tmp/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在指定目录下解压缩")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -o test.zip -d /tmp/  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在指定目录下解压缩，如果有相同文件存在则覆盖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" -v test.zip           "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看压缩文件目录，但不解压")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);