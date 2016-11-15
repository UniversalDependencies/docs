

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

1557 nodes (1%) are attached to their parents as `parataxis`.

1046 instances of `parataxis` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.30635838150289.

The following 47 pairs of parts of speech are connected with `parataxis`: [ro-pos/VERB]()-[ro-pos/NUM]() (641; 41% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (289; 19% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (234; 15% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (102; 7% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (42; 3% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (36; 2% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (24; 2% instances), [ro-pos/ADV]()-[ro-pos/NUM]() (18; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (18; 1% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (16; 1% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (16; 1% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (14; 1% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (11; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (11; 1% instances), [ro-pos/PROPN]()-[ro-pos/NUM]() (7; 0% instances), [ro-pos/ADP]()-[ro-pos/NUM]() (6; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (5; 0% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (5; 0% instances), [ro-pos/VERB]()-[ro-pos/PART]() (5; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (3; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (3; 0% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (3; 0% instances), [ro-pos/PART]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (3; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/PROPN]()-[ro-pos/PROPN]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/SYM]() (1; 0% instances), [ro-pos/ADP]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PUNCT]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/INTJ]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PUNCT]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Luați	lua	VERB	Vmii2p	Mood=Ind|Number=Plur|Person=2|Tense=Imp|VerbForm=Fin	0	root	_	_
2	poziția	poziție	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	dobj	_	_
3	,	,	PUNCT	COMMA	_	1	punct	_	_
4	vă	tu	PRON	Pp2-pa--------w	Case=Acc|Number=Plur|Person=2|PronType=Prs|Strength=Weak	5	dobj	_	_
5	rog	ruga	VERB	Vmip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
6	,	,	PUNCT	COMMA	_	5	punct	_	_
7	treizeci	treizeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	1	parataxis	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	patruzeci	patruzeci	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	7	nummod	_	_
10	!	!	PUNCT	EXCL	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 parataxis	color:blue
1	;	;	PUNCT	SCOLON	AdpType=Prep	2	punct	_	_
2	Știu	ști	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	spuse	spune	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	parataxis	_	_
5	ea	el	PRON	Pp3fsr--------s	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Strong	4	nsubj	_	_
6	,	,	PUNCT	COMMA	_	4	punct	_	_
7	că	că	SCONJ	Csssp	Negative=Pos	9	mark	_	_
8	va	vrea	AUX	Va--3s	Number=Sing|Person=3	9	aux	_	_
9	veni	veni	VERB	Vmnp	Tense=Pres|VerbForm=Inf	2	ccomp	_	_
10	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	11	det	_	_
11	revoluție	revoluție	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	nsubj	_	_
12	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	e	e	NOUN	Ncm--n	Definite=Ind|Gender=Masc	7	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	Acordul	acord	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	7	nsubj	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	nu	nu	PART	Qz	Negative=Neg	7	neg	_	_
7	ducă	duce	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	alocarea	alocare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nmod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	piețe	piață	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	9	nmod	_	_
12	sau	sau	CONJ	Ccssp	Negative=Pos	11	cc	_	_
13	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	clienți	client	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	11	conj	_	_
15	;	;	PUNCT	SCOLON	AdpType=Prep	7	punct	_	_

~~~


