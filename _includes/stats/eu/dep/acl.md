

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

915 nodes (1%) are attached to their parents as `acl`.

874 instances of `acl` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07978142076503.

The following 27 pairs of parts of speech are connected with `acl`: [eu-pos/NOUN]()-[eu-pos/VERB]() (726; 79% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (24; 3% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (24; 3% instances), [eu-pos/DET]()-[eu-pos/VERB]() (21; 2% instances), [eu-pos/ADP]()-[eu-pos/VERB]() (20; 2% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (19; 2% instances), [eu-pos/NOUN]()-[eu-pos/AUX]() (13; 1% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (10; 1% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (8; 1% instances), [eu-pos/NUM]()-[eu-pos/VERB]() (7; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (6; 1% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (5; 1% instances), [eu-pos/PROPN]()-[eu-pos/ADV]() (5; 1% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (4; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (3; 0% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (3; 0% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (3; 0% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/ADP]()-[eu-pos/AUX]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/DET]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Bigarren	bigarren	NUM	_	NumType=Ord	2	amod	_	_
2	marrazkian	marrazki	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	3	obl	_	_
3	agertzen	agertu	VERB	_	Aspect=Imp|VerbForm=Inf	5	acl	_	_
4	den	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	3	aux	_	_
5	muntaia	muntaia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
6	egizu	egin	VERB	_	Aspect=Prog|Mood=Imp|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 acl	color:blue
1	Horregatik	horregatik	ADV	_	_	2	advmod	_	_
2	hasi	hasi	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
3	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	2	aux	_	_
4	bi	bi	NUM	_	NumType=Card	5	nummod	_	_
5	aldeentzat	alde	NOUN	_	Animacy=Inan|Case=Ben|Definite=Def|Number=Plur	7	obl	_	_
6	onuragarria	onuragarri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	8	acl	_	_
7	zen	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	6	cop	_	_
8	harremana	harreman	NOUN	_	Case=Abs|Definite=Def|Number=Sing	2	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 acl	color:blue
1	Ugalketa	ugalketa	NOUN	_	Case=Abs|Definite=Def|Number=Sing	2	obj	_	_
2	xede	xede	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	4	acl	_	_
3	duen	ukan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	2	cop	_	_
4	klonazioa	klonazio	NOUN	_	Case=Abs|Definite=Def|Number=Sing	5	obj	_	_
5	debekatzen	debekatu	VERB	_	Aspect=Imp|VerbForm=Inf	0	root	_	_
6	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	aux	_	SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


