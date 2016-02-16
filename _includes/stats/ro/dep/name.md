

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

118 nodes (1%) are attached to their parents as `name`.

117 instances of `name` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22881355932203.

The following 18 pairs of parts of speech are connected with `name`: [ro-pos/PROPN]()-[ro-pos/PROPN]() (53; 45% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (10; 8% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (10; 8% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (9; 8% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (8; 7% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (7; 6% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (4; 3% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (3; 3% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (3; 3% instances), [ro-pos/PROPN]()-[ro-pos/ADJ]() (3; 3% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/DET]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/PUNCT]() (1; 1% instances), [ro-pos/DET]()-[ro-pos/PROPN]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 name	color:blue
1	Petre	Petre	PROPN	Np	_	4	nsubj	_	_
2	Roman	Roman	PROPN	Np	_	1	name	_	_
3	a	a	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	devenit	devenit	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	prim-	prim-	NUM	Moms-ln	Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	6	amod	_	AltTag=NUM-ADJ
6	ministru	ministru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	xcomp	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 name	color:blue
1	Tot	tot	ADV	Rp	_	3	advmod	_	_
2	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	1952	1952	NOUN	Etd	_	7	nmod	_	AltTag=NOUN-NUM
4	,	,	PUNCT	COMMA	_	3	punct	_	_
5	s-	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	7	expl:pass	_	_
6	a	avea	AUX	Va--3s	Number=Sing|Person=3	7	aux	_	_
7	imprimat	imprima	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
8	un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	9	det	_	_
9	studiu	studiu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	7	nsubjpass	_	_
10	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
11	lui	lui	DET	Tf-so	Case=Gen|Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	Ioan	Ioan	PROPN	Np	_	9	nmod	_	_
13	Guția	Guția	PROPN	Np	_	12	name	_	_
14	,	,	PUNCT	COMMA	_	15	punct	_	_
15	Sentimentul	sentiment	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	appos	_	_
16	timpului	timp	NOUN	Ncmsoy	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	15	name	_	_
17	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	15	name	_	_
18	poezia	poezie	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	15	name	_	_
19	lui	lui	DET	Tf-so	Case=Gen|Definite=Def|Number=Sing|PronType=Art	15	name	_	_
20	Eminescu	Eminescu	PROPN	Np	_	15	name	_	_
21	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 name	color:blue
1	firește	firește	ADV	Rgp	Degree=Pos	4	advmod	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	gestul	gest	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
4	stârnește	stârni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	iritarea	iritare	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	dobj	_	_
6	unor	un	DET	Ti-po	Case=Gen|Number=Plur|PronType=Ind	7	det	_	_
7	comentatori	comentator	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	5	nmod	_	_
8	mai	mai	ADV	Rp	_	9	advmod	_	_
9	vigilenți	vigilent	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	amod	_	_
10	(	(	PUNCT	LPAR	_	11	punct	_	_
11	M.	M.	NOUN	Ed	_	7	appos	_	AltTag=NOUN-NUM
12	Schwartzfeld	Schwartzfeld	PROPN	Np	_	11	name	_	_
13	ș.a.	ș.a.	NOUN	Ed	_	11	dep	_	AltTag=NOUN-NUM
14	)	)	PUNCT	RPAR	_	11	punct	_	_
15	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


