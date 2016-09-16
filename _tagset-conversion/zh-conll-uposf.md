---
layout: base
title: 'Tagset zh::conll conversion to universal POS tags and features'
---

<a href="index.html">all tables</a>

## Tagset zh::conll

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>zh::conll</tt>, total 283 tags.

<table>
  <tr style="background:lightgray"><td>A A _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td>主要, 一般, 共同, 最佳, 唯一</td></tr>
  <tr><td>C Caa _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td>到</td></tr>
  <tr style="background:lightgray"><td>C Caa[P1] _</td><td>=&gt;</td><td>CONJ</td><td>PunctSide=Ini</td><td>從, 又, 既, 由, 或</td></tr>
  <tr><td>C Caa[P2] _</td><td>=&gt;</td><td>CONJ</td><td>PunctSide=Fin</td><td>又, 到, 至, 或, 也</td></tr>
  <tr style="background:lightgray"><td>C Cab _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td>等, 等等, 之類, 什麼的, 、</td></tr>
  <tr><td>C Cbaa _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td>因為, 如果, 因, 雖然, 若</td></tr>
  <tr style="background:lightgray"><td>C Cbab _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td>的話, 應該, 而, 能, 並</td></tr>
  <tr><td>C Cbba _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td>由於, 雖, 連, 既然, 就是</td></tr>
  <tr style="background:lightgray"><td>C Cbbb _</td><td>=&gt;</td><td>SCONJ</td><td>_</td><td>不但, 不僅, 一方面, 首先, 二</td></tr>
  <tr><td>C Cbca _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td>而, 但, 因此, 所以, 但是</td></tr>
  <tr style="background:lightgray"><td>C Cbcb _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td>並, 而且, 且, 並且, 反而</td></tr>
  <tr><td>D Daa _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>只, 約, 才, 共, 僅</td></tr>
  <tr style="background:lightgray"><td>D Dab _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>都, 所, 均, 皆, 完全</td></tr>
  <tr><td>D Dbaa _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>是, 會, 可能, 不會, 一定</td></tr>
  <tr style="background:lightgray"><td>D Dbab _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>要, 能, 可以, 可, 來</td></tr>
  <tr><td>D Dbb _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>也, 還, 則, 卻, 並</td></tr>
  <tr style="background:lightgray"><td>D Dbc _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>看起來, 看來, 說起來, 聽起來, 吃起來</td></tr>
  <tr><td>D Dc _</td><td>=&gt;</td><td>ADV</td><td>Negative=Neg</td><td>不, 未, 沒有, 沒, 非</td></tr>
  <tr style="background:lightgray"><td>D Dd _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>就, 又, 已, 將, 才</td></tr>
  <tr><td>D Dfa _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>很, 最, 更, 較, 非常</td></tr>
  <tr style="background:lightgray"><td>D Dfb _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>一點, 極了, 些, 得很, 多</td></tr>
  <tr><td>D Dg _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>一路, 到處, 四處, 處處, 當場</td></tr>
  <tr style="background:lightgray"><td>D Dh _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>如何, 一起, 更, 分別, 這麼</td></tr>
  <tr><td>D Dj _</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td>為什麼, 是否, 怎麼, 為何, 有沒有</td></tr>
  <tr style="background:lightgray"><td>D Dk _</td><td>=&gt;</td><td>ADV</td><td>_</td><td>結果, 那, 據說, 據了解, 那麼</td></tr>
  <tr><td>DE DE _</td><td>=&gt;</td><td>PART</td><td>Case=Gen</td><td>的, 之, 得, 地, 才</td></tr>
  <tr style="background:lightgray"><td>DE Di _</td><td>=&gt;</td><td>PART</td><td>Case=Gen</td><td>了, 著, 過, 起來, 起</td></tr>
  <tr><td>DM DM _</td><td>=&gt;</td><td>ADJ</td><td>NounType=Class</td><td>一個, 這個, 這種, 個, 一種</td></tr>
  <tr style="background:lightgray"><td>I I _</td><td>=&gt;</td><td>INTJ</td><td>_</td><td>嘿, 嗨, 唉, 喔, 嗯</td></tr>
  <tr><td>Ne Nep _</td><td>=&gt;</td><td>DET</td><td>PronType=Dem</td><td>這, 此, 其, 什麼, 那</td></tr>
  <tr style="background:lightgray"><td>Ne Neqa _</td><td>=&gt;</td><td>DET</td><td>_</td><td>全, 許多, 這些, 一些, 其他</td></tr>
  <tr><td>Ne Neqb _</td><td>=&gt;</td><td>DET</td><td>_</td><td>多, 以上, 左右, 許, 上下</td></tr>
  <tr style="background:lightgray"><td>Ne Nes _</td><td>=&gt;</td><td>DET</td><td>_</td><td>各, 有, 該, 本, 另</td></tr>
  <tr><td>Ne Neu _</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td>一, 三, 兩, 二, 四</td></tr>
  <tr style="background:lightgray"><td>Ng Ng _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td>中, 時, 後, 上, 前</td></tr>
  <tr><td>N Naa _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>水, 地, 茶, 土地, 食物</td></tr>
  <tr style="background:lightgray"><td>N Naa[+SPO] _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>火, 氣</td></tr>
  <tr><td>N Nab _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>人, 者, 媽媽, 地方, 爸爸</td></tr>
  <tr style="background:lightgray"><td>N Nab[+SPO] _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>招呼, 彎, 頭, 藥, 牢</td></tr>
  <tr><td>N Nac _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>國家, 政府, 問題, 事, 社會</td></tr>
  <tr style="background:lightgray"><td>N Nac[+SPO] _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>舞, 紀錄, 禮</td></tr>
  <tr><td>N Nad _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>時候, 時間, 文化, 生活, 歷史</td></tr>
  <tr style="background:lightgray"><td>N Nad[+SPO] _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>驚, 覺, 跳</td></tr>
  <tr><td>N Naea _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>們, 人人, 國人, 百貨, 飲食</td></tr>
  <tr style="background:lightgray"><td>N Naeb _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td>錢, 人民, 人們, 海鮮, 父母</td></tr>
  <tr><td>N Nba _</td><td>=&gt;</td><td>PROPN</td><td>_</td><td>中共, 國民黨, 民進黨, 老包, 布希</td></tr>
  <tr style="background:lightgray"><td>N Nbc _</td><td>=&gt;</td><td>PROPN</td><td>_</td><td>李, 林, 郝, 張, 于</td></tr>
  <tr><td>N Nca _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>台灣, 中國, 美國, 日本, 蘇聯</td></tr>
  <tr style="background:lightgray"><td>N Ncb _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>公司, 世界, 家, 國, 公園</td></tr>
  <tr><td>N Ncc _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>國內, 國際, 民間, 國外, 眼前</td></tr>
  <tr style="background:lightgray"><td>N Ncda _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>上, 裡, 中, 內, 邊</td></tr>
  <tr><td>N Ncdb _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>這裡, 那裡, 西方, 哪裡, 內部</td></tr>
  <tr style="background:lightgray"><td>N Nce _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Loc</td><td>當地, 兩岸, 全球, 外國, 本土</td></tr>
  <tr><td>N Ndaaa _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>年代, １７世紀, １９世紀, １８世紀, １５世紀</td></tr>
  <tr style="background:lightgray"><td>N Ndaab _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>民國, 明, 清, 明朝, 清朝</td></tr>
  <tr><td>N Ndaac _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>光緒, 明治, 江戶, 寬永, 萬曆</td></tr>
  <tr style="background:lightgray"><td>N Ndaad _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>西元, 一九九０年, 七十九年, １９９２年, 七十六年</td></tr>
  <tr><td>N Ndaba _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>今年, 去年, 明年, 隔年, 元年</td></tr>
  <tr style="background:lightgray"><td>N Ndabb _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>春天, 夏天, 秋天, 冬天, 春</td></tr>
  <tr><td>N Ndabc _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>月, 十月, 十一月, 九月, 八月</td></tr>
  <tr style="background:lightgray"><td>N Ndabd _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>昨天, 今天, 昨日, 今日, 明天</td></tr>
  <tr><td>N Ndabe _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>當時, 同時, 下午, 晚上, 上午</td></tr>
  <tr style="background:lightgray"><td>N Ndabf _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>季, 當年, 際, 假日, 新年</td></tr>
  <tr><td>N Ndbb _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>末期, 後</td></tr>
  <tr style="background:lightgray"><td>N Ndc _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>盤中, 戰後, 晚間, 日後, 午後</td></tr>
  <tr><td>N Ndda _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>過去, 以前, 古代, 當時, 從前</td></tr>
  <tr style="background:lightgray"><td>N Nddb _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>後來, 未來, 不久, 將來, 以後</td></tr>
  <tr><td>N Nddc _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td>目前, 現在, 最後, 如今, 最近</td></tr>
  <tr style="background:lightgray"><td>N Nfa _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>個, 次, 句, 隻, 頁</td></tr>
  <tr><td>N Nfc _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>攤, 項, 席</td></tr>
  <tr style="background:lightgray"><td>N Nfd _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>點, 層, 段, 些</td></tr>
  <tr><td>N Nfe _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>杯, 桶</td></tr>
  <tr style="background:lightgray"><td>N Nfg _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>年, 歲, 元, 美元, 天</td></tr>
  <tr><td>N Nfh _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>成, 股</td></tr>
  <tr style="background:lightgray"><td>N Nfi _</td><td>=&gt;</td><td>NOUN</td><td>NounType=Class</td><td>次, 場</td></tr>
  <tr><td>N Nhaa _</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td><td>我, 他, 我們, 你, 他們</td></tr>
  <tr style="background:lightgray"><td>N Nhab _</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs|Reflex=Yes</td><td>自己, 大家, 雙方, 個人, 自我</td></tr>
  <tr><td>N Nhac _</td><td>=&gt;</td><td>PRON</td><td>Polite=Pol|PronType=Prs</td><td>您, 敝國, 筆者, 貴國, 本人</td></tr>
  <tr style="background:lightgray"><td>N Nhb _</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td><td>誰, 您, 筆者, 孰, 各人</td></tr>
  <tr><td>N Nhc _</td><td>=&gt;</td><td>PRON</td><td>Gender=Neut</td><td>之, 前者, 後者, 凡此種種, 兩者</td></tr>
  <tr style="background:lightgray"><td>N Nv1 _</td><td>=&gt;</td><td>NOUN</td><td>VerbForm=Ger</td><td>發展, 服務, 醫療, 攻擊, 經營</td></tr>
  <tr><td>N Nv2 _</td><td>=&gt;</td><td>NOUN</td><td>VerbForm=Ger</td><td>注意, 同意, 認同, 欣賞, 了解</td></tr>
  <tr style="background:lightgray"><td>N Nv3 _</td><td>=&gt;</td><td>NOUN</td><td>VerbForm=Ger</td><td>有關, 重視, 優惠, 認識, 領先</td></tr>
  <tr><td>N Nv4 _</td><td>=&gt;</td><td>NOUN</td><td>VerbForm=Ger</td><td>旅遊, 購物, 觀光, 旅行, 反彈</td></tr>
  <tr style="background:lightgray"><td>P P01 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>承, 似, 承蒙, 為, 深為</td></tr>
  <tr><td>P P02 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>被, 受, 為, 深受, 備受</td></tr>
  <tr style="background:lightgray"><td>P P03 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>為, 為了</td></tr>
  <tr><td>P P04 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>給, 對</td></tr>
  <tr style="background:lightgray"><td>P P06 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>由, 遭, 改由, 每逢</td></tr>
  <tr><td>P P06[P1] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Ini</td><td>由</td></tr>
  <tr style="background:lightgray"><td>P P06[P2] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Fin</td><td>來看</td></tr>
  <tr><td>P P06[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>由, 來看, 看來</td></tr>
  <tr style="background:lightgray"><td>P P07 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>把, 將, 遭到, ??, 似</td></tr>
  <tr><td>P P08 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>拿, 拿著, 直至</td></tr>
  <tr style="background:lightgray"><td>P P08[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>來說, 拿</td></tr>
  <tr><td>P P09 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>管, 尤以</td></tr>
  <tr style="background:lightgray"><td>P P10 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>為, 作</td></tr>
  <tr><td>P P11 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>以, 採</td></tr>
  <tr style="background:lightgray"><td>P P11[P1] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Ini</td><td>以</td></tr>
  <tr><td>P P11[P2] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Fin</td><td>來說</td></tr>
  <tr style="background:lightgray"><td>P P11[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>以, 而言, 來看, 來說, 看</td></tr>
  <tr><td>P P12 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>自從</td></tr>
  <tr style="background:lightgray"><td>P P13 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>等, 待, 逢, 每當, 趁</td></tr>
  <tr><td>P P14 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>有</td></tr>
  <tr style="background:lightgray"><td>P P15 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>離, 距, 距離, 臨, 去</td></tr>
  <tr><td>P P16 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>當, 每當, 正當, 當著</td></tr>
  <tr style="background:lightgray"><td>P P17 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>打從, 打</td></tr>
  <tr><td>P P18 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>直到, 等到, 直至, 及至, 以迄</td></tr>
  <tr style="background:lightgray"><td>P P18[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>直到, 為止</td></tr>
  <tr><td>P P19 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>從</td></tr>
  <tr style="background:lightgray"><td>P P19[P1] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Ini</td><td>從</td></tr>
  <tr><td>P P19[P2] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Fin</td><td>來說</td></tr>
  <tr style="background:lightgray"><td>P P19[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>從, 來看, 看來, 起, 來</td></tr>
  <tr><td>P P20 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>就</td></tr>
  <tr style="background:lightgray"><td>P P20[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>就, 而言, 來說, 言, 來看</td></tr>
  <tr><td>P P21 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>在, 到, 嚀‥, 至</td></tr>
  <tr style="background:lightgray"><td>P P21[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>在, 看來</td></tr>
  <tr><td>P P22 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>繼</td></tr>
  <tr style="background:lightgray"><td>P P23 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>於</td></tr>
  <tr><td>P P24 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>沿著, 沿, 跟, 延著</td></tr>
  <tr style="background:lightgray"><td>P P25 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>順著, 循, 循著, 順</td></tr>
  <tr><td>P P26 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>經, 經過, 經由, 業經, 一經</td></tr>
  <tr style="background:lightgray"><td>P P27 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>靠, 靠著</td></tr>
  <tr><td>P P28 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>朝, 假, 朝著</td></tr>
  <tr style="background:lightgray"><td>P P29 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>朝, 朝著</td></tr>
  <tr><td>P P30 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>往</td></tr>
  <tr style="background:lightgray"><td>P P31 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>來說, 對</td></tr>
  <tr><td>P P31[P1] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Ini</td><td>對</td></tr>
  <tr style="background:lightgray"><td>P P31[P2] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep|PunctSide=Fin</td><td>來說</td></tr>
  <tr><td>P P31[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>對, 而言, 來說, 言</td></tr>
  <tr style="background:lightgray"><td>P P32 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>對於, 而言</td></tr>
  <tr><td>P P32[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>對於, 而言, 來說</td></tr>
  <tr style="background:lightgray"><td>P P35 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>與, 和, 同, 用, 跟</td></tr>
  <tr><td>P P35[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>和, 一般</td></tr>
  <tr style="background:lightgray"><td>P P36 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>代, 跟著</td></tr>
  <tr><td>P P37 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>替, 幫</td></tr>
  <tr style="background:lightgray"><td>P P38 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>藉, 藉著, 憑, 藉由, 憑藉</td></tr>
  <tr><td>P P39 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>用, 透過</td></tr>
  <tr style="background:lightgray"><td>P P40 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>基於</td></tr>
  <tr><td>P P41 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>至於, 有關, 關於</td></tr>
  <tr style="background:lightgray"><td>P P42 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>依, 按, 照, 依著, 照著</td></tr>
  <tr><td>P P42[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>依, 來看</td></tr>
  <tr style="background:lightgray"><td>P P43 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>據, 根據, 依據, 依照, 按照</td></tr>
  <tr><td>P P44 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>依循, 比照, 仿照</td></tr>
  <tr style="background:lightgray"><td>P P45 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>逐</td></tr>
  <tr><td>P P46 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>視, 每隔</td></tr>
  <tr style="background:lightgray"><td>P P46[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>而定, 端視, 視</td></tr>
  <tr><td>P P47 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>如</td></tr>
  <tr style="background:lightgray"><td>P P48 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>有如, 一如, 如同, 似, 猶如</td></tr>
  <tr><td>P P48[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>如同, 般, 一般</td></tr>
  <tr style="background:lightgray"><td>P P49 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>比, 較, 比起, 相對於, 較之</td></tr>
  <tr><td>P P50 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>除了, 除</td></tr>
  <tr style="background:lightgray"><td>P P51 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>連同</td></tr>
  <tr><td>P P52 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>因, 因著, 因為</td></tr>
  <tr style="background:lightgray"><td>P P53 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>途經, 隨著</td></tr>
  <tr><td>P P54 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>例如, 譬如, 比如, 諸如, 誠如</td></tr>
  <tr style="background:lightgray"><td>P P55 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>像, 好像</td></tr>
  <tr><td>P P55[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>像, 一樣, 一般</td></tr>
  <tr style="background:lightgray"><td>P P58 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>隨著, 隨</td></tr>
  <tr><td>P P59 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>自</td></tr>
  <tr style="background:lightgray"><td>P P59[+part] _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>自, 來看</td></tr>
  <tr><td>P P60 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>遭, 慘遭, 險遭, 遭到, 遭受</td></tr>
  <tr style="background:lightgray"><td>P P61 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>到, 至, 迄, 到了, 去</td></tr>
  <tr><td>P P62 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>向, 向著</td></tr>
  <tr style="background:lightgray"><td>P P63 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>跟, 跟著</td></tr>
  <tr><td>P P64 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>隨同, 偕</td></tr>
  <tr style="background:lightgray"><td>P P65 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>隔</td></tr>
  <tr><td>P P66 _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Prep</td><td>為</td></tr>
  <tr style="background:lightgray"><td>T Ta _</td><td>=&gt;</td><td>PART</td><td>_</td><td>了, 的, 來, 去, 嘛</td></tr>
  <tr><td>T Tb _</td><td>=&gt;</td><td>PART</td><td>_</td><td>而已, 罷了, 沒有, 也好, 好了</td></tr>
  <tr style="background:lightgray"><td>T Tc _</td><td>=&gt;</td><td>PART</td><td>_</td><td>呢, 吧, 啊, 呀, 啦</td></tr>
  <tr><td>T Td _</td><td>=&gt;</td><td>PART</td><td>_</td><td>嗎, 來, 去, 與否, 矣</td></tr>
  <tr style="background:lightgray"><td>V V_11 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>是, 乃是, 像是, 可說是, 有</td></tr>
  <tr><td>V V_12 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>是</td></tr>
  <tr style="background:lightgray"><td>V V_2 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>有, 有沒有, 是, 包括有</td></tr>
  <tr><td>V VA11 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>來, 走, 飛, 回來, 出來</td></tr>
  <tr style="background:lightgray"><td>V VA11[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>走了過來, 站了起來, 坐了下來, 走了進來, 退了出來</td></tr>
  <tr><td>V VA11[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>回不去, 回不來, 過不去</td></tr>
  <tr style="background:lightgray"><td>V VA12 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>站, 坐, 生活, 存在, 消失</td></tr>
  <tr><td>V VA12[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>睡不好覺</td></tr>
  <tr style="background:lightgray"><td>V VA12[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>睡</td></tr>
  <tr><td>V VA13 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>回家, 出國, 爬山, 回國, 上場</td></tr>
  <tr style="background:lightgray"><td>V VA13[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>下了車</td></tr>
  <tr><td>V VA2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>動, 聚集, 上演, 轉, 集合</td></tr>
  <tr style="background:lightgray"><td>V VA2[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>轉個邊, 搖了搖</td></tr>
  <tr><td>V VA2[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>轉</td></tr>
  <tr style="background:lightgray"><td>V VA3 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>下雨, 日出, 退潮, 出太陽, 地震</td></tr>
  <tr><td>V VA3[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>下過雨, 下了雨, 下起雨</td></tr>
  <tr style="background:lightgray"><td>V VA4 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>笑, 出發, 讀書, 工作, 旅行</td></tr>
  <tr><td>V VA4[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>低著頭, 抬起頭, 轉過頭, 回過頭, 彎著腰</td></tr>
  <tr style="background:lightgray"><td>V VA4[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>搬不動, 翻不了身</td></tr>
  <tr><td>V VA4[+NEG,+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Negative=Neg|Subcat=Intr</td><td>喘不過來, 喘不過氣</td></tr>
  <tr style="background:lightgray"><td>V VA4[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>跳, 坐, 點</td></tr>
  <tr><td>V VB11 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>打電話, 相較, 拍照, 再見, 開玩笑</td></tr>
  <tr style="background:lightgray"><td>V VB11[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf</td><td>捐了出來, 拍個照, 提了進來</td></tr>
  <tr><td>V VB11[+DE] _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>學得起來</td></tr>
  <tr style="background:lightgray"><td>V VB11[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg</td><td>念不出來, 放不出去, 回答不出來</td></tr>
  <tr><td>V VB11[+NEG,+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Negative=Neg</td><td></td></tr>
  <tr style="background:lightgray"><td>V VB11[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>行</td></tr>
  <tr><td>V VB12 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>提前, 完工, 相比, 加油, 說出來</td></tr>
  <tr style="background:lightgray"><td>V VB12[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf</td><td>說了出來, 救了出來, 化著妝</td></tr>
  <tr><td>V VB12[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg</td><td>說不出來, 變不出來, 找不出來</td></tr>
  <tr style="background:lightgray"><td>V VB2 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>拿出來, 撕票, 送醫, 挖出來, 吞下去</td></tr>
  <tr><td>V VB2[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf</td><td>接了過來</td></tr>
  <tr style="background:lightgray"><td>V VB2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg</td><td>嫁不出去, 拔不起來</td></tr>
  <tr><td>V VC1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>在, 到, 去, 過, 進入</td></tr>
  <tr style="background:lightgray"><td>V VC1[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>逃不開, 走不出</td></tr>
  <tr><td>V VC1[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>回</td></tr>
  <tr style="background:lightgray"><td>V VC2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>看, 參加, 進行, 玩, 打</td></tr>
  <tr><td>V VC2[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Tran</td><td>抬起, 做個夠</td></tr>
  <tr style="background:lightgray"><td>V VC2[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>拿得到, 做得好, 數得完, 擋得住, 數得清</td></tr>
  <tr><td>V VC2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>找不到, 喘不過, 擺脫不掉, 看不見, 留不住</td></tr>
  <tr style="background:lightgray"><td>V VC2[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>打, 擔</td></tr>
  <tr><td>V VC31 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>做, 吃, 喝, 作, 接受</td></tr>
  <tr style="background:lightgray"><td>V VC31[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Tran</td><td>買了去</td></tr>
  <tr><td>V VC31[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>買得到, 賣得出去, 生得出, 拿得到, 搬得動</td></tr>
  <tr style="background:lightgray"><td>V VC31[+DE,+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Tran</td><td>幹得下去</td></tr>
  <tr><td>V VC31[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>賣不出去, 買不到, 拔不動, 打不出, 抓不到</td></tr>
  <tr style="background:lightgray"><td>V VC31[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>吃, 喫</td></tr>
  <tr><td>V VC32 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>帶, 進, 攜帶, 載, 投</td></tr>
  <tr style="background:lightgray"><td>V VC32[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>吃得到</td></tr>
  <tr><td>V VC32[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>下</td></tr>
  <tr style="background:lightgray"><td>V VC33 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>寫, 成立, 建, 放, 設</td></tr>
  <tr><td>V VD1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>提供, 給, 賣, 送, 送給</td></tr>
  <tr style="background:lightgray"><td>V VD2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>搶, 租, 借, 索, 贏</td></tr>
  <tr><td>V VD2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>搶不到, 借不到</td></tr>
  <tr style="background:lightgray"><td>V VE11 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>問, 詢問, 請問, 質詢, 質問</td></tr>
  <tr><td>V VE12 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>告訴, 回答, 安排, 答應, 反映</td></tr>
  <tr style="background:lightgray"><td>V VE2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>說, 表示, 想, 指出, 認為</td></tr>
  <tr><td>V VE2[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>看得見, 看得到, 想得到, 看得出來, 聽得見</td></tr>
  <tr style="background:lightgray"><td>V VE2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>看不到, 說不出, 看不見, 看不出, 想不出</td></tr>
  <tr><td>V VE2[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>嘆</td></tr>
  <tr style="background:lightgray"><td>V VF1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>繼續, 準備, 拒絕, 申請, 停止</td></tr>
  <tr><td>V VF2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>請, 要求, 供, 叫, 派</td></tr>
  <tr style="background:lightgray"><td>V VG1 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>為, 作為, 叫, 稱, 視為</td></tr>
  <tr><td>V VG1[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg</td><td>做不成, 分不出</td></tr>
  <tr style="background:lightgray"><td>V VG2 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>為, 成為, 像, 成, 做</td></tr>
  <tr><td>V VG2[+DE] _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>開得成</td></tr>
  <tr style="background:lightgray"><td>V VG2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg</td><td>做不成</td></tr>
  <tr><td>V VH11 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>光著腳</td></tr>
  <tr style="background:lightgray"><td>V VH11[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>回過神, 發起狂, 靠了岸, 打了勝仗, 受了傷</td></tr>
  <tr><td>V VH11[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>睡得著</td></tr>
  <tr style="background:lightgray"><td>V VH11[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>活不下去, 激奮不起來, 混不下去, 有所不為</td></tr>
  <tr><td>V VH11[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>熄</td></tr>
  <tr style="background:lightgray"><td>V VH12 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>長, 深, 成長, 重, 漲</td></tr>
  <tr><td>V VH12[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>吃個飽</td></tr>
  <tr style="background:lightgray"><td>V VH13 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>大, 小, 高, 多, 快</td></tr>
  <tr><td>V VH14 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>出現, 流行, 生長, 生存, 林立</td></tr>
  <tr style="background:lightgray"><td>V VH15 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>值得, 容易, 可惜, 適合, 夠</td></tr>
  <tr><td>V VH15[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>適不適合</td></tr>
  <tr style="background:lightgray"><td>V VH16 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>增加, 結束, 統一, 產生, 豐富</td></tr>
  <tr><td>V VH16[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>慢了下來</td></tr>
  <tr style="background:lightgray"><td>V VH16[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>化不開</td></tr>
  <tr><td>V VH16[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>破</td></tr>
  <tr style="background:lightgray"><td>V VH17 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>死, 敗, 掉, 餓, 遺失</td></tr>
  <tr><td>V VH21 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>始料之所未及</td></tr>
  <tr style="background:lightgray"><td>V VH21[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Intr</td><td>嚇了一跳</td></tr>
  <tr><td>V VH21[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>想得通</td></tr>
  <tr style="background:lightgray"><td>V VH21[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Intr</td><td>看不開</td></tr>
  <tr><td>V VH22 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Intr</td><td>滿足, 感動, 可憐, 驚, 委屈</td></tr>
  <tr style="background:lightgray"><td>V VI1 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>陌生, 感興趣, 過敏, 沈醉, 恭敬</td></tr>
  <tr><td>V VI2 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>為主, 聞名, 沒辦法, 著稱, 留念</td></tr>
  <tr style="background:lightgray"><td>V VI2[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf</td><td>占了上風</td></tr>
  <tr><td>V VI3 _</td><td>=&gt;</td><td>VERB</td><td>_</td><td>受雇, 取材, 來自, 薰陶, 取自</td></tr>
  <tr style="background:lightgray"><td>V VJ1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>發生, 超過, 維持, 歡迎, 靠</td></tr>
  <tr><td>V VJ1[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>裝得下</td></tr>
  <tr style="background:lightgray"><td>V VJ1[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>按捺不住, 大不過, 晒不到, 享受不到, 得不到</td></tr>
  <tr><td>V VJ2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>欣賞, 享受, 尊重, 謝謝, 熟悉</td></tr>
  <tr style="background:lightgray"><td>V VJ2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>看不懂</td></tr>
  <tr><td>V VJ2[+SPV] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>嚇</td></tr>
  <tr style="background:lightgray"><td>V VJ3 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>沒有, 無, 具, 獲得, 擁有</td></tr>
  <tr><td>V VJ3[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>容得下</td></tr>
  <tr style="background:lightgray"><td>V VJ3[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>達不到, 裝不下, 得不到</td></tr>
  <tr><td>V VK1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>知道, 希望, 覺得, 喜歡, 怕</td></tr>
  <tr style="background:lightgray"><td>V VK1[+ASP] _</td><td>=&gt;</td><td>VERB</td><td>Aspect=Perf|Subcat=Tran</td><td>抱了歉, 放了心</td></tr>
  <tr><td>V VK1[+DE] _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>記得牢, 感受得到, 預料得到</td></tr>
  <tr style="background:lightgray"><td>V VK1[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>聽不懂, 察覺不出來, 顧不到, 認不出來, 記不起來</td></tr>
  <tr><td>V VK2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>包括, 造成, 需要, 顯示, 所謂</td></tr>
  <tr style="background:lightgray"><td>V VK2[+NEG] _</td><td>=&gt;</td><td>VERB</td><td>Negative=Neg|Subcat=Tran</td><td>弄不清</td></tr>
  <tr><td>V VL1 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>愛, 敢, 肯, 喜愛, 不禁</td></tr>
  <tr style="background:lightgray"><td>V VL2 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>開始, 負責, 持續, 用來, 不宜</td></tr>
  <tr><td>V VL3 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>輪到, 輪, 該, 輪由</td></tr>
  <tr style="background:lightgray"><td>V VL4 _</td><td>=&gt;</td><td>VERB</td><td>Subcat=Tran</td><td>讓, 使, 令, 使得, 導致</td></tr>
</table>
