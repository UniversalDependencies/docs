---
layout: base
title:  'Statistics of aux:tense in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `aux:tense`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_gsd-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_gsd-dep-aux-pass.html">aux:pass</a></tt>.

4630 nodes (1%) are attached to their parents as `aux:tense`.

4622 instances of `aux:tense` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4732181425486.

The following 10 pairs of parts of speech are connected with `aux:tense`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (4488; 97% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (77; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (46; 1% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (11; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux:tense	color:blue
1	Elle	il	PRON	_	Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=elle
2	fonce	foncer	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	et	et	CCONJ	_	_	7	cc	_	_
4	c'	ce	PRON	_	Number=Sing|Person=3|PronType=Dem	7	expl:subj	_	SpaceAfter=No
5	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	7	det	_	_
7	audace	audace	NOUN	_	Gender=Fem|Number=Sing	2	conj	_	_
8	qui	qui	PRON	_	PronType=Rel	10	nsubj	_	_
9	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
10	récompensée	récompenser	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	7	advcl:cleft	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux:tense	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	wordform=il
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
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
# visual-style 5 3 aux:tense	color:blue
1	La	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	pose	pose	NOUN	_	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:tense	_	_
4	était	être	AUX	_	Number=Sing|Person=3|Tense=Past|Typo=Yes|VerbForm=Fin	5	cop	_	CorrectVerbForm=Part|wordform=été
5	parfaite	parfait	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
6	!	!	PUNCT	_	_	5	punct	_	_

~~~


