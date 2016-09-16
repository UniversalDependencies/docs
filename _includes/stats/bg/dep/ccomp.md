

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

2799 nodes (2%) are attached to their parents as `ccomp`.

2201 instances of `ccomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.36977491961415.

The following 13 pairs of parts of speech are connected with `ccomp`: [bg-pos/VERB]()-[bg-pos/VERB]() (2522; 90% instances), [bg-pos/VERB]()-[bg-pos/NOUN]() (116; 4% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (76; 3% instances), [bg-pos/PART]()-[bg-pos/VERB]() (38; 1% instances), [bg-pos/VERB]()-[bg-pos/ADV]() (25; 1% instances), [bg-pos/VERB]()-[bg-pos/PRON]() (10; 0% instances), [bg-pos/VERB]()-[bg-pos/PROPN]() (4; 0% instances), [bg-pos/PART]()-[bg-pos/NOUN]() (2; 0% instances), [bg-pos/VERB]()-[bg-pos/DET]() (2; 0% instances), [bg-pos/PART]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/PART]()-[bg-pos/PRON]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/INTJ]() (1; 0% instances), [bg-pos/VERB]()-[bg-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Двете	два	NUM	Mcfpd	Definite=Def|Gender=Fem|Number=Plur|NumType=Card	2	nummod	_	_
2	сестри	сестра	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	3	nsubj	_	_
3	започнаха	започна	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	да	да	PART	Tx	_	6	aux	_	_
5	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	6	expl	_	_
6	шепнат	шепна	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	още	още	ADV	Dq	_	8	advmod	_	_
8	по-ниско	ниско	ADV	Dm	Degree=Cmp	6	advmod	_	_
9	.	.	PUNCT	punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 ccomp	color:blue
1	Теодосий	теодосий	PROPN	Npmsi	Definite=Ind|Gender=Masc|Number=Sing	6	nsubj	_	_
2	вече	вече	ADV	Dt	_	6	advmod	_	_
3	не	не	INTJ	Tn	_	6	neg	_	_
4	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	наш	наш	DET	Pszl-s1mi	Definite=Ind|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	проблем	проблем	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	8	ccomp	_	_
7	,	,	PUNCT	punct	_	6	punct	_	_
8	казаха	кажа	VERB	Vpptf-o3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	от	от	ADP	R	_	10	case	_	_
10	НИС	нис	PROPN	Npmsh	Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Ако	ако	SCONJ	Cs	_	2	mark	_	_
2	мисли	мисля	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	advcl	_	_
3	,	,	PUNCT	punct	_	6	punct	_	_
4	че	че	SCONJ	Cs	_	6	mark	_	_
5	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	най-добрият	добър	ADJ	Amsf	Definite=Def|Degree=Sup|Gender=Masc|Number=Sing	2	ccomp	_	_
7	,	,	PUNCT	punct	_	2	punct	_	_
8	това	този	PRON	Pde-os-n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	12	nsubj	_	_
9	си	се	PRON	Ppxtd	Case=Dat|PronType=Prs|Reflex=Yes	12	expl	_	_
10	е	съм	VERB	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
11	негов	мой	DET	Psol-s3mim	Definite=Ind|Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	det	_	_
12	проблем	проблем	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
13	.	.	PUNCT	punct	_	12	punct	_	_

~~~


