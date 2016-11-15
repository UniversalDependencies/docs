

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

2965 nodes (1%) are attached to their parents as `nummod`.

1921 instances of `nummod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39156829679595.

The following 23 pairs of parts of speech are connected with `nummod`: [ro-pos/NOUN]()-[ro-pos/NUM]() (2642; 89% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (65; 2% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (61; 2% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (48; 2% instances), [ro-pos/SYM]()-[ro-pos/NUM]() (39; 1% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (30; 1% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (24; 1% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (11; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (11; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (7; 0% instances), [ro-pos/X]()-[ro-pos/NUM]() (6; 0% instances), [ro-pos/PRON]()-[ro-pos/NUM]() (5; 0% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (3; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/PUNCT]()-[ro-pos/NUM]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nummod	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	4	det	_	_
2	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	3	det	_	_
3	doilea	doi	NUM	Moms-l	Gender=Masc|Number=Sing|NumForm=Word|NumType=Ord	4	nummod	_	_
4	Maiorescu	maiorescu	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nsubj	_	_
5	e	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
6	dureros	dureros	ADV	Rgp	Degree=Pos	8	advmod	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	_
8	necesar	necesar	ADV	Rgp	Degree=Pos	0	root	_	_
9	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nummod	color:blue
1	Treizeci	treizeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	0	root	_	_
2	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	patruzeci	patruzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	1	nummod	_	_
4	,	,	PUNCT	COMMA	_	1	punct	_	_
5	alinierea	aliniere	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	parataxis	_	_
6	!	!	PUNCT	EXCL	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Cumpăr	cumpăra	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	Dacia	Dacia	PROPN	Np	_	1	dobj	_	_
3	1310	1310	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	2	nummod	_	_
4	,	,	PUNCT	COMMA	_	6	punct	_	_
5	orice	orice	DET	Di3--r---e	Case=Acc,Nom|Person=3|Position=Prenom|PronType=Ind	6	amod	_	_
6	stare	stare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	nmod	_	_
7	,	,	PUNCT	COMMA	_	1	punct	_	_
8	ofer	oferi	VERB	Vmm-2s----y	Mood=Imp|Number=Sing|Person=2|Variant=Short|VerbForm=Fin	1	conj	_	_
9	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	advmod	_	_
10	loc	loc	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	mwe	_	_
11	12	12	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	15	nummod	_	_
12	000	000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	11	goeswith	_	_
13	000	000	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	12	goeswith	_	_
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
15	lei	leu	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	8	dobj	_	_
16	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


