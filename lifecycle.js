/**
  =====<< 卍 · Copyright · 卍 >>=====
  FileName: lifecycle.js
  Directory: JSLib
  Author: Lokavit
  Birthtime: 2023/5/21 22:16:43
  -----
  Mtime: 2023/5/21 22:16:43
  WordCount: 38
  -----
  Copyright © 1911 - 2023 Lokavit
      卍 · 小僧過境　衆生甦醒 · 卍
  =====<< 卍 · Description · 卍 >>=====

*/
function useLifecycle(lifecycle) {
  const { onMount, onUnmount, onUpdate } = lifecycle;

  // 组件挂载时调用
  onMount && onMount();

  // 组件卸载时调用
  useEffect(() => {
    return () => {
      onUnmount && onUnmount();
    };
  }, []);

  // 组件更新时调用
  useEffect(() => {
    onUpdate && onUpdate();
  });
}
//   使用示例：

function App() {
  useLifecycle({
    onMount: () => {
      console.log("组件挂载");
    },
    onUnmount: () => {
      console.log("组件卸载");
    },
    onUpdate: () => {
      console.log("组件更新");
    },
  });

  return <div>Hello World</div>;
}
