

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

4633 nodes (2%) are attached to their parents as `aux`.

3217 instances of `aux` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.72890135981006.

The following 32 pairs of parts of speech are connected with `aux`: [nl-pos/VERB]()-[nl-pos/AUX]() (2316; 50% instances), [nl-pos/AUX]()-[nl-pos/AUX]() (1260; 27% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (475; 10% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (110; 2% instances), [nl-pos/AUX]()-[nl-pos/NOUN]() (101; 2% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (97; 2% instances), [nl-pos/AUX]()-[nl-pos/ADJ]() (72; 2% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (33; 1% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (23; 0% instances), [nl-pos/CONJ]()-[nl-pos/AUX]() (21; 0% instances), [nl-pos/AUX]()-[nl-pos/VERB]() (17; 0% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (16; 0% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (13; 0% instances), [nl-pos/X]()-[nl-pos/AUX]() (10; 0% instances), [nl-pos/AUX]()-[nl-pos/PROPN]() (9; 0% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (9; 0% instances), [nl-pos/AUX]()-[nl-pos/X]() (6; 0% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (5; 0% instances), [nl-pos/AUX]()-[nl-pos/PRON]() (5; 0% instances), [nl-pos/AUX]()-[nl-pos/SCONJ]() (5; 0% instances), [nl-pos/SYM]()-[nl-pos/AUX]() (5; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/AUX]()-[nl-pos/ADP]() (4; 0% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/AUX]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/AUX]()-[nl-pos/DET]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADP]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 aux	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 aux	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	_
2	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	3	nsubj	_	_
3	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	0	root	_	_
4	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	5	advmod	_	_
5	anders	anders	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	6	advmod	_	_
6	gelopen	loop	AUX	V|intrans|verldw|onverv	Subcat=Intr|Tense=Past|VerbForm=Part	3	aux	_	_
7	dan	dan	SCONJ	Conj|onder|metfin	_	9	mark	_	_
8	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	dacht	denk	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	5	advcl	_	_
10	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 aux	color:blue
1	shit	shit	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
2	,	,	PUNCT	Punc|komma	PunctType=Comm	1	punct	_	_
3	ben	ben	AUX	V|hulpofkopp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|VerbType=Aux,Cop	1	parataxis	_	_
4	ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	_
6	sleutels	sleutel	NOUN	N|soort|mv|neut	Number=Plur	7	dobj	_	_
7	vergeten	vergeet	AUX	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	1	aux	_	_
8	.	.	PUNCT	Punc|punt	PunctType=Peri	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

622 nodes (1%) are attached to their parents as `aux`.

541 instances of `aux` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.68006430868167.

The following 7 pairs of parts of speech are connected with `aux`: [nl-pos/VERB]()-[nl-pos/AUX]() (568; 91% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (29; 5% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (17; 3% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (3; 0% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	5	nsubj	_	_
2	zou	zullen	AUX	_	_	5	aux	_	_
3	drie	drie	NUM	_	_	4	nummod	_	_
4	jaar	jaar	NOUN	_	Gender=Neut|Number=Sing	5	nmod	_	_
5	wegblijven	wegblijven	VERB	_	VerbForm=Inf	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Intussen	intussen	ADV	_	_	8	advmod	_	_
2	zijn	zijn	AUX	_	_	8	aux	_	_
3	Edgard	Edgard	PROPN	_	_	8	nsubj	_	_
4	Tytgat	Tytgat	PROPN	_	_	3	name	_	_
5	en	en	CONJ	_	_	3	cc	_	_
6	Willem	Willem	PROPN	_	_	3	conj	_	_
7	Paerels	Paerels	PROPN	_	_	6	name	_	_
8	vrienden	vriend	NOUN	_	Number=Plur	0	root	_	_
9	geworden	worden	AUX	_	_	8	cop	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux	color:blue
1	Hij	hij	PRON	_	Case=Nom|Person=3|PronType=Prs	5	nsubj	_	_
2	is	zijn	AUX	_	_	5	aux	_	_
3	65	65	NUM	_	_	4	nummod	_	_
4	jaar	jaar	NOUN	_	Gender=Neut|Number=Sing	5	nmod	_	_
5	oud	oud	ADJ	_	Degree=Pos	0	root	_	_
6	geworden	worden	AUX	_	_	5	cop	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


