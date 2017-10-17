

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.
There are 1 language-specific subtypes of `compound`: [compound:prt]().

3542 nodes (2%) are attached to their parents as `compound`.

3445 instances of `compound` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58949745906268.

The following 39 pairs of parts of speech are connected with `compound`: [nl-pos/X]()-[nl-pos/X]() (1952; 55% instances), [nl-pos/ADP]()-[nl-pos/X]() (472; 13% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (395; 11% instances), [nl-pos/X]()-[nl-pos/ADP]() (200; 6% instances), [nl-pos/X]()-[nl-pos/NUM]() (168; 5% instances), [nl-pos/ADP]()-[nl-pos/ADP]() (44; 1% instances), [nl-pos/DET]()-[nl-pos/X]() (41; 1% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (36; 1% instances), [nl-pos/VERB]()-[nl-pos/X]() (22; 1% instances), [nl-pos/NOUN]()-[nl-pos/X]() (19; 1% instances), [nl-pos/CCONJ]()-[nl-pos/X]() (18; 1% instances), [nl-pos/DET]()-[nl-pos/DET]() (18; 1% instances), [nl-pos/AUX]()-[nl-pos/X]() (17; 0% instances), [nl-pos/X]()-[nl-pos/PUNCT]() (17; 0% instances), [nl-pos/NUM]()-[nl-pos/X]() (16; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (13; 0% instances), [nl-pos/PUNCT]()-[nl-pos/X]() (11; 0% instances), [nl-pos/NUM]()-[nl-pos/ADP]() (9; 0% instances), [nl-pos/ADP]()-[nl-pos/DET]() (8; 0% instances), [nl-pos/ADV]()-[nl-pos/X]() (7; 0% instances), [nl-pos/PRON]()-[nl-pos/X]() (7; 0% instances), [nl-pos/X]()-[nl-pos/ADV]() (7; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (6; 0% instances), [nl-pos/PUNCT]()-[nl-pos/NUM]() (6; 0% instances), [nl-pos/NUM]()-[nl-pos/PUNCT]() (5; 0% instances), [nl-pos/DET]()-[nl-pos/ADP]() (4; 0% instances), [nl-pos/PUNCT]()-[nl-pos/PUNCT]() (4; 0% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (3; 0% instances), [nl-pos/ADV]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/PUNCT]() (2; 0% instances), [nl-pos/CCONJ]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PUNCT]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/X]()-[nl-pos/CCONJ]() (2; 0% instances), [nl-pos/ADP]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/PUNCT]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/PUNCT]()-[nl-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	besloot	besluit	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	serieuzer	serieus	ADJ	Adj|attr|vergr|onverv	Degree=Cmp	7	obl	_	_
4	te	te	X	Prep_N|voor_soort|ev|neut	Number=Sing	7	compound:prt	_	MWE=te_werk|MWEPOS=X
5	werk	werk	X	X	Number=Sing	4	compound	_	_
6	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	7	mark	_	_
7	gaan	ga	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	2	nsubj	_	_
2	gaf	geef	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
3	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	2	obj	_	_
4	de	de	ADP	Art_N	AdpType=Prep	2	compound:prt	_	MWE=de_tijd|MWEPOS=X
5	tijd	tijd	X	X	Definite=Def|Number=Sing	4	compound	_	_
6	om	om	SCONJ	Conj|onder|metinf	_	2	obj	_	_
7	eens	eens	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
8	na	na	ADV	Adv|deelv	PartType=Vbp	10	compound:prt	_	_
9	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	10	mark	_	_
10	denken	denk_na	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	6	xcomp	_	_
11	over	over	ADP	Prep|voor	AdpType=Prep	13	case	_	_
12	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	13	nmod	_	_
13	instelling	instelling	NOUN	N|soort|ev|neut	Number=Sing	10	obj	_	SpaceAfter=No
14	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 compound	color:blue
1	Nederland	Nederland	PROPN	N|eigen|ev|neut	Number=Sing	2	nsubj	_	_
2	staat	sta	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
3	halverwege	halverwege	ADP	Prep|voor	AdpType=Prep	5	case	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	5	det	_	_
5	competitie	competitie	NOUN	N|soort|ev|neut	Number=Sing	2	obl	_	_
6	op	op	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	drie	drie	NUM	Num|hoofd|bep|zelfst|onverv	Definite=Def|NumType=Card	2	obl	_	_
8	uit	uit	ADP	Prep|voor	AdpType=Prep	9	case	_	_
9	vier	vier	NUM	Num|hoofd|bep|zelfst|onverv	Definite=Def|NumType=Card	7	compound	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


