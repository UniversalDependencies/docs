

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

1141 nodes (1%) are attached to their parents as `compound`.

1037 instances of `compound` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.71428571428571.

The following 26 pairs of parts of speech are connected with `compound`: [pt-pos/NOUN]()-[pt-pos/NOUN]() (609; 53% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (197; 17% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (148; 13% instances), [pt-pos/DET]()-[pt-pos/PRON]() (56; 5% instances), [pt-pos/PRON]()-[pt-pos/DET]() (45; 4% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (21; 2% instances), [pt-pos/PRON]()-[pt-pos/SCONJ]() (13; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (8; 1% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (8; 1% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (7; 1% instances), [pt-pos/DET]()-[pt-pos/DET]() (5; 0% instances), [pt-pos/NUM]()-[pt-pos/CONJ]() (5; 0% instances), [pt-pos/NOUN]()-[pt-pos/PUNCT]() (3; 0% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	Paulo	Paulo	PROPN	prop|M|S	_	8	nsubj	_	MWE=Paulo_Pereira|MWEPOS=PROPN
2	Pereira	Pereira	PROPN	PROPN	_	1	name	_	_
3	,	,	PUNCT	punc	_	1	punct	_	_
4	vice-presidente	vice-presidente	NOUN	n|M|S	_	1	nmod	_	MWE=vice-presidente_do_Ippar|MWEPOS=NOUN
5	do	do	ADP	ADP	AdpType=Preppron|Definite=Def|Gender=Masc|Number=Sing	6	case	_	_
6	Ippar	Ippar	NOUN	NOUN	_	4	compound	_	_
7	,	,	PUNCT	punc	_	1	punct	_	_
8	acrescenta	acrescentar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	:	:	PUNCT	punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Folha	Folha	PROPN	prop|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	o	o	DET	pron-indp|<interr>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	dobj	_	MWE=o_que|MWEPOS=PRON
4	que	que	SCONJ	SCONJ	_	3	compound	_	_
5	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	mulher	mulher	NOUN	n|F|S	Gender=Fem|Number=Sing	7	nsubj	_	_
7	precisa	precisar	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	hoje	hoje	ADV	adv	_	7	advmod	_	_
9	,	,	PUNCT	punc	_	7	punct	_	_
10	em	em	ADP	prp	AdpType=Prep	13	case	_	MWE=em_termos_de|MWEPOS=ADP
11	termos	termos	NOUN	NOUN	_	10	mwe	_	_
12	de	de	ADP	ADP	AdpType=Prep	10	mwe	_	_
13	roupas	roupa	NOUN	n|F|P	Gender=Fem|Number=Plur	7	nmod	_	_
14	?	?	PUNCT	punc	_	1	punct	_	_

~~~


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


