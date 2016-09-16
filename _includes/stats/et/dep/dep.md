

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

2047 nodes (1%) are attached to their parents as `dep`.

1657 instances of `dep` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.68539325842697.

The following 28 pairs of parts of speech are connected with `dep`: [et-pos/VERB]()-[et-pos/VERB]() (1340; 65% instances), [et-pos/VERB]()-[et-pos/ADJ]() (216; 11% instances), [et-pos/ADJ]()-[et-pos/VERB]() (175; 9% instances), [et-pos/VERB]()-[et-pos/NOUN]() (100; 5% instances), [et-pos/NOUN]()-[et-pos/VERB]() (40; 2% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (33; 2% instances), [et-pos/ADV]()-[et-pos/VERB]() (20; 1% instances), [et-pos/VERB]()-[et-pos/PRON]() (19; 1% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (15; 1% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (14; 1% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (10; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (10; 0% instances), [et-pos/PRON]()-[et-pos/VERB]() (9; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (8; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (6; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/NUM]()-[et-pos/VERB]() (4; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (4; 0% instances), [et-pos/ADP]()-[et-pos/VERB]() (3; 0% instances), [et-pos/ADV]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/VERB]()-[et-pos/NUM]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/PRON]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/VERB]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 0% instances), [et-pos/NUM]()-[et-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 dep	color:blue
1	Kurat	kurat	INTJ	I	_	5	discourse	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	5	dobj	_	_
4	ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	teen	tegema	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	dep	_	_
6	,	,	PUNCT	Z	_	5	punct	_	_
7	mõtles	mõtlema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
9	jahmunult	jahmunult	ADV	D	_	7	advmod	_	_
10	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 dep	color:blue
1	Ott	Ott	PROPN	S	Case=Nom|Number=Sing	2	nsubj	_	_
2	püüdis	püüdma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	4	dobj	_	_
4	veenda	veenma	VERB	V	VerbForm=Inf	2	xcomp	_	_
5	,	,	PUNCT	Z	_	11	punct	_	_
6	et	et	SCONJ	J	_	11	mark	_	_
7	öösel	öösel	ADV	D	_	9	advmod	_	_
8	magusa	magus	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	9	amod	_	_
9	söömine	söömine	NOUN	S	Case=Nom|Number=Sing	11	nsubj:cop	_	_
10	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	kahjulik	kahjulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	dep	_	_
12	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 dep	color:blue
1	Lehast	lehk	NOUN	S	Case=Ela|Number=Sing	5	nmod	_	_
2	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	raske	raske	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	lahti	lahti	ADV	D	_	5	compound:prt	_	_
5	saada	saama	VERB	V	VerbForm=Inf	3	csubj:cop	_	_
6	,	,	PUNCT	Z	_	8	punct	_	_
7	kuigi	kuigi	SCONJ	J	_	8	mark	_	_
8	pesta	pesema	VERB	V	VerbForm=Inf	3	dep	_	_
9	saab	saama	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
10	hästi	hästi	ADV	D	_	8	advmod	_	_
11	.	.	PUNCT	Z	_	3	punct	_	_

~~~


