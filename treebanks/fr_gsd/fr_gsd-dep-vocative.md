---
layout: base
title:  'Statistics of vocative in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `vocative`

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.9.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (4; 40% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 10% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Débutants	débutant	NOUN	_	Gender=Masc|Number=Plur	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	allez	aller	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	voir	voir	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	ailleurs	ailleurs	ADV	_	_	4	advmod	_	_
6	:)	:)	SYM	_	_	4	parataxis	_	EXTPOS=ADV|Type=Trans

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


