---
layout: base
title:  'Statistics of mark in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `mark`

This relation is universal.

14 nodes (0%) are attached to their parents as `mark`.

11 instances of `mark` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 7 pairs of parts of speech are connected with `mark`: <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 29% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (3; 21% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 14% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (2; 14% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADP.html">ADP</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Teoride	Teori	NOUN	NN	Case=Loc|Number=Sing	7	obl	_	SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	_	_
3	eğer	eğer	SCONJ	SCONJ	_	5	mark	_	_
4	doğru	doğru	ADV	RB	Number=Sing	5	advmod	_	_
5	yapılırsa	yap	VERB	VB	Aspect=Hab|Mood=CndGen|Number=Sing|Person=3|Tense=Pres|Voice=Pass	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	,	_	5	punct	_	_
7	anlaşılamaz	anlaşıla	VERB	VB	Aspect=Hab|Mood=GenPot|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|Voice=Pass	0	root	_	_
8	olmalı	ol	AUX	VB	Mood=Nec|Number=Sing|Person=3|Tense=Pres	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 mark	color:blue
1	Savaşın	savaşın	NOUN	NN	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	sonlarına	son	NOUN	NN	Case=Dat|Number=Plur|Number[psor]=Sing|Person[psor]=3	4	obl	_	_
3	doğru	doğru	ADP	IN	Number=Sing	2	case	_	_
4	bitirildi	bitir	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=CauPass	22	parataxis	_	SpaceAfter=No
5	;	;	PUNCT	:	_	4	punct	_	_
6	Eagle'la	Eagle	PROPN	PROPN	Case=Ins|Number=Sing	7	obl	_	Proper=True
7	donatılan	donat	ADJ	VJ	Number=Sing|Polarity=Pos	10	acl:relcl	_	_
8	pek	pek	ADV	RB	_	9	advmod	_	_
9	çok	çok	ADJ	JJ	_	10	amod	_	_
10	B-29	_	NOUN	NN	Case=Nom|Number=Sing	12	nsubj	_	Proper=True
11	iyi	iyi	ADV	RB	Number=Sing	12	advmod	_	_
12	çalışmış	çalış	VERB	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Past	22	xcomp	_	_
13	olmasına	ol	AUX	VN	Aspect=Perf|Case=Dat|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	12	aux	_	_
14	rağmen	rağmen	ADP	IN	_	12	mark	_	SpaceAfter=No
15	,	,	PUNCT	,	_	12	punct	_	_
16	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	17	det	_	_
17	fark	fark	NOUN	NN	Number=Sing	18	obj	_	_
18	yaratması	yarat	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Tense=Pres|VerbForm=Ger	22	xcomp	_	_
19	için	için	ADP	IN	_	18	case	_	_
20	çok	çok	ADV	RB	_	22	advmod	_	_
21	geç	geç	ADJ	JJ	Number=Sing	22	compound	_	_
22	kalmıştı	kal	AUX	VB	Aspect=Perf|Evident=Nfh|Mood=Ind|Number=Sing|Person=3|Tense=Pqp	0	root	_	SpaceAfter=No
23	.	.	PUNCT	.	_	22	punct	_	_

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
8	tasarruf	tasarruf	NOUN	NN	Number=Sing	9	compound	_	_
9	hesaplarından	hesap	NOUN	NN	Case=Abl|Number=Sing|Polarity=Pos	10	nmod:arg	_	_
10	farkı	farkı	NOUN	NN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	11	nsubj	_	_
11	olmazdı	ol	VERB	VB	Aspect=Hab|Mood=Gen|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
12	.	.	PUNCT	.	_	11	punct	_	_

~~~


