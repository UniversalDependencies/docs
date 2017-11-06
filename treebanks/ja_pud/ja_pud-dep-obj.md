---
layout: base
title:  'Statistics of obj in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `obj`

This relation is universal.

782 nodes (3%) are attached to their parents as `obj`.

782 instances of `obj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.54987212276215.

The following 5 pairs of parts of speech are connected with `obj`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (698; 89% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (55; 7% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (22; 3% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 obj	color:blue
1	しかし	しかし	CCONJ	CC	_	20	advmod	_	GDPRL=mark|GHEAD=20|GHEADH=20|GID=1|Match=Yes|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=2|Match=Yes|SpaceAfter=No
3	私	私	PRON	PRP	Person=1	11	nsubj	_	GHEAD=14|GHEADH=14|GID=3|Match=Yes|SpaceAfter=No
4	が	が	ADP	CM	Case=Nom	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	彼女	彼女	PRON	PRP	Person=3	11	iobj	_	GDPRL=advmod|GHEAD=14|GHEADH=14|GID=5|Match=Yes|SpaceAfter=No
6	に	に	ADP	CM	Case=Advb	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	フランク	フランク	PROPN	NNP	_	11	obj	_	GHEAD=9|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
8	を	を	ADP	CM	Case=Acc	7	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
9	モデル	モデル	NOUN	NN	_	11	iobj	_	GDPRL=acl:relcl|GHEAD=12|GHEADH=12|GID=9|Match=Yes|SpaceAfter=No
10	に	に	ADP	CM	Case=Comp	9	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	する	する	VERB	VV	Form=Adn	14	acl	_	GDPRL=cop|GHEAD=9|GHEADH=9|GID=11|GUPOS=AUX|Match=Yes|SpaceAfter=No
12	こと	こと	NOUN	NNB	_	11	aux	_	GDPRL=obj|GHEAD=14|GHEADH=14|GID=12|Match=Yes|SpaceAfter=No
13	を	を	ADP	CM	Case=Acc	11	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=12|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	提案	提案	VERB	NN	_	20	acl	_	GDPRL=advcl|GHEAD=20|GHEADH=20|GID=14|GUPOS=NOUN|Match=Yes|SpaceAfter=No
15	する	する	AUX	VV	VerbForm=Fin	14	aux	_	GDPRL=compound:v|GHEAD=14|GHEADH=14|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	と	と	SCONJ	CP	_	14	mark	_	GDPRL=compound:prt|GHEAD=14|GHEADH=14|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
17	、	、	PUNCT	,	_	14	punct	_	GHEAD=14|GHEADH=14|GID=17|Match=Yes|SpaceAfter=No
18	彼女	彼女	PRON	PRP	Person=3	20	nsubj	_	GHEAD=20|GHEADH=20|GID=18|Match=Yes|SpaceAfter=No
19	は	は	ADP	DP	_	18	case	_	GDPRL=compound:prt|GHEAD=18|GHEADH=18|GID=19|GUPOS=PART|Match=Yes|SpaceAfter=No
20	笑う	笑う	VERB	VV	VerbForm=Fin	0	root	_	GHEAD=0|GID=20|Match=Yes|SpaceAfter=No
21	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=21|GHEAD=20|GHEADH=20

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


