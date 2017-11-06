---
layout: base
title:  'Statistics of cop in UD_Japanese-PUD'
udver: '2'
---

## Treebank Statistics: UD_Japanese-PUD: Relations: `cop`

This relation is universal.

291 nodes (1%) are attached to their parents as `cop`.

291 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.59450171821306.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="ja_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (180; 62% instances), <tt><a href="ja_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (62; 21% instances), <tt><a href="ja_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (16; 5% instances), <tt><a href="ja_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (13; 4% instances), <tt><a href="ja_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="ja_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="ja_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="ja_pud-pos-AUX.html">AUX</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 cop	color:blue
1	今	今	NOUN	RB	_	13	obl	_	GDPRL=advmod|GHEAD=7|GHEADH=7|GID=1|GUPOS=ADV|Match=Yes|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=2|Match=Yes|SpaceAfter=No
3	カンジル	カンジル	PROPN	NNP	_	7	nmod	_	GDPRL=nsubj|GHEAD=7|GHEADH=7|GID=3|Match=Yes|SpaceAfter=No
4	は	は	ADP	DP	_	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	孤独	孤独	ADJ	JJN	_	7	acl	_	GDPRL=amod|GHEAD=7|GHEADH=7|GID=5|Match=Yes|SpaceAfter=No
6	な	だ	AUX	VXP	Form=Adn	5	aux	_	GHEAD=5|GHEADH=5|GID=6|GUPOS=VERB|Match=Yes|SpaceAfter=No
7	豚	豚	NOUN	NN	_	13	obl	_	GDPRL=advcl|GHEAD=12|GHEADH=13|GID=7|Match=Yes|SpaceAfter=No
8	かもしれ	かもしれる	AUX	_	_	7	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
9	ない	ない	AUX	_	_	7	aux	_	GDPRL=aux|GF/VerbForm=Fin|GFORM=かもしれない|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
10	が	が	SCONJ	CP	_	7	mark	_	GDPRL=compound:prt|GHEAD=7|GHEADH=7|GID=9|GUPOS=PART|Match=Yes|SpaceAfter=No
11	、	、	PUNCT	,	_	7	punct	_	GHEAD=7|GHEADH=7|GID=10|Match=Yes|SpaceAfter=No
12	常に	常に	ADV	RB	_	13	advmod	_	GHEAD=12|GHEADH=13|GID=11|Match=Yes|SpaceAfter=No
13	ひとりぼっち	ひとりぼっち	NOUN	NN	_	0	root	_	GHEAD=0|GID=12|Match=Yes|SpaceAfter=No
14	で	だ	AUX	_	_	13	cop	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=12|GHEADH=13|GID=13|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
15	は	は	ADP	_	_	13	case	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=12|GHEADH=13|GID=13|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
16	ない	ない	AUX	_	_	13	aux	_	GDPRL=advmod|GF/Polarity=Neg|GF/VerbForm=Fin|GFORM=ではない|GHEAD=12|GHEADH=13|GID=13|GUPOS=AUX|GXPOS=VXP|SpaceAfter=No
17	。	。	PUNCT	.	_	13	punct	_	Match=Yes|GID=14|GHEAD=12|GHEADH=13

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 22 cop	color:blue
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
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 19 cop	color:blue
1	現在	現在	NOUN	RB	_	17	obl	_	GDPRL=advmod|GHEAD=14|GHEADH=17|GID=1|GUPOS=ADV|Match=Yes|SpaceAfter=No
2	、	、	PUNCT	,	_	1	punct	_	GHEAD=1|GHEADH=1|GID=2|Match=Yes|SpaceAfter=No
3	RECO	RECO	PROPN	NNP	_	7	nsubj	_	GHEAD=7|GHEADH=7|GID=3|Match=Yes|SpaceAfter=No
4	が	が	ADP	CM	Case=Nom	3	case	_	GDPRL=compound:prt|GHEAD=3|GHEADH=3|GID=4|GUPOS=PART|Match=Yes|SpaceAfter=No
5	エージェント	エージェント	NOUN	NN	_	7	obl	_	GDPRL=advmod|GHEAD=7|GHEADH=7|GID=5|Match=Yes|SpaceAfter=No
6	に対して	に対して	ADP	CM	Case=Advb	5	case	_	GDPRL=compound:prt|GHEAD=5|GHEADH=5|GID=6|GUPOS=PART|Match=Yes|SpaceAfter=No
7	課す	課す	VERB	VV	Form=Adn	10	acl	_	GDPRL=acl:relcl|GHEAD=10|GHEADH=12,13|GID=7|Match=Yes|SpaceAfter=No
8	こと	こと	NOUN	_	_	7	aux	_	GDPRL=aux|GF/Form=Adn|GFORM=ことのできる|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
9	の	の	ADP	_	_	7	case	_	GDPRL=aux|GF/Form=Adn|GFORM=ことのできる|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
10	できる	できる	VERB	_	_	13	acl	_	GDPRL=aux|GF/Form=Adn|GFORM=ことのできる|GHEAD=7|GHEADH=7|GID=8|GUPOS=VERB|GXPOS=VXP|SpaceAfter=No
11	最高	最高	NOUN	NN	_	13	compound	_	GHEAD=10|GHEADH=12,13|GID=9|Match=Yes|SpaceAfter=No
12	罰金	罰金	NOUN	_	_	13	compound	_	GDPRL=nsubj|GFORM=罰金額|GHEAD=14|GHEADH=17|GID=10|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
13	額	額	NOUN	_	_	17	nsubj	_	GDPRL=nsubj|GFORM=罰金額|GHEAD=14|GHEADH=17|GID=10|GUPOS=NOUN|GXPOS=NN|SpaceAfter=No
14	は	は	ADP	DP	_	13	case	_	GDPRL=compound:prt|GHEAD=10|GHEADH=12,13|GID=11|GUPOS=PART|Match=Yes|SpaceAfter=No
15	2	2	NUM	CD	_	17	nummod	_	GHEAD=13|GHEADH=16|GID=12|Match=Yes|SpaceAfter=No
16	万	万	ADV	NNB	_	17	advmod	_	GDPRL=nummod|GHEAD=14|GHEADH=17|GID=13|GUPOS=NOUN|Match=Yes|SpaceAfter=No
17	5000	5000	NUM	CD	_	0	root	_	GHEAD=0|GID=14|Match=Yes|SpaceAfter=No
18	ドル	ドル	NOUN	SFN	_	17	mark	_	GDPRL=snum|GHEAD=14|GHEADH=17|GID=15|GUPOS=PART|Match=Yes|SpaceAfter=No
19	である	だ	AUX	VXP	VerbForm=Fin	17	cop	_	GDPRL=aux|GHEAD=14|GHEADH=17|GID=16|GUPOS=VERB|Match=Yes|SpaceAfter=No
20	。	。	PUNCT	.	_	17	punct	_	Match=Yes|GID=17|GHEAD=14|GHEADH=17

~~~


