

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

5489 nodes (3%) are attached to their parents as `aux`.

4356 instances of `aux` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.82018582619785.

The following 21 pairs of parts of speech are connected with `aux`: [nl-pos/VERB]()-[nl-pos/AUX]() (4908; 89% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (225; 4% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (167; 3% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (87; 2% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (27; 0% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (11; 0% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (9; 0% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (9; 0% instances), [nl-pos/X]()-[nl-pos/AUX]() (9; 0% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (8; 0% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (7; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (6; 0% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (4; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (3; 0% instances), [nl-pos/DET]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 aux	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	SpaceAfter=No
2	Mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
3	basisniveau	basis_niveau	NOUN	N|soort|ev|neut	Number=Sing	7	nsubj	_	_
4	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	flink	flink	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	7	obl	_	_
6	omhoog	omhoog	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	advmod	_	_
7	gegaan	ga	VERB	V|intrans|verldw|onverv	Subcat=Intr|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	7	punct	_	SpaceAfter=No
9	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
1	Nee	nee	INTJ	Int	_	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Punc|komma	PunctType=Comm	1	punct	_	_
3	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	6	nsubj	_	_
4	waren	ben	AUX	V|hulpofkopp|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	6	aux	_	_
5	geen	geen	PRON	Pron|onbep|neut|attr	PronType=Ind	6	nmod	_	_
6	zenuwen	zenuw	NOUN	N|soort|mv|neut	Number=Plur	1	parataxis	_	_
7	geweest	ben	AUX	V|hulpofkopp|verldw|onverv	Tense=Past|VerbForm=Part	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	We	we	PRON	Pron|per|1|mv|nom	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
2	hebben	heb	AUX	V|hulp|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	de	de	DET	Art|bep|zijdofmv|neut	Definite=Def|PronType=Art	4	det	_	_
4	koers	koers	NOUN	N|soort|ev|neut	Number=Sing	5	obj	_	_
5	hard	hard	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	0	root	_	_
6	gemaakt	maak	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	5	cop	_	SpaceAfter=No
7	,	,	PUNCT	Punc|komma	PunctType=Comm	5	punct	_	_
8	maar	maar	CCONJ	Conj|neven	_	10	cc	_	_
9	niet	niet	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	10	advmod	_	_
10	hard	hard	ADJ	Adj|attr|stell|onverv	Degree=Pos	5	conj	_	_
11	genoeg	genoeg	PRON	Pron|onbep|neut|attr	PronType=Ind	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_
13	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

594 nodes (1%) are attached to their parents as `aux`.

516 instances of `aux` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.68013468013468.

The following 7 pairs of parts of speech are connected with `aux`: [nl-pos/VERB]()-[nl-pos/AUX]() (539; 91% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (29; 5% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (18; 3% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (3; 1% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	Tussen	tussen	ADP	_	_	3	case	_	_
2	de	de	DET	_	Definite=Def	3	det	_	_
3	profeten	profeet	NOUN	_	Number=Plur	8	obl	_	_
4	zijn	zijn	AUX	_	Number=Plur|Tense=Pres|VerbForm=Fin	8	aux	_	_
5	twee	twee	NUM	_	_	6	nummod	_	_
6	sibillen	sibille	NOUN	_	Number=Plur	8	nsubj	_	_
7	te	te	ADP	_	_	8	mark	_	_
8	zien	zien	VERB	_	VerbForm=Inf	0	root	_	SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Intussen	intussen	ADV	_	_	8	advmod	_	_
2	zijn	zijn	AUX	_	Number=Plur|Tense=Pres|VerbForm=Fin	8	aux	_	_
3	Edgard	Edgard	PROPN	_	_	8	nsubj	_	_
4	Tytgat	Tytgat	PROPN	_	_	3	flat:name	_	_
5	en	en	CCONJ	_	_	3	cc	_	_
6	Willem	Willem	PROPN	_	_	3	conj	_	_
7	Paerels	Paerels	PROPN	_	_	6	flat:name	_	_
8	vrienden	vriend	NOUN	_	Number=Plur	0	root	_	_
9	geworden	worden	AUX	_	VerbForm=Part	8	cop	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	5	nsubj	_	_
2	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	65	65	NUM	_	_	4	nummod	_	_
4	jaar	jaar	NOUN	_	Gender=Neut|Number=Sing	5	obl	_	_
5	oud	oud	ADJ	_	Degree=Pos	0	root	_	_
6	geworden	worden	AUX	_	VerbForm=Part	5	cop	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


