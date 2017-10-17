

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is a language-specific subtype of [nsubj]().

997 nodes (1%) are attached to their parents as `nsubj:pass`.

570 instances of `nsubj:pass` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.46740220661986.

The following 23 pairs of parts of speech are connected with `nsubj:pass`: [hr-pos/ADJ]()-[hr-pos/NOUN]() (612; 61% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (247; 25% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (64; 6% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (14; 1% instances), [hr-pos/ADJ]()-[hr-pos/DET]() (10; 1% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (8; 1% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (7; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (5; 1% instances), [hr-pos/ADJ]()-[hr-pos/NUM]() (5; 1% instances), [hr-pos/ADJ]()-[hr-pos/X]() (4; 0% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/VERB]()-[hr-pos/DET]() (4; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/SYM]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Do	do	ADP	_	Case=Gen	2	case	_	_
2	sada	sada	ADV	_	Degree=Pos|PronType=Dem	6	advmod	_	_
3	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	takav	takav	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	tim	tim	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj:pass	_	_
6	ustrojen	ustrojiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	u	u	ADP	_	Case=Loc	8	case	_	_
8	Federaciji	federacija	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	6	obl	_	_
9	BiH	BiH	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Struja	struja	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	_	_
2	će	htjeti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	4	expl:pv	_	_
4	prodavati	prodavati	VERB	_	VerbForm=Inf	0	root	_	_
5	HEP-u	HEP	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	4	obj	_	_
6	po	po	ADP	_	Case=Loc	8	case	_	_
7	poticajnoj	poticajan	ADJ	_	Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	cijeni	cijena	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Hrvatska	Hrvatska	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	_
2	pozvana	pozvati	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	na	na	ADP	_	Case=Acc	4	case	_	_
4	ubrzanje	ubrzanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obl	_	_
5	reformi	reforma	NOUN	_	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
6	koje	koji	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Int,Rel	7	obj	_	_
7	traži	tražiti	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	_

~~~


