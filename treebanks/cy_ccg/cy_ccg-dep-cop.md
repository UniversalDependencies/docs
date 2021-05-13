---
layout: base
title:  'Statistics of cop in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `cop`

This relation is universal.

711 nodes (2%) are attached to their parents as `cop`.

638 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11673699015471.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (403; 57% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (281; 40% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (15; 2% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-SYM.html">SYM</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cop	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
2	angen	angen	NOUN	noun	Gender=Masc|Number=Sing	0	root	_	_
3	difrifoli	difrifoli	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	nmod	_	_
4	a	a	CCONJ	cconj	_	5	cc	_	_
5	thyfu	tyfu	NOUN	verbnoun	Mutation=AM|Number=Sing|VerbForm=Vnoun	3	conj	_	_
6	fyny	fyny	ADV	adv	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	teimlo	teimlo	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	erbyn	erbyn	ADP	prep	_	6	case	_	_
6	hyn	hyn	PRON	dem	Number=Plur|PronType=Dem	4	obl	_	_
7	mai	mai	SCONJ	sconj	_	9	mark	_	SpaceAfter=No
8	'r	y	DET	art	_	9	det	_	_
9	ail	ail	ADJ	ord	Degree=Pos|NumType=Ord	4	ccomp	_	_
10	sydd	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=FinRel	12	cop	_	_
11	fwyaf	mawr	ADJ	sup	Degree=Sup	12	advmod	_	_
12	tebygol	tebygol	ADJ	pos	Degree=Pos	9	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	Bu	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
2	hefyd	hefyd	ADV	adv	_	4	advmod	_	_
3	yn	yn	PART	pred	_	4	case:pred	_	_
4	un	un	NUM	num	_	0	root	_	_
5	o	o	ADP	prep	_	7	case	_	SpaceAfter=No
6	'r	y	DET	art	_	7	det	_	_
7	cymeriadau	cymeriad	NOUN	noun	Gender=Masc|Number=Plur	4	nmod	_	_
8	sefydlog	sefydlog	ADJ	pos	Degree=Pos	7	amod	_	_
9	ar	ar	ADP	prep	_	10	case	_	_
10	Pobol	pobol	NOUN	noun	Gender=Fem|Number=Sing	7	nmod	_	_
11	y	y	DET	art	_	12	det	_	_
12	Cwm	cwm	NOUN	noun	Gender=Masc|Number=Sing	10	nmod	_	_
13	am	am	ADP	prep	_	14	case	_	_
14	gyfnod	cyfnod	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	7	nmod	_	SpaceAfter=No
15	.	.	PUNCT	punct	_	4	punct	_	SpacesAfter=\n

~~~


