

--------------------------------------------------------------------------------

## Treebank Statistics

This relation is universal.

132 nodes (0%) are attached to their parents as `compound`.

104 instances of `compound` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3030303030303.

The following 2 pairs of parts of speech are connected with `compound`: [pt-pos/NUM]()-[pt-pos/NUM]() (130; 98% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (2; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 compound	color:blue
1	Lisboa	Lisboa	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	,	,	PUNCT	punc	_	1	punct	_	_
3	18	18	NUM	num|<card>|M|S/P	Gender=Masc|NumType=Card	1	nummod	_	_
4	de	de	ADP	prp	AdpType=Prep	5	case	_	_
5	Fevereiro	fevereiro	NOUN	n|<prop>|M|S	Gender=Masc|Number=Sing	3	nmod	_	_
6	de	de	ADP	prp	AdpType=Prep	7	case	_	_
7	1992	1992	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	3	compound	_	_
8	.	.	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 15 compound	color:blue
1	O	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	Benfica	Benfica	PROPN	prop|M|S	Gender=Masc|Number=Sing	4	nsubj	_	_
3	já	já	ADV	adv	_	4	advmod	_	_
4	conta	contar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	,	,	PUNCT	punc	_	4	punct	_	_
6	em	em	ADP	prp|<sam->	AdpType=Prep	8	case	_	_
7	este	este	DET	pron-det|<-sam>|<dem>|M|S	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	momento	momento	NOUN	n|M|S	Gender=Masc|Number=Sing	4	nmod	_	_
9	,	,	PUNCT	punc	_	4	punct	_	_
10	com	com	ADP	prp	AdpType=Prep	13	case	_	_
11	setenta	setenta	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	12	compound	_	_
12	mil	mil	NOUN	n|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	13	nmod	_	_
13	sócios	sócio	NOUN	n|M|P	Gender=Masc|Number=Plur	4	dobj	_	_
14	e	e	CONJ	conj-c|<co-prparg>	_	13	cc	_	_
15	sete	sete	NUM	num|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	16	compound	_	_
16	mil	mil	NOUN	n|<card>|M|P	Gender=Masc|Number=Plur|NumType=Card	17	nmod	_	_
17	praticantes	praticante	NOUN	n|M/F|P	Number=Plur	13	conj	_	_
18	.	.	PUNCT	punc	_	4	punct	_	_

~~~


