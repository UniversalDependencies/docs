---
layout: base
title:  'Statistics of iobj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `iobj`

This relation is universal.
There are 1 language-specific subtypes of `iobj`: <tt><a href="fr_gsd-dep-iobj-agent.html">iobj:agent</a></tt>.

1336 nodes (0%) are attached to their parents as `iobj`.

891 instances of `iobj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79790419161677.

The following 16 pairs of parts of speech are connected with `iobj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (845; 63% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (329; 25% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (84; 6% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (29; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (27; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Cela	cela	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	wordform=cela
2	lui	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
3	donne	donner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	aspect	aspect	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
6	«	«	PUNCT	_	_	7	punct	_	_
7	formel	formel	ADJ	_	Gender=Masc|Number=Sing	5	amod	_	_
8	»	»	PUNCT	_	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Magdeleine	Magdeleine	PROPN	_	_	3	nsubj	_	_
2	Legendre	Legendre	PROPN	_	_	1	flat:name	_	_
3	naît	naître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	6	6	NUM	_	Number=Sing	3	iobj	_	_
6	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
7	1889	1889	NUM	_	Number=Plur	6	nmod	_	_
8	à	à	ADP	_	_	9	case	_	_
9	Étampes	Étampes	PROPN	_	_	3	obl:arg	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 iobj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	aime	aimer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	trop	trop	ADV	_	_	2	advmod	_	_
4	son	son	DET	_	Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	5	det	_	_
5	rôle	rôle	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
6	et	et	CCONJ	_	_	8	cc	_	_
7	sa	son	DET	_	Gender=Fem|Number=Sing|Number[psor]=Sing|Person[psor]=3|PronType=Prs	8	det	_	_
8	mission	mission	NOUN	_	Gender=Fem|Number=Sing	5	conj	_	_
9	pour	pour	ADP	_	_	11	mark	_	_
10	en	en	PRON	_	Person=3|PronType=Prs	11	expl	_	_
11	rester	rester	VERB	_	VerbForm=Inf	3	ccomp	_	_
12	là	là	ADV	_	_	11	iobj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


