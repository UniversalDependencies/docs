---
layout: base
title:  'Statistics of aux in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `aux`

This relation is universal.

1595 nodes (4%) are attached to their parents as `aux`.

1592 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12539184952978.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1570; 98% instances), <tt><a href="cy_ccg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (22; 1% instances), <tt><a href="cy_ccg-pos-ADV.html">ADV</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="cy_ccg-pos-VERB.html">VERB</a></tt>-<tt><a href="cy_ccg-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Yr	y	PART	aff	_	2	advmod	_	_
2	ydym	bod	VERB	verb	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	yn	yn	AUX	impf	_	4	aux	_	_
4	llithro	llithro	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	i	i	ADP	prep	_	6	case	_	_
6	le	lle	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
7	tywyll	tywyll	ADJ	pos	Degree=Pos	6	amod	_	_
8	dros	dros	ADP	prep	_	9	case	_	_
9	ben	pen	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux	color:blue
1	Mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Nest	Nest	PROPN	person	Gender=Fem|Number=Sing	1	nsubj	_	_
3	wedi	wedi	AUX	ante	_	6	aux	_	_
4	bod	bod	AUX	verbnoun	Number=Sing|VerbForm=Vnoun	6	cop	_	_
5	yn	yn	PART	pred	_	6	case:pred	_	_
6	dda	da	ADJ	pos	Degree=Pos|Mutation=SM	1	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	punct	_	6	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 aux	color:blue
1	Dyma	dyma	ADV	adv	_	2	advmod	_	_
2	mae	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	datblygwyr	datblygwr	NOUN	noun	Gender=Masc|Number=Plur	2	nsubj	_	_
4	tai	tŷ	NOUN	noun	Gender=Masc|Number=Plur	3	nmod	_	_
5	yn	yn	ADP	prep	_	7	case	_	_
6	ei	ef	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	7	obj	_	_
7	ddweud	dweud	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
8	yn	yn	AUX	impf	_	9	aux	_	_
9	aml	aml	ADV	adv	_	7	advmod	_	_
10	er	er	ADP	prep	_	11	case	_	_
11	mwyn	mwyn	NOUN	noun	Gender=Masc|Number=Sing	7	obl	_	_
12	gwanhau	gwanhau	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	11	acl	_	_
13	cyfyngiadau	cyfyngiad	NOUN	noun	Gender=Masc|Number=Plur	12	obj	_	_
14	cynllunio	cynllunio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	13	nmod	_	_
15	a	a	CCONJ	cconj	_	16	cc	_	_
16	rheoliadau	rheoliad	NOUN	noun	Gender=Masc|Number=Plur	13	conj	_	_
17	adeiladu	adeiladu	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	16	nmod	_	SpaceAfter=No
18	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


