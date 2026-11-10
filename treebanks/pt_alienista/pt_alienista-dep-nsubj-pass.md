---
layout: base
title:  'Statistics of nsubj:pass in UD_Portuguese-Alienista'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Alienista: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_alienista-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="pt_alienista-dep-nsubj-outer.html">nsubj:outer</a></tt>.

36 nodes (0%) are attached to their parents as `nsubj:pass`.

30 instances of `nsubj:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.41666666666667.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-NOUN.html">NOUN</a></tt> (23; 64% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PROPN.html">PROPN</a></tt> (8; 22% instances), <tt><a href="pt_alienista-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_alienista-pos-PRON.html">PRON</a></tt> (5; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	alienados	alienado	NOUN	_	Gender=Masc|Number=Plur	4	nsubj:pass	_	_
3	foram	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	alojados	alojar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	_
5	por	por	ADP	_	_	6	case	_	_
6	classes	classe	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	D.	D.	PROPN	_	_	4	nsubj:pass	_	_
2	Evarista	Evarista	PROPN	_	_	1	flat:name	_	_
3	fora	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	4	aux:pass	_	_
4	recolhida	recolher	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
5	a	a	ADP	_	_	8	case	_	_
6	as	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
7	duas	dois	NUM	_	Gender=Fem|NumType=Card	8	nummod	_	_
8	horas	hora	NOUN	_	Gender=Fem|Number=Plur	4	obl	_	_
9	de	de	ADP	_	_	11	case	_	_
10	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	noite	noite	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 23 nsubj:pass	color:blue
1	Muitos	muito	ADJ	_	Gender=Masc|Number=Plur	2	amod	_	_
2	dementes	demente	NOUN	_	Number=Plur	5	nsubj	_	_
3	já	já	ADV	_	_	5	advmod	_	_
4	estavam	estar	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	recolhidos	recolhido	ADJ	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	SpaceAfter=No
6	;	;	PUNCT	_	_	10	punct	_	_
7	e	e	CCONJ	_	_	10	cc	_	_
8	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	parentes	parente	NOUN	_	Gender=Masc|Number=Plur	10	nsubj	_	_
10	tiveram	ter	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	_
11	ocasião	ocasião	NOUN	_	Gender=Fem|Number=Sing	10	obj	_	_
12	de	de	ADP	_	_	13	mark	_	_
13	ver	ver	VERB	_	VerbForm=Inf	11	acl	_	_
14	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	carinho	carinho	NOUN	_	Gender=Masc|Number=Sing	13	obj	_	_
16	paternal	paternal	ADJ	_	Number=Sing	15	amod	_	_
17	e	e	CCONJ	_	_	19	cc	_	_
18	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	caridade	caridade	NOUN	_	Gender=Fem|Number=Sing	15	conj	_	_
20	cristã	cristão	ADJ	_	Gender=Fem|Number=Sing	19	amod	_	_
21	com	com	ADP	_	_	22	case	_	_
22	que	que	PRON	_	PronType=Rel	26	obl	_	_
23	eles	ele	PRON	_	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	26	nsubj:pass	_	_
24	iam	ir	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	26	aux	_	_
25	ser	ser	AUX	_	VerbForm=Inf	26	aux:pass	_	_
26	tratados	tratar	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	15	acl:relcl	_	SpaceAfter=No
27	.	.	PUNCT	_	_	5	punct	_	_

~~~


