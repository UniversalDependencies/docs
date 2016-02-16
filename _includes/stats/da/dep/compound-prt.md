

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [compound]().

398 nodes (0%) are attached to their parents as `compound:prt`.

334 instances of `compound:prt` (84%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.1356783919598.

The following 7 pairs of parts of speech are connected with `compound:prt`: [da-pos/VERB]()-[da-pos/ADV]() (257; 65% instances), [da-pos/ADV]()-[da-pos/ADP]() (40; 10% instances), [da-pos/ADP]()-[da-pos/ADP]() (39; 10% instances), [da-pos/NOUN]()-[da-pos/ADV]() (31; 8% instances), [da-pos/VERB]()-[da-pos/ADP]() (26; 7% instances), [da-pos/ADV]()-[da-pos/ADV]() (4; 1% instances), [da-pos/VERB]()-[da-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:prt	color:blue
1	Og	og	CONJ	_	_	3	discourse	_	_
2	gerne	gerne	ADV	_	_	3	advmod	_	_
3	bider	bide	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	tænderne	tand	NOUN	_	Definite=Def|Gender=Com|Number=Plur	3	dobj	_	_
5	sammen	sammen	ADV	_	_	3	compound:prt	_	_
6	for	for	ADP	_	AdpType=Prep	8	mark	_	_
7	at	at	PART	_	PartType=Inf	8	mark	_	_
8	bevise	bevise	VERB	_	VerbForm=Inf|Voice=Act	3	advcl	_	_
9	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	dobj	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Stakken	stak	NOUN	_	Definite=Def|Gender=Com|Number=Sing	7	nsubj	_	_
2	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
3	tæt	tæt	ADV	_	Degree=Pos	6	advmod	_	_
4	på	på	ADP	_	AdpType=Prep	3	compound:prt	_	_
5	2	2	NUM	_	NumType=Card	6	nummod	_	_
6	meter	meter	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	7	nmod	_	_
7	høj	høj	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
8	og	og	CONJ	_	_	7	cc	_	_
9	vejede	veje	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	_	_
10	43,5	43,5	NUM	_	NumType=Card	11	nummod	_	_
11	kg.	kilo	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	9	dobj	_	_
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 compound:prt	color:blue
1	Er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
2	Jorden	Jorden	NOUN	_	_	5	nsubj	_	_
3	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	5	det	_	_
4	død	død	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	klippe	klippe	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	med	med	ADP	_	AdpType=Prep	7	case	_	_
7	liv	liv	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	5	nmod	_	_
8	på	på	ADP	_	AdpType=Prep	6	compound:prt	_	_
9	-	-	PUNCT	_	_	5	punct	_	_
10	eller	eller	CONJ	_	_	5	cc	_	_
11	selv	selv	PRON	_	PronType=Dem	10	nmod	_	_
12	levende	levende	ADJ	_	Degree=Pos	10	amod	_	_
13	?	?	PUNCT	_	_	5	punct	_	_

~~~


