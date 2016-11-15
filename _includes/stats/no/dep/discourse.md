

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

142 nodes (0%) are attached to their parents as `discourse`.

115 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.42253521126761.

The following 9 pairs of parts of speech are connected with `discourse`: [no-pos/VERB]()-[no-pos/INTJ]() (74; 52% instances), [no-pos/ADJ]()-[no-pos/INTJ]() (22; 15% instances), [no-pos/NOUN]()-[no-pos/INTJ]() (18; 13% instances), [no-pos/PRON]()-[no-pos/INTJ]() (10; 7% instances), [no-pos/INTJ]()-[no-pos/INTJ]() (9; 6% instances), [no-pos/ADV]()-[no-pos/INTJ]() (6; 4% instances), [no-pos/PROPN]()-[no-pos/INTJ]() (1; 1% instances), [no-pos/VERB]()-[no-pos/ADJ]() (1; 1% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse	color:blue
1	Kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	fortsatt	fortsatt	ADV	_	_	3	advmod	_	_
3	høre	høre	VERB	_	VerbForm=Inf	0	root	_	_
4	henne	hun	PRON	_	Animacy=Anim|Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	rope	rope	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	heia	heia	INTJ	_	_	5	discourse	_	_
7	heia	heia	INTJ	_	_	5	discourse	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	-	$-	PUNCT	_	_	7	punct	_	_
2	Nei	nei	INTJ	_	_	7	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	jeg	jeg	PRON	_	Animacy=Anim|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	er	være	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	ikke	ikke	ADV	_	_	7	neg	_	_
7	glad	glad	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
8	for	for	ADP	_	_	10	case	_	_
9	dette	dette	DET	_	Gender=Neut|Number=Sing|PronType=Dem	10	det	_	_
10	forbudet	forbud	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	-	$-	PUNCT	_	_	5	punct	_	_
2	Aha	aha	INTJ	_	_	5	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	norsk	norsk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	journalist	journalist	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	$.	PUNCT	_	_	5	punct	_	_

~~~


