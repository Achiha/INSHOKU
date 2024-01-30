import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // あなたのアプリケーションのエントリーポイントファイル
import './index.css'


const root = document.getElementById('root');

// Check if root element exists before creating root
if (root) {
  // createRootを使用してアプリケーションを初期化
  const rootElement = createRoot(root);

  // Appコンポーネントをレンダリング
  rootElement.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
