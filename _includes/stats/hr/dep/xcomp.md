

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

2766 nodes (2%) are attached to their parents as `xcomp`.

2658 instances of `xcomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.34490238611714.

The following 31 pairs of parts of speech are connected with `xcomp`: [hr-pos/VERB]()-[hr-pos/VERB]() (1479; 53% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (340; 12% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (187; 7% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (173; 6% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (138; 5% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (123; 4% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (104; 4% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (52; 2% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (33; 1% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (28; 1% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (27; 1% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (22; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (9; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (8; 0% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (7; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (6; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (4; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (4; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/DET]() (3; 0% instances), [hr-pos/AUX]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (2; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/SCONJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
1	Svaka	svaki	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	det	_	_
2	obitelj	obitelj	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	dobiti	dobiti	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	do	do	ADP	_	Case=Gen	7	case	_	_
6	500	500	NUM	_	NumType=Card	7	nummod	_	_
7	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	Preko	preko	ADP	_	Case=Gen	2	case	_	_
2	tjedna	tjedan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	_
3	nalazio	nalaziti	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
5	u	u	ADP	_	Case=Loc	6	case	_	_
6	šumi	šuma	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	3	obl	_	_
7	radeći	raditi	ADV	_	Tense=Pres|VerbForm=Conv	3	xcomp	_	_
8	i	i	CCONJ	_	_	9	cc	_	_
9	stanujući	stanovati	ADV	_	Tense=Pres|VerbForm=Conv	7	conj	_	_
10	u	u	ADP	_	Case=Loc	11	case	_	_
11	barakama	baraka	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	Ovo	ovaj	DET	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	3	expl:pv	_	_
3	može	moći	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	smatrati	smatrati	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	uspješnom	uspješan	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	etapom	etapa	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


