

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Swedish)

This relation is universal.
There are 1 language-specific subtypes of `acl`: [acl:relcl]().

695 nodes (1%) are attached to their parents as `acl`.

666 instances of `acl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24172661870504.

The following 26 pairs of parts of speech are connected with `acl`: [sv-pos/NOUN]()-[sv-pos/VERB]() (306; 44% instances), [sv-pos/NOUN]()-[sv-pos/ADJ]() (118; 17% instances), [sv-pos/NOUN]()-[sv-pos/NOUN]() (97; 14% instances), [sv-pos/PRON]()-[sv-pos/ADJ]() (37; 5% instances), [sv-pos/VERB]()-[sv-pos/ADJ]() (36; 5% instances), [sv-pos/VERB]()-[sv-pos/PRON]() (16; 2% instances), [sv-pos/PRON]()-[sv-pos/VERB]() (13; 2% instances), [sv-pos/NOUN]()-[sv-pos/PRON]() (12; 2% instances), [sv-pos/NOUN]()-[sv-pos/ADV]() (10; 1% instances), [sv-pos/NOUN]()-[sv-pos/PROPN]() (6; 1% instances), [sv-pos/PRON]()-[sv-pos/NOUN]() (6; 1% instances), [sv-pos/ADV]()-[sv-pos/VERB]() (5; 1% instances), [sv-pos/PRON]()-[sv-pos/PRON]() (5; 1% instances), [sv-pos/ADJ]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/NOUN]() (3; 0% instances), [sv-pos/ADJ]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/DET]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/PROPN]()-[sv-pos/ADJ]() (3; 0% instances), [sv-pos/PROPN]()-[sv-pos/PRON]() (3; 0% instances), [sv-pos/VERB]()-[sv-pos/VERB]() (3; 0% instances), [sv-pos/NOUN]()-[sv-pos/DET]() (2; 0% instances), [sv-pos/NUM]()-[sv-pos/ADJ]() (1; 0% instances), [sv-pos/NUM]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/ADV]() (1; 0% instances), [sv-pos/PRON]()-[sv-pos/NUM]() (1; 0% instances), [sv-pos/VERB]()-[sv-pos/NOUN]() (1; 0% instances).


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
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
4	att	att	PART	IE	_	6	mark	_	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	_	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	_	_
7	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 acl	color:blue
1	Denna	denna	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	2	det	_	_
2	sjukdom	sjukdom	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	_	_
3	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	något	någon	ADV	AB	_	5	advmod	_	_
5	vanligare	vanlig	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	0	root	_	_
6	hos	hos	ADP	PP	_	7	case	_	_
7	kvinnor	kvinna	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	nmod	_	_
8	än	än	CONJ	KN	_	10	mark	_	_
9	hos	hos	ADP	PP	_	10	case	_	_
10	män	man	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	acl	_	_
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


