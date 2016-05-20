

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [expl]().
There are also 3 other language-specific subtypes of `expl`: [expl:impers](), [expl:poss](), [expl:pv]().

892 nodes (1%) are attached to their parents as `expl:pass`.

879 instances of `expl:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20739910313901.

The following 3 pairs of parts of speech are connected with `expl:pass`: [ro-pos/VERB]()-[ro-pos/PRON]() (889; 100% instances), [ro-pos/INTJ]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 expl:pass	color:blue
1	Pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	lista	listă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
3	completă	complet	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	restricții	restricție	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	nmod	_	_
6	,	,	PUNCT	COMMA	_	2	punct	_	_
7	a	a	PART	Qn	PartType=Inf	9	mark	_	_
8	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pass	_	_
9	consulta	consulta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
10	prospectul	prospect	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubjpass	_	_
11	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:pass	color:blue
1	Decizia	decizie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubjpass	_	_
2	de	de	ADP	Sp	AdpType=Prep	3	case	_	_
3	revocare	revocare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nmod	_	_
4	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	det	_	_
5	recunoașterii	recunoaștere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
7	ia	ia	INTJ	I	_	0	root	_	_
8	,	,	PUNCT	COMMA	_	12	punct	_	_
9	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
10	conformitate	conformitate	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	mwe	_	_
11	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	9	mwe	_	_
12	procedura	procedură	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
13	prevăzută	prevăzut	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	acl	_	_
14	în	în	ADP	Sp	AdpType=Prep	15	punct	_	_
15	art.	articol	NOUN	Yn	Abbr=Yes	13	nmod	_	_
16	23	23	NUM	Mc	NumType=Card	15	nummod	_	_
17	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 expl:pass	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	advmod	_	_
2	plus	plus	ADV	Rgp	Degree=Pos	1	mwe	_	_
3	s-	se	NOUN	Ncm--n	Definite=Ind|Gender=Masc	5	expl:pass	_	_
4	au	avea	AUX	Va--3p----y	Number=Plur|Person=3|Variant=Short	5	aux	_	_
5	raportat	raporta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	,	,	PUNCT	COMMA	_	7	punct	_	_
7	rar	rar	ADV	Rgp	Degree=Pos	5	advmod	_	_
8	,	,	PUNCT	COMMA	_	7	punct	_	_
9	cazuri	caz	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nsubjpass	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	hepatită	hepatită	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nmod	_	_
12	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	debut	debut	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	nmod	_	_
14	întârziat	întârzia	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	13	amod	_	_
15	după	după	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
16	aproximativ	aproximativ	ADV	Rgp	Degree=Pos	17	advmod	_	_
17	18	18	NUM	Eni	_	18	nummod	_	_
18	luni	lună	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nmod:tmod	_	_
19	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	tratament	tratament	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	nmod	_	_
21	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


