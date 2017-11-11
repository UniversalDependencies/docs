---
layout: base
title:  'Statistics of obl in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `obl`

This relation is universal.

1288 nodes (5%) are attached to their parents as `obl`.

1288 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.12810559006211.

The following 18 pairs of parts of speech are connected with `obl`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (784; 61% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (120; 9% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (104; 8% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (83; 6% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (69; 5% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (32; 2% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (21; 2% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (19; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 obl	color:blue
1	新た	新た	ADJ	JJN	_	3	amod	_	GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	な	だ	AUX	VXP	Form=Adn	1	aux	_	GHEAD=1|GHEADH=1|GID=2|GUPOS=VERB|Match=Yes|SpaceAfter=No
3	支出	支出	NOUN	NN	_	11	nsubj	_	GDPRL=nsubj:pass|GHEAD=12|GHEADH=11|GID=3|Match=Yes|SpaceAfter=No
4	は	は	ADP	DP	_	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	クリントン	クリントン	PROPN	NNP	_	9	nmod	_	GDPRL=compound|GHEAD=10|GHEADH=9|GID=5|Match=Yes|SpaceAfter=No
6	の	の	ADP	CM	Case=Gen	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	巨大	巨大	ADJ	JJN	_	9	acl	_	GDPRL=amod|GHEAD=10|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
8	な	だ	AUX	VXP	Form=Adn	7	aux	_	GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	銀行口座	銀行口座	NOUN	_	_	11	obl	_	GDPRL=advmod|GFORM=口座|GHEAD=12|GHEADH=11|GID=10|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
10	によって	によって	ADP	CM	Case=Advb	9	case	_	GDPRL=compound:prt|GHEAD=10|GHEADH=9|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
11	充填	充填	VERB	NN	_	0	root	_	GHEAD=0|GID=12|GUPOS=NOUN|Match=Yes|SpaceAfter=No
12	さ	する	AUX	VV	Form=Irr	11	aux	_	GDPRL=compound:v|GHEAD=12|GHEADH=11|GID=13|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	れ	れる	AUX	VXP	VerbForm=Ger|Voice=Pass	11	aux	_	GDPRL=aux:pass|GHEAD=12|GHEADH=11|GID=14|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	て	て	SCONJ	CP	_	11	mark	_	GDPRL=compound:prt|GHEAD=12|GHEADH=11|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
15	いる	いる	AUX	VXH	VerbForm=Fin	11	aux	_	GDPRL=auxvv|GHEAD=12|GHEADH=11|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	。	。	PUNCT	.	_	11	punct	_	Match=Yes|GID=17|GHEAD=12|GHEADH=11

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 obl	color:blue
1	この	この	DET	DT	_	2	det	_	GHEAD=2|GHEADH=2|GID=1|GUPOS=DET|Match=Yes|SpaceAfter=No
2	領域	領域	NOUN	NN	_	5	nmod	_	GDPRL=advmod|GHEAD=5|GHEADH=5|GID=2|Match=Yes|SpaceAfter=No
3	へ	へ	ADP	CM	Case=Advb	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	の	の	PART	CM	Case=Gen	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=4|Match=Yes|SpaceAfter=No
5	投資	投資	NOUN	NN	_	13	nsubj	_	GHEAD=13|GHEADH=13|GID=5|Match=Yes|SpaceAfter=No
6	は	は	ADP	DP	_	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	2015	2015	NUM	CD	_	13	obl	_	GDPRL=advmod|GHEAD=13|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
8	年	年	NOUN	SFN	_	7	mark	_	GDPRL=snum|GHEAD=7|GHEADH=7|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
9	まで	まで	ADP	AP	_	7	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
10	に	に	ADP	CM	Case=Advb	7	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	6	6	NUM	CD	_	13	nummod	_	GDPRL=advmod|GHEAD=13|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
12	％	%	NOUN	_	_	11	mark	_	GDPRL=snum|GFORM=％|GHEAD=11|GHEADH=11|GID=12|GUPOS=PART|GXPOS=SFN|OrigForm=%|SpaceAfter=No
13	上昇	上昇	VERB	NN	_	17	advcl	_	GDPRL=advcl|GHEAD=17|GHEADH=17|GID=13|GUPOS=NOUN|Match=Yes|SpaceAfter=No
14	し	する	AUX	VV	VerbForm=Ger	13	aux	_	GDPRL=compound:v|GHEAD=13|GHEADH=13|GID=14|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	て	て	SCONJ	CP	_	13	mark	_	GDPRL=compound:prt|GHEAD=13|GHEADH=13|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
16	221	221	NUM	CD	_	17	nummod	_	GHEAD=17|GHEADH=17|GID=16|Match=Yes|SpaceAfter=No
17	億	億	NUM	NNB	_	20	obl	_	GDPRL=root|GHEAD=0|GID=17|GUPOS=NOUN|Match=Yes|SpaceAfter=No
18	ドル	ドル	NOUN	SFN	_	17	mark	_	GDPRL=snum|GHEAD=17|GHEADH=17|GID=18|GUPOS=PART|Match=Yes|SpaceAfter=No
19	に	に	ADP	CM	Case=Comp	17	case	_	GDPRL=compound:prt|GHEAD=17|GHEADH=17|GID=19|GUPOS=PART|Match=Yes|SpaceAfter=No
20	なっ	なる	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=cop|GHEAD=17|GHEADH=17|GID=20|GUPOS=AUX|Match=Yes|SpaceAfter=No
21	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	20	aux	_	GHEAD=17|GHEADH=17|GID=21|GUPOS=VERB|Match=Yes|SpaceAfter=No
22	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=22|GHEAD=17|GHEADH=17

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 obl	color:blue
1	その後	その後	NOUN	_	_	13	obl	_	GDPRL=obl:tmod|GFORM=後|GHEAD=15|GHEADH=13|GID=2|GUPOS=NOUN|GXPOS=NNB|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=2|GHEADH=1|GID=3|Match=Yes|SpaceAfter=No
3	ブッシュハウス	ブッシュハウス	PROPN	_	_	13	obl	_	GDPRL=advmod|GFORM=ハウス|GHEAD=15|GHEADH=13|GID=5|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
4	で	で	ADP	CM	Case=Advb	3	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=3|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
5	4	4	NUM	CD	_	13	obj	_	GDPRL=obj|GHEAD=15|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
6	年	年	NOUN	SFN	_	5	mark	_	GDPRL=snum|GHEAD=7|GHEADH=5|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
7	を	を	ADP	CM	Case=Acc	5	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=5|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
8	BBC	BBC	PROPN	NNP	_	11	compound	_	GHEAD=12|GHEADH=10|GID=10|Match=Yes|SpaceAfter=No
9	ワールド	ワールド	NOUN	NN	_	11	compound	_	GHEAD=12|GHEADH=10|GID=11|Match=Yes|SpaceAfter=No
10	サービス	サービス	NOUN	NN	_	11	compound	_	GHEAD=13|GHEADH=11|GID=12|Match=Yes|SpaceAfter=No
11	ラジオ	ラジオ	NOUN	NN	_	13	obl	_	GDPRL=advmod|GHEAD=15|GHEADH=13|GID=13|Match=Yes|SpaceAfter=No
12	とともに	とともに	PART	CM	Case=Advb	11	case	_	GDPRL=compound:prt|GHEAD=13|GHEADH=11|GID=14|Match=Yes|SpaceAfter=No
13	過ごし	過ごす	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=15|Match=Yes|SpaceAfter=No
14	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	13	aux	_	GHEAD=15|GHEADH=13|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	。	。	PUNCT	.	_	13	punct	_	Match=Yes|GID=17|GHEAD=15|GHEADH=13

~~~


