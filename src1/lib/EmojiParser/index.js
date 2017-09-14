var  trie, emotion_list, Trie;
import emotion_map from './emotions';
Trie = require('./trie');

build();
module.exports = qqWechatEmotionParser;
function build(){
    emotion_list = keys(emotion_map);
    trie = new Trie();
    trie.build(emotion_list);
}

function qqWechatEmotionParser(str) {
    var indices = trie.search(str);
    indices.reverse().map(function(idx) {
        var pos = idx[0],
            emotion = emotion_list[idx[1]],
            img = '<img class="chat_item_text_emoji" src="' + emotion_map[emotion] + '" alt="' + emotion + '">';
        str = splice(str, pos, emotion.length, img);
    });
    return str;
}

function splice(str, index, count, add) {
    return str.slice(0, index) + add + str.slice(index + count);
}

function keys(map){
    var list = [];
    for (var k in map) {
        if (map.hasOwnProperty(k)) list.push(k);
    }
    return list;
}
