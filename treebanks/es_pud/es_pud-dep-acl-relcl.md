---
layout: base
title:  'Statistics of acl:relcl in UD_Spanish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Spanish-PUD: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="es_pud-dep-acl.html">acl</a></tt>.

244 nodes (1%) are attached to their parents as `acl:relcl`.

244 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.51229508196721.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (210; 86% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Hay	haber	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	gente	gente	NOUN	NN	Gender=Fem|Number=Sing	1	obj	_	_
3	que	que	PRON	REL	Gender=Fem|Number=Sing|PronType=Rel	5	nsubj:pass	_	_
4	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
5	asesinada	asesinar	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	_
6	allí	allí	ADV	RB	_	5	advmod	_	SpaceAfter=No
7	.	.	PUNCT	.	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 acl:relcl	color:blue
1	Mientras	mientras	ADP	IN	_	9	discourse	_	_
2	tanto	tanto	ADV	RB	_	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	,	PunctType=Comm	1	punct	_	_
4	su	su	PRON	DTP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
5	puesto	puesto	NOUN	NN	Gender=Masc|Number=Sing	9	nsubj:pass	_	_
6	de	de	ADP	IN	_	7	case	_	_
7	tribuno	tribuno	NOUN	NN	Gender=Masc|Number=Sing	5	nmod	_	_
8	fue	ser	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
9	ocupado	ocupar	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
10	por	por	ADP	IN	_	11	case	_	_
11	Marco	Marco	PROPN	NNP	Gender=Masc|Number=Sing	9	obl:agent	_	_
12	Antonio	Antonio	PROPN	NNP	Gender=Masc|Number=Sing	11	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	,	PunctType=Comm	16	punct	_	_
14	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	16	nsubj	_	_
15	lo	él	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	16	obj	_	_
16	desempeñó	desempeñar	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	11	acl:relcl	_	_
17	hasta	hasta	ADP	IN	_	18	case	_	_
18	diciembre	diciembre	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	PunctType=Peri	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Lo	él	PRON	DT	Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs	2	det	_	_
2	único	único	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
3	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	6	nsubj	_	_
4	no	no	ADV	RB	Polarity=Neg	6	advmod	_	_
5	está	estar	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	claro	claro	ADJ	JJ	Gender=Masc|Number=Sing	2	acl:relcl	_	_
7	ahora	ahora	ADV	RB	_	6	advmod	_	_
8	es	ser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	en	en	ADP	IN	_	10	case	_	_
10	cuál	cuál	PRON	WP	Number=Sing|PronType=Int	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	PunctType=Peri	8	punct	_	_

~~~


