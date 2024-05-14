---
layout: base
title:  'Statistics of mark in UD_Ottoman_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Ottoman_Turkish-BOUN: Relations: `mark`

This relation is universal.

27 nodes (0%) are attached to their parents as `mark`.

22 instances of `mark` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.7037037037037.

The following 5 pairs of parts of speech are connected with `mark`: <tt><a href="ota_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="ota_boun-pos-SCONJ.html">SCONJ</a></tt> (14; 52% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-SCONJ.html">SCONJ</a></tt> (9; 33% instances), <tt><a href="ota_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ota_boun-pos-PART.html">PART</a></tt> (2; 7% instances), <tt><a href="ota_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ota_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="ota_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="ota_boun-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Görüyorum	gör	VERB	_	Aspect=Imp|Number=Sing|Person=1|Polarity=Pos|Tense=Pres	0	root	_	_
2	ki	ki	SCONJ	_	_	1	mark	_	_
3	eşeğe	eşek	NOUN	_	Case=Dat|Number=Sing|Person=3	4	obl	_	_
4	binenler	bin	VERB	Ptcp	Case=Nom|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Part	6	nsubj	_	_
5	mutlaka	mutlaka	ADV	_	_	6	advmod	_	_
6	gülüyorlar	gül	VERB	_	Aspect=Imp|Number=Plur|Person=3|Polarity=Pos|Tense=Pres	1	ccomp	_	_
7	.	.	PUNCT	Stop	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	Aşikârdır	aşikâr	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	ki	ki	SCONJ	_	_	1	mark	_	_
3	kadınların	kadın	NOUN	_	Case=Gen|Number=Plur|Person=3	4	nmod:poss	_	_
4	hepsi	hepsi	PRON	Quant	Case=Nom|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	5	nsubj	_	_
5	hassastır	hassas	NOUN	_	Case=Nom|Number=Sing|Person=3	1	ccomp	_	_
6	.	.	PUNCT	Stop	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	Bir	bir	DET	Det	_	2	det	_	_
2	surette	suret	NOUN	_	Case=Loc|Number=Sing|Person=3	6	obl	_	_
3	ki	ki	PART	Attr	_	2	mark	_	_
4	hâline	hâline	NOUN	_	Case=Nom|Number=Sing|Person=3	5	obj	_	_
5	acımamak	acı	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Neg|VerbForm=Vnoun	6	csubj	_	_
6	kabil	kabil	ADJ	Adj	_	0	root	_	_
7	değil	değil	AUX	Neg	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	6	aux	_	_
8	:	:	PUNCT	Punc	_	19	punct	_	_
9	Bir	bir	DET	Det	_	10	det	_	_
10	azm	azm	NOUN	_	Case=Nom|Number=Sing|Person=3	19	obl	_	_
11	ü	_	NOUN	_	Case=Nom|Number=Sing|Person=3	10	case	_	_
12	ikdâm-ı	ikdâm-ı	NOUN	_	Case=Nom|Number=Sing|Person=3	10	nmod:poss	_	_
13	medîdeden	medîde	NOUN	_	Case=Abl|Number=Sing|Person=3	12	amod	_	_
14	sonra	sonra	ADP	PCAbl	_	10	case	_	_
15	sol	sol	ADJ	Adj	_	16	amod	_	_
16	elini	el	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	19	obj	_	_
17	yavaş	yavaş	ADV	_	_	19	advmod	_	_
18	yavaş	yavaş	ADV	_	_	17	compound:redup	_	_
19	kaldırıyor	kaldır	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	conj	_	_
20	,	,	PUNCT	Comma	_	24	punct	_	_
21	bir	bir	DET	Indef	_	22	det	_	_
22	lokma	lokma	NOUN	_	Case=Nom|Number=Sing|Person=3	23	nmod	_	_
23	ekmek	ekmek	NOUN	_	Case=Acc|Number=Sing|Person=3	24	obj	_	_
24	alıyor	al	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	conj	_	_
25	,	,	PUNCT	Comma	_	29	punct	_	_
26	et	et	NOUN	_	Case=Nom|Number=Sing|Person=3	27	nmod:poss	_	_
27	suyunun	su	NOUN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	28	nmod:poss	_	_
28	içine	iç	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	29	obl	_	_
29	atıyor	at	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	6	conj	_	_
30	.	.	PUNCT	Stop	_	29	punct	_	_

~~~


