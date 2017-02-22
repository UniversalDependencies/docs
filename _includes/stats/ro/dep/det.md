

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

10968 nodes (5%) are attached to their parents as `det`.

9836 instances of `det` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.14533187454413.

The following 21 pairs of parts of speech are connected with `det`: [ro-pos/NOUN]()-[ro-pos/DET]() (9577; 87% instances), [ro-pos/PROPN]()-[ro-pos/DET]() (440; 4% instances), [ro-pos/NUM]()-[ro-pos/DET]() (310; 3% instances), [ro-pos/ADJ]()-[ro-pos/DET]() (205; 2% instances), [ro-pos/PRON]()-[ro-pos/DET]() (98; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (77; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (66; 1% instances), [ro-pos/DET]()-[ro-pos/DET]() (61; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (52; 0% instances), [ro-pos/ADV]()-[ro-pos/DET]() (33; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (14; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (10; 0% instances), [ro-pos/ADP]()-[ro-pos/DET]() (8; 0% instances), [ro-pos/NUM]()-[ro-pos/PRON]() (6; 0% instances), [ro-pos/X]()-[ro-pos/DET]() (4; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/CCONJ]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/PART]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	însăși	însuși	DET	Dh3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Emp	3	det	_	_
3	natura	natură	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	_
4	lucrurilor	lucru	NOUN	Ncfpoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Plur	3	nmod	_	_
5	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
6	imposibil	imposibil	ADV	Rgp	Degree=Pos	0	root	_	SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 det	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	hohot	hohot	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	râsete	râset	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	nmod	_	_
5	acoperi	acoperi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
6	ultimele	ultim	NUM	Mofprly	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur|NumForm=Word|NumType=Ord	7	nummod	_	_
7	cuvinte	cuvânt	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	obj	_	_
8	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	10	det	_	_
9	lui	lui	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	10	det	_	_
10	Dragu	Dragu	PROPN	Np	_	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Ne-	eu	PRON	Pp1-pa--y-----w	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak|Variant=Short	3	expl:pv	_	SpaceAfter=No
2	am	avea	AUX	Va--1	Person=1	3	aux	_	_
3	înscris	înscrie	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
4	vreo	vreun	DET	Di3fsr---e	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Prenom|PronType=Ind	5	det	_	_
5	30	30	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	7	nummod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
7	elevi	elev	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	10	punct	_	_
9	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
10	45	45	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	nummod	_	SpaceAfter=No
11	,	,	PUNCT	COMMA	_	12	punct	_	_
12	câți	cât	PRON	Pw3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Int,Rel	10	acl	_	_
13	eram	fi	AUX	Vmii1	Mood=Ind|Person=1|Tense=Imp|VerbForm=Fin	12	cop	_	_
14	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	12	nsubj	_	_
15	toții	tot	PRON	Pi3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	14	fixed	_	SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


