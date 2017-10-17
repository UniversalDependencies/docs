

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

735 nodes (0%) are attached to their parents as `ccomp`.

582 instances of `ccomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.3877551020408.

The following 24 pairs of parts of speech are connected with `ccomp`: [de-pos/VERB]()-[de-pos/VERB]() (473; 64% instances), [de-pos/VERB]()-[de-pos/ADJ]() (74; 10% instances), [de-pos/NOUN]()-[de-pos/VERB]() (65; 9% instances), [de-pos/VERB]()-[de-pos/NOUN]() (41; 6% instances), [de-pos/ADJ]()-[de-pos/VERB]() (33; 4% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (14; 2% instances), [de-pos/PRON]()-[de-pos/VERB]() (4; 1% instances), [de-pos/VERB]()-[de-pos/ADP]() (4; 1% instances), [de-pos/VERB]()-[de-pos/PRON]() (4; 1% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (3; 0% instances), [de-pos/ADV]()-[de-pos/VERB]() (3; 0% instances), [de-pos/VERB]()-[de-pos/PROPN]() (3; 0% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/PROPN]()-[de-pos/VERB]() (2; 0% instances), [de-pos/ADJ]()-[de-pos/ADP]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/ADV]() (1; 0% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/ADV]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/PART]()-[de-pos/VERB]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances), [de-pos/X]()-[de-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	Dieses	dies	PRON	PDAT	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	Zentrum	Zentrum	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	_
3	hält	halten	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
4	was	was	PRON	PIS	Case=Acc|PronType=Ind	6	obj	_	_
5	es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	verspricht	versprechen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	3	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Für	für	ADP	APPR	_	3	case	_	_
2	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Werkstatt	Werkstatt	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	4	obl	_	_
4	spricht	sprechen	VERB	VVFIN	VerbForm=Fin	0	root	_	_
5	dass	dass	SCONJ	KOUS	_	8	mark	_	_
6	sie	sie	PRON	PPER	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	sehr	sehr	ADV	ADV	_	8	advmod	_	_
8	günstig	günstig	ADJ	ADJD	Degree=Pos	4	ccomp	_	_
9	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Frage	Frage	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	12	nsubj:pass	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	2	punct	_	_
4	ob	ob	SCONJ	KOUS	_	9	mark	_	_
5	Hajek	Hajek	PROPN	NE	Case=Nom|Number=Sing	9	nsubj	_	_
6	in	in	ADP	APPR	_	8	case	_	_
7	dem	der	DET	ART	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Art	8	det	_	_
8	Militärdienst	Militärdienst	NOUN	NN	Case=Dat|Gender=Masc,Neut|Number=Sing	9	obl	_	_
9	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	2	punct	_	_
11	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:pass	_	_
12	verneint	verneinen	VERB	VVPP	VerbForm=Part	0	root	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	12	punct	_	_

~~~


