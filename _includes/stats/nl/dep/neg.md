

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

1123 nodes (1%) are attached to their parents as `neg`.

850 instances of `neg` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.33570792520036.

The following 16 pairs of parts of speech are connected with `neg`: [nl-pos/VERB]()-[nl-pos/ADV]() (612; 54% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (216; 19% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (147; 13% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (54; 5% instances), [nl-pos/PRON]()-[nl-pos/ADV]() (32; 3% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (30; 3% instances), [nl-pos/DET]()-[nl-pos/ADV]() (13; 1% instances), [nl-pos/X]()-[nl-pos/ADV]() (4; 0% instances), [nl-pos/ADP]()-[nl-pos/ADV]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (3; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/SCONJ]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 neg	color:blue
1	Maar	maar	CONJ	Conj|neven	_	0	root	_	_
2	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	3	det	_	_
3	bewindsvrouw	bewindsvrouw	NOUN	N|soort|ev|neut	Number=Sing	4	nsubj	_	_
4	wilde	wil	VERB	V|hulp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|VerbType=Mod	1	parataxis	_	_
5	daarop	daarop	ADV	Adv|pron|aanw	PronType=Dem	7	dobj	_	_
6	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	neg	_	_
7	wachten	wacht	VERB	V|intrans|inf	Subcat=Intr|VerbForm=Inf	4	xcomp	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 neg	color:blue
1	De	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	2	det	_	_
2	aanbieding	aanbieding	NOUN	N|soort|ev|neut	Number=Sing	7	nsubj	_	_
3	van	van	ADP	Prep|voor	AdpType=Prep	4	case	_	_
4	Parma	Parma	PROPN	N|eigen|ev|neut	Number=Sing	2	nmod	_	_
5	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	7	cop	_	_
6	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	advmod	_	_
7	mooi	mooi	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	_
8	,	,	PUNCT	Punc|komma	PunctType=Comm	7	punct	_	_
9	maar	maar	CONJ	Conj|neven	_	7	cc	_	_
10	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	12	neg	_	_
11	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	12	det	_	_
12	enige	enige	ADJ	Adj|zelfst|stell|vervneut	Case=Nom|Degree=Pos	7	conj	_	_
13	.	.	PUNCT	Punc|punt	PunctType=Peri	7	punct	_	_
14	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 neg	color:blue
1	Het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	2	det	_	_
2	resultaat	resultaat	NOUN	N|soort|ev|neut	Number=Sing	3	nsubj	_	_
3	zal	zal	VERB	V|hulp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Mod	0	root	_	_
4	overigens	overigens	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
5	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	neg	_	_
6	officieel	officieel	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	10	advmod	_	_
7	in	in	ADP	Prep|voor	AdpType=Prep	9	case	_	_
8	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	9	det	_	_
9	boeken	boek	NOUN	N|soort|mv|neut	Number=Plur	10	nmod	_	_
10	komen	kom	AUX	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	3	aux	_	_
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

150 nodes (0%) are attached to their parents as `neg`.

104 instances of `neg` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.08.

The following 8 pairs of parts of speech are connected with `neg`: [nl-pos/VERB]()-[nl-pos/ADV]() (95; 63% instances), [nl-pos/ADJ]()-[nl-pos/ADV]() (36; 24% instances), [nl-pos/ADV]()-[nl-pos/ADV]() (7; 5% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (5; 3% instances), [nl-pos/PRON]()-[nl-pos/ADV]() (4; 3% instances), [nl-pos/ADP]()-[nl-pos/ADV]() (1; 1% instances), [nl-pos/DET]()-[nl-pos/ADV]() (1; 1% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 neg	color:blue
1	«	«	PUNCT	_	_	4	punct	_	_
2	Maar	maar	CONJ	_	_	4	mark	_	_
3	doodslaan	doodslaan	VERB	_	VerbForm=Inf	4	dobj	_	_
4	deed	doen	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	4	nsubj	_	_
6	niet	niet	ADV	_	_	4	neg	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	want	want	CONJ	_	_	4	cc	_	_
9	tussen	tussen	ADP	_	_	10	case	_	_
10	droom	droom	NOUN	_	Gender=Com|Number=Sing	4	conj	_	_
11	en	en	CONJ	_	_	10	cc	_	_
12	daad	daad	NOUN	_	Gender=Com|Number=Sing	10	conj	_	_
13	»	»	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 neg	color:blue
1	Wanneer	wanneer	ADV	_	_	6	advmod	_	_
2	ze	ze	PRON	_	Person=3|PronType=Prs	6	nsubj	_	_
3	Leopold	Leopold	PROPN	_	_	6	dobj	_	_
4	III	III	PROPN	_	_	3	name	_	_
5	heeft	hebben	AUX	_	_	6	aux	_	_
6	ontmoet	ontmoeten	VERB	_	VerbForm=Part	10	csubj	_	_
7	,	,	PUNCT	_	_	10	punct	_	_
8	is	zijn	AUX	_	_	10	cop	_	_
9	niet	niet	ADV	_	_	10	neg	_	_
10	bekend	bekend	ADJ	_	Degree=Pos	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	't	het	PRON	_	Person=3|PronType=Prs	4	nsubj	_	_
2	Is	zijn	AUX	_	_	4	cop	_	_
3	niet	niet	ADV	_	_	4	neg	_	_
4	waar	waar	ADV	_	_	0	root	_	_
5	he	he	INTJ	_	_	4	parataxis	_	_
6	?	?	PUNCT	_	_	4	punct	_	_

~~~


