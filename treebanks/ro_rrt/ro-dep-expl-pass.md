---
layout: base
title:  'Statistics of expl:pass in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `expl:pass`

This relation is a language-specific subtype of <tt><a href="ro-dep-expl.html">expl</a></tt>.
There are also 3 other language-specific subtypes of `expl`: <tt><a href="ro-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro-dep-expl-pv.html">expl:pv</a></tt>.

1110 nodes (1%) are attached to their parents as `expl:pass`.

1092 instances of `expl:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18918918918919.

The following 2 pairs of parts of speech are connected with `expl:pass`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (1109; 100% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	etapă	etapă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	obl	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	C.M.	C.M.	NOUN	Yn	Abbr=Yes	3	nmod	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	consumă	consuma	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	destulă	destul	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	cocaină	cocaină	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 29 expl:pass	color:blue
1	6	6	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	8	parataxis	_	SpaceAfter=No
2	.	.	PUNCT	PERIOD	_	1	punct	_	_
3	'	'	PUNCT	QUOT	_	4	punct	_	_
4	Grupuri	grup	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	nsubj	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
6	coreasigurare	coreasigurare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod	_	_
7	'	'	PUNCT	QUOT	_	4	punct	_	_
8	înseamnă	însemna	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	grupuri	grup	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	8	xcomp	_	_
10	constituite	constitui	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	9	amod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	societăți	societate	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	obl	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	asigurare	asigurare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	SpaceAfter=No
15	,	,	PUNCT	COMMA	_	24	punct	_	_
16	posibil	posibil	ADV	Rgp	Degree=Pos	19	advmod	_	_
17	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
18	ajutorul	ajutor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	17	fixed	_	_
19	uneia	unul	PRON	Pi3fso	Case=Dat,Gen|Gender=Fem|Number=Sing|Person=3|PronType=Ind	24	amod	_	_
20	sau	sau	CCONJ	Ccssp	Polarity=Pos	23	cc	_	_
21	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	23	det	_	_
22	mai	mai	ADV	Rp	_	23	advmod	_	_
23	multor	mult	DET	Di3-po---e	Case=Dat,Gen|Number=Plur|Person=3|Position=Prenom|PronType=Ind	19	conj	_	_
24	societăți	societate	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	obl	_	_
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	26	case	_	_
26	reasigurare	reasigurare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	24	nmod	_	_
27	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	_
28	a-	a	PART	Qn	PartType=Inf	30	mark	_	SpaceAfter=No
29	și	și	CCONJ	Crssp	Polarity=Pos	30	expl:pass	_	_
30	reasigura	reasigura	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	advcl	_	_
31	reciproc	reciproc	ADV	Rgp	Degree=Pos	30	advmod	_	SpaceAfter=No
32	,	,	PUNCT	COMMA	_	33	punct	_	_
33	integral	integral	ADV	Rgp	Degree=Pos	31	conj	_	_
34	sau	sau	CCONJ	Ccssp	Polarity=Pos	35	cc	_	_
35	parțial	parțial	ADV	Rgp	Degree=Pos	31	conj	_	SpaceAfter=No
36	,	,	PUNCT	COMMA	_	31	punct	_	_
37	obligațiile	obligație	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	30	obj	_	_
38	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	41	case	_	_
39	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	41	det	_	_
40	anumită	anumit	DET	Di3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	41	det	_	_
41	categorie	categorie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	37	nmod	_	_
42	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	43	case	_	_
43	riscuri	risc	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	41	nmod	_	SpaceAfter=No
44	;	;	PUNCT	SCOLON	AdpType=Prep	8	punct	_	_

~~~


