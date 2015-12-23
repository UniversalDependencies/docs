

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [cc]().

144 nodes (0%) are attached to their parents as `cc:preconj`.

138 instances of `cc:preconj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.58333333333333.

The following 14 pairs of parts of speech are connected with `cc:preconj`: [fi-pos/NOUN]()-[fi-pos/CONJ]() (74; 51% instances), [fi-pos/ADJ]()-[fi-pos/CONJ]() (16; 11% instances), [fi-pos/PROPN]()-[fi-pos/CONJ]() (15; 10% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (15; 10% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (9; 6% instances), [fi-pos/ADV]()-[fi-pos/CONJ]() (5; 3% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (3; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/ADP]()-[fi-pos/CONJ]() (1; 1% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 1% instances), [fi-pos/PRON]()-[fi-pos/CONJ]() (1; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (1; 1% instances), [fi-pos/X]()-[fi-pos/CONJ]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	joko	joko	CONJ	C	_	3	cc:preconj	_	_
3	euron	euro	NOUN	N	Case=Gen|Number=Sing	1	nmod	_	_
4	puolesta	puolesta	ADP	Adp	AdpType=Post	3	case	_	_
5	tai	tai	CONJ	C	_	3	cc	_	_
6	sitä	se	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	3	conj	1:nmod	_
7	vastaan	vastaan	ADP	Adp	AdpType=Post	6	case	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cc:preconj	color:blue
1	Olet	olla	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	5:cop	_
2	joko	joko	CONJ	C	_	3	cc:preconj	_	_
3	hyvä	hyvä	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	tai	tai	CONJ	C	_	3	cc	_	_
5	huono	huono	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc:preconj	color:blue
1	Mitä	mitä	CONJ	C	_	3	cc:preconj	_	_
2	harvempi	harva	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	3	nsubj	_	_
3	tietäisi	tietää	VERB	V	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
4	satulalaukuissa	satula#laukku	NOUN	N	Case=Ine|Number=Plur	5	nmod	_	_
5	olevasta	olla	VERB	V	Case=Ela|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	6	acl	_	_
6	kullasta	kulta	NOUN	N	Case=Ela|Number=Sing	3	nmod	_	SpaceAfter=No
7	,	,	PUNCT	Punct	_	3	punct	_	_
8	sen	sen	ADV	Adv	_	3	cc	_	_
9	parempi	hyvä	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	3	conj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


