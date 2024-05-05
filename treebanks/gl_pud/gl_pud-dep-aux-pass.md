---
layout: base
title:  'Statistics of aux:pass in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="gl_pud-dep-aux.html">aux</a></tt>.

50 nodes (0%) are attached to their parents as `aux:pass`.

50 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-AUX.html">AUX</a></tt> (49; 98% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	Ela	el	PRON	PP3FS000	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	tamén	tamén	ADV	RG	_	4	advmod	_	_
3	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
4	acusada	acusado	VERB	VMP00SF	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	SP	AdpType=Prep	6	case	_	_
6	tentar	tentar	VERB	VMN0000	VerbForm=Inf	4	xcomp	_	_
7	matar	matar	VERB	VMN0000	VerbForm=Inf	6	xcomp	_	_
8	a	a	ADP	SP	AdpType=Prep	11	case	_	_
9	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	11	det	_	_
11	filla	fillo	NOUN	NCFS000	Gender=Fem|Number=Sing	7	obj	_	_
12	de	de	ADP	SP	AdpType=Prep	14	case	_	_
13	dous	2	NUM	Z	NumType=Card	14	nummod	_	_
14	anos	ano	NOUN	NCMP000	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 aux:pass	color:blue
1	Segundo	segundo	ADP	SP	AdpType=Prep	3	case	_	_
2	se	se	PRON	PP3CN000	Gender=Com|Person=3|PronType=Prs	3	expl	_	_
3	informa	informar	VERB	VMIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	21	obl	_	SpaceAfter=No
4	,	,	PUNCT	Fc	_	3	punct	_	_
5	Cuarón	cuarón	PROPN	NP00000	_	21	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	Fc	_	9	punct	_	_
7	cuxa	cuxo	DET	DP0FS	Gender=Fem|Number=Sing|PronType=Rel	9	det	_	_
8	última	último	ADJ	AQ0FS	_	9	amod	_	_
9	película	película	NOUN	NCFS000	Gender=Fem|Number=Sing	14	nsubj:pass	_	SpaceAfter=No
10	,	,	PUNCT	Fc	_	11	punct	_	_
11	Gravity	gravity	PROPN	NP00000	_	9	appos	_	SpaceAfter=No
12	,	,	PUNCT	Fc	_	11	punct	_	_
13	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	14	aux:pass	_	_
14	gañadora	gañador	ADJ	AQ0FS	_	5	acl	_	_
15	de	de	ADP	SP	AdpType=Prep	17	case	_	_
16	un	un	DET	DI0MS0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	Óscar	óscar	PROPN	NP00000	_	14	obl	_	SpaceAfter=No
18	,	,	PUNCT	Fc	_	14	punct	_	_
19	non	non	ADV	RN	Polarity=Neg	21	advmod	_	_
20	estaba	estar	AUX	VMII3S0	Mood=Ind|Number=Sing|Person=3|Tense=Imp	21	cop	_	_
21	presente	presente	ADJ	AQ0CS	_	0	root	_	_
22	en	en	ADP	SP	AdpType=Prep	24	case	_	_
23	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	estudo	estudo	NOUN	NCMS000	Gender=Masc|Number=Sing	21	obl	_	_
25	en	en	ADP	SP	AdpType=Prep	27	case	_	_
26	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	momento	momento	NOUN	NCMS000	Gender=Masc|Number=Sing	21	obl	_	_
28	de	de	ADP	SP	AdpType=Prep	30	case	_	_
29	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
30	accidente	accidente	NOUN	NCMS000	Gender=Masc|Number=Sing	27	nmod	_	SpaceAfter=No
31	.	.	PUNCT	Fp	_	21	punct	_	_

~~~


