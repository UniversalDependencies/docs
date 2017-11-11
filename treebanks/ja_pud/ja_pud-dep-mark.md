---
layout: base
title:  'Statistics of mark in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `mark`

This relation is universal.

1420 nodes (5%) are attached to their parents as `mark`.

1420 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65281690140845.

The following 14 pairs of parts of speech are connected with `mark`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (793; 56% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (417; 29% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (101; 7% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (43; 3% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (29; 2% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (11; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (4; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 14 mark	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mark	color:blue
1	最高	最高	PART	NN	_	5	amod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=1|GUPOS=NOUN|Match=Yes|SpaceAfter=No
2	一	一	NUM	CD	_	5	nummod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=2|Match=Yes|SpaceAfter=No
3	人	人	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
4	あたり	あたり	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
5	5,000	5,000	NUM	CD	_	9	nsubj	_	GDPRL=nsubj:pass|GHEAD=8|GHEADH=9|GID=4|Match=Yes|SpaceAfter=No
6	ドル	ドル	NOUN	SFN	_	5	mark	_	GDPRL=snum|GHEAD=4|GHEADH=5|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
7	が	が	ADP	CM	Case=Nom	5	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
8	、	、	PUNCT	,	_	5	punct	_	GHEAD=4|GHEADH=5|GID=7|Match=Yes|SpaceAfter=No
9	許可	許可	VERB	NN	_	0	root	_	GHEAD=0|GID=8|GUPOS=NOUN|Match=Yes|SpaceAfter=No
10	さ	する	AUX	VV	Form=Irr	9	aux	_	GDPRL=compound:v|GHEAD=8|GHEADH=9|GID=9|GUPOS=VERB|Match=Yes|SpaceAfter=No
11	れ	れる	AUX	VXP	VerbForm=Ger|Voice=Pass	9	aux	_	GDPRL=aux:pass|GHEAD=8|GHEADH=9|GID=10|GUPOS=VERB|Match=Yes|SpaceAfter=No
12	て	て	SCONJ	CP	_	9	mark	_	GDPRL=compound:prt|GHEAD=8|GHEADH=9|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
13	いる	いる	AUX	VXH	VerbForm=Fin	9	aux	_	GDPRL=auxvv|GHEAD=8|GHEADH=9|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	。	。	PUNCT	.	_	9	punct	_	Match=Yes|GID=13|GHEAD=8|GHEADH=9

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 mark	color:blue
1	なぜ	なぜ	ADV	RB	_	14	advmod	_	GHEAD=6|GHEADH=6|GID=1|Match=Yes|SpaceAfter=No
2	人々	人々	NOUN	NN	_	6	nsubj	_	GHEAD=6|GHEADH=6|GID=2|Match=Yes|SpaceAfter=No
3	が	が	ADP	CM	Case=Nom	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	トランプ	トランプ	NOUN	NN	_	6	iobj	_	GDPRL=advmod|GHEAD=6|GHEADH=6|GID=4|Match=Yes|SpaceAfter=No
5	に	に	ADP	CM	Case=Advb	4	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=4|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
6	投票	投票	VERB	NN	_	14	acl	_	GDPRL=nomc|GHEAD=9|GHEADH=10|GID=6|GUPOS=NOUN|Match=Yes|SpaceAfter=No
7	する	する	AUX	VV	VerbForm=Fin	6	aux	_	GDPRL=compound:v|GHEAD=6|GHEADH=6|GID=7|GUPOS=VERB|Match=Yes|SpaceAfter=No
8	かもしれ	かもしれる	AUX	_	_	6	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=6|GHEADH=6|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
9	ない	ない	AUX	_	_	6	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=6|GHEADH=6|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
10	か	か	PART	PP	_	6	mark	_	GDPRL=obj|GHEAD=13|GHEADH=14|GID=9|Match=Yes|SpaceAfter=No
11	を	を	ADP	CM	Case=Acc	6	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=10|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
12	彼女	彼女	PRON	PRP	Person=3	14	nsubj	_	GHEAD=13|GHEADH=14|GID=11|Match=Yes|SpaceAfter=No
13	が	が	ADP	CM	Case=Nom	12	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=12|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
14	理解	理解	VERB	NN	_	23	acl	_	GDPRL=obj|GHEAD=22|GHEADH=23|GID=13|GUPOS=NOUN|Match=Yes|SpaceAfter=No
15	し	する	AUX	VV	VerbForm=Ger	14	aux	_	GDPRL=compound:v|GHEAD=13|GHEADH=14|GID=14|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	14	aux	_	GHEAD=13|GHEADH=14|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
17	か	か	PART	PP	_	14	mark	_	GDPRL=compound:prt|GHEAD=13|GHEADH=14|GID=16|Match=Yes|SpaceAfter=No
18	、	、	PUNCT	,	_	14	punct	_	GHEAD=13|GHEADH=14|GID=17|Match=Yes|SpaceAfter=No
19	最終的	最終的	ADJ	NN	_	23	acl	_	GDPRL=advmod|GHEAD=22|GHEADH=23|GID=18|GUPOS=NOUN|Match=Yes|SpaceAfter=No
20	に	だ	AUX	VXP	VerbForm=Ger	19	aux	_	GHEAD=18|GHEADH=19|GID=19|GUPOS=VERB|Match=Yes|SpaceAfter=No
21	彼女	彼女	PRON	PRP	Person=3	23	iobj	_	GDPRL=advmod|GHEAD=22|GHEADH=23|GID=20|Match=Yes|SpaceAfter=No
22	に	に	ADP	CM	Case=Advb	21	case	_	GDPRL=compound:prt|GHEAD=20|GHEADH=21|GID=21|GUPOS=PART|Match=Yes|SpaceAfter=No
23	尋ね	尋ねる	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=22|Match=Yes|SpaceAfter=No
24	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	23	aux	_	GHEAD=22|GHEADH=23|GID=23|GUPOS=VERB|Match=Yes|SpaceAfter=No
25	。	。	PUNCT	.	_	23	punct	_	Match=Yes|GID=24|GHEAD=22|GHEADH=23

~~~


