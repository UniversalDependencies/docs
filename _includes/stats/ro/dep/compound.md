

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

70 nodes (0%) are attached to their parents as `compound`.

66 instances of `compound` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37142857142857.

The following 15 pairs of parts of speech are connected with `compound`: [ro-pos/NUM]()-[ro-pos/NUM]() (32; 46% instances), [ro-pos/DET]()-[ro-pos/NUM]() (14; 20% instances), [ro-pos/NUM]()-[ro-pos/CONJ]() (5; 7% instances), [ro-pos/NUM]()-[ro-pos/ADV]() (4; 6% instances), [ro-pos/NUM]()-[ro-pos/ADP]() (3; 4% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (2; 3% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (2; 3% instances), [ro-pos/ADV]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/SYM]() (1; 1% instances), [ro-pos/NUM]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/NUM]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/PUNCT]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/SYM]()-[ro-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound	color:blue
1	Scoase	scoate	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
2	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	buzunar	buzunar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	monedă	monedă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	dobj	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
7	douăzeci	douăzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	_
8	și	și	ADV	Rgp	Degree=Pos	7	compound	_	_
9	cinci	cinci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	7	compound	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
11	cenți	cent	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nmod	_	_
12	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Da'	dar	CONJ	Ccsspy	Negative=Pos|Variant=Short	3	cc	_	_
2	nu	nu	PART	Qz	Negative=Neg	3	neg	_	_
3	Camera	cameră	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	_
4	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	nummod	_	_
5	sută	sută	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	4	compound	_	_
6	unu	unu	NUM	Mcmsrl	Case=Acc,Nom|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	4	compound	_	_
7	!	!	PUNCT	EXCL	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound	color:blue
1	Opt	Opt	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	2	compound	_	_
2	sute	sute	NUM	Mcfp-ln	Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
3	și	și	CONJ	Crssp	Negative=Pos	2	compound	_	_
4	douăzeci	douăzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	2	compound	_	_
5	și	și	CONJ	Crssp	Negative=Pos	2	compound	_	_
6	nouă	nouă	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	2	compound	_	_
7	pacienți	pacient	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	nsubjpass	_	_
8	au	avea	AUX	Va--3p	Number=Plur|Person=3	10	aux	_	_
9	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	10	auxpass	_	_
10	repartizați	repartiza	VERB	Vmp--pm	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
11	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	randomizare	randomizare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	(	(	PUNCT	LPAR	_	14	punct	_	_
14	292	292	NUM	Eni	_	2	parataxis	_	_
15	FOLFOX-4	FOLFOX-4	PROPN	Np	_	14	nmod	_	_
16	,	,	PUNCT	COMMA	_	14	punct	_	_
17	293	293	NUM	Eni	_	14	conj	_	_
18	Avastin	Avastin	PROPN	Np	_	17	nmod	_	_
19	+	+	SYM	PLUS	_	18	punct	_	_
20	_	_	SYM	UNDERSC	_	18	punct	_	_
21	FOLFOX-4	FOLFOX-4	PROPN	Np	_	18	conj	_	_
22	și	și	CONJ	Crssp	Negative=Pos	14	cc	_	_
23	244	244	NUM	Eni	_	14	conj	_	_
24	Avastin	Avastin	PROPN	Np	_	23	nmod	_	_
25	monoterapie	monoterapie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	24	nmod	_	_
26	)	)	PUNCT	RPAR	_	14	punct	_	_
27	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


