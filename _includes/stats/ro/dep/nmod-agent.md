

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:pmod](), [nmod:tmod]().

53 nodes (0%) are attached to their parents as `nmod:agent`.

53 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.47169811320755.

The following 4 pairs of parts of speech are connected with `nmod:agent`: [ro-pos/VERB]()-[ro-pos/NOUN]() (37; 70% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (7; 13% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (6; 11% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (3; 6% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 nmod:agent	color:blue
1	În	În	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	1938	1938	NUM	M	NumType=Card	6	nmod:tmod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	a	a	AUX	Va--3s	Number=Sing|Person=3	6	aux	_	_
5	fost	fost	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	6	auxpass	_	_
6	afectat	afectat	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
8	o	o	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	epidemie	epidemie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod:agent	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	În	În	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	iulie	iulie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	nmod:tmod	_	_
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	Iașul	Iașul	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
5	era	era	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	auxpass	_	_
6	ocupat	ocupat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	forțele	forțele	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	6	nmod:agent	_	_
9	staliniste	staliniste	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:agent	color:blue
1	Și	și	CONJ	Crssp	Negative=Pos	4	cc	_	_
2	l-	el	PRON	Pp3msa--y-----w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak|Variant=Short	4	expl	_	_
3	a	avea	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	băut	bea	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	și	și	CONJ	Crssp	Negative=Pos	8	advmod	_	_
6	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
7	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
8	treilea	treilea	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	dobj	_	AltTag=NUM-ADJ
9	,	,	PUNCT	COMMA	_	10	punct	_	_
10	oferit	oferi	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	8	acl	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	Matei	Matei	PROPN	Np	_	10	nmod:agent	_	_
13	Păunescu	Păunescu	PROPN	Np	_	12	name	_	_
14	,	,	PUNCT	COMMA	_	10	punct	_	_
15	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	_
16	hazul	haz	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nmod	_	_
17	tuturor	tot	PRON	Pi3-po	Case=Gen|Number=Plur|Person=3|PronType=Ind	16	nmod	_	_
18	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


