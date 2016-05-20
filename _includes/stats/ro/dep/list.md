

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

70 nodes (0%) are attached to their parents as `list`.

70 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 8 pairs of parts of speech are connected with `list`: [ro-pos/NOUN]()-[ro-pos/NOUN]() (59; 84% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (3; 4% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (2; 3% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (2; 3% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 list	color:blue
1	Lista	listă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nsubjpass	_	_
2	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	3	expl:pass	_	_
3	publică	publica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	în	în	ADP	Sp	AdpType=Prep	5	case	_	_
5	Jurnalul	jurnal	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nmod	_	_
6	Oficial	oficial	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
7	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
8	Uniunii	uniune	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
9	Europene	european	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
10	,	,	PUNCT	COMMA	_	11	punct	_	_
11	seria	serie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	5	list	_	_
12	C	C	NOUN	Nc	_	11	nmod	_	_
13	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 list	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	b	b	NOUN	Ncm--n	Definite=Ind|Gender=Masc	4	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	nerespectarea	nerespectare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
5	elementelor	element	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	4	nmod	_	_
6	esențiale	esențial	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	5	amod	_	_
7	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	8	det	_	_
8	acordului	acord	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	5	nmod	_	_
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	menționate	menționa	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	5	acl	_	_
11	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	articolul	articol	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
13	1	1	NUM	Mc	NumType=Card	12	nmod	_	_
14	[	[	PUNCT	LSQR	_	15	punct	_	_
15	APC	APC	PROPN	Np	_	12	appos	_	_
16	Tadjikistan	Tadjikistan	PROPN	Np	_	15	name	_	_
17	:	:	PUNCT	COLON	_	15	punct	_	_
18	articolul	articol	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	15	list	_	_
19	2	2	NUM	Mc	NumType=Card	18	nmod	_	_
20	]	]	PUNCT	RSQR	_	15	punct	_	_
21	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 30 list	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	3	3	NUM	Mc	NumType=Card	10	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	Măsura	măsură	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	10	nsubj	_	_
5	prevăzută	prevăzut	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
6	în	în	ADP	Sp	AdpType=Prep	8	case	_	_
7	prezenta	prezent	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	decizie	decizie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
9	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	conformă	conform	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
11	cu	cu	ADP	Sp	AdpType=Prep	12	case	_	_
12	avizul	aviz	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	10	nmod	_	_
13	Comitetului	comitet	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	12	nmod	_	_
14	pentru	pentru	ADP	Sp	AdpType=Prep	15	case	_	_
15	accize	acciz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	13	nmod	_	_
16	,	,	PUNCT	COMMA	_	17	punct	_	_
17	modificat	modificat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	12	acl	_	_
18	de	de	ADP	Sp	AdpType=Prep	19	case	_	_
19	Decizia	decizie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	17	nmod:agent	_	_
20	2002	2002	NUM	Mc	NumType=Card	19	nmod	_	_
21	/	/	SYM	SLASH	AdpType=Prep	19	punct	_	_
22	269	269	NUM	Mc	NumType=Card	19	nmod	_	_
23	/	/	SYM	SLASH	AdpType=Prep	19	punct	_	_
24	CE	CE	NOUN	Yn	Abbr=Yes	19	nmod	_	_
25	(	(	PUNCT	LPAR	_	26	punct	_	_
26	JO	JO	PROPN	Np	_	19	nmod	_	_
27	L	L	NOUN	Nc	_	26	nmod	_	_
28	93	93	NUM	Mc	NumType=Card	26	nmod	_	_
29	,	,	PUNCT	COMMA	_	26	punct	_	_
30	10.04.2002	10.04.2002	NUM	Mc	NumType=Card	26	list	_	_
31	,	,	PUNCT	COMMA	_	26	punct	_	_
32	p.	pagină	NOUN	Yn	Abbr=Yes	26	list	_	_
33	6	6	NUM	Mc	NumType=Card	32	nummod	_	_
34	)	)	PUNCT	RPAR	_	26	punct	_	_
35	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


