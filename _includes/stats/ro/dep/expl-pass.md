

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:poss](), [expl:pv]().

1108 nodes (1%) are attached to their parents as `expl:pass`.

1090 instances of `expl:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18862815884477.

The following 2 pairs of parts of speech are connected with `expl:pass`: [ro-pos/VERB]()-[ro-pos/PRON]() (1107; 100% instances), [ro-pos/VERB]()-[ro-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 expl:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	clipa	clipă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nmod:tmod	_	_
3	aceea	acela	DET	Dd3fsr---o	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Postnom|PronType=Dem	2	det	_	_
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	_
6	auzi	auzi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	bufnitură	bufnitură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
9	înspăimântătoare	înspăimântător	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	8	amod	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 29 expl:pass	color:blue
1	6	6	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	8	parataxis	_	_
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
12	societăți	societate	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	nmod	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	asigurare	asigurare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	_
15	,	,	PUNCT	COMMA	_	24	punct	_	_
16	posibil	posibil	ADV	Rgp	Degree=Pos	19	advmod	_	_
17	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	24	case	_	_
18	ajutorul	ajutor	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	17	mwe	_	_
19	uneia	unul	PRON	Pi3fso	Case=Dat,Gen|Gender=Fem|Number=Sing|Person=3|PronType=Ind	24	amod	_	_
20	sau	sau	CONJ	Ccssp	Negative=Pos	19	cc	_	_
21	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	23	det	_	_
22	mai	mai	ADV	Rp	_	23	advmod	_	_
23	multor	mult	DET	Di3-po---e	Case=Dat,Gen|Number=Plur|Person=3|Position=Prenom|PronType=Ind	19	conj	_	_
24	societăți	societate	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	nmod	_	_
25	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	26	case	_	_
26	reasigurare	reasigurare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	24	nmod	_	_
27	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	30	case	_	_
28	a-	avea	AUX	Va--3s	Number=Sing|Person=3	30	mark	_	_
29	și	și	CONJ	Crssp	Negative=Pos	30	expl:pass	_	_
30	reasigura	reasigura	VERB	Vmnp	Tense=Pres|VerbForm=Inf	10	advcl	_	_
31	reciproc	reciproc	ADV	Rgp	Degree=Pos	30	advmod	_	_
32	,	,	PUNCT	COMMA	_	31	punct	_	_
33	integral	integral	ADV	Rgp	Degree=Pos	31	conj	_	_
34	sau	sau	CONJ	Ccssp	Negative=Pos	31	cc	_	_
35	parțial	parțial	ADV	Rgp	Degree=Pos	31	conj	_	_
36	,	,	PUNCT	COMMA	_	31	punct	_	_
37	obligațiile	obligație	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	30	dobj	_	_
38	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	41	case	_	_
39	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	41	det	_	_
40	anumită	anumit	DET	Di3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	41	amod	_	_
41	categorie	categorie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	37	nmod	_	_
42	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	43	case	_	_
43	riscuri	risc	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	41	nmod	_	_
44	;	;	PUNCT	SCOLON	AdpType=Prep	8	punct	_	_

~~~


