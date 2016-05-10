

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

194 nodes (0%) are attached to their parents as `parataxis`.

176 instances of `parataxis` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.02061855670103.

The following 23 pairs of parts of speech are connected with `parataxis`: [pt-pos/PROPN]()-[pt-pos/VERB]() (60; 31% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (50; 26% instances), [pt-pos/VERB]()-[pt-pos/VERB]() (33; 17% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (7; 4% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (5; 3% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (5; 3% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (5; 3% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (4; 2% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (4; 2% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (4; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (2; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/SCONJ]()-[pt-pos/VERB]() (2; 1% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (2; 1% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 1% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (1; 1% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 1% instances), [pt-pos/SYM]()-[pt-pos/VERB]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (1; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	P.	P.	NOUN	n|F|S	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	punc	_	1	punct	_	_
3	As	o	DET	art|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	suas	seu	DET	pron-det|<poss|3S>|F|P	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	5	det	_	_
5	filhas	filha	NOUN	n|F|P	Gender=Fem|Number=Plur	6	nsubj	_	_
6	compreendem	compreender	VERB	v-fin|PR|3P|IND	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	o	o	DET	pron-indp|<interr>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	nsubj	_	MWE=o_que|MWEPOS=PRON
8	que	que	SCONJ	SCONJ	_	7	compound	_	_
9	se	se	PRON	pron-pers|<refl>|M/F|3S/P|ACC	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	10	dobj	_	_
10	passou	passar	VERB	v-fin|PS|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	ccomp	_	_
11	em	em	ADP	prp	AdpType=Prep	12	case	_	_
12	Maio	maio	NOUN	n|<prop>|M|S	Gender=Masc|Number=Sing	10	nmod	_	_
13	68	68	NUM	num|<card>|M|S	Gender=Masc|Number=Sing|NumType=Card	12	nummod	_	_
14	?	?	PUNCT	punc	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 parataxis	color:blue
1	Enganei-	enganar	VERB	v-fin|PS|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
2	me	eu	PRON	pron-pers|<refl>|M/F|1S|ACC	Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	1	dobj	_	_
3	:	:	PUNCT	punc	_	1	punct	_	_
4	não	não	ADV	adv	_	8	neg	_	_
5	serie	seriar	VERB	v-fin|COND|3S	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin	8	cop	_	_
6	nem	nem	CONJ	conj-c|<co-vfin>|<co-fmc>	_	8	cc	_	_
7	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	primeiro	primeiro	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	13	ccomp	_	_
9	nem	nem	CONJ	conj-c|<co-sc>	_	8	cc	_	_
10	o	o	DET	art|<artd>|M|S	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	último	último	ADJ	adj|<n>|<NUM-ord>|M|S	Gender=Masc|Number=Sing|NumType=Ord	8	conj	_	_
12	,	,	PUNCT	punc	_	13	punct	_	_
13	espero	esperar	VERB	v-fin|PR|1S|IND	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
14	..	..	PUNCT	punc	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

757 nodes (0%) are attached to their parents as `parataxis`.

541 instances of `parataxis` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 11.6737120211361.

The following 26 pairs of parts of speech are connected with `parataxis`: [pt-pos/VERB]()-[pt-pos/VERB]() (329; 43% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (133; 18% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (121; 16% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (57; 8% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (22; 3% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (12; 2% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (11; 1% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (11; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (10; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (8; 1% instances), [pt-pos/VERB]()-[pt-pos/X]() (7; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (6; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (5; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (3; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (3; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Mas	_	CONJ	CONJ	_	3	cc	_	_
2	não	_	ADV	ADV	_	3	neg	_	_
3	gosto	_	VERB	VERB	_	12	ccomp	_	_
4	de	_	ADP	ADP	_	5	case	_	_
5	mulher	_	NOUN	NOUN	_	3	nmod	_	_
6	,	_	PUNCT	.	_	3	punct	_	_
7	gosto	_	VERB	VERB	_	3	parataxis	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	homem	_	NOUN	NOUN	_	7	nmod	_	_
10	"	_	PUNCT	.	_	3	punct	_	_
11	,	_	PUNCT	.	_	12	punct	_	_
12	avisa	_	VERB	VERB	_	0	root	_	_
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	ÉPOCA	_	PROPN	PNOUN	_	4	parataxis	_	_
2	--	_	PUNCT	.	_	4	punct	_	_
3	Como	_	ADV	ADV	_	4	advmod	_	_
4	acontecia	_	VERB	VERB	_	0	root	_	_
5	a	_	DET	DET	_	6	det	_	_
6	intervenção	_	NOUN	NOUN	_	4	nsubj	_	_
7	nas	_	ADP	ADP	_	8	case	_	_
8	escolas	_	NOUN	NOUN	_	4	nmod	_	_
9	ruins	_	ADJ	ADJ	_	8	amod	_	_
10	?	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Marca	_	VERB	VERB	_	0	root	_	_
2	e	_	CONJ	CONJ	_	1	cc	_	_
3	embalagem	_	NOUN	NOUN	_	1	conj	_	_
4	:	_	PUNCT	.	_	1	punct	_	_
5	administração	_	NOUN	NOUN	_	1	parataxis	_	_
6	e	_	CONJ	CONJ	_	5	cc	_	_
7	conceito	_	NOUN	NOUN	_	5	conj	_	_
8	produto	_	NOUN	NOUN	_	7	appos	_	_
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


