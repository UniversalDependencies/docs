---
layout: base
title:  'Statistics of obj:agent in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obj.html">obj</a></tt>.

4 nodes (0%) are attached to their parents as `obj:agent`.

2 instances of `obj:agent` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `obj:agent`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obj:agent	color:blue
1	Les	le	DET	DT	Gender=Masc|Number=Plur	3	det	_	wordform=les
2	bons	bon	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	_
3	résultats	résultat	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:caus	_	_
4	en	en	ADP	IN	_	5	case	_	_
5	Asie	Asie	PROPN	NNP	Gender=Fem|Number=Sing	3	nmod	_	_
6	faisaient	faire	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	7	aux:caus	_	_
7	monter	monter	VERB	VB	VerbForm=Inf	0	root	_	_
8	immédiatement	immédiatement	ADV	RB	_	7	advmod	_	_
9	les	le	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	marchés	marché	NOUN	NN	Gender=Masc|Number=Plur	7	obj:agent	_	_
11	boursiers	boursier	ADJ	JJ	Gender=Masc|Number=Plur	10	amod	_	SpaceAfter=No
12	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj:agent	color:blue
1	C'	ce	PRON	PDEM	_	3	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	ce	ce	PRON	PDEM	_	0	root	_	_
4	qui	qui	PRON	WP	_	7	nsubj:caus	_	_
5	nous	le	PRON	PRP	Number=Plur|Person=1	7	obj:agent	_	_
6	fait	faire	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:caus	_	_
7	revenir	revenir	VERB	VB	VerbForm=Inf	3	acl:relcl	_	_
8	encore	encore	ADV	RB	_	7	advmod	_	_
9	et	et	CCONJ	CC	_	10	cc	_	_
10	encore	encore	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


