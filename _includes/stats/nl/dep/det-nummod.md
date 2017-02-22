

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is a language-specific subtype of [det]().

388 nodes (0%) are attached to their parents as `det:nummod`.

375 instances of `det:nummod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35824742268041.

The following 7 pairs of parts of speech are connected with `det:nummod`: [nl-pos/NOUN]()-[nl-pos/DET]() (363; 94% instances), [nl-pos/VERB]()-[nl-pos/DET]() (8; 2% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (6; 2% instances), [nl-pos/PRON]()-[nl-pos/DET]() (5; 1% instances), [nl-pos/DET]()-[nl-pos/DET]() (3; 1% instances), [nl-pos/ADV]()-[nl-pos/DET]() (2; 1% instances), [nl-pos/X]()-[nl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 det:nummod	color:blue
1	Van	van	ADP	Prep|voor	AdpType=Prep	5	case	_	_
2	meer	meer	DET	Num|hoofd|onbep|attr|vergr|onverv	Degree=Cmp|NumType=Card|PronType=Ind	5	det:nummod	_	_
3	dan	dan	SCONJ	Conj|onder|metfin	_	4	mark	_	_
4	twee	twee	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	2	obl	_	_
5	grastoernooien	gras_toernooi	NOUN	N|soort|mv|neut	Number=Plur	11	obl	_	_
6	op	op	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	rij	rij	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
8	wordt	word	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	te	te	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	11	advmod	_	_
11	moe	moe	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	11	punct	_	_

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
4	mislukten	misluk	VERB	V|trans|inf	Subcat=Tran|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
5	,	,	PUNCT	Punc|komma	PunctType=Comm	6	punct	_	_
6	weet	weet	VERB	V|trans|ott|2|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Subcat=Tran|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Interpay	Interpay	PROPN	N|eigen|ev|neut	Number=Sing	6	nsubj	_	_
8	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	6	advmod	_	SpaceAfter=No
9	.	.	PUNCT	Punc|punt	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det:nummod	color:blue
1	Voor	voor	ADP	Prep|voor	AdpType=Prep	3	mark	_	_
2	hoeveel	hoeveel	DET	Num|hoofd|onbep|attr|stell|onverv	Degree=Pos|NumType=Card|PronType=Ind	3	det:nummod	_	_
3	doden	dood	ADJ	Adj|zelfst|stell|vervmv	Degree=Pos|Number=Plur	0	root	_	_
4	wordt	word	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
5	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	6	det	_	_
6	Rode	Rode	PROPN	N_N|eigen|ev|neut_eigen|ev|neut	_	8	obj	_	MWE=Rode_Khmer|MWEPOS=X
7	Khmer	Khmer	PROPN	PROPN	_	6	flat	_	_
8	verantwoordelijk	verantwoordelijk	ADJ	Adj|attr|stell|onverv	Degree=Pos	3	aux	_	_
9	gehouden	houd	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	4	mark	_	SpaceAfter=No
10	?	?	PUNCT	Punc|vraag	PunctType=Qest	3	punct	_	_

~~~


