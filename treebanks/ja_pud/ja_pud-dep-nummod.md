---
layout: base
title:  'Statistics of nummod in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `nummod`

This relation is universal.

432 nodes (2%) are attached to their parents as `nummod`.

432 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nummod`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (429; 99% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	最高	最高	NOUN	名詞-普通名詞-形状詞可能	_	7	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=サイコウ,最高,最高,最高,サイコー,,,サイコウ,サイコウ,最高
2	一人	一人	NOUN	名詞-普通名詞-副詞可能	_	3	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ヒトリ,一人,一人,一人,ヒトリ,,,ヒトリ,ヒトリアタリ,一人辺り
3	あたり	当たり	NOUN	接尾辞-名詞的-副詞可能	_	7	nmod	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=アタリ,当たり,あたり,あたり,アタリ,,,アタリ,ヒトリアタリ,一人辺り
4	5	5	NUM	名詞-数詞	_	7	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=ゴ,五,5,5,ゴ,,,ゴ,ゴセンドル,5000ドル
5	,	,	PUNCT	補助記号-読点	_	7	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=I|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=,，,",",",",,,,,ゴセンドル,5000ドル
6	000	000	NUM	名詞-数詞	_	7	nummod	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=I|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=ゼロ,ゼロゼロゼロ,000,000,ゼロゼロゼロ,,,ゼロゼロゼロ,ゴセンドル,5000ドル
7	ドル	ドル	NOUN	名詞-普通名詞-助数詞可能	_	10	nsubj	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=ドル,ドル,ドル,ドル,ドル,,,ドル,ゴセンドル,5000ドル
8	が	が	ADP	助詞-格助詞	_	7	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ガ,が,が,が,ガ,,,ガ,ガ,が
9	、	、	PUNCT	補助記号-読点	_	7	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
10	許可	許可	VERB	名詞-普通名詞-サ変可能	_	0	root	_	BunsetuBILabel=B|BunsetuPositionType=ROOT|LUWBILabel=B|LUWPOS=動詞-一般-サ行変格|SpaceAfter=No|UnidicInfo=キョカ,許可,許可,許可,キョカ,,,キョカ,キョカスル,許可する
11	さ	為る	AUX	動詞-非自立可能-サ行変格	_	10	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=I|LUWPOS=動詞-一般-サ行変格|PrevUDLemma=する|SpaceAfter=No|UnidicInfo=スル,為る,さ,する,サ,,,スル,キョカスル,許可する
12	れ	れる	AUX	助動詞-助動詞-レル	_	10	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-助動詞-レル|SpaceAfter=No|UnidicInfo=レル,れる,れ,れる,レ,,,レル,レル,れる
13	て	て	SCONJ	助詞-接続助詞	_	10	mark	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-上一段-ア行|SpaceAfter=No|UnidicInfo=テ,て,て,て,テ,,,テ,テイル,ている
14	いる	居る	VERB	動詞-非自立可能-上一段-ア行	_	13	fixed	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=助動詞-上一段-ア行|PrevUDLemma=いる|SpaceAfter=No|UnidicInfo=イル,居る,いる,いる,イル,,,イル,テイル,ている
15	。	。	PUNCT	補助記号-句点	_	10	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=No|UnidicInfo=,。,。,。,,,,,,。

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 nummod	color:blue
1	スマート	スマート	ADJ	形状詞-一般	_	3	amod	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=スマート,スマート,スマート,スマート,スマート,,,スマート,スマートフォーンセダイ,スマートフォーン世代
2	フォン	フォーン	NOUN	名詞-普通名詞-一般	_	3	compound	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=フォーン,フォーン,フォン,フォン,フォン,,,フォン,スマートフォーンセダイ,スマートフォーン世代
3	世代	世代	NOUN	名詞-普通名詞-一般	_	35	nsubj	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=セダイ,世代,世代,世代,セダイ,,,セダイ,スマートフォーンセダイ,スマートフォーン世代
4	は	は	ADP	助詞-係助詞	_	3	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=ハ,は,は,は,ワ,,,ハ,ハ,は
5	、	、	PUNCT	補助記号-読点	_	3	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
6	最良	最良	NOUN	名詞-普通名詞-一般	_	8	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=サイリョウ,最良,最良,最良,サイリョー,,,サイリョウ,サイリョウ,最良
7	の	の	ADP	助詞-格助詞	_	6	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ノ,の,の,の,ノ,,,ノ,ノ,の
8	ケース	ケース	NOUN	名詞-普通名詞-一般	_	10	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ケース,ケース,ケース,ケース,ケース,,,ケース,ケース,ケース
9	の	の	ADP	助詞-格助詞	_	8	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ノ,の,の,の,ノ,,,ノ,ノ,の
10	シナリオ	シナリオ	NOUN	名詞-普通名詞-一般	_	35	advcl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=シナリオ,シナリオ,シナリオ,シナリオ,シナリオ,,,シナリオ,シナリオ,シナリオ
11	で	だ	AUX	助動詞-助動詞-ダ	_	10	cop	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-五段-ラ行|SpaceAfter=No|UnidicInfo=ダ,だ,で,だ,デ,,,ダ,デアル,である
12	ある	有る	VERB	動詞-非自立可能-五段-ラ行	_	11	fixed	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=I|LUWPOS=助動詞-五段-ラ行|PrevUDLemma=ある|SpaceAfter=No|UnidicInfo=アル,有る,ある,ある,アル,,,アル,デアル,である
13	が	が	SCONJ	助詞-接続助詞	_	10	mark	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-接続助詞|SpaceAfter=No|UnidicInfo=ガ,が,が,が,ガ,,,ガ,ガ,が
14	、	、	PUNCT	補助記号-読点	_	10	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
15	最も	最も	ADV	副詞	_	16	advmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=副詞|SpaceAfter=No|UnidicInfo=モットモ,最も,最も,最も,モットモ,,,モットモ,モットモ,最も
16	馬鹿馬鹿しい	馬鹿馬鹿しい	ADJ	形容詞-一般-形容詞	_	17	acl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=形容詞-一般-形容詞|SpaceAfter=No|UnidicInfo=バカバカシイ,馬鹿馬鹿しい,馬鹿馬鹿しい,馬鹿馬鹿しい,バカバカシー,,,バカバカシイ,バカバカシイ,馬鹿馬鹿しい
17	状況	状況	NOUN	名詞-普通名詞-一般	_	26	obl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ジョウキョウ,状況,状況,状況,ジョーキョー,,,ジョウキョウ,ジョウキョウ,状況
18	で	で	ADP	助詞-格助詞	_	17	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=デ,で,で,で,デ,,,デ,デ,で
19	も	も	ADP	助詞-係助詞	_	17	case	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=モ,も,も,も,モ,,,モ,モ,も
20	何百	何百	NUM	名詞-数詞	_	21	nummod	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=ナンビャク,何百,何百,何百,ナンビャク,,,ナンビャク,ナンビャクマン,何百万
21	万	万	NUM	名詞-数詞	_	24	obl	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-数詞|SpaceAfter=No|UnidicInfo=マン,万,万,万,マン,,,マン,ナンビャクマン,何百万
22	も	も	ADP	助詞-係助詞	_	21	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=モ,も,も,も,モ,,,モ,モ,も
23	の	の	ADP	助詞-格助詞	_	21	case	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ノ,の,の,の,ノ,,,ノ,ノ,の
24	ユーザー	ユーザー	NOUN	名詞-普通名詞-一般	_	26	obj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ユーザー,ユーザー,ユーザー,ユーザー,ユーザー,,,ユーザー,ユーザー,ユーザー
25	を	を	ADP	助詞-格助詞	_	24	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ヲ,を,を,を,オ,,,ヲ,ヲ,を
26	獲得	獲得	VERB	名詞-普通名詞-サ変可能	_	33	acl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=動詞-一般-上一段-カ行|SpaceAfter=No|UnidicInfo=カクトク,獲得,獲得,獲得,カクトク,,,カクトク,カクトクデキル,獲得出来る
27	できる	出来る	AUX	動詞-非自立可能-上一段-カ行	_	26	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=動詞-一般-上一段-カ行|PrevUDLemma=できる|SpaceAfter=No|UnidicInfo=デキル,出来る,できる,できる,デキル,,,デキル,カクトクデキル,獲得出来る
28	、	、	PUNCT	補助記号-読点	_	26	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
29	この	此の	DET	連体詞	_	30	det	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=連体詞|SpaceAfter=No|UnidicInfo=コノ,此の,この,この,コノ,,,コノ,コノ,此の
30	世代	世代	NOUN	名詞-普通名詞-一般	_	32	obl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=セダイ,世代,世代,世代,セダイ,,,セダイ,セダイ,世代
31	に	に	ADP	助詞-格助詞	_	30	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ニ,に,に,に,ニ,,,ニ,ニ,に
32	相応しい	相応しい	ADJ	形容詞-一般-形容詞	_	33	acl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=形容詞-一般-形容詞|SpaceAfter=No|UnidicInfo=フサワシイ,相応しい,相応しい,相応しい,フサワシー,,,フサワシイ,フサワシイ,相応しい
33	アプリ	アプリ	NOUN	名詞-普通名詞-一般	_	35	obj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=アプリ,アプリ,アプリ,アプリ,アプリ,,,アプリ,アプリ,アプリ
34	を	を	ADP	助詞-格助詞	_	33	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ヲ,を,を,を,オ,,,ヲ,ヲ,を
35	受け取っ	受け取る	VERB	動詞-一般-五段-ラ行	_	0	root	_	BunsetuBILabel=B|BunsetuPositionType=ROOT|LUWBILabel=B|LUWPOS=動詞-一般-五段-ラ行|SpaceAfter=No|UnidicInfo=ウケトル,受け取る,受け取っ,受け取る,ウケトッ,,,ウケトル,ウケトル,受け取る
36	た	た	AUX	助動詞-助動詞-タ	_	35	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-タ|SpaceAfter=No|UnidicInfo=タ,た,た,た,タ,,,タ,タ,た
37	。	。	PUNCT	補助記号-句点	_	35	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=No|UnidicInfo=,。,。,。,,,,,,。

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	マケドニア	マケドニア	PROPN	名詞-固有名詞-地名-国	_	2	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=マケドニア,マケドニア,マケドニア,マケドニア,マケドニア,,,マケドニア,マケドニアグン,マケドニア軍
2	軍	軍	NOUN	名詞-普通名詞-一般	_	13	nsubj	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=グン,軍,軍,軍,グン,,,グン,マケドニアグン,マケドニア軍
3	は	は	ADP	助詞-係助詞	_	2	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=ハ,は,は,は,ワ,,,ハ,ハ,は
4	ギリシャ	ギリシャ	PROPN	名詞-固有名詞-地名-国	_	7	obj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-固有名詞-地名-国|SpaceAfter=No|UnidicInfo=ギリシャ,ギリシャ,ギリシャ,ギリシャ,ギリシャ,,,ギリシャ,ギリシャ,ギリシャ
5	を	を	ADP	助詞-格助詞	_	4	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ヲ,を,を,を,オ,,,ヲ,ヲ,を
6	二	二	NUM	名詞-数詞	_	7	nummod	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=動詞-一般-サ行変格|SpaceAfter=No|UnidicInfo=ニ,二,二,二,ニ,,,ニ,ニブンカツスル,二分割する
7	分割	分割	VERB	名詞-普通名詞-サ変可能	_	11	acl	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=動詞-一般-サ行変格|SpaceAfter=No|UnidicInfo=ブンカツ,分割,分割,分割,ブンカツ,,,ブンカツ,ニブンカツスル,二分割する
8	する	為る	AUX	動詞-非自立可能-サ行変格	_	7	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=動詞-一般-サ行変格|PrevUDLemma=する|SpaceAfter=No|UnidicInfo=スル,為る,する,する,スル,,,スル,ニブンカツスル,二分割する
9	テルモピレー	テルモピレー	PROPN	名詞-固有名詞-地名-一般	_	11	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-固有名詞-地名-一般|SpaceAfter=No|UnidicInfo=テルモピレー,テルモピレー,テルモピレー,テルモピレー,テルモピレー,,,テルモピレー,テルモピレー,テルモピレー
10	の	の	ADP	助詞-格助詞	_	9	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ノ,の,の,の,ノ,,,ノ,ノ,の
11	山道	山道	NOUN	名詞-普通名詞-一般	_	13	obl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ヤマミチ,山道,山道,山道,ヤマミチ,,,ヤマミチ,ヤマミチ,山道
12	まで	まで	ADP	助詞-副助詞	_	11	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-副助詞|SpaceAfter=No|UnidicInfo=マデ,まで,まで,まで,マデ,,,マデ,マデ,まで
13	進ん	進む	VERB	動詞-一般-五段-マ行	_	43	advcl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=動詞-一般-五段-マ行|SpaceAfter=No|UnidicInfo=ススム,進む,進ん,進む,ススン,,,ススム,ススム,進む
14	だ	た	AUX	助動詞-助動詞-タ	_	13	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-タ|SpaceAfter=No|UnidicInfo=タ,た,だ,だ,ダ,,,ダ,ダ,だ
15	が	が	SCONJ	助詞-接続助詞	_	13	mark	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-接続助詞|SpaceAfter=No|UnidicInfo=ガ,が,が,が,ガ,,,ガ,ガ,が
16	、	、	PUNCT	補助記号-読点	_	13	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
17	そこ	其処	PRON	代名詞	_	30	nsubj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=代名詞|SpaceAfter=No|UnidicInfo=ソコ,其処,そこ,そこ,ソコ,,,ソコ,ソコ,其処
18	は	は	ADP	助詞-係助詞	_	17	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=ハ,は,は,は,ワ,,,ハ,ハ,は
19	アテネ	アテネ	PROPN	名詞-固有名詞-地名-一般	_	21	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-固有名詞-地名-一般|SpaceAfter=No|UnidicInfo=アテネ,アテネ,アテネ,アテネ,アテネ,,,アテネ,アテネ,アテネ
20	、	、	PUNCT	補助記号-読点	_	19	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
21	スパルタ	スパルタ	PROPN	名詞-固有名詞-地名-一般	_	23	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-固有名詞-地名-一般|SpaceAfter=No|UnidicInfo=スパルタ,スパルタ,スパルタ,スパルタ,スパルタ,,,スパルタ,スパルタ,スパルタ
22	、	、	PUNCT	補助記号-読点	_	21	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
23	アカイア	アカイア	PROPN	名詞-固有名詞-地名-一般	_	26	nmod	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-固有名詞-地名-一般|SpaceAfter=No|UnidicInfo=アカイア,アカイア,アカイア,アカイア,アカイア,,,アカイア,アカイア,アカイア
24	の	の	ADP	助詞-格助詞	_	23	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ノ,の,の,の,ノ,,,ノ,ノ,の
25	同盟	同盟	NOUN	名詞-普通名詞-サ変可能	_	26	compound	_	BunsetuBILabel=B|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=ドウメイ,同盟,同盟,同盟,ドーメー,,,ドウメイ,ドウメイグン,同盟軍
26	軍	軍	NOUN	名詞-普通名詞-一般	_	30	obl	_	BunsetuBILabel=I|BunsetuPositionType=SEM_HEAD|LUWBILabel=I|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=グン,軍,軍,軍,グン,,,グン,ドウメイグン,同盟軍
27	に	に	ADP	助詞-格助詞	_	26	case	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ニ,に,に,に,ニ,,,ニ,ニヨリ,により
28	より	因る	VERB	動詞-一般-五段-ラ行	_	27	fixed	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=I|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ヨル,因る,より,よる,ヨリ,,,ヨル,ニヨリ,により
29	固く	固い	ADJ	形容詞-一般-形容詞	_	30	advcl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=形容詞-一般-形容詞|SpaceAfter=No|UnidicInfo=カタイ,固い,固く,固い,カタク,,,カタイ,カタイ,固い
30	守ら	守る	VERB	動詞-一般-五段-ラ行	_	35	acl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=動詞-一般-五段-ラ行|SpaceAfter=No|UnidicInfo=マモル,守る,守ら,守る,マモラ,,,マモル,マモル,守る
31	れ	れる	AUX	助動詞-助動詞-レル	_	30	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-助動詞-レル|SpaceAfter=No|UnidicInfo=レル,れる,れ,れる,レ,,,レル,レル,れる
32	て	て	SCONJ	助詞-接続助詞	_	30	mark	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-上一段-ア行|SpaceAfter=No|UnidicInfo=テ,て,て,て,テ,,,テ,テイル,ている
33	い	居る	VERB	動詞-非自立可能-上一段-ア行	_	32	fixed	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=I|LUWPOS=助動詞-上一段-ア行|PrevUDLemma=いる|SpaceAfter=No|UnidicInfo=イル,居る,い,いる,イ,,,イル,テイル,ている
34	た	た	AUX	助動詞-助動詞-タ	_	30	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-タ|SpaceAfter=No|UnidicInfo=タ,た,た,た,タ,,,タ,タ,た
35	ため	為	NOUN	名詞-普通名詞-副詞可能	_	43	obl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=名詞-普通名詞-一般|SpaceAfter=No|UnidicInfo=タメ,為,ため,ため,タメ,,,タメ,タメ,為
36	、	、	PUNCT	補助記号-読点	_	35	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-読点|SpaceAfter=No|UnidicInfo=,、,、,、,,,,,,、
37	そこ	其処	PRON	代名詞	_	39	obj	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=代名詞|SpaceAfter=No|UnidicInfo=ソコ,其処,そこ,そこ,ソコ,,,ソコ,ソコ,其処
38	を	を	ADP	助詞-格助詞	_	37	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ヲ,を,を,を,オ,,,ヲ,ヲ,を
39	奪取	奪取	VERB	名詞-普通名詞-サ変可能	_	43	advcl	_	BunsetuBILabel=B|BunsetuPositionType=SEM_HEAD|LUWBILabel=B|LUWPOS=動詞-一般-サ行変格|SpaceAfter=No|UnidicInfo=ダッシュ,奪取,奪取,奪取,ダッシュ,,,ダッシュ,ダッシュスル,奪取する
40	しよう	為る	AUX	動詞-非自立可能-サ行変格	_	39	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=I|LUWPOS=動詞-一般-サ行変格|PrevUDLemma=する|SpaceAfter=No|UnidicInfo=スル,為る,しよう,する,シヨー,,,スル,ダッシュスル,奪取する
41	と	と	ADP	助詞-格助詞	_	39	case	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助詞-格助詞|SpaceAfter=No|UnidicInfo=ト,と,と,と,ト,,,ト,ト,と
42	は	は	ADP	助詞-係助詞	_	39	case	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助詞-係助詞|SpaceAfter=No|UnidicInfo=ハ,は,は,は,ワ,,,ハ,ハ,は
43	し	為る	VERB	動詞-非自立可能-サ行変格	_	0	root	_	BunsetuBILabel=B|BunsetuPositionType=ROOT|LUWBILabel=B|LUWPOS=動詞-一般-サ行変格|PrevUDLemma=する|SpaceAfter=No|UnidicInfo=スル,為る,し,する,シ,,,スル,スル,する
44	なかっ	ない	AUX	助動詞-助動詞-ナイ	Polarity=Neg	43	aux	_	BunsetuBILabel=I|BunsetuPositionType=SYN_HEAD|LUWBILabel=B|LUWPOS=助動詞-助動詞-ナイ|SpaceAfter=No|UnidicInfo=ナイ,ない,なかっ,ない,ナカッ,,,ナイ,ナイ,ない
45	た	た	AUX	助動詞-助動詞-タ	_	43	aux	_	BunsetuBILabel=I|BunsetuPositionType=FUNC|LUWBILabel=B|LUWPOS=助動詞-助動詞-タ|SpaceAfter=No|UnidicInfo=タ,た,た,た,タ,,,タ,タ,た
46	。	。	PUNCT	補助記号-句点	_	43	punct	_	BunsetuBILabel=I|BunsetuPositionType=CONT|LUWBILabel=B|LUWPOS=補助記号-句点|SpaceAfter=No|UnidicInfo=,。,。,。,,,,,,。

~~~


