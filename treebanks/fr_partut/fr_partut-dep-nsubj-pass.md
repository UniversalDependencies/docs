---
layout: base
title:  'Statistics of nsubj:pass in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_partut-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_partut-dep-nsubj-expl.html">nsubj:expl</a></tt>.

224 nodes (1%) are attached to their parents as `nsubj:pass`.

216 instances of `nsubj:pass` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.96875.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (157; 70% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (59; 26% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt> (5; 2% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	mycélium	mycélium	NOUN	S	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	doué	douer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	de	de	ADP	E	_	6	case	_	_
6	sensations	sensations	NOUN	S	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	le	le	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	titre	titre	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
3	de	de	ADP	E	_	5	case	_	_
4	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	5	det	_	SpaceAfter=No
5	oeuvre	oeuvre	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	_
6	originale	originale	ADJ	A	Gender=Masc|Number=Sing	5	amod	_	_
7	s'	si	ADP	E	_	10	mark	_	SpaceAfter=No
8	il	il	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	est	être	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	indiqué	indiquer	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl	_	SpaceAfter=No
11	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	Creative	Creative	PROPN	SP	_	5	nsubj:pass	_	_
2	Commons	Commons	PROPN	SP	_	1	flat:name	_	_
3	peut	pouvoir	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	être	être	AUX	VA	VerbForm=Inf	5	aux:pass	_	_
5	contacté	contacté	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	à	à	ADP	E	_	7	case	_	_
7	Http	Http	PROPN	SP	_	5	obl	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	5	punct	_	_

~~~


