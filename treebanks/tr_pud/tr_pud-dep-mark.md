---
layout: base
title:  'Statistics of mark in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `mark`

This relation is universal.

6 nodes (0%) are attached to their parents as `mark`.

6 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33333333333333.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 33% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 33% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 17% instances), <tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mark	color:blue
1	O	o	PRON	PRD	Definite=Def|Number=Sing|Polarity=Pos	3	obl	_	_
2	kadar	kadar	ADP	IN	_	1	case	_	_
3	başarılı	_	ADJ	JJ	Number=Sing	19	advcl	_	_
4	ydı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	ki	ki	SCONJ	SCONJ	_	3	mark	_	_
6	ordu	ordu	NOUN	NN	Case=Nom|Number=Sing	12	nsubj	_	_
7	savaştan	savaştan	NOUN	NN	Case=Abl|Number=Sing	12	obl	_	_
8	sonra	sonra	ADP	IN	_	7	case	_	_
9	uzun	uzun	ADJ	JJ	Number=Sing	10	amod	_	_
10	yıllar	yıl	NOUN	NN	Number=Plur	12	obl:tmod	_	_
11	kullanmaya	kullan	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	12	advcl	_	_
12	devam	devam	NOUN	NN	Number=Sing	0	root	_	_
13	etti	et	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	12	fixed	_	_
14	ve	ve	CCONJ	CCONJ	_	19	cc	_	_
15	1980'lerde	1980'	NOUN	NN	Case=Loc|Number=Plur	19	obl:tmod	_	_
16	bazı	bazı	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	17	det	_	_
17	ülkelerde	ülke	NOUN	NN	Case=Loc|Number=Plur	19	advmod	_	_
18	hala	hala	ADV	RB	_	19	advmod	_	_
19	kullanımda	kullan	NOUN	NN	Case=Loc|Number=Sing	12	conj	_	_
20	ydı	i	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past	19	cop	_	_
21	.	.	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mark	color:blue
1	Sinema	Sine	NOUN	NN	Case=Nom|Number=Sing	4	nsubj	_	_
2	o	o	PRON	PRI	Definite=Def|Number=Sing|Polarity=Pos	4	obl	_	_
3	kadar	kadar	ADP	IN	_	2	case	_	_
4	değişti	değiş	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	advcl	_	_
5	ki	ki	SCONJ	SCONJ	_	4	mark	_	SpaceAfter=No
6	;	;	PUNCT	:	_	4	punct	_	_
7	Hollywood	Hollywood	PROPN	PROPN	Case=Nom|Number=Sing	11	nsubj	_	Proper=True
8	aile	aile	NOUN	NN	Number=Sing	9	compound	_	_
9	izleyicisini	izleyicis	NOUN	NN	Case=Acc|Number=Sing|Polarity=Pos	11	obj	_	_
10	kendinden	kendi	PRON	PRR	Case=Abl|Number=Sing|Reflex=Yes	11	advmod	_	_
11	uzaklaştırdı	uzaklaş	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	0	root	_	SpaceAfter=No
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
3	kurucusu	kurucu	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	compound	_	_
4	Jesse	Jesse	PROPN	PROPN	Number=Sing	28	nsubj	_	Proper=True
5	LaBrocca	LaBrocca	PROPN	PROPN	Case=Nom|Number=Sing	4	flat:name	_	Proper=True
6	bölümün	bölüm	NOUN	NN	Case=Gen|Number=Sing	8	nmod:poss	_	_
7	kapatılma	kapat	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger|Voice=Pass	8	compound	_	_
8	sebebini	sebep	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	açıklayan	açıkla	ADJ	VJ	Number=Sing|Polarity=Pos	11	acl:relcl	_	_
10	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	11	det	_	_
11	mesajda	mesaj	NOUN	NN	Case=Loc|Number=Sing	28	advmod	_	_
12	"	"	PUNCT	``	_	24	punct	_	SpaceAfter=No
13	Ne	ne	ADV	WRB	Number=Sing|PronType=Int	14	advmod	_	_
14	yazık	yazık	NOUN	NN	Number=Sing	24	advcl	_	_
15	ki	ki	SCONJ	SCONJ	_	14	mark	_	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	_	_
17	bir	bir	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	18	det	_	_
18	kez	kez	NOUN	NN	Number=Sing	24	obl:tmod	_	_
19	daha	daha	ADV	RB	_	18	advmod:emph	_	_
20	azınlığın	azınlık	NOUN	NN	Case=Gen|Number=Sing	21	nmod:poss	_	_
21	talebiyle	talebi	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	advmod	_	_
22	çoğunluk	çoğunluk	NOUN	NN	Case=Nom|Number=Sing	24	nsubj	_	_
23	eğlencesinden	eğlence	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	advmod	_	_
24	oldu	ol	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	28	xcomp	_	SpaceAfter=No
25	.	_	PUNCT	.	_	24	punct	_	SpaceAfter=No
26	"	_	PUNCT	''	_	24	punct	_	_
27	diye	diye	ADP	IN	_	24	case	_	_
28	yazdı	yaz	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
29	.	.	PUNCT	.	_	28	punct	_	_

~~~


