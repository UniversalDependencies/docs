

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

6511 nodes (7%) are attached to their parents as `advmod`.

4159 instances of `advmod` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.74166794655199.

The following 40 pairs of parts of speech are connected with `advmod`: [da-pos/VERB]()-[da-pos/ADV]() (3365; 52% instances), [da-pos/ADJ]()-[da-pos/ADV]() (860; 13% instances), [da-pos/NOUN]()-[da-pos/ADV]() (733; 11% instances), [da-pos/ADV]()-[da-pos/ADV]() (518; 8% instances), [da-pos/VERB]()-[da-pos/VERB]() (381; 6% instances), [da-pos/VERB]()-[da-pos/ADP]() (160; 2% instances), [da-pos/PRON]()-[da-pos/ADV]() (84; 1% instances), [da-pos/PROPN]()-[da-pos/ADV]() (67; 1% instances), [da-pos/NOUN]()-[da-pos/ADP]() (58; 1% instances), [da-pos/VERB]()-[da-pos/X]() (51; 1% instances), [da-pos/NOUN]()-[da-pos/VERB]() (35; 1% instances), [da-pos/PART]()-[da-pos/ADV]() (33; 1% instances), [da-pos/NOUN]()-[da-pos/X]() (27; 0% instances), [da-pos/ADP]()-[da-pos/ADV]() (25; 0% instances), [da-pos/AUX]()-[da-pos/ADV]() (18; 0% instances), [da-pos/NUM]()-[da-pos/ADV]() (18; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (17; 0% instances), [da-pos/ADJ]()-[da-pos/ADP]() (10; 0% instances), [da-pos/ADV]()-[da-pos/ADP]() (8; 0% instances), [da-pos/X]()-[da-pos/ADV]() (8; 0% instances), [da-pos/ADV]()-[da-pos/X]() (4; 0% instances), [da-pos/AUX]()-[da-pos/X]() (4; 0% instances), [da-pos/CCONJ]()-[da-pos/VERB]() (3; 0% instances), [da-pos/ADP]()-[da-pos/X]() (2; 0% instances), [da-pos/AUX]()-[da-pos/ADP]() (2; 0% instances), [da-pos/CCONJ]()-[da-pos/ADV]() (2; 0% instances), [da-pos/INTJ]()-[da-pos/ADV]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/ADP]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (2; 0% instances), [da-pos/VERB]()-[da-pos/PRON]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/PRON]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/VERB]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/X]() (1; 0% instances), [da-pos/NUM]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PART]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/PART]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PRON]()-[da-pos/ADP]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/SCONJ]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	Hvor	hvor	ADV	_	_	2	advmod	_	_
2	kommer	komme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	julemanden	julemand	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
4	fra	fra	ADP	_	AdpType=Prep	1	case	_	_
5	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 advmod	color:blue
1	En	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	2	det	_	_
2	salmonella-infektion	salmonella-infektion	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	nsubj	_	_
3	forløber	forløbe	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	mildt	mildt	ADV	_	Degree=Pos	3	advmod	_	_
5	hos	hos	ADP	_	AdpType=Prep	8	case	_	_
6	langt	langt	ADV	_	Degree=Pos	8	advmod	_	_
7	de	den	DET	_	Number=Plur|PronType=Dem	8	det	_	_
8	fleste	mange	ADJ	_	Definite=Def|Degree=Sup|Number=Plur	3	obl	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Kyllingerne	kylling	NOUN	_	Definite=Def|Gender=Com|Number=Plur	3	nsubj	_	_
2	her	her	ADV	_	_	1	advmod	_	_
3	har	have	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	meget	meget	ADV	_	Degree=Pos	3	obj	_	_
5	mere	meget	ADJ	_	Definite=Ind|Degree=Cmp|Number=Sing	4	amod	_	_
6	plads	plads	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


