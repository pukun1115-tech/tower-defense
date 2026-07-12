javascript: (
    function () {
        if (document.body.contentEditable === 'true') {
            document.body.contentEditable = 'false';
            document.designMode = 'off';
            alert('編集モードを解除しました。');
        } else {
            document.body.contentEditable = 'true';
            document.designMode = 'on';
            alert('編集モードを開始しました！ページ内の文字を書き換えられます。');
        }
    }
)();