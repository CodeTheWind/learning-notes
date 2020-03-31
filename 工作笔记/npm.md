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

### 3、React 简单富文本编辑器

> npm install react-quill

> yarn add react-quill

#### 使用
```
import React from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';

class Demo extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      content: '',
    }
    this.onHandleContent = this.onHandleContent.bind(this)
  }

  onHandleContent = (value: string) => {
    this.setState({ content: value });
  }

  render() {
    return (
      <main>
        <ReactQuill
          placeholder="输入文章内容..."
          value={this.state.content}
          onChange={this.onHandleContent}
        />
      </main>
    )
  }
}
```