

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

17 nodes (0%) are attached to their parents as `compound`.

13 instances of `compound` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35294117647059.

The following 10 pairs of parts of speech are connected with `compound`: [ro-pos/NUM]()-[ro-pos/NUM]() (5; 29% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (2; 12% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (2; 12% instances), [ro-pos/NUM]()-[ro-pos/CONJ]() (2; 12% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 6% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (1; 6% instances), [ro-pos/NUM]()-[ro-pos/DET]() (1; 6% instances), [ro-pos/NUM]()-[ro-pos/PUNCT]() (1; 6% instances), [ro-pos/PUNCT]()-[ro-pos/NUM]() (1; 6% instances), [ro-pos/SYM]()-[ro-pos/NOUN]() (1; 6% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 compound	color:blue
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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	Rochia	rochie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
2	miresei	mireasă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	și	și	CONJ	Crssp	Negative=Pos	1	cc	_	_
4	vălul	văl	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	_
5	costau	costa	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	doar	doar	ADV	Rgp	Degree=Pos	7	advmod	_	_
7	ý10	ý10	NUM	M	NumType=Card	5	nummod	_	_
8	,	,	PUNCT	COMMA	_	5	punct	_	_
9	rochia	rochie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	remnant	_	_
10	domnișoarei	domnișoară	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	compound	_	_
12	onoare	onoare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	compound	_	_
13	ý5	ý5	NUM	M	NumType=Card	7	remnant	_	_
14	,	,	PUNCT	COMMA	_	5	punct	_	_
15	iar	iar	CONJ	Ccssp	Negative=Pos	5	cc	_	_
16	redingota	redingotă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	remnant	_	_
17	și	și	CONJ	Crssp	Negative=Pos	16	cc	_	_
18	pantalonii	pantalon	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	16	conj	_	_
19	mirelui	mire	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod	_	_
20	,	,	PUNCT	COMMA	_	16	punct	_	_
21	plus	plus	ADV	Rgp	Degree=Pos	22	advmod	_	_
22	smochingul	smoching	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	conj	_	_
23	,	,	PUNCT	COMMA	_	5	punct	_	_
24	ý15	ý15	NUM	M	NumType=Card	13	remnant	_	_
25	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 compound	color:blue
1	Rochia	rochie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nsubj	_	_
2	miresei	mireasă	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
3	și	și	CONJ	Crssp	Negative=Pos	1	cc	_	_
4	vălul	văl	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	conj	_	_
5	costau	costa	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	doar	doar	ADV	Rgp	Degree=Pos	7	advmod	_	_
7	ý10	ý10	NUM	M	NumType=Card	5	nummod	_	_
8	,	,	PUNCT	COMMA	_	5	punct	_	_
9	rochia	rochie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	remnant	_	_
10	domnișoarei	domnișoară	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	10	compound	_	_
12	onoare	onoare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	11	compound	_	_
13	ý5	ý5	NUM	M	NumType=Card	7	remnant	_	_
14	,	,	PUNCT	COMMA	_	5	punct	_	_
15	iar	iar	CONJ	Ccssp	Negative=Pos	5	cc	_	_
16	redingota	redingotă	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	remnant	_	_
17	și	și	CONJ	Crssp	Negative=Pos	16	cc	_	_
18	pantalonii	pantalon	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	16	conj	_	_
19	mirelui	mire	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	18	nmod	_	_
20	,	,	PUNCT	COMMA	_	16	punct	_	_
21	plus	plus	ADV	Rgp	Degree=Pos	22	advmod	_	_
22	smochingul	smoching	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	16	conj	_	_
23	,	,	PUNCT	COMMA	_	5	punct	_	_
24	ý15	ý15	NUM	M	NumType=Card	13	remnant	_	_
25	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


