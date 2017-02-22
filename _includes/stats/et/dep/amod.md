

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1535 nodes (4%) are attached to their parents as `amod`.

1451 instances of `amod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25732899022801.

The following 12 pairs of parts of speech are connected with `amod`: [et-pos/NOUN]()-[et-pos/ADJ]() (1379; 90% instances), [et-pos/VERB]()-[et-pos/ADJ]() (60; 4% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (36; 2% instances), [et-pos/PRON]()-[et-pos/ADJ]() (25; 2% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (18; 1% instances), [et-pos/ADV]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/NOUN]()-[et-pos/PROPN]() (4; 0% instances), [et-pos/NUM]()-[et-pos/ADJ]() (4; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/PRON]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Kas	kas	ADV	D	_	7	advmod	_	_
2	jälle	jälle	ADV	D	_	7	advmod	_	_
3	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	7	det	_	_
4	uus	uus	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
5	ja	ja	CCONJ	J	_	6	cc	_	_
6	tundmatu	tundmatu	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	conj	_	_
7	põlvkond	põlvkond	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
8	...	...	PUNCT	Z	_	7	punct	_	SpaceAfter=No
9	?	?	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 amod	color:blue
1	Ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	liigutas	liiguta	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	end	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	obj	_	_
4	vabaks	vaba	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	2	amod	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 amod	color:blue
1	Just	just	ADV	D	_	2	advmod	_	_
2	praegu	praegu	ADV	D	_	3	advmod	_	_
3	leidis	leidma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	üks	üks	DET	P	Case=Nom|Number=Sing|PronType=Ind	6	det	_	_
5	võõras	võõras	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	rüütel	rüütel	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
7	Püha	püha	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
8	Graali	Graal	PROPN	S	Case=Gen|Number=Sing	3	obj	_	SpaceAfter=No
9	.	.	PUNCT	Z	_	3	punct	_	_

~~~


