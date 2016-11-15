

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

1087 nodes (0%) are attached to their parents as `xcomp`.

831 instances of `xcomp` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.41858325666973.

The following 23 pairs of parts of speech are connected with `xcomp`: [de-pos/VERB]()-[de-pos/VERB]() (601; 55% instances), [de-pos/VERB]()-[de-pos/ADJ]() (232; 21% instances), [de-pos/VERB]()-[de-pos/ADP]() (111; 10% instances), [de-pos/NOUN]()-[de-pos/VERB]() (39; 4% instances), [de-pos/ADJ]()-[de-pos/VERB]() (38; 3% instances), [de-pos/VERB]()-[de-pos/NOUN]() (17; 2% instances), [de-pos/VERB]()-[de-pos/PROPN]() (15; 1% instances), [de-pos/NOUN]()-[de-pos/ADP]() (6; 1% instances), [de-pos/ADV]()-[de-pos/VERB]() (4; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/ADP]()-[de-pos/ADJ]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (3; 0% instances), [de-pos/PRON]()-[de-pos/VERB]() (3; 0% instances), [de-pos/CONJ]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/ADP]()-[de-pos/VERB]() (1; 0% instances), [de-pos/AUX]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/AUX]()-[de-pos/VERB]() (1; 0% instances), [de-pos/NUM]()-[de-pos/ADP]() (1; 0% instances), [de-pos/PRON]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/VERB]()-[de-pos/AUX]() (1; 0% instances), [de-pos/VERB]()-[de-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	Das	der	PRON	PDS	Case=Acc|PronType=Dem	2	dobj	_	_
2	fand	finden	VERB	VVFIN	Number=Sing|Person=1|VerbForm=Fin	0	root	_	_
3	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
4	doch	doch	ADV	ADV	_	2	advmod	_	_
5	sehr	sehr	ADV	ADV	_	6	advmod	_	_
6	häftig	häftig	ADJ	ADJD	Degree=Pos	2	xcomp	_	_
7	!	!	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 xcomp	color:blue
1	Als	als	ADP	KOKOM	_	3	xcomp	_	_
2	Porzellangeld	Porzellangeld	NOUN	NN	_	1	nmod	_	_
3	bezeichnet	bezeichnen	VERB	VVFIN	Person=3|VerbForm=Fin	0	root	_	_
4	man	man	PRON	PIS	Case=Nom|PronType=Ind	3	nsubj	_	_
5	Münzen	Münze	NOUN	NN	Case=Nom|Number=Plur	1	nsubj	_	_
6	aus	aus	ADP	APPR	_	7	case	_	_
7	Porzellan	Porzellan	NOUN	NN	Case=Dat|Number=Sing	5	nmod	_	_
8	.	.	PUNCT	$.	_	3	punct	_	_

~~~


