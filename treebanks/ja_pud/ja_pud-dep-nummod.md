---
layout: base
title:  'Statistics of nummod in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `nummod`

This relation is universal.

535 nodes (2%) are attached to their parents as `nummod`.

535 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.34205607476636.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (265; 50% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (208; 39% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (44; 8% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (9; 2% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (8; 1% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nummod	color:blue
1	彼女	彼女	PRON	PRP	Person=3	16	nsubj	_	GDPRL=nsubj:pass|GHEAD=16|GHEADH=16|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	2	2	NUM	CD	_	6	nummod	_	GDPRL=compound|GHEAD=6|GHEADH=6|GID=3|Match=Yes|SpaceAfter=No
4	歳	歳	NOUN	SFN	_	3	mark	_	GDPRL=snum|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	の	の	ADP	CM	Case=Gen	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
6	娘	娘	NOUN	NN	_	8	obj	_	GHEAD=8|GHEADH=8|GID=6|Match=Yes|SpaceAfter=No
7	を	を	ADP	CM	Case=Acc	6	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	殺そ	殺す	VERB	VV	Form=Irr	11	acl	_	GDPRL=acl:relcl|GHEAD=13|GHEADH=13|GID=8|Match=Yes|SpaceAfter=No
9	う	う	AUX	VXP	VerbForm=Fin	8	aux	_	GHEAD=8|GHEADH=8|GID=9|GUPOS=VERB|Match=Yes|SpaceAfter=No
10	と	と	SCONJ	CM	Case=Comp	8	mark	_	GDPRL=fixed|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	し	する	VERB	VV	VerbForm=Ger	16	acl	_	GDPRL=fixed|GHEAD=9|GHEADH=9|GID=11|Match=Yes|SpaceAfter=No
12	た	た	AUX	VXP	Form=Adn|Tense=Past	11	aux	_	GHEAD=8|GHEADH=8|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	こと	こと	NOUN	NNB	_	11	aux	_	GDPRL=advmod|GHEAD=16|GHEADH=16|GID=13|Match=Yes|SpaceAfter=No
14	について	について	ADP	CM	Case=Advb	11	case	_	GDPRL=compound:prt|GHEAD=13|GHEADH=13|GID=14|GUPOS=PART|Match=Yes|SpaceAfter=No
15	も	も	ADP	DP	_	11	case	_	GDPRL=compound:prt|GHEAD=13|GHEADH=13|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
16	起訴	起訴	VERB	NN	_	0	root	_	GHEAD=0|GID=16|GUPOS=NOUN|Match=Yes|SpaceAfter=No
17	さ	する	AUX	VV	Form=Irr	16	aux	_	GDPRL=compound:v|GHEAD=16|GHEADH=16|GID=17|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	れ	れる	AUX	VXP	VerbForm=Ger|Voice=Pass	16	aux	_	GDPRL=aux:pass|GHEAD=16|GHEADH=16|GID=18|GUPOS=VERB|Match=Yes|SpaceAfter=No
19	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	16	aux	_	GHEAD=16|GHEADH=16|GID=19|GUPOS=VERB|Match=Yes|SpaceAfter=No
20	。	。	PUNCT	.	_	16	punct	_	Match=Yes|GID=20|GHEAD=16|GHEADH=16

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nummod	color:blue
1	最高	最高	PART	NN	_	5	amod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=1|GUPOS=NOUN|Match=Yes|SpaceAfter=No
2	一	一	NUM	CD	_	5	nummod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=2|Match=Yes|SpaceAfter=No
3	人	人	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
4	あたり	あたり	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
5	5,000	5,000	NUM	CD	_	9	nummod	_	GDPRL=nsubj:pass|GHEAD=8|GHEADH=9|GID=4|Match=Yes|SpaceAfter=No
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nummod	color:blue
1	最高	最高	PART	NN	_	5	amod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=1|GUPOS=NOUN|Match=Yes|SpaceAfter=No
2	一	一	NUM	CD	_	5	nummod	_	GDPRL=advmod|GHEAD=4|GHEADH=5|GID=2|Match=Yes|SpaceAfter=No
3	人	人	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
4	あたり	あたり	NOUN	_	_	5	compound	_	GDPRL=snum|GFORM=人あたり|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
5	5,000	5,000	NUM	CD	_	9	nummod	_	GDPRL=nsubj:pass|GHEAD=8|GHEADH=9|GID=4|Match=Yes|SpaceAfter=No
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


