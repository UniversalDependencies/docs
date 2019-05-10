---
layout: base
title:  'Statistics of vocative in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `vocative`

This relation is universal.

9 nodes (0%) are attached to their parents as `vocative`.

5 instances of `vocative` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.77777777777778.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (3; 33% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Alice	Alice	PROPN	_	_	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	pars	partir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	mon	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	sommeil	sommeil	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 24 vocative	color:blue
1	Cependant	cependant	ADV	_	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	légende	légende	NOUN	_	Gender=Fem|Number=Sing	6	nsubj	_	_
5	populaire	populaire	ADJ	_	Gender=Fem|Number=Sing	4	amod	_	_
6	prétend	prétendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	que	que	SCONJ	_	_	16	mark	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	véritable	véritable	ADJ	_	Gender=Masc|Number=Sing	10	amod	_	_
10	cri	cri	NOUN	_	Gender=Masc|Number=Sing	16	nsubj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	bataille	bataille	NOUN	_	Gender=Fem|Number=Sing	10	nmod	_	_
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	cop	_	_
14	en	en	ADP	_	_	15	case	_	_
15	polonais	polonais	NOUN	_	Gender=Masc|Number=Sing	16	nmod	_	_
16	Naprzód	Naprzód	ADV	_	_	6	ccomp	_	TITLE=Yes
17	psiekrwie	psiekrwie	NOUN	_	_	16	vocative	_	INTITLE=Yes|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	INTITLE=Yes
19	Cesarz	Cesarz	X	_	_	20	nsubj	_	INTITLE=Yes
20	patrzy	patrzy	X	_	_	16	parataxis	_	INTITLE=Yes|SpaceAfter=No
21	-	-	PUNCT	_	_	20	punct	_	SpaceAfter=No
22	En	en	ADP	_	_	23	case	_	INTITLE=Yes
23	avant	avant	ADV	_	_	16	appos	_	TITLE=Yes
24	fils	fils	NOUN	_	Gender=Masc|Number=Plur	23	vocative	_	INTITLE=Yes
25	de	de	ADP	_	_	26	case	_	INTITLE=Yes
26	chiens	chien	NOUN	_	Gender=Masc|Number=Plur	24	nmod	_	INTITLE=Yes|SpaceAfter=No
27	,	,	PUNCT	_	_	31	punct	_	_
28	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	29	det	_	SpaceAfter=No
29	Empereur	Empereur	PROPN	_	_	31	nsubj	_	_
30	vous	lui	PRON	_	Number=Plur|Person=2|PronType=Prs	31	iobj	_	_
31	regarde	regarder	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	24	conj	_	_
32	!	!	PUNCT	_	_	6	punct	_	_

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
5	,	,	PUNCT	_	_	4	punct	_	_
6	tu	il	PRON	_	Number=Sing|Person=2|PronType=Prs	9	nsubj	_	_
7	es	être	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	totalement	totalement	ADV	_	_	9	advmod	_	_
9	naïve	naïf	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	inconsciente	inconscient	ADJ	_	Gender=Fem|Number=Sing	9	conj	_	_
12	!	!	PUNCT	_	_	9	punct	_	_

~~~


