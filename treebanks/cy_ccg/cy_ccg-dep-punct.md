---
layout: base
title:  'Statistics of punct in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `punct`

This relation is universal.

3421 nodes (9%) are attached to their parents as `punct`.

2063 instances of `punct` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.78368897983046.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1632; 48% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1238; 36% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (269; 8% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (122; 4% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (57; 2% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (36; 1% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (35; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (20; 1% instances), <tt><a href="cy_ccg-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (7; 0% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 punct	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	angen	angen	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	difrifoli	difrifoli	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	nmod	_	_
4	a	a	CCONJ	cconj	_	5	cc	_	_
5	thyfu	tyfu	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	3	conj	_	_
6	fyny	fyny	ADV	adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 punct	color:blue
1	Yr	y	PART	aff	_	7	advmod	_	_
2	oedd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
3	yr	y	DET	art	_	4	det	_	_
4	wythnos	wythnos	NOUN	noun	Gender=Fem|Number=Sing	7	nsubj	_	_
5	gyntaf	cynnar	ADJ	ord	Degree=Sup|Mutation=SM|NumType=Ord	4	advmod	_	_
6	yn	yn	PART	pred	_	7	case:pred	_	_
7	ardderchog	ardderchog	ADJ	pos	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	7	punct	_	SpacesAfter=\n

~~~


