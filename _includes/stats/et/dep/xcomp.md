

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

411 nodes (1%) are attached to their parents as `xcomp`.

323 instances of `xcomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.58150851581509.

The following 10 pairs of parts of speech are connected with `xcomp`: [et-pos/VERB]()-[et-pos/VERB]() (287; 70% instances), [et-pos/VERB]()-[et-pos/NOUN]() (54; 13% instances), [et-pos/VERB]()-[et-pos/ADJ]() (50; 12% instances), [et-pos/ADJ]()-[et-pos/VERB]() (10; 2% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (2; 0% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (2; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Muidugi	muidugi	ADV	D	_	4	advmod	_	_
2	poleks	olema	AUX	V	Mood=Cnd|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	keegi	keegi	PRON	P	Case=Nom|Number=Sing|PronType=Ind	4	nsubj	_	_
4	osanud	oskama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
5	teda	tema	PRON	P	Case=Par|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
6	sealt	sealt	ADV	D	_	7	advmod	_	_
7	otsida	otsima	VERB	V	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 xcomp	color:blue
1	Muidu	muidu	ADV	D	_	2	advmod	_	_
2	pidas	pidama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
4	ennast	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	obj	_	_
5	viimasel	viimane	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	6	amod	_	_
6	ajal	aeg	NOUN	S	Case=Ade|Number=Sing	2	obl	_	_
7	pool-impoks	pool-impo	NOUN	S	Case=Tra|Number=Sing	2	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 xcomp	color:blue
1	Teises	teine	ADJ	N	Case=Ine|Number=Sing|NumForm=Letter|NumType=Ord	2	amod	_	_
2	sõidus	sõit	NOUN	S	Case=Ine|Number=Sing	3	obl	_	_
3	jäi	jääma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	Kuismanen	Kuismanen	PROPN	S	Case=Nom|Number=Sing	3	nsubj	_	_
5	Behrensile	Behrens	PROPN	S	Case=All|Number=Sing	6	obl	_	_
6	püüdmatuks	püüdmatu	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	3	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z	_	3	punct	_	_

~~~


