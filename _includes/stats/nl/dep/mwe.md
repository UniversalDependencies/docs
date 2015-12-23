

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

90 nodes (0%) are attached to their parents as `mwe`.

90 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.68888888888889.

The following 4 pairs of parts of speech are connected with `mwe`: [nl-pos/ADP]()-[nl-pos/ADP]() (51; 57% instances), [nl-pos/ADP]()-[nl-pos/ADV]() (35; 39% instances), [nl-pos/ADP]()-[nl-pos/X]() (2; 2% instances), [nl-pos/ADV]()-[nl-pos/ADP]() (2; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 mwe	color:blue
1	tot	tot	ADP	Prep|voor	AdpType=Prep	2	case	_	_
2	nu	nu	ADV	Adv|gew|aanw	PronType=Dem	0	root	_	_
3	toe	toe	ADP	Prep|comb	AdpType=Circ	1	mwe	_	_
4	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 mwe	color:blue
1	Dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	9	dobj	_	_
2	hebben	heb	VERB	V|hulp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	we	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
4	tot	tot	ADP	Prep|voor	AdpType=Prep	5	case	_	_
5	nu	nu	ADV	Adv|gew|aanw	PronType=Dem	9	advmod	_	_
6	toe	toe	ADV	Adv|deeladv	PartType=Vbp	4	mwe	_	_
7	te	te	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	weinig	weinig	PRON	Num	Degree=Pos|NumType=Card|PronType=Ind	9	advmod	_	_
9	gedaan	doe	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	2	aux	_	_
10	en	en	CONJ	Conj|neven	_	2	cc	_	_
11	dat	dat	PRON	Pron|aanw|neut|zelfst	PronType=Dem	13	nsubj	_	_
12	moet	moet	VERB	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	13	cop	_	_
13	beter	goed	ADJ	Adj|attr|vergr|onverv	Degree=Cmp	2	conj	_	_
14	.	.	PUNCT	Punc|punt	PunctType=Peri	2	punct	_	_
15	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	Binding	binding	NOUN	N|soort|ev|neut	Number=Sing	12	nsubj	_	_
2	aan	aan	ADP	Prep|voor	AdpType=Prep	8	cc	_	_
3	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	4	det	_	_
4	belijdenisgeschriften	geschrift	NOUN	N|soort|mv|neut	Number=Plur	8	nmod	_	_
5	,	,	PUNCT	Punc|komma	PunctType=Comm	8	punct	_	_
6	ook	ook	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	case	_	_
7	aan	aan	ADP	Prep|voor	AdpType=Prep	6	mwe	_	_
8	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	1	det	_	_
9	eventuele	eventueel	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	8	amod	_	_
10	nieuwe	nieuw	ADJ	Adj|attr|stell|vervneut	Case=Nom|Degree=Pos	8	amod	_	_
11	belijdenis	belijdenis	NOUN	N|soort|ev|neut	Number=Sing	8	case	_	_
12	wordt	word	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
13	door	door	ADP	Prep|voor	AdpType=Prep	15	case	_	_
14	verschillende	verschillend	PRON	Pron|onbep|neut|attr	PronType=Ind	15	nmod	_	_
15	personen	persoon	NOUN	N|soort|mv|neut	Number=Plur	17	nmod	_	_
16	gezien	zie	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	17	cop	_	_
17	als	als	SCONJ	Conj|onder|metfin	_	12	aux	_	_
18	ondenkbaar	ondenkbaar	ADJ	Adj|attr|stell|onverv	Degree=Pos	17	dobj	_	_
19	en	en	CONJ	Conj|neven	_	18	cc	_	_
20	onmogelijk	onmogelijk	ADJ	Adj|attr|stell|onverv	Degree=Pos	18	conj	_	_
21	in	in	ADP	Prep|voor	AdpType=Prep	23	case	_	_
22	deze	deze	PRON	Pron|aanw|neut|attr	PronType=Dem	23	nmod	_	_
23	tijd	tijd	NOUN	N|soort|ev|neut	Number=Sing	18	nmod	_	_
24	.	.	PUNCT	Punc|punt	PunctType=Peri	12	punct	_	_

~~~


