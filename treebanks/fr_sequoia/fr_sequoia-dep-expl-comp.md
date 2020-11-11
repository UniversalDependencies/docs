---
layout: base
title:  'Statistics of expl:comp in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `expl:comp`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `expl`: <tt><a href="fr_sequoia-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="fr_sequoia-dep-expl-subj.html">expl:subj</a></tt>.

286 nodes (0%) are attached to their parents as `expl:comp`.

283 instances of `expl:comp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22727272727273.

The following 2 pairs of parts of speech are connected with `expl:comp`: <tt><a href="fr_sequoia-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (285; 100% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 expl:comp	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	EBM	EBM	PROPN	_	Number=Sing	4	nsubj	_	_
3	s'	se	PRON	_	Person=3|Reflex=Yes	4	expl:comp	_	SpaceAfter=No
4	inclina	incliner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	devant	devant	ADP	_	_	6	case	_	_
6	Joeuf	Joeuf	PROPN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
7	par	par	ADP	_	_	8	case	_	_
8	70-61	70-61	NOUN	_	NumType=Card	4	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 15 expl:comp	color:blue
1	Si	si	SCONJ	_	_	4	mark	_	_
2	cette	ce	DET	_	Gender=Fem|Number=Sing|PronType=Dem	3	det	_	_
3	réalisation	réalisation	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
4	permet	permettre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	advcl	_	_
5	en	en	ADP	_	_	4	advmod	_	ExtPos=ADV
6	plus	plus	ADV	_	_	5	fixed	_	_
7	d'	de	ADP	_	_	8	mark	_	SpaceAfter=No
8	améliorer	améliorer	VERB	_	VerbForm=Inf	4	xcomp	_	_
9	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	dessertes	desserte	NOUN	_	Gender=Fem|Number=Plur	8	obj	_	_
11	de	de	ADP	_	_	12	case	_	_
12	voiries	voirie	NOUN	_	Gender=Fem|Number=Plur	10	nmod	_	_
13	cela	cela	PRON	_	Number=Sing|PronType=Dem	18	nsubj	_	_
14	n'	ne	ADV	_	Polarity=Neg	18	advmod	_	SpaceAfter=No
15	en	en	PRON	_	Person=3	18	expl:comp	_	_
16	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	18	cop	_	_
17	que	que	ADV	_	_	18	advmod	_	_
18	mieux	mieux	ADV	_	_	0	root	_	SpaceAfter=No
19	.	.	PUNCT	_	_	18	punct	_	_

~~~


