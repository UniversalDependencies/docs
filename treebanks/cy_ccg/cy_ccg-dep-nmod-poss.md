---
layout: base
title:  'Statistics of nmod:poss in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="cy_ccg-dep-nmod-agent.html">nmod:agent</a></tt>.

274 nodes (2%) are attached to their parents as `nmod:poss`.

249 instances of `nmod:poss` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04014598540146.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (262; 96% instances), <tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt>-<tt><a href="cy_ccg-pos-PRON.html">PRON</a></tt> (12; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	oedd	bod	VERB	verb	Mood=Ind|Number=Sing|Person=3|Tense=Imp	0	root	_	_
3	o	e	PRON	indep	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	newydd	newydd	AUX	ante	_	5	aux	_	_
5	fywta	bywta	NOUN	verbnoun	Mutation=SM|Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
6	pan	pan	SCONJ	sconj	_	7	mark	_	_
7	gyrhaeddodd	cyrraedd	VERB	verb	Mood=Ind|Mutation=SM|Number=Sing|Person=3|Tense=Past	2	advcl	_	_
8	ei	ei	PRON	dep	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	chwaer	chwaer	NOUN	noun	Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:poss	color:blue
1	Efallai	efallai	ADV	adv	_	3	advmod	_	_
2	y	y	DET	art	_	3	det	_	_
3	dewch	dod	VERB	verb	Mood=Ind|Number=Plur|Person=2|Tense=Fut	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	digwyddiad	digwyddiad	NOUN	noun	Gender=Masc|Number=Sing	3	obl	_	_
7	eich	eich	PRON	dep	Number=Plur|Person=2|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	hun	hun	PRON	refl	Number=Sing|PronType=Rcp	6	nmod	_	SpaceAfter=No
9	,	,	PUNCT	punct	_	10	punct	_	_
10	hyd	hyd	NOUN	noun	Gender=Masc|Number=Sing	3	advmod	_	_
11	yn	yn	ADP	prep	_	10	fixed	_	_
12	oed	oed	NOUN	noun	Gender=Masc|Number=Sing	10	fixed	_	SpaceAfter=No
13	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


