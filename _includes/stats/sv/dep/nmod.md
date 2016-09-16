

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 2 language-specific subtypes of `nmod`: [nmod:agent](), [nmod:poss]().

10109 nodes (10%) are attached to their parents as `nmod`.

8022 instances of `nmod` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.54347611039668.

The following 51 pairs of parts of speech are connected with `nmod`: [sv-pos/VERB]()-[sv-pos/NOUN]() (4386; 43% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (3195; 32% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (513; 5% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (269; 3% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (217; 2% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (182; 2% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (176; 2% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (171; 2% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (151; 1% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (116; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (97; 1% instances), [sv-pos/NOUN]()-[sv-pos/NUM]() (83; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (73; 1% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (72; 1% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (62; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (39; 0% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (32; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (29; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (27; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (26; 0% instances), [sv-pos/PROPN]()-[sv-pos/NUM]() (21; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (20; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (20; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (19; 0% instances), [sv-pos/ADJ]()-[sv-pos/NUM]() (17; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (10; 0% instances), [sv-pos/DET]()-[sv-pos/NOUN]() (10; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (10; 0% instances), [sv-pos/ADV]()-[sv-pos/NUM]() (9; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (8; 0% instances), [sv-pos/VERB]()-[sv-pos/ADV]() (7; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (6; 0% instances), [sv-pos/VERB]()-[sv-pos/DET]() (4; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/ADP]()-[sv-pos/PROPN]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/NUM]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (2; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/SCONJ]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Kvarstår	kvarstå	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	3	det	_	_
3	försening	försening	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	nsubj	_	_
4	i	i	ADP	PP	_	5	case	_	_
5	utveckling	utveckling	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
6	hos	hos	ADP	PP	_	8	case	_	_
7	äldre	gammal	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	8	det	_	_
8	kibbutzbarn	kibbutzbarn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	1	nmod	_	_
9	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	En	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	biologisk	biologisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	amod	_	_
3	funktion	funktion	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
4	grundad	grundad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
5	på	på	ADP	PP	_	7	case	_	_
6	biologiska	biologisk	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	7	amod	_	_
7	olikheter	olikhet	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	nmod	_	_
8	.	.	PUNCT	MAD	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 2 language-specific subtypes of `nmod`: [nmod:agent](), [nmod:poss]().

8395 nodes (11%) are attached to their parents as `nmod`.

7154 instances of `nmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49100655151876.

The following 46 pairs of parts of speech are connected with `nmod`: [sv-pos/VERB]()-[sv-pos/NOUN]() (3898; 46% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1989; 24% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (528; 6% instances), [sv-pos/VERB]()-[sv-pos/PROPN]() (352; 4% instances), [sv-pos/PROPN]()-[sv-pos/NOUN]() (313; 4% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (261; 3% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (259; 3% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (127; 2% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (106; 1% instances), [sv-pos/ADV]()-[sv-pos/NOUN]() (83; 1% instances), [sv-pos/NUM]()-[sv-pos/NOUN]() (70; 1% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (55; 1% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (52; 1% instances), [sv-pos/VERB]()-[sv-pos/NUM]() (52; 1% instances), [sv-pos/ADJ]()-[sv-pos/PRON]() (51; 1% instances), [sv-pos/AUX]()-[sv-pos/NOUN]() (39; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (36; 0% instances), [sv-pos/ADJ]()-[sv-pos/PROPN]() (20; 0% instances), [sv-pos/ADP]()-[sv-pos/NOUN]() (17; 0% instances), [sv-pos/PROPN]()-[sv-pos/PROPN]() (17; 0% instances), [sv-pos/PRON]()-[sv-pos/PROPN]() (10; 0% instances), [sv-pos/ADV]()-[sv-pos/PRON]() (8; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (6; 0% instances), [sv-pos/SYM]()-[sv-pos/NOUN]() (5; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (4; 0% instances), [sv-pos/ADP]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/ADV]()-[sv-pos/PROPN]() (4; 0% instances), [sv-pos/AUX]()-[sv-pos/PRON]() (4; 0% instances), [sv-pos/INTJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/DET]()-[sv-pos/NOUN]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/PRON]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/PROPN]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/AUX]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/DET]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/INTJ]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/SCONJ]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SCONJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod	color:blue
1	Öppna	_	VERB	IMP-ACT	_	0	root	_	_
2	sidan	_	NOUN	SG-DEF-NOM	_	1	dobj	_	_
3	i	_	ADP	_	_	4	case	_	_
4	designläget	_	NOUN	SG-DEF-NOM	_	1	nmod	_	_
5	i	_	ADP	_	_	6	case	_	_
6	Access	_	PROPN	SG-NOM	_	4	nmod	_	_
7	2002	_	NUM	ID	_	6	nummod	_	_
8	.	_	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nmod	color:blue
1	Länka	_	VERB	IMP-ACT	_	0	root	_	_
2	en	_	DET	SG-IND	_	3	det	_	_
3	sida	_	NOUN	SG-IND-NOM	_	1	dobj	_	_
4	till	_	ADP	_	_	6	case	_	_
5	en	_	DET	SG-IND	_	6	det	_	_
6	anslutningsfil	_	NOUN	SG-IND-NOM	_	3	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Villkorsstyrda	_	ADJ	POS-PL-IND	_	2	amod	_	_
2	filter	_	NOUN	IND-NOM	_	3	nsubj	_	_
3	fungerar	_	VERB	PRES-ACT	_	0	root	_	_
4	oberoende	_	VERB	NDE	_	3	advcl	_	_
5	av	_	ADP	_	_	6	case	_	_
6	varandra	_	PRON	RCP-PL-ACC	_	4	nmod	_	_
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


