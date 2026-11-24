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

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (208; 85% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (17; 7% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="es_pud-pos-DET.html">DET</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="es_pud-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="es_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="es_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="es_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="es_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
1	Mientras	mientras	SCONJ	IN	ExtPos=ADV	9	advmod	_	_
2	tanto	tanto	PRON	RB	Gender=Masc|Number=Sing|NumType=Card|PronType=Dem	1	fixed	_	SpaceAfter=No
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
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 16 acl:relcl	color:blue
1	La	el	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
2	gran	gran	ADJ	JJ	Number=Sing	3	amod	_	_
3	altitud	altitud	NOUN	NN	Gender=Fem|Number=Sing	4	nsubj	_	_
4	sirve	servir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	para	para	ADP	IN	_	6	case	_	_
6	refrescar	refrescar	VERB	VB	VerbForm=Inf	4	xcomp	_	_
7	el	el	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	clima	clima	NOUN	NN	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
9	,	,	PUNCT	,	PunctType=Comm	16	punct	_	_
10	que	que	PRON	REL	Gender=Masc|Number=Sing|PronType=Rel	16	nsubj	_	_
11	de	de	ADP	IN	_	13	case	_	_
12	otra	otro	DET	DT	Gender=Fem|Number=Sing|PronType=Ind	13	det	_	_
13	manera	manera	NOUN	NN	Gender=Fem|Number=Sing	16	obl	_	_
14	sería	ser	AUX	VBC	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	16	cop	_	_
15	muy	muy	ADV	RB	_	16	advmod	_	_
16	caluroso	caluroso	ADJ	JJ	Gender=Masc|Number=Sing	8	acl:relcl	_	SpaceAfter=No
17	.	.	PUNCT	.	PunctType=Peri	4	punct	_	_

~~~


