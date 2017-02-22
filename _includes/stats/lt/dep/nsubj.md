

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

366 nodes (7%) are attached to their parents as `nsubj`.

266 instances of `nsubj` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03005464480874.

The following 25 pairs of parts of speech are connected with `nsubj`: [lt-pos/VERB]()-[lt-pos/NOUN]() (149; 41% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (77; 21% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (36; 10% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (23; 6% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (20; 5% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (12; 3% instances), [lt-pos/ADJ]()-[lt-pos/PRON]() (9; 2% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (5; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (4; 1% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (3; 1% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (3; 1% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (3; 1% instances), [lt-pos/VERB]()-[lt-pos/DET]() (3; 1% instances), [lt-pos/ADJ]()-[lt-pos/PROPN]() (2; 1% instances), [lt-pos/ADV]()-[lt-pos/PRON]() (2; 1% instances), [lt-pos/AUX]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/NOUN]()-[lt-pos/DET]() (2; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (2; 1% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (2; 1% instances), [lt-pos/ADV]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nsubj	color:blue
1	Ko	kas	ADV	WRB	Degree=Pos	7	parataxis	_	what|_
2	gero	geras	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	fixed	_	good|_
3	,	,	PUNCT	PUNCT	_	1	punct	_	,|_
4	tas	tas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	6	det	_	those|_
5	grįžtamasis	grįžti	VERB	VBNL	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	6	amod	_	return|_
6	ryšys	ryšys	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	connection|_
7	veikia	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	operate|_
8	nuo	nuo	ADP	UH	_	10	case	_	since|_
9	1939	1939	ADJ	ORD	_	10	amod	_	1939|_
10	metų	metai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	7	obl	_	years|_
11	.	.	PUNCT	PUNCT	_	7	punct	_	.|_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 1 nsubj	color:blue
1	Kiti	kitas	PRON	WPA	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	other|_
2	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
3	kaip	kaip	SCONJ	UH	_	4	mark	_	how|_
4	žinoma	žinoti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	11	parataxis	_	of course|_
5	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
6	aiškios	aiškus	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	obviuos|_
7	tautinės	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	ethnic|_
8	sąmonės	sąmonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	consciousness|_
9	iš	iš	ADP	UH	_	10	case	_	from|_
10	vis	vis	ADV	RB	Degree=Pos	11	obl	_	still|_
11	neturėjo	turėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	have|_
12	.	.	PUNCT	PUNCT	_	11	punct	_	.|_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	Ką	kas	PRON	WDT	Case=Acc	5	obj	_	what|_
2	tas	tas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	3	det	_	that|_
3	Putinas	Putinas	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Putin|_
4	dar	dar	PART	UH	_	5	advmod	_	even|_
5	prasimanys	prasimanyti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=Yes|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	invention|SpaceAfter=No
6	“	“	PUNCT	PUNCT	_	5	punct	_	“|SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


