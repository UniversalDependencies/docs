---
layout: base
title:  'Statistics of orphan in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `orphan`

This relation is universal.

41 nodes (0%) are attached to their parents as `orphan`.

31 instances of `orphan` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.78048780487805.

The following 19 pairs of parts of speech are connected with `orphan`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (9; 22% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (5; 12% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (4; 10% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (3; 7% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (3; 7% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 orphan	color:blue
1	Şu	şu	DET	Det	_	2	det	_	_
2	dağın	dağ	NOUN	_	Case=Gen|Number=Sing|Person=3	3	nmod:poss	_	_
3	eteğinde	etek	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl	_	_
4	bir	bir	DET	Indef	_	5	det	_	_
5	köy	köy	NOUN	_	Case=Nom|Number=Sing|Person=3	13	orphan	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	13	punct	_	_
7	köyün	köy	NOUN	_	Case=Gen|Number=Sing|Person=3	12	nmod:poss	_	_
8	de	de	PART	Emph	_	7	advmod:emph	_	_
9	deli	del	ADJ	Adj	_	12	amod	_	DerivedFrom=de
10	dolu	dolu	ADJ	Adj	_	9	compound:redup	_	DerivedFrom=do
11	bir	bir	DET	Indef	_	12	det	_	_
12	çobanı	çoban	NOUN	_	Case=Acc|Number=Sing|Person=3	13	nsubj	_	_
13	varmış	var	NOUN	Exist	Case=Nom|Number=Sing|Person=3|Polarity=Pos	0	root	_	_
14	mış	y	AUX	Zero	Evident=Nfh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	13	cop	_	_
15	.	.	PUNCT	Stop	_	13	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 orphan	color:blue
1	Önce	önce	ADV	_	_	2	advmod	_	_
2	güzelliğini	güzellik	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	orphan	_	DerivedFrom=güzel|SpaceAfter=No
3	,	,	PUNCT	Comma	_	5	punct	_	_
4	sonra	sonra	ADV	_	_	5	advmod	_	_
5	içtenliğini	içtenlik	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	conj	_	DerivedFrom=iç|SpaceAfter=No
6	,	,	PUNCT	Comma	_	7	punct	_	_
7	ardından	art	NOUN	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	_
8	dostluğunu	dostluk	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obj	_	DerivedFrom=dost
9	sunuyorsun	sun	VERB	_	Aspect=Imp|Number=Sing|Person=2|Polarity=Pos|Tense=Pres	0	root	_	_
10	bana	ben	PRON	Pers	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	iobj	_	SpaceAfter=No
11	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 29 26 orphan	color:blue
1	Örneğin	örnek	ADV	_	_	30	advmod	_	_
2	1600	1600	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	3	nummod	_	_
3	senesinde	sene	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	obl:tmod	_	_
4	500	500	NUM	ANum	NumType=Card	5	nummod	_	_
5	milyon	milyon	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	8	acl	_	_
6	olan	ol	AUX	Ptcp	Polarity=Pos|Tense=Pres|VerbForm=Part	5	cop	_	_
7	dünya	dünya	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod:poss	_	_
8	nüfusu	nüfus	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	30	nsubj	_	_
9	1850	1850	NUM	Year	Case=Nom|Number=Sing|Person=3	10	nummod	_	_
10	senesinde	sene	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	30	obl:tmod	_	_
11	1	1	NUM	ANum	NumType=Card	12	nummod	_	_
12	milyara	milyar	NOUN	_	Case=Dat|Number=Sing|Person=3	30	obj	_	SpaceAfter=No
13	,	,	PUNCT	Comma	_	17	punct	_	_
14	1952	1952	NUM	Year	Number=Sing|Person=3	17	orphan	_	typo=yes
15	de	de	PART	Separ	_	14	fixed	_	typo=yes
16	1	1	NUM	ANum	NumType=Card	17	nummod	_	_
17	milyar	milyar	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	12	conj	_	_
18	600	600	NUM	ANum	NumType=Card	19	nummod	_	_
19	milyona	milyon	NUM	NNum	Case=Dat|Number=Sing|NumType=Card|Person=3	17	flat	_	SpaceAfter=No
20	,	,	PUNCT	Comma	_	24	punct	_	_
21	1962	1962	NUM	Year	Number=Sing|Person=3	24	orphan	_	typo=yes
22	de	de	PART	Separ	_	21	fixed	_	typo=yes
23	3	3	NUM	ANum	NumType=Card	24	nummod	_	_
24	milyara	milyar	NUM	_	Case=Dat|Number=Sing|NumType=Card|Person=3	12	conj	_	SpaceAfter=No
25	,	,	PUNCT	Comma	_	29	punct	_	_
26	1980	1980	NUM	Year	Number=Sing|Person=3	29	orphan	_	typo=yes
27	de	de	PART	Separ	_	26	fixed	_	typo=yes
28	4	4	NUM	ANum	NumType=Card	29	nummod	_	_
29	milyara	milyar	NUM	NNum	Case=Dat|Number=Sing|NumType=Card|Person=3	12	conj	_	_
30	ulaşmıştır	ulaş	VERB	_	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
31	.	.	PUNCT	Stop	_	30	punct	_	SpacesAfter=\n

~~~


