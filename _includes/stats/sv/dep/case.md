

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

9571 nodes (10%) are attached to their parents as `case`.

9424 instances of `case` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78988611430363.

The following 24 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (8230; 86% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (406; 4% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (401; 4% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (162; 2% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (155; 2% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (60; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (46; 0% instances), [sv-pos/NOUN]()-[sv-pos/SYM]() (27; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (16; 0% instances), [sv-pos/NUM]()-[sv-pos/SYM]() (13; 0% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (12; 0% instances), [sv-pos/DET]()-[sv-pos/ADP]() (11; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (11; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (7; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/CONJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	Men	men	CONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nmod	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	_
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	1	dobj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	nmod	_	_
6	och	och	CONJ	KN	_	1	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	mwe	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	mwe	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	nmod	_	_
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
1	8.	8.	NUM	RG|NOM	Case=Nom|NumType=Card	3	nummod	_	_
2	Ur	ur	ADP	PP	_	3	case	_	_
3	A.	A.	PROPN	PM|NOM	Case=Nom	0	root	_	_
4	I.	I.	PROPN	PM|NOM	Case=Nom	3	name	_	_
5	Rabin	Rabin	PROPN	PM|NOM	Case=Nom	3	name	_	_
6	:	:	PUNCT	MID	_	3	punct	_	_
7	Kibbutzchildren	Kibbutzchildren	NOUN	NN	_	3	parataxis	_	_
8	-	-	PUNCT	MID	_	7	punct	_	_
9	Researchfindings	Researchfindings	NOUN	NN	_	7	parataxis	_	_
10	to	to	ADP	PP	_	9	advmod	_	_
11	Date	Date	NOUN	NN	_	10	mwe	_	_
12	.	.	PUNCT	MAD	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

8455 nodes (11%) are attached to their parents as `case`.

8391 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77942046126552.

The following 12 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (6151; 73% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (776; 9% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (644; 8% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (611; 7% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (150; 2% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (71; 1% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (40; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (4; 0% instances), [sv-pos/AUX]()-[sv-pos/ADP]() (4; 0% instances), [sv-pos/SCONJ]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/SYM]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/X]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 case	color:blue
1	Om	_	ADP	_	_	3	case	_	_
2	ANSI	_	PROPN	SG-NOM	_	3	compound	_	_
3	SQL-frågeläge	_	NOUN	IND-NOM	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Villkorsstyrda	_	ADJ	POS-PL-IND	_	2	amod	_	_
2	filter	_	NOUN	IND-NOM	_	3	nsubj	_	_
3	fungerar	_	VERB	PRES-ACT	_	0	root	_	_
4	oberoende	_	VERB	NDE	_	3	advcl	_	_
5	av	_	ADP	_	_	6	case	_	_
6	varandra	_	PRON	RCP-PL-ACC	_	4	nmod	_	_
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	Öppna	_	VERB	IMP-ACT	_	0	root	_	_
2	sidan	_	NOUN	SG-DEF-NOM	_	1	dobj	_	_
3	i	_	ADP	_	_	4	case	_	_
4	designläget	_	NOUN	SG-DEF-NOM	_	1	nmod	_	_
5	i	_	ADP	_	_	6	case	_	_
6	Access	_	PROPN	SG-NOM	_	4	nmod	_	_
7	2002	_	NUM	ID	_	6	nummod	_	_
8	.	_	PUNCT	Period	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

9 nodes (1%) are attached to their parents as `case`.

6 instances of `case` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 4 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (5; 56% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (2; 22% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (1; 11% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	JA@ub@z	_	INTJ	INTERJ	_	2	discourse	_	_
2	FÖRSTÅ(L)	_	VERB	VB	_	0	root	_	_
3	VARFÖR	_	ADV	AB	_	2	mark	_	_
4	SMITA	_	VERB	VB	_	2	xcomp	_	_
5	FRÅN	_	ADP	PP	_	6	case	_	_
6	SKÅL	_	NOUN	NN	_	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	HUND	_	NOUN	NN	_	2	nsubj	_	_
2	VARELSE(VVb)+RÖRELSE@p	_	VERB	VBAV	_	0	root	_	_
3	FÖRSTÅ-INTE	_	VERB	VB	_	2	conj	_	_
4	JÄVLAR@z	_	INTJ	INTERJ	_	2	dep	_	_
5	VARELSE(VVb)+FÖRFLYTTA@p	_	VERB	VBAV	_	3	xcomp	_	_
6	INUTI	_	VERB	VBPP	_	7	case	_	_
7	VATTEN	_	NOUN	NN	_	5	nmod	_	_
8	PEK	_	DET	PEK	_	7	det	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 case	color:blue
1	VATTEN	_	NOUN	NN	_	4	nmod	_	_
2	FORM(Yb)+BESKRIVNING+FORM(Yb)@p	_	VERB	VBAV	_	1	compound	_	_
3	POJKE	_	NOUN	NN	_	4	nsubj	_	_
4	STÅ(N)	_	X	?	_	0	root	_	_
5	HUND	_	NOUN	NN	_	6	nsubj	_	_
6	VARELSE(NN)+BEFINNA@p	_	VERB	VBAV	_	4	conj	_	_
7	FORM(YYb)+UTSTRÄCKNING@p	_	VERB	VBAV	_	4	nmod	_	_
8	FORM(Yb)@p@hd	_	VERB	VBAV	_	7	conj	_	_
9	FINNAS	_	VERB	VB	_	7	acl:relcl	_	_
10	BAKOM	_	ADP	PP	_	7	case	_	_
11	NÅGON	_	PRON	PN	_	9	nsubj	_	_
12	PEK	_	DET	PEK	_	11	det	_	_

~~~


