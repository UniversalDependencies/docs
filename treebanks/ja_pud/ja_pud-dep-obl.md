---
layout: base
title:  'Statistics of obl in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `obl`

This relation is universal.

1081 nodes (4%) are attached to their parents as `obl`.

1081 instances of `obl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.66882516188714.

The following 14 pairs of parts of speech are connected with `obl`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (752; 70% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (91; 8% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (80; 7% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (67; 6% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (30; 3% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (20; 2% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (9; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (6; 1% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 obl	color:blue
1	その後	その後	NOUN	_	_	13	obl	_	GDPRL=obl:tmod|GFORM=後|GHEAD=15|GHEADH=13|GID=2|GUPOS=NOUN|GXPOS=NNB|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=2|GHEADH=1|GID=3|Match=Yes|SpaceAfter=No
3	ブッシュハウス	ブッシュハウス	PROPN	_	_	13	obl	_	GDPRL=advmod|GFORM=ハウス|GHEAD=15|GHEADH=13|GID=5|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
4	で	で	ADP	CM	Case=Advb	3	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=3|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
5	4	4	NUM	CD	_	13	nummod	_	GDPRL=obj|GHEAD=15|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
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


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 12 obl	color:blue
1	有名人	有名人	NOUN	JJN	_	3	nmod	_	GDPRL=compound|GHEAD=3|GHEADH=3|GID=1|GUPOS=ADJ|Match=Yes|SpaceAfter=No
2	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	名前	名前	NOUN	NN	_	9	nsubj	_	GHEAD=9|GHEADH=9|GID=3|Match=Yes|SpaceAfter=No
4	が	が	ADP	CM	Case=Nom	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	当初	当初	NOUN	RB	_	9	nsubj	_	GDPRL=advmod|GHEAD=9|GHEADH=9|GID=5|GUPOS=ADV|Match=Yes|SpaceAfter=No
6	は	は	ADP	DP	_	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	非常	非常	ADJ	JJN	_	9	acl	_	GDPRL=advmod|GHEAD=9|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
8	に	だ	AUX	VXP	VerbForm=Ger	7	aux	_	GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	まれ	まれ	ADJ	JJN	_	12	acl	_	GDPRL=acl:relcl|GHEAD=11|GHEADH=12|GID=9|Match=Yes|SpaceAfter=No
10	で	だ	AUX	_	_	9	aux	_	GDPRL=aux|GF/Form=Adn|GFORM=である|GHEAD=9|GHEADH=9|GID=10|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
11	ある	ある	AUX	_	_	9	fixed	_	GDPRL=aux|GF/Form=Adn|GFORM=である|GHEAD=9|GHEADH=9|GID=10|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
12	場合	場合	NOUN	NN	_	18	obl	_	GDPRL=advmod|GHEAD=17|GHEADH=18|GID=11|Match=Yes|SpaceAfter=No
13	、	、	PUNCT	,	_	12	punct	_	GHEAD=11|GHEADH=12|GID=12|Match=Yes|SpaceAfter=No
14	この	この	ADJ	DT	_	15	det	_	GHEAD=14|GHEADH=15|GID=13|GUPOS=DET|Match=Yes|SpaceAfter=No
15	こと	こと	NOUN	NNB	_	18	nsubj	_	GHEAD=17|GHEADH=18|GID=14|Match=Yes|SpaceAfter=No
16	は	は	ADP	DP	_	15	case	_	GDPRL=compound:prt|GHEAD=14|GHEADH=15|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
17	最も	最も	ADV	RB	_	18	advmod	_	GHEAD=17|GHEADH=18|GID=16|Match=Yes|SpaceAfter=No
18	明白	明白	ADJ	JJN	_	0	root	_	GHEAD=0|GID=17|Match=Yes|SpaceAfter=No
19	で	だ	AUX	_	_	18	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=である|GHEAD=17|GHEADH=18|GID=18|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
20	ある	ある	AUX	_	_	18	fixed	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=である|GHEAD=17|GHEADH=18|GID=18|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
21	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=19|GHEAD=17|GHEADH=18

~~~


