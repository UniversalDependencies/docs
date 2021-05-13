---
layout: base
title:  'Statistics of cc in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `cc`

This relation is universal.

1131 nodes (3%) are attached to their parents as `cc`.

1130 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6763925729443.

The following 12 pairs of parts of speech are connected with `cc`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (692; 61% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (201; 18% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (104; 9% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (58; 5% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (22; 2% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (22; 2% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (13; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (10; 1% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (4; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	angen	angen	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	difrifoli	difrifoli	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	nmod	_	_
4	a	a	CCONJ	cconj	_	5	cc	_	_
5	thyfu	tyfu	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	3	conj	_	_
6	fyny	fyny	ADV	adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ond	ond	CCONJ	cconj	_	3	cc	_	_
2	nid	ni	PART	neg	_	3	advmod	_	_
3	oes	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	3	nsubj	_	_
5	i	i	ADP	iprep	_	6	case	_	_
6	e	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obl	_	_
7	fod	bod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	4	acl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Pont	pont	NOUN	noun	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	,	,	PUNCT	punct	_	3	punct	_	_
3	pontydd	pont	NOUN	noun	Gender=Fem|Number=Plur	1	conj	_	_
4	a	a	CCONJ	cconj	_	5	cc	_	_
5	mwy	mawr	ADJ	cmp	Degree=Cmp	1	conj	_	_
6	o	o	ADP	prep	_	7	case	_	_
7	bontydd	pont	NOUN	noun	Gender=Fem|Mutation=SM|Number=Plur	5	nmod	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	1	punct	_	_

~~~


