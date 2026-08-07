/*                                                                            */
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
const soundBuffers = { };
//音声ファイルを読み込んでバッファに変換
async function loadSound(name, path) {
    try {
        const response = await fetch(path);
        const arrayBuffer = await response.arrayBuffer();
        soundBuffers[name] = await audioCtx.decodeAudioData(arrayBuffer);
        //console.log(`${name} を読み込みました`);
    } catch (error) {
        //console.error(`${name} の読み込みに失敗: ${error}`);
    }
}

// 初期化ゲーム開始時
async function initSounds() {
    await loadSound('shoot', 'sound1.mp3');
}

function playSound(soundName) {
    const buffer = soundBuffers[soundName];
    
    if (!buffer) {
        console.error(`${soundName} が見つかりません`);
        return;
    }
    // 新しい source を作成
    const source = audioCtx.createBufferSource();
    source.buffer = buffer;
    
    // destination に接続（スピーカーから出力）
    source.connect(audioCtx.destination);
    
    // 再生開始
    source.start(0);
}

initSounds();
