

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:pmod](), [nmod:tmod]().

840 nodes (0%) are attached to their parents as `nmod:agent`.

839 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79642857142857.

The following 12 pairs of parts of speech are connected with `nmod:agent`: [ro-pos/VERB]()-[ro-pos/NOUN]() (644; 77% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (80; 10% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (37; 4% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (36; 4% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (23; 3% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (6; 1% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (4; 0% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:agent	color:blue
1	Arestat	aresta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	5	advcl	_	_
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	turci	turc	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	1	nmod:agent	_	_
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	reușește	reuși	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	să	să	PART	Qs	Mood=Sub	7	mark	_	_
7	evadeze	evada	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
8	și	și	CONJ	Crssp	Negative=Pos	5	cc	_	_
9	emigrează	emigra	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
10	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	Paris	Paris	PROPN	Np	_	9	nmod	_	_
12	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:agent	color:blue
1	Infecțiile	infecție	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	6	nsubj	_	_
2	nozocomiale	nozocomial	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	1	amod	_	_
3	cauzate	cauza	VERB	Vmp--pf	Gender=Fem|Number=Plur|VerbForm=Part	1	acl	_	_
4	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	BGN	BGN	PROPN	Np	_	3	nmod:agent	_	_
6	au	avea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	anumite	anumit	DET	Di3fp	Gender=Fem|Number=Plur|Person=3|PronType=Ind	8	det	_	_
8	particularități	particularitate	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	6	dobj	_	_
9	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:agent	color:blue
1	Noua	nou	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	_
2	ei	lui	DET	Ds3---s	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	3	det	_	_
3	viață	viață	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
4	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	Londra	Londra	PROPN	Np	_	3	nmod	_	_
6	devenise	deveni	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	0	root	_	_
7	întinată	întinat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	xcomp	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	morțile	moarte	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	7	nmod:agent	_	_
10	bărbaților	bărbat	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	9	nmod	_	_
11	adoratori	adorator	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	10	amod	_	_
12	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


