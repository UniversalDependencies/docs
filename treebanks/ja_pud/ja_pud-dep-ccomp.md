---
layout: base
title:  'Statistics of ccomp in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `ccomp`

This relation is universal.

36 nodes (0%) are attached to their parents as `ccomp`.

36 instances of `ccomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.63888888888889.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (27; 75% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (9; 25% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 12 ccomp	color:blue
1	ロッコ	ロッコ	PROPN	NNP	_	4	nmod	_	GDPRL=nsubj|GHEAD=7|GHEADH=8|GID=1|Match=Yes|SpaceAfter=No
2	・	・	SYM	/	_	1	compound	_	GDPRL=punct|GHEAD=3|GHEADH=3,4|GID=2|GUPOS=PUNCT|Match=Yes|SpaceAfter=No
3	カタラーノ	カタラーノ	PROPN	_	_	4	compound	_	GDPRL=flat:name|GFORM=カタラーノ氏|GHEAD=1|GHEADH=1|GID=3|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
4	氏	氏	NOUN	_	_	8	nsubj	_	GDPRL=flat:name|GFORM=カタラーノ氏|GHEAD=1|GHEADH=1|GID=3|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
5	は	は	ADP	DP	_	4	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
6	レトロ	レトロ	ADJ	JJN	_	12	acl	_	GDPRL=advmod|GHEAD=7|GHEADH=8|GID=5|Match=Yes|SpaceAfter=No
7	に	だ	AUX	VXP	VerbForm=Ger	6	aux	_	GHEAD=5|GHEADH=6|GID=6|GUPOS=VERB|Match=Yes|SpaceAfter=No
8	働き	働き	NOUN	VV	VerbForm=Ger	12	obl	_	GDPRL=ccomp|GHEAD=15|GHEADH=16|GID=7|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	、	、	PUNCT	,	_	8	punct	_	GHEAD=9|GHEADH=10|GID=8|Match=Yes|SpaceAfter=No
10	暮らし	暮らし	NOUN	VV	VerbForm=Ger	12	obl	_	GDPRL=parataxis|GHEAD=7|GHEADH=8|GID=9|GUPOS=VERB|Match=Yes|SpaceAfter=No
11	、	、	PUNCT	,	_	10	punct	_	GHEAD=11|GHEADH=12|GID=10|Match=Yes|SpaceAfter=No
12	生き	生きる	VERB	VV	VerbForm=Ger	16	ccomp	_	GDPRL=parataxis|GHEAD=7|GHEADH=8|GID=11|Match=Yes|SpaceAfter=No
13	て	て	SCONJ	CP	_	12	mark	_	GDPRL=compound:prt|GHEAD=11|GHEADH=12|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
14	いる	いる	AUX	VXH	VerbForm=Fin	12	aux	_	GDPRL=auxvv|GHEAD=11|GHEADH=12|GID=13|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	と	と	ADP	CM	Case=Comp	12	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=8|GID=14|GUPOS=PART|Match=Yes|SpaceAfter=No
16	言っ	言う	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=15|Match=Yes|SpaceAfter=No
17	て	て	SCONJ	CP	_	16	mark	_	GDPRL=compound:prt|GHEAD=15|GHEADH=16|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
18	も	も	ADP	DP	_	16	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=16|GID=17|GUPOS=PART|Match=Yes|SpaceAfter=No
19	よい	よい	AUX	JJN	_	16	fixed	_	GDPRL=auxvv|GHEAD=15|GHEADH=16|GID=18|GUPOS=ADJ|Match=Yes|SpaceAfter=No
20	。	。	PUNCT	.	_	16	punct	_	Match=Yes|GID=19|GHEAD=15|GHEADH=16

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 ccomp	color:blue
1	「	「	PUNCT	``	_	8	punct	_	GHEAD=8|GHEADH=8|GID=1|Match=Yes|SpaceAfter=No
2	私	私	PRON	PRP	Person=1	8	nsubj	_	GDPRL=dislocated|GHEAD=8|GHEADH=8|GID=2|Match=Yes|SpaceAfter=No
3	は	は	ADP	DP	_	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	、	、	PUNCT	,	_	2	punct	_	GHEAD=2|GHEADH=2|GID=4|Match=Yes|SpaceAfter=No
5	トロピカル	トロピカル	NOUN	JJN	_	6	compound	_	GDPRL=amod|GHEAD=6|GHEADH=6|GID=5|GUPOS=ADJ|Match=Yes|SpaceAfter=No
6	カラー	カラー	NOUN	NN	_	8	nsubj	_	GHEAD=8|GHEADH=8|GID=6|Match=Yes|SpaceAfter=No
7	が	が	ADP	CM	Case=Nom	6	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	大好き	大好き	ADJ	JJN	_	14	ccomp	_	GDPRL=ccomp|GHEAD=14|GHEADH=14|GID=8|Match=Yes|SpaceAfter=No
9	」	」	PUNCT	''	_	8	punct	_	GDPRL=punct|GHEAD=8|GHEADH=8|GID=9|Match=Yes|SpaceAfter=No
10	と	と	ADP	CM	Case=Comp	8	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=8|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	、	、	PUNCT	,	_	8	punct	_	GHEAD=8|GHEADH=8|GID=11|Match=Yes|SpaceAfter=No
12	彼	彼	PRON	PRP	Person=3	14	nsubj	_	GHEAD=14|GHEADH=14|GID=12|Match=Yes|SpaceAfter=No
13	は	は	ADP	DP	_	12	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=12|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	言っ	言う	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=14|Match=Yes|SpaceAfter=No
15	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	14	aux	_	GHEAD=14|GHEADH=14|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	。	。	PUNCT	.	_	14	punct	_	Match=Yes|GID=16|GHEAD=14|GHEADH=14

~~~


