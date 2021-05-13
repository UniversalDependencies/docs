---
layout: base
title:  'Statistics of dislocated in UD_Turkish-Penn'
udver: '2'
---

## Treebank Statistics: UD_Turkish-Penn: Relations: `dislocated`

This relation is universal.

9 nodes (0%) are attached to their parents as `dislocated`.

5 instances of `dislocated` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.66666666666667.

The following 5 pairs of parts of speech are connected with `dislocated`: <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (5; 56% instances), <tt><a href="tr_penn-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_penn-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="tr_penn-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_penn-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 dislocated	color:blue
1	Jaguar	jaguar	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	(	(	PUNCT	_	_	1	punct	_	_
3	Reçetesiz	reçete	ADJ	_	_	4	advmod	_	_
4	Satılan	sat	ADJ	_	_	5	acl	_	_
5	İlaç	ilaç	NOUN	_	Case=Nom|Number=Sing|Person=3	1	dislocated	_	_
6	;	;	PUNCT	_	_	1	punct	_	_
7	Sembol	sembol	NOUN	_	Case=Nom|Number=Sing|Person=3	1	dislocated	_	_
8	:	:	PUNCT	_	_	9	punct	_	_
9	JAGRY	JAGRY	PROPN	_	Case=Nom|Number=Sing	7	appos	_	_
10	)	)	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 dislocated	color:blue
1	Ayrıca	ayrıca	ADV	_	_	7	dislocated	_	_
2	birçok	birçok	DET	_	_	3	det	_	_
3	aracı	ara	NOUN	_	Case=Nom|Number=Sing|Person=3	4	amod	_	_
4	kurum	kuru	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	nmod	_	_
5	yetkilisi	yetkili	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	nsubj	_	_
6	de	de	CCONJ	_	_	5	advmod	_	_
7	iyimser	iyimser	ADJ	_	_	0	root	_	_
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 dislocated	color:blue
1	İrlanda-Sovyet	İrlanda-Sovyet	PROPN	_	Case=Nom|Number=Sing	3	nmod	_	_
2	havacılık	havacılık	NOUN	_	Case=Nom|Number=Sing|Person=3	3	nmod	_	_
3	bağlantısı	bağlantı	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	nsubj	_	_
4	burada	burada	ADV	_	_	7	dislocated	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	Shannon	Shannon	PROPN	_	Case=Nom|Number=Sing	7	nmod	_	_
7	Havalimanı'nda	havaliman	NOUN	_	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	12	obl	_	_
8	hâlâ	hâlâ	ADV	_	_	12	advmod	_	_
9	canlı	canlı	NOUN	_	Case=Nom|Number=Sing|Person=3	12	amod	_	_
10	ve	ve	CCONJ	_	_	11	cc	_	_
11	iyi	iyi	ADJ	_	_	9	conj	_	_
12	durumda	durum	NOUN	_	Case=Loc|Number=Sing|Person=3	0	root	_	_
13	.	.	PUNCT	_	_	12	punct	_	_

~~~


