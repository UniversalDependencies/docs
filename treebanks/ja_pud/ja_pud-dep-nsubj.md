---
layout: base
title:  'Statistics of nsubj in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `nsubj`

This relation is universal.

1414 nodes (5%) are attached to their parents as `nsubj`.

1414 instances of `nsubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.77722772277228.

The following 17 pairs of parts of speech are connected with `nsubj`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (728; 51% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (246; 17% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (177; 13% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (89; 6% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (68; 5% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (27; 2% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (16; 1% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (14; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (13; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (10; 1% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 nsubj	color:blue
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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 nsubj	color:blue
1	何人	何人	NOUN	_	_	4	nmod	_	GDPRL=snum|GFORM=人|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
2	か	か	PART	AP	_	1	mark	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=3|Match=Yes|SpaceAfter=No
3	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
4	アナリスト	アナリスト	NOUN	NN	_	20	nsubj	_	GHEAD=21|GHEADH=20|GID=5|Match=Yes|SpaceAfter=No
5	が	が	ADP	CM	Case=Nom	4	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=4|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
6	、	、	PUNCT	,	_	4	punct	_	GHEAD=5|GHEADH=4|GID=7|Match=Yes|SpaceAfter=No
7	ファーウェイ	ファーウェイ	PROPN	NNP	_	14	nsubj	_	GHEAD=15|GHEADH=14|GID=8|Match=Yes|SpaceAfter=No
8	が	が	ADP	CM	Case=Nom	7	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
9	サムスン	サムスン	PROPN	NN	_	11	nmod	_	GDPRL=compound|GHEAD=12|GHEADH=11|GID=10|GUPOS=NOUN|Match=Yes|SpaceAfter=No
10	の	の	ADP	CM	Case=Gen	9	case	_	GDPRL=compound:prt|GHEAD=10|GHEADH=9|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
11	挫折	挫折	NOUN	NN	_	14	obl	_	GDPRL=advmod|GHEAD=15|GHEADH=14|GID=12|Match=Yes|SpaceAfter=No
12	から	から	ADP	CM	Case=Advb	11	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=11|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
13	最も	最も	ADV	RB	_	14	advmod	_	GHEAD=15|GHEADH=14|GID=14|Match=Yes|SpaceAfter=No
14	享受	享受	VERB	NN	_	16	acl	_	GDPRL=acl:relcl|GHEAD=17|GHEADH=16|GID=15|GUPOS=NOUN|Match=Yes|SpaceAfter=No
15	する	する	AUX	VV	Form=Adn	14	aux	_	GDPRL=compound:v|GHEAD=15|GHEADH=14|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	位置	位置	NOUN	NN	_	18	iobj	_	GDPRL=advmod|GHEAD=19|GHEADH=18|GID=17|Match=Yes|SpaceAfter=No
17	に	に	ADP	CM	Case=Advb	16	case	_	GDPRL=compound:prt|GHEAD=17|GHEADH=16|GID=18|GUPOS=PART|Match=Yes|SpaceAfter=No
18	いる	いる	VERB	VV	VerbForm=Fin	20	acl	_	GDPRL=ccomp|GHEAD=21|GHEADH=20|GID=19|Match=Yes|SpaceAfter=No
19	と	と	SCONJ	CM	Case=Comp	18	mark	_	GDPRL=compound:prt|GHEAD=19|GHEADH=18|GID=20|GUPOS=PART|Match=Yes|SpaceAfter=No
20	予測	予測	VERB	NN	_	0	root	_	GHEAD=0|GID=21|GUPOS=NOUN|Match=Yes|SpaceAfter=No
21	し	する	AUX	VV	VerbForm=Ger	20	aux	_	GDPRL=compound:v|GHEAD=21|GHEADH=20|GID=22|GUPOS=VERB|Match=Yes|SpaceAfter=No
22	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	20	aux	_	GHEAD=21|GHEADH=20|GID=23|GUPOS=VERB|Match=Yes|SpaceAfter=No
23	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=24|GHEAD=21|GHEADH=20

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
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


