---
layout: base
title:  'Statistics of csubj:outer in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `csubj:outer`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:outer`.

1 instances of `csubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 24.

The following 1 pairs of parts of speech are connected with `csubj:outer`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 13 csubj:outer	color:blue
1	Artık	artık	ADV	_	_	4	advmod	_	_
2	bizi	biz	PRON	Pers	Case=Acc|Number=Plur|Person=1|PronType=Prs	4	obj	_	_
3	de	de	PART	Emph	_	2	advmod:emph	_	_
4	görürsün	gör	VERB	_	Aspect=Hab|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	7	ccomp	_	_
5	kardeşim	kardeş	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	4	conj	_	SpaceAfter=No
6	"	"	PUNCT	Punc	_	4	punct	_	_
7	diyerek	de	VERB	Conv	Aspect=Prog|Polarity=Pos|VerbForm=Conv	10	advcl	_	_
8	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
9	ahlaksız	ahlaksız	ADJ	Adj	_	10	amod	_	DerivedFrom=ahlak
10	teklifte	teklif	NOUN	_	Case=Loc|Number=Sing|Person=3	0	root	_	_
11	bulunuyor	bulun	VERB	_	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	10	compound	_	SpaceAfter=No
12	,	,	PUNCT	Comma	_	13	punct	_	_
13	kimisi	kimi	PRON	Quant	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	37	csubj:outer	_	_
14	ise	i	PART	Topic	_	13	discourse	_	_
15	"	"	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
16	sen	sen	PRON	Pers	Case=Nom|Number=Sing|Person=2|PronType=Prs	19	nsubj	_	_
17	de	de	PART	Emph	_	16	advmod:emph	_	_
18	onlara	o	PRON	Pers	Case=Dat|Number=Plur|Person=3|PronType=Prs	19	obl	_	_
19	benzeyeceksin	benze	VERB	_	Aspect=Prosp|Number=Sing|Person=2|Polarity=Pos|Tense=Fut	11	conj	_	_
20	oğlum	oğul	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	19	conj	_	_
21	sonunda	sonunda	ADV	_	_	19	advmod	_	SpaceAfter=No
22	,	,	PUNCT	Comma	_	21	punct	_	_
23	hop	hop	INTJ	_	_	21	conj	_	_
24	hop	hop	INTJ	_	_	23	flat	_	_
25	iso	İSO	INTJ	_	_	23	flat	_	_
26	tooop	tooop	INTJ	_	_	23	flat	_	_
27	iso	İSO	INTJ	_	_	23	flat	_	SpaceAfter=No
28	"	"	PUNCT	Punc	_	27	punct	_	_
29	diye	diye	ADP	PCNom	_	25	case	_	_
30	espri	espri	NOUN	_	Case=Nom|Number=Sing|Person=3	37	advcl	_	_
31	yaparak	yap	VERB	Conv	Aspect=Prog|Polarity=Pos|VerbForm=Conv	30	compound	_	_
32	çevresindekilerle	çevre	NOUN	_	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	37	obl	_	_
33	anlamsız	anlamsız	ADJ	Adj	_	35	amod	_	DerivedFrom=anlam
34	bir	bir	DET	Indef	_	35	det	_	_
35	kahkaha	kahkaha	NOUN	_	Case=Nom|Number=Sing|Person=3	36	nmod:poss	_	_
36	yumağı	yumak	NOUN	_	Case=Acc|Number=Sing|Person=3	37	nsubj	_	_
37	oluşturuyor	oluş	VERB	Ptcp	Aspect=Imp|Polarity=Pos|VerbForm=Part	10	conj	_	_
38	du	y	AUX	Zero	Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	37	cop	_	_
39	.	.	PUNCT	Stop	_	37	punct	_	SpacesAfter=\n

~~~


