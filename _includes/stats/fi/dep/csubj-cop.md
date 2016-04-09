

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [csubj]().

137 nodes (0%) are attached to their parents as `csubj:cop`.

131 instances of `csubj:cop` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72262773722628.

The following 8 pairs of parts of speech are connected with `csubj:cop`: [fi-pos/ADJ]()-[fi-pos/VERB]() (105; 77% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (18; 13% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (4; 3% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (3; 2% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (3; 2% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (2; 1% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 1% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cop	color:blue
1	On	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	dobj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 csubj:cop	color:blue
1	Aivan	aivan	ADV	Adv	_	2	advmod	_	_
2	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	idea	idea	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
4	koristella	koristella	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	3	csubj:cop	_	_
5	liivi	liivi	NOUN	N	Case=Nom|Number=Sing	4	dobj	_	_
6	vetoketjuilla	veto#ketju	NOUN	N	Case=Ade|Number=Plur	4	nmod	_	_
7	noin	noin	ADV	Adv	_	4	advmod	_	SpaceAfter=No
8	!	!	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 csubj:cop	color:blue
1	Kenellä	kuka	PRON	Pron	Case=Ade|Number=Sing|PronType=Rel|Style=Coll	2	nmod:own	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	csubj:cop	_	_
3	paras	hyvä	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	4	amod	_	_
4	valmennusjärjestelmä	valmennus#järjestelmä	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	2	punct	_	_
6	menestyy	menestyä	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


