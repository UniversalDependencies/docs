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
1	Les	_	DET	DT	Gender=Masc|Number=Plur	3	det	_	_
2	bons	_	ADJ	JJ	Gender=Masc|Number=Plur	3	amod	_	_
3	résultats	_	NOUN	NN	Gender=Masc|Number=Plur	7	nsubj:caus	_	_
4	en	_	ADP	IN	_	5	case	_	_
5	Asie	_	PROPN	NNP	Gender=Fem|Number=Sing	3	nmod	_	_
6	faisaient	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	7	aux:caus	_	_
7	monter	_	VERB	VB	_	0	root	_	_
8	immédiatement	_	ADV	RB	_	7	advmod	_	_
9	les	_	DET	DT	Gender=Masc|Number=Plur	10	det	_	_
10	marchés	_	NOUN	NN	Gender=Masc|Number=Plur	7	obj:agent	_	_
11	boursiers	_	ADJ	JJ	Gender=Masc|Number=Plur	10	amod	_	SpaceAfter=No
12	.	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obj:agent	color:blue
1	C'	_	PRON	PDEM	_	3	nsubj	_	SpaceAfter=No
2	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	ce	_	PRON	PDEM	_	0	root	_	_
4	qui	_	PRON	WP	_	7	nsubj:caus	_	_
5	nous	_	PRON	PRP	Number=Plur|Person=1	7	obj:agent	_	_
6	fait	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	7	aux:caus	_	_
7	revenir	_	VERB	VB	_	3	acl:relcl	_	_
8	encore	_	ADV	RB	_	7	advmod	_	_
9	et	_	CCONJ	CC	_	10	cc	_	_
10	encore	_	ADV	RB	_	8	conj	_	SpaceAfter=No
11	.	_	PUNCT	.	_	3	punct	_	_

~~~


