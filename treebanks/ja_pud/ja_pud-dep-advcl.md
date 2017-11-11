---
layout: base
title:  'Statistics of advcl in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `advcl`

This relation is universal.

54 nodes (0%) are attached to their parents as `advcl`.

54 instances of `advcl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.9259259259259.

The following 7 pairs of parts of speech are connected with `advcl`: <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (29; 54% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (13; 24% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (4; 7% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 14 advcl	color:blue
1	この	この	DET	DT	_	3	det	_	GHEAD=3|GHEADH=3|GID=1|GUPOS=DET|Match=Yes|SpaceAfter=No
2	経済	経済	NOUN	NN	_	3	compound	_	GHEAD=3|GHEADH=3|GID=2|Match=Yes|SpaceAfter=No
3	データ	データ	NOUN	NN	_	6	nmod	_	GDPRL=compound|GHEAD=9|GHEADH=9|GID=3|Match=Yes|SpaceAfter=No
4	と	と	ADP	OP	_	3	case	_	GDPRL=cc|GHEAD=6|GHEADH=6|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	政治的	政治的	ADJ	NN	_	6	amod	_	GHEAD=6|GHEADH=6|GID=5|GUPOS=NOUN|Match=Yes|SpaceAfter=No
6	レトリック	レトリック	NOUN	NN	_	9	nmod	_	GDPRL=conj|GHEAD=3|GHEADH=3|GID=6|Match=Yes|SpaceAfter=No
7	と	と	ADP	OP	_	6	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	の	の	PART	CM	Case=Gen	6	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=8|Match=Yes|SpaceAfter=No
9	間	間	NOUN	NN	_	12	nmod	_	GDPRL=compound|GHEAD=11|GHEADH=11,12|GID=9|Match=Yes|SpaceAfter=No
10	の	の	ADP	CM	Case=Gen	9	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	不	不	NOUN	_	_	12	amod	_	GDPRL=obj|GFORM=不一致|GHEAD=13|GHEADH=14|GID=11|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
12	一致	一致	NOUN	_	_	14	obj	_	GDPRL=obj|GFORM=不一致|GHEAD=13|GHEADH=14|GID=11|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
13	を	を	ADP	CM	Case=Acc	12	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=11,12|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
14	熟知	熟知	VERB	NN	_	20	advcl	_	GDPRL=root|GHEAD=0|GID=13|GUPOS=NOUN|Match=Yes|SpaceAfter=No
15	し	する	AUX	VV	VerbForm=Ger	14	aux	_	GDPRL=compound:v|GHEAD=13|GHEADH=14|GID=14|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	て	て	SCONJ	CP	_	14	mark	_	GDPRL=compound:prt|GHEAD=13|GHEADH=14|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
17	いる	いる	AUX	VXH	VerbForm=Fin	14	aux	_	GDPRL=auxvv|GHEAD=13|GHEADH=14|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	、	、	PUNCT	,	_	14	punct	_	GHEAD=19|GHEADH=20|GID=17|Match=Yes|SpaceAfter=No
19	または	または	CCONJ	CC	_	20	advmod	_	GDPRL=cc|GHEAD=19|GHEADH=20|GID=18|Match=Yes|SpaceAfter=No
20	熟知	熟知	VERB	NN	_	0	root	_	GDPRL=conj|GHEAD=13|GHEADH=14|GID=19|GUPOS=NOUN|Match=Yes|SpaceAfter=No
21	す	する	AUX	VV	VerbForm=Fin	20	aux	_	GDPRL=compound:v|GHEAD=19|GHEADH=20|GID=20|GUPOS=VERB|Match=Yes|SpaceAfter=No
22	べき	べし	AUX	_	_	20	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=べきである|GHEAD=19|GHEADH=20|GID=21|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
23	である	だ	AUX	_	_	20	cop	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=べきである|GHEAD=19|GHEADH=20|GID=21|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
24	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=22|GHEAD=13|GHEADH=14

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 7 advcl	color:blue
1	私たち	私たち	PRON	PRP	Number=Plur|Person=1	7	iobj	_	GDPRL=advmod|GHEAD=7|GHEADH=7|GID=1|Match=Yes|SpaceAfter=No
2	に	に	ADP	CM	Case=Advb	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	大きな	大きな	ADJ	DT	_	5	amod	_	GDPRL=dtmod|GHEAD=5|GHEADH=5|GID=4|GUPOS=DET|Match=Yes|SpaceAfter=No
5	隊	隊	NOUN	SFN	_	7	nsubj	_	GHEAD=7|GHEADH=7|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
6	が	が	ADP	CM	Case=Nom	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	あり	ある	VERB	VV	VerbForm=Ger	14	advcl	_	GDPRL=advcl|GHEAD=14|GHEADH=14|GID=7|Match=Yes|SpaceAfter=No
8	、	、	PUNCT	,	_	7	punct	_	GHEAD=7|GHEADH=7|GID=8|Match=Yes|SpaceAfter=No
9	船	船	NOUN	NN	_	11	obj	_	GHEAD=11|GHEADH=11|GID=9|Match=Yes|SpaceAfter=No
10	を	を	ADP	CM	Case=Acc	9	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	前進	前進	VERB	NN	_	14	acl	_	GDPRL=acl:relcl|GHEAD=14|GHEADH=14|GID=11|GUPOS=NOUN|Match=Yes|SpaceAfter=No
12	さ	する	AUX	VV	Form=Irr	11	aux	_	GDPRL=compound:v|GHEAD=11|GHEADH=11|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	せる	せる	AUX	VXP	Form=Adn|Voice=Cau	11	aux	_	GHEAD=11|GHEADH=11|GID=13|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	機会	機会	NOUN	NN	_	0	root	_	GHEAD=0|GID=14|Match=Yes|SpaceAfter=No
15	である	だ	AUX	VXP	VerbForm=Fin	14	cop	_	GDPRL=aux|GHEAD=14|GHEADH=14|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
16	。	。	PUNCT	.	_	14	punct	_	Match=Yes|GID=16|GHEAD=14|GHEADH=14

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 8 advcl	color:blue
1	私	私	PRON	PRP	Person=1	4	nsubj	_	GDPRL=nsubj:pass|GHEAD=4|GHEADH=4|GID=1|Match=Yes|SpaceAfter=No
2	が	が	ADP	CM	Case=Nom	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	長時間	長時間	NOUN	NN	_	4	obl	_	GDPRL=obl:tmod|GHEAD=4|GHEADH=4|GID=3|Match=Yes|SpaceAfter=No
4	悩まさ	悩ます	VERB	VV	Form=Irr	8	acl	_	GDPRL=acl:relcl|GHEAD=6|GHEADH=6|GID=4|Match=Yes|SpaceAfter=No
5	れる	れる	AUX	VXP	Form=Adn|Voice=Pass	4	aux	_	GDPRL=aux:pass|GHEAD=4|GHEADH=4|GID=5|GUPOS=VERB|Match=Yes|SpaceAfter=No
6	こと	こと	NOUN	NNB	_	4	aux	_	GDPRL=nsubj|GHEAD=8|GHEADH=8|GID=6|Match=Yes|SpaceAfter=No
7	は	は	ADP	DP	_	4	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=6|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	ない	ない	ADJ	JJI	VerbForm=Fin	14	advcl	_	GDPRL=advcl|GHEAD=12|GHEADH=14|GID=8|Match=Yes|SpaceAfter=No
9	から	から	SCONJ	CP	_	8	mark	_	GDPRL=compound:prt|GHEAD=8|GHEADH=8|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
10	、	、	PUNCT	,	_	8	punct	_	GHEAD=8|GHEADH=8|GID=10|Match=Yes|SpaceAfter=No
11	もしか	もしか	ADV	_	_	12	advmod	_	GDPRL=advmod|GFORM=もしかすると|GHEAD=12|GHEADH=14|GID=11|GUPOS=ADV|GXPOS=RB|SpaceAfter=No
12	する	する	VERB	_	_	17	acl	_	GDPRL=advmod|GFORM=もしかすると|GHEAD=12|GHEADH=14|GID=11|GUPOS=ADV|GXPOS=RB|SpaceAfter=No
13	と	と	SCONJ	_	_	12	mark	_	GDPRL=advmod|GFORM=もしかすると|GHEAD=12|GHEADH=14|GID=11|GUPOS=ADV|GXPOS=RB|SpaceAfter=No
14	問題	問題	NOUN	NN	_	17	iobj	_	GDPRL=root|GHEAD=0|GID=12|Match=Yes|SpaceAfter=No
15	に	に	ADP	CM	Case=Comp	14	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=14|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
16	は	は	ADP	DP	_	14	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=14|GID=14|GUPOS=PART|Match=Yes|SpaceAfter=No
17	なら	なる	VERB	VV	Form=Irr	0	root	_	GDPRL=cop|GHEAD=12|GHEADH=14|GID=15|GUPOS=AUX|Match=Yes|SpaceAfter=No
18	ない	ない	AUX	VXP	Polarity=Neg|VerbForm=Fin	17	aux	_	GDPRL=advmod|GHEAD=12|GHEADH=14|GID=16|Match=Yes|SpaceAfter=No
19	かもしれ	かもしれる	AUX	_	_	17	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=12|GHEADH=14|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
20	ない	ない	AUX	_	_	17	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=12|GHEADH=14|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
21	。	。	PUNCT	.	_	17	punct	_	Match=Yes|GID=18|GHEAD=12|GHEADH=14

~~~


