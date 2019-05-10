---
layout: base
title:  'Statistics of amod in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `amod`

This relation is universal.

512 nodes (5%) are attached to their parents as `amod`.

419 instances of `amod` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.15234375.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (490; 96% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (8; 2% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Gwybyddir	gwybod	VERB	verb	Person=Impers|Tense=Fut	0	root	_	_
2	am	am	ADP	prep	_	3	case	_	_
3	Sadwrn	Sadwrn	NOUN	noun	Gender=Masc|Number=Sing	1	obl	_	_
4	ers	ers	ADP	prep	_	5	case	_	_
5	amserau	amser	NOUN	noun	Gender=Masc|Number=Plur	1	obl	_	_
6	cynhanesyddol	cynhanesyddol	ADJ	pos	Degree=Pos	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	Mae	bod	AUX	aux	Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	rhybudd	rhybudd	NOUN	noun	Gender=Masc|Number=Sing	1	nsubj	_	_
4	yn	yn	ADP	prep	_	6	case	_	_
5	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	1	obl	_	_
7	drwy	trwy	ADP	prep	Mutation=SM	8	case	_	_
8	Gymru	Cymru	PROPN	place	Gender=Fem|Mutation=SM|Number=Sing	6	nmod	_	_
9	gyfan	cyfan	ADJ	pos	Degree=Pos|Mutation=SM	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Ychydig	ychydig	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
2	iawn	iawn	ADV	adv	_	1	advmod	_	_
3	o	o	ADP	prep	_	4	case	_	_
4	dystiolaeth	tystiolaeth	NOUN	noun	Gender=Fem|Mutation=SM|Number=Sing	1	nmod	_	_
5	a	a	PRON	rel	PronType=Rel	6	obj	_	_
6	welir	gweld	VERB	verb	Mutation=SM|Person=Impers|Tense=Fut	4	acl:relcl	_	_
7	o	o	ADP	prep	_	8	case	_	_
8	fywyd	bywyd	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	6	obl	_	_
9	canol	canol	ADJ	pos	Degree=Pos	8	amod	_	_
10	oesol	oesol	ADJ	pos	Degree=Pos	9	amod	_	_
11	Abertawe	Abertawe	PROPN	place	_	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


