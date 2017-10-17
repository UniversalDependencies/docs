

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

511 nodes (0%) are attached to their parents as `csubj`.

339 instances of `csubj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.62426614481409.

The following 24 pairs of parts of speech are connected with `csubj`: [nl-pos/VERB]()-[nl-pos/VERB]() (186; 36% instances), [nl-pos/ADJ]()-[nl-pos/VERB]() (128; 25% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (89; 17% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (30; 6% instances), [nl-pos/ADV]()-[nl-pos/VERB]() (11; 2% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (10; 2% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (8; 2% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (8; 2% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (7; 1% instances), [nl-pos/PRON]()-[nl-pos/VERB]() (5; 1% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (4; 1% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (4; 1% instances), [nl-pos/DET]()-[nl-pos/VERB]() (3; 1% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (3; 1% instances), [nl-pos/X]()-[nl-pos/VERB]() (3; 1% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/DET]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	SpaceAfter=No
2	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	3	nsubj	_	_
3	duurde	duur	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
4	lang	lang	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	3	obl	_	_
5	voordat	voordat	SCONJ	Conj|onder|metfin	_	10	mark	_	_
6	ze	ze	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	over	over	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
9	heen	heen	ADP	Prep|comb	AdpType=Circ	7	fixed	_	_
10	kwamen	kom	VERB	V|intrans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Past|VerbForm=Fin	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	SpaceAfter=No
12	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Boogerd	Boogerd	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	3	csubj	_	_
2	werd	word	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	cop	_	_
3	derde	derde	ADJ	Num|rang|bep|zelfst|onverv	Definite=Def|NumType=Ord	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc|komma	PunctType=Comm	6	punct	_	_
5	Kemna	Kemna	PROPN	N|eigen|ev|neut	Number=Sing	6	cop	_	_
6	tweede	tweede	ADJ	Num|rang|bep|zelfst|onverv	Definite=Def|NumType=Ord	3	conj	_	SpaceAfter=No
7	,	,	PUNCT	Punc|komma	PunctType=Comm	11	punct	_	_
8	maar	maar	CCONJ	Conj|neven	_	11	cc	_	_
9	Koerts	Koerts	PROPN	N|eigen|ev|neut	Number=Sing	11	nsubj	_	_
10	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
11	ongenaakbaar	ongenaakbaar	ADJ	Adj|attr|stell|onverv	Degree=Pos	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj	color:blue
1	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	5	nsubj	_	_
2	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	5	det	_	_
4	publiek	publiek	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
5	geheim	geheim	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
6	dat	dat	SCONJ	Conj|onder|metfin	_	11	mark	_	_
7	er	er	ADV	Adv|gew|er	AdvType=Ex	11	advmod	_	_
8	in	in	ADP	Prep|voor	AdpType=Prep	9	case	_	_
9	Limburg	Limburg	PROPN	N|eigen|ev|neut	Number=Sing	11	obl	_	_
10	atoomwapens	atoomwapen	NOUN	N|soort|mv|neut	Number=Plur	11	nsubj	_	_
11	liggen	lig	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	5	csubj	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

5 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.8.

The following 3 pairs of parts of speech are connected with `csubj`: [nl-pos/ADJ]()-[nl-pos/VERB]() (2; 40% instances), [nl-pos/NOUN]()-[nl-pos/VERB]() (2; 40% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 20% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	Wanneer	wanneer	ADV	_	_	6	advmod	_	_
2	ze	ze	PRON	_	Person=3|PronType=Prs	6	nsubj	_	_
3	Leopold	Leopold	PROPN	_	_	6	obj	_	_
4	III	III	PROPN	_	_	3	flat:name	_	_
5	heeft	hebben	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	ontmoet	ontmoeten	VERB	_	VerbForm=Part	10	csubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	niet	niet	ADV	_	_	10	advmod	_	_
10	bekend	bekend	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 19 csubj	color:blue
1	In	in	ADP	_	_	3	case	_	_
2	de	de	DET	_	Definite=Def	3	det	_	_
3	loop	loop	NOUN	_	Gender=Com|Number=Sing	11	obl	_	_
4	der	de	DET	_	Definite=Def	5	det	_	_
5	jaren	jaar	NOUN	_	Number=Plur	3	nmod	_	_
6	werd	worden	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
7	het	het	PRON	_	Person=3|PronType=Prs	11	expl	_	_
8	in	in	ADP	_	_	9	case	_	_
9	Vlaanderen	Vlaanderen	PROPN	_	Gender=Neut|Number=Sing	11	obl	_	_
10	een	een	DET	_	Definite=Ind	11	det	_	_
11	traditie	traditie	NOUN	_	Gender=Com|Number=Sing	0	root	_	_
12	de	de	DET	_	Definite=Def	13	det	_	_
13	krant	krant	NOUN	_	Gender=Com|Number=Sing	19	obj	_	_
14	van	van	ADP	_	_	15	case	_	_
15	achter	achter	ADP	_	_	19	obl	_	_
16	naar	naar	ADP	_	_	17	case	_	_
17	voren	voren	ADV	_	_	19	obl	_	_
18	te	te	ADP	_	_	19	mark	_	_
19	lezen	lezen	VERB	_	VerbForm=Inf	11	csubj	_	SpaceAfter=No
20	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 csubj	color:blue
1	Wonder	wonder	NOUN	_	Gender=Neut|Number=Sing	4	advmod	_	_
2	boven	boven	ADP	_	_	3	case	_	_
3	wonder	wonder	NOUN	_	Gender=Neut|Number=Sing	1	obl	_	_
4	lukte	lukken	VERB	_	Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
5	het	het	PRON	_	Person=3|PronType=Prs	4	expl	_	_
6	de	de	DET	_	Definite=Def	8	det	_	_
7	oude	oud	ADJ	_	Degree=Pos	8	amod	_	_
8	garde	garde	NOUN	_	Gender=Com|Number=Sing	4	iobj	_	_
9	het	het	DET	_	Definite=Def	10	det	_	_
10	tij	tij	NOUN	_	Gender=Neut|Number=Sing	12	obj	_	_
11	te	te	ADP	_	_	12	mark	_	_
12	keren	keren	VERB	_	VerbForm=Inf	4	csubj	_	_
13	en	en	CCONJ	_	_	4	cc	_	_
14	de	de	DET	_	Definite=Def	15	det	_	_
15	Pruisen	Pruis	PROPN	_	Number=Plur	18	nsubj:pass	_	_
16	werden	worden	AUX	_	Number=Plur|Tense=Past|VerbForm=Fin	18	aux:pass	_	_
17	voorlopig	voorlopig	ADJ	_	Degree=Pos	18	advmod	_	_
18	teruggedrongen	terugdringen	VERB	_	VerbForm=Part	4	conj	_	SpaceAfter=No
19	.	.	PUNCT	_	_	4	punct	_	_

~~~


