---
layout: base
title:  'Statistics of obj in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `obj`

This relation is universal.

796 nodes (3%) are attached to their parents as `obj`.

796 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.58417085427136.

The following 8 pairs of parts of speech are connected with `obj`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (694; 87% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (53; 7% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (19; 2% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (14; 2% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obj	color:blue
1	証人	証人	NOUN	NN	_	10	nsubj	_	GHEAD=18|GHEADH=16|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=3|Match=Yes|SpaceAfter=No
4	4月	4月	NOUN	_	_	10	iobj	_	GDPRL=snum|GFORM=月|GHEAD=4|GHEADH=4|GID=5|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
5	に	に	ADP	CM	Case=Advb	4	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=4|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
6	被害者	被害者	NOUN	NN	_	10	nsubj	_	GHEAD=11|GHEADH=10|GID=7|Match=Yes|SpaceAfter=No
7	が	が	ADP	CM	Case=Nom	6	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=6|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
8	被疑者	被疑者	NOUN	NN	_	10	obj	_	GHEAD=11|GHEADH=10|GID=9|Match=Yes|SpaceAfter=No
9	を	を	ADP	CM	Case=Acc	8	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=8|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
10	攻撃	攻撃	VERB	NN	_	16	acl	_	GDPRL=ccomp|GHEAD=18|GHEADH=16|GID=11|GUPOS=NOUN|Match=Yes|SpaceAfter=No
11	し	する	AUX	VV	VerbForm=Ger	10	aux	_	GDPRL=compound:v|GHEAD=11|GHEADH=10|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
12	た	た	AUX	VXP	Form=Adn|Tense=Past	10	aux	_	GHEAD=11|GHEADH=10|GID=13|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	、と	と	ADP	_	_	10	case	_	GDPRL=compound:prt|GF/Case=Comp|GFORM=と|GHEAD=11|GHEADH=10|GID=15|GUPOS=PART|GXPOS=CM|SpaceAfter=No
14	警察	警察	NOUN	NN	_	16	iobj	_	GDPRL=advmod|GHEAD=18|GHEADH=16|GID=16|Match=Yes|SpaceAfter=No
15	に	に	ADP	CM	Case=Advb	14	case	_	GDPRL=compound:prt|GHEAD=16|GHEADH=14|GID=17|GUPOS=PART|Match=Yes|SpaceAfter=No
16	言っ	言う	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=18|Match=Yes|SpaceAfter=No
17	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	16	aux	_	GHEAD=18|GHEADH=16|GID=19|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	。	。	PUNCT	.	_	16	punct	_	Match=Yes|GID=20|GHEAD=18|GHEADH=16

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 obj	color:blue
1	ミリカン	ミリカン	PROPN	NNP	_	3	nsubj	_	GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	が	が	ADP	CM	Case=Nom	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	死ん	死ぬ	VERB	VV	VerbForm=Ger	5	acl	_	GDPRL=acl:relcl|GHEAD=5|GHEADH=5|GID=3|Match=Yes|SpaceAfter=No
4	だ	た	AUX	VXP	Form=Adn|Tense=Past	3	aux	_	GHEAD=3|GHEADH=3|GID=4|GUPOS=VERB|Match=Yes|SpaceAfter=No
5	時	時	NOUN	NNB	_	20	obl	_	GDPRL=obl:tmod|GHEAD=20|GHEADH=20|GID=5|Match=Yes|SpaceAfter=No
6	、	、	PUNCT	,	_	5	punct	_	GHEAD=5|GHEADH=5|GID=6|Match=Yes|SpaceAfter=No
7	壊れ	壊れる	VERB	VV	VerbForm=Ger	12	acl	_	GDPRL=acl:relcl|GHEAD=12|GHEADH=12|GID=7|Match=Yes|SpaceAfter=No
8	やすい	やすい	AUX	JX	Form=Adn	7	aux	_	GDPRL=auxvv|GHEAD=7|GHEADH=7|GID=8|GUPOS=ADJ|Match=Yes|SpaceAfter=No
9	、	、	PUNCT	,	_	7	punct	_	GHEAD=10|GHEADH=10|GID=9|Match=Yes|SpaceAfter=No
10	落ち着か	落ち着く	VERB	VV	Form=Irr	12	acl	_	GDPRL=parataxis|GHEAD=7|GHEADH=7|GID=10|Match=Yes|SpaceAfter=No
11	ない	ない	AUX	VXP	Form=Adn|Polarity=Neg	10	aux	_	GDPRL=advmod|GHEAD=10|GHEADH=10|GID=11|Match=Yes|SpaceAfter=No
12	オディ	オディ	PROPN	NNP	_	14	obj	_	GHEAD=14|GHEADH=14|GID=12|Match=Yes|SpaceAfter=No
13	を	を	ADP	CM	Case=Acc	12	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=12|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	見る	見る	VERB	VV	Form=Adn	17	acl	_	GDPRL=nomc|GHEAD=15|GHEADH=15|GID=14|Match=Yes|SpaceAfter=No
15	の	の	PART	PP	_	14	mark	_	GDPRL=nomcsubj|GHEAD=17|GHEADH=17|GID=15|Match=Yes|SpaceAfter=No
16	も	も	ADP	DP	_	14	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=15|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
17	最後	最後	NOUN	NN	_	20	obl	_	GDPRL=ccomp|GHEAD=20|GHEADH=20|GID=17|Match=Yes|SpaceAfter=No
18	だ	だ	AUX	VXP	VerbForm=Fin	17	cop	_	GDPRL=aux|GHEAD=17|GHEADH=17|GID=18|GUPOS=VERB|Match=Yes|SpaceAfter=No
19	と	と	ADP	CM	Case=Comp	17	case	_	GDPRL=compound:prt|GHEAD=17|GHEADH=17|GID=19|GUPOS=PART|Match=Yes|SpaceAfter=No
20	思っ	思う	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=20|Match=Yes|SpaceAfter=No
21	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	20	aux	_	GHEAD=20|GHEADH=20|GID=21|GUPOS=VERB|Match=Yes|SpaceAfter=No
22	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=22|GHEAD=20|GHEADH=20

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
1	誰	誰	PRON	WP	_	6	nsubj	_	GHEAD=6|GHEADH=6|GID=1|Match=Yes|SpaceAfter=No
2	も	も	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	が	が	ADP	CM	Case=Nom	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	それ	それ	PRON	PRD	Person=3	6	obj	_	GHEAD=6|GHEADH=6|GID=4|Match=Yes|SpaceAfter=No
5	を	を	ADP	CM	Case=Acc	4	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=4|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
6	上回る	上回る	VERB	VV	Form=Adn	9	acl	_	GDPRL=root|GHEAD=0|GID=6|Match=Yes|SpaceAfter=No
7	こと	こと	NOUN	_	_	6	aux	_	GDPRL=aux|GF/Form=Adn|GFORM=ことができる|GHEAD=6|GHEADH=6|GID=7|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
8	が	が	ADP	_	_	6	case	_	GDPRL=aux|GF/Form=Adn|GFORM=ことができる|GHEAD=6|GHEADH=6|GID=7|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
9	できる	できる	VERB	_	_	10	acl	_	GDPRL=aux|GF/Form=Adn|GFORM=ことができる|GHEAD=6|GHEADH=6|GID=7|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
10	わけ	わけ	NOUN	NNB	_	0	root	_	GDPRL=aux|GHEAD=6|GHEADH=6|GID=8|Match=Yes|SpaceAfter=No
11	で	だ	AUX	_	_	10	cop	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=6|GHEADH=6|GID=9|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
12	は	は	ADP	_	_	10	case	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=6|GHEADH=6|GID=9|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
13	ない	ない	AUX	_	_	10	aux	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=6|GHEADH=6|GID=9|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
14	。	。	PUNCT	.	_	10	punct	_	Match=Yes|GID=10|GHEAD=6|GHEADH=6

~~~


