

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:prt]().

1088 nodes (1%) are attached to their parents as `compound:nn`.

1073 instances of `compound:nn` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45404411764706.

The following 25 pairs of parts of speech are connected with `compound:nn`: [fi-pos/PROPN]()-[fi-pos/NOUN]() (659; 61% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (178; 16% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (142; 13% instances), [fi-pos/NOUN]()-[fi-pos/X]() (28; 3% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (12; 1% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (12; 1% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (12; 1% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (8; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (6; 1% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 0% instances), [fi-pos/CONJ]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound:nn	color:blue
1	Neuvoston	neuvosto	NOUN	N	Case=Gen|Number=Sing	3	nmod	_	_
2	puolesta	puolesta	ADP	Adp	AdpType=Post	1	case	_	_
3	I.	I.	PROPN	N	_	0	root	_	_
4	YATES	YATES	PROPN	N	Case=Nom|Number=Sing	3	name	_	_
5	Puheenjohtaja	puheen#johtaja	NOUN	N	Case=Nom|Number=Sing	3	compound:nn	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound:nn	color:blue
1	Ensimmäinen	ensimmäinen	ADJ	Num	Case=Nom|Number=Sing|NumType=Ord	3	nummod	_	_
2	Windows	Windows	PROPN	N	Case=Nom|Number=Sing	3	compound:nn	_	_
3	versio	versio	NOUN	N	Case=Nom|Number=Sing	5	dobj	_	_
4	ohjelmasta	ohjelma	NOUN	N	Case=Ela|Number=Sing	3	nmod	_	_
5	julkaistiin	julkaista	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
6	1994	1994	NUM	Num	NumType=Card	5	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 compound:nn	color:blue
1	Toyotan	Toyota	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
2	Formula	formula	NOUN	N	Case=Nom|Number=Sing	4	compound:nn	_	_
3	1	1	NUM	Num	NumType=Card	2	name	_	_
4	-tallilla	talli	NOUN	N	Case=Ade|Number=Sing	7	nmod	_	_
5	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	vuotta	vuosi	NOUN	N	Case=Par|Number=Sing	7	nmod	_	_
7	aikaa	aika	NOUN	N	Case=Par|Number=Sing	0	root	_	_
8	menestyä	menestyä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	acl	_	_

~~~


