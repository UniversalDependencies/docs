

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

635 nodes (1%) are attached to their parents as `acl`.

634 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.28818897637795.

The following 24 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (306; 48% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (115; 18% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (97; 15% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (37; 6% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (13; 2% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (12; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (10; 2% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (6; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (6; 1% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (5; 1% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	dobj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	_
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
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
4	att	att	PART	IE	_	6	mark	_	_
5	vara	vara	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	_	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	_	_
7	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	Denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Dem	2	det	_	_
2	sjukdom	sjukdom	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	_	_
3	är	vara	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	något	någon	ADV	AB	_	5	advmod	_	_
5	vanligare	vanlig	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	0	root	_	_
6	hos	hos	ADP	PP	_	7	case	_	_
7	kvinnor	kvinna	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	nmod	_	_
8	än	än	CONJ	KN	_	10	mark	_	_
9	hos	hos	ADP	PP	_	10	case	_	_
10	män	man	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	acl	_	_
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish-LinES)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

489 nodes (1%) are attached to their parents as `acl`.

488 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39059304703476.

The following 25 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (250; 51% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (96; 20% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (42; 9% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (28; 6% instances), [sv-pos/NOUN]()-[sv-pos/ADP]() (21; 4% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (14; 3% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (5; 1% instances), [sv-pos/ADV]()-[sv-pos/ADP]() (4; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADP]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/AUX]() (3; 1% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (3; 1% instances), [sv-pos/PROPN]()-[sv-pos/VERB]() (3; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/ADP]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/ADV]()-[sv-pos/ADJ]() (2; 0% instances), [sv-pos/PRON]()-[sv-pos/ADP]() (2; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/ADP]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/ADV]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/AUX]() (1; 0% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (1; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/SYM]()-[sv-pos/VERB]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 acl	color:blue
1	Det	_	PRON	PERS-P3SG	_	3	nsubj	_	_
2	är	_	VERB	PRES-ACT	_	3	cop	_	_
3	anledningen	_	NOUN	SG-DEF-NOM	_	0	root	_	_
4	till	_	ADP	_	_	7	case	_	_
5	att	_	SCONJ	_	_	7	mark	_	_
6	vi	_	PRON	PERS-P1PL-NOM	_	7	nsubj	_	_
7	godkänner	_	VERB	PRES-ACT	_	3	acl	_	_
8	betänkandet	_	NOUN	SG-DEF-NOM	_	7	dobj	_	_
9	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	Nej	_	INTJ	_	_	4	discourse	_	_
2	,	_	PUNCT	Comma	_	1	punct	_	_
3	jag	_	PRON	PERS-P1SG-NOM	_	4	nsubj	_	_
4	missade	_	VERB	PAST-ACT	_	0	root	_	_
5	den	_	PRON	PERS-P3SG	_	4	dobj	_	_
6	.	_	PUNCT	Period	_	4	punct	_	_
7	Nåt	_	PRON	IND-SG	_	8	det	_	_
8	bra	_	ADJ	POS-IND	_	4	appos	_	_
9	att	_	PART	_	_	10	mark	_	_
10	rapportera	_	VERB	INF-ACT	_	8	acl	_	_
11	?	_	PUNCT	QuestionMark	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Han	_	PRON	PERS-P3SG-NOM	_	2	nsubj	_	_
2	slängde	_	VERB	PAST-ACT	_	0	root	_	_
3	på	_	ADV	_	_	2	compound:prt	_	_
4	luren	_	NOUN	SG-DEF-NOM	_	2	dobj	_	_
5	så	_	ADV	_	_	6	advmod	_	_
6	häftigt	_	ADV	_	_	3	advmod	_	_
7	att	_	SCONJ	_	_	9	mark	_	_
8	plasten	_	NOUN	SG-DEF-NOM	_	9	nsubj	_	_
9	sprack	_	VERB	PAST-ACT	_	6	acl	_	_
10	.	_	PUNCT	Period	_	2	punct	_	_

~~~


