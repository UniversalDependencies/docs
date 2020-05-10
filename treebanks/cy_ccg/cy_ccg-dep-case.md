---
layout: base
title:  'Statistics of case in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `case`

This relation is universal.
There are 1 language-specific subtypes of `case`: <tt><a href="cy_ccg-dep-case-pred.html">case:pred</a></tt>.

3346 nodes (11%) are attached to their parents as `case`.

3344 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38942020322773.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (2689; 80% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (272; 8% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (158; 5% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (127; 4% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (55; 2% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (16; 0% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (9; 0% instances), <tt><a href="cy_ccg-pos-PART.html">PART</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="cy_ccg-pos-DET.html">DET</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt>-<tt><a href="cy_ccg-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	eilio	eilio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	Elin	Elin	PROPN	person	_	4	obj	_	_
6	Jones	Jones	PROPN	person	_	5	flat:name	_	_
7	ar	ar	ADP	prep	_	8	case	_	_
8	gyfer	cyfer	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
9	swydd	swydd	NOUN	noun	Gender=Fem|Number=Sing	8	nmod	_	_
10	y	y	DET	art	_	11	det	_	_
11	Llywydd	llywydd	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Mi	mi	PART	aff	_	2	advmod	_	_
2	gefais	cael	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=1|Tense=Past	0	root	_	_
3	i	i	PRON	indep	Number=Sing|Person=1	2	nsubj	_	_
4	fy	fy	PRON	dep	Number=Sing|Person=1|PronType=Prs	5	obj	_	_
5	ngheni	ceni	NOUN	verbnoun	Mutation=NM|Number=Sing|VerbForm=Vnoun	2	ccomp	_	_
6	yng	yn	ADP	prep	_	7	case	_	_
7	Nghaerdydd	Caerdydd	PROPN	place	Mutation=NM	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	rhaid	rhaid	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	ti	ti	PRON	indep	Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	ddod	dod	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	3	acl	_	_
7	cyn	cyn	ADP	prep	_	8	case	_	_
8	yfory	yfory	ADV	adv	_	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


