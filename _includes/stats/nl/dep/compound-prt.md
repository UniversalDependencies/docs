

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [compound]().

1933 nodes (1%) are attached to their parents as `compound:prt`.

1107 instances of `compound:prt` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.47025349198138.

The following 34 pairs of parts of speech are connected with `compound:prt`: [nl-pos/VERB]()-[nl-pos/ADV]() (1001; 52% instances), [nl-pos/VERB]()-[nl-pos/X]() (171; 9% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (167; 9% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (155; 8% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (139; 7% instances), [nl-pos/AUX]()-[nl-pos/X]() (68; 4% instances), [nl-pos/AUX]()-[nl-pos/ADP]() (50; 3% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (27; 1% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (25; 1% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (25; 1% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (16; 1% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (15; 1% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (11; 1% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (10; 1% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (10; 1% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (8; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (6; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (6; 0% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (4; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/X]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 compound:prt	color:blue
1	Voor	voor	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	3	det	_	_
3	oefendrieluik	oefen_drieluik	NOUN	N|soort|ev|neut	Number=Sing	6	nmod	_	_
4	met	met	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	Pakistan	Pakistan	PROPN	N|eigen|ev|neut	Number=Sing	3	nmod	_	_
6	zette	zet_in	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
7	Bellaart	Bellaart	PROPN	N|eigen|ev|neut	Number=Sing	6	nsubj	_	_
8	hoog	hoog	ADJ	Adj|attr|stell|onverv	Degree=Pos	6	advmod	_	_
9	in	in	ADV	Adv|deelv	PartType=Vbp	6	compound:prt	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 compound:prt	color:blue
1	je	je	PRON	Pron|onbep|neut|zelfst	PronType=Ind	2	nsubj	_	_
2	moet	moet	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	dan	dan	ADV	Adv|gew|aanw	PronType=Dem	13	advmod	_	_
4	wel	wel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	13	advmod	_	_
5	wat	wat	PRON	Pron|onbep|neut|attr	PronType=Ind	6	nmod	_	_
6	regen	regen	NOUN	N|soort|ev|neut	Number=Sing	13	dobj	_	_
7	en	en	CONJ	Conj|neven	_	6	cc	_	_
8	zo	zo	ADV	Adv|gew|aanw	PronType=Dem	6	conj	_	_
9	op	op	X	Prep_Art_N	Number=Sing	13	compound:prt	_	MWE=op_de_koop|MWEPOS=X
10	de	de	ADP	ADP	AdpType=Prep	9	compound	_	_
11	koop	koop	X	X	Number=Sing	9	compound	_	_
12	toe	toe	ADV	Adv|deelv	PartType=Vbp	13	compound:prt	_	_
13	nemen	neem_toe	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	2	xcomp	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:prt	color:blue
1	het	het	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	vond	vind_plaats	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	plaats	plaats	NOUN	N|soort|ev|neut	Number=Sing	2	compound:prt	_	_
4	in	in	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	Amsterdam	Amsterdam	PROPN	N|eigen|ev|neut	Number=Sing	2	nmod	_	_

~~~


