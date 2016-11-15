

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

461 nodes (0%) are attached to their parents as `iobj`.

282 instances of `iobj` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63991323210412.

The following 19 pairs of parts of speech are connected with `iobj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (211; 46% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (134; 29% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (37; 8% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (16; 3% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (12; 3% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (10; 2% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (8; 2% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (6; 1% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (5; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (5; 1% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (4; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (3; 1% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (3; 1% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 iobj	color:blue
1	Ashdownov	Ashdownov	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	2	nmod	_	_
2	ured	ured	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	okreće	okretati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	dobj	_	_
5	tranziciji	tranzicija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 iobj	color:blue
1	I	i	CONJ	_	_	5	discourse	_	_
2	kada	kada	ADV	_	Degree=Pos	5	mark	_	_
3	ništa	ništa	PRON	_	Case=Acc|Gender=Neut|Person=3|PronType=Ind	5	dobj	_	_
4	ne	ne	PART	_	Negative=Neg	5	neg	_	_
5	razumijemo	razumjeti	VERB	_	Number=Plur|Person=1|Tense=Pres	7	advcl	_	_
6	,	,	PUNCT	_	_	5	punct	_	_
7	volimo	voljeti	VERB	_	Number=Plur|Person=1|Tense=Pres	0	root	_	_
8	da	da	SCONJ	_	_	11	mark	_	_
9	nam	mi	PRON	_	Case=Dat|Number=Plur|Person=1|PronType=Prs	11	iobj	_	_
10	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	11	compound	_	_
11	objašnjava	objašnjavati	VERB	_	Number=Sing|Person=3|Tense=Pres	7	ccomp	_	_
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 iobj	color:blue
1	Mi	mi	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	trebamo	trebati	VERB	_	Number=Plur|Person=1|Tense=Pres	0	root	_	_
3	.	.	PUNCT	_	_	2	punct	_	_
4	.	.	PUNCT	_	_	2	punct	_	_
5	.	.	PUNCT	_	_	2	punct	_	_
6	dati	dati	VERB	_	VerbForm=Inf	2	xcomp	_	_
7	potporu	potpora	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	dobj	_	_
8	Jeremiću	Jeremić	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	6	iobj	_	_
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


