

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

403 nodes (0%) are attached to their parents as `expl`.

230 instances of `expl` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.50620347394541.

The following 7 pairs of parts of speech are connected with `expl`: [de-pos/VERB]()-[de-pos/PRON]() (359; 89% instances), [de-pos/ADJ]()-[de-pos/PRON]() (30; 7% instances), [de-pos/NOUN]()-[de-pos/PRON]() (9; 2% instances), [de-pos/AUX]()-[de-pos/PRON]() (2; 0% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 expl	color:blue
1	Wenn	wenn	SCONJ	KOUS	_	6	mark	_	_
2	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
3	schon	schon	ADV	ADV	_	6	advmod	_	_
4	Fastfood	Fastfood	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
5	sein	sein	AUX	VAINF	VerbForm=Inf	6	aux	_	_
6	muss	müssen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	advcl	_	_
7	,	,	PUNCT	$,	_	11	punct	_	_
8	dann	dann	ADV	ADV	_	11	advmod	_	_
9	bei	bei	ADP	APPR	_	11	case	_	_
10	Jim	Jim	PROPN	NE	_	11	name	_	_
11	Block	Block	PROPN	NN	_	0	root	_	_
12	.	.	PUNCT	$.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 expl	color:blue
1	Es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
3	alles	alle	PRON	PIS	Case=Nom|PronType=Tot	6	nsubj	_	_
4	noch	noch	ADV	ADV	_	6	advmod	_	_
5	sehr	sehr	ADV	ADV	_	6	advmod	_	_
6	neu	neu	ADJ	ADJD	Degree=Pos	0	root	_	_
7	und	und	CONJ	KON	_	6	cc	_	_
8	modern	modern	ADJ	ADJD	Degree=Pos	6	conj	_	_
9	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 expl	color:blue
1	Ihr	Ihr|ihr	DET	PPOSAT	Person=2,3|Poss=Yes|PronType=Prs	2	det:poss	_	_
2	Ziel	Ziel	NOUN	NN	_	0	root	_	_
3	war	sein	VERB	VAFIN	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
4	es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
5	,	,	PUNCT	$,	_	2	punct	_	_
6	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
7	traditionelle	traditionell	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
8	georgische	georgisch	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	9	amod	_	_
9	Kultur	Kultur	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	15	dobj	_	_
10	mit	mit	ADP	APPR	_	11	case	_	_
11	Moderne	Moderne	NOUN	NN	Case=Dat|Number=Sing	15	nmod	_	_
12	und	und	CONJ	KON	_	11	cc	_	_
13	Technik	Technik	NOUN	NN	_	11	conj	_	_
14	zu	zu	PART	PTKZU	_	15	mark	_	_
15	verbinden	verbinden	VERB	VVINF	VerbForm=Inf	2	csubj	_	_
16	.	.	PUNCT	$.	_	2	punct	_	_

~~~


