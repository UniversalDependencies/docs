

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese)

This relation is universal.
There are 2 language-specific subtypes of `flat`: [flat:foreign](), [flat:name]().

11 nodes (0%) are attached to their parents as `flat`.

11 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45454545454545.

The following 3 pairs of parts of speech are connected with `flat`: [pt-pos/NUM]()-[pt-pos/NUM]() (6; 55% instances), [pt-pos/NUM]()-[pt-pos/CCONJ]() (3; 27% instances), [pt-pos/PROPN]()-[pt-pos/PROPN]() (2; 18% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 flat	color:blue
1	Trinta	trinta	NUM	_	NumType=Card	4	nummod	_	MWE=trinta_e_sete|MWEPOS=NUM
2	e	e	CCONJ	_	_	1	flat	_	_
3	sete	sete	NUM	_	NumType=Card	1	flat	_	_
4	anos	ano	NOUN	<np-def>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
1	Trinta	trinta	NUM	_	NumType=Card	4	nummod	_	MWE=trinta_e_sete|MWEPOS=NUM
2	e	e	CCONJ	_	_	1	flat	_	_
3	sete	sete	NUM	_	NumType=Card	1	flat	_	_
4	anos	ano	NOUN	<np-def>|N|M|P|@NPHR	Gender=Masc|Number=Plur	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 flat	color:blue
1	TEATRO	TEATRO	PROPN	PROP|M|S|@NPHR	Gender=Masc|Number=Sing	0	root	_	MWE=TEATRO_NACIONAL_DE_D.Maria_II
2	NACIONAL	NACIONAL	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
3	DE	DE	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
4	D.	D.	PROPN	_	_	1	flat	_	_
5	MARIA	MARIA	PROPN	PROP|@N<	Number=Sing	1	flat:name	_	_
6	II	II	PROPN	PROP	Number=Sing	1	flat:name	_	SpaceAfter=No
7	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Portuguese-BR)

This relation is universal.

5872 nodes (2%) are attached to their parents as `flat`.

5872 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2975136239782.

The following 23 pairs of parts of speech are connected with `flat`: [pt-pos/PROPN]()-[pt-pos/PROPN]() (4915; 84% instances), [pt-pos/NOUN]()-[pt-pos/NOUN]() (568; 10% instances), [pt-pos/PART]()-[pt-pos/NOUN]() (212; 4% instances), [pt-pos/PROPN]()-[pt-pos/NOUN]() (68; 1% instances), [pt-pos/NOUN]()-[pt-pos/PROPN]() (43; 1% instances), [pt-pos/X]()-[pt-pos/X]() (20; 0% instances), [pt-pos/PART]()-[pt-pos/PROPN]() (15; 0% instances), [pt-pos/NUM]()-[pt-pos/PROPN]() (10; 0% instances), [pt-pos/ADP]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/X]()-[pt-pos/PROPN]() (3; 0% instances), [pt-pos/PROPN]()-[pt-pos/VERB]() (2; 0% instances), [pt-pos/X]()-[pt-pos/NOUN]() (2; 0% instances), [pt-pos/ADP]()-[pt-pos/NOUN]() (1; 0% instances), [pt-pos/NOUN]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/NUM]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PART]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/PRON]() (1; 0% instances), [pt-pos/PART]()-[pt-pos/VERB]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADJ]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/ADP]() (1; 0% instances), [pt-pos/PROPN]()-[pt-pos/NUM]() (1; 0% instances), [pt-pos/X]()-[pt-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 flat	color:blue
1	As	_	DET	DET	_	2	det	_	_
2	informações	_	NOUN	NOUN	_	3	nsubj	_	_
3	são	_	VERB	VERB	_	0	root	_	_
4	de	de	ADP	ADP	_	6	case	_	_
5	o	o	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	jornal	_	NOUN	NOUN	_	3	nmod	_	_
7	O	_	DET	DET	_	8	det	_	_
8	Estado	_	PROPN	PNOUN	_	6	appos	_	_
9	de	_	ADP	ADP	_	10	case	_	_
10	S.	_	PROPN	PNOUN	_	8	nmod	_	_
11	Paulo	_	PROPN	PNOUN	_	10	flat	_	SpaceAfter=No
12	.	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Já	_	ADV	ADV	_	6	advmod	_	_
2	um	_	DET	DET	_	3	det	_	_
3	aborto	_	NOUN	NOUN	_	6	nsubj	_	_
4	legal	_	ADJ	ADJ	_	3	amod	_	_
5	era	_	VERB	VERB	_	6	cop	_	_
6	r	_	NOUN	NOUN	_	0	root	_	_
7	$	_	NOUN	NOUN	_	6	flat	_	_
8	2400	_	NUM	NUM	NumType=Card	6	nummod	_	SpaceAfter=No
9	)	_	PUNCT	.	_	6	punct	_	SpaceAfter=No
10	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 flat	color:blue
1	A	_	DET	DET	_	2	det	_	_
2	banda	_	NOUN	NOUN	_	6	nsubj	_	_
3	Oficina	_	PROPN	PNOUN	_	2	appos	_	_
4	G3	_	PROPN	PNOUN	_	3	flat	_	_
5	já	_	ADV	ADV	_	6	advmod	_	_
6	iniciou	_	VERB	VERB	_	0	root	_	_
7	a	_	DET	DET	_	8	det	_	_
8	pré	_	PART	PRT	_	6	obj	_	_
9	-	_	PUNCT	.	_	8	punct	_	_
10	produção	_	NOUN	NOUN	_	8	flat	_	_
11	de	_	ADP	ADP	_	14	case	_	_
12	seu	_	DET	DET	_	14	det:poss	_	_
13	novo	_	ADJ	ADJ	_	14	amod	_	_
14	álbum	_	NOUN	NOUN	_	8	nmod	_	SpaceAfter=No
15	.	_	PUNCT	.	_	6	punct	_	_

~~~


