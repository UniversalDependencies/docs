

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [det]().

540 nodes (0%) are attached to their parents as `det:nummod`.

529 instances of `det:nummod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28333333333333.

The following 8 pairs of parts of speech are connected with `det:nummod`: [nl-pos/NOUN]()-[nl-pos/DET]() (512; 95% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (9; 2% instances), [nl-pos/PRON]()-[nl-pos/DET]() (7; 1% instances), [nl-pos/VERB]()-[nl-pos/DET]() (7; 1% instances), [nl-pos/ADV]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/NUM]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:nummod	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_
2	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	4	det	_	_
3	meeste	meest	DET	Num	Case=Nom|Degree=Sup|NumType=Card|PronType=Ind	4	det:nummod	_	_
4	homo's	homo	NOUN	N|soort|mv|neut	Number=Plur	5	nsubj	_	_
5	hebben	heb	VERB	V|trans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
6	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	8	dobj	_	_
7	wel	wel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	gehad	heb	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	5	aux	_	_
9	met	met	ADP	Prep|voor	AdpType=Prep	11	case	_	_
10	dat	dat	PRON	Pron|aanw|neut|attr	PronType=Dem	11	nmod	_	_
11	hedonisme	hedonisme	NOUN	N|soort|ev|neut	Number=Sing	8	nmod	_	_
12	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det:nummod	color:blue
1	Hoeveel	hoeveel	DET	Num|hoofd|onbep|attr|stell|onverv	Degree=Pos|NumType=Card|PronType=Ind	2	det:nummod	_	_
2	doden	dood	ADJ	Adj|zelfst|stell|vervmv	Degree=Pos|Number=Plur	3	nsubj	_	_
3	vielen	val	VERB	V|intrans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
4	er	er	ADV	Adv|gew|er	AdvType=Ex	3	advmod	_	_
5	in	in	ADP	Prep|voor	AdpType=Prep	7	case	_	_
6	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	7	det	_	_
7	rechtbank	rechtbank	NOUN	N|soort|ev|neut	Number=Sing	3	nmod	_	_
8	van	van	ADP	Prep|voor	AdpType=Prep	9	case	_	_
9	Euskirchen	Euskirchen	PROPN	N|eigen|ev|neut	Number=Sing	7	nmod	_	_
10	?	?	PUNCT	Punc|vraag	PunctType=Qest	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:nummod	color:blue
1	Hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	heeft	heb	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
3	veel	veel	DET	Num|hoofd|onbep|attr|stell|onverv	Degree=Pos|NumType=Card|PronType=Ind	4	det:nummod	_	_
4	meer	meer	PRON	Num	Degree=Cmp|NumType=Card|PronType=Ind	2	dobj	_	_

~~~


