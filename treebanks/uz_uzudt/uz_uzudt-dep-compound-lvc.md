---
layout: base
title:  'Statistics of compound:lvc in UD_Uzbek-UzUDT'
udver: '2'
---

## Treebank Statistics: UD_Uzbek-UzUDT: Relations: `compound:lvc`

This relation is a language-specific subtype of <tt><a href="uz_uzudt-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="uz_uzudt-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="uz_uzudt-dep-compound-svc.html">compound:svc</a></tt>.

21 nodes (0%) are attached to their parents as `compound:lvc`.

18 instances of `compound:lvc` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 4 pairs of parts of speech are connected with `compound:lvc`: <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt> (10; 48% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (9; 43% instances), <tt><a href="uz_uzudt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="uz_uzudt-pos-VERB.html">VERB</a></tt>-<tt><a href="uz_uzudt-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:lvc	color:blue
1	nima	nima	PRON	P	Case=Nom|PronType=Int	9	obl	_	_
2	uchun	uchun	ADP	R	_	1	case	_	_
3	birov	birov	PRON	P	Case=Nom|PronType=Ind	9	nsubj	_	_
4	uni	u	PRON	P	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	_
5	shuncha	shuncha	DET	P	PronType=Ind	7	det	_	_
6	koʻp	koʻp	ADJ	A	_	7	amod	_	_
7	pulga	pul	NOUN	N	Case=Dat	9	obl	_	_
8	sotib	sotib	NOUN	N	Case=Nom	9	compound:lvc	_	_
9	oldi	olmoq	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
10	?	?	PUNCT	Y	_	9	punct	_	_
11	›	›	PUNCT	Y	_	9	punct	_	_
12	›	›	PUNCT	Y	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:lvc	color:blue
1	-	-	PUNCT	Y	_	8	punct	_	_
2	kema	kema	NOUN	N	_	4	nsubj	_	_
3	choʻkib	choʻk	VERB	V	_	4	compound:lvc	_	_
4	ketishga	ket	VERB	V	Case=Dat	8	nmod	_	_
5	yana	yana	ADV	T	_	8	advmod	_	_
6	qancha	qancha	DET	P	PronType=Int	7	det	_	_
7	daqiqa	daqiqa	NOUN	N	Case=Nom	8	nsubj	_	_
8	bor	bor	VERB	A	Mood=Imp|VerbForm=Fin	0	root	_	_
9	?	?	PUNCT	Y	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 compound:lvc	color:blue
1	<	<	PUNCT	Y	_	17	punct	_	_
2	<	<	PUNCT	Y	_	17	punct	_	_
3	albatta	albatta	ADV	T	_	17	discourse	_	_
4	!	!	PUNCT	N	_	3	punct	_	_
5	Agar	Agar	SCONJ	C	_	13	cc	_	_
6	bir	bir	NUM	M	_	7	nummod	_	_
7	odam	odam	NOUN	N	Case=Nom	13	nsubj	_	_
8	oʻtib	oʻtib	VERB	V	Aspect=Perf|VerbForm=Conv	9	compound:lvc	_	_
9	ketgan	ket	NOUN	N	_	11	amod	_	_
10	shundoq	shu	ADV	P	_	11	advmod	_	_
11	paytlarni	payt	NOUN	V	Case=Acc|Number=Plur	13	obj	_	_
12	xotirasida	xotira	NOUN	N	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	13	nmod	_	_
13	saqlayolmasa	saqla	NOUN	N	_	17	advcl	_	_
14	uni	u	PRON	P	Case=Acc|Number=Sing|Person=3|PronType=Prs	16	obj	_	_
15	odam	odam	NOUN	N	Case=Nom	16	nsubj	_	_
16	deb	de	VERB	V	_	17	advcl	_	_
17	boʻlmaydi	boʻl	VERB	V	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	_	_
18	?	?	PUNCT	Y	_	17	punct	_	_

~~~


