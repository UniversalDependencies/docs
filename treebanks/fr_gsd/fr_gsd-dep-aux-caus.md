---
layout: base
title:  'Statistics of aux:caus in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux:caus`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-aux.html">aux</a></tt>.
There are also 1 other language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>.

262 nodes (0%) are attached to their parents as `aux:caus`.

262 instances of `aux:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.0763358778626.

The following 2 pairs of parts of speech are connected with `aux:caus`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (261; 100% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:caus	color:blue
1	N'	ne	ADV	_	Polarity=Neg	2	advmod	_	SpaceAfter=No
2	hésitez	hésiter	VERB	_	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	-pas	pas	ADV	_	Polarity=Neg	2	advmod	_	_
4	à	à	ADP	_	_	7	mark	_	_
5	la	le	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj:agent	_	_
6	faire	faire	AUX	_	VerbForm=Inf	7	aux:caus	_	_
7	circuler	circuler	VERB	_	VerbForm=Inf	2	xcomp	_	_
8	largement	largement	ADV	_	_	7	advmod	_	_
9	autour	autour	ADP	_	_	11	case	_	_
10	de	de	ADP	_	_	9	fixed	_	_
11	vous	vous	PRON	_	Number=Plur|Person=2|PronType=Prs	7	obl	_	_
12	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux:caus	color:blue
1	Son	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
2	nouvel	nouveau	ADJ	_	Gender=Masc|Number=Sing	3	amod	_	_
3	ami	ami	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
4	le	le	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
5	fait	faire	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:caus	_	_
6	engager	engager	VERB	_	VerbForm=Inf	0	root	_	_
7	comme	comme	ADP	_	_	8	case	_	_
8	figurant	figurer	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
9	sur	sur	ADP	_	_	11	case	_	_
10	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	tournage	tournage	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	_
12	de	de	ADP	_	_	13	case	_	_
13	Runaway	Runaway	PROPN	_	_	11	nmod	_	_
14	Train	Train	PROPN	_	_	13	flat:name	_	SpaceAfter=No
15	.	.	PUNCT	_	_	6	punct	_	_

~~~


