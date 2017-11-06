---
layout: base
title:  'Statistics of amod in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `amod`

This relation is universal.

244 nodes (1%) are attached to their parents as `amod`.

244 instances of `amod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44262295081967.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (112; 46% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (52; 21% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (33; 14% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (14; 6% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (11; 5% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 amod	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 amod	color:blue
1	パリ協定	パリ協定	NOUN	_	_	3	obj	_	GDPRL=obj|GFORM=協定|GHEAD=4|GHEADH=3|GID=2|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
2	を	を	ADP	CM	Case=Acc	1	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=1|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
3	締結	締結	VERB	NN	_	8	acl	_	GDPRL=acl:relcl|GHEAD=7|GHEADH=6|GID=4|GUPOS=NOUN|Match=Yes|SpaceAfter=No
4	し	する	AUX	VV	VerbForm=Ger	3	aux	_	GDPRL=compound:v|GHEAD=4|GHEADH=3|GID=5|GUPOS=VERB|Match=Yes|SpaceAfter=No
5	た	た	AUX	VXP	Form=Adn|Tense=Past	3	aux	_	GHEAD=4|GHEADH=3|GID=6|GUPOS=VERB|Match=Yes|SpaceAfter=No
6	こと	こと	NOUN	NNB	_	3	aux	_	GDPRL=nsubj|GHEAD=9|GHEADH=8|GID=7|Match=Yes|SpaceAfter=No
7	は	は	ADP	DP	_	3	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=6|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
8	素晴らしい	素晴らしい	ADJ	JJI	VerbForm=Fin	24	acl	_	GDPRL=advcl|GHEAD=24|GHEADH=24|GID=9|Match=Yes|SpaceAfter=No
9	が	が	SCONJ	CP	_	8	mark	_	GDPRL=compound:prt|GHEAD=9|GHEADH=8|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
10	、	、	PUNCT	,	_	8	punct	_	GHEAD=9|GHEADH=8|GID=11|Match=Yes|SpaceAfter=No
11	現	現	NOUN	_	_	12	amod	_	GDPRL=advmod|GFORM=現時点|GHEAD=15|GHEADH=15|GID=12|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
12	時点	時点	NOUN	_	_	15	nmod	_	GDPRL=advmod|GFORM=現時点|GHEAD=15|GHEADH=15|GID=12|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
13	で	で	ADP	CM	Case=Advb	12	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=11,12|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	の	の	PART	CM	Case=Gen	12	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=11,12|GID=14|Match=Yes|SpaceAfter=No
15	貢献	貢献	NOUN	NN	_	24	nsubj	_	GDPRL=advmod|GHEAD=24|GHEADH=24|GID=15|Match=Yes|SpaceAfter=No
16	で	で	ADP	CM	Case=Advb	15	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=15|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
17	は	は	ADP	DP	_	15	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=15|GID=17|GUPOS=PART|Match=Yes|SpaceAfter=No
18	1.5	1.5	NUM	_	_	21	nummod	_	GDPRL=compound|GFORM=1.5℃|GHEAD=20|GHEADH=20,21|GID=18|GUPOS=NUM|GXPOS=CD|SpaceAfter=No
19	℃	°C	NOUN	_	_	18	mark	_	GDPRL=compound:prt|GF/Case=Gen|GFORM=の|GHEAD=18|GHEADH=18,19|GID=19|GUPOS=PART|GXPOS=CM|OrigForm=°C|SpaceAfter=No
20	の	の	ADP	_	_	18	case	_	GDPRL=advmod|GFORM=目標|GHEAD=24|GHEADH=24|GID=20|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
21	目標	目標	NOUN	_	_	24	iobj	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=に|GHEAD=20|GHEADH=20,21|GID=21|GUPOS=PART|GXPOS=CM|SpaceAfter=No
22	に	に	ADP	_	_	21	case	_	GDPRL=compound:prt|GFORM=は|GHEAD=20|GHEADH=20,21|GID=22|GUPOS=PART|GXPOS=DP|SpaceAfter=No
23	は	は	ADP	_	_	21	case	_	GDPRL=advmod|GFORM=ほど|GHEAD=24|GHEADH=24|GID=23|GUPOS=ADV|GXPOS=RB|SpaceAfter=No
24	ほど遠い	ほど遠い	ADJ	_	_	0	root	_	GDPRL=punct|GF/VerbForm=Fin|GFORM=。|GHEAD=24|GHEADH=24|GID=25|GUPOS=PUNCT|GXPOS=.|SpaceAfter=No
25	。	。	PUNCT	_	_	24	punct	_	GID=|GFORM=|GUPOS=|GXPOS=|GHEAD=|GDPRL=

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 amod	color:blue
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


