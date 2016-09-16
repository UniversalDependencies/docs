

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

28341 nodes (9%) are attached to their parents as `nsubj`.

23679 instances of `nsubj` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.41057125718923.

The following 52 pairs of parts of speech are connected with `nsubj`: [no-pos/VERB]()-[no-pos/PRON]() (11762; 42% instances), [no-pos/VERB]()-[no-pos/NOUN]() (6826; 24% instances), [no-pos/VERB]()-[no-pos/PROPN]() (4036; 14% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1149; 4% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (1045; 4% instances), [no-pos/NOUN]()-[no-pos/PRON]() (915; 3% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (684; 2% instances), [no-pos/VERB]()-[no-pos/ADJ]() (421; 1% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (335; 1% instances), [no-pos/ADJ]()-[no-pos/PROPN]() (220; 1% instances), [no-pos/VERB]()-[no-pos/DET]() (109; 0% instances), [no-pos/PRON]()-[no-pos/PRON]() (74; 0% instances), [no-pos/ADP]()-[no-pos/PRON]() (64; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (61; 0% instances), [no-pos/ADV]()-[no-pos/PRON]() (58; 0% instances), [no-pos/VERB]()-[no-pos/NUM]() (58; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (53; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (49; 0% instances), [no-pos/PROPN]()-[no-pos/PRON]() (40; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (35; 0% instances), [no-pos/DET]()-[no-pos/NOUN]() (35; 0% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (35; 0% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (32; 0% instances), [no-pos/DET]()-[no-pos/PROPN]() (30; 0% instances), [no-pos/NUM]()-[no-pos/PRON]() (27; 0% instances), [no-pos/DET]()-[no-pos/PRON]() (24; 0% instances), [no-pos/ADP]()-[no-pos/PROPN]() (19; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (18; 0% instances), [no-pos/PRON]()-[no-pos/PROPN]() (15; 0% instances), [no-pos/PROPN]()-[no-pos/PROPN]() (12; 0% instances), [no-pos/VERB]()-[no-pos/SCONJ]() (12; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (11; 0% instances), [no-pos/ADJ]()-[no-pos/DET]() (10; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (10; 0% instances), [no-pos/ADV]()-[no-pos/PROPN]() (9; 0% instances), [no-pos/NOUN]()-[no-pos/NUM]() (8; 0% instances), [no-pos/NUM]()-[no-pos/PROPN]() (7; 0% instances), [no-pos/ADJ]()-[no-pos/NUM]() (6; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (4; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (3; 0% instances), [no-pos/VERB]()-[no-pos/ADV]() (3; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/ADV]()-[no-pos/DET]() (2; 0% instances), [no-pos/VERB]()-[no-pos/X]() (2; 0% instances), [no-pos/ADP]()-[no-pos/NUM]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADV]() (1; 0% instances), [no-pos/AUX]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/DET]()-[no-pos/DET]() (1; 0% instances), [no-pos/INTJ]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (1; 0% instances), [no-pos/NUM]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj	color:blue
1	Dette	dette	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	ADP	_	_	8	mark	_	_
3	at	at	SCONJ	_	_	8	mark	_	_
4	også	også	ADV	_	_	5	advmod	_	_
5	han	han	PRON	_	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	_	PronType=Prs	5	det	_	_
7	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	_	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	8	dobj	_	_
10	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj	color:blue
1	Hvordan	hvordan	ADV	_	_	2	advmod	_	_
2	behandler	behandle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	meddommeren	meddommer	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
4	dyr	dyr	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	dobj	_	_
5	?	$?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Og	og	CONJ	_	_	3	cc	_	_
2	Aftenposten	Aftenposten	PROPN	_	Gender=Masc	3	nsubj	_	_
3	leverer	levere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	,	$,	PUNCT	_	_	3	punct	_	_
5	også	også	ADV	_	_	6	advmod	_	_
6	her	her	ADV	_	_	3	advmod	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_

~~~


