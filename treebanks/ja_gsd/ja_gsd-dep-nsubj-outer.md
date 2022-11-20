---
layout: base
title:  'Statistics of nsubj:outer in UD_Japanese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-GSD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="ja_gsd-dep-nsubj.html">nsubj</a></tt>.

443 nodes (0%) are attached to their parents as `nsubj:outer`.

443 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.8171557562077.

The following 15 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (270; 61% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (69; 16% instances), <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (57; 13% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-PROPN.html">PROPN</a></tt> (14; 3% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_gsd-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="ja_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_gsd-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ja_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="ja_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ja_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ja_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 8 nsubj:outer	color:blue
1	ただし	但し	CCONJ	接続詞	_	18	cc	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=接続詞|SpaceAfter=No|UnidicInfo=,但し,ただし,ただし,タダシ,,,タダシ,タダシ,但し
2	、	、	PUNCT	補助記号-読点	_	1	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
3	50	50	NUM	名詞-数詞	_	5	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,五十,50,50,ゴジッ,,,ゴジュウ,ゴジッシュウネンソング,50周年ソング
4	周年	周年	NOUN	名詞-普通名詞-助数詞可能	_	5	compound	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,周年,周年,周年,シューネン,,,シュウネン,ゴジッシュウネンソング,50周年ソング
5	ソング	ソング	NOUN	名詞-普通名詞-一般	_	8	obl	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,ソング,ソング,ソング,ソング,,,ソング,ゴジッシュウネンソング,50周年ソング
6	に	に	ADP	助詞-格助詞	_	5	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=,に,に,に,ニ,,,ニ,ニ,に
7	変更	変更	NOUN	名詞-普通名詞-サ変可能	_	8	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,変更,変更,変更,ヘンコー,,,ヘンコウ,ヘンコウゴ,変更後
8	後	後	NOUN	接尾辞-名詞的-副詞可能	_	18	nsubj:outer	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,後,後,後,ゴ,,,ゴ,ヘンコウゴ,変更後
9	は	は	ADP	助詞-係助詞	_	8	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,は,は,は,ワ,,,ハ,ハ,は
10	、	、	PUNCT	補助記号-読点	_	8	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
11	ED	ED	NOUN	名詞-普通名詞-一般	_	18	nsubj:outer	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,ＥＤ,ED,ED,イーディー,,,イーディー,イーディー,ED
12	も	も	ADP	助詞-係助詞	_	11	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,も,も,も,モ,,,モ,モ,も
13	歌	歌	NOUN	名詞-普通名詞-一般	_	14	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,歌,歌,歌,ウタ,,,ウタ,ウタツキ,歌付き
14	つき	付き	NOUN	接尾辞-名詞的-一般	_	16	nmod	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,付き,つき,つき,ツキ,,,ツキ,ウタツキ,歌付き
15	の	の	ADP	助詞-格助詞	_	14	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=,の,の,の,ノ,,,ノ,ノ,の
16	もの	物	NOUN	名詞-普通名詞-サ変可能	_	18	nsubj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,物,もの,もの,モノ,,,モノ,モノ,物
17	が	が	ADP	助詞-格助詞	_	16	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=,が,が,が,ガ,,,ガ,ガ,が
18	使わ	使う	VERB	動詞-一般-五段-ワア行	_	0	root	_	BunsetuBILabel=B|BunsetuPositionType=ROOT|LUWBILabel=B|LUWPOS=動詞-一般-五段-ワア行|SpaceAfter=No|UnidicInfo=,使う,使わ,使う,ツカワ,,,ツカウ,ツカウ,使う
19	れ	れる	AUX	助動詞-助動詞-レル	_	18	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-レル|SpaceAfter=No|UnidicInfo=,れる,れ,れる,レ,,,レル,レル,れる
20	た	た	AUX	助動詞-助動詞-タ	_	18	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-助動詞-タ|SpaceAfter=No|UnidicInfo=,た,た,た,タ,,,タ,タ,た
21	。	。	PUNCT	補助記号-句点	_	18	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=Yes|UnidicInfo=,。,。,。,,,,,,。

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 5 nsubj:outer	color:blue
1	本当	本当	NOUN	名詞-普通名詞-一般	_	3	obl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,本当,本当,本当,ホント,,,ホント,ホントウ,本当
2	に	に	ADP	助詞-格助詞	_	1	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=,に,に,に,ニ,,,ニ,ニ,に
3	健康	健康	ADJ	名詞-普通名詞-形状詞可能	_	5	acl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=形状詞-一般|SpaceAfter=No|UnidicInfo=,健康,健康,健康,ケンコー,,,ケンコウ,ケンコウ,健康
4	な	だ	AUX	助動詞-助動詞-ダ	_	3	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-ダ|SpaceAfter=No|UnidicInfo=,だ,な,だ,ナ,,,ダ,ダ,だ
5	人	人	NOUN	名詞-普通名詞-一般	_	14	nsubj:outer	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,人,人,人,ヒト,,,ヒト,ヒト,人
6	は	は	ADP	助詞-係助詞	_	5	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,は,は,は,ワ,,,ハ,ハ,は
7	,	,	PUNCT	補助記号-読点	_	5	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,，,,,,,,,,，
8	身体	体	NOUN	名詞-普通名詞-一般	_	12	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,体,身体,身体,カラダ,,,カラダ,シンタイ,身体
9	だけ	だけ	ADP	助詞-副助詞	_	8	case	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-副助詞|SpaceAfter=No|UnidicInfo=,だけ,だけ,だけ,ダケ,,,ダケ,ダケデナク,だけでなく
10	で	だ	AUX	助動詞-助動詞-ダ	_	9	fixed	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=I|LUWPOS=助詞-副助詞|SpaceAfter=No|UnidicInfo=,だ,で,だ,デ,,,ダ,ダケデナク,だけでなく
11	なく	無い	ADJ	形容詞-非自立可能-形容詞	_	9	fixed	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=助詞-副助詞|PrevUDLemma=ない|SpaceAfter=No|UnidicInfo=,無い,なく,ない,ナク,,,ナイ,ダケデナク,だけでなく
12	肌	肌	NOUN	名詞-普通名詞-一般	_	14	nsubj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,肌,肌,肌,ハダ,,,ハダ,ハダ,肌
13	も	も	ADP	助詞-係助詞	_	12	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,も,も,も,モ,,,モ,モ,も
14	きれい	奇麗	ADJ	形状詞-一般	_	0	root	_	BunsetuBILabel=B|BunsetuPositionType=ROOT|LUWBILabel=B|LUWPOS=形状詞-一般|SpaceAfter=No|UnidicInfo=,奇麗,きれい,きれい,キレー,,,キレイ,キレイ,奇麗
15	です	です	AUX	助動詞-助動詞-デス	_	14	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-デス|PrevUDLemma=だ|SpaceAfter=No|UnidicInfo=,です,です,です,デス,,,デス,デス,です
16	。	。	PUNCT	補助記号-句点	_	14	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=Yes|UnidicInfo=,。,。,。,,,,,,。

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 nsubj:outer	color:blue
1	以上	以上	NOUN	名詞-普通名詞-副詞可能	_	3	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,以上,以上,以上,イジョー,,,イジョウ,イジョウ,以上
2	の	の	ADP	助詞-格助詞	_	1	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=,の,の,の,ノ,,,ノ,ノ,の
3	方面	方面	NOUN	名詞-普通名詞-一般	_	10	nsubj:outer	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,方面,方面,方面,ホーメン,,,ホウメン,ホウメン,方面
4	は	は	ADP	助詞-係助詞	_	3	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,は,は,は,ワ,,,ハ,ハ,は
5	、	、	PUNCT	補助記号-読点	_	3	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
6	当駅	当駅	NOUN	名詞-普通名詞-一般	_	10	nsubj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,当駅,当駅,当駅,トーエキ,,,トウエキ,トウエキ,当駅
7	は	は	ADP	助詞-係助詞	_	6	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=,は,は,は,ワ,,,ハ,ハ,は
8	途中	途中	NOUN	名詞-普通名詞-副詞可能	_	10	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,途中,途中,途中,トチュー,,,トチュウ,トチュウバステイ,途中バス停
9	バス	バス	NOUN	名詞-普通名詞-一般	_	10	compound	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,バス,バス,バス,バス,,,バス,トチュウバステイ,途中バス停
10	停	停	NOUN	接尾辞-名詞的-一般	_	0	root	_	BunsetuBILabel=I|BunsetuPositionType=ROOT|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=,停,停,停,テー,,,テイ,トチュウバステイ,途中バス停
11	で	だ	AUX	助動詞-助動詞-ダ	_	10	cop	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-五段-ラ行|SpaceAfter=No|UnidicInfo=,だ,で,だ,デ,,,ダ,デアル,である
12	ある	有る	VERB	動詞-非自立可能-五段-ラ行	_	11	fixed	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=助動詞-五段-ラ行|PrevUDLemma=ある|SpaceAfter=No|UnidicInfo=,有る,ある,ある,アル,,,アル,デアル,である
13	。	。	PUNCT	補助記号-句点	_	10	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=Yes|UnidicInfo=,。,。,。,,,,,,。

~~~


