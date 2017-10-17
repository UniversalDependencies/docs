

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.
There are 1 language-specific subtypes of `csubj`: [csubj:pass]().

184 nodes (0%) are attached to their parents as `csubj`.

129 instances of `csubj` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.0760869565217.

The following 14 pairs of parts of speech are connected with `csubj`: [de-pos/VERB]()-[de-pos/VERB]() (84; 46% instances), [de-pos/ADJ]()-[de-pos/VERB]() (56; 30% instances), [de-pos/NOUN]()-[de-pos/VERB]() (22; 12% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (4; 2% instances), [de-pos/ADV]()-[de-pos/VERB]() (3; 2% instances), [de-pos/VERB]()-[de-pos/ADJ]() (3; 2% instances), [de-pos/VERB]()-[de-pos/NOUN]() (3; 2% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (2; 1% instances), [de-pos/PRON]()-[de-pos/VERB]() (2; 1% instances), [de-pos/ADJ]()-[de-pos/ADP]() (1; 1% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (1; 1% instances), [de-pos/ADJ]()-[de-pos/PRON]() (1; 1% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (1; 1% instances), [de-pos/X]()-[de-pos/ADJ]() (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Hier	hier	ADV	ADV	_	2	advmod	_	_
2	macht	machen	VERB	VVFIN	Person=3|VerbForm=Fin	0	root	_	_
3	tanzen	tanzen	VERB	VVINF	VerbForm=Inf	4	xcomp	_	_
4	lernen	lernen	VERB	VVFIN	VerbForm=Fin	2	csubj	_	_
5	richtig	richtig	ADJ	ADJD	Case=Acc|Degree=Pos|Number=Sing	6	amod	_	_
6	Spaß	Spaß	NOUN	NN	Case=Acc|Number=Sing	2	obj	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Anmerkenswert	Anmerkenswert	ADJ	NN	_	0	root	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	1	punct	_	_
4	dass	dass	SCONJ	KOUS	_	8	mark	_	_
5	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Laden	Laden	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
7	auch	auch	ADV	ADV	_	8	advmod	_	_
8	ausbildet	ausbilden	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	1	csubj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Was	was	PRON	PWS	Case=Nom|Number=Sing|PronType=Int	3	nsubj	_	_
2	mir	ich	PRON	PPER	Case=Dat|Number=Sing|Person=1|PronType=Prs	3	iobj	_	_
3	gefällt	gefallen	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	7	csubj	_	SpaceAfter=No
4	,	,	PUNCT	$,	_	7	punct	_	_
5	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	der	der	DET	ART	Definite=Def|PronType=Art	7	det	_	_
7	Umgang	Umgang	NOUN	NN	_	0	root	_	_
8	mit	mit	ADP	APPR	_	10	case	_	_
9	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	Tieren	Tier	NOUN	NN	Case=Dat|Number=Plur	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	7	punct	_	_

~~~


