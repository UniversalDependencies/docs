

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

4368 nodes (2%) are attached to their parents as `flat`.

4368 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.4635989010989.

The following 12 pairs of parts of speech are connected with `flat`: [nl-pos/PROPN]()-[nl-pos/PROPN]() (4342; 99% instances), [nl-pos/PROPN]()-[nl-pos/CCONJ]() (6; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (4; 0% instances), [nl-pos/ADV]()-[nl-pos/PROPN]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Waarmee	waarmee	ADV	Adv|pron|vrag	PronType=Int	10	mark	_	_
2	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	3	det	_	_
3	pad	pad	NOUN	N|soort|ev|neut	Number=Sing	10	obj	_	_
4	voor	voor	ADP	Prep|voor	AdpType=Prep	7	case	_	_
5	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	7	det	_	_
6	rappe	rap	NOUN	N|soort|ev|neut	Number=Sing	7	obl	_	_
7	Van	Van	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	10	advmod	_	MWE=Van_Alebeek|MWEPOS=X
8	Alebeek	Alebeek	PROPN	PROPN	_	7	flat	_	_
9	werd	word	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	10	aux	_	_
10	geëffend	effen	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	10	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 flat	color:blue
1	K	K	PROPN	N_N_N	_	4	nsubj	_	MWE=K_Z_O|MWEPOS=X
2	Z	Z	PROPN	PROPN	_	1	flat	_	_
3	O	O	CCONJ	CCONJ	_	1	flat	_	_
4	gaat	ga	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	0	root	_	_
5	samen	samen	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	4	advmod	_	_
6	met	met	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	AKU	AKU	PROPN	N|eigen|ev|neut	Number=Sing	5	obl	_	_
8	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	9	det	_	_
9	combinatie	combinatie	NOUN	N|soort|ev|neut	Number=Sing	10	obj	_	_
10	vormen	vorm	AUX	V|trans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Pres|VerbForm=Fin	4	aux	_	_
11	onder	onder	ADP	Prep|voor	AdpType=Prep	12	case	_	_
12	naam	naam	NOUN	N|soort|ev|neut	Number=Sing	9	nmod	_	_
13	A	A	ADP	N_N_N_Int	AdpType=Prep	16	case	_	MWE=A_K_Z_O|MWEPOS=X
14	K	K	PROPN	PROPN	_	12	appos	_	_
15	Z	Z	PROPN	PROPN	_	14	flat	_	_
16	O	O	CCONJ	CCONJ	_	14	flat	_	SpaceAfter=No
17	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Ali	Ali	ADV	N_N|eigen|ev|neut_eigen|ev|neut	Number=Sing	3	nsubj	_	MWE=Ali_Silver|MWEPOS=X
2	Silver	Silver	PROPN	PROPN	_	1	flat	_	_
3	kwam	kom	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
4	in	in	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	1947	1947	NUM	Num|hoofd|bep|zelfst|onverv	Definite=Def|NumType=Card	3	obl	_	_
6	naar	naar	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	Lambarene	Lambarene	PROPN	N|eigen|ev|neut	Number=Sing	3	obl	_	SpaceAfter=No
8	,	,	PUNCT	Punc|komma	PunctType=Comm	3	punct	_	_
9	maria	maria	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	11	nsubj	_	MWE=maria_Langendijk|MWEPOS=X
10	Langendijk	Langendijk	PROPN	PROPN	_	9	flat	_	_
11	bleef	blijf	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Aux,Cop	3	parataxis	_	_
12	er	er	ADV	Adv|gew|er	AdvType=Ex	11	advmod	_	_
13	bijna	bijna	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	15	advmod	_	_
14	dertig	dertig	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	15	nummod	_	_
15	jaar	jaar	NOUN	N|soort|ev|neut	Number=Sing	11	obl	_	SpaceAfter=No
16	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


