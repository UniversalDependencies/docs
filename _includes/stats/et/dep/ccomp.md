

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

1204 nodes (1%) are attached to their parents as `ccomp`.

1189 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54235880398671.

The following 6 pairs of parts of speech are connected with `ccomp`: [et-pos/VERB]()-[et-pos/VERB]() (981; 81% instances), [et-pos/VERB]()-[et-pos/ADJ]() (122; 10% instances), [et-pos/VERB]()-[et-pos/NOUN]() (79; 7% instances), [et-pos/VERB]()-[et-pos/PRON]() (16; 1% instances), [et-pos/VERB]()-[et-pos/PROPN]() (5; 0% instances), [et-pos/NOUN]()-[et-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 ccomp	color:blue
1	Ma	mina	PRON	P	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	arvan	arvama	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	,	,	PUNCT	Z	_	8	punct	_	_
4	et	et	SCONJ	J	_	8	mark	_	_
5	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	8	nsubj:cop	_	_
6	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
7	Eestile	Eesti	PROPN	S	Case=All|Number=Sing	8	nmod	_	_
8	kasulik	kasulik	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	ccomp	_	_
9	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Öeldakse	ütlema	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	,	,	PUNCT	Z	_	4	punct	_	_
3	et	et	SCONJ	J	_	4	mark	_	_
4	kusepeatus	kuse_peatus	NOUN	S	Case=Nom|Number=Sing	1	ccomp	_	_
5	.	.	PUNCT	Z	_	1	punct	_	_

~~~


