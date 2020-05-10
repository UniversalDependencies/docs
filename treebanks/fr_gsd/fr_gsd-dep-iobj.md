---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

981 nodes (0%) are attached to their parents as `iobj`.

887 instances of `iobj` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49643221202854.

The following 5 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (838; 85% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (84; 9% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (27; 3% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (25; 3% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (7; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Cela	cela	PRON	_	Number=Sing|PronType=Dem	3	nsubj	_	wordform=cela
2	lui	lui	PRON	_	Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	donne	donner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	aspect	aspect	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	«	«	PUNCT	_	_	7	punct	_	_
7	formel	formel	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 iobj	color:blue
1	Jusqu'	jusque	ADV	_	_	2	advmod	_	SpaceAfter=No|wordform=jusqu'
2	à	à	ADP	_	_	7	advmod	_	EXTPOS=ADV|Type=MWE
3	présent	présent	NOUN	_	Gender=Masc|Number=Sing	2	fixed	_	SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	personne	personne	PRON	_	Number=Sing|PronType=Neg	7	nsubj	_	_
6	ne	ne	ADV	_	Polarity=Neg	7	advmod	_	_
7	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	où	où	ADV	_	PronType=Rel	12	iobj	_	_
9	ils	il	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	nsubj:pass	_	_
10	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	_
11	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	_
12	conduits	conduire	VERB	_	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	7	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 iobj	color:blue
1	j'	il	PRON	_	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	SpaceAfter=No
2	en	en	PRON	_	Person=3	5	iobj	_	_
3	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	très	très	ADV	_	_	5	advmod	_	_
5	contente	content	ADJ	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


