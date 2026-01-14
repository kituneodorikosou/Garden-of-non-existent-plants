const checkbox = document.getElementById('MBC');
const html = document.documentElement;

// 2. チェックボックスの状態が変わるイベントを監視する
checkbox.addEventListener('change', function() {
    if (this.checked) {
        // メニューが開くとき
        
        // 🍎 html要素にクラスを追加してスクロールを停止
        // bodyではなくhtmlに適用することで、より確実にスクロールを停止させます
        html.classList.add('is-menu-open-scroll-stop');

    } else {
        // メニューが閉じるとき

        // 🍎 html要素からクラスを削除し、スクロールを再開
        html.classList.remove('is-menu-open-scroll-stop');
    }
});


function showshow(pageId) {
    const pages =document.querySelectorAll('.pagee');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
    }

    // ▼▼▼ ★ここから追加：メニューが開いていたら閉じる処理 ★ ▼▼▼
    
    const checkbox = document.getElementById('MBC');
    
    // もしチェックボックスが存在して、かつ「チェックが入っていたら（開いていたら）」
    if (checkbox && checkbox.checked) {
        // 1. チェックを外す（メニューを閉じる）
        checkbox.checked = false;

        // 2. スクロール禁止のクラスも外す
        // （これをやらないと、メニューが消えても画面がスクロールできなくなってしまいます）
        document.documentElement.classList.remove('is-menu-open-scroll-stop');
    }
}

/* ▼▼▼ 追加するコード：URLの#を読み取ってページを切り替える ▼▼▼ */
window.addEventListener('load', function() {
    // URLの末尾（#dairigumi など）を取得
    const hash = window.location.hash;
    
    if (hash) {
        // 先頭の「#」を消してIDだけにする（例: #dairigumi -> dairigumi）
        const pageId = hash.replace('#', '');
        
        // すでに作ってある showshow 関数を実行する
        // 履歴を二重に作らないよう、addHistory は false にしておく
        showshow(pageId, false);
    }
});

/* ▼▼▼ ブラウザの「戻る」ボタンで戻った時にメニューを閉じる処理 ▼▼▼ */
window.addEventListener('pageshow', function(event) {
    const checkbox = document.getElementById('MBC');
    const html = document.documentElement;

    // もしチェックボックスが存在して、かつチェックが入っていたら
    if (checkbox && checkbox.checked) {
        // 1. チェックを外す（メニューを閉じる）
        checkbox.checked = false;

        // 2. スクロール固定のクラスも外す
        html.classList.remove('is-menu-open-scroll-stop');
    }
});
