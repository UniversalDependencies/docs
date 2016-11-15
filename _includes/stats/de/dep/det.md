

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:poss]().

37100 nodes (12%) are attached to their parents as `det`.

36962 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57301886792453.

The following 46 pairs of parts of speech are connected with `det`: [de-pos/NOUN]()-[de-pos/DET]() (29761; 80% instances), [de-pos/PROPN]()-[de-pos/DET]() (4939; 13% instances), [de-pos/NOUN]()-[de-pos/PRON]() (1923; 5% instances), [de-pos/ADJ]()-[de-pos/DET]() (110; 0% instances), [de-pos/PRON]()-[de-pos/DET]() (67; 0% instances), [de-pos/NUM]()-[de-pos/DET]() (64; 0% instances), [de-pos/VERB]()-[de-pos/DET]() (61; 0% instances), [de-pos/NOUN]()-[de-pos/ADJ]() (25; 0% instances), [de-pos/PROPN]()-[de-pos/PRON]() (25; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (13; 0% instances), [de-pos/NUM]()-[de-pos/NOUN]() (13; 0% instances), [de-pos/PRON]()-[de-pos/PRON]() (12; 0% instances), [de-pos/ADJ]()-[de-pos/NOUN]() (11; 0% instances), [de-pos/ADV]()-[de-pos/DET]() (9; 0% instances), [de-pos/VERB]()-[de-pos/PRON]() (7; 0% instances), [de-pos/ADJ]()-[de-pos/PRON]() (5; 0% instances), [de-pos/ADJ]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/ADP]()-[de-pos/DET]() (4; 0% instances), [de-pos/AUX]()-[de-pos/DET]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (4; 0% instances), [de-pos/PRON]()-[de-pos/ADJ]() (4; 0% instances), [de-pos/X]()-[de-pos/DET]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (3; 0% instances), [de-pos/X]()-[de-pos/NOUN]() (3; 0% instances), [de-pos/CONJ]()-[de-pos/DET]() (2; 0% instances), [de-pos/DET]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/PART]()-[de-pos/DET]() (2; 0% instances), [de-pos/ADP]()-[de-pos/PRON]() (1; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/ADV]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/ADV]()-[de-pos/PRON]() (1; 0% instances), [de-pos/DET]()-[de-pos/ADV]() (1; 0% instances), [de-pos/DET]()-[de-pos/DET]() (1; 0% instances), [de-pos/DET]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/SCONJ]() (1; 0% instances), [de-pos/NUM]()-[de-pos/PRON]() (1; 0% instances), [de-pos/NUM]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/PRON]()-[de-pos/ADV]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/VERB]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADP]() (1; 0% instances), [de-pos/VERB]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/VERB]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/X]()-[de-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	_
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Grund	Grund	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
2	unseres	unser	PRON	PPOSAT	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Besuchs	Besuch	NOUN	NN	Case=Gen|Gender=Masc,Neut|Number=Sing	1	nmod	_	_
4	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
5	der	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
6	Wunsch	Wunsch	NOUN	NN	_	0	root	_	_
7	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	Vespa	Vespa	PROPN	NN	Case=Acc|Gender=Fem|Number=Sing	10	dobj	_	_
9	zu	zu	PART	PTKZU	_	10	mark	_	_
10	mieten	mieten	VERB	VVINF	VerbForm=Inf	6	xcomp	_	_
11	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
2	kann	können	AUX	VMFIN	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	aux	_	_
3	dieses	dies	PRON	PDAT	Case=Acc|Gender=Masc,Neut|Number=Sing|PronType=Dem	4	det	_	_
4	Geschäft	Geschäft	NOUN	NN	Case=Acc|Gender=Masc,Neut|Number=Sing	7	dobj	_	_
5	nur	nur	ADV	ADV	_	6	advmod	_	_
6	wärmstens	wärmstens	ADV	ADJD	_	7	advmod	_	_
7	empfehlen	empfehlen	VERB	VVINF	VerbForm=Inf	0	root	_	_
8	.	.	PUNCT	$.	_	7	punct	_	_

~~~


