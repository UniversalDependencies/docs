

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

5696 nodes (2%) are attached to their parents as `mark`.

5658 instances of `mark` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.4315308988764.

The following 19 pairs of parts of speech are connected with `mark`: [et-pos/VERB]()-[et-pos/SCONJ]() (3515; 62% instances), [et-pos/VERB]()-[et-pos/ADV]() (726; 13% instances), [et-pos/NOUN]()-[et-pos/SCONJ]() (631; 11% instances), [et-pos/ADJ]()-[et-pos/SCONJ]() (373; 7% instances), [et-pos/ADV]()-[et-pos/SCONJ]() (92; 2% instances), [et-pos/ADJ]()-[et-pos/ADV]() (80; 1% instances), [et-pos/ADV]()-[et-pos/ADV]() (76; 1% instances), [et-pos/PROPN]()-[et-pos/SCONJ]() (62; 1% instances), [et-pos/PRON]()-[et-pos/SCONJ]() (49; 1% instances), [et-pos/NOUN]()-[et-pos/ADV]() (34; 1% instances), [et-pos/AUX]()-[et-pos/SCONJ]() (20; 0% instances), [et-pos/PRON]()-[et-pos/ADV]() (14; 0% instances), [et-pos/ADP]()-[et-pos/SCONJ]() (9; 0% instances), [et-pos/NUM]()-[et-pos/SCONJ]() (6; 0% instances), [et-pos/VERB]()-[et-pos/CONJ]() (3; 0% instances), [et-pos/INTJ]()-[et-pos/SCONJ]() (2; 0% instances), [et-pos/PROPN]()-[et-pos/ADV]() (2; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (1; 0% instances), [et-pos/CONJ]()-[et-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	Kuidas	kuidas	ADV	D	_	2	mark	_	_
2	reageerida	reageerima	VERB	V	VerbForm=Inf	0	root	_	_
3	?	?	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 mark	color:blue
1	Süsimust	süsi_must	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
2	,	,	PUNCT	Z	_	5	punct	_	_
3	laineteta	laine	NOUN	S	Case=Abe|Number=Plur	4	nmod	_	_
4	vesi	vesi	NOUN	S	Case=Nom|Number=Sing	5	nsubj	_	_
5	läikis	läikima	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	nende	tema	PRON	P	Case=Gen|Number=Plur|Person=3|PronType=Prs	5	nmod	_	_
7	ümber	ümber	ADP	K	AdpType=Post	6	case	_	_
8	nagu	nagu	SCONJ	J	_	9	mark	_	_
9	nafta	nafta	NOUN	S	Case=Nom|Number=Sing	5	advcl	_	_
10	.	.	PUNCT	Z	_	5	punct	_	_

~~~


