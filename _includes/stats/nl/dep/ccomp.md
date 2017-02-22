

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

1429 nodes (1%) are attached to their parents as `ccomp`.

1294 instances of `ccomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.19314205738279.

The following 44 pairs of parts of speech are connected with `ccomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (759; 53% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (143; 10% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (108; 8% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (82; 6% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (67; 5% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (44; 3% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (41; 3% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (39; 3% instances), [nl-pos/SCONJ]()-[nl-pos/VERB]() (25; 2% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (15; 1% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (11; 1% instances), [nl-pos/ADP]()-[nl-pos/VERB]() (9; 1% instances), [nl-pos/X]()-[nl-pos/VERB]() (9; 1% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (8; 1% instances), [nl-pos/ADV]()-[nl-pos/ADJ]() (7; 0% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (6; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (6; 0% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (5; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (4; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADJ]() (4; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (4; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (3; 0% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/X]() (3; 0% instances), [nl-pos/DET]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/VERB]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/X]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 13 ccomp	color:blue
1	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	ben	ben	AUX	V|hulpofkopp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	nu	nu	ADV	Adv|gew|aanw	PronType=Dem	5	advmod	_	_
4	zo	zo	ADV	Adv|gew|aanw	PronType=Dem	5	advmod	_	_
5	ver	ver	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
6	dat	dat	SCONJ	Conj|onder|metfin	_	8	mark	_	_
7	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
8	weet	weet	VERB	V|trans|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Subcat=Tran|Tense=Pres|VerbForm=Fin	4	advcl	_	_
9	dat	dat	SCONJ	Conj|onder|metfin	_	13	mark	_	_
10	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj	_	_
11	van	van	ADP	Prep|voor	AdpType=Prep	12	case	_	_
12	iedereen	iedereen	PRON	Pron|onbep|neut|zelfst	PronType=Ind	14	obj	_	_
13	kan	kan	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	8	ccomp	_	_
14	winnen	win	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	13	xcomp	_	SpaceAfter=No
15	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_
16	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 ccomp	color:blue
1	weer	weer	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	3	advmod	_	_
2	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	3	det	_	_
3	keer	keer	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
4	dat	dat	PRON	Pron|betr|neut|zelfst	PronType=Rel	8	obj	_	_
5	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
6	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	8	obj	_	_
7	erover	erover	ADV	Adv|pron|onbep	PronType=Ind	8	obj	_	_
8	hebben	heb	VERB	V|trans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Pres|VerbForm=Fin	3	ccomp	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 ccomp	color:blue
1	Met	met	ADP	Prep|voor	AdpType=Prep	2	case	_	_
2	Shinji	Shinji	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	11	advmod	_	MWE=Shinji_Ono|MWEPOS=X
3	Ono	Ono	PROPN	PROPN	_	2	flat	_	_
4	lijkt	lijk	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
5	Feyenoord	Feyenoord	PROPN	N|eigen|ev|neut	Number=Sing	11	nsubj	_	_
6	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	8	det	_	_
7	goede	goed	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	8	amod	_	_
8	slag	slag	NOUN	N|soort|ev|neut	Number=Sing	11	obj	_	_
9	te	te	ADP	Prep|voorinf	AdpType=Prep|PartType=Inf	11	mark	_	_
10	hebben	heb	AUX	V|hulp|inf	VerbForm=Inf	11	aux	_	_
11	geslagen	sla	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	4	ccomp	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

292 nodes (0%) are attached to their parents as `ccomp`.

281 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.08219178082192.

The following 12 pairs of parts of speech are connected with `ccomp`: [nl-pos/VERB]()-[nl-pos/VERB]() (226; 77% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (17; 6% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (16; 5% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (14; 5% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (7; 2% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (4; 1% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (3; 1% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Men	men	PRON	_	Case=Nom|Person=3|PronType=Prs	2	nsubj	_	_
2	probeert	proberen	VERB	_	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ook	ook	ADV	_	_	2	advmod	_	_
4	niet	niet	ADV	_	_	2	advmod	_	_
5	te	te	ADP	_	_	6	mark	_	_
6	baren	baren	VERB	_	VerbForm=Inf	2	ccomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 ccomp	color:blue
1	De	de	DET	_	Definite=Def	2	det	_	_
2	koning	koning	NOUN	_	Gender=Com|Number=Sing	3	nsubj	_	_
3	koos	kiezen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
4	ervoor	ervoor	ADV	_	_	3	obl	_	_
5	om	om	ADP	_	_	12	mark	_	_
6	de	de	DET	_	Definite=Def	7	det	_	_
7	hofhouding	hofhouding	NOUN	_	Gender=Com|Number=Sing	12	obj	_	_
8	van	van	ADP	_	_	9	case	_	_
9	Boudewijn	Boudewijn	PROPN	_	Gender=Com|Number=Sing	7	nmod	_	_
10	over	over	ADP	_	_	12	compound:prt	_	_
11	te	te	ADP	_	_	12	mark	_	_
12	nemen	nemen	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Sommigen	sommig	PRON	_	PronType=Ind	2	nsubj	_	_
2	menen	menen	VERB	_	Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	dat	dat	SCONJ	_	_	5	mark	_	_
4	Ensor	Ensor	PROPN	_	Gender=Com|Number=Sing	5	nsubj	_	_
5	groter	groot	ADJ	_	Degree=Cmp	2	ccomp	_	_
6	was	zijn	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
7	als	als	ADP	_	_	8	mark	_	_
8	etser	etser	NOUN	_	Gender=Com|Number=Sing	5	advcl	_	_
9	dan	dan	SCONJ	_	_	11	mark	_	_
10	als	als	ADP	_	_	11	mark	_	_
11	schilder	schilder	NOUN	_	Gender=Com|Number=Sing	5	advcl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


