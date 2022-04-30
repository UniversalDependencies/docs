---
layout: base
title:  'Statistics of vocative in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `vocative`

This relation is universal.

11 nodes (0%) are attached to their parents as `vocative`.

6 instances of `vocative` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81818181818182.

The following 4 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (3; 27% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 18% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	dis	dire	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	6	vocative	_	_
5	je	il	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
6	suis	être	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	ccomp	_	Reported=Yes
7	antillaise	antillais	NOUN	_	Gender=Fem|Number=Sing	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 vocative	color:blue
1	alors	alors	ADV	_	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	commence	commencer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	quand	quand	SCONJ	_	_	4	dep	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	Eleanor	Eleanor	PROPN	_	_	4	vocative	_	_
10	et	et	CCONJ	_	_	11	cc	_	_
11	Maude	Maude	PROPN	_	_	9	conj	_	SpaceAfter=No
12	…	…	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 vocative	color:blue
1	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	là	là	ADV	_	_	0	root	_	_
4	en	en	ADP	_	_	5	case	_	_
5	mode	mode	NOUN	_	Number=Sing	3	obl:mod	_	_
6	mais	mais	CCONJ	_	_	9	cc	_	_
7	vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	9	nsubj	_	_
8	êtes	être	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	9	cop	_	Reported=Yes
9	sûre	sûr	ADJ	_	Gender=Fem|Number=Sing	5	ccomp	_	_
10	madame	madame	NOUN	_	Gender=Fem|Number=Sing	9	vocative	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	euh	euh	INTJ	_	_	9	discourse	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


