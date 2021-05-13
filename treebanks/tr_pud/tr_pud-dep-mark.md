---
layout: base
title:  'Statistics of mark in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `mark`

This relation is universal.

8 nodes (0%) are attached to their parents as `mark`.

4 instances of `mark` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.875.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 50% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 25% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 13% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-SYM.html">SYM</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Teoride	Teori	NOUN	NN	Case=Loc|Number=Sing	8	obl	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	eğer	eğer	SCONJ	SCONJ	_	5	mark	_	_
4	doğru	doğru	ADV	RB	_	5	advmod	_	_
5	yapılırsa	yap	VERB	VB	Aspect=Hab|Mood=CndGen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	8	advcl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	anlaşılamaz	anlaşıla	VERB	VB	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	8	amod	_	_
8	olmalı	ol	VERB	VB	Mood=Nec|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Eğer	eğer	SCONJ	SCONJ	_	2	mark	_	_
2	böyle	böyle	ADJ	JJ	Number=Sing	11	advcl	_	_
3	olsaydı	ol	AUX	VB	Mood=Cnd|Number=Sing|Person=3|Tense=Past	2	cop	_	SpaceAfter=No
4	,	,	PUNCT	,	_	2	punct	_	_
5	Primli	Primli	ADJ	JJ	Number=Sing	6	amod	_	_
6	Tahvillerin	Tahviller	NOUN	NN	Case=Gen|Number=Plur	10	nmod:poss	_	_
7	normal	normal	ADJ	JJ	Number=Sing	9	amod	_	_
8	tasarruf	tasarruf	NOUN	NN	Number=Sing	9	nmod:poss	_	_
9	hesaplarından	hesap	NOUN	NN	Case=Abl|Number=Sing|Polarity=Pos	10	obl	_	_
10	farkı	farkı	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
11	olmazdı	ol	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 mark	color:blue
1	Hack	Hack	X	FW	_	2	compound	_	Proper=True
2	Forums'ın	Forums	X	FW	_	3	nmod:poss	_	Proper=True
3	kurucusu	kurucu	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	nmod	_	_
4	Jesse	Jesse	PROPN	PROPN	Number=Sing	28	nsubj	_	Proper=True
5	LaBrocca	LaBrocca	PROPN	PROPN	Case=Nom|Number=Sing	4	flat	_	Proper=True
6	bölümün	bölüm	NOUN	NN	Case=Gen|Number=Sing	8	nmod:poss	_	_
7	kapatılma	kapat	VERB	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Vnoun|Voice=Pass	8	nmod:poss	_	_
8	sebebini	sebep	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	açıklayan	açıkla	ADJ	VJ	Number=Sing|Polarity=Pos	11	acl	_	_
10	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	11	det	_	_
11	mesajda	mesaj	NOUN	NN	Case=Loc|Number=Sing	28	obl	_	_
12	"	"	PUNCT	``	_	24	punct	_	SpaceAfter=No
13	Ne	ne	ADV	WRB	_	14	advmod	_	_
14	yazık	yazık	NOUN	NN	Number=Sing	24	advcl	_	_
15	ki	ki	SCONJ	SCONJ	_	14	mark	_	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	_	_
17	bir	bir	DET	DT	Definite=Ind|Polarity=Pos	18	det	_	_
18	kez	kez	NOUN	NN	Number=Sing	24	obl	_	_
19	daha	daha	ADV	RB	_	18	advmod:emph	_	_
20	azınlığın	azınlık	NOUN	NN	Case=Gen|Number=Sing	21	nmod:poss	_	_
21	talebiyle	talebi	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	obl	_	_
22	çoğunluk	çoğunluk	NOUN	NN	Case=Nom|Number=Sing	24	nsubj	_	_
23	eğlencesinden	eğlence	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	obl	_	_
24	oldu	ol	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	28	ccomp	_	SpaceAfter=No
25	.	_	PUNCT	.	_	24	punct	_	SpaceAfter=No
26	"	_	PUNCT	''	_	24	punct	_	_
27	diye	diye	ADP	IN	_	24	case	_	_
28	yazdı	yaz	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
29	.	.	PUNCT	.	_	28	punct	_	_

~~~


