

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

3168 nodes (1%) are attached to their parents as `mwe`.

3168 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24715909090909.

The following 42 pairs of parts of speech are connected with `mwe`: [pt-pos/ADP]()-[pt-pos/NOUN]() (1117; 35% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (408; 13% instances), [pt-pos/ADV]()-[pt-pos/ADP]() (404; 13% instances), [pt-pos/ADP]()-[pt-pos/SCONJ]() (133; 4% instances), [pt-pos/NOUN]()-[pt-pos/SCONJ]() (124; 4% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (119; 4% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (100; 3% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (96; 3% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (93; 3% instances), [pt-pos/ADP]()-[pt-pos/DET]() (83; 3% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (67; 2% instances), [pt-pos/ADV]()-[pt-pos/DET]() (63; 2% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (54; 2% instances), [pt-pos/ADV]()-[pt-pos/SCONJ]() (28; 1% instances), [pt-pos/ADV]()-[pt-pos/PART]() (24; 1% instances), [pt-pos/ADJ]()-[pt-pos/DET]() (23; 1% instances), [pt-pos/CONJ]()-[pt-pos/NOUN]() (22; 1% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (20; 1% instances), [pt-pos/DET]()-[pt-pos/ADV]() (19; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (19; 1% instances), [pt-pos/ADJ]()-[pt-pos/ADP]() (16; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (16; 1% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (16; 1% instances), [pt-pos/DET]()-[pt-pos/SCONJ]() (16; 1% instances), [pt-pos/SCONJ]()-[pt-pos/NOUN]() (15; 0% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (12; 0% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (9; 0% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (9; 0% instances), [pt-pos/ADP]()-[pt-pos/PRON]() (8; 0% instances), [pt-pos/ADJ]()-[pt-pos/SCONJ]() (5; 0% instances), [pt-pos/DET]()-[pt-pos/PART]() (5; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (4; 0% instances), [pt-pos/SCONJ]()-[pt-pos/SCONJ]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (3; 0% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/CONJ]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/NUM]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/ADP]() (2; 0% instances), [pt-pos/CONJ]()-[pt-pos/ADV]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mwe	color:blue
1	Preço	preço	NOUN	n|M|S	Gender=Masc|Number=Sing	0	root	_	_
2	:	:	PUNCT	punc	_	1	punct	_	_
3	18	18	NUM	num|<card>|F|P	Gender=Fem|Number=Plur|NumType=Card	4	nummod	_	_
4	URVs	URVs	PROPN	prop|F|P	Gender=Fem|Number=Plur	1	nmod	_	_
5	(	(	PUNCT	punc	_	4	punct	_	_
6	por	por	ADP	adv	AdpType=Prep	4	advmod	_	MWE=por_pessoa|MWEPOS=ADV
7	pessoa	pessoa	NOUN	NOUN	_	6	mwe	_	_
8	)	)	PUNCT	punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 mwe	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Apesar	apesar	ADV	prp|<sam->	AdpType=Prep	4	case	_	MWE=Apesar_de|MWEPOS=ADP
2	de	de	ADP	ADP	AdpType=Prep	1	mwe	_	_
3	as	o	DET	art|<-sam>|<artd>|F|P	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	4	det	_	_
4	críticas	crítica	NOUN	n|F|P	Gender=Fem|Number=Plur	7	nmod	_	_
5	,	,	PUNCT	punc	_	7	punct	_	_
6	Vogts	Vogts	PROPN	prop|M|S	Gender=Masc|Number=Sing	7	nsubj	_	_
7	prefere	preferir	VERB	v-fin|PR|3S|IND	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	manter	manter	VERB	v-inf	VerbForm=Inf	7	xcomp	_	_
9	a	o	DET	art|<artd>|F|S	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	discrição	discrição	NOUN	n|F|S	Gender=Fem|Number=Sing	8	dobj	_	_
11	:	:	PUNCT	punc	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

1212 nodes (0%) are attached to their parents as `mwe`.

1212 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.19389438943894.

The following 31 pairs of parts of speech are connected with `mwe`: [pt-pos/ADV]()-[pt-pos/ADP]() (362; 30% instances), [pt-pos/ADP]()-[pt-pos/ADP]() (176; 15% instances), [pt-pos/ADP]()-[pt-pos/CONJ]() (147; 12% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (136; 11% instances), [pt-pos/ADV]()-[pt-pos/CONJ]() (132; 11% instances), [pt-pos/VERB]()-[pt-pos/ADP]() (54; 4% instances), [pt-pos/DET]()-[pt-pos/NOUN]() (32; 3% instances), [pt-pos/DET]()-[pt-pos/CONJ]() (26; 2% instances), [pt-pos/CONJ]()-[pt-pos/VERB]() (24; 2% instances), [pt-pos/ADV]()-[pt-pos/X]() (20; 2% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (17; 1% instances), [pt-pos/CONJ]()-[pt-pos/CONJ]() (16; 1% instances), [pt-pos/ADP]()-[pt-pos/DET]() (13; 1% instances), [pt-pos/ADP]()-[pt-pos/ADV]() (11; 1% instances), [pt-pos/VERB]()-[pt-pos/CONJ]() (11; 1% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (5; 0% instances), [pt-pos/ADP]()-[pt-pos/VERB]() (4; 0% instances), [pt-pos/ADP]()-[pt-pos/X]() (4; 0% instances), [pt-pos/DET]()-[pt-pos/ADP]() (3; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (3; 0% instances), [pt-pos/ADP]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/CONJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Indicam	_	VERB	VERB	_	0	root	_	_
2	que	_	CONJ	CONJ	_	10	mark	_	_
3	com	_	ADP	ADP	_	6	case	_	_
4	menos	_	ADV	ADV	_	6	advmod	_	_
5	da	_	ADP	ADP	_	4	mwe	_	_
6	metade	_	NOUN	NOUN	_	10	nmod	_	_
7	dos	_	ADP	ADP	_	8	case	_	_
8	votos	_	NOUN	NOUN	_	6	nmod	_	_
9	poderão	_	AUX	AUX	_	10	aux	_	_
10	aprová	_	VERB	VERB	_	1	ccomp	_	_
11	-	_	PUNCT	.	_	10	punct	_	_
12	lo	_	PRON	PRON	_	10	dobj	_	_
13	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 mwe	color:blue
1	Resultado	_	NOUN	NOUN	_	0	root	_	_
2	4	_	NUM	NUM	NumType=Card	3	nummod	_	_
3	%	_	NOUN	NOUN	_	4	nmod	_	_
4	maior	_	ADJ	ADJ	_	1	amod	_	_
5	do	_	ADP	ADP	_	8	case	_	_
6	que	_	ADP	ADP	_	5	mwe	_	_
7	o	_	DET	DET	_	8	det	_	_
8	índice	_	NOUN	NOUN	_	4	nmod	_	_
9	obtido	_	VERB	VERB	_	8	acl:part	_	_
10	no	_	ADP	ADP	_	11	case	_	_
11	ano	_	NOUN	NOUN	_	9	nmod	_	_
12	anterior	_	ADJ	ADJ	_	11	amod	_	_
13	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	"	_	PUNCT	.	_	12	punct	_	_
2	Desde	_	ADP	ADP	_	4	mark	_	_
3	que	_	CONJ	CONJ	_	2	mwe	_	_
4	saí	_	VERB	VERB	_	12	advcl	_	_
5	de	_	ADP	ADP	_	6	mark	_	_
6	lá	_	ADV	ADV	_	4	nmod	_	_
7	,	_	PUNCT	.	_	4	punct	_	_
8	nos	_	ADP	ADP	_	10	case	_	_
9	quatro	_	NUM	NUM	NumType=Card	10	nummod	_	_
10	jogos	_	NOUN	NOUN	_	12	nmod	_	_
11	seguintes	_	ADJ	ADJ	_	10	amod	_	_
12	fiquei	_	VERB	VERB	_	0	root	_	_
13	de	_	ADP	ADP	_	14	mark	_	_
14	fora	_	ADV	ADV	_	12	nmod	_	_
15	.	_	PUNCT	.	_	12	punct	_	_

~~~


