

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

735 nodes (0%) are attached to their parents as `parataxis`.

731 instances of `parataxis` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.2625850340136.

The following 34 pairs of parts of speech are connected with `parataxis`: [fi-pos/VERB]()-[fi-pos/VERB]() (333; 45% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (147; 20% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (49; 7% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (38; 5% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (38; 5% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (27; 4% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (16; 2% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (11; 1% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (8; 1% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (7; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (7; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (6; 1% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (6; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (5; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (4; 1% instances), [fi-pos/INTJ]()-[fi-pos/VERB]() (4; 1% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	Saat	saada	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	maistaa	maistaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	1	xcomp	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	1	punct	_	_
4	mies	mies	NOUN	N	Case=Nom|Number=Sing	5	nsubj	7:nsubj|8:nsubj	_
5	lupasi	luvata	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	parataxis	_	_
6	ja	ja	CCONJ	C	_	7	cc	_	_
7	rupesi	ruveta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
8	penkomaan	penkoa	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kassiaan	kassi	NOUN	N	Case=Par|Number=Sing|Person[psor]=3	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	oma	oma	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	vika	vika	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
5	jos	jos	SCONJ	C	_	7	mark	_	_
6	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	yksinäinen	yksinäinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	advcl	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	4	punct	_	_
9	hän	hän	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	sanoo	sanoa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 parataxis	color:blue
1	-	-	PUNCT	Punct	_	5	punct	_	_
2	Eikö	ei	AUX	V	Clitic=Ko|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	5	aux	_	_
3	se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	nsubj:cop	_	_
4	ole	olla	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	selvää	selvä	ADJ	A	Case=Par|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	?	?	PUNCT	Punct	_	5	punct	_	_
7	parrakas	parrakas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	_
8	ryöväri	ryöväri	NOUN	N	Case=Nom|Number=Sing	9	nsubj	_	_
9	ärähti	ärähtää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


