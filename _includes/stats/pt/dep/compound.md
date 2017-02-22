

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.

507 nodes (0%) are attached to their parents as `compound`.

475 instances of `compound` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51479289940828.

The following 17 pairs of parts of speech are connected with `compound`: [pt-pos/ADP]()-[pt-pos/NUM]() (128; 25% instances), [pt-pos/NOUN]()-[pt-pos/ADJ]() (127; 25% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (115; 23% instances), [pt-pos/NOUN]()-[pt-pos/ADP]() (92; 18% instances), [pt-pos/ADJ]()-[pt-pos/NOUN]() (18; 4% instances), [pt-pos/NOUN]()-[pt-pos/DET]() (6; 1% instances), [pt-pos/ADV]()-[pt-pos/NOUN]() (5; 1% instances), [pt-pos/NUM]()-[pt-pos/NOUN]() (4; 1% instances), [pt-pos/NOUN]()-[pt-pos/SYM]() (3; 1% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/ADJ]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/ADV]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (1; 0% instances), [pt-pos/SYM]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/VERB]()-[pt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound	color:blue
1	Descida	descida	NOUN	<np-idf>|N|F|S|@SUBJ>	Gender=Fem|Number=Sing	6	nsubj	_	_
2	de	de	ADP	PRP|@N<ARG	_	4	case	_	_
3	20	20	NUM	<card>|NUM|M|P|@>N	NumType=Card	4	nummod	_	_
4	por	por	ADP	_	Gender=Masc|Number=Sing	1	nmod	_	MWE=por_cento|MWEPOS=NOUN
5	cento	cento	NUM	_	Gender=Masc|Number=Sing|NumType=Mult	4	compound	_	_
6	registada	registar	VERB	<mv>|V|PCP|F|S|@ICL-UTT	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
7	em	em	ADP	PRP|@<ADVL	_	8	case	_	_
8	Abril	abril	NOUN	<prop>|<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	6	obl	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Fala	falar	VERB	<mv>|V|PR|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	em	em	ADP	<sam->|PRP|@<PIV	_	5	case	_	_
3	a	o	DET	<-sam>|<artd>|ART|@>N	Definite=Def|PronType=Art	5	det	_	_
4	«	«	PUNCT	PU|@PU	_	5	punct	_	SpaceAfter=No
5	opinião	opinião	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	MWE=opinião_pública|MWEPOS=NOUN
6	pública	pública	ADJ	_	Gender=Masc|Number=Sing	5	compound	_	SpaceAfter=No
7	»	»	PUNCT	PU|@PU	_	5	punct	_	SpaceAfter=No
8	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound	color:blue
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	bacalhau	bacalhau	NOUN	<np-def>|N|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	_
3	como	como	ADP	<com>|PRP|@N<	_	4	case	_	_
4	pano	pano	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	MWE=pano_de_fundo|MWEPOS=NOUN
5	de	de	ADP	_	_	4	compound	_	_
6	fundo	fundo	NOUN	_	_	4	compound	_	_

~~~


