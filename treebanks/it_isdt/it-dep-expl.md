---
layout: base
title:  'Statistics of expl in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `expl`

This relation is universal.
There are 2 language-specific subtypes of `expl`: <tt><a href="it-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="it-dep-expl-pass.html">expl:pass</a></tt>.

2149 nodes (1%) are attached to their parents as `expl`.

1726 instances of `expl` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22475570032573.

The following 7 pairs of parts of speech are connected with `expl`: <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (2134; 99% instances), <tt><a href="it-pos-ADV.html">ADV</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="it-pos-AUX.html">AUX</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-VERB.html">VERB</a></tt>-<tt><a href="it-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Vi	vi	PRON	PC	Clitic=Yes|PronType=Prs	2	expl	_	_
2	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	migliaia	migliaio	NOUN	S	Gender=Fem|Number=Plur	2	nsubj	_	_
4	di	di	ADP	E	_	5	case	_	_
5	casi	caso	NOUN	S	Gender=Masc|Number=Plur	3	nmod	_	_
6	di	di	ADP	E	_	8	case	_	_
7	questo	questo	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	genere	genere	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 expl	color:blue
1	Ce	ce	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	_	_
2	n'	ne	PRON	PC	Clitic=Yes|PronType=Prs	4	iobj	_	SpaceAfter=No
3	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	abbastanza	abbastanza	ADV	B	_	0	root	_	_
5	per	per	ADP	E	_	6	mark	_	_
6	avvertire	avvertire	VERB	V	VerbForm=Inf	4	advcl	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	magistratura	magistratura	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 expl	color:blue
1	Quanti	quanto	DET	DQ	Gender=Masc|Number=Plur|PronType=Int	2	det	_	_
2	anni	anno	NOUN	S	Gender=Masc|Number=Plur	3	obj	_	_
3	bisogna	bisognare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	avere	avere	VERB	V	VerbForm=Inf	3	xcomp	_	_
5	per	per	ADP	E	_	8	mark	_	_
6	poter	potere	AUX	VM	VerbForm=Inf	8	aux	_	_
7	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl	_	_
8	sposare	sposare	VERB	V	VerbForm=Inf	3	advcl	_	_
9	in	in	ADP	E	_	11	case	_	_
10	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	Carolina	Carolina	PROPN	SP	_	8	obl	_	_
12	di	di	ADP	E	_	14	case	_	_
13	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	S	S	PROPN	SP	_	11	nmod	_	SpaceAfter=No
15	?	?	PUNCT	FS	_	3	punct	_	_

~~~


