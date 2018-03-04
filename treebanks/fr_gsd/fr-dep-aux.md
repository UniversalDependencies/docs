---
layout: base
title:  'Statistics of aux in UD_French'
udver: '2'
---

## Treebank Statistics: UD_French: Relations: `aux`

This relation is universal.
There are 2 language-specific subtypes of `aux`: <tt><a href="fr-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr-dep-aux-pass.html">aux:pass</a></tt>.

4723 nodes (1%) are attached to their parents as `aux`.

4715 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.47067541816642.

The following 8 pairs of parts of speech are connected with `aux`: <tt><a href="fr-pos-VERB.html">VERB</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (4585; 97% instances), <tt><a href="fr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (76; 2% instances), <tt><a href="fr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="fr-pos-PRON.html">PRON</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (10; 0% instances), <tt><a href="fr-pos-NUM.html">NUM</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr-pos-ADV.html">ADV</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr-pos-AUX.html">AUX</a></tt>-<tt><a href="fr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	Elle	elle	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	fonce	foncer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CCONJ	_	_	7	cc	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	7	nsubj	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	audace	audace	NOUN	_	Gender=Fem|Number=Sing	2	conj	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	récompensée	récompenser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	également	également	ADV	_	_	5	advmod	_	_
4	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	cop	_	_
5	capitaine	capitaine	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
6	de	de	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	équipe	équipe	NOUN	_	Gender=Fem|Number=Sing	5	nmod	_	_
9	bruxelloise	bruxellois	ADJ	_	Gender=Fem|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	pose	pose	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	parfaite	parfait	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


