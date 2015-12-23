

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Croatian)

This relation is universal.

1314 nodes (1%) are attached to their parents as `xcomp`.

1251 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83485540334855.

The following 24 pairs of parts of speech are connected with `xcomp`: [hr-pos/VERB]()-[hr-pos/VERB]() (600; 46% instances), [hr-pos/VERB]()-[hr-pos/ADV]() (240; 18% instances), [hr-pos/VERB]()-[hr-pos/AUX]() (100; 8% instances), [hr-pos/VERB]()-[hr-pos/NOUN]() (92; 7% instances), [hr-pos/AUX]()-[hr-pos/ADJ]() (74; 6% instances), [hr-pos/VERB]()-[hr-pos/ADJ]() (60; 5% instances), [hr-pos/ADJ]()-[hr-pos/VERB]() (43; 3% instances), [hr-pos/NOUN]()-[hr-pos/ADV]() (25; 2% instances), [hr-pos/NOUN]()-[hr-pos/VERB]() (19; 1% instances), [hr-pos/AUX]()-[hr-pos/NOUN]() (17; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADV]() (8; 1% instances), [hr-pos/ADV]()-[hr-pos/VERB]() (8; 1% instances), [hr-pos/AUX]()-[hr-pos/VERB]() (8; 1% instances), [hr-pos/ADJ]()-[hr-pos/ADJ]() (6; 0% instances), [hr-pos/ADV]()-[hr-pos/ADJ]() (3; 0% instances), [hr-pos/ADV]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/AUX]()-[hr-pos/ADV]() (2; 0% instances), [hr-pos/ADJ]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/ADV]()-[hr-pos/NOUN]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/AUX]() (1; 0% instances), [hr-pos/AUX]()-[hr-pos/PROPN]() (1; 0% instances), [hr-pos/NOUN]()-[hr-pos/ADJ]() (1; 0% instances), [hr-pos/PROPN]()-[hr-pos/ADV]() (1; 0% instances), [hr-pos/VERB]()-[hr-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Smanjili	smanjiti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
2	smo	biti	AUX	_	Number=Plur|Person=1|Tense=Pres	1	aux	_	_
3	administraciju	administracija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	1	dobj	_	_
4	učinivši	učiniti	ADV	_	Degree=Pos	1	xcomp	_	_
5	je	on	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	dobj	_	_
6	proporcionalnoj	proporcionalni	ADJ	_	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	4	xcomp	_	_
7	broju	broj	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	4	iobj	_	_
8	stanovnika	stanovnik	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	7	nmod	_	_
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	To	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	_	_
2	mora	morati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	biti	biti	AUX	_	VerbForm=Inf	2	xcomp	_	_
4	iskorišteno	iskoristiti	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part	3	xcomp	_	_
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


