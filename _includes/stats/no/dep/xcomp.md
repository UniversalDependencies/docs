

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Norwegian)

This relation is universal.

4015 nodes (1%) are attached to their parents as `xcomp`.

3942 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.95566625155666.

The following 37 pairs of parts of speech are connected with `xcomp`: [no-pos/VERB]()-[no-pos/VERB]() (1289; 32% instances), [no-pos/VERB]()-[no-pos/ADJ]() (1235; 31% instances), [no-pos/VERB]()-[no-pos/NOUN]() (1018; 25% instances), [no-pos/NOUN]()-[no-pos/NOUN]() (98; 2% instances), [no-pos/VERB]()-[no-pos/ADV]() (61; 2% instances), [no-pos/VERB]()-[no-pos/PROPN]() (54; 1% instances), [no-pos/VERB]()-[no-pos/PRON]() (46; 1% instances), [no-pos/VERB]()-[no-pos/ADP]() (40; 1% instances), [no-pos/NOUN]()-[no-pos/ADJ]() (35; 1% instances), [no-pos/VERB]()-[no-pos/NUM]() (28; 1% instances), [no-pos/PROPN]()-[no-pos/NOUN]() (22; 1% instances), [no-pos/VERB]()-[no-pos/DET]() (14; 0% instances), [no-pos/NOUN]()-[no-pos/ADP]() (9; 0% instances), [no-pos/PROPN]()-[no-pos/ADJ]() (6; 0% instances), [no-pos/PROPN]()-[no-pos/NUM]() (6; 0% instances), [no-pos/ADJ]()-[no-pos/NOUN]() (5; 0% instances), [no-pos/ADJ]()-[no-pos/VERB]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/PRON]() (5; 0% instances), [no-pos/NOUN]()-[no-pos/VERB]() (5; 0% instances), [no-pos/VERB]()-[no-pos/X]() (5; 0% instances), [no-pos/PRON]()-[no-pos/NOUN]() (4; 0% instances), [no-pos/NOUN]()-[no-pos/PROPN]() (3; 0% instances), [no-pos/NUM]()-[no-pos/NOUN]() (3; 0% instances), [no-pos/PRON]()-[no-pos/ADJ]() (3; 0% instances), [no-pos/ADJ]()-[no-pos/ADJ]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/ADV]() (2; 0% instances), [no-pos/NOUN]()-[no-pos/DET]() (2; 0% instances), [no-pos/ADJ]()-[no-pos/PRON]() (1; 0% instances), [no-pos/ADP]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/ADP]()-[no-pos/VERB]() (1; 0% instances), [no-pos/ADV]()-[no-pos/ADJ]() (1; 0% instances), [no-pos/ADV]()-[no-pos/DET]() (1; 0% instances), [no-pos/ADV]()-[no-pos/NOUN]() (1; 0% instances), [no-pos/NUM]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/ADP]() (1; 0% instances), [no-pos/PRON]()-[no-pos/VERB]() (1; 0% instances), [no-pos/PROPN]()-[no-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 xcomp	color:blue
1	Ap	Ap	PROPN	_	_	2	nsubj	_	_
2	ønsker	ønske	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ikke	ikke	ADV	_	_	2	neg	_	_
4	å	å	PART	_	_	5	mark	_	_
5	så	så	VERB	_	VerbForm=Inf	2	xcomp	_	_
6	tvil	tvil	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	dobj	_	_
7	om	om	ADP	_	_	10	mark	_	_
8	at	at	SCONJ	_	_	10	mark	_	_
9	de	de	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	_	_
10	tror	tro	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	acl	_	_
11	på	på	ADP	_	_	14	case	_	_
12	ny	ny	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
13	rødgrønn	rødgrønn	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	14	amod	_	_
14	valgseier	valgseier	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	10	nmod	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	blir	bli	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	mer	mye	ADJ	_	Degree=Cmp	4	advmod	_	_
4	forsettlig	forsettlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	2	xcomp	_	SpaceAfter=No
5	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	SpaceAfter=No
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~


