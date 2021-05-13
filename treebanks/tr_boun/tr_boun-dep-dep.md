---
layout: base
title:  'Statistics of dep in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `dep`

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

6 instances of `dep` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.88888888888889.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (2; 22% instances), <tt><a href="tr_boun-pos-ADP.html">ADP</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 dep	color:blue
1	5	5	NUM	ANum	NumType=Card	12	dep	_	SpaceAfter=No
2	)	)	PUNCT	Punc	_	1	punct	_	_
3	Altında	alt	NUM	NNum	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	6	amod	_	_
4	ki	ki	ADP	Rel	_	3	case	_	_
5	yapışkan	yapışkan	ADJ	Adj	_	6	amod	_	_
6	plastiği	plastik	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obj	_	_
7	çıkarıp	çık	VERB	Verb	Polarity=Pos|Voice=Cau	12	advcl	_	_
8	duvara	duvar	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	iobj	_	_
9	resim	resim	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	obj	_	_
10	asmak	as	VERB	Verb	Case=Nom|Polarity=Pos	12	advcl	_	_
11	için	için	ADP	PCNom	_	10	case	_	_
12	kullanabilirsin	kullan	VERB	Verb	Aspect=Hab|Mood=Pot|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
13	.	.	PUNCT	Punc	_	12	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 dep	color:blue
1	(	(	PUNCT	Punc	_	4	punct	_	SpaceAfter=No
2	beyin	beyin	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
3	şimdilik	şimdilik	ADV	Noun	_	4	advmod	_	_
4	dursun	Dursun	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	dep	_	SpaceAfter=No
5	)	)	PUNCT	Punc	_	4	punct	_	_
6	"bir	"bir	DET	ANum	_	7	det	_	_
7	tek	tek	ADJ	Adj	_	8	amod	_	_
8	insana	insan	NOUN	Noun	Case=Dat|Number=Sing|Person=3	10	obl	_	SpaceAfter=No
9	"	"	PUNCT	Punc	_	8	punct	_	_
10	ait	ait	ADP	PCDat	_	0	root	_	_
11	tir	i	AUX	Zero	Case=Nom|Number=Sing|Person=3	8	cop	_	_
12	.	.	PUNCT	Punc	_	10	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 dep	color:blue
1	*	*	PUNCT	Punc	_	5	punct	_	_
2	1937	1937	NUM	ANum	NumType=Card	5	dep	_	_
3	Köylerde	köy	NOUN	Noun	Case=Loc|Number=Plur|Person=3	5	obl	_	_
4	eğitmen	eğitmen	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod:poss	_	_
5	okulları	okul	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	0	root	_	SpaceAfter=No
6	,	,	PUNCT	Punc	_	5	punct	_	_
7	(	(	PUNCT	Punc	_	9	punct	_	SpaceAfter=No
8	11	11	NUM	ANum	NumType=Card	9	nummod	_	_
9	Haziran	Haziran	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	obl	_	_
10	1937	1937	NUM	ANum	NumType=Card	9	list	_	SpaceAfter=No
11	)	)	PUNCT	Punc	_	9	punct	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	9	punct	_	SpacesAfter=\n

~~~


