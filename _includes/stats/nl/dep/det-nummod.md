

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [det]().

410 nodes (0%) are attached to their parents as `det:nummod`.

395 instances of `det:nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37317073170732.

The following 6 pairs of parts of speech are connected with `det:nummod`: [nl-pos/NOUN]()-[nl-pos/DET]() (385; 94% instances), [nl-pos/PRON]()-[nl-pos/DET]() (8; 2% instances), [nl-pos/VERB]()-[nl-pos/DET]() (8; 2% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (6; 1% instances), [nl-pos/ADV]()-[nl-pos/DET]() (2; 0% instances), [nl-pos/X]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:nummod	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	8	punct	_	_
2	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	4	det	_	_
3	meeste	meest	DET	Num	Case=Nom|Degree=Sup|NumType=Card|PronType=Ind	4	det:nummod	_	_
4	homo's	homo	NOUN	N|soort|mv|neut	Number=Plur	8	nsubj	_	_
5	hebben	heb	AUX	V|trans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Tran|Tense=Pres|VerbForm=Fin	8	aux	_	_
6	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	8	dobj	_	_
7	wel	wel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	8	advmod	_	_
8	gehad	heb	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	0	root	_	_
9	met	met	ADP	Prep|voor	AdpType=Prep	11	case	_	_
10	dat	dat	PRON	Pron|aanw|neut|attr	PronType=Dem	11	nmod	_	_
11	hedonisme	hedonisme	NOUN	N|soort|ev|neut	Number=Sing	8	nmod	_	_
12	.	.	PUNCT	Punc|punt	PunctType=Peri	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 det:nummod	color:blue
1	Hoeveel	hoeveel	DET	Num|hoofd|onbep|attr|stell|onverv	Degree=Pos|NumType=Card|PronType=Ind	6	det:nummod	_	_
2	transacties	transactie	NOUN	N|soort|mv|neut	Number=Plur	1	mark	_	_
3	hierdoor	hierdoor	ADV	Adv|pron|aanw	PronType=Dem	4	advmod	_	_
4	mislukten	misluk	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	1	xcomp	_	_
5	,	,	PUNCT	Punc|komma	PunctType=Comm	6	punct	_	_
6	weet	weet	VERB	V|trans|ott|2|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Interpay	Interpay	PROPN	N|eigen|ev|neut	Number=Sing	6	nsubj	_	_
8	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	6	neg	_	_
9	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

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


