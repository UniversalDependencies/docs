

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

436 nodes (0%) are attached to their parents as `parataxis`.

430 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.98394495412844.

The following 42 pairs of parts of speech are connected with `parataxis`: [pt-pos/VERB]()-[pt-pos/VERB]() (137; 31% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (51; 12% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (46; 11% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (45; 10% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (30; 7% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (22; 5% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (11; 3% instances), [pt-pos/ADV]()-[pt-pos/VERB]() (8; 2% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (8; 2% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (7; 2% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (6; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (6; 1% instances), [pt-pos/PROPN]()-[pt-pos/ADV]() (5; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (5; 1% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (4; 1% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (3; 1% instances), [pt-pos/NOUN]()-[pt-pos/ADV]() (3; 1% instances), [pt-pos/ADJ]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/INTJ]() (2; 0% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/NUM]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/PROPN]()-[pt-pos/PRON]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/SCONJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/X]() (2; 0% instances), [pt-pos/ADV]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/DET]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/INTJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/SYM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/DET]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 parataxis	color:blue
1	«	«	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
2	Toda	todo	DET	<quant>|DET|F|S|@>N	Gender=Fem|Number=Sing|PronType=Tot	3	det	_	_
3	platéia	platéia	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	11	nsubj	_	_
4	de	de	ADP	PRP|@N<	_	5	case	_	_
5	música	música	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	3	nmod	_	_
6	erudita	erudito	ADJ	ADJ|F|S|@N<	Gender=Fem|Number=Sing	5	amod	_	_
7	é	ser	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	tradicionalista	tradicionalista	ADJ	ADJ|F|S|@SC>	Gender=Fem|Number=Sing	11	xcomp	_	SpaceAfter=No
9	»	»	PUNCT	PU|@PU	_	3	punct	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	7	punct	_	_
11	explica	explicar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	parataxis	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 parataxis	color:blue
1	P.	p.	NOUN	<np-idf>|N|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	PU|@PU	_	1	punct	_	_
3	As	o	DET	<artd>|ART|F|P|@>N	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	suas	seu	DET	<poss>|DET|F|P|@>N	Gender=Fem|Number=Plur|PronType=Prs	5	det	_	_
5	filhas	filha	NOUN	<np-def>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	6	nsubj	_	_
6	compreendem	compreender	VERB	<mv>|V|PR|3P|IND|@FS-QUE	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	que	que	PRON	<interr>|INDP|M|S|@SUBJ>	Gender=Masc|Number=Sing|PronType=Int	10	nsubj	_	_
9	se	se	PRON	PERS|M/F|3S/P|ACC|@ACC>-PASS	Case=Acc|Gender=Unsp|PronType=Prs	10	expl	_	_
10	passou	passar	VERB	<mv>|<se-passive>|V|PS|3S|IND|@FS-<ACC	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	ccomp	_	_
11	em	em	ADP	PRP|@<OA	_	12	case	_	_
12	Maio	maio	NOUN	<prop>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	10	nmod:tmod	_	_
13	68	68	NUM	<card>|NUM|M|S|@N<	NumType=Card	12	nummod	_	SpaceAfter=No
14	?	?	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 parataxis	color:blue
1	Folha	Folha	PROPN	PROP|F|S|@NPHR	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	PU|@PU	_	1	punct	_	_
3	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	que	que	PRON	<interr>|INDP|M|S|@ACC>	Gender=Masc|Number=Sing|PronType=Int	7	obj	_	_
5	a	o	DET	<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	mulher	mulher	NOUN	<np-def>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	7	nsubj	_	_
7	precisa	precisar	VERB	<mv>|V|PR|3S|IND|@FS-QUE	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
8	hoje	hoje	ADV	ADV|@<ADVL	_	7	advmod	_	SpaceAfter=No
9	,	,	PUNCT	PU|@PU	_	7	punct	_	_
10	em	em	ADP	PRP|@<ADVL	_	11	case	_	MWE=em_termos_de
11	termos	termos	NOUN	N|@P<	_	7	obl	_	_
12	de	de	ADP	PRP|@N<	_	13	case	_	_
13	roupas	roupa	NOUN	<np-idf>|N|F|P|@P<	Gender=Fem|Number=Plur	11	nmod	_	SpaceAfter=No
14	?	?	PUNCT	PU|@PU	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

686 nodes (0%) are attached to their parents as `parataxis`.

489 instances of `parataxis` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.3309037900875.

The following 25 pairs of parts of speech are connected with `parataxis`: [pt-pos/VERB]()-[pt-pos/VERB]() (297; 43% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (118; 17% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (114; 17% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (53; 8% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (21; 3% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (11; 2% instances), [pt-pos/VERB]()-[pt-pos/NUM]() (11; 2% instances), [pt-pos/VERB]()-[pt-pos/PRON]() (10; 1% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (9; 1% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (8; 1% instances), [pt-pos/VERB]()-[pt-pos/X]() (6; 1% instances), [pt-pos/PRON]()-[pt-pos/VERB]() (5; 1% instances), [pt-pos/NOUN]()-[pt-pos/NUM]() (4; 1% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/ADJ]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/PRON]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/ADJ]() (2; 0% instances), [pt-pos/VERB]()-[pt-pos/PART]() (2; 0% instances), [pt-pos/DET]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/X]() (1; 0% instances), [pt-pos/PRON]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/ADV]() (1; 0% instances), [pt-pos/X]()-[pt-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis	color:blue
1	Mas	_	CCONJ	CONJ	_	3	cc	_	_
2	não	_	ADV	ADV	Polarity=Neg	3	advmod	_	_
3	gosto	_	VERB	VERB	_	12	ccomp	_	_
4	de	_	ADP	ADP	_	5	case	_	_
5	mulher	_	NOUN	NOUN	_	3	nmod	_	SpaceAfter=No
6	,	_	PUNCT	.	_	3	punct	_	_
7	gosto	_	VERB	VERB	_	3	parataxis	_	_
8	de	_	ADP	ADP	_	9	case	_	_
9	homem	_	NOUN	NOUN	_	7	nmod	_	_
10	"	_	PUNCT	.	_	3	punct	_	SpaceAfter=No
11	,	_	PUNCT	.	_	12	punct	_	_
12	avisa	_	VERB	VERB	_	0	root	_	SpaceAfter=No
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
7	en	en	ADP	ADP	_	9	case	_	_
8	as	o	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	escolas	_	NOUN	NOUN	_	4	nmod	_	_
10	ruins	_	ADJ	ADJ	_	9	amod	_	SpaceAfter=No
11	?	_	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Marca	_	VERB	VERB	_	0	root	_	_
2	e	_	CCONJ	CONJ	_	3	cc	_	_
3	embalagem	_	NOUN	NOUN	_	1	conj	_	SpaceAfter=No
4	:	_	PUNCT	.	_	1	punct	_	_
5	administração	_	NOUN	NOUN	_	1	parataxis	_	_
6	e	_	CCONJ	CONJ	_	7	cc	_	_
7	conceito	_	NOUN	NOUN	_	5	conj	_	_
8	produto	_	NOUN	NOUN	_	7	appos	_	SpaceAfter=No
9	.	_	PUNCT	.	_	1	punct	_	_

~~~


