

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nsubj]().

2736 nodes (2%) are attached to their parents as `nsubj:cop`.

2589 instances of `nsubj:cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07858187134503.

The following 39 pairs of parts of speech are connected with `nsubj:cop`: [fi-pos/ADJ]()-[fi-pos/NOUN]() (702; 26% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (599; 22% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (330; 12% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (213; 8% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (206; 8% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (146; 5% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (75; 3% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (75; 3% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (67; 2% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (54; 2% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (51; 2% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (51; 2% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (38; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (20; 1% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (16; 1% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (11; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (10; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (6; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/SYM]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Paita	paita	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	valkoinen	valkoinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	ja	ja	CONJ	C	_	3	cc	_	_
5	siinä	se	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	6	nmod	_	_
6	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	värikkäitä	värikäs	ADJ	A	Case=Par|Degree=Pos|Number=Plur	8	amod	_	_
8	kukkia	kukka	NOUN	N	Case=Par|Number=Plur	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:cop	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	_
2	ja	ja	CONJ	C	_	1	cc	_	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	6:nsubj:cop	_
4	olivat	olla	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	_	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:cop	color:blue
1	Tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	7:nsubj:cop|10:nsubj:cop	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	7:cop|10:cop	_
3	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
4	levysi	levy	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
7	kirjasi	kirja	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	4	punct	_	_
9	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	_
10	televisiosi	televisio	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


