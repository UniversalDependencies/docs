---
layout: base
title:  'Statistics of nmod:appos in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-nmod.html">nmod</a></tt>.

116 nodes (0%) are attached to their parents as `nmod:appos`.

116 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30172413793103.

The following 7 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (100; 86% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (7; 6% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:appos	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	foire	foire	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
3	d'	de	ADP	_	_	4	case	_	_
4	empoigne	empoigne	NOUN	_	_	2	nmod	_	_
5	à	à	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	procès	procès	NOUN	_	Gender=Masc	2	nmod	_	_
8	Colonna	Colonna	PROPN	_	_	7	nmod:appos	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:appos	color:blue
1	euh	euh	INTJ	_	_	6	discourse	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	direction	direction	ADP	_	_	6	case	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	piscine	piscine	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
7	euh	euh	INTJ	_	_	6	discourse	_	_
8	entrée	entrée	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
9	nord	nord	NOUN	_	Gender=Masc|Number=Sing	8	nmod:appos	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod:appos	color:blue
1	mes	son	DET	_	Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=1|PronType=Prs	2	det	_	_
2	parents	parent	NOUN	_	Gender=Masc|Number=Plur	7	nsubj	_	_
3	tous	tout	ADJ	_	Gender=Masc|Number=Plur	5	amod	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	5	det	_	_
5	deux	deux	NUM	_	Number=Plur	2	nmod:appos	_	_
6	ont	avoir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	vécu	vivre	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	à	à	ADP	_	_	9	case	_	_
9	Paris	Paris	PROPN	_	_	7	obl:arg	_	_
10	jeunes	jeune	ADJ	_	Number=Plur	7	advcl	_	_
11	hein	hein	INTJ	_	_	10	discourse	_	_

~~~


