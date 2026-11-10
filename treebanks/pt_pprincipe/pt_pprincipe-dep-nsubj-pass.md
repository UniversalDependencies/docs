---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_pprincipe-dep-nsubj-outer.html">nsubj:outer</a></tt>.

12 nodes (0%) are attached to their parents as `nsubj:pass`.

11 instances of `nsubj:pass` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt> (5; 42% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	planeta	planeta	NOUN	_	Number=Sing	5	nsubj:pass	_	_
3	seguinte	seguinte	ADJ	_	Number=Sing	2	amod	_	_
4	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux:pass	_	_
5	habitado	habitar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
6	por	por	ADP	_	_	8	case	_	_
7	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	bêbado	bêbado	NOUN	_	Gender=Masc|Number=Sing	5	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Mas	mas	CCONJ	_	_	4	cc	_	_
2	ele	ele	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
3	foi	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	recusado	recusar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	como	como	ADP	_	_	7	case	_	_
6	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	precedentes	precedente	NOUN	_	Number=Plur	4	obl	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


