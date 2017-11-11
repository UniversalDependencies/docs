---
layout: base
title:  'Statistics of det in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `det`

This relation is universal.

181 nodes (1%) are attached to their parents as `det`.

181 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25966850828729.

The following 4 pairs of parts of speech are connected with `det`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-DET.html">DET</a></tt> (176; 97% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	私	私	PRON	PRP	Person=1	6	nsubj	_	GHEAD=8|GHEADH=6|GID=1|Match=Yes|SpaceAfter=No
2	は	は	ADP	DP	_	1	case	_	GDPRL=compound:prt|GHEAD=1|GHEADH=1|GID=2|GUPOS=PART|Match=Yes|SpaceAfter=No
3	いずれにせよ	いずれにせよ	ADV	_	_	6	advmod	_	GDPRL=advcl|GF/Case=Advb|GF/Form=Ord|GFORM=せよ|GHEAD=8|GHEADH=6|GID=5|GUPOS=VERB|GXPOS=VV|SpaceAfter=No
4	刑務所	刑務所	NOUN	NN	_	6	iobj	_	GDPRL=advmod|GHEAD=8|GHEADH=6|GID=6|Match=Yes|SpaceAfter=No
5	に	に	ADP	CM	Case=Advb	4	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=4|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
6	行く	行く	VERB	VV	VerbForm=Fin	12	acl	_	GDPRL=advcl|GHEAD=16|GHEADH=14|GID=8|Match=Yes|SpaceAfter=No
7	が	が	SCONJ	CP	_	6	mark	_	GDPRL=compound:prt|GHEAD=8|GHEADH=6|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
8	、	、	PUNCT	,	_	6	punct	_	GHEAD=8|GHEADH=6|GID=10|Match=Yes|SpaceAfter=No
9	その	その	DET	DT	_	10	det	_	GHEAD=12|GHEADH=10|GID=11|GUPOS=DET|Match=Yes|SpaceAfter=No
10	価値	価値	NOUN	NN	_	12	nsubj	_	GHEAD=14|GHEADH=12|GID=12|Match=Yes|SpaceAfter=No
11	が	が	ADP	CM	Case=Nom	10	case	_	GDPRL=compound:prt|GHEAD=12|GHEADH=10|GID=13|GUPOS=PART|Match=Yes|SpaceAfter=No
12	あり	ある	VERB	VV	VerbForm=Ger	0	root	_	GDPRL=acl:relcl|GHEAD=16|GHEADH=14|GID=14|Match=Yes|SpaceAfter=No
13	ます	ます	AUX	VXP	Form=Adn	12	aux	_	GHEAD=14|GHEADH=12|GID=15|GUPOS=VERB|Match=Yes|SpaceAfter=No
14	ように	ようだ	AUX	_	_	12	aux	_	GDPRL=compound:prt|GF/Case=Advb|GFORM=に|GHEAD=16|GHEADH=14|GID=17|GUPOS=PART|GXPOS=CM|SpaceAfter=No
15	。	。	PUNCT	.	_	12	punct	_	Match=Yes|GID=18|GHEAD=16|GHEADH=14

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det	color:blue
1	その	その	DET	DT	_	3	det	_	GHEAD=2|GHEADH=2,3|GID=1|GUPOS=DET|Match=Yes|SpaceAfter=No
2	警官	警官	NOUN	_	_	3	compound	_	GDPRL=nsubj|GFORM=警官たち|GHEAD=15|GHEADH=16|GID=2|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
3	たち	たち	NOUN	_	_	16	nsubj	_	GDPRL=nsubj|GFORM=警官たち|GHEAD=15|GHEADH=16|GID=2|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
4	は	は	ADP	DP	_	3	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2,3|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
5	日曜	日曜	NOUN	NN	_	6	compound	_	GHEAD=5|GHEADH=6|GID=4|Match=Yes|SpaceAfter=No
6	朝	朝	NOUN	NN	_	8	nmod	_	GDPRL=compound|GHEAD=7|GHEADH=8|GID=5|Match=Yes|SpaceAfter=No
7	の	の	ADP	CM	Case=Gen	6	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=6|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
8	行動	行動	NOUN	NN	_	16	obl	_	GDPRL=advmod|GHEAD=15|GHEADH=16|GID=7|Match=Yes|SpaceAfter=No
9	で	で	ADP	CM	Case=Advb	8	case	_	GDPRL=compound:prt|GHEAD=7|GHEADH=8|GID=8|GUPOS=PART|Match=Yes|SpaceAfter=No
10	その	その	DET	DT	_	11	det	_	GHEAD=13|GHEADH=14|GID=9|GUPOS=DET|Match=Yes|SpaceAfter=No
11	53	53	NUM	CD	_	14	nummod	_	GDPRL=compound|GHEAD=13|GHEADH=14|GID=10|Match=Yes|SpaceAfter=No
12	歳	歳	NOUN	SFN	_	11	mark	_	GDPRL=snum|GHEAD=10|GHEADH=11|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
13	の	の	ADP	CM	Case=Gen	11	case	_	GDPRL=compound:prt|GHEAD=10|GHEADH=11|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
14	人	人	NOUN	NN	_	16	obj	_	GHEAD=15|GHEADH=16|GID=13|Match=Yes|SpaceAfter=No
15	を	を	ADP	CM	Case=Acc	14	case	_	GDPRL=compound:prt|GHEAD=13|GHEADH=14|GID=14|GUPOS=PART|Match=Yes|SpaceAfter=No
16	制圧	制圧	VERB	NN	_	20	acl	_	GDPRL=root|GHEAD=0|GID=15|GUPOS=NOUN|Match=Yes|SpaceAfter=No
17	する	する	AUX	VV	Form=Adn	16	aux	_	GDPRL=compound:v|GHEAD=15|GHEADH=16|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
18	こと	こと	NOUN	_	_	16	aux	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことができ|GHEAD=15|GHEADH=16|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
19	が	が	ADP	_	_	16	case	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことができ|GHEAD=15|GHEADH=16|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
20	でき	できる	VERB	_	_	0	root	_	GDPRL=aux|GF/VerbForm=Ger|GFORM=ことができ|GHEAD=15|GHEADH=16|GID=17|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
21	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	20	aux	_	GHEAD=15|GHEADH=16|GID=18|GUPOS=VERB|Match=Yes|SpaceAfter=No
22	。	。	PUNCT	.	_	20	punct	_	Match=Yes|GID=19|GHEAD=15|GHEADH=16

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 det	color:blue
1	世界	世界	NOUN	NN	_	2	compound	_	GHEAD=2|GHEADH=2|GID=1|Match=Yes|SpaceAfter=No
2	各地	各地	NOUN	NN	_	12	iobj	_	GDPRL=advmod|GHEAD=13|GHEADH=12|GID=2|Match=Yes|SpaceAfter=No
3	に	に	ADP	CM	Case=Advb	2	case	_	GDPRL=compound:prt|GHEAD=2|GHEADH=2|GID=3|GUPOS=PART|Match=Yes|SpaceAfter=No
4	数多くの	数多くの	ADJ	_	_	5	amod	_	GDPRL=compound:prt|GF/Case=Gen|GFORM=の|GHEAD=4|GHEADH=4|GID=5|GUPOS=PART|GXPOS=CM|SpaceAfter=No
5	装備	装備	NOUN	NN	_	7	nmod	_	GDPRL=compound|GHEAD=11|GHEADH=10|GID=6|Match=Yes|SpaceAfter=No
6	や	や	ADP	OP	_	5	cc	_	GHEAD=8|GHEADH=7|GID=7|GUPOS=PART|Match=Yes|SpaceAfter=No
7	織物	織物	NOUN	NN	_	10	nmod	_	GDPRL=conj|GHEAD=6|GHEADH=5|GID=8|Match=Yes|SpaceAfter=No
8	の	の	ADP	CM	Case=Gen	7	case	_	GDPRL=compound:prt|GHEAD=6|GHEADH=5|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
9	販売	販売	NOUN	NN	_	10	compound	_	GHEAD=11|GHEADH=10|GID=10|Match=Yes|SpaceAfter=No
10	代理店	代理店	NOUN	NN	_	12	nsubj	_	GHEAD=13|GHEADH=12|GID=11|Match=Yes|SpaceAfter=No
11	が	が	ADP	CM	Case=Nom	10	case	_	GDPRL=compound:prt|GHEAD=11|GHEADH=10|GID=12|GUPOS=PART|Match=Yes|SpaceAfter=No
12	ある	ある	VERB	VV	VerbForm=Fin	15	acl	_	GDPRL=advcl|GHEAD=23|GHEADH=26|GID=13|Match=Yes|SpaceAfter=No
13	に	に	ADP	_	_	12	case	_	GDPRL=compound:prt|GFORM=にもかかわらず|GHEAD=13|GHEADH=12|GID=14|GUPOS=PART|GXPOS=CP|SpaceAfter=No
14	も	も	ADP	_	_	12	case	_	GDPRL=compound:prt|GFORM=にもかかわらず|GHEAD=13|GHEADH=12|GID=14|GUPOS=PART|GXPOS=CP|SpaceAfter=No
15	かかわら	かかわる	VERB	_	_	26	acl	_	GDPRL=compound:prt|GFORM=にもかかわらず|GHEAD=13|GHEADH=12|GID=14|GUPOS=PART|GXPOS=CP|SpaceAfter=No
16	ず	ない	AUX	_	_	15	aux	_	GDPRL=compound:prt|GFORM=にもかかわらず|GHEAD=13|GHEADH=12|GID=14|GUPOS=PART|GXPOS=CP|SpaceAfter=No
17	、	、	PUNCT	,	_	15	punct	_	GHEAD=13|GHEADH=12|GID=15|Match=Yes|SpaceAfter=No
18	その	その	DET	DT	_	19	det	_	GHEAD=19|GHEADH=21|GID=16|GUPOS=DET|Match=Yes|SpaceAfter=No
19	ドイツ	ドイツ	PROPN	NNP	_	21	nmod	_	GDPRL=compound|GHEAD=19|GHEADH=21|GID=17|Match=Yes|SpaceAfter=No
20	の	の	ADP	CM	Case=Gen	19	case	_	GDPRL=compound:prt|GHEAD=17|GHEADH=19|GID=18|GUPOS=PART|Match=Yes|SpaceAfter=No
21	会社	会社	NOUN	NN	_	26	nsubj	_	GHEAD=23|GHEADH=26|GID=19|Match=Yes|SpaceAfter=No
22	は	は	ADP	DP	_	21	case	_	GDPRL=compound:prt|GHEAD=19|GHEADH=21|GID=20|GUPOS=PART|Match=Yes|SpaceAfter=No
23	財政	財政	NOUN	_	_	24	compound	_	GDPRL=advmod|GFORM=財政難|GHEAD=23|GHEADH=26|GID=21|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
24	難	難	NOUN	_	_	26	iobj	_	GDPRL=advmod|GFORM=財政難|GHEAD=23|GHEADH=26|GID=21|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
25	に	に	ADP	CM	Case=Advb	24	case	_	GDPRL=compound:prt|GHEAD=21|GHEADH=23,24|GID=22|GUPOS=PART|Match=Yes|SpaceAfter=No
26	陥っ	陥る	VERB	VV	VerbForm=Ger	0	root	_	GHEAD=0|GID=23|Match=Yes|SpaceAfter=No
27	て	て	SCONJ	CP	_	26	mark	_	GDPRL=compound:prt|GHEAD=23|GHEADH=26|GID=24|GUPOS=PART|Match=Yes|SpaceAfter=No
28	い	いる	AUX	VXH	VerbForm=Ger	26	aux	_	GDPRL=auxvv|GHEAD=23|GHEADH=26|GID=25|GUPOS=VERB|Match=Yes|SpaceAfter=No
29	た	た	AUX	VXP	Tense=Past|VerbForm=Fin	26	aux	_	GHEAD=23|GHEADH=26|GID=26|GUPOS=VERB|Match=Yes|SpaceAfter=No
30	。	。	PUNCT	.	_	26	punct	_	Match=Yes|GID=27|GHEAD=23|GHEADH=26

~~~


