---
layout: base
title:  'Statistics of nsubj:pass in UD_Spanish-AnCora'
udver: '2'
---

## Treebank Statistics: UD_Spanish-AnCora: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="es_ancora-dep-nsubj.html">nsubj</a></tt>.

41 nodes (0%) are attached to their parents as `nsubj:pass`.

21 instances of `nsubj:pass` (51%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17073170731707.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (29; 71% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (5; 12% instances), <tt><a href="es_ancora-pos-VERB.html">VERB</a></tt>-<tt><a href="es_ancora-pos-PROPN.html">PROPN</a></tt> (4; 10% instances), <tt><a href="es_ancora-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_ancora-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="es_ancora-pos-PRON.html">PRON</a></tt>-<tt><a href="es_ancora-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	El	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	accidente	accidente	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	se	se	PRON	PRON	_	4	expl:pass	_	_
4	saldó	saldar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	sin	sin	ADP	ADP	AdpType=Prep	6	case	_	_
6	heridos	herido	NOUN	NOUN	Gender=Masc|Number=Plur	4	obl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 nsubj:pass	color:blue
1	Incluso	incluso	ADV	ADV	_	2	advmod	_	_
2	Italia	Italia	PROPN	PROPN	_	18	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
4	otro	otro	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	5	det	_	_
5	país	país	NOUN	NOUN	Gender=Masc|Number=Sing	2	appos	_	_
6	que	que	PRON	PRON	PronType=Rel	9	nsubj:pass	_	_
7	no	no	ADV	ADV	Polarity=Neg	9	advmod	_	_
8	se	se	PRON	PRON	_	9	expl:pass	_	_
9	caracteriza	caracterizar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
10	por	por	ADP	ADP	AdpType=Prep	12	case	_	_
11	su	su	DET	DET	Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	sensibilidad	sensibilidad	NOUN	NOUN	Gender=Fem|Number=Sing	9	obj	_	_
13	pública	público	ADJ	ADJ	Gender=Fem|Number=Sing	12	amod	_	_
14	hacia	hacia	ADP	ADP	AdpType=Prep	16	case	_	_
15	la	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	familia	familia	NOUN	NOUN	Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
17	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
18	tiene	tener	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
19	un	uno	DET	DET	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	20	det	_	_
20	6%	6/100	SYM	SYM	NumForm=Digit|NumType=Frac	18	obj	_	_
21	de	de	ADP	ADP	AdpType=Prep	22	case	_	_
22	infantes	infante	NOUN	NOUN	Gender=Masc|Number=Plur	20	nmod	_	_
23	cubiertos	cubierto	ADJ	ADJ	Gender=Masc|Number=Plur|VerbForm=Part	22	amod	_	SpaceAfter=No
24	.	.	PUNCT	PUNCT	PunctType=Peri	18	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:pass	color:blue
1	LA	la	DET	DET	Gender=Fem|Number=Sing|PronType=Dem	2	det	_	_
2	REAL	real	PROPN	PROPN	_	6	nsubj:pass	_	MWE=REAL_SOCIEDAD|MWEPOS=PROPN
3	SOCIEDAD	sociedad	PROPN	PROPN	_	2	flat	_	_
4	NO	no	ADV	ADV	Polarity=Neg	6	advmod	_	_
5	SE	se	PRON	PRON	_	6	expl:pass	_	_
6	ALEJA	aleja	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	DEL	del	ADP	ADP	AdpType=Preppron|Gender=Masc|Number=Sing	8	case	_	_
8	PRECIPICIO	precipicio	NOUN	NOUN	Gender=Masc|Number=Sing	6	obl	_	_

~~~


