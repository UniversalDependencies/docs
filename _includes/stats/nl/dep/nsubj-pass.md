

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is a language-specific subtype of [nsubj]().

662 nodes (1%) are attached to their parents as `nsubj:pass`.

662 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.79154078549849.

The following 16 pairs of parts of speech are connected with `nsubj:pass`: [nl-pos/VERB]()-[nl-pos/NOUN]() (421; 64% instances), [nl-pos/VERB]()-[nl-pos/PROPN]() (105; 16% instances), [nl-pos/VERB]()-[nl-pos/PRON]() (89; 13% instances), [nl-pos/VERB]()-[nl-pos/ADJ]() (13; 2% instances), [nl-pos/VERB]()-[nl-pos/VERB]() (7; 1% instances), [nl-pos/ADJ]()-[nl-pos/NOUN]() (6; 1% instances), [nl-pos/VERB]()-[nl-pos/DET]() (5; 1% instances), [nl-pos/ADJ]()-[nl-pos/PROPN]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/NUM]() (3; 0% instances), [nl-pos/VERB]()-[nl-pos/X]() (3; 0% instances), [nl-pos/NOUN]()-[nl-pos/NOUN]() (2; 0% instances), [nl-pos/ADJ]()-[nl-pos/PRON]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/SYM]() (1; 0% instances), [nl-pos/ADJ]()-[nl-pos/X]() (1; 0% instances), [nl-pos/NOUN]()-[nl-pos/PROPN]() (1; 0% instances), [nl-pos/VERB]()-[nl-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	De	de	DET	_	Definite=Def	2	det	_	_
2	poppen	pop	NOUN	_	Number=Plur	4	nsubj:pass	_	_
3	waren	zijn	AUX	_	Number=Plur|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
4	vervaardigd	vervaardigen	VERB	_	VerbForm=Part	0	root	_	_
5	door	door	ADP	_	_	7	case	_	_
6	het	het	DET	_	Definite=Def	7	det	_	_
7	atelier	atelier	NOUN	_	Gender=Neut|Number=Sing	4	obl	_	_
8	Creatuur	Creatuur	PROPN	_	Gender=Neut|Number=Sing	7	appos	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 nsubj:pass	color:blue
1	Julien	Julien	PROPN	_	_	7	nsubj:pass	_	_
2	Lahaut	Lahaut	PROPN	_	_	1	flat:name	_	_
3	werd	worden	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
4	een	een	DET	_	Definite=Ind	5	det	_	_
5	week	week	NOUN	_	Gender=Com|Number=Sing	6	obl	_	_
6	later	laat	ADJ	_	Degree=Cmp	7	advmod	_	_
7	vermoord	vermoorden	VERB	_	VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	Ook	ook	ADV	_	_	2	amod	_	_
2	deze	deze	PRON	_	PronType=Dem	5	nsubj:pass	_	_
3	waren	zijn	AUX	_	Number=Plur|Tense=Past|VerbForm=Fin	5	aux:pass	_	_
4	voornamelijk	voornamelijk	ADJ	_	Degree=Pos	5	advmod	_	_
5	bedoeld	bedoelen	VERB	_	VerbForm=Part	0	root	_	_
6	om	om	ADP	_	_	10	mark	_	_
7	de	de	DET	_	Definite=Def	8	det	_	_
8	omzet	omzet	NOUN	_	Gender=Com|Number=Sing	10	obj	_	_
9	te	te	ADP	_	_	10	mark	_	_
10	verhogen	verhogen	VERB	_	VerbForm=Inf	5	advcl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


