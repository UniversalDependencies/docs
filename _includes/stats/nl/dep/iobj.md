

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

34 nodes (0%) are attached to their parents as `iobj`.

24 instances of `iobj` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.08823529411765.

The following 7 pairs of parts of speech are connected with `iobj`: [nl-pos/VERB]()-[nl-pos/NOUN]() (16; 47% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (7; 21% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (5; 15% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (2; 6% instances), [nl-pos/AUX]()-[nl-pos/X]() (2; 6% instances), [nl-pos/AUX]()-[nl-pos/PROPN]() (1; 3% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 iobj	color:blue
1	Van	van	ADP	Prep|voor	AdpType=Prep	3	case	_	_
2	welk	welk	PRON	Pron|vrag|neut|zelfst	PronType=Int	3	nmod	_	_
3	metaal	metaal	NOUN	N|soort|ev|neut	Number=Sing	4	iobj	_	_
4	maakt	maak	VERB	V|trans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
5	men	men	PRON	Pron|onbep|neut|zelfst	PronType=Ind	4	nsubj	_	_
6	gloeidraden	draad	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	4	xcomp	_	_
7	voor	voor	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	lampen	lamp	NOUN	N|soort|mv|neut	Number=Plur	6	nmod	_	_
9	?	?	PUNCT	Punc|vraag	PunctType=Qest	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 2 iobj	color:blue
1	Kleinere	kleinere	ADJ	Adj|attr|vergr|vervneut	Case=Nom|Degree=Cmp	2	amod	_	_
2	bedrijven	bedrijf	NOUN	N|soort|mv|neut	Number=Plur	15	iobj	_	_
3	,	,	PUNCT	Punc|komma	PunctType=Comm	2	punct	_	_
4	die	die	PRON	Pron|betr|neut|zelfst	PronType=Rel	10	mark	_	_
5	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	neg	_	_
6	over	over	ADP	Prep|voor	AdpType=Prep	8	case	_	_
7	profesioneel	profesioneel	ADJ	Adj|attr|stell|onverv	Degree=Pos	8	amod	_	_
8	personeel	personeel	NOUN	N|soort|ev|neut	Number=Sing	10	dobj	_	_
9	daarvoor	daarvoor	ADV	Adv|pron|aanw	PronType=Dem	8	nmod	_	_
10	beschikken	beschik	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	2	acl	_	_
11	,	,	PUNCT	Punc|komma	PunctType=Comm	12	punct	_	_
12	willen	wil	VERB	V|hulp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
13	wij	wij	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
14	graag	graag	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	15	advmod	_	_
15	helpen	help	AUX	V|trans|inf	Subcat=Tran|VerbForm=Inf	12	aux	_	_
16	met	met	ADP	Prep|voor	AdpType=Prep	18	case	_	_
17	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	18	det	_	_
18	rendabel	rendabel	ADJ	Adj|attr|stell|onverv	Degree=Pos	15	xcomp	_	_
19	maken	maak	VERB	V|trans|inf|subst	Subcat=Tran|VerbForm=Inf	18	cop	_	_
20	van	van	ADP	Prep|voor	AdpType=Prep	22	case	_	_
21	hun	hun	PRON	Pron|bez|3|mv|neut|attr	Number=Plur|Person=3|Poss=Yes|PronType=Prs	22	nmod	_	_
22	ideeen	ideeën	NOUN	N|soort|mv|neut	Number=Plur	18	nmod	_	_
23	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	12	punct	_	_
24	.	.	PUNCT	Punc|punt	PunctType=Peri	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	geef	geef	VERB	V|trans|imp	Mood=Imp|Subcat=Tran|VerbForm=Fin	0	root	_	_
2	het	het	PRON	Pron|per|3|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	1	iobj	_	_
3	aan	aan	ADP	Prep|voor	AdpType=Prep	7	mark	_	_
4	wie	wie	PRON	Pron|betr|neut|zelfst	PronType=Rel	7	nsubj	_	_
5	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	6	dobj	_	_
6	verdiend	verdiend	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	7	aux	_	_
7	heeft	heb	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	1	ccomp	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


