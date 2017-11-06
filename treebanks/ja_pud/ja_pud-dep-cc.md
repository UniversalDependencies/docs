---
layout: base
title:  'Statistics of cc in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `cc`

This relation is universal.

75 nodes (0%) are attached to their parents as `cc`.

75 instances of `cc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01333333333333.

The following 3 pairs of parts of speech are connected with `cc`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-ADP.html">ADP</a></tt> (63; 84% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-ADP.html">ADP</a></tt> (11; 15% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 cc	color:blue
1	この	この	ADJ	DT	_	2	det	_	GHEAD=2|GHEADH=2|GID=1|GUPOS=DET|Match=Yes|SpaceAfter=No
2	取組	取組	NOUN	NN	_	10	nsubj	_	GHEAD=10|GHEADH=10|GID=2|Match=Yes|SpaceAfter=No
3	は	は	ADP	DP	_	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	スポンサー	スポンサー	NOUN	NN	_	6	nmod	_	GDPRL=advmod|GHEAD=8|GHEADH=8|GID=4|Match=Yes|SpaceAfter=No
5	や	や	ADP	OP	_	4	cc	_	GHEAD=6|GHEADH=6|GID=5|GUPOS=PART|Match=Yes|SpaceAfter=No
6	広告	広告	NOUN	NN	_	8	nmod	_	GDPRL=conj|GHEAD=4|GHEADH=4|GID=6|Match=Yes|SpaceAfter=No
7	による	による	ADP	CM	Case=Advb	6	case	_	GDPRL=compound:prt|GHEAD=4|GHEADH=4|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
8	収入	収入	NOUN	NN	_	10	obj	_	GHEAD=10|GHEADH=10|GID=8|Match=Yes|SpaceAfter=No
9	を	を	ADP	CM	Case=Acc	8	case	_	GDPRL=compound:prt|GHEAD=8|GHEADH=8|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
10	得	得る	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=10|Match=Yes|SpaceAfter=No
11	て	て	SCONJ	CP	_	10	mark	_	GDPRL=compound:prt|GHEAD=10|GHEADH=10|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
12	いる	いる	AUX	VXH	VerbForm=Fin	10	aux	_	GDPRL=auxvv|GHEAD=10|GHEADH=10|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	。	。	PUNCT	.	_	10	punct	_	Match=Yes|GID=13|GHEAD=10|GHEADH=10

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	グラニット	グラニット	PROPN	_	_	2	compound	_	GDPRL=advmod|GFORM=グラニット島|GHEAD=16|GHEADH=18|GID=1|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
2	島	島	NOUN	_	_	18	iobj	_	GDPRL=advmod|GFORM=グラニット島|GHEAD=16|GHEADH=18|GID=1|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
3	に	に	ADP	CM	Case=Advb	2	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1,2|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
4	は	は	ADP	DP	_	2	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1,2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
5	セーシェル諸島	セーシェル諸島	PROPN	_	_	8	nmod	_	GDPRL=nsubj:pass|GFORM=諸島|GHEAD=16|GHEADH=18|GID=5|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
6	や	や	ADP	OP	_	5	cc	_	GHEAD=7|GHEADH=7,8|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	ティオマン	ティオマン	PROPN	_	_	8	compound	_	GDPRL=conj|GFORM=ティオマン島|GHEAD=5|GHEADH=5|GID=7|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
8	島	島	NOUN	_	_	18	obl	_	GDPRL=conj|GFORM=ティオマン島|GHEAD=5|GHEADH=5|GID=7|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
9	、	、	PUNCT	,	_	8	punct	_	GHEAD=14|GHEADH=15,16|GID=8|Match=Yes|SpaceAfter=No
10	さらに	さらに	ADV	_	_	18	advmod	_	GDPRL=cc|GFORM=さらには|GHEAD=14|GHEADH=15,16|GID=9|GUPOS=CCONJ|GXPOS=CC|SpaceAfter=No
11	は	は	ADP	_	_	10	case	_	GDPRL=cc|GFORM=さらには|GHEAD=14|GHEADH=15,16|GID=9|GUPOS=CCONJ|GXPOS=CC|SpaceAfter=No
12	セントヘレナ	セントヘレナ	PROPN	NNP	_	16	nmod	_	GDPRL=compound|GHEAD=12|GHEADH=14|GID=10|Match=Yes|SpaceAfter=No
13	の	の	ADP	CM	Case=Gen	12	case	_	GDPRL=compound:prt|GHEAD=10|GHEADH=12|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
14	ような	ようだ	AUX	_	_	12	aux	_	GDPRL=aux|GF/Form=Adn|GFORM=な|GHEAD=12|GHEADH=14|GID=13|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
15	火山	火山	NOUN	_	_	16	compound	_	GDPRL=conj|GFORM=火山島|GHEAD=5|GHEADH=5|GID=14|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
16	島	島	NOUN	_	_	18	nsubj	_	GDPRL=conj|GFORM=火山島|GHEAD=5|GHEADH=5|GID=14|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
17	が	が	ADP	CM	Case=Nom	16	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
18	含まれ	含まれる	VERB	_	_	0	root	_	GDPRL=aux:pass|GF/Form=Irr|GF/VerbForm=Ger|GF/Voice=Pass|GFORM=れ|GHEAD=16|GHEADH=18|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
19	ます	ます	AUX	VXP	VerbForm=Fin	18	aux	_	GHEAD=16|GHEADH=18|GID=18|GUPOS=VERB|Match=Yes|SpaceAfter=No
20	。	。	PUNCT	.	_	18	punct	_	Match=Yes|GID=19|GHEAD=16|GHEADH=18

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 cc	color:blue
1	娘	娘	NOUN	NN	_	3	nmod	_	GDPRL=compound|GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	セシリー	セシリー	PROPN	NNP	_	16	nsubj	_	GHEAD=14|GHEADH=16|GID=3|Match=Yes|SpaceAfter=No
4	が	が	ADP	CM	Case=Nom	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	リチャード	リチャード	PROPN	NNP	_	13	nmod	_	GDPRL=advmod|GHEAD=14|GHEADH=16|GID=5|Match=Yes|SpaceAfter=No
6	・	・	SYM	/	_	5	compound	_	GDPRL=punct|GHEAD=7|GHEADH=7|GID=6|GUPOS=PUNCT|Match=Yes|SpaceAfter=No
7	プランタジネット	プランタジネット	PROPN	NNP	_	13	compound	_	GDPRL=flat:name|GHEAD=5|GHEADH=5|GID=7|Match=Yes|SpaceAfter=No
8	（	(	PUNCT	_	_	7	punct	_	GDPRL=punct|GFORM=（|GHEAD=11|GHEADH=12,13|GID=8|GUPOS=PUNCT|GXPOS=(|OrigForm=(|SpaceAfter=No
9	第	第	PART	_	_	13	amod	_	GDPRL=nummod|GFORM=第3|GHEAD=11|GHEADH=12,13|GID=9|GUPOS=NUM|GXPOS=CD|SpaceAfter=No
10	3	3	NUM	_	_	13	nummod	_	GDPRL=nummod|GFORM=第3|GHEAD=11|GHEADH=12,13|GID=9|GUPOS=NUM|GXPOS=CD|SpaceAfter=No
11	代	代	NOUN	SFN	_	13	compound	_	GDPRL=snum|GHEAD=9|GHEADH=9,10|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
12	ヨーク	ヨーク	NOUN	_	_	13	compound	_	GDPRL=appos|GFORM=ヨーク公|GHEAD=5|GHEADH=5|GID=11|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
13	公	公	NOUN	_	_	16	obl	_	GDPRL=appos|GFORM=ヨーク公|GHEAD=5|GHEADH=5|GID=11|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
14	）	)	PUNCT	_	_	15	punct	_	GDPRL=punct|GFORM=）|GHEAD=13|GHEADH=15|GID=12|GUPOS=PUNCT|GXPOS=)|OrigForm=)|SpaceAfter=No
15	と	と	ADP	CM	Case=Advb	13	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
16	結婚	結婚	VERB	NN	_	33	acl	_	GDPRL=advcl|GHEAD=30|GHEADH=33|GID=14|GUPOS=NOUN|Match=Yes|SpaceAfter=No
17	し	する	AUX	VV	VerbForm=Ger	16	aux	_	GDPRL=compound:v|GHEAD=14|GHEADH=16|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	、	、	PUNCT	,	_	16	punct	_	GHEAD=14|GHEADH=16|GID=16|Match=Yes|SpaceAfter=No
19	エドワード	エドワード	PROPN	NNP	_	20	compound	_	GHEAD=18|GHEADH=20|GID=17|Match=Yes|SpaceAfter=No
20	4	4	NUM	CD	_	24	nummod	_	GDPRL=obj|GHEAD=25|GHEADH=27|GID=18|Match=Yes|SpaceAfter=No
21	世	世	NOUN	SFN	_	20	mark	_	GDPRL=snum|GHEAD=18|GHEADH=20|GID=19|GUPOS=PART|Match=Yes|SpaceAfter=No
22	や	や	ADP	OP	_	20	cc	_	GHEAD=22|GHEADH=24|GID=20|GUPOS=PART|Match=Yes|SpaceAfter=No
23	リチャード	リチャード	PROPN	NNP	_	24	compound	_	GHEAD=22|GHEADH=24|GID=21|Match=Yes|SpaceAfter=No
24	3	3	NUM	CD	_	27	nummod	_	GDPRL=conj|GHEAD=18|GHEADH=20|GID=22|Match=Yes|SpaceAfter=No
25	世	世	NOUN	SFN	_	24	mark	_	GDPRL=snum|GHEAD=22|GHEADH=24|GID=23|GUPOS=PART|Match=Yes|SpaceAfter=No
26	を	を	ADP	CM	Case=Acc	24	case	_	GDPRL=compound:prt|GHEAD=18|GHEADH=20|GID=24|GUPOS=PART|Match=Yes|SpaceAfter=No
27	含む	含む	VERB	VV	Form=Adn	31	acl	_	GDPRL=acl:relcl|GHEAD=28|GHEADH=31|GID=25|Match=Yes|SpaceAfter=No
28	数	数	NUM	_	_	31	nummod	_	GDPRL=nummod|GFORM=数人|GHEAD=28|GHEADH=31|GID=26|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
29	人	人	NOUN	_	_	28	mark	_	GDPRL=nummod|GFORM=数人|GHEAD=28|GHEADH=31|GID=26|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
30	の	の	ADP	CM	Case=Gen	28	case	_	GDPRL=compound:prt|GHEAD=26|GHEADH=28,29|GID=27|GUPOS=PART|Match=Yes|SpaceAfter=No
31	子孫	子孫	NOUN	NN	_	33	nsubj	_	GHEAD=30|GHEADH=33|GID=28|Match=Yes|SpaceAfter=No
32	が	が	ADP	CM	Case=Nom	31	case	_	GDPRL=compound:prt|GHEAD=28|GHEADH=31|GID=29|GUPOS=PART|Match=Yes|SpaceAfter=No
33	生まれ	生まれる	VERB	VV	VerbForm=Ger	49	acl	_	GDPRL=advcl|GHEAD=43|GHEADH=47|GID=30|Match=Yes|SpaceAfter=No
34	、	、	PUNCT	,	_	33	punct	_	GHEAD=30|GHEADH=33|GID=31|Match=Yes|SpaceAfter=No
35	ジョーン	ジョーン	PROPN	NNP	_	49	nsubj	_	GHEAD=43|GHEADH=47|GID=32|Match=Yes|SpaceAfter=No
36	は	は	ADP	DP	_	35	case	_	GDPRL=compound:prt|GHEAD=32|GHEADH=35|GID=33|GUPOS=PART|Match=Yes|SpaceAfter=No
37	イングランド	イングランド	PROPN	NNP	_	40	compound	_	GHEAD=35|GHEADH=38|GID=34|Match=Yes|SpaceAfter=No
38	王国	王国	NOUN	NN	_	40	compound	_	GHEAD=36|GHEADH=39,40|GID=35|Match=Yes|SpaceAfter=No
39	ヨーク	ヨーク	PROPN	_	_	40	compound	_	GDPRL=compound|GFORM=ヨーク朝|GHEAD=41|GHEADH=45|GID=36|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
40	朝	朝	PROPN	_	_	42	nmod	_	GDPRL=compound|GFORM=ヨーク朝|GHEAD=41|GHEADH=45|GID=36|GUPOS=PROPN|GXPOS=NNP|SpaceAfter=No
41	の	の	ADP	CM	Case=Gen	40	case	_	GDPRL=compound:prt|GHEAD=36|GHEADH=39,40|GID=37|GUPOS=PART|Match=Yes|SpaceAfter=No
42	2	2	NUM	CD	_	45	nummod	_	GHEAD=41|GHEADH=45|GID=38|Match=Yes|SpaceAfter=No
43	人	人	NOUN	SFN	_	42	mark	_	GDPRL=snum|GHEAD=38|GHEADH=42|GID=39|GUPOS=PART|Match=Yes|SpaceAfter=No
44	の	の	ADP	CM	Case=Gen	42	case	_	GDPRL=compound:prt|GHEAD=38|GHEADH=42|GID=40|GUPOS=PART|Match=Yes|SpaceAfter=No
45	王	王	NOUN	NN	_	47	nmod	_	GDPRL=compound|GHEAD=43|GHEADH=47|GID=41|Match=Yes|SpaceAfter=No
46	の	の	ADP	CM	Case=Gen	45	case	_	GDPRL=compound:prt|GHEAD=41|GHEADH=45|GID=42|GUPOS=PART|Match=Yes|SpaceAfter=No
47	祖母	祖母	NOUN	NN	_	49	obl	_	GDPRL=root|GHEAD=0|GID=43|Match=Yes|SpaceAfter=No
48	と	と	ADP	CM	Case=Comp	47	case	_	GDPRL=compound:prt|GHEAD=43|GHEADH=47|GID=44|GUPOS=PART|Match=Yes|SpaceAfter=No
49	なっ	なる	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=cop|GHEAD=43|GHEADH=47|GID=45|GUPOS=AUX|Match=Yes|SpaceAfter=No
50	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	49	aux	_	GHEAD=43|GHEADH=47|GID=46|GUPOS=VERB|Match=Yes|SpaceAfter=No
51	。	。	PUNCT	.	_	49	punct	_	Match=Yes|GID=47|GHEAD=43|GHEADH=47

~~~


