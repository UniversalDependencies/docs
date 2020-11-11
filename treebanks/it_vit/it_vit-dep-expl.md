---
layout: base
title:  'Statistics of expl in UD_Italian-VIT'
udver: '2'
---

## Treebank Statistics: UD_Italian-VIT: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it_vit-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it_vit-dep-expl-pass.html">expl:pass</a></tt>.

2780 nodes (1%) are attached to their parents as `expl`.

2263 instances of `expl` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33956834532374.

The following 6 pairs of parts of speech are connected with `expl`: <tt><a href="it_vit-pos-VERB.html">VERB</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2748; 99% instances), <tt><a href="it_vit-pos-PRON.html">PRON</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (12; 0% instances), <tt><a href="it_vit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (11; 0% instances), <tt><a href="it_vit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="it_vit-pos-ADV.html">ADV</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it_vit-pos-INTJ.html">INTJ</a></tt>-<tt><a href="it_vit-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl	color:blue
1	Ha	avere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	l'	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	SpaceAfter=No
3	acqua	acqua	NOUN	S	Gender=Fem|Number=Sing	1	obj	_	_
4	calda	caldo	ADJ	A	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	10	punct	_	_
6	più	più	ADV	B	_	10	advmod	_	_
7	o	o	CCONJ	CC	_	8	cc	_	_
8	meno	meno	ADV	B	_	6	conj	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	10	expl	_	_
10	veste	vestire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Spigole	spigola	NOUN	S	Gender=Fem|Number=Plur	5	nsubj	_	_
2	ce	ce	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	5	expl	_	_
3	n'	ne	PRON	PC	Clitic=Yes|Number=Plur|Person=3|PronType=Prs	5	expl	_	SpaceAfter=No
4	erano	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	poche	poco	PRON	PI	Gender=Fem|Number=Plur|PronType=Ind	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	Non	non	ADV	BN	PronType=Neg	5	advmod	_	_
2	c'	ci	PRON	PC	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	5	expl	_	SpaceAfter=No
3	è	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	dunque	dunque	ADV	B	_	5	advmod	_	_
5	dubbio	dubbio	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	che	che	SCONJ	CS	_	9	mark	_	_
7	Marley	Marley	PROPN	SP	_	9	nsubj	_	_
8	era	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	aux	_	_
9	morto	morire	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	5	punct	_	_

~~~


