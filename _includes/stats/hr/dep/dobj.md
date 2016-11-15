

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

5534 nodes (4%) are attached to their parents as `dobj`.

4581 instances of `dobj` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03523671846765.

The following 34 pairs of parts of speech are connected with `dobj`: [hr-pos/VERB]()-[hr-pos/NOUN]() (4090; 74% instances), [hr-pos/VERB]()-[hr-pos/PRON]() (644; 12% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (216; 4% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (188; 3% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (123; 2% instances), [hr-pos/ADJ]()-[hr-pos/PRON]() (39; 1% instances), [hr-pos/NOUN]()-[hr-pos/NOUN]() (30; 1% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (30; 1% instances), [hr-pos/ADV]()-[hr-pos/PROPN]() (27; 0% instances), [hr-pos/ADV]()-[hr-pos/PRON]() (23; 0% instances), [hr-pos/ADJ]()-[hr-pos/PROPN]() (18; 0% instances), [hr-pos/NOUN]()-[hr-pos/PRON]() (15; 0% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (13; 0% instances), [hr-pos/VERB]()-[hr-pos/NUM]() (13; 0% instances), [hr-pos/AUX]()-[hr-pos/PRON]() (12; 0% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (12; 0% instances), [hr-pos/VERB]()-[hr-pos/ADP]() (5; 0% instances), [hr-pos/VERB]()-[hr-pos/PUNCT]() (5; 0% instances), [hr-pos/VERB]()-[hr-pos/VERB]() (5; 0% instances), [hr-pos/NOUN]()-[hr-pos/PROPN]() (4; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/PROPN]()-[hr-pos/NOUN]() (3; 0% instances), [hr-pos/VERB]()-[hr-pos/PART]() (3; 0% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (2; 0% instances), [hr-pos/PROPN]()-[hr-pos/PROPN]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/X]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/ADP]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/PRON]()-[hr-pos/PRON]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/CONJ]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/X]() (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dobj	color:blue
1	SZO	SZO	PROPN	_	Case=Acc|Gender=Fem|Number=Sing	3	dobj	_	_
2	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	3	aux	_	_
3	osnovali	osnovati	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
4	UN	UN	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
5	7.	7.	NUM	_	NumType=Ord	6	nummod	_	_
6	travnja	travanj	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
7	1948.	1948.	NUM	_	NumType=Ord	8	nummod	_	_
8	godine	godina	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


