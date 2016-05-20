

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:quant]().

18619 nodes (8%) are attached to their parents as `advmod`.

13503 instances of `advmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.9149256136205.

The following 13 pairs of parts of speech are connected with `advmod`: [et-pos/VERB]()-[et-pos/ADV]() (10838; 58% instances), [et-pos/ADJ]()-[et-pos/ADV]() (2793; 15% instances), [et-pos/NOUN]()-[et-pos/ADV]() (2596; 14% instances), [et-pos/ADV]()-[et-pos/ADV]() (1116; 6% instances), [et-pos/PRON]()-[et-pos/ADV]() (456; 2% instances), [et-pos/NUM]()-[et-pos/ADV]() (383; 2% instances), [et-pos/PROPN]()-[et-pos/ADV]() (304; 2% instances), [et-pos/SCONJ]()-[et-pos/ADV]() (67; 0% instances), [et-pos/ADP]()-[et-pos/ADV]() (48; 0% instances), [et-pos/AUX]()-[et-pos/ADV]() (14; 0% instances), [et-pos/SYM]()-[et-pos/ADV]() (2; 0% instances), [et-pos/CONJ]()-[et-pos/ADV]() (1; 0% instances), [et-pos/INTJ]()-[et-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 advmod	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
1	Selle	see	PRON	P	Case=Gen|Number=Sing|PronType=Dem	3	nmod	_	_
2	üle	üle	ADP	K	AdpType=Post	1	case	_	_
3	oli	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	tal	tema	PRON	P	Case=Ade|Number=Sing|Person=3|PronType=Prs	3	nmod	_	_
5	eriti	eriti	ADV	D	_	6	advmod	_	_
6	suur	suur	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	7	amod	_	_
7	rõõm	rõõm	NOUN	S	Case=Nom|Number=Sing	3	nsubj	_	_
8	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 advmod	color:blue
1	Jälle	jälle	ADV	D	_	4	advmod	_	_
2	üks	üks	NUM	N	Case=Nom|Number=Sing|NumForm=Letter|NumType=Card	4	nummod	_	_
3	piinarikas	piina_rikas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	öö	öö	NOUN	S	Case=Nom|Number=Sing	0	root	_	_
5	!	!	PUNCT	Z	_	4	punct	_	_

~~~


