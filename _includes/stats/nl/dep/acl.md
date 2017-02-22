

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

3223 nodes (2%) are attached to their parents as `acl`.

2017 instances of `acl` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.40893577412349.

The following 30 pairs of parts of speech are connected with `acl`: [nl-pos/NOUN]()-[nl-pos/VERB]() (2752; 85% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (118; 4% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (103; 3% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (85; 3% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (56; 2% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (39; 1% instances), [nl-pos/NOUN]()-[nl-pos/X]() (10; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (8; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (6; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (5; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (5; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (4; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (4; 0% instances), [nl-pos/PRON]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/DET]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/SYM]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/CCONJ]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	Nederland	Nederland	PROPN	N|eigen|ev|neut	Number=Sing	2	nsubj	_	_
2	kon	kan	VERB	V|hulp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	er	er	ADV	Adv|gew|er	AdvType=Ex	9	advmod	_	_
4	zelden	zelden	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
5	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	7	det	_	_
6	vloeiende	vloeiend	VERB	V|intrans|tegdw|vervneut	Case=Nom|Subcat=Intr|Tense=Pres|VerbForm=Part	7	acl	_	_
7	aanval	aanval	NOUN	N|soort|ev|neut	Number=Sing	9	obj	_	_
8	tegenover	tegenover	ADP	Prep|voor	AdpType=Prep	3	case	_	_
9	stellen	stel	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	2	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	Maar	maar	CCONJ	Conj|neven	_	0	root	_	_
2	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	5	nsubj	_	_
3	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
4	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	5	det	_	_
5	countrymuziek	muziek	NOUN	N|soort|ev|neut	Number=Sing	1	parataxis	_	_
6	waarmee	waarmee	ADV	Adv|pron|vrag	PronType=Int	8	mark	_	_
7	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	doorbrak	breek_door	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	2	acl	_	SpaceAfter=No
9	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl	color:blue
1	Maar	maar	CCONJ	Conj|neven	_	0	root	_	_
2	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	4	det	_	_
3	meeste	meest	DET	Num	Case=Nom|Degree=Sup|NumType=Card|PronType=Ind	4	det:nummod	_	_
4	pijn	pijn	NOUN	N|soort|ev|neut	Number=Sing	5	obj	_	_
5	deed	doe	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	1	parataxis	_	_
6	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	8	det	_	_
7	gedesillusioneerde	gedesillusioneerd	VERB	V|trans|verldw|vervneut	Case=Nom|Subcat=Tran|Tense=Past|VerbForm=Part	8	acl	_	_
8	Oranje	Oranje	PROPN	N|eigen|ev|neut	Number=Sing	5	nsubj	_	_
9	zichzelf	zichzelf	PRON	Pron|ref|3|evofmv	Number=Plur,Sing|Person=3|PronType=Prs|Reflex=Yes	5	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

430 nodes (0%) are attached to their parents as `acl`.

347 instances of `acl` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75116279069767.

The following 36 pairs of parts of speech are connected with `acl`: [nl-pos/NOUN]()-[nl-pos/VERB]() (219; 51% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (32; 7% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (20; 5% instances), [nl-pos/PROPN]()-[nl-pos/NUM]() (20; 5% instances), [nl-pos/PROPN]()-[nl-pos/PROPN]() (20; 5% instances), [nl-pos/DET]()-[nl-pos/NUM]() (17; 4% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (14; 3% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (12; 3% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (12; 3% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (12; 3% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (9; 2% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (4; 1% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (4; 1% instances), [nl-pos/ADP]()-[nl-pos/NUM]() (3; 1% instances), [nl-pos/DET]()-[nl-pos/VERB]() (3; 1% instances), [nl-pos/NUM]()-[nl-pos/VERB]() (3; 1% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (1; 0% instances), [nl-pos/SYM]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	De	de	DET	_	Definite=Def	2	det	_	_
2	Fransen	Fransman	PROPN	_	Number=Plur	3	nsubj	_	_
3	hadden	hebben	VERB	_	Number=Plur|Tense=Past|VerbForm=Fin	0	root	_	_
4	nog	nog	ADV	_	_	3	advmod	_	_
5	alle	al	DET	_	_	6	det	_	_
6	kans	kans	NOUN	_	Gender=Com|Number=Sing	3	obj	_	_
7	om	om	ADP	_	_	9	mark	_	_
8	te	te	ADP	_	_	9	mark	_	_
9	winnen	winnen	VERB	_	VerbForm=Inf	6	acl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Dell	Dell	PROPN	_	Gender=Com|Number=Sing	0	root	_	_
2	(	(	PUNCT	_	_	1	punct	_	SpaceAfter=No
3	geeft	geven	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	1	acl	_	_
4	geen	geen	DET	_	_	5	det	_	_
5	comics	comic	NOUN	_	Number=Plur	3	obj	_	_
6	meer	veel	PRON	_	PronType=Ind	3	obl	_	_
7	uit	uit	ADP	_	_	3	compound:prt	_	SpaceAfter=No
8	)	)	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl	color:blue
1	«	«	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Indian	Indian	PROPN	_	_	0	root	_	_
3	summer	summer	PROPN	_	_	2	flat:name	_	SpaceAfter=No
4	»	»	PUNCT	_	_	2	punct	_	_
5	(	(	PUNCT	_	_	2	punct	_	SpaceAfter=No
6	1969	1969	NUM	_	_	2	acl	_	SpaceAfter=No
7	,	,	PUNCT	_	_	2	punct	_	_
8	verhalen	verhaal	NOUN	_	Number=Plur	6	parataxis	_	SpaceAfter=No
9	)	)	PUNCT	_	_	2	punct	_	_

~~~


