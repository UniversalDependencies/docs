

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [acl]().

1816 nodes (2%) are attached to their parents as `acl:relcl`.

1755 instances of `acl:relcl` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.97797356828194.

The following 32 pairs of parts of speech are connected with `acl:relcl`: [da-pos/NOUN]()-[da-pos/VERB]() (746; 41% instances), [da-pos/PRON]()-[da-pos/VERB]() (450; 25% instances), [da-pos/ADJ]()-[da-pos/VERB]() (239; 13% instances), [da-pos/PROPN]()-[da-pos/VERB]() (134; 7% instances), [da-pos/VERB]()-[da-pos/VERB]() (56; 3% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (35; 2% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (33; 2% instances), [da-pos/ADV]()-[da-pos/VERB]() (29; 2% instances), [da-pos/NUM]()-[da-pos/VERB]() (16; 1% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (13; 1% instances), [da-pos/ADV]()-[da-pos/PROPN]() (8; 0% instances), [da-pos/NOUN]()-[da-pos/ADV]() (8; 0% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (7; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (7; 0% instances), [da-pos/PRON]()-[da-pos/ADJ]() (6; 0% instances), [da-pos/DET]()-[da-pos/VERB]() (5; 0% instances), [da-pos/ADP]()-[da-pos/PROPN]() (3; 0% instances), [da-pos/PRON]()-[da-pos/NOUN]() (3; 0% instances), [da-pos/PROPN]()-[da-pos/PRON]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/VERB]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/X]()-[da-pos/VERB]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/CONJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/NOUN]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PRON]()-[da-pos/ADV]() (1; 0% instances), [da-pos/PRON]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/ADV]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Fakkeltoget	fakkeltog	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nsubj	_	_
2	sluttede	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ved	ved	ADP	_	AdpType=Prep	4	case	_	_
4	bålet	bål	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	der	der	PRON	_	PartType=Inf	8	nsubjpass	_	_
7	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	auxpass	_	_
8	antændt	antænde	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	4	acl:relcl	_	_
9	af	af	ADP	_	AdpType=Prep	10	case	_	_
10	faklerne	fakkel	NOUN	_	Definite=Def|Gender=Com|Number=Plur	8	nmod	_	_
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	-	-	PUNCT	_	_	2	punct	_	_
2	Hvad	hvad	PRON	_	Number=Sing|PronType=Int,Rel	0	root	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	_
7	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
8	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 9 acl:relcl	color:blue
1	Og	og	CONJ	_	_	11	discourse	_	_
2	bogen	bog	NOUN	_	Definite=Def|Gender=Com|Number=Sing	11	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
4	ikke	ikke	ADV	_	_	11	neg	_	_
5	,	,	PUNCT	_	_	9	punct	_	_
6	som	som	PRON	_	PartType=Inf	9	dobj	_	_
7	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	9	nsubj	_	_
8	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	aux	_	_
9	tro	tro	VERB	_	VerbForm=Inf|Voice=Act	11	acl:relcl	_	_
10	,	,	PUNCT	_	_	9	punct	_	_
11	negativ	negativ	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
12	og	og	CONJ	_	_	11	cc	_	_
13	hadefuld	hadefuld	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	11	conj	_	_
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


