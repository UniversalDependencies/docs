

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Dutch-LassySmall)

This relation is a language-specific subtype of [aux]().

887 nodes (1%) are attached to their parents as `aux:pass`.

764 instances of `aux:pass` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.69334836527621.

The following 4 pairs of parts of speech are connected with `aux:pass`: [nl-pos/VERB]()-[nl-pos/AUX]() (864; 97% instances), [nl-pos/ADJ]()-[nl-pos/AUX]() (19; 2% instances), [nl-pos/NOUN]()-[nl-pos/AUX]() (3; 0% instances), [nl-pos/PROPN]()-[nl-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux:pass	color:blue
1	Hier	hier	ADV	_	_	7	advmod	_	_
2	wordt	worden	AUX	_	Number=Sing|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
3	zijn	zijn	DET	_	_	5	det	_	_
4	eerste	één	NUM	_	_	5	nummod	_	_
5	zoon	zoon	NOUN	_	Gender=Com|Number=Sing	7	nsubj:pass	_	_
6	John	John	PROPN	_	Gender=Com|Number=Sing	5	appos	_	_
7	geboren	geboren	ADJ	_	Degree=Pos	0	root	_	SpaceAfter=No
8	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	In	in	ADP	_	_	2	case	_	_
2	1815	1815	NUM	_	_	6	obl	_	_
3	werd	worden	AUX	_	Number=Sing|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	Napoleon	Napoleon	PROPN	_	Gender=Com|Number=Sing	6	nsubj:pass	_	_
5	definitief	definitief	ADJ	_	Degree=Pos	6	advmod	_	_
6	verslagen	verslag	NOUN	_	Number=Plur	0	root	_	_
7	in	in	ADP	_	_	10	case	_	_
8	het	het	DET	_	Definite=Def	10	det	_	_
9	huidige	huidig	ADJ	_	Degree=Pos	10	amod	_	_
10	België	België	PROPN	_	Gender=Neut|Number=Sing	6	obl	_	_
11	nabij	nabij	ADP	_	_	13	case	_	_
12	het	het	DET	_	Definite=Def	13	det	_	_
13	plaatsje	plaats	NOUN	_	Gender=Neut|Number=Sing	10	nmod	_	_
14	Waterloo	Waterloo	PROPN	_	Gender=Neut|Number=Sing	13	appos	_	_
15	in	in	ADP	_	_	16	case	_	_
16	Waals-Brabant	Waals-Brabant	PROPN	_	Gender=Neut|Number=Sing	6	obl	_	SpaceAfter=No
17	.	.	PUNCT	_	_	6	punct	_	_

~~~


