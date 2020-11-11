---
layout: base
title:  'Statistics of xcomp in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `xcomp`

This relation is universal.

1438 nodes (4%) are attached to their parents as `xcomp`.

1434 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66063977746871.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (1071; 74% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (304; 21% instances), <tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (44; 3% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	ydw	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	nabod	nabod	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	rhywun	rhywun	NOUN	noun	Gender=Masc|Number=Sing	4	obj	_	_
6	sy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Relative=Rel|Tense=Pres	5	acl:relcl	_	SpaceAfter=No
7	'n	yn	AUX	impf	_	8	aux	_	_
8	medru	medru	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	6	xcomp	_	_
9	siarad	siarad	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	8	xcomp	_	_
10	Almaeneg	almaeneg	NOUN	noun	Gender=Fem|Number=Sing	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	SpaceAfter=No
2	'r	y	DET	art	_	3	det	_	_
3	amddiffynfa	amddiffynfa	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
4	cyntaf	cynnar	ADJ	sup	Degree=Sup	3	amod	_	_
5	yn	yn	AUX	impf	_	6	aux	_	_
6	dyddio	dyddio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	1	xcomp	_	_
7	i	i	ADP	prep	_	8	case	_	_
8	Oes	oes	NOUN	noun	Gender=Fem|Number=Sing	6	obl	_	_
9	yr	y	DET	art	_	10	det	_	_
10	Haearn	haearn	NOUN	noun	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


