

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

654 nodes (0%) are attached to their parents as `iobj`.

362 instances of `iobj` (55%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5474006116208.

The following 23 pairs of parts of speech are connected with `iobj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (288; 44% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (210; 32% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (47; 7% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (17; 3% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (17; 3% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (14; 2% instances), [hr-pos/VERB]()-[hr-pos/DET]() (12; 2% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (9; 1% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (8; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (8; 1% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (7; 1% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/ADP]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/DET]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Ashdownov	Ashdownov	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	2	amod	_	_
2	ured	ured	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	okreće	okretati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	obj	_	_
5	tranziciji	tranzicija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 iobj	color:blue
1	I	i	CCONJ	_	_	5	discourse	_	_
2	kada	kada	ADV	_	Degree=Pos|PronType=Int,Rel	5	advmod	_	_
3	ništa	ništa	PRON	_	Case=Acc|Gender=Neut|Person=3|PronType=Neg	5	obj	_	_
4	ne	ne	PART	_	Polarity=Neg	5	advmod	_	_
5	razumijemo	razumjeti	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	_	SpaceAfter=No
6	,	,	PUNCT	_	_	5	punct	_	_
7	volimo	voljeti	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
8	da	da	SCONJ	_	_	11	mark	_	_
9	nam	mi	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
10	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	11	expl:pv	_	_
11	objašnjava	objašnjavati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	trebamo	trebati	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
3	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
4	.	.	PUNCT	_	_	2	punct	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_
6	dati	dati	VERB	_	VerbForm=Inf	2	xcomp	_	_
7	potporu	potpora	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
8	Jeremiću	Jeremić	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	6	iobj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


