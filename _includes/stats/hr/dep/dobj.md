

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

3444 nodes (4%) are attached to their parents as `dobj`.

3055 instances of `dobj` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.00987224157956.

The following 28 pairs of parts of speech are connected with `dobj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (2682; 78% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (229; 7% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (156; 5% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (140; 4% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (90; 3% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (22; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (21; 1% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (17; 0% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (17; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (16; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (10; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (6; 0% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (5; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (5; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (4; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (3; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/PUNCT]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/X]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 dobj	color:blue
1	Svaka	svaki	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	obitelj	obitelj	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
3	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	dobiti	dobiti	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	do	do	ADP	_	Case=Gen	7	case	_	_
6	500	500	NUM	_	NumType=Card	7	nummod	_	_
7	eura	euro	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	dobj	_	_
8	pomoći	pomoć	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dobj	color:blue
1	Ashdownov	Ashdownov	ADJ	_	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Poss=Yes	2	nmod	_	_
2	ured	ured	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
3	okreće	okretati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	dobj	_	_
5	tranziciji	tranzicija	NOUN	_	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 dobj	color:blue
1	A	a	CONJ	_	_	8	discourse	_	_
2	čak	čak	ADV	_	Degree=Pos	8	discourse	_	_
3	će	htjeti	AUX	_	Number=Sing|Person=3|Tense=Pres	8	aux	_	_
4	i	i	CONJ	_	_	5	discourse	_	_
5	te	taj	PRON	_	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	_
6	dugove	dug	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	8	dobj	_	_
7	biti	biti	AUX	_	VerbForm=Inf	8	cop	_	_
8	teško	teško	ADV	_	Degree=Pos	0	root	_	_
9	otplatiti	otplatiti	VERB	_	VerbForm=Inf	8	nsubj	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


