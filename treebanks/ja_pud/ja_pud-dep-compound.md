---
layout: base
title:  'Statistics of compound in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `compound`

This relation is universal.

1530 nodes (6%) are attached to their parents as `compound`.

1327 instances of `compound` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.21372549019608.

The following 14 pairs of parts of speech are connected with `compound`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (862; 56% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (269; 18% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-SYM.html">SYM</a></tt> (155; 10% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (56; 4% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (55; 4% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-SYM.html">SYM</a></tt> (46; 3% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (44; 3% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (16; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (12; 1% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	ドレス	ドレス	NOUN	NN	_	2	compound	_	GHEAD=2|GHEADH=2|GID=1|Match=Yes|SpaceAfter=No
2	コード	コード	NOUN	NN	_	4	nsubj	_	GHEAD=4|GHEADH=4|GID=2|Match=Yes|SpaceAfter=No
3	が	が	ADP	CM	Case=Nom	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	堅苦し	堅苦しい	ADJ	JJI	Form=Spcf	0	root	_	GHEAD=0|GID=4|Match=Yes|SpaceAfter=No
5	すぎる	すぎる	AUX	VXH	Form=Adn	4	aux	_	GDPRL=auxvv|GHEAD=4|GHEADH=4|GID=5|GUPOS=VERB|Match=Yes|SpaceAfter=No
6	の	の	PART	_	_	4	mark	_	GDPRL=aux|GF/Form=Irr|GFORM=のだろ|GHEAD=4|GHEADH=4|GID=6|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
7	だろ	だ	AUX	_	_	4	cop	_	GDPRL=aux|GF/Form=Irr|GFORM=のだろ|GHEAD=4|GHEADH=4|GID=6|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
8	う	う	AUX	VXP	VerbForm=Fin	4	aux	_	GHEAD=4|GHEADH=4|GID=7|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	。	。	PUNCT	.	_	4	punct	_	Match=Yes|GID=8|GHEAD=4|GHEADH=4

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
1	パバルカル	パバルカル	PROPN	_	_	2	compound	_	GDPRL=nsubj|GFORM=パバルカル氏|GHEAD=21|GHEADH=21|GID=1|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
2	氏	氏	NOUN	_	_	21	nsubj	_	GDPRL=nsubj|GFORM=パバルカル氏|GHEAD=21|GHEADH=21|GID=1|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
3	は	は	ADP	DP	_	2	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1,2|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
4	、	、	PUNCT	,	_	2	punct	_	GHEAD=1|GHEADH=1,2|GID=3|Match=Yes|SpaceAfter=No
5	「	「	PUNCT	``	_	2	punct	_	GHEAD=16|GHEADH=17|GID=4|Match=Yes|SpaceAfter=No
6	建物	建物	NOUN	NN	_	8	obj	_	GHEAD=7|GHEADH=8|GID=5|Match=Yes|SpaceAfter=No
7	を	を	ADP	CM	Case=Acc	6	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=6|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
8	残す	残す	VERB	VV	Form=Adn	9	acl	_	GDPRL=acl:relcl|GHEAD=8|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
9	必要	必要	NOUN	NN	_	11	nsubj	_	GHEAD=10|GHEADH=11|GID=8|Match=Yes|SpaceAfter=No
10	が	が	ADP	CM	Case=Nom	9	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=9|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
11	ある	ある	VERB	VV	VerbForm=Fin	13	acl	_	GDPRL=ccomp|GHEAD=12|GHEADH=13|GID=10|Match=Yes|SpaceAfter=No
12	と	と	SCONJ	CM	Case=Comp	11	mark	_	GDPRL=compound:prt|GHEAD=10|GHEADH=11|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
13	感じ	感じる	VERB	VV	VerbForm=Ger	15	acl	_	GDPRL=acl:relcl|GHEAD=14|GHEADH=15|GID=12|Match=Yes|SpaceAfter=No
14	た	た	AUX	VXP	Form=Adn|Tense=Past	13	aux	_	GHEAD=12|GHEADH=13|GID=13|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	とき	とき	NOUN	NNB	_	17	nsubj	_	GHEAD=16|GHEADH=17|GID=14|Match=Yes|SpaceAfter=No
16	が	が	ADP	CM	Case=Nom	15	case	_	GDPRL=compound:prt|GHEAD=14|GHEADH=15|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
17	あっ	ある	VERB	VV	VerbForm=Ger	21	acl	_	GDPRL=ccomp|GHEAD=21|GHEADH=21|GID=16|Match=Yes|SpaceAfter=No
18	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	17	aux	_	GHEAD=16|GHEADH=17|GID=17|GUPOS=VERB|Match=Yes|SpaceAfter=No
19	。」	。」	PUNCT	_	_	20	punct	_	GDPRL=punct|GFORM=」|GHEAD=16|GHEADH=17|GID=19|GUPOS=PUNCT|GXPOS=''|SpaceAfter=No
20	と	と	SCONJ	CM	Case=Comp	17	mark	_	GDPRL=compound:prt|GHEAD=16|GHEADH=17|GID=20|GUPOS=PART|Match=Yes|SpaceAfter=No
21	述べ	述べる	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=21|Match=Yes|SpaceAfter=No
22	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	21	aux	_	GHEAD=21|GHEADH=21|GID=22|GUPOS=VERB|Match=Yes|SpaceAfter=No
23	。	。	PUNCT	.	_	21	punct	_	Match=Yes|GID=23|GHEAD=21|GHEADH=21

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	それ	それ	PRON	PRD	Person=3	3	nsubj	_	GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	素晴らしい	素晴らしい	ADJ	JJI	VerbForm=Fin	16	acl	_	GDPRL=ccomp|GHEAD=18|GHEADH=16|GID=3|Match=Yes|SpaceAfter=No
4	、と	と	ADP	_	_	3	case	_	GDPRL=compound:prt|GF/Case=Comp|GFORM=と|GHEAD=3|GHEADH=3|GID=5|GUPOS=PART|GXPOS=CM|SpaceAfter=No
5	SaskTel	SaskTel	PROPN	NNP	_	9	nmod	_	GDPRL=compound|GHEAD=11|GHEADH=9|GID=6|Match=Yes|SpaceAfter=No
6	の	の	ADP	CM	Case=Gen	5	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=5|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
7	無制限	無制限	ADJ	_	_	9	acl	_	GDPRL=compound|GFORM=制限|GHEAD=11|GHEADH=9|GID=9|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
8	データ	データ	NOUN	NN	_	9	compound	_	GHEAD=11|GHEADH=9|GID=10|Match=Yes|SpaceAfter=No
9	カスタマー	カスタマー	NOUN	NN	_	13	nmod	_	GDPRL=nsubj|GHEAD=18|GHEADH=16|GID=11|Match=Yes|SpaceAfter=No
10	、	、	PUNCT	,	_	9	punct	_	GHEAD=13|GHEADH=11|GID=12|Match=Yes|SpaceAfter=No
11	リンゼイ	リンゼイ	PROPN	NNP	_	13	nmod	_	GDPRL=appos|GHEAD=11|GHEADH=9|GID=13|Match=Yes|SpaceAfter=No
12	・	・	SYM	/	_	11	compound	_	GDPRL=punct|GHEAD=15|GHEADH=13|GID=14|GUPOS=PUNCT|Match=Yes|SpaceAfter=No
13	ゲイ	ゲイ	NOUN	NNP	_	16	nsubj	_	GDPRL=flat:name|GHEAD=13|GHEADH=11|GID=15|GUPOS=PROPN|Match=Yes|SpaceAfter=No
14	が	が	ADP	CM	Case=Nom	13	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=9|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
15	先月	先月	NOUN	RB	_	16	obl	_	GDPRL=advmod|GHEAD=18|GHEADH=16|GID=17|GUPOS=ADV|Match=Yes|SpaceAfter=No
16	報告	報告	VERB	NN	_	0	root	_	GHEAD=0|GID=18|GUPOS=NOUN|Match=Yes|SpaceAfter=No
17	し	する	AUX	VV	VerbForm=Ger	16	aux	_	GDPRL=compound:v|GHEAD=18|GHEADH=16|GID=19|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	16	aux	_	GHEAD=18|GHEADH=16|GID=20|GUPOS=VERB|Match=Yes|SpaceAfter=No
19	。	。	PUNCT	.	_	16	punct	_	Match=Yes|GID=21|GHEAD=18|GHEADH=16

~~~


