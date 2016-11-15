

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

1459 nodes (0%) are attached to their parents as `neg`.

1170 instances of `neg` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.28649760109664.

The following 27 pairs of parts of speech are connected with `neg`: [de-pos/VERB]()-[de-pos/PART]() (778; 53% instances), [de-pos/NOUN]()-[de-pos/PRON]() (276; 19% instances), [de-pos/ADV]()-[de-pos/PART]() (141; 10% instances), [de-pos/ADJ]()-[de-pos/PART]() (104; 7% instances), [de-pos/VERB]()-[de-pos/ADV]() (48; 3% instances), [de-pos/NOUN]()-[de-pos/PART]() (45; 3% instances), [de-pos/ADV]()-[de-pos/ADV]() (11; 1% instances), [de-pos/PRON]()-[de-pos/PART]() (10; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (8; 1% instances), [de-pos/CONJ]()-[de-pos/PART]() (6; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (5; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (4; 0% instances), [de-pos/PROPN]()-[de-pos/PART]() (4; 0% instances), [de-pos/ADP]()-[de-pos/PART]() (2; 0% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (2; 0% instances), [de-pos/PART]()-[de-pos/PART]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/ADV]() (2; 0% instances), [de-pos/SCONJ]()-[de-pos/PART]() (2; 0% instances), [de-pos/AUX]()-[de-pos/ADV]() (1; 0% instances), [de-pos/AUX]()-[de-pos/PART]() (1; 0% instances), [de-pos/DET]()-[de-pos/PART]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/DET]() (1; 0% instances), [de-pos/NUM]()-[de-pos/PART]() (1; 0% instances), [de-pos/PART]()-[de-pos/ADV]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Mehr	mehr	PRON	PIAT	Case=Acc|PronType=Ind	5	dobj	_	_
2	braucht	brauchen	AUX	VVFIN	Person=3|VerbForm=Fin	5	aux	_	_
3	man	man	PRON	PIS	Case=Nom|PronType=Ind	5	nsubj	_	_
4	nicht	nicht	PART	PTKNEG	_	5	neg	_	_
5	sagen	sagen	VERB	VVINF	VerbForm=Inf	0	root	_	_
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
1	Hab	Hab	AUX	NN	_	9	aux	_	_
2	'	'	PUNCT	$(	_	1	punct	_	_
3	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
4	vorher	vorher	ADV	ADV	_	9	advmod	_	_
5	noch	noch	ADV	ADV	_	9	advmod	_	_
6	von	von	ADP	APPR	_	8	case	_	_
7	keinem	kein	PRON	PIAT	PronType=Neg	8	neg	_	_
8	Optiker	Optiker	NOUN	NN	Case=Dat|Number=Sing	9	nmod	_	_
9	geboten	bieten|gebieten	VERB	VVPP	VerbForm=Part	0	root	_	_
10	bekommen	bekommen	VERB	VVINF	VerbForm=Inf	9	xcomp	_	_
11	.	.	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Brauch	brauchen	VERB	VVIMP	_	0	root	_	_
2	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	aber	aber	ADV	ADV	_	1	advmod	_	_
4	nicht	nicht	PART	PTKNEG	_	5	neg	_	_
5	wieder	wieder	ADV	ADV	_	1	advmod	_	_
6	.	.	PUNCT	$.	_	1	punct	_	_

~~~


