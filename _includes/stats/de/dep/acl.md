

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

2808 nodes (1%) are attached to their parents as `acl`.

2668 instances of `acl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.1602564102564.

The following 36 pairs of parts of speech are connected with `acl`: [de-pos/NOUN]()-[de-pos/VERB]() (1764; 63% instances), [de-pos/PROPN]()-[de-pos/VERB]() (342; 12% instances), [de-pos/VERB]()-[de-pos/VERB]() (211; 8% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (126; 4% instances), [de-pos/PRON]()-[de-pos/VERB]() (111; 4% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (49; 2% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (34; 1% instances), [de-pos/ADJ]()-[de-pos/VERB]() (24; 1% instances), [de-pos/ADP]()-[de-pos/VERB]() (19; 1% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (16; 1% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (15; 1% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (12; 0% instances), [de-pos/VERB]()-[de-pos/ADJ]() (10; 0% instances), [de-pos/NOUN]()-[de-pos/PRON]() (8; 0% instances), [de-pos/AUX]()-[de-pos/VERB]() (7; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (6; 0% instances), [de-pos/PRON]()-[de-pos/ADJ]() (6; 0% instances), [de-pos/VERB]()-[de-pos/NOUN]() (6; 0% instances), [de-pos/VERB]()-[de-pos/PRON]() (6; 0% instances), [de-pos/ADV]()-[de-pos/VERB]() (5; 0% instances), [de-pos/PROPN]()-[de-pos/X]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (3; 0% instances), [de-pos/NUM]()-[de-pos/VERB]() (3; 0% instances), [de-pos/NUM]()-[de-pos/X]() (3; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (3; 0% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (2; 0% instances), [de-pos/NOUN]()-[de-pos/AUX]() (2; 0% instances), [de-pos/NOUN]()-[de-pos/PART]() (2; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (1; 0% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/CONJ]()-[de-pos/VERB]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/AUX]() (1; 0% instances), [de-pos/X]()-[de-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 acl	color:blue
1	tolle	toll	ADJ	ADJA	Degree=Pos	3	amod	_	_
2	engangierte	engangierte	ADJ	ADJA	Degree=Pos	1	conj	_	_
3	mitarbeiter	Mitarbeiter	NOUN	NN	_	0	root	_	_
4	die	der	PRON	ART	Case=Nom|PronType=Dem	8	nsubj	_	_
5	auch	auch	ADV	ADV	_	6	advmod	_	_
6	sehr	sehr	ADV	ADV	_	7	advmod	_	_
7	motiviert	motiviert	ADJ	ADJD	Degree=Pos	8	xcomp	_	_
8	wirkten	wirken	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	3	acl	_	_
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 acl	color:blue
1	Thamar	Thamar	PROPN	NE	Case=Nom|Number=Sing	9	nsubj	_	_
2	,	,	PUNCT	$,	_	1	punct	_	_
3	die	der	PRON	PRELS	PronType=Rel	6	dep	_	_
4	sie	sie	PRON	PPER	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	dep	_	_
5	nicht	nicht	PART	PTKNEG	_	6	neg	_	_
6	verlassen	verlassen	VERB	VVINF	VerbForm=Inf	1	acl	_	_
7	will	wollen	AUX	VMFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
8	,	,	PUNCT	$,	_	6	punct	_	_
9	bricht	brechen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
10	zusammen	zusammen	ADV	ADV	_	9	mark	_	_
11	.	.	PUNCT	$.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	Da	da	SCONJ	KOUS	_	7	mark	_	_
2	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
3	nichts	nichts	PRON	PIS	Case=Acc|Number=Sing|PronType=Neg	7	dobj	_	_
4	mehr	mehr	ADV	ADV	_	7	advmod	_	_
5	zu	zu	PART	PTKZU	_	6	mark	_	_
6	verlieren	verlieren	VERB	VVINF	VerbForm=Inf	7	acl	_	_
7	hatten	haben	VERB	VAFIN	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	9	advcl	_	_
8	,	,	PUNCT	$,	_	9	punct	_	_
9	versuchten	versuchen	VERB	VVFIN	Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
10	wir	wir	PRON	PPER	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
11	es	es	PRON	PPER	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	dobj	_	_
12	dort	dort	ADV	ADV	_	9	advmod	_	_
13	.	.	PUNCT	$.	_	9	punct	_	_

~~~


