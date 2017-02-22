

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch)

This relation is universal.

3623 nodes (2%) are attached to their parents as `cop`.

2356 instances of `cop` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.68975986751311.

The following 44 pairs of parts of speech are connected with `cop`: [nl-pos/ADJ]()-[nl-pos/AUX]() (1495; 41% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (1351; 37% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (267; 7% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (82; 2% instances), [nl-pos/X]()-[nl-pos/AUX]() (81; 2% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (65; 2% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (62; 2% instances), [nl-pos/DET]()-[nl-pos/AUX]() (36; 1% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (31; 1% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (28; 1% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (25; 1% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (15; 0% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (13; 0% instances), [nl-pos/NOUN]()-[nl-pos/PRON]() (10; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (8; 0% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (7; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADP]() (5; 0% instances), [nl-pos/VERB]()-[nl-pos/NOUN]() (5; 0% instances), [nl-pos/ADJ]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (3; 0% instances), [nl-pos/ADJ]()-[nl-pos/ADJ]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (2; 0% instances), [nl-pos/ADV]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADV]() (2; 0% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/ADP]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/ADV]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NUM]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/PRON]()-[nl-pos/NUM]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/PROPN]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/SCONJ]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADJ]() (1; 0% instances), [nl-pos/X]()-[nl-pos/ADV]() (1; 0% instances), [nl-pos/X]()-[nl-pos/NOUN]() (1; 0% instances), [nl-pos/X]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/X]()-[nl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 cop	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	SpaceAfter=No
2	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	wist	weet	VERB	V|trans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Tran|Tense=Past|VerbForm=Fin	0	root	_	_
4	dat	dat	SCONJ	Conj|onder|metfin	_	10	mark	_	_
5	mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	_
6	helft	helft	NOUN	N|soort|ev|neut	Number=Sing	10	nsubj	_	_
7	van	van	ADP	Prep|voor	AdpType=Prep	9	case	_	_
8	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	9	det	_	_
9	schema	schema	NOUN	N|soort|ev|neut	Number=Sing	6	nmod	_	_
10	open	open	ADJ	Adj|attr|stell|onverv	Degree=Pos	3	ccomp	_	_
11	ligt	lig	AUX	V|intrans|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Subcat=Intr|Tense=Pres|VerbForm=Fin	10	cop	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	ben	ben	AUX	V|hulpofkopp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	nogal	nogal	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	5	advmod	_	_
4	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	5	det	_	_
5	twijfelaar	twijfelaar	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_
7	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 cop	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	9	punct	_	SpaceAfter=No
2	Op	op	ADP	Prep|voor	AdpType=Prep	4	case	_	_
3	het	het	DET	Art|bep|onzijd|neut	Definite=Def|Gender=Neut|PronType=Art	4	det	_	_
4	voorterrein	voor_terrein	NOUN	N|soort|ev|neut	Number=Sing	9	obl	_	_
5	ging	ga	AUX	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	9	cop	_	_
6	het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	9	nsubj	_	_
7	nog	nog	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
8	heel	heel	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	9	advmod	_	_
9	overtuigend	overtuigend	VERB	V|intrans|tegdw|onverv	Subcat=Intr|Tense=Pres|VerbForm=Part	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punc|punt	PunctType=Peri	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is universal.

1230 nodes (1%) are attached to their parents as `cop`.

921 instances of `cop` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.9130081300813.

The following 12 pairs of parts of speech are connected with `cop`: [nl-pos/NOUN]()-[nl-pos/AUX]() (614; 50% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (340; 28% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (93; 8% instances), [nl-pos/VERB]()-[nl-pos/AUX]() (73; 6% instances), [nl-pos/NUM]()-[nl-pos/AUX]() (55; 4% instances), [nl-pos/ADP]()-[nl-pos/AUX]() (15; 1% instances), [nl-pos/PRON]()-[nl-pos/AUX]() (12; 1% instances), [nl-pos/ADV]()-[nl-pos/AUX]() (10; 1% instances), [nl-pos/SCONJ]()-[nl-pos/AUX]() (6; 0% instances), [nl-pos/SYM]()-[nl-pos/AUX]() (5; 0% instances), [nl-pos/X]()-[nl-pos/AUX]() (4; 0% instances), [nl-pos/DET]()-[nl-pos/AUX]() (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Anne	Anne	PROPN	_	_	5	nsubj	_	_
2	Demelenne	Demelenne	PROPN	_	_	1	flat:name	_	_
3	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	algemeen	algemeen	ADJ	_	Degree=Pos	5	amod	_	_
5	secretaris	secretaris	NOUN	_	Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Bovendien	bovendien	ADV	_	_	5	advmod	_	_
2	waren	zijn	AUX	_	Number=Plur|Tense=Past|VerbForm=Fin	5	cop	_	_
3	de	de	DET	_	Definite=Def	4	det	_	_
4	flanken	flank	NOUN	_	Number=Plur	5	nsubj	_	_
5	ongedekt	ongedekt	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Een	één	NUM	_	_	6	nsubj	_	_
2	van	van	ADP	_	_	4	case	_	_
3	zijn	zijn	DET	_	_	4	det	_	_
4	medeleerlingen	medeleerling	NOUN	_	Number=Plur	1	nmod	_	_
5	is	zijn	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	Achiel	Achiel	PROPN	_	_	0	root	_	_
7	Van	Van	PROPN	_	_	6	flat:name	_	_
8	Sassenbroeck	Sassenbroeck	PROPN	_	_	6	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


