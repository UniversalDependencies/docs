

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

305 nodes (0%) are attached to their parents as `csubj`.

162 instances of `csubj` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.09180327868852.

The following 20 pairs of parts of speech are connected with `csubj`: [eu-pos/VERB]()-[eu-pos/VERB]() (124; 41% instances), [eu-pos/ADJ]()-[eu-pos/VERB]() (90; 30% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (42; 14% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (10; 3% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (5; 2% instances), [eu-pos/ADJ]()-[eu-pos/ADJ]() (4; 1% instances), [eu-pos/DET]()-[eu-pos/VERB]() (4; 1% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (4; 1% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (3; 1% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (3; 1% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (2; 1% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/CONJ]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (2; 1% instances), [eu-pos/X]()-[eu-pos/NOUN]() (2; 1% instances), [eu-pos/X]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (1; 0% instances), [eu-pos/INTJ]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Debekatua	debekatu	VERB	_	Case=Abs|Definite=Def|Number=Sing|VerbForm=Part	0	root	_	_
2	dago	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	1	cop	_	_
3	haurrak	haur	NOUN	_	Case=Abs|Definite=Def|Number=Plur	5	dobj	_	_
4	lanerako	lan	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	5	nmod	_	_
5	kontratatzea	kontratatu	VERB	_	Case=Abs	1	csubj	_	_
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj	color:blue
1	Ondorioz	ondorio	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind	6	nmod	_	_
2	,	,	PUNCT	_	_	5	punct	_	_
3	hori	hori	DET	_	Case=Abs|Definite=Def|Number=Sing	4	dobj	_	_
4	leporatzea	leporatu	VERB	_	Case=Abs	5	csubj	_	_
5	gogorra	gogor	ADJ	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
6	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	5	cop	_	_
7	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubj	color:blue
1	helburuak	helburu	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	3	dobj	_	_
2	ez	ez	PART	_	Negative=Neg	3	neg	_	_
3	lortzea	lortu	VERB	_	Case=Abs	10	csubj	_	_
4	edo	edo	CONJ	_	_	3	cc	_	_
5	ametsak	amets	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	7	dobj	_	_
6	ez	ez	PART	_	Negative=Neg	7	neg	_	_
7	betetzea	bete	VERB	_	Case=Abs	3	conj	_	_
8	ez	ez	PART	_	Negative=Neg	9	neg	_	_
9	da	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	10	cop	_	_
10	trajedia	tragedia	NOUN	_	Case=Abs|Definite=Def|Number=Sing	0	root	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


