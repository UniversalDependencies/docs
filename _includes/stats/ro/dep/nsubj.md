

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

628 nodes (5%) are attached to their parents as `nsubj`.

510 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.71178343949045.

The following 23 pairs of parts of speech are connected with `nsubj`: [ro-pos/VERB]()-[ro-pos/NOUN]() (344; 55% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (121; 19% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (62; 10% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (29; 5% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (28; 4% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (9; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (5; 1% instances), [ro-pos/ADJ]()-[ro-pos/PRON]() (4; 1% instances), [ro-pos/ADJ]()-[ro-pos/PROPN]() (4; 1% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (4; 1% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/AUX]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/CONJ]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/PUNCT]()-[ro-pos/PROPN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 nsubj	color:blue
1	O	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	explozie	explozie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nsubj	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	_
4	râs	râs	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	COMMA	_	7	punct	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	mark	_	_
7	răsunară	răsuna	VERB	Vmis3p	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	10	advcl	_	_
8	pereții	perete	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	7	nsubj	_	_
9	,	,	PUNCT	COMMA	_	7	punct	_	_
10	izbucni	izbucni	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
11	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
12	clasă	clasă	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	.	.	PUNCT	PERIOD	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj	color:blue
1	Deasupra	deasupra	ADP	Sp	AdpType=Prep	2	case	_	_
2	tuturora	totul	PRON	Pi3-po	Case=Gen|Number=Plur|Person=3|PronType=Ind	4	nmod	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	dobj	_	_
4	ridică	ridica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	cine	cine	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	6	nsubj	_	_
6	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	csubj	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Petre	Petre	PROPN	Np	_	4	nsubj	_	_
2	Roman	Roman	PROPN	Np	_	1	name	_	_
3	a	a	AUX	Va--3s	Number=Sing|Person=3	4	aux	_	_
4	devenit	devenit	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	prim-	prim-	NUM	Moms-ln	Definite=Ind|Gender=Masc|Number=Sing|NumForm=Word|NumType=Card	6	amod	_	AltTag=NUM-ADJ
6	ministru	ministru	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	4	xcomp	_	_
7	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


