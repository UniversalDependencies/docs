

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

16787 nodes (6%) are attached to their parents as `amod`.

16449 instances of `amod` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.32006910109013.

The following 29 pairs of parts of speech are connected with `amod`: [de-pos/NOUN]()-[de-pos/ADJ]() (13860; 83% instances), [de-pos/PROPN]()-[de-pos/PROPN]() (1723; 10% instances), [de-pos/PROPN]()-[de-pos/ADJ]() (539; 3% instances), [de-pos/NOUN]()-[de-pos/PROPN]() (213; 1% instances), [de-pos/NOUN]()-[de-pos/PRON]() (89; 1% instances), [de-pos/VERB]()-[de-pos/ADJ]() (88; 1% instances), [de-pos/ADJ]()-[de-pos/ADJ]() (79; 0% instances), [de-pos/ADP]()-[de-pos/ADJ]() (40; 0% instances), [de-pos/PROPN]()-[de-pos/NUM]() (36; 0% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (35; 0% instances), [de-pos/NOUN]()-[de-pos/NUM]() (21; 0% instances), [de-pos/NUM]()-[de-pos/ADJ]() (15; 0% instances), [de-pos/PRON]()-[de-pos/ADJ]() (13; 0% instances), [de-pos/ADV]()-[de-pos/ADJ]() (7; 0% instances), [de-pos/PROPN]()-[de-pos/NOUN]() (5; 0% instances), [de-pos/NOUN]()-[de-pos/VERB]() (4; 0% instances), [de-pos/NUM]()-[de-pos/NUM]() (4; 0% instances), [de-pos/NOUN]()-[de-pos/ADP]() (3; 0% instances), [de-pos/ADP]()-[de-pos/NOUN]() (2; 0% instances), [de-pos/NOUN]()-[de-pos/ADV]() (2; 0% instances), [de-pos/ADP]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/ADP]()-[de-pos/X]() (1; 0% instances), [de-pos/AUX]()-[de-pos/ADJ]() (1; 0% instances), [de-pos/NOUN]()-[de-pos/X]() (1; 0% instances), [de-pos/NUM]()-[de-pos/NOUN]() (1; 0% instances), [de-pos/NUM]()-[de-pos/PROPN]() (1; 0% instances), [de-pos/PRON]()-[de-pos/PRON]() (1; 0% instances), [de-pos/PROPN]()-[de-pos/ADV]() (1; 0% instances), [de-pos/VERB]()-[de-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
2	ist	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Definite=Ind|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Degree=Cmp,Pos	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	_	0	root	_	_
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	In	in	ADP	APPR	_	4	case	_	_
2	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	Französischen	französisch	PROPN	ADJA	Case=Dat|Gender=Fem|Number=Sing	4	amod	_	_
4	Revolution	Revolution	PROPN	NN	Case=Dat|Gender=Fem|Number=Sing	8	nmod	_	_
5	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	auxpass	_	_
6	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	Kloster	Kloster	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	8	nsubjpass	_	_
8	aufgehoben	aufheben	VERB	VVPP	VerbForm=Part	0	root	_	_
9	.	.	PUNCT	$.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 amod	color:blue
1	Also	also	ADV	ADV	_	5	advmod	_	_
2	liebes	lieb	ADJ	ADJA	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
3	MONACO	Monaco	PROPN	NE	_	4	name	_	_
4	TEAM	Team	PROPN	NN	Case=Nom|Number=Sing	5	nsubj	_	_
5	bleibt	bleiben	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	0	root	_	_
6	so	so	ADV	ADV	_	5	advmod	_	_
7	wie	wie	CONJ	KOKOM	_	5	cc	_	_
8	ihr	ihr	PRON	PPOSAT	Case=Nom|Person=3|Poss=Yes|PronType=Prs	9	nsubj	_	_
9	seid	sein	VERB	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	5	conj	_	_
10	!	!	PUNCT	$.	_	5	punct	_	_
11	!	!	PUNCT	$.	_	5	punct	_	_

~~~


