---
layout: base
title:  'Statistics of dep in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `dep`

This relation is universal.

5 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.2.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-ADP.html">ADP</a></tt> (2; 40% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-PART.html">PART</a></tt> (1; 20% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-ADP.html">ADP</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 16 dep	color:blue
1	付近	付近	NOUN	NN	_	3	nmod	_	GDPRL=compound|GHEAD=3|GHEADH=3|GID=1|Match=Yes|SpaceAfter=No
2	の	の	ADP	CM	Case=Gen	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	海	海	NOUN	NN	_	39	nsubj	_	GHEAD=38|GHEADH=39|GID=3|Match=Yes|SpaceAfter=No
4	は	は	ADP	DP	_	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	、	、	PUNCT	,	_	3	punct	_	GHEAD=3|GHEADH=3|GID=5|Match=Yes|SpaceAfter=No
6	（	(	PUNCT	_	_	7	punct	_	GDPRL=punct|GFORM=（|GHEAD=3|GHEADH=3|GID=6|GUPOS=PUNCT|GXPOS=(|OrigForm=(|SpaceAfter=No
7	釣り	釣り	NOUN	NN	_	18	nmod	_	GDPRL=advmod|GHEAD=19|GHEADH=18|GID=7|Match=Yes|SpaceAfter=No
8	や	や	ADP	OP	_	7	cc	_	GHEAD=7|GHEADH=7|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
9	、	、	PUNCT	,	_	7	punct	_	GHEAD=15|GHEADH=14|GID=9|Match=Yes|SpaceAfter=No
10	その他	その他	PRON	_	_	12	nmod	_	GDPRL=compound|GFORM=他|GHEAD=13|GHEADH=12|GID=11|GUPOS=NOUN|GXPOS=NNB|SpaceAfter=No
11	の	の	ADP	CM	Case=Gen	10	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=10|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
12	海産物	海産物	NOUN	NN	_	18	nmod	_	GDPRL=compound|GHEAD=15|GHEADH=14|GID=13|Match=Yes|SpaceAfter=No
13	の	の	ADP	CM	Case=Gen	12	case	_	GDPRL=compound:prt|GHEAD=13|GHEADH=12|GID=14|GUPOS=PART|Match=Yes|SpaceAfter=No
14	収集	収集	NOUN	NN	_	18	compound	_	GDPRL=conj|GHEAD=7|GHEADH=7|GID=15|Match=Yes|SpaceAfter=No
15	など	など	ADP	AP	_	18	dep	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=16|GUPOS=PART|Match=Yes|SpaceAfter=No
16	による	による	ADP	CM	Case=Advb	18	dep	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=17|GUPOS=PART|Match=Yes|SpaceAfter=No
17	）	)	PUNCT	_	_	16	punct	_	GDPRL=punct|GFORM=）|GHEAD=7|GHEADH=7|GID=18|GUPOS=PUNCT|GXPOS=)|OrigForm=)|SpaceAfter=No
18	食糧	食糧	NOUN	NN	_	25	obj	_	GDPRL=compound|GHEAD=31|GHEADH=32|GID=19|Match=Yes|SpaceAfter=No
19	を	を	ADP	_	_	18	case	_	GDPRL=cc|GFORM=をはじめ|GHEAD=19|GHEADH=18|GID=20|GUPOS=PART|GXPOS=OP|SpaceAfter=No
20	はじめ	はじめ	ADP	_	_	18	case	_	GDPRL=cc|GFORM=をはじめ|GHEAD=19|GHEADH=18|GID=20|GUPOS=PART|GXPOS=OP|SpaceAfter=No
21	、	、	PUNCT	,	_	18	punct	_	GHEAD=22|GHEADH=22|GID=21|Match=Yes|SpaceAfter=No
22	貿易	貿易	NOUN	NN	_	25	obl	_	GDPRL=compound|GHEAD=19|GHEADH=18|GID=22|Match=Yes|SpaceAfter=No
23	や	や	ADP	OP	_	22	cc	_	GHEAD=24|GHEADH=24,25|GID=23|GUPOS=PART|Match=Yes|SpaceAfter=No
24	植民地	植民地	NOUN	_	_	25	compound	_	GDPRL=conj|GFORM=植民地化|GHEAD=19|GHEADH=18|GID=24|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
25	化	化	VERB	_	_	39	acl	_	GDPRL=conj|GFORM=植民地化|GHEAD=19|GHEADH=18|GID=24|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
26	、	、	PUNCT	,	_	25	punct	_	GHEAD=26|GHEADH=27|GID=25|Match=Yes|SpaceAfter=No
27	戦争	戦争	NOUN	NN	_	32	nmod	_	GDPRL=conj|GHEAD=19|GHEADH=18|GID=26|Match=Yes|SpaceAfter=No
28	など	など	ADP	AP	_	27	case	_	GDPRL=compound:prt|GHEAD=19|GHEADH=18|GID=27|GUPOS=PART|Match=Yes|SpaceAfter=No
29	、	、	PUNCT	,	_	27	punct	_	GHEAD=19|GHEADH=18|GID=28|Match=Yes|SpaceAfter=No
30	様々	様々	ADJ	JJN	_	32	acl	_	GDPRL=amod|GHEAD=31|GHEADH=32|GID=29|Match=Yes|SpaceAfter=No
31	な	だ	AUX	VXP	Form=Adn	30	aux	_	GHEAD=29|GHEADH=30|GID=30|GUPOS=VERB|Match=Yes|SpaceAfter=No
32	分野	分野	NOUN	NN	_	39	obl	_	GDPRL=advmod|GHEAD=38|GHEADH=39|GID=31|Match=Yes|SpaceAfter=No
33	で	で	ADP	CM	Case=Advb	32	case	_	GDPRL=compound:prt|GHEAD=31|GHEADH=32|GID=32|GUPOS=PART|Match=Yes|SpaceAfter=No
34	長年	長年	NOUN	RB	_	35	obl	_	GDPRL=advmod|GHEAD=38|GHEADH=39|GID=33|GUPOS=ADV|Match=Yes|SpaceAfter=No
35	重要	重要	ADJ	JJN	_	37	acl	_	GDPRL=amod|GHEAD=36|GHEADH=37|GID=34|Match=Yes|SpaceAfter=No
36	な	だ	AUX	VXP	Form=Adn	35	aux	_	GHEAD=34|GHEADH=35|GID=35|GUPOS=VERB|Match=Yes|SpaceAfter=No
37	ルート	ルート	NOUN	NN	_	39	obj	_	GHEAD=38|GHEADH=39|GID=36|Match=Yes|SpaceAfter=No
38	を	を	ADP	CM	Case=Acc	37	case	_	GDPRL=compound:prt|GHEAD=36|GHEADH=37|GID=37|GUPOS=PART|Match=Yes|SpaceAfter=No
39	与え	与える	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=38|Match=Yes|SpaceAfter=No
40	まし	ます	AUX	VXP	VerbForm=Ger	39	aux	_	GHEAD=38|GHEADH=39|GID=39|GUPOS=VERB|Match=Yes|SpaceAfter=No
41	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	39	aux	_	GHEAD=38|GHEADH=39|GID=40|GUPOS=VERB|Match=Yes|SpaceAfter=No
42	。	。	PUNCT	.	_	39	punct	_	Match=Yes|GID=41|GHEAD=38|GHEADH=39

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
1	しかし	しかし	CCONJ	CC	_	22	advmod	_	GDPRL=mark|GHEAD=19|GHEADH=22|GID=1|Match=Yes|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=2|Match=Yes|SpaceAfter=No
3	彼ら	彼ら	PRON	PRP	Number=Plur|Person=3	5	nmod	_	GDPRL=compound|GHEAD=5|GHEADH=5|GID=3|Match=Yes|SpaceAfter=No
4	の	の	ADP	CM	Case=Gen	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	友情	友情	NOUN	NN	_	22	nsubj	_	GHEAD=19|GHEADH=22|GID=5|Match=Yes|SpaceAfter=No
6	は	は	ADP	DP	_	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	二	二	NUM	CD	_	13	nummod	_	GDPRL=compound|GHEAD=12|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
8	人	人	NOUN	SFN	_	7	mark	_	GDPRL=snum|GHEAD=7|GHEADH=7|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
9	の	の	ADP	CM	Case=Gen	7	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
10	非	非	NOUN	_	_	11	dep	_	GDPRL=amod|GFORM=非公式的|GHEAD=12|GHEADH=13|GID=10|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
11	公式的	公式的	ADJ	_	_	13	acl	_	GDPRL=amod|GFORM=非公式的|GHEAD=12|GHEADH=13|GID=10|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
12	な	だ	AUX	VXP	Form=Adn	11	aux	_	GHEAD=10|GHEADH=10,11|GID=11|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	協業	協業	NOUN	NN	_	15	obj	_	GDPRL=advmod|GHEAD=14|GHEADH=17|GID=12|Match=Yes|SpaceAfter=No
14	を	を	ADP	_	_	13	case	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=をめぐって|GHEAD=12|GHEADH=13|GID=13|GUPOS=PART|GXPOS=CM|SpaceAfter=No
15	めぐっ	めぐる	VERB	_	_	17	acl	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=をめぐって|GHEAD=12|GHEADH=13|GID=13|GUPOS=PART|GXPOS=CM|SpaceAfter=No
16	て	て	SCONJ	_	_	15	mark	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=をめぐって|GHEAD=12|GHEADH=13|GID=13|GUPOS=PART|GXPOS=CM|SpaceAfter=No
17	生じ	生じる	VERB	VV	VerbForm=Ger	20	acl	_	GDPRL=acl:relcl|GHEAD=17|GHEADH=20|GID=14|Match=Yes|SpaceAfter=No
18	た	た	AUX	VXP	Form=Adn|Tense=Past	17	aux	_	GHEAD=14|GHEADH=17|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
19	法的	法的	ADJ	NN	_	20	amod	_	GHEAD=17|GHEADH=20|GID=16|GUPOS=NOUN|Match=Yes|SpaceAfter=No
20	紛争	紛争	NOUN	NN	_	22	obl	_	GDPRL=advmod|GHEAD=19|GHEADH=22|GID=17|Match=Yes|SpaceAfter=No
21	によって	によって	ADP	CM	Case=Advb	20	case	_	GDPRL=compound:prt|GHEAD=17|GHEADH=20|GID=18|GUPOS=PART|Match=Yes|SpaceAfter=No
22	ひび割れる	ひび割れる	VERB	VV	Form=Adn	0	root	_	GHEAD=0|GID=19|Match=Yes|SpaceAfter=No
23	こと	こと	NOUN	_	_	22	aux	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことになっ|GHEAD=19|GHEADH=22|GID=20|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
24	に	に	ADP	_	_	23	fixed	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことになっ|GHEAD=19|GHEADH=22|GID=20|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
25	なっ	なる	VERB	_	_	23	fixed	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことになっ|GHEAD=19|GHEADH=22|GID=20|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
26	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	22	aux	_	GHEAD=19|GHEADH=22|GID=21|GUPOS=VERB|Match=Yes|SpaceAfter=No
27	。	。	PUNCT	.	_	22	punct	_	Match=Yes|GID=22|GHEAD=19|GHEADH=22

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 16 dep	color:blue
1	首都	首都	NOUN	NN	_	7	nsubj	_	GDPRL=nsubj:pass|GHEAD=7|GHEADH=7|GID=1|Match=Yes|SpaceAfter=No
2	が	が	ADP	CM	Case=Nom	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	すべて	すべて	NOUN	NN	_	5	nmod	_	GDPRL=compound|GHEAD=5|GHEADH=5|GID=3|Match=Yes|SpaceAfter=No
4	の	の	ADP	CM	Case=Gen	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	栄光	栄光	NOUN	NN	_	7	iobj	_	GDPRL=advmod|GHEAD=7|GHEADH=7|GID=5|Match=Yes|SpaceAfter=No
6	に	に	ADP	CM	Case=Advb	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	照らさ	照らす	VERB	VV	Form=Irr	9	acl	_	GDPRL=acl:relcl|GHEAD=9|GHEADH=9|GID=7|Match=Yes|SpaceAfter=No
8	れる	れる	AUX	VXP	Form=Adn|Voice=Pass	7	aux	_	GDPRL=aux:pass|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|Match=Yes|SpaceAfter=No
9	様子	様子	NOUN	NN	_	11	obj	_	GHEAD=11|GHEADH=11|GID=9|Match=Yes|SpaceAfter=No
10	を	を	ADP	CM	Case=Acc	9	case	_	GDPRL=compound:prt|GHEAD=9|GHEADH=9|GID=10|GUPOS=PART|Match=Yes|SpaceAfter=No
11	見	見る	VERB	VV	VerbForm=Ger	14	acl	_	GDPRL=acl:relcl|GHEAD=13|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
12	たい	たい	AUX	VXP	Form=Adn	11	aux	_	GHEAD=11|GHEADH=11|GID=12|GUPOS=VERB|Match=Yes|SpaceAfter=No
13	人	人	NOUN	NN	_	14	amod	_	GDPRL=compound|GHEAD=14|GHEADH=14|GID=13|Match=Yes|SpaceAfter=No
14	誰	誰	NOUN	WP	_	25	obl	_	GDPRL=advmod|GHEAD=26|GHEADH=25|GID=14|GUPOS=PRON|Match=Yes|SpaceAfter=No
15	も	も	ADP	DP	_	14	case	_	GDPRL=compound:prt|GHEAD=14|GHEADH=14|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
16	にとって	にとって	PART	CM	Case=Advb	25	dep	_	GDPRL=compound:prt|GHEAD=14|GHEADH=14|GID=16|Match=Yes|SpaceAfter=No
17	、	、	PUNCT	,	_	16	punct	_	GHEAD=14|GHEADH=14|GID=17|Match=Yes|SpaceAfter=No
18	11月	11月	NOUN	_	_	25	nsubj	_	GDPRL=snum|GFORM=月|GHEAD=18|GHEADH=18|GID=19|GUPOS=PART|GXPOS=SFN|SpaceAfter=No
19	は	は	ADP	DP	_	18	case	_	GDPRL=compound:prt|GHEAD=18|GHEADH=18|GID=20|GUPOS=PART|Match=Yes|SpaceAfter=No
20	訪れる	訪れる	VERB	VV	Form=Adn	25	acl	_	GDPRL=nomc|GHEAD=22|GHEADH=21|GID=21|Match=Yes|SpaceAfter=No
21	の	の	PART	PP	_	20	mark	_	GDPRL=advmod|GHEAD=26|GHEADH=25|GID=22|Match=Yes|SpaceAfter=No
22	に	に	ADP	CM	Case=Advb	20	case	_	GDPRL=compound:prt|GHEAD=22|GHEADH=21|GID=23|GUPOS=PART|Match=Yes|SpaceAfter=No
23	最高	最高	NOUN	NN	_	25	obl	_	GDPRL=compound|GHEAD=26|GHEADH=25|GID=24|Match=Yes|SpaceAfter=No
24	の	の	ADP	CM	Case=Gen	23	case	_	GDPRL=compound:prt|GHEAD=24|GHEADH=23|GID=25|GUPOS=PART|Match=Yes|SpaceAfter=No
25	時期	時期	NOUN	NN	_	0	root	_	GHEAD=0|GID=26|Match=Yes|SpaceAfter=No
26	だ	だ	AUX	VXP	VerbForm=Fin	25	cop	_	GDPRL=aux|GHEAD=26|GHEADH=25|GID=27|GUPOS=VERB|Match=Yes|SpaceAfter=No
27	。	。	PUNCT	.	_	25	punct	_	Match=Yes|GID=28|GHEAD=26|GHEADH=25

~~~


