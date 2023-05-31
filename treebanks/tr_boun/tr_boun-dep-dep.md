---
layout: base
title:  'Statistics of dep in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `dep`

This relation is universal.
There are 1 language-specific subtypes of `dep`: <tt><a href="tr_boun-dep-dep-der.html">dep:der</a></tt>.

12 nodes (0%) are attached to their parents as `dep`.

8 instances of `dep` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.83333333333333.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 25% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 8% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-X.html">X</a></tt> (1; 8% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 8% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dep	color:blue
1	Adam	adam	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nsubj	_	_
2	yerinden	yer	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	obl	_	_
3	kımıldamadı	kımılda	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Stop	_	3	punct	_	_
5	Kadına	kadın	NOUN	_	Case=Dat|Number=Sing|Person=3	3	dep	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	5	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dep	color:blue
1	5	5	NUM	ANum	NumType=Card	12	dep	_	SpaceAfter=No
2	)	)	PUNCT	CPar	_	1	punct	_	_
3	Altında	alt	NUM	NNum	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	amod	_	_
4	ki	ki	PART	Attr	_	3	dep:der	_	_
5	yapışkan	yapışkan	ADJ	Adj	_	6	amod	_	_
6	plastiği	plastik	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	çıkarıp	çık	VERB	Conv	Polarity=Pos|VerbForm=Conv|Voice=Cau	12	advcl	_	_
8	duvara	duvar	NOUN	_	Case=Dat|Number=Sing|Person=3	10	iobj	_	_
9	resim	resim	NOUN	_	Case=Acc|Number=Sing|Person=3	10	obj	_	_
10	asmak	as	VERB	Vnoun	Case=Nom|Number=Sing|Person=3|Polarity=Pos|VerbForm=Vnoun	12	advcl	_	_
11	için	için	ADP	PCNom	_	10	case	_	_
12	kullanabilirsin	kullan	VERB	_	Aspect=Hab|Mood=Pot|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
13	.	.	PUNCT	Stop	_	12	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 9 dep	color:blue
1	"	"	PUNCT	Punc	_	9	punct	_	SpaceAfter=No
2	O'na	O'na	NOUN	_	Case=Acc|Number=Sing|Person=3	3	obj	_	_
3	uyup	uy	VERB	Conv	Polarity=Pos|VerbForm=Conv	4	advcl	_	_
4	denize	deniz	NOUN	_	Case=Dat|Number=Sing|Person=3	5	obl	_	_
5	açıldığın	aç	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=2|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	9	advcl	_	_
6	için	için	ADP	PCNom	_	5	case	_	_
7	onun	o	PRON	Pers	Case=Gen|Number=Sing|Person=3|PronType=Prs	9	obl	_	_
8	kadar	kadar	ADP	PCDat	_	7	case	_	_
9	suçlusun	suç	VERB	_	Case=Nom|Number=Sing|Person=2	21	dep	_	SpaceAfter=No
10	"	"	PUNCT	Punc	_	9	punct	_	_
11	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	21	nsubj	_	SpaceAfter=No
12	:	:	PUNCT	Punc	_	11	punct	_	_
13	"O'nunla	"O'nun	PRON	Demons	Case=Ins|Number=Sing|Person=3|PronType=Dem	14	obl	_	_
14	gittim	git	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	21	ccomp	_	SpaceAfter=No
15	,	,	PUNCT	Comma	_	14	punct	_	_
16	çünkü	çünkü	CCONJ	_	_	18	cc	_	_
17	o'nunla	o'nun	PRON	Demons	Case=Ins|Number=Sing|Person=3|PronType=Dem	21	obl	_	_
18	birlikte	birlikte	ADP	PCIns	_	14	conj	_	_
19	ydim	y	AUX	Zero	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past	18	cop	_	_
20	"	"	PUNCT	Punc	_	19	punct	_	SpaceAfter=No
21	dedim	de	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
22	.	.	PUNCT	Stop	_	21	punct	_	SpacesAfter=\n

~~~


