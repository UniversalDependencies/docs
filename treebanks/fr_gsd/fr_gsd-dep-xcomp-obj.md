---
layout: base
title:  'Statistics of xcomp:obj in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `xcomp:obj`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `xcomp`: <tt><a href="fr_gsd-dep-xcomp-obl.html">xcomp:obl</a></tt>, <tt><a href="fr_gsd-dep-xcomp-pred.html">xcomp:pred</a></tt>.

2168 nodes (1%) are attached to their parents as `xcomp:obj`.

2166 instances of `xcomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.28920664206642.

The following 8 pairs of parts of speech are connected with `xcomp:obj`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (2080; 96% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (38; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (33; 2% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 xcomp:obj	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	wordform=il
2	verra	voir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	puits	puits	NOUN	_	Gender=Masc|Number=Sing	2	obj	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	advmod	_	ExtPos=ADV|PhraseType=Idiom
6	plus	plus	ADV	_	_	5	fixed	_	_
7	profond	profond	ADJ	_	Gender=Masc|Number=Sing	4	amod	_	_
8	de	de	ADP	_	_	9	case	_	_
9	France	France	PROPN	_	_	4	nmod	_	_
10	porter	porter	VERB	_	VerbForm=Inf	2	xcomp:obj	_	_
11	son	son	DET	_	Number=Sing|PossNumber=Sing|PossPerson=3|PronType=Prs	12	det	_	_
12	nom	nom	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	:	:	PUNCT	_	_	2	punct	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp:obj	color:blue
1	Les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	2	det	_	wordform=les
2	yeux	œil	NOUN	_	Gender=Masc|Number=Plur	3	nsubj	_	_
3	doivent	devoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	être	être	AUX	_	VerbForm=Inf	5	cop	_	_
5	grands	grand	ADJ	_	Gender=Masc|Number=Plur	3	xcomp:obj	_	_
6	et	et	CCONJ	_	_	7	cc	_	_
7	ronds	rond	ADJ	_	Gender=Masc|Number=Plur	5	conj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 xcomp:obj	color:blue
1	Guillaume	Guillaume	PROPN	_	_	4	nsubj	_	_
2	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	plombier	plombier	NOUN	_	Gender=Masc|Number=Sing	1	appos	_	_
4	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	8	cop	_	_
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	écoute	écoute	NOUN	_	Gender=Fem|Number=Sing	4	xcomp:obj	_	_
9	et	et	CCONJ	_	_	11	cc	_	_
10	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	disponible	disponible	ADJ	_	Gender=Masc|Number=Sing	4	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


