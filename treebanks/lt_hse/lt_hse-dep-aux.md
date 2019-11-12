---
layout: base
title:  'Statistics of aux in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="lt_hse-dep-aux-pass.html">aux:pass</a></tt>.

33 nodes (1%) are attached to their parents as `aux`.

32 instances of `aux` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45454545454545.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-AUX.html">AUX</a></tt> (26; 79% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-AUX.html">AUX</a></tt> (4; 12% instances), <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-AUX.html">AUX</a></tt> (2; 6% instances), <tt><a href="lt_hse-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lt_hse-pos-AUX.html">AUX</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Po	po	ADP	UH	_	2	case	_	En=after
2	to	tas	PRON	DT	Case=Gen|Gender=Masc|Number=Sing	4	obl	_	En=that
3	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	En=be
4	įrašinėjama	įrašinėti	VERB	VBNH	Definite=Ind|Gender=Neut|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	En=write
5	iš	iš%naujo	ADV	RB	Degree=Pos	4	advmod	_	En=again
6	naujo	iš%naujo	ADV	RB	Degree=Pos	5	fixed	_	En=again|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	En=.

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	Paprastai	paprastai	ADV	RB	Degree=Pos	15	advmod	_	En=usually|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	6	punct	_	En=,
3	kai	kai	SCONJ	UH	_	6	advmod	_	En=when
4	į	į	ADP	UH	_	3	fixed	_	En=to
5	lėktuvai	lėktuvas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	En=airplane
6	nukrenta	nukristi	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	15	advcl	_	En=drop
7	į	į	ADP	UH	_	8	case	_	En=to
8	jūrą	jūra	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	En=sea|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	6	punct	_	En=,
10	nustatyti	nustatyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	15	xcomp	_	En=establish
11	katastrofos	katastrofa	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	En=catastrophy
12	priežastis	priežastis	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	En=reason
13	būna	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	En=be
14	ypač	ypač	ADV	RB	Degree=Pos	15	advmod	_	En=especially
15	sunku	sunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut	0	root	_	En=difficult|SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	15	punct	_	En=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Svarbiausias	svarbus	ADJ	JJS	Case=Nom|Definite=Ind|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	En=most
2	daiktas	daiktas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	En=thing
3	jam	jis	PRON	PRP	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	En=he
4	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	En=be
5	tėvų	tėvai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	En=parent
6	priesaikai	priesaika	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	En=oath
7	ir	ir	CCONJ	CC	_	9	cc	_	En=and
8	tautinės	tautinis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	En=national
9	šventenybės	šventenybė	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	6	conj	_	En=shrine|SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	2	punct	_	En=.

~~~


