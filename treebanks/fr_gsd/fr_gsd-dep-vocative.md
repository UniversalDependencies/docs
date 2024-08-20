---
layout: base
title:  'Statistics of vocative in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `vocative`

This relation is universal.

15 nodes (0%) are attached to their parents as `vocative`.

9 instances of `vocative` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 7 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (7; 47% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (2; 13% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 7% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Débutants	débutant	NOUN	_	Gender=Masc|Number=Plur	3	vocative	_	SpaceAfter=No|wordform=débutants
2	,	,	PUNCT	_	_	1	punct	_	_
3	allez	aller	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
4	voir	voir	VERB	_	VerbForm=Inf	3	xcomp	_	Subject=SubjRaising
5	ailleurs	ailleurs	ADV	_	_	4	advmod	_	_
6	:)	:)	SYM	_	ExtPos=ADV	4	parataxis	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 vocative	color:blue
1	Chauchard	Chauchard	PROPN	_	_	6	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	tu	toi	PRON	_	Emph=No|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
4	es	être	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	bête	bête	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	!	!	PUNCT	_	_	6	punct	_	_
8	"	"	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Alice	Alice	PROPN	_	_	4	vocative	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	je	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	pars	partir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	mon	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	7	det	_	_
7	sommeil	sommeil	NOUN	_	Gender=Masc|Number=Sing	4	obl:arg	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


