---
layout: base
title:  'Statistics of dep:der in UD_Turkish-BOUN'
udver: '2'
---

## Treebank Statistics: UD_Turkish-BOUN: Relations: `dep:der`

This relation is a language-specific subtype of <tt><a href="tr_boun-dep-dep.html">dep</a></tt>.

582 nodes (0%) are attached to their parents as `dep:der`.

582 instances of `dep:der` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01718213058419.

The following 9 pairs of parts of speech are connected with `dep:der`: <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (440; 76% instances), <tt><a href="tr_boun-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (81; 14% instances), <tt><a href="tr_boun-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (21; 4% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (20; 3% instances), <tt><a href="tr_boun-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (13; 2% instances), <tt><a href="tr_boun-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="tr_boun-pos-NUM.html">NUM</a></tt>-<tt><a href="tr_boun-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="tr_boun-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_boun-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="tr_boun-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_boun-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dep:der	color:blue
1	Dünya	Dünya	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	ve	ve	CCONJ	Conj	_	5	cc	_	_
3	yüzeyinde	yüzey	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	5	nmod	_	_
4	ki	ki	PART	Attr	_	3	dep:der	_	_
5	varoluş	varoluş	NOUN	_	Case=Nom|Number=Sing|Person=3	1	conj	_	SpaceAfter=No
6	,	,	PUNCT	Comma	_	8	punct	_	_
7	vizyon	vizyon	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod	_	_
8	realite	realite	NOUN	_	Case=Nom|Number=Sing|Person=3	1	conj	_	_
9	dir	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	8	cop	_	_
10	.	.	PUNCT	Stop	_	8	punct	_	SpacesAfter=\r\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:der	color:blue
1	Türkçe'de	Türkçe	PROPN	_	Case=Loc|Number=Sing|Person=3	3	nmod	_	_
2	ki	ki	PART	Attr	_	1	dep:der	_	_
3	pop	pop	NOUN	_	Case=Acc|Number=Sing|Person=3	9	obj	_	_
4	ve	ve	CCONJ	_	_	5	cc	_	_
5	arabeski	arabesk	NOUN	_	Case=Acc|Number=Sing|Person=3	3	conj	_	_
6	hiçbir	hiçbir	DET	Det	_	8	det	_	_
7	ağırlık	ağırlık	NOUN	_	Case=Nom|Number=Sing|Person=3	8	nmod:poss	_	DerivedFrom=ağır
8	kavramına	kavram	NOUN	_	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	9	iobj	_	_
9	sokamayız	sok	VERB	_	Aspect=Hab|Number=Plur|Person=1|Polarity=Neg|Tense=Pres	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Stop	_	9	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep:der	color:blue
1	Bizim	biz	PRON	Pers	Case=Nom|Number=Plur|Person=3	5	nsubj	_	_
2	kiler	ki	PART	Attr	_	1	dep:der	_	_
3	Nasrettin	Nasrettin	PROPN	_	Case=Nom|Number=Sing|Person=3	5	obl	_	_
4	Hocaya	hoca	PROPN	_	Case=Dat|Number=Sing|Person=3	3	flat	_	_
5	sormuşlar	sor	VERB	_	Evident=Nfh|Number=Plur|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
6	:	:	PUNCT	Punc	_	5	punct	_	SpacesAfter=\n

~~~


