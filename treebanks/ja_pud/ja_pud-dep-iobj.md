---
layout: base
title:  'Statistics of iobj in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `iobj`

This relation is universal.

629 nodes (2%) are attached to their parents as `iobj`.

629 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.89984101748808.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (510; 81% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (66; 10% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (27; 4% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (20; 3% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 iobj	color:blue
1	彼女	彼女	PRON	PRP	Person=3	3	nsubj	_	GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	言っ	言う	VERB	VV	VerbForm=Ger	9	acl	_	GDPRL=acl:relcl|GHEAD=6|GHEADH=6|GID=3|Match=Yes|SpaceAfter=No
4	て	て	SCONJ	CP	_	3	mark	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	いる	いる	AUX	VXH	Form=Adn	3	aux	_	GDPRL=auxvv|GHEAD=3|GHEADH=3|GID=5|GUPOS=VERB|Match=Yes|SpaceAfter=No
6	こと	こと	NOUN	NNB	_	3	aux	_	GDPRL=nsubj|GHEAD=21|GHEADH=21|GID=6|Match=Yes|SpaceAfter=No
7	と	と	ADP	OP	_	3	case	_	GDPRL=cc|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	、	、	PUNCT	,	_	3	punct	_	GHEAD=12|GHEADH=12|GID=8|Match=Yes|SpaceAfter=No
9	やっ	やる	VERB	VV	VerbForm=Ger	18	acl	_	GDPRL=acl:relcl|GHEAD=12|GHEADH=12|GID=9|Match=Yes|SpaceAfter=No
10	て	て	SCONJ	CP	_	9	mark	_	GDPRL=compound:prt|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	いる	いる	AUX	VXH	Form=Adn	9	aux	_	GDPRL=auxvv|GHEAD=9|GHEADH=9|GID=11|GUPOS=VERB|Match=Yes|SpaceAfter=No
12	こと	こと	NOUN	NNB	_	9	aux	_	GDPRL=conj|GHEAD=6|GHEADH=6|GID=12|Match=Yes|SpaceAfter=No
13	は	は	ADP	DP	_	9	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	、	、	PUNCT	,	_	9	punct	_	GHEAD=6|GHEADH=6|GID=14|Match=Yes|SpaceAfter=No
15	実際	実際	NOUN	RB	_	18	iobj	_	GDPRL=advmod|GHEAD=18|GHEADH=18|GID=15|GUPOS=ADV|Match=Yes|SpaceAfter=No
16	に	に	ADP	CM	Case=Advb	15	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=15|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
17	、	、	PUNCT	,	_	15	punct	_	GHEAD=15|GHEADH=15|GID=17|Match=Yes|SpaceAfter=No
18	信じ	信じる	VERB	VV	Form=Irr	0	root	_	GDPRL=acl:relcl|GHEAD=21|GHEADH=21|GID=18|Match=Yes|SpaceAfter=No
19	られ	られる	AUX	VXP	Form=Irr|Voice=Pass	18	aux	_	GDPRL=aux:pass|GHEAD=18|GHEADH=18|GID=19|GUPOS=VERB|Match=Yes|SpaceAfter=No
20	ない	ない	AUX	VXP	Form=Adn|Polarity=Neg	18	aux	_	GDPRL=advmod|GHEAD=18|GHEADH=18|GID=20|Match=Yes|SpaceAfter=No
21	こと	こと	NOUN	NNB	_	18	aux	_	GDPRL=root|GHEAD=0|GID=21|Match=Yes|SpaceAfter=No
22	だ	だ	AUX	VXP	VerbForm=Fin	18	cop	_	GDPRL=aux|GHEAD=21|GHEADH=21|GID=22|GUPOS=VERB|Match=Yes|SpaceAfter=No
23	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=23|GHEAD=21|GHEADH=21

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 iobj	color:blue
1	電子メール	電子メール	NOUN	_	_	5	obl	_	GDPRL=advmod|GFORM=メール|GHEAD=6|GHEADH=5|GID=2|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
2	で	で	ADP	CM	Case=Advb	1	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=1|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
3	ウッズ	ウッズ	PROPN	NNP	_	5	iobj	_	GDPRL=advmod|GHEAD=6|GHEADH=5|GID=4|Match=Yes|SpaceAfter=No
4	に	に	ADP	CM	Case=Advb	3	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=3|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
5	応え	応える	VERB	VV	VerbForm=Ger	15	acl	_	GDPRL=advcl|GHEAD=13|GHEADH=12|GID=6|Match=Yes|SpaceAfter=No
6	て	て	SCONJ	CP	_	5	mark	_	GDPRL=compound:prt|GHEAD=6|GHEADH=5|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
7	、	、	PUNCT	,	_	5	punct	_	GHEAD=6|GHEADH=5|GID=8|Match=Yes|SpaceAfter=No
8	私	私	PRON	PRP	Person=1	15	nsubj	_	GHEAD=13|GHEADH=12|GID=9|Match=Yes|SpaceAfter=No
9	は	は	ADP	DP	_	8	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=8|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
10	語源	語源	NOUN	NN	_	12	obj	_	GHEAD=13|GHEADH=12|GID=11|Match=Yes|SpaceAfter=No
11	を	を	ADP	CM	Case=Acc	10	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=10|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
12	あばこ	あばく	VERB	VV	Form=Irr	15	acl	_	GDPRL=root|GHEAD=0|GID=13|Match=Yes|SpaceAfter=No
13	う	う	AUX	VXP	VerbForm=Fin	12	aux	_	GHEAD=13|GHEADH=12|GID=14|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	と	と	SCONJ	CM	Case=Comp	12	mark	_	GDPRL=fixed|GHEAD=14|GHEADH=13|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
15	し	する	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=fixed|GHEAD=14|GHEADH=13|GID=16|Match=Yes|SpaceAfter=No
16	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	15	aux	_	GHEAD=13|GHEADH=12|GID=17|GUPOS=VERB|Match=Yes|SpaceAfter=No
17	。	。	PUNCT	.	_	15	punct	_	Match=Yes|GID=18|GHEAD=13|GHEADH=12

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 iobj	color:blue
1	ゲーム	ゲーム	NOUN	NN	_	5	nmod	_	GDPRL=compound|GHEAD=8|GHEADH=7|GID=1|Match=Yes|SpaceAfter=No
2	と	と	ADP	OP	_	1	case	_	GDPRL=cc|GHEAD=6|GHEADH=5|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	私達	私達	PRON	PRP	Number=Plur|Person=1	5	nmod	_	GDPRL=compound|GHEAD=6|GHEADH=5|GID=3|Match=Yes|SpaceAfter=No
4	の	の	ADP	CM	Case=Gen	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	日常生活	日常生活	NOUN	_	_	7	nmod	_	GDPRL=conj|GFORM=生活|GHEAD=1|GHEADH=1|GID=6|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
6	の	の	ADP	CM	Case=Gen	5	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
7	間	間	NOUN	NN	_	18	iobj	_	GDPRL=advmod|GHEAD=18|GHEADH=18|GID=8|Match=Yes|SpaceAfter=No
8	に	に	ADP	CM	Case=Advb	7	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
9	は	は	ADP	DP	_	7	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=7|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
10	、	、	PUNCT	,	_	7	punct	_	GHEAD=8|GHEADH=7|GID=11|Match=Yes|SpaceAfter=No
11	ここ	ここ	PRON	PRD	Person=3	13	iobj	_	GDPRL=advmod|GHEAD=14|GHEADH=13|GID=12|Match=Yes|SpaceAfter=No
12	に	に	ADP	CM	Case=Advb	11	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=11|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
13	かく	かく	VERB	VV	VerbForm=Fin	16	acl	_	GDPRL=acl:relcl|GHEAD=16|GHEADH=15,16|GID=14|Match=Yes|SpaceAfter=No
14	べき	べし	AUX	VXP	Form=Adn	13	aux	_	GHEAD=14|GHEADH=13|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
15	類似	類似	NOUN	_	_	16	compound	_	GDPRL=nsubj|GFORM=類似点|GHEAD=18|GHEADH=18|GID=16|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
16	点	点	NOUN	_	_	18	nsubj	_	GDPRL=nsubj|GFORM=類似点|GHEAD=18|GHEADH=18|GID=16|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
17	が	が	ADP	CM	Case=Nom	16	case	_	GDPRL=compound:prt|GHEAD=16|GHEADH=15,16|GID=17|GUPOS=PART|Match=Yes|SpaceAfter=No
18	ある	ある	VERB	VV	VerbForm=Fin	0	root	_	GHEAD=0|GID=18|Match=Yes|SpaceAfter=No
19	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=19|GHEAD=18|GHEADH=18

~~~


