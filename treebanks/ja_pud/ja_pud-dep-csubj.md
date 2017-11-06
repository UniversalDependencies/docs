---
layout: base
title:  'Statistics of csubj in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `csubj`

This relation is universal.

15 nodes (0%) are attached to their parents as `csubj`.

15 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.6.

The following 5 pairs of parts of speech are connected with `csubj`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (7; 47% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 4 csubj	color:blue
1	この	この	ADJ	DT	_	2	det	_	GHEAD=2|GHEADH=2|GID=1|GUPOS=DET|Match=Yes|SpaceAfter=No
2	地	地	NOUN	NN	_	4	obj	_	GHEAD=4|GHEADH=4|GID=2|Match=Yes|SpaceAfter=No
3	を	を	ADP	CM	Case=Acc	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	去っ	去る	VERB	VV	VerbForm=Ger	13	csubj	_	GDPRL=nomc|GHEAD=6|GHEADH=6|GID=4|Match=Yes|SpaceAfter=No
5	た	た	AUX	VXP	Form=Adn|Tense=Past	4	aux	_	GHEAD=4|GHEADH=4|GID=5|GUPOS=VERB|Match=Yes|SpaceAfter=No
6	の	の	PART	PP	_	4	mark	_	GDPRL=advmod|GHEAD=13|GHEADH=13|GID=6|Match=Yes|SpaceAfter=No
7	に	に	ADP	CM	Case=Advb	4	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	は	は	ADP	DP	_	4	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
9	様々	様々	ADJ	JJN	_	11	acl	_	GDPRL=amod|GHEAD=11|GHEADH=11|GID=9|Match=Yes|SpaceAfter=No
10	な	だ	AUX	VXP	Form=Adn	9	aux	_	GHEAD=9|GHEADH=9|GID=10|GUPOS=VERB|Match=Yes|SpaceAfter=No
11	説	説	NOUN	NN	_	13	nsubj	_	GHEAD=13|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
12	が	が	ADP	CM	Case=Nom	11	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=11|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
13	ある	ある	VERB	VV	VerbForm=Fin	0	root	_	GHEAD=0|GID=13|Match=Yes|SpaceAfter=No
14	。	。	PUNCT	.	_	13	punct	_	Match=Yes|GID=14|GHEAD=13|GHEADH=13

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 13 csubj	color:blue
1	私	私	PRON	PRP	Person=1	25	nsubj	_	GHEAD=5|GHEADH=5|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	それ	それ	PRON	PRD	Person=3	5	obj	_	GHEAD=5|GHEADH=5|GID=3|Match=Yes|SpaceAfter=No
4	を	を	ADP	CM	Case=Acc	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	いじる	いじる	VERB	VV	Form=Adn	8	csubj	_	GDPRL=nomc|GHEAD=6|GHEADH=6|GID=5|Match=Yes|SpaceAfter=No
6	の	の	PART	PP	_	5	mark	_	GDPRL=nomcsubj|GHEAD=8|GHEADH=8|GID=6|Match=Yes|SpaceAfter=No
7	が	が	ADP	CM	Case=Nom	5	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	大好き	大好き	ADJ	JJN	_	25	acl	_	GDPRL=root|GHEAD=0|GID=8|Match=Yes|SpaceAfter=No
9	で	だ	AUX	VXP	VerbForm=Ger	8	aux	_	GHEAD=8|GHEADH=8|GID=9|GUPOS=VERB|Match=Yes|SpaceAfter=No
10	、	、	PUNCT	,	_	8	punct	_	GHEAD=26|GHEADH=25|GID=10|Match=Yes|SpaceAfter=No
11	見つける	見つける	VERB	VV	VerbForm=Fin	13	acl	_	GDPRL=advcl|GHEAD=13|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
12	と	と	SCONJ	CP	_	11	mark	_	GDPRL=compound:prt|GHEAD=11|GHEADH=11|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
13	集める	集める	VERB	VV	Form=Adn	17	csubj	_	GDPRL=nomc|GHEAD=14|GHEADH=14|GID=13|Match=Yes|SpaceAfter=No
14	の	の	PART	PP	_	13	mark	_	GDPRL=nomcsubj|GHEAD=18|GHEADH=17|GID=14|Match=Yes|SpaceAfter=No
15	が	が	ADP	CM	Case=Nom	13	case	_	GDPRL=compound:prt|GHEAD=14|GHEADH=14|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
16	本当に	本当に	ADV	_	_	17	advmod	_	GDPRL=aux|GF/Case=Advb|GFORM=に|GHEAD=16|GHEADH=16|GID=17|GUPOS=PART|GXPOS=CM|SpaceAfter=No
17	面白く	面白い	ADJ	JJI	VerbForm=Ger	25	acl	_	GDPRL=advcl|GHEAD=26|GHEADH=25|GID=18|Match=Yes|SpaceAfter=No
18	て	て	SCONJ	CP	_	17	mark	_	GDPRL=compound:prt|GHEAD=18|GHEADH=17|GID=19|GUPOS=PART|Match=Yes|SpaceAfter=No
19	、	、	PUNCT	,	_	17	punct	_	GHEAD=18|GHEADH=17|GID=20|Match=Yes|SpaceAfter=No
20	ぴったり	ぴったり	ADV	RB	_	21	advmod	_	GHEAD=22|GHEADH=21|GID=21|Match=Yes|SpaceAfter=No
21	くる	来る	VERB	VV	Form=Adn	22	acl	_	GDPRL=acl:relcl|GHEAD=23|GHEADH=22|GID=22|Match=Yes|SpaceAfter=No
22	もの	もの	NOUN	NNB	_	25	obj	_	GHEAD=26|GHEADH=25|GID=23|Match=Yes|SpaceAfter=No
23	を	を	ADP	CM	Case=Acc	22	case	_	GDPRL=compound:prt|GHEAD=23|GHEADH=22|GID=24|GUPOS=PART|Match=Yes|SpaceAfter=No
24	いつも	いつも	ADV	RB	_	25	advmod	_	GHEAD=26|GHEADH=25|GID=25|Match=Yes|SpaceAfter=No
25	探し	探す	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=parataxis|GHEAD=8|GHEADH=8|GID=26|Match=Yes|SpaceAfter=No
26	て	て	SCONJ	CP	_	25	mark	_	GDPRL=compound:prt|GHEAD=26|GHEADH=25|GID=27|GUPOS=PART|Match=Yes|SpaceAfter=No
27	い	いる	AUX	VXH	VerbForm=Ger	25	aux	_	GDPRL=auxvv|GHEAD=26|GHEADH=25|GID=28|GUPOS=VERB|Match=Yes|SpaceAfter=No
28	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	25	aux	_	GHEAD=26|GHEADH=25|GID=29|GUPOS=VERB|Match=Yes|SpaceAfter=No
29	。	。	PUNCT	.	_	25	punct	_	Match=Yes|GID=30|GHEAD=8|GHEADH=8

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 csubj	color:blue
1	次に	次に	ADV	_	_	2	advmod	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=に|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|GXPOS=CM|SpaceAfter=No
2	停まる	停まる	VERB	VV	Form=Adn	13	csubj	_	GDPRL=nomc|GHEAD=4|GHEADH=3|GID=3|Match=Yes|SpaceAfter=No
3	の	の	PART	PP	_	2	mark	_	GDPRL=nomcsubj|GHEAD=6|GHEADH=5|GID=4|Match=Yes|SpaceAfter=No
4	は	は	ADP	DP	_	2	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=3|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
5	ベリンガム	ベリンガム	PROPN	NNP	_	7	nmod	_	GDPRL=root|GHEAD=0|GID=6|Match=Yes|SpaceAfter=No
6	、	、	PUNCT	,	_	5	punct	_	GHEAD=14|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
7	カナダ	カナダ	PROPN	NNP	_	10	nmod	_	GDPRL=advmod|GHEAD=11|GHEADH=10|GID=8|Match=Yes|SpaceAfter=No
8	と	と	ADP	CM	Case=Advb	7	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
9	の	の	PART	CM	Case=Gen	7	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=7|GID=10|Match=Yes|SpaceAfter=No
10	国境	国境	NOUN	NN	_	13	obl	_	GDPRL=compound|GHEAD=14|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
11	の	の	ADP	CM	Case=Gen	10	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=10|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
12	すぐ	すぐ	ADV	RB	_	13	advmod	_	GHEAD=14|GHEADH=13|GID=13|Match=Yes|SpaceAfter=No
13	近く	近く	NOUN	NN	_	0	root	_	GDPRL=appos|GHEAD=6|GHEADH=5|GID=14|Match=Yes|SpaceAfter=No
14	だ	だ	AUX	VXP	VerbForm=Fin	13	cop	_	GDPRL=aux|GHEAD=6|GHEADH=5|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	。	。	PUNCT	.	_	13	punct	_	Match=Yes|GID=16|GHEAD=6|GHEADH=5

~~~


