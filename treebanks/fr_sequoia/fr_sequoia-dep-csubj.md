---
layout: base
title:  'Statistics of csubj in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="fr_sequoia-dep-csubj-pass.html">csubj:pass</a></tt>.

62 nodes (0%) are attached to their parents as `csubj`.

62 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.35483870967742.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (39; 63% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (18; 29% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	nécessaire	nécessaire	ADJ	_	Number=Sing	0	root	_	_
4	d'	de	ADP	_	_	5	mark	_	SpaceAfter=No
5	augmenter	augmenter	VERB	_	VerbForm=Inf	3	csubj	_	Subject=Generic
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	dotation	dotation	NOUN	_	Gender=Fem|Number=Sing	5	obj	_	_
8	et	et	CCONJ	_	_	10	cc	_	_
9	de	de	ADP	_	_	10	mark	_	_
10	créer	créer	VERB	_	VerbForm=Inf	5	conj	_	Subject=Generic
11	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	poste	poste	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	budgétaire	budgétaire	ADJ	_	Number=Sing	12	amod	_	_
14	;	;	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 csubj	color:blue
1	Il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	rapidement	rapidement	ADV	_	_	4	advmod	_	_
4	apparu	apparaître	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	10	mark	_	_
6	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	7	det	_	SpaceAfter=No
7	armée	armée	NOUN	_	Gender=Fem|Number=Sing	10	nsubj	_	_
8	taïwanaise	taïwanais	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	_
9	n'	ne	ADV	_	Polarity=Neg	10	advmod	_	SpaceAfter=No
10	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	csubj	_	_
11	pas	pas	ADV	_	Polarity=Neg	10	advmod	_	_
12	tant	tant	ADV	_	_	13	advmod	_	_
13	besoin	besoin	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
14	de	de	ADP	_	_	16	case	_	_
15	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	16	det	_	_
16	matériel	matériel	NOUN	_	Gender=Masc|Number=Sing	10	obl:arg	_	_
17	ultrasophistiqué	ultrasophistiqué	ADJ	_	Gender=Masc|Number=Sing	16	amod	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 csubj	color:blue
1	Il	lui	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl:subj	_	_
2	apparaît	apparaître	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	_	_	9	mark	_	_
4	Nicolas	Nicolas	PROPN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
5	Sarkozy	Sarkozy	PROPN	_	_	4	flat:name	_	_
6	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
7	à	à	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	courant	courant	NOUN	_	Gender=Masc|Number=Sing	2	csubj	_	_
10	de	de	ADP	_	_	12	case	_	_
11	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	affaire	affaire	NOUN	_	Gender=Fem|Number=Sing	9	nmod	_	_
13	dès	dès	ADP	_	_	14	case	_	_
14	septembre	septembre	NOUN	_	Gender=Masc|Number=Sing	9	obl:mod	_	_
15	2004	2004	NUM	_	NumType=Card	14	nmod	_	SpaceAfter=No
16	,	,	PUNCT	_	_	19	punct	_	_
17	mais	mais	CCONJ	_	_	19	cc	_	_
18	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	19	aux:tense	_	_
19	gardé	garder	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	conj	_	_
20	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	silence	silence	NOUN	_	Gender=Masc|Number=Sing	19	obj	_	_
22	sans	sans	ADP	_	_	23	mark	_	_
23	chercher	chercher	VERB	_	VerbForm=Inf	19	advcl	_	Subject=Instantiated
24	à	à	ADP	_	_	26	mark	_	_
25	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	26	obj	_	_
26	défendre	défendre	VERB	_	VerbForm=Inf	23	xcomp	_	Subject=SubjRaising
27	jusqu'	jusque	ADP	_	_	29	case	_	SpaceAfter=No
28	à	à	ADP	_	_	29	case	_	_
29	début	début	NOUN	_	Gender=Masc|Number=Sing	19	obl:mod	_	_
30	2006	2006	NUM	_	NumType=Card	29	nmod	_	SpaceAfter=No
31	.	.	PUNCT	_	_	2	punct	_	_

~~~


