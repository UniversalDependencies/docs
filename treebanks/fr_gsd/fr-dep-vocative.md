---
layout: base
title:  'Statistics of vocative in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `vocative`

This relation is universal.

8 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.875.

The following 5 pairs of parts of speech are connected with `vocative`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (4; 50% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Alice	Alice	PROPN	_	_	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	4	punct	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	pars	partir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	mon	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	sommeil	sommeil	NOUN	_	Gender=Masc|Number=Sing	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 vocative	color:blue
1	-	-	PUNCT	_	_	9	punct	_	SpaceAfter=No
2	Mais	mais	CCONJ	_	_	9	cc	_	_
3	ma	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	4	det	_	_
4	chérie	chéri	NOUN	_	Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
5	,	,	PUNCT	_	_	9	punct	_	_
6	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	es	être	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	totalement	totalement	ADV	_	_	9	advmod	_	_
9	naïve	naïf	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	inconsciente	inconscient	ADJ	_	Gender=Fem|Number=Sing	9	conj	_	_
12	!	!	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 vocative	color:blue
1	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	5	nsubj	_	SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	du	du	DET	_	Gender=Masc|Number=Sing	5	det	_	_
4	bon	bon	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
5	boulot	boulot	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	que	que	PRON	_	PronType=Rel	10	obj	_	_
7	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	10	nsubj	_	_
8	m'	me	PRON	_	Number=Sing|Person=1|PronType=Prs	10	iobj	_	SpaceAfter=No
9	avez	avoir	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl:relcl	_	_
11	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	12	det	_	_
12	gars	gars	NOUN	_	Gender=Masc|Number=Plur	5	vocative	_	_
13	!	!	PUNCT	_	_	5	punct	_	_

~~~


