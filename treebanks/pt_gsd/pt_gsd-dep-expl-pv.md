---
layout: base
title:  'Statistics of expl:pv in UD_Portuguese-GSD'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-GSD: Relations: `expl:pv`

This relation is a language-specific subtype of <tt><a href="pt_gsd-dep-expl.html">expl</a></tt>.

505 nodes (0%) are attached to their parents as `expl:pv`.

336 instances of `expl:pv` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04356435643564.

The following 6 pairs of parts of speech are connected with `expl:pv`: <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PART.html">PART</a></tt> (287; 57% instances), <tt><a href="pt_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (214; 42% instances), <tt><a href="pt_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="pt_gsd-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pt_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_gsd-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 expl:pv	color:blue
1	Especula	especular	VERB	VERB	_	0	root	_	_
2	se	_	PART	PRT	_	1	expl:pv	_	_
3	sobre	_	ADP	ADP	_	5	case	_	_
4	a	o	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	possibilidade	possibilidade	NOUN	NOUN	_	1	nmod	_	_
6	de	_	ADP	ADP	_	7	mark	_	_
7	estar	estar	VERB	VERB	_	5	nmod	_	_
8	extinta	extinto	ADJ	ADJ	_	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 expl:pv	color:blue
1	"	"	PUNCT	.	_	2	punct	_	SpaceAfter=No
2	Trata	tratar	VERB	VERB	_	0	root	_	_
3	se	_	PRON	PRON	_	2	expl:pv	_	_
4	de	de	ADP	ADP	_	6	case	_	_
5	uma	um	DET	DET	_	6	det	_	_
6	reorganização	reorganização	NOUN	NOUN	_	2	nmod	_	_
7	de	de	ADP	ADP	_	9	case	_	_
8	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	partido	partido	NOUN	NOUN	_	6	nmod	_	_
10	em	em	ADP	ADP	_	12	case	_	_
11	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	Estado	_	PROPN	PNOUN	_	6	nmod	_	SpaceAfter=No
13	"	"	PUNCT	.	_	2	punct	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:pv	color:blue
1	Muito	_	PRON	PRON	_	6	nsubj	_	_
2	de	de	ADP	ADP	_	4	case	_	_
3	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	atraso	atraso	NOUN	NOUN	_	1	nmod	_	_
5	se	_	PART	PRT	_	6	expl:pv	_	_
6	deve	dever	AUX	AUX	_	0	root	_	_
7	a	_	ADP	ADP	_	8	case	_	_
8	disputas	disputa	NOUN	NOUN	_	6	nmod	_	_
9	judiciais	judicial	ADJ	ADJ	_	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


