

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

3279 nodes (1%) are attached to their parents as `xcomp`.

2606 instances of `xcomp` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.741384568466.

The following 21 pairs of parts of speech are connected with `xcomp`: [et-pos/VERB]()-[et-pos/VERB]() (2039; 62% instances), [et-pos/VERB]()-[et-pos/NOUN]() (634; 19% instances), [et-pos/VERB]()-[et-pos/ADJ]() (416; 13% instances), [et-pos/ADJ]()-[et-pos/VERB]() (74; 2% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (26; 1% instances), [et-pos/NOUN]()-[et-pos/VERB]() (19; 1% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (17; 1% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (14; 0% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (11; 0% instances), [et-pos/VERB]()-[et-pos/PROPN]() (9; 0% instances), [et-pos/VERB]()-[et-pos/PRON]() (4; 0% instances), [et-pos/ADV]()-[et-pos/ADJ]() (3; 0% instances), [et-pos/PRON]()-[et-pos/NOUN]() (3; 0% instances), [et-pos/ADJ]()-[et-pos/PROPN]() (2; 0% instances), [et-pos/ADV]()-[et-pos/VERB]() (2; 0% instances), [et-pos/AUX]()-[et-pos/VERB]() (1; 0% instances), [et-pos/NOUN]()-[et-pos/PRON]() (1; 0% instances), [et-pos/NUM]()-[et-pos/NOUN]() (1; 0% instances), [et-pos/PRON]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/ADJ]() (1; 0% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 xcomp	color:blue
1	"	"	PUNCT	Z	_	3	punct	_	_
2	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	usun	uskuma	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	,	,	PUNCT	Z	_	7	punct	_	_
5	et	et	SCONJ	J	_	7	mark	_	_
6	ta	tema	PRON	P	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
8	kohe-kohe	kohe-kohe	ADV	D	_	7	advmod	_	_
9	ärkamas	ärkama	VERB	V	Case=Ine|VerbForm=Sup|Voice=Act	7	xcomp	_	_
10	,	,	PUNCT	Z	_	14	punct	_	_
11	kui	kui	SCONJ	J	_	14	mark	_	_
12	mitte	mitte	ADV	D	Negative=Neg	14	advmod	_	_
13	juba	juba	ADV	D	_	14	advmod	_	_
14	ärganud	ärkama	VERB	V	Tense=Past|VerbForm=Part|Voice=Act	7	advcl	_	_
15	.	.	PUNCT	Z	_	3	punct	_	_

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
4	ennast	ise	PRON	P	Case=Par|Number=Sing|PronType=Prs|Reflex=Yes	2	dobj	_	_
5	viimasel	viimane	ADJ	A	Case=Ade|Degree=Pos|Number=Sing	6	amod	_	_
6	ajal	aeg	NOUN	S	Case=Ade|Number=Sing	2	nmod	_	_
7	pool-impoks	pool-impo	NOUN	S	Case=Tra|Number=Sing	2	xcomp	_	_
8	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Ebalev	ebalev	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	amod	_	_
2	naeratus	naeratus	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
3	muutis	muutma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	ta	tema	PRON	P	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	dobj	_	_
5	lapselikuks	lapselik	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	3	xcomp	_	_
6	.	.	PUNCT	Z	_	3	punct	_	_

~~~


