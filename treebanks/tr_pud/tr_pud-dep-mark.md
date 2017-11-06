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
1	O	_	PRON	PRD	Definite=Def|Number=Sing|Polarity=Pos	3	obl	_	_
2	kadar	_	ADP	IN	_	1	case	_	_
3	başarılı	_	ADJ	JJ	Number=Sing	19	advcl	_	_
4	ydı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	3	cop	_	_
5	ki	_	SCONJ	SCONJ	_	3	mark	_	_
6	ordu	_	NOUN	NN	Case=Nom|Number=Sing	12	nsubj	_	_
7	savaştan	_	NOUN	NN	Case=Abl|Number=Sing	12	obl	_	_
8	sonra	_	ADP	IN	_	7	case	_	_
9	uzun	_	ADJ	JJ	Number=Sing	10	amod	_	_
10	yıllar	_	NOUN	NN	Number=Plur	12	obl:tmod	_	_
11	kullanmaya	_	NOUN	VN	Aspect=Perf|Case=Dat|Mood=Ind|Tense=Pres|VerbForm=Ger	12	advcl	_	_
12	devam	_	NOUN	NN	Number=Sing	0	root	_	_
13	etti	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	12	fixed	_	_
14	ve	_	CCONJ	CCONJ	_	19	cc	_	_
15	1980'lerde	_	NOUN	NN	Case=Loc|Number=Plur	19	obl:tmod	_	_
16	bazı	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	17	det	_	_
17	ülkelerde	_	NOUN	NN	Case=Loc|Number=Plur	19	advmod	_	_
18	hala	_	ADV	RB	_	19	advmod	_	_
19	kullanımda	_	NOUN	NN	Case=Loc|Number=Sing	12	conj	_	_
20	ydı	_	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past	19	cop	_	_
21	.	_	PUNCT	.	_	19	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mark	color:blue
1	Sinema	_	NOUN	NN	Case=Nom|Number=Sing	4	nsubj	_	_
2	o	_	PRON	PRI	Definite=Def|Number=Sing|Polarity=Pos	4	obl	_	_
3	kadar	_	ADP	IN	_	2	case	_	_
4	değişti	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	11	advcl	_	_
5	ki	_	SCONJ	SCONJ	_	4	mark	_	SpaceAfter=No
6	;	_	PUNCT	:	_	4	punct	_	_
7	Hollywood	_	PROPN	PROPN	Case=Nom|Number=Sing	11	nsubj	_	Proper=True
8	aile	_	NOUN	NN	Number=Sing	9	compound	_	_
9	izleyicisini	_	NOUN	NN	Case=Acc|Number=Sing|Polarity=Pos	11	obj	_	_
10	kendinden	_	PRON	PRR	Case=Abl|Number=Sing|Reflex=Yes	11	advmod	_	_
11	uzaklaştırdı	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Cau	0	root	_	SpaceAfter=No
12	.	_	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 15 mark	color:blue
1	Hack	_	X	FW	_	2	compound	_	Proper=True
2	Forums'ın	_	X	FW	_	3	nmod:poss	_	Proper=True
3	kurucusu	_	NOUN	VN	Number=Sing|Number[psor]=Sing|Person[psor]=3	4	compound	_	_
4	Jesse	_	PROPN	PROPN	Number=Sing	28	nsubj	_	Proper=True
5	LaBrocca	_	PROPN	PROPN	Case=Nom|Number=Sing	4	flat:name	_	Proper=True
6	bölümün	_	NOUN	NN	Case=Gen|Number=Sing	8	nmod:poss	_	_
7	kapatılma	_	NOUN	VN	Aspect=Perf|Case=Nom|Mood=Ind|Tense=Pres|VerbForm=Ger|Voice=Pass	8	compound	_	_
8	sebebini	_	NOUN	NN	Case=Acc|Number=Sing|Number[psor]=Sing|Person[psor]=3	9	obj	_	_
9	açıklayan	_	ADJ	VJ	Number=Sing|Polarity=Pos	11	acl:relcl	_	_
10	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	11	det	_	_
11	mesajda	_	NOUN	NN	Case=Loc|Number=Sing	28	advmod	_	_
12	"	_	PUNCT	``	_	24	punct	_	SpaceAfter=No
13	Ne	_	ADV	WRB	Number=Sing|PronType=Int	14	advmod	_	_
14	yazık	_	NOUN	NN	Number=Sing	24	advcl	_	_
15	ki	_	SCONJ	SCONJ	_	14	mark	_	SpaceAfter=No
16	,	_	PUNCT	,	_	14	punct	_	_
17	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	18	det	_	_
18	kez	_	NOUN	NN	Number=Sing	24	obl:tmod	_	_
19	daha	_	ADV	RB	_	18	advmod:emph	_	_
20	azınlığın	_	NOUN	NN	Case=Gen|Number=Sing	21	nmod:poss	_	_
21	talebiyle	_	NOUN	NN	Case=Ins|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	advmod	_	_
22	çoğunluk	_	NOUN	NN	Case=Nom|Number=Sing	24	nsubj	_	_
23	eğlencesinden	_	NOUN	NN	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3	24	advmod	_	_
24	oldu	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	28	xcomp	_	SpaceAfter=No
25	.	_	PUNCT	.	_	24	punct	_	SpaceAfter=No
26	"	_	PUNCT	''	_	24	punct	_	_
27	diye	_	ADP	IN	_	24	case	_	_
28	yazdı	_	VERB	VB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	0	root	_	SpaceAfter=No
29	.	_	PUNCT	.	_	28	punct	_	_

~~~


