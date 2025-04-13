---
layout: base
title:  'Statistics of cop in UD_Czech-CAC'
udver: '2'
---

## Treebank Statistics: UD_Czech-CAC: Relations: `cop`

This relation is universal.

9566 nodes (2%) are attached to their parents as `cop`.

7838 instances of `cop` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19328873092202.

The following 13 pairs of parts of speech are connected with `cop`: <tt><a href="cs_cac-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (4580; 48% instances), <tt><a href="cs_cac-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (3303; 35% instances), <tt><a href="cs_cac-pos-ADV.html">ADV</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (796; 8% instances), <tt><a href="cs_cac-pos-DET.html">DET</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (418; 4% instances), <tt><a href="cs_cac-pos-NUM.html">NUM</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (173; 2% instances), <tt><a href="cs_cac-pos-PRON.html">PRON</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (143; 1% instances), <tt><a href="cs_cac-pos-SYM.html">SYM</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (86; 1% instances), <tt><a href="cs_cac-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (39; 0% instances), <tt><a href="cs_cac-pos-PART.html">PART</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (21; 0% instances), <tt><a href="cs_cac-pos-VERB.html">VERB</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="cs_cac-pos-ADP.html">ADP</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cs_cac-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cs_cac-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cop	color:blue
1	Stav	stav	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj	_
2	a	a	CCONJ	J^-------------	_	3	cc	3:cc	LId=a-1
3	využívání	využívání	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	1	conj	1:conj|9:nsubj	LDeriv=využít
4	půdního	půdní	ADJ	AAIS2----1A----	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	5	amod	5:amod	_
5	fondu	fond	NOUN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	1	nmod	1:nmod:gen|3:nmod:gen	_
6	jsou	být	AUX	VB-P---3P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
7	u	u	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	8:case	LId=u-1
8	nás	já	PRON	PP-P2--1-------	Case=Gen|Number=Plur|Person=1|PronType=Prs	9	obl	9:obl:u:gen	_
9	neuspokojivé	uspokojivý	ADJ	AAIP1----1N----	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Neg	0	root	0:root	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop	color:blue
1	V	v	ADP	RR--6----------	AdpType=Prep|Case=Loc	2	case	2:case	LId=v-1
2	říjnu	říjen	NOUN	NNIS6-----A----	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	0	root	0:root	_
3	bude	být	AUX	VB-S---3F-AA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
4	sjednocovací	sjednocovací	ADJ	AANS1----1A----	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Polarity=Pos	5	amod	5:amod	LDeriv=sjednocovat
5	řízení	řízení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Number=Sing|VerbForm=Vnoun	2	nsubj	2:nsubj	LDeriv=řídit
6	s	s	ADP	RR--7----------	AdpType=Prep|Case=Ins	7	case	7:case	LId=s-1
7	HDP	HDP	PROPN	NNIXX-----A---8	Abbr=Yes|Animacy=Inan|Gender=Masc|NameType=Com	5	nmod	5:nmod:s:ins	_
8	Praha	Praha	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	7	nmod	7:nmod:nom	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Výrobky	výrobek	NOUN	NNIP4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	9	obj	9:obj	_
2	ze	z	ADP	RV--2----------	AdpType=Voc|Case=Gen	3	case	3:case	LId=z-1
3	směsi	směs	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod:z:gen	_
4	polyester	polyester	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nmod	3:nmod:nom	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	6:punct	_
6	bavlna	bavlna	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing	4	conj	3:nmod:nom|4:conj	_
7	není	být	AUX	VB-S---3P-NA---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	8:cop	_
8	třeba	třeba	ADV	Db-------------	_	0	root	0:root	LId=třeba-2|LGloss=(například)
9	žehlit	žehlit	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	csubj	8:csubj	SpaceAfter=No
10	.	.	PUNCT	Z:-------------	_	8	punct	8:punct	_

~~~


