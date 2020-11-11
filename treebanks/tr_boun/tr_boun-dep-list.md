---
layout: base
title:  'Statistics of list in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `list`

This relation is universal.

41 nodes (0%) are attached to their parents as `list`.

40 instances of `list` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.92682926829268.

The following 8 pairs of parts of speech are connected with `list`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (17; 41% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (7; 17% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-NUM.html">NUM</a></tt> (3; 7% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 list	color:blue
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


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 list	color:blue
1	02.08.	02.08	NUM	ANum	NumType=Ord	0	root	_	SpaceAfter=No
2	1935	1935	NUM	ANum	NumType=Card	1	list	_	_
3	Saat	saat	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	list	_	_
4	22	22	NUM	ANum	NumType=Card	1	list	_	SpaceAfter=No
5	.50"	.50"	NUM	ANum	NumType=Card	1	list	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 list	color:blue
1	Sinan	Sinan	PROPN	Prop	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
2	Engin'in	Engin	PROPN	Prop	Case=Gen|Number=Sing|Person=3	1	flat	_	_
3	26	26	NUM	ANum	NumType=Card	4	nummod	_	_
4	Nisan'da	Nisan	PROPN	Prop	Case=Loc|Number=Sing|Person=3	5	obl	_	_
5	başlayan	başla	VERB	Verb	Polarity=Pos|Tense=Pres|VerbForm=Part	7	acl	_	_
6	Brezilya	Brezilya	PROPN	Prop	Case=Nom|Number=Sing|Person=3	7	nmod:poss	_	_
7	seferi	sefer	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	13	punct	_	_
9	6	6	NUM	ANum	NumType=Card	10	nummod	_	_
10	Mayıs	mayıs	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	nmod:poss	_	_
11	Pazartesi	pazartesi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	list	_	_
12	günü	gün	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	13	obl	_	_
13	sona	son	ADJ	NAdj	Case=Dat|Number=Sing|Person=3	0	root	_	_
14	erecek	er	VERB	Verb	Aspect=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut	13	compound	_	SpaceAfter=No
15	.	.	PUNCT	Punc	_	13	punct	_	SpacesAfter=\n

~~~


