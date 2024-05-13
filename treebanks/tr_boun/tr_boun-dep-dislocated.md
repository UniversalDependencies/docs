---
layout: base
title:  'Statistics of dislocated in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `dislocated`

This relation is universal.

23 nodes (0%) are attached to their parents as `dislocated`.

22 instances of `dislocated` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2173913043478.

The following 9 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (7; 30% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 17% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 14 dislocated	color:blue
1	Demirören	Demirören	PROPN	_	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	sözlerini	söz	NOUN	_	Case=Acc|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	obj	_	_
3	şöyle	şöyle	ADV	_	_	4	obl	_	_
4	sürdürdü	sürdür	VERB	_	Evident=Fh|Number=Sing|Person=1|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	:	:	PUNCT	Punc	_	4	punct	_	_
6	"	"	PUNCT	Punc	_	14	punct	_	SpaceAfter=No
7	ABD'li	ABD'li	PROPN	Abr	Case=Nom|Number=Sing|Person=3	8	amod	_	DerivedFrom=ABD
8	kaleci	kaleci	NOUN	_	Case=Nom|Number=Sing|Person=3	14	nsubj	_	DerivedFrom=kale
9	daha	daha	ADV	_	_	10	advmod	_	_
10	önce	önce	ADV	_	_	11	advmod	_	_
11	verdiği	ver	VERB	Ptcp	Aspect=Perf|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	12	acl	_	_
12	sözlerin	söz	NOUN	_	Case=Gen|Number=Plur|Person=3	13	nmod:poss	_	_
13	hiçbirini	hiçbiri	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	14	obj	_	_
14	tutmadı	tut	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Past	3	dislocated	_	SpaceAfter=No
15	.	.	PUNCT	Stop	_	14	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 20 dislocated	color:blue
1	Paul	Paul	PROPN	_	Case=Nom|Number=Sing|Person=3	6	nmod:poss	_	_
2	Pascal	Pascal	PROPN	_	Case=Nom|Number=Sing|Person=3	1	flat	_	_
3	ve	ve	CCONJ	_	_	4	cc	_	_
4	Brenda	Brenda	PROPN	_	Case=Nom|Number=Sing|Person=3	1	conj	_	_
5	Pascal	Pascal	PROPN	_	Case=Nom|Number=Sing|Person=3	4	flat	_	_
6	müzemizi	müze	NOUN	_	Case=Acc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=1	7	obj	_	_
7	ziyaret	ziyaret	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	ettiler	et	VERB	_	Aspect=Perf|Evident=Fh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	7	compound	_	_
9	ve	ve	CCONJ	_	_	12	cc	_	_
10	deftere	defter	NOUN	_	Case=Dat|Number=Sing|Person=3	12	obl	_	_
11	şunu	şu	PRON	Demons	Case=Acc|Number=Sing|Person=3|PronType=Dem	12	obj	_	_
12	yazdılar	yaz	VERB	_	Aspect=Perf|Evident=Fh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	7	conj	_	SpaceAfter=No
13	:	:	PUNCT	Punc	_	12	punct	_	_
14	"	"	PUNCT	Punc	_	20	punct	_	SpaceAfter=No
15	Dünya'nın	Dünya	PROPN	_	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=2	18	nmod:poss	_	_
16	en	en	ADV	_	_	17	advmod	_	_
17	iyi	iyi	ADJ	Adj	_	18	amod	_	_
18	müzelerinden	müze	NOUN	_	Case=Abl|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3	20	nmod:part	_	_
19	bir	bir	DET	Indef	_	20	det	_	_
20	tanesi	tane	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	dislocated	_	SpaceAfter=No
21	.	.	PUNCT	Stop	_	20	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 21 dislocated	color:blue
1	1999/2000	1999/2000	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	2	nummod	_	_
2	sezonunda	sezon	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	9	punct	_	_
4	kadınlar	kadın	NOUN	_	Case=Nom|Number=Plur|Person=3	5	nmod:poss	_	_
5	ligine	lig	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	obl	_	_
6	üç	üç	NUM	ANum	NumType=Card	8	nummod	_	_
7	yeni	yeni	ADJ	Adj	_	8	amod	_	_
8	takım	takım	NOUN	_	Case=Nom|Number=Sing|Person=3	9	nsubj	_	_
9	girdi	gir	VERB	_	Aspect=Perf|Evident=Fh|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
10	:	:	PUNCT	Punc	_	9	punct	_	_
11	İstanbul'dan	İstanbul	PROPN	_	Case=Abl|Number=Sing|Person=3	12	obl	_	_
12	Delta	Delta	NOUN	_	Case=Nom|Number=Sing|Person=3	21	nmod:poss	_	_
13	Mobilyaspor	Mobilyaspor	NOUN	_	Case=Nom|Number=Sing|Person=3	12	flat	_	SpaceAfter=No
14	,	,	PUNCT	Comma	_	15	punct	_	_
15	Marshall	Marshall	PROPN	_	Case=Nom|Number=Sing|Person=3	13	conj	_	_
16	Boysaspor	Boysaspor	NOUN	_	Case=Nom|Number=Sing|Person=3	15	flat	_	_
17	ve	ve	CCONJ	_	_	20	cc	_	_
18	Ankara	Ankara	PROPN	_	Case=Nom|Number=Sing|Person=3	20	nmod:poss	_	_
19	Gazi	gazi	PROPN	_	Case=Nom|Number=Sing|Person=3	20	nmod:poss	_	_
20	Üniversitesi	üniversite	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	conj	_	_
21	ekipleri	ekip	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	8	dislocated	_	SpaceAfter=No
22	.	.	PUNCT	Stop	_	21	punct	_	SpacesAfter=\n

~~~


