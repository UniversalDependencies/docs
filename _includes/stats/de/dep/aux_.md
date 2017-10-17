

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

2983 nodes (1%) are attached to their parents as `aux`.

1997 instances of `aux` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.16828695943681.

The following 12 pairs of parts of speech are connected with `aux`: [de-pos/VERB]()-[de-pos/AUX]() (2943; 99% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (11; 0% instances), [de-pos/ADJ]()-[de-pos/PART]() (8; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (8; 0% instances), [de-pos/VERB]()-[de-pos/PART]() (4; 0% instances), [de-pos/AUX]()-[de-pos/AUX]() (2; 0% instances), [de-pos/VERB]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/AUX]() (1; 0% instances), [de-pos/ADP]()-[de-pos/AUX]() (1; 0% instances), [de-pos/ADV]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/AUX]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 aux	color:blue
1	Habe	haben	AUX	VAFIN	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
2	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	bestellten	bestellt	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	Artikel	Artikel	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	_
5	prompt	prompt	ADV	ADJD	_	6	advmod	_	_
6	erhalten	erhalten	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 aux	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	erschien	erscheinen	VERB	VVFIN	Number=Plur|Person=3|VerbForm=Fin	0	root	_	_
3	auf	auf	ADP	APPR	_	5	case	_	_
4	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	5	det	_	_
5	Album	Album	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	2	obl	_	_
6	Why	Why	PROPN	NE	_	9	advmod	_	_
7	Do	Do	PROPN	NE	_	9	aux	_	_
8	Fools	Fools	PROPN	NN	Case=Nom|Number=Sing	9	nsubj	_	_
9	Fall	Fall	PROPN	NN	_	5	appos	_	_
10	in	in	PROPN	APPR	_	11	case	_	_
11	Love	Love	PROPN	NN	_	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Diesen	dies	PRON	PDAT	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	Spitzenwert	Spitzenwert	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	10	obj	_	_
3	muss	müssen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
4	die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
5	nachfolgende	nachfolgend	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
6	zu	zu	PART	APPR	_	7	aux	_	_
7	schützende	schützend	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	Elektronik	Elektronik	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	_
9	mindestens	mindestens	ADV	ADV	_	10	advmod	_	_
10	aushalten	aushalten	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


