---
layout: base
title:  'Statistics of iobj in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `iobj`

This relation is universal.

70 nodes (0%) are attached to their parents as `iobj`.

53 instances of `iobj` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.41428571428571.

The following 4 pairs of parts of speech are connected with `iobj`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (44; 63% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (14; 20% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (11; 16% instances), <tt><a href="gl_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 iobj	color:blue
1	Iso	iso	PRON	PD0CN000	Gender=Neut|PronType=Dem	4	nsubj	_	_
2	é	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	4	cop	_	_
3	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	que	que	PRON	PR0CN000	Gender=Neut|PronType=Rel	6	nsubj	_	_
5	nos	nos	PRON	PP1CP000	Gender=Com|Number=Plur|Person=1|PronType=Prs	6	iobj	_	_
6	fai	facer	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
7	seguir	seguir	VERB	VMN0000	VerbForm=Inf	6	xcomp	_	_
8	volvendo	volver	VERB	VMG0000	VerbForm=Ger	7	advcl	_	_
9	por	por	ADP	SP	AdpType=Prep	10	case	_	_
10	máis	máis	ADV	RG	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	Fp	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 iobj	color:blue
1	Haberá	haber	VERB	VMIF3S0	Mood=Ind|Number=Sing|Person=3|Tense=Fut	0	root	_	_
2	mobilizacións	mobilización	NOUN	NCFP000	Gender=Fem|Number=Plur	1	obj	_	_
3	e	e	CCONJ	CC	_	5	cc	_	_
4	máis	máis	ADV	RG	_	5	advmod	_	_
5	cousas	cousa	NOUN	NCFP000	Gender=Fem|Number=Plur	2	conj	_	SpaceAfter=No
6	,	,	PUNCT	Fc	_	10	punct	_	_
7	xa	xa	ADV	RG	_	10	advmod	_	_
8	está	estar	AUX	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	10	cop	_	_
9	todo	todo	PRON	PI0MS0	Gender=Masc|Number=Sing|PronType=Ind	10	nsubj	_	_
10	previsto	prever	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	1	conj	_	SpaceAfter=No
11	,	,	PUNCT	Fc	_	12	punct	_	_
12	informou	informar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	1	parataxis	_	_
13	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	oposición	oposición	NOUN	NCFS000	Gender=Fem|Number=Sing	12	nsubj	_	_
15	a	a	ADP	SP	AdpType=Prep	17	case	_	_
16	El	el	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Mundo	mundo	NOUN	NCMS000	Gender=Masc|Number=Sing	12	iobj	_	SpaceAfter=No
18	.	.	PUNCT	Fp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 iobj	color:blue
1	"	"	PUNCT	Fe	_	2	punct	_	SpaceAfter=No
2	Sinto	sentir	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	me	me	PRON	PP1CS000	Gender=Com|Number=Sing|Person=1|PronType=Prs	2	expl	_	_
4	poderoso	poderoso	ADJ	AQ0MS	_	3	xcomp	_	_
5	cando	cando	ADV	RG	_	7	advmod	_	_
6	o	o	PRON	PP3MSA00	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
7	imito	imitar	VERB	VMIP1S0	Mood=Ind|Number=Sing|Person=1|Tense=Pres	2	advcl	_	SpaceAfter=No
8	"	"	PUNCT	Fe	_	2	punct	_	SpaceAfter=No
9	,	,	PUNCT	Fc	_	10	punct	_	_
10	explicou	explicar	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	2	parataxis	_	_
11	a	a	ADP	SP	AdpType=Prep	12	case	_	_
12	Slate	slate	PROPN	NP00000	_	10	iobj	_	_
13	John	john	PROPN	NP00000	_	10	nsubj	_	_
14	Di	di	PROPN	NP00000	_	13	flat:name	_	_
15	Domenico	domenico	PROPN	NP00000	_	13	flat:name	_	SpaceAfter=No
16	,	,	PUNCT	Fc	_	17	punct	_	_
17	imitador	imitador	NOUN	NCMS000	Gender=Masc|Number=Sing	14	appos	_	_
18	de	de	ADP	SP	AdpType=Prep	19	case	_	_
19	Donald	donald	PROPN	NP00000	_	17	nmod	_	_
20	Trump	trump	PROPN	NP00000	_	19	flat:name	_	SpaceAfter=No
21	,	,	PUNCT	Fc	_	17	punct	_	_
22	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	ano	ano	NOUN	NCMS000	Gender=Masc|Number=Sing	10	obl	_	_
24	pasado	pasado	ADJ	AQ0MS	_	23	amod	_	SpaceAfter=No
25	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


