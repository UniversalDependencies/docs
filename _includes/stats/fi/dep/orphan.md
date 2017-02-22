

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

276 nodes (0%) are attached to their parents as `orphan`.

156 instances of `orphan` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.09420289855072.

The following 47 pairs of parts of speech are connected with `orphan`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (59; 21% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (31; 11% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (19; 7% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (18; 7% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (15; 5% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (14; 5% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (13; 5% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (11; 4% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (7; 3% instances), [fi-pos/CCONJ]()-[fi-pos/NOUN]() (7; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (7; 3% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (6; 2% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (5; 2% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (4; 1% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (4; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (3; 1% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (3; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/PUNCT]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (3; 1% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (2; 1% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (2; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (2; 1% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (2; 1% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (2; 1% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (2; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (2; 1% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (2; 1% instances), [fi-pos/ADJ]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/CCONJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/CCONJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/CCONJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 orphan	color:blue
1	Punanen	punainen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing|Style=Coll	2	amod	_	_
2	kenttä	kenttä	NOUN	N	Case=Nom|Number=Sing	0	root	2.1:nsubj	_
2.1	tulee	tulla	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	_	_	_	_
3	tonne	tonne	ADV	Adv	_	4	advmod	_	_
4	päätyyn	pääty	NOUN	N	Case=Ill|Number=Sing	2	orphan	2.1:obl	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	2.1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 orphan	color:blue
0.1	Laita	laittaa	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	_	_	_	_
1	Alku	alku	NOUN	N	Case=Nom|Number=Sing	0	root	0.1:obj	_
2	ja	ja	CCONJ	C	_	3	cc	_	_
3	loppukohdat	loppu#kohta	NOUN	N	Case=Nom|Number=Plur	1	conj	0.1:obj	_
4	pötkylän	pötkylä	NOUN	N	Case=Gen|Number=Sing	1	orphan	0.1:obl	_
5	alle	alle	ADP	Adp	AdpType=Post	4	case	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	8	punct	_	_
7	etteivät	että#ei	VERB	V	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	8	mark	_	_
8	aukea	aueta	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	1	orphan	0.1:advcl	SpaceAfter=No
9	..	..	PUNCT	Punct	_	1	punct	0.1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 orphan	color:blue
1	Vuodesta	vuosi	NOUN	N	Case=Ela|Number=Sing	3	obl	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	jäljellä	jäljellä	ADV	Adv	_	0	root	_	_
4	351	351	NUM	Num	NumType=Card	5	nummod	_	_
5	päivää	päivä	NOUN	N	Case=Par|Number=Sing	3	nsubj:cop	_	_
6	(	(	PUNCT	Punct	_	8	punct	8.1:punct	SpaceAfter=No
7	karkausvuonna	karkaus#vuosi	NOUN	N	Case=Ess|Number=Sing	8	orphan	8.1:obl	_
8	352	352	NUM	Num	NumType=Card	3	conj	8.1:nsubj:cop	SpaceAfter=No
8.1	jäljellä	jäljellä	ADV	_	_	_	_	3:conj	_
9	)	)	PUNCT	Punct	_	8	punct	8.1:punct	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


