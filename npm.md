### 1、一键复制

> npm install copy-to-clipboard --save  

> yarn add copy-to-clipboard

#### 使用

```
import copy from 'copy-to-clipboard';

function copy(value) {
  if (copy(value)) {
    console.log('复制成功！');
  } else {
    console.log('复制失败！);
  }
}

```

### 2、canvas 存图

> npm install html2canvas --save

> yarn add html2canvas

#### 使用

```
import html2canvas from 'html2canvas';

const domName = document.getElementById('domName');

html2canvas(domName).then(canvas => {
  const imgUrl = canvas.toDataUrl();   // 二进制数据
});

// 详情见文档 http://html2canvas.hertzen.com/
```
