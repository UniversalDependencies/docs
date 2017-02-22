

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

477 nodes (0%) are attached to their parents as `iobj`.

396 instances of `iobj` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.10482180293501.

The following 10 pairs of parts of speech are connected with `iobj`: [nl-pos/VERB]()-[nl-pos/PRON]() (314; 66% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (107; 22% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (30; 6% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (16; 3% instances), [nl-pos/VERB]()-[nl-pos/DET]() (3; 1% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/AUX]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	Moeder	moeder	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
2	Mien	Mien	PROPN	N|eigen|ev|neut	Number=Sing	1	appos	_	_
3	spoorde	spoor_aan	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	haar	haar	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	aan	aan	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	compound:prt	_	_
6	toch	toch	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
7	op	op	ADV	Adv|deelv	PartType=Vbp	9	compound:prt	_	_
8	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	9	mark	_	_
9	stappen	stap_op	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	3	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 iobj	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	SpaceAfter=No
2	Die	die	PRON	Pron|aanw|neut|attr	PronType=Dem	4	nmod	_	_
3	eerste	eerste	ADJ	Num|rang|bep|attr|onverv	Definite=Def|NumType=Ord	4	amod	_	_
4	weken	week	NOUN	N|soort|mv|neut	Number=Plur	5	obl	_	_
5	had	heb	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
6	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	veelmoeite	moeite	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	5	ccomp	_	_
9	met	met	ADP	Prep|voor	AdpType=Prep	11	case	_	_
10	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	11	nmod	_	_
11	motivatie	motivatie	NOUN	N|soort|ev|neut	Number=Sing	5	iobj	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Van	van	PROPN	N|eigen|ev|neut	Number=Sing	3	iobj	_	_
2	Wout-Jan	Wout-Jan	PROPN	N|eigen|ev|neut	Number=Sing	1	obj	_	_
3	wisten	weet	VERB	V|trans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
5	dat	dat	SCONJ	Conj|onder|metfin	_	8	mark	_	_
6	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
7	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	8	det	_	_
8	superjockey	superjockey	NOUN	N|soort|ev|neut	Number=Sing	3	ccomp	_	_
9	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

103 nodes (0%) are attached to their parents as `iobj`.

60 instances of `iobj` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.10679611650485.

The following 8 pairs of parts of speech are connected with `iobj`: [nl-pos/VERB]()-[nl-pos/NOUN]() (49; 48% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (26; 25% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (22; 21% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (2; 2% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (1; 1% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (1; 1% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 1% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Jaak	Jaak	PROPN	_	_	4	nsubj	_	_
2	Van	Van	PROPN	_	_	1	flat:name	_	_
3	Assche	Assche	PROPN	_	_	1	flat:name	_	_
4	geeft	geven	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
5	dit	dit	DET	_	_	6	det	_	_
6	personage	personage	NOUN	_	Gender=Neut|Number=Sing	4	iobj	_	_
7	gestalte	gestalte	NOUN	_	Gender=Com|Number=Sing	4	compound:prt	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Ook	ook	ADV	_	_	3	amod	_	_
2	op	op	ADP	_	_	3	case	_	_
3	privévlak	privévlak	NOUN	_	Gender=Neut|Number=Sing	4	obl	_	_
4	gaat	gaan	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
5	het	het	PRON	_	Person=3|PronType=Prs	4	nsubj	_	_
6	Kim	Kim	PROPN	_	Gender=Com|Number=Sing	4	iobj	_	_
7	niet	niet	ADV	_	_	4	advmod	_	_
8	voor	voor	ADP	_	_	4	compound:prt	_	_
9	de	de	DET	_	Definite=Def	8	fixed	_	_
10	wind	wind	NOUN	_	Gender=Com|Number=Sing	8	fixed	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 iobj	color:blue
1	Postuum	postuum	ADJ	_	Degree=Pos	10	advmod	_	_
2	werd	worden	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
3	hem	hem	PRON	_	Case=Acc|Person=3|PronType=Prs	10	iobj	_	_
4	ook	ook	ADV	_	_	10	advmod	_	_
5	de	de	DET	_	Definite=Def	6	det	_	_
6	Staatsprijs	staatsprijs	NOUN	_	Gender=Com|Number=Sing	10	nsubj:pass	_	_
7	voor	voor	ADP	_	_	9	case	_	_
8	de	de	DET	_	Definite=Def	9	det	_	_
9	literatuur	literatuur	NOUN	_	Gender=Com|Number=Sing	6	nmod	_	_
10	toegekend	toekennen	VERB	_	VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


