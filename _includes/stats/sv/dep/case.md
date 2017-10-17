

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.

7640 nodes (10%) are attached to their parents as `case`.

7516 instances of `case` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.79568062827225.

The following 22 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (6565; 86% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (319; 4% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (316; 4% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (136; 2% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (125; 2% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (48; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (39; 1% instances), [sv-pos/NOUN]()-[sv-pos/SYM]() (26; 0% instances), [sv-pos/NUM]()-[sv-pos/SYM]() (13; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (12; 0% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (10; 0% instances), [sv-pos/DET]()-[sv-pos/ADP]() (10; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (8; 0% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (4; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 case	color:blue
1	Men	men	CCONJ	KN	_	5	cc	_	_
2	för	för	ADP	PP	_	4	case	_	_
3	barnens	barn	NOUN	NN|NEU|PLU|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Plur	4	nmod:poss	_	_
4	del	del	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
5	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
7	annorlunda	annorlunda	ADV	AB	_	5	advmod	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	_	_

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
4	I.	I.	PROPN	PM|NOM	Case=Nom	3	flat:name	_	_
5	Rabin	Rabin	PROPN	PM|NOM	Case=Nom	3	flat:name	_	SpaceAfter=No
6	:	:	PUNCT	MID	_	3	punct	_	_
7	Kibbutzchildren	Kibbutzchildren	NOUN	NN	_	3	parataxis	_	_
8	-	-	PUNCT	MID	_	7	punct	_	_
9	Researchfindings	Researchfindings	NOUN	NN	_	7	parataxis	_	_
10	to	to	ADP	PP	_	9	advmod	_	_
11	Date	Date	NOUN	NN	_	10	fixed	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Skiljer	skilja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	de	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	1	nsubj	_	_
3	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	1	obj	_	_
4	från	från	ADP	PP	_	5	case	_	_
5	andra	annan	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur|PronType=Ind	1	obl	_	_
6	och	och	CCONJ	KN	_	7	cc	_	_
7	i	i	ADP	PP	_	1	conj	_	_
8	så	så	ADV	AB	_	7	fixed	_	_
9	fall	fall	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	fixed	_	_
10	på	på	ADP	PP	_	12	case	_	_
11	vilket	vilken	DET	HD|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	12	det	_	_
12	sätt	sätt	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
13	?	?	PUNCT	MAD	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.

6937 nodes (11%) are attached to their parents as `case`.

6852 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82254576906444.

The following 11 pairs of parts of speech are connected with `case`: [sv-pos/NOUN]()-[sv-pos/ADP]() (5075; 73% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (624; 9% instances), [sv-pos/PROPN]()-[sv-pos/ADP]() (511; 7% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (510; 7% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (118; 2% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (59; 1% instances), [sv-pos/NUM]()-[sv-pos/ADP]() (29; 0% instances), [sv-pos/AUX]()-[sv-pos/ADP]() (8; 0% instances), [sv-pos/SCONJ]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/X]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
1	SQL	_	PROPN	SG-NOM	_	4	nsubj:pass	_	_
2	Server	_	NOUN	SG-IND-NOM	_	1	flat	_	_
3	måste	_	AUX	AUX	_	4	aux	_	_
4	köras	_	VERB	INF-PASS	_	0	root	_	_
5	på	_	ADP	_	_	7	case	_	_
6	samma	_	ADJ	POS-IND	_	7	amod	_	_
7	dator	_	NOUN	SG-IND-NOM	_	4	obl	_	_
8	som	_	ADP	_	_	9	case	_	_
9	Access-projektet	_	NOUN	SG-DEF-NOM	_	7	nmod	_	SpaceAfter=No
10	.	_	PUNCT	Period	_	4	punct	_	_

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
6	varandra	_	PRON	RCP-PL-ACC	_	4	obl	_	SpaceAfter=No
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	SQL	_	PROPN	SG-NOM	_	2	nmod	_	_
2	Server-databasen	_	NOUN	SG-DEF-NOM	_	4	nsubj:pass	_	_
3	måste	_	AUX	AUX	_	4	aux	_	_
4	köras	_	VERB	INF-PASS	_	0	root	_	_
5	på	_	ADP	_	_	6	case	_	_
6	Windows	_	PROPN	SG-NOM	_	4	obl	_	_
7	NT	_	PROPN	SG-NOM	_	6	flat	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.

1 nodes (0%) are attached to their parents as `case`.

1 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `case`: [sv-pos/VERB]()-[sv-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 case	color:blue
1	FORM(YYb)+BESKRIVNING@p	_	VERB	VBAV	_	5	nmod	_	_
2	FORM(Yb)@p@hd	_	VERB	VBAV	_	1	dep	_	_
3	INUTI	_	VERB	VBPP	_	1	case	_	_
4	GRODA	_	NOUN	NN	_	5	nsubj	_	_
5	STANNA-KVAR	_	VERB	VB	_	0	root	_	_

~~~


