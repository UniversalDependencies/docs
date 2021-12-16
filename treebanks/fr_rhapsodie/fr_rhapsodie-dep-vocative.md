---
layout: base
title:  'Statistics of vocative in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `vocative`

This relation is universal.

37 nodes (0%) are attached to their parents as `vocative`.

24 instances of `vocative` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.10810810810811.

The following 9 pairs of parts of speech are connected with `vocative`: <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (18; 49% instances), <tt><a href="fr_rhapsodie-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (8; 22% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	mais	mais	CCONJ	_	_	7	cc	_	_
2	Sara	Sara	PROPN	_	_	7	vocative	_	_
3	Ghibaudo	Ghibaudo	PROPN	_	_	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	_
7	pourra	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
8	pas	pas	ADV	_	Polarity=Neg	7	advmod	_	_
9	contenter	contenter	VERB	_	VerbForm=Inf	7	xcomp	_	_
10	tout	tout	ADV	_	_	12	advmod	_	_
11	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	monde	monde	NOUN	_	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 vocative	color:blue
1	bonjour	bonjour	INTJ	_	_	0	root	_	_
2	Eric	Eric	PROPN	_	_	1	vocative	_	SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 vocative	color:blue
1	monsieur	monsieur	NOUN	_	Gender=Masc|Number=Sing	6	vocative	_	_
2	Mitterrand	Mitterrand	PROPN	_	_	1	nmod:appos	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	voulez	vouloir	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
5	-vous	il	PRON	_	Number=Plur|Person=2|PronType=Prs	4	nsubj	_	_
6	continuer	continuer	VERB	_	VerbForm=Inf	4	xcomp	_	_
7	?	?	PUNCT	_	_	4	punct	_	_

~~~


