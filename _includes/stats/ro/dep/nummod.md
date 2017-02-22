

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

3859 nodes (2%) are attached to their parents as `nummod`.

2055 instances of `nummod` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.66364343094066.

The following 19 pairs of parts of speech are connected with `nummod`: [ro-pos/NOUN]()-[ro-pos/NUM]() (3308; 86% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (308; 8% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (83; 2% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (63; 2% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (28; 1% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (23; 1% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (16; 0% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (11; 0% instances), [ro-pos/X]()-[ro-pos/NUM]() (7; 0% instances), [ro-pos/CCONJ]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/SYM]()-[ro-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	4	4	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	_
2	aprilie	aprilie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
3	1984	1984	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	5	punct	_	_
5	Aseară	aseară	ADV	Rgp	Degree=Pos	2	advmod	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cinema	cinema	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	10	punct	_	_
9	Numai	numai	ADV	Rgp	Degree=Pos	10	advmod	_	_
10	filme	film	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	nmod	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	război	război	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nummod	color:blue
1	De	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
2	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	1878–1879	1878–1879	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	6	nummod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	3	punct	_	_
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pv	_	_
6	petrece	petrece	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	A.	A.	NOUN	Yn	Abbr=Yes	6	obl	_	_
9	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	metamorfoză	metamorfoză	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Treizeci	treizeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	0	root	_	_
2	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	patruzeci	patruzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	1	nummod	_	SpaceAfter=No
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	alinierea	aliniere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	parataxis	_	SpaceAfter=No
6	!	!	PUNCT	EXCL	_	1	punct	_	_

~~~


