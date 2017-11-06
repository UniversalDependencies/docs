---
layout: base
title:  'Statistics of advmod in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `advmod`

This relation is universal.

375 nodes (1%) are attached to their parents as `advmod`.

375 instances of `advmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.504.

The following 12 pairs of parts of speech are connected with `advmod`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-ADV.html">ADV</a></tt> (159; 42% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (75; 20% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-ADV.html">ADV</a></tt> (45; 12% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-ADV.html">ADV</a></tt> (37; 10% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (37; 10% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (10; 3% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 1% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod	color:blue
1	私	私	PRON	PRP	Person=1	6	nsubj	_	GHEAD=8|GHEADH=6|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	いずれにせよ	いずれにせよ	ADV	_	_	6	advmod	_	GDPRL=advcl|GF/Case=Advb|GF/Form=Ord|GFORM=せよ|GHEAD=8|GHEADH=6|GID=5|GUPOS=VERB|GXPOS=VV|SpaceAfter=No
4	刑務所	刑務所	NOUN	NN	_	6	iobj	_	GDPRL=advmod|GHEAD=8|GHEADH=6|GID=6|Match=Yes|SpaceAfter=No
5	に	に	ADP	CM	Case=Advb	4	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=4|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
6	行く	行く	VERB	VV	VerbForm=Fin	12	acl	_	GDPRL=advcl|GHEAD=16|GHEADH=14|GID=8|Match=Yes|SpaceAfter=No
7	が	が	SCONJ	CP	_	6	mark	_	GDPRL=compound:prt|GHEAD=8|GHEADH=6|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
8	、	、	PUNCT	,	_	6	punct	_	GHEAD=8|GHEADH=6|GID=10|Match=Yes|SpaceAfter=No
9	その	その	ADJ	DT	_	10	det	_	GHEAD=12|GHEADH=10|GID=11|GUPOS=DET|Match=Yes|SpaceAfter=No
10	価値	価値	NOUN	NN	_	12	nsubj	_	GHEAD=14|GHEADH=12|GID=12|Match=Yes|SpaceAfter=No
11	が	が	ADP	CM	Case=Nom	10	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=10|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
12	あり	ある	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=acl:relcl|GHEAD=16|GHEADH=14|GID=14|Match=Yes|SpaceAfter=No
13	ます	ます	AUX	VXP	Form=Adn	12	aux	_	GHEAD=14|GHEADH=12|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	ように	ようだ	AUX	_	_	12	aux	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=に|GHEAD=16|GHEADH=14|GID=17|GUPOS=PART|GXPOS=CM|SpaceAfter=No
15	。	。	PUNCT	.	_	12	punct	_	Match=Yes|GID=18|GHEAD=16|GHEADH=14

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 1 advmod	color:blue
1	しかし	しかし	CCONJ	CC	_	18	advmod	_	GDPRL=mark|GHEAD=18|GHEADH=18|GID=1|Match=Yes|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=2|Match=Yes|SpaceAfter=No
3	任意	任意	NOUN	NN	_	5	obl	_	GDPRL=compound|GHEAD=6|GHEADH=6|GID=3|Match=Yes|SpaceAfter=No
4	の	の	ADP	CM	Case=Gen	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	新しい	新しい	ADJ	JJI	Form=Adn	6	acl	_	GDPRL=amod|GHEAD=6|GHEADH=6|GID=5|Match=Yes|SpaceAfter=No
6	法律	法律	NOUN	NN	_	8	iobj	_	GDPRL=advmod|GHEAD=8|GHEADH=8|GID=6|Match=Yes|SpaceAfter=No
7	に	に	ADP	CM	Case=Advb	6	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	反対	反対	VERB	NN	_	15	acl	_	GDPRL=acl:relcl|GHEAD=15|GHEADH=15|GID=8|GUPOS=NOUN|Match=Yes|SpaceAfter=No
9	する	する	AUX	VV	Form=Adn	8	aux	_	GDPRL=compound:v|GHEAD=8|GHEADH=8|GID=9|GUPOS=VERB|Match=Yes|SpaceAfter=No
10	深い	深い	ADJ	JJI	Form=Adn	12	acl	_	GDPRL=amod|GHEAD=12|GHEADH=12|GID=10|Match=Yes|SpaceAfter=No
11	宗教的	宗教的	ADJ	NN	_	12	amod	_	GHEAD=12|GHEADH=12|GID=11|GUPOS=NOUN|Match=Yes|SpaceAfter=No
12	信念	信念	NOUN	NN	_	14	obj	_	GHEAD=14|GHEADH=14|GID=12|Match=Yes|SpaceAfter=No
13	を	を	ADP	CM	Case=Acc	12	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=12|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
14	持つ	持つ	VERB	VV	Form=Adn	15	acl	_	GDPRL=acl:relcl|GHEAD=15|GHEADH=15|GID=14|Match=Yes|SpaceAfter=No
15	MLA	MLA	PROPN	NNP	_	18	nsubj	_	GHEAD=18|GHEADH=18|GID=15|Match=Yes|SpaceAfter=No
16	が	が	ADP	CM	Case=Nom	15	case	_	GDPRL=compound:prt|GHEAD=15|GHEADH=15|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
17	数多く	数多い	ADJ	JJI	VerbForm=Ger	18	acl	_	GDPRL=advmod|GHEAD=18|GHEADH=18|GID=17|Match=Yes|SpaceAfter=No
18	いる	いる	VERB	VV	VerbForm=Fin	0	root	_	GHEAD=0|GID=18|Match=Yes|SpaceAfter=No
19	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=19|GHEAD=18|GHEADH=18

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 advmod	color:blue
1	有名人	有名人	NOUN	JJN	_	3	nmod	_	GDPRL=compound|GHEAD=3|GHEADH=3|GID=1|GUPOS=ADJ|Match=Yes|SpaceAfter=No
2	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	名前	名前	NOUN	NN	_	9	nsubj	_	GHEAD=9|GHEADH=9|GID=3|Match=Yes|SpaceAfter=No
4	が	が	ADP	CM	Case=Nom	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	当初	当初	NOUN	RB	_	9	nsubj	_	GDPRL=advmod|GHEAD=9|GHEADH=9|GID=5|GUPOS=ADV|Match=Yes|SpaceAfter=No
6	は	は	ADP	DP	_	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	非常	非常	ADJ	JJN	_	9	acl	_	GDPRL=advmod|GHEAD=9|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
8	に	だ	AUX	VXP	VerbForm=Ger	7	aux	_	GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	まれ	まれ	ADJ	JJN	_	12	acl	_	GDPRL=acl:relcl|GHEAD=11|GHEADH=12|GID=9|Match=Yes|SpaceAfter=No
10	で	だ	AUX	_	_	9	aux	_	GDPRL=aux|GF/Form=Adn|GFORM=である|GHEAD=9|GHEADH=9|GID=10|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
11	ある	ある	AUX	_	_	9	fixed	_	GDPRL=aux|GF/Form=Adn|GFORM=である|GHEAD=9|GHEADH=9|GID=10|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
12	場合	場合	NOUN	NN	_	18	obl	_	GDPRL=advmod|GHEAD=17|GHEADH=18|GID=11|Match=Yes|SpaceAfter=No
13	、	、	PUNCT	,	_	12	punct	_	GHEAD=11|GHEADH=12|GID=12|Match=Yes|SpaceAfter=No
14	この	この	ADJ	DT	_	15	det	_	GHEAD=14|GHEADH=15|GID=13|GUPOS=DET|Match=Yes|SpaceAfter=No
15	こと	こと	NOUN	NNB	_	18	nsubj	_	GHEAD=17|GHEADH=18|GID=14|Match=Yes|SpaceAfter=No
16	は	は	ADP	DP	_	15	case	_	GDPRL=compound:prt|GHEAD=14|GHEADH=15|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
17	最も	最も	ADV	RB	_	18	advmod	_	GHEAD=17|GHEADH=18|GID=16|Match=Yes|SpaceAfter=No
18	明白	明白	ADJ	JJN	_	0	root	_	GHEAD=0|GID=17|Match=Yes|SpaceAfter=No
19	で	だ	AUX	_	_	18	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=である|GHEAD=17|GHEADH=18|GID=18|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
20	ある	ある	AUX	_	_	18	fixed	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=である|GHEAD=17|GHEADH=18|GID=18|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
21	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=19|GHEAD=17|GHEADH=18

~~~


