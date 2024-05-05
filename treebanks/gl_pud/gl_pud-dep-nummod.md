---
layout: base
title:  'Statistics of nummod in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `nummod`

This relation is universal.

310 nodes (1%) are attached to their parents as `nummod`.

229 instances of `nummod` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31290322580645.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (274; 88% instances), <tt><a href="gl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (17; 5% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (7; 2% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5000	5000	NUM	Z	NumType=Card	2	nummod	_	_
2	dólares	dólar	NOUN	NCMP000	Gender=Masc|Number=Plur	0	root	_	_
3	por	por	ADP	SP	AdpType=Prep	4	case	_	_
4	persoa	persoa	NOUN	NCFS000	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Fc	_	7	punct	_	_
6	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	máximo	máximo	NOUN	NCMS000	Gender=Masc|Number=Sing	2	appos	_	_
8	permitido	permitir	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nummod	color:blue
1	Cidades	cidade	NOUN	NCFP000	Gender=Fem|Number=Plur	4	nsubj	_	_
2	como	como	ADP	SP	AdpType=Prep	3	case	_	_
3	Milán	Milán	PROPN	NP00000	_	1	nmod	_	_
4	dependen	depender	VERB	VMIP3P0	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_
5	en	en	ADP	SP	AdpType=Prep	8	case	_	_
6	un	un	DET	DI0MS0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	80	80	NUM	Z	NumType=Card	8	nummod	_	SpaceAfter=No
8	%	%	SYM	Ft	_	4	obl	_	_
9	de	de	ADP	SP	AdpType=Prep	11	case	_	_
10	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	auga	auga	NOUN	NCFS000	Gender=Fem|Number=Sing	4	obl	_	_
12	alpina	alpino	ADJ	AQ0FS	_	11	amod	_	SpaceAfter=No
13	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nummod	color:blue
1	As	o	DET	DA0FP0	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	fontes	fonte	NOUN	NCFP000	Gender=Fem|Number=Plur	4	nsubj	_	_
3	consultadas	consultar	VERB	VMP00PF	Gender=Fem|Number=Plur|VerbForm=Part	2	amod	_	_
4	afirmaron	afirmar	VERB	VMIS3P0	Mood=Ind|Number=Plur|Person=3|Tense=Past	0	root	_	_
5	que	que	SCONJ	CS	_	10	mark	_	_
6	é	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
7	"	"	PUNCT	Fe	_	10	punct	_	SpaceAfter=No
8	100	100	NUM	Z	NumType=Card	10	nummod	_	SpaceAfter=No
9	%	%	SYM	Ft	_	10	advmod	_	_
10	Cospedal	cospedal	PROPN	NP00000	_	4	ccomp	_	SpaceAfter=No
11	"	"	PUNCT	Fe	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	Fp	_	10	punct	_	_

~~~


