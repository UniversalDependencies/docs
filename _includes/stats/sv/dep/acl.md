

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

501 nodes (1%) are attached to their parents as `acl`.

501 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.30738522954092.

The following 22 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (245; 49% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (87; 17% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (85; 17% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (27; 5% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (11; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (8; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (8; 2% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (5; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (3; 1% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	2	nsubj	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
4	att	att	PART	IE	_	6	mark	_	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	_	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	De	de	PRON	PN|UTR/NEU|PLU|DEF|SUB	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	2	nsubj:pass	_	_
2	utbildas	utbilda	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	främst	främst	ADV	AB|SUV	Degree=Sup	2	advmod	_	_
4	för	för	ADP	PP	_	6	case	_	_
5	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	6	amod	_	_
6	uppgifter	uppgift	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obl	_	_
7	än	än	CCONJ	KN	_	8	mark	_	_
8	strid	strid	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	acl	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

362 nodes (1%) are attached to their parents as `acl`.

362 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.57182320441989.

The following 16 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (199; 55% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (76; 21% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (33; 9% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (24; 7% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (8; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (5; 1% instances), [sv-pos/ADJ]()-[sv-pos/AUX]() (4; 1% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 1% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (2; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Konsekvenser	_	NOUN	PL-IND-NOM	_	0	root	_	_
2	av	_	ADP	_	_	4	case	_	_
3	att	_	PART	_	_	4	mark	_	_
4	filtrera	_	VERB	INF-ACT	_	1	acl	_	_
5	beräkningar	_	NOUN	PL-IND-NOM	_	4	obj	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	De	_	PRON	PERS-P3PL-NOM	_	2	nsubj	_	_
2	hade	_	VERB	PAST-ACT	_	0	root	_	_
3	egentligen	_	ADV	_	_	2	advmod	_	_
4	inte	_	PART	NEG	_	2	advmod	_	_
5	något	_	DET	SG-IND	_	6	det	_	_
6	mer	_	ADJ	CMP-IND	_	2	xcomp	_	_
7	att	_	PART	_	_	8	mark	_	_
8	tala	_	VERB	INF-ACT	_	6	acl	_	_
9	om	_	ADP	_	_	6	case	_	SpaceAfter=No
10	.	_	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl	color:blue
1	Quinn	_	PROPN	SG-NOM	_	2	nsubj	_	_
2	hade	_	VERB	PAST-ACT	_	0	root	_	_
3	svårt	_	ADJ	POS-SG-IND	_	2	xcomp	_	_
4	att	_	PART	_	_	5	mark	_	_
5	hitta	_	VERB	INF-ACT	_	3	xcomp	_	_
6	någonstans	_	ADV	_	_	5	obj	_	_
7	att	_	PART	_	_	8	mark	_	_
8	sitta	_	VERB	INF-ACT	_	6	acl	_	SpaceAfter=No
9	.	_	PUNCT	Period	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish_Sign_Language)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

6 nodes (2%) are attached to their parents as `acl`.

5 instances of `acl` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 4 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/ADV]() (2; 33% instances), [sv-pos/NOUN]()-[sv-pos/VERB]() (2; 33% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (1; 17% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	pro@&	_	PRON	?PN	_	2	det	_	_
2	UGGLA	_	NOUN	NN	_	3	nsubj	_	_
3	FÖLJA-EFTER	_	VERB	VB	_	0	root	_	_
4	POJKE	_	NOUN	NN	_	3	dobj	_	_
5	PEK	_	DET	PEK	_	4	det	_	_
6	SPRINGA(G)	_	VERB	VB	_	4	acl	_	_
7	BEGE-SIG-IVÄG@z	_	VERB	VB	_	3	conj	_	_
8	LÅTA-VARA	_	X	G	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 acl	color:blue
1	PI	_	ADV	AB	_	4	advmod	_	_
2	GRODA	_	NOUN	NN	_	4	nsubj	_	_
3	PERF	_	VERB	VB	_	4	aux	_	_
4	VARELSE(Vb)+FÖRFLYTTA@p	_	VERB	VBAV	_	0	root	_	_
5	AVGRÄNS	_	X	BOJ	_	4	nmod	_	_
6	HAND(JJv)+HANTERA@p	_	VERB	VBAV	_	4	conj	_	_
7	HAND(JJv)@p@hd	_	VERB	VBAV	_	4	dep	_	_
8	VARELSE(Vb)+FÖRFLYTTA@p	_	VERB	VBAV	_	4	conj	_	_
9	BEGE-SIG-IVÄG	_	VERB	VB	_	4	conj	_	_
10	BORTA	_	ADV	AB	_	2	acl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 acl	color:blue
1	PEK	_	DET	PEK	_	5	det	_	_
2	PU(L)@g@z	_	X	G	_	5	discourse	_	_
3	PRO1	_	PRON	PN	_	5	nsubj	_	_
4	BEHÄRSKA	_	VERB	VB	_	5	acl	_	_
5	TECKNA.FLYT	_	VERB	VB	_	0	root	_	_
6	PRO1	_	PRON	PN	_	3	conj	_	_
7	PEK	_	PRON	PEK	_	3	conj	_	_

~~~


