

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

3868 nodes (2%) are attached to their parents as `compound`.

3764 instances of `compound` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.6147880041365.

The following 45 pairs of parts of speech are connected with `compound`: [nl-pos/X]()-[nl-pos/X]() (2170; 56% instances), [nl-pos/ADP]()-[nl-pos/X]() (516; 13% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (410; 11% instances), [nl-pos/X]()-[nl-pos/ADP]() (220; 6% instances), [nl-pos/X]()-[nl-pos/NUM]() (168; 4% instances), [nl-pos/ADP]()-[nl-pos/ADP]() (48; 1% instances), [nl-pos/PRON]()-[nl-pos/X]() (46; 1% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (39; 1% instances), [nl-pos/NOUN]()-[nl-pos/X]() (22; 1% instances), [nl-pos/AUX]()-[nl-pos/X]() (20; 1% instances), [nl-pos/PRON]()-[nl-pos/PRON]() (20; 1% instances), [nl-pos/VERB]()-[nl-pos/X]() (20; 1% instances), [nl-pos/X]()-[nl-pos/PUNCT]() (19; 0% instances), [nl-pos/CONJ]()-[nl-pos/X]() (18; 0% instances), [nl-pos/NUM]()-[nl-pos/X]() (16; 0% instances), [nl-pos/X]()-[nl-pos/PRON]() (12; 0% instances), [nl-pos/PUNCT]()-[nl-pos/X]() (11; 0% instances), [nl-pos/ADP]()-[nl-pos/PRON]() (9; 0% instances), [nl-pos/NUM]()-[nl-pos/ADP]() (9; 0% instances), [nl-pos/ADV]()-[nl-pos/X]() (7; 0% instances), [nl-pos/X]()-[nl-pos/ADV]() (7; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (6; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NUM]() (6; 0% instances), [nl-pos/NUM]()-[nl-pos/PUNCT]() (5; 0% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (4; 0% instances), [nl-pos/PUNCT]()-[nl-pos/PUNCT]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/X]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (3; 0% instances), [nl-pos/PRON]()-[nl-pos/ADP]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/PUNCT]() (2; 0% instances), [nl-pos/CONJ]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/DET]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/DET]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/X]()-[nl-pos/CONJ]() (2; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/ADP]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Ook	ook	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	advmod	_	_
2	die	die	PRON	Pron|aanw|neut|attr	PronType=Dem	3	nmod	_	_
3	voorsprong	voorsprong	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	werd	word	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
5	uit	uit	X	Prep_N|voor_soort|mv|neut	Number=Plur	7	compound:prt	_	MWE=uit_handen|MWEPOS=X
6	handen	handen	X	X	Number=Plur	5	compound	_	_
7	gegeven	geef	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	4	aux	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	3	det	_	_
2	uiteindelijke	uiteindelijk	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	3	amod	_	_
3	winnaar	winnaar	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	komt	kom	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
5	in	in	ADP	Prep_N|voor_soort|ev|neut	AdpType=Prep	4	compound:prt	_	MWE=in_actie|MWEPOS=X
6	actie	actie	X	X	Number=Sing	5	compound	_	_
7	tegen	tegen	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	RKC	RKC	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	4	dobj	_	MWE=RKC_Waalwijk|MWEPOS=X
9	Waalwijk	Waalwijk	PROPN	PROPN	_	8	name	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	tweehonderd	tweehonderd	NUM	Num_Adj	Definite=Def|Degree=Pos|NumType=Card	0	root	_	MWE=tweehonderd_achtenzeventig|MWEPOS=NUM
2	achtenzeventig	achtenzeventig	NUM	NUM	Definite=Def|Degree=Pos|NumType=Card	1	compound	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

682 nodes (1%) are attached to their parents as `compound`.

496 instances of `compound` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.85630498533724.

The following 19 pairs of parts of speech are connected with `compound`: [nl-pos/VERB]()-[nl-pos/PART]() (377; 55% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (88; 13% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (85; 12% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (65; 10% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (43; 6% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (7; 1% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/PART]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/PART]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PART]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PART]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 compound	color:blue
1	Jan	Jan	PROPN	_	_	4	nsubj	_	_
2	Van	Van	PROPN	_	_	1	name	_	_
3	Eyck	Eyck	PROPN	_	_	1	name	_	_
4	werkte	werken	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	het	het	PRON	_	Person=3|PronType=Prs	4	dobj	_	_
6	verder	ver	ADJ	_	Degree=Cmp	4	amod	_	_
7	af	af	PART	_	_	4	compound	_	_
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 compound	color:blue
1	In	in	ADP	_	_	2	case	_	_
2	1974	1974	NUM	_	_	3	nmod	_	_
3	gaf	geven	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	3	nsubj	_	_
5	Suske	Suske	PROPN	_	Gender=Com|Number=Sing	3	dobj	_	_
6	en	en	CONJ	_	_	5	mwe	_	_
7	Wiske	Wiske	PROPN	_	Gender=Com|Number=Sing	5	mwe	_	_
8	uit	uit	ADP	_	_	3	compound	_	_
9	handen	hand	NOUN	_	Number=Plur	8	mwe	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 compound	color:blue
1	Binnen	binnen	ADP	_	_	3	case	_	_
2	het	het	DET	_	Definite=Def	3	det	_	_
3	OVV	OVV	PROPN	_	Gender=Neut|Number=Sing	4	nmod	_	_
4	vinden	vinden	VERB	_	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
5	we	we	PRON	_	Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
6	zowat	zowat	ADV	_	_	8	advmod	_	_
7	al	al	PRON	_	PronType=Ind	8	nmod	_	_
8	deze	deze	PRON	_	PronType=Dem	9	det	_	_
9	strekkingen	strekking	NOUN	_	Number=Plur	4	dobj	_	_
10	terug	terug	ADV	_	_	4	compound	_	_
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


