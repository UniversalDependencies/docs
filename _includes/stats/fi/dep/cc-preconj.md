

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [cc]().

144 nodes (0%) are attached to their parents as `cc:preconj`.

138 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58333333333333.

The following 15 pairs of parts of speech are connected with `cc:preconj`: [fi-pos/NOUN]()-[fi-pos/CCONJ]() (73; 51% instances), [fi-pos/ADJ]()-[fi-pos/CCONJ]() (16; 11% instances), [fi-pos/PROPN]()-[fi-pos/CCONJ]() (15; 10% instances), [fi-pos/VERB]()-[fi-pos/CCONJ]() (14; 10% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (9; 6% instances), [fi-pos/ADV]()-[fi-pos/CCONJ]() (5; 3% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (3; 2% instances), [fi-pos/PRON]()-[fi-pos/CCONJ]() (2; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/ADP]()-[fi-pos/CCONJ]() (1; 1% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/CCONJ]()-[fi-pos/CCONJ]() (1; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/X]()-[fi-pos/CCONJ]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	joko	joko	CCONJ	C	_	3	cc:preconj	_	_
3	euron	euro	NOUN	N	Case=Gen|Number=Sing	1	obl	_	_
4	puolesta	puolesta	ADP	Adp	AdpType=Post	3	case	_	_
5	tai	tai	CCONJ	C	_	6	cc	_	_
6	sitä	se	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	3	conj	1:obl	_
7	vastaan	vastaan	ADP	Adp	AdpType=Post	6	case	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	5:cop	_
2	joko	joko	CCONJ	C	_	3	cc:preconj	_	_
3	hyvä	hyvä	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	tai	tai	CCONJ	C	_	5	cc	_	_
5	huono	huono	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Me	minä	PRON	Pron	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	olemme	olla	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	sen	se	PRON	Pron	Case=Gen|Number=Sing|PronType=Dem	2	obj	_	_
4	velkaa	velka	NOUN	N	Case=Par|Number=Sing	2	obl	_	_
5	sekä	sekä	CCONJ	C	_	6	cc:preconj	_	_
6	Turkille	Turkki	PROPN	N	Case=All|Number=Sing	2	obl	_	_
7	että	että	CCONJ	C	_	9	cc	_	_
8	omille	oma	ADJ	A	Case=All|Degree=Pos|Number=Plur	9	amod	_	_
9	kansalaisillemme	kansa#lainen	NOUN	N	Case=All|Number=Plur|Number[psor]=Plur|Person[psor]=1	6	conj	2:obl	SpaceAfter=No
10	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


