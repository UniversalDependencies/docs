---
layout: base
title:  'Statistics of nsubj:pass in UD_Italian-KIParlaForest'
udver: '2'
---

## Treebank Statistics: UD_Italian-KIParlaForest: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="it_kiparlaforest-dep-nsubj.html">nsubj</a></tt>.

33 nodes (0%) are attached to their parents as `nsubj:pass`.

24 instances of `nsubj:pass` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.90909090909091.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-NOUN.html">NOUN</a></tt> (15; 45% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (15; 45% instances), <tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_kiparlaforest-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="it_kiparlaforest-pos-VERB.html">VERB</a></tt>-<tt><a href="it_kiparlaforest-pos-SCONJ.html">SCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nsubj:pass	color:blue
1	purtroppo	purtroppo	ADV	_	_	3	advmod	_	Begin=510.264|KID=334-0
2	viene	venire	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	KID=334-1
3	oscurato	oscurare	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	KID=334-2
4	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	KID=334-3
5	nome	nome	NOUN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	End=512.044|KID=334-4

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nsubj:pass	color:blue
1	ma	ma	CCONJ	_	_	4	cc	_	Begin=2519.04|KID=985-0
2	ce	ce	PRON	_	Clitic=Yes|Number=Plur|Person=1|PronType=Prs	4	expl	_	KID=985-1
3	n'	ne	PRON	_	Clitic=Yes|PronType=Prs	4	expl	_	KID=985-2|SpaceAfter=No
4	é	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=985-3
5	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	nsubj	_	KID=985-4
6	molto	molto	ADV	_	_	8	advmod	_	KID=985-5
7	più	più	ADV	_	_	8	advmod	_	KID=985-6
8	vecchia	vecchio	ADJ	_	Gender=Fem|Number=Sing	5	amod	_	KID=985-7
9	che	che	PRON	_	PronType=Rel	12	nsubj:pass	_	KID=985-8
10	è	essere	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	KID=985-9
11	stata	essere	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	12	aux:pass	_	KID=985-10
12	trovata	trovare	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	acl:relcl	_	End=2521.654|Intonation=WeaklyRising|KID=985-11

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	magari	magari	ADV	_	_	5	advmod	_	Begin=457.783|KID=206-0
2	no	no	ADV	_	PronType=Neg	5	advmod	_	KID=206-1
3	tutte	tutto	DET	_	Gender=Fem|Number=Plur|PronType=Tot	5	det:predet	_	KID=206-2
4	queste	questo	DET	_	Gender=Fem|Number=Plur|PronType=Dem	5	det	_	KID=206-3
5	lingue	lingua	NOUN	_	Gender=Fem|Number=Plur	25	nsubj	_	KID=206-4
6	che	che	PRON	_	PronType=Rel	9	nsubj:pass	_	KID=206-5
7	ora	ora	ADV	_	_	9	advmod	_	KID=206-6
8	sono	essere	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	KID=206-7
9	sparse	sparso	ADJ	_	Gender=Fem|Number=Plur	5	acl:relcl	_	KID=206-8|Prolonged=Yes
10	su	su	ADP	_	_	12	case	_	KID=206-9
11	questo	questo	DET	_	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	KID=206-10
12	territorio	territorio	NOUN	_	Gender=Masc|Number=Sing	9	obl	_	KID=206-11
13	vastissimo	vasto	ADJ	_	Degree=Abs|Gender=Masc|Number=Sing	12	amod	_	KID=206-12
14	e	e	CCONJ	_	_	16	cc	_	KID=206-13
15	che	che	PRON	_	PronType=Rel	16	nsubj	_	KID=206-14
16	hanno	avere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	9	conj	_	KID=206-15
17	tutti	tutto	DET	_	Gender=Masc|Number=Plur|PronType=Tot	19	det:predet	_	KID=206-16|PaceFast=Yes
18	questi	questo	DET	_	Gender=Masc|Number=Plur|PronType=Dem	19	det	_	KID=206-17|PaceFast=Yes
19	tratti	tratto	NOUN	_	Gender=Masc|Number=Plur	16	obj	_	KID=206-18
20	differenti	differente	ADJ	_	Number=Plur	19	amod	_	End=462.668|Intonation=WeaklyRising|KID=206-19
21	forse	forse	ADV	_	_	25	advmod	_	Begin=462.717|KID=207-0
22	una	uno	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	KID=207-1
23	volta	volta	NOUN	_	Gender=Fem|Number=Sing	25	obl	_	KID=207-2|PauseAfter=Yes|Prolonged=Yes
24	no	no	ADV	_	PronType=Neg	23	discourse:tag	_	Intonation=WeaklyRising|KID=207-4
25	hanno	avere	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	KID=207-5
26	un	uno	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	27	det	_	KID=207-6
27	discendente	discendente	NOUN	_	Number=Sing	25	obj	_	KID=207-7
28	comune	comune	ADJ	_	Number=Sing	27	amod	_	End=465.331|KID=207-8

~~~


