

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:tmod]().

94 nodes (1%) are attached to their parents as `nmod:pmod`.

88 instances of `nmod:pmod` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.11702127659574.

The following 13 pairs of parts of speech are connected with `nmod:pmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (45; 48% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (24; 26% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (7; 7% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (4; 4% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (3; 3% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (3; 3% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (2; 2% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:pmod	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
2	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	plăcere	plăcere	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	asiști	asista	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	examinare	examinare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod:pmod	_	_
9	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	10	det	_	_
10	lui	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	8	nmod	_	_
11	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:pmod	color:blue
1	Două	doi	NUM	Mcfp-l	Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	2	compound	_	_
2	milioane	milion	NUM	Mcfprln	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	4	nummod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
4	bărbați	bărbat	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	9	nsubj	_	_
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	femei	femeie	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	4	conj	_	_
7	și	și	CONJ	Crssp	Negative=Pos	4	cc	_	_
8	copii	copil	NOUN	Nc	_	4	conj	_	_
9	riscă	risca	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	moartea	moarte	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	dobj	_	_
11	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	înfometare	înfometare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod:pmod	_	_
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	Somalia	Somalia	PROPN	Np	_	9	nmod:pmod	_	_
15	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:pmod	color:blue
1	Firma	firmă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubjpass	_	_
2	a	avea	AUX	Va--3s	Number=Sing|Person=3	3	aux	_	_
3	fost	fi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	auxpass	_	_
4	amendată	amendat	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
5	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	total	total	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	nmod:pmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	2.437ý	2.437ý	NUM	M	NumType=Card	7	nummod	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


