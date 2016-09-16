

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Estonian)

This relation is universal.

58 nodes (0%) are attached to their parents as `list`.

30 instances of `list` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.10344827586207.

The following 14 pairs of parts of speech are connected with `list`: [et-pos/PROPN]()-[et-pos/PROPN]() (20; 34% instances), [et-pos/VERB]()-[et-pos/NOUN]() (9; 16% instances), [et-pos/VERB]()-[et-pos/ADJ]() (5; 9% instances), [et-pos/X]()-[et-pos/X]() (5; 9% instances), [et-pos/NOUN]()-[et-pos/NOUN]() (4; 7% instances), [et-pos/ADJ]()-[et-pos/ADJ]() (3; 5% instances), [et-pos/PROPN]()-[et-pos/NOUN]() (3; 5% instances), [et-pos/ADJ]()-[et-pos/NOUN]() (2; 3% instances), [et-pos/VERB]()-[et-pos/NUM]() (2; 3% instances), [et-pos/ADJ]()-[et-pos/ADV]() (1; 2% instances), [et-pos/NOUN]()-[et-pos/ADJ]() (1; 2% instances), [et-pos/NOUN]()-[et-pos/NUM]() (1; 2% instances), [et-pos/SYM]()-[et-pos/NOUN]() (1; 2% instances), [et-pos/VERB]()-[et-pos/ADV]() (1; 2% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 list	color:blue
1	Oletatakse	oletama	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	,	,	PUNCT	Z	_	11	punct	_	_
3	et	et	SCONJ	J	_	11	mark	_	_
4	suurema	suurem	ADJ	A	Case=Gen|Degree=Cmp|Number=Sing	6	amod	_	_
5	etnilise	etniline	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	6	amod	_	_
6	heterogeensuse	heterogeensus	NOUN	S	Case=Gen|Number=Sing	11	nmod	_	_
7	korral	korral	ADP	K	AdpType=Post	6	case	_	_
8	on	olema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
9	inimesed	inimene	NOUN	S	Case=Nom|Number=Plur	11	nsubj:cop	_	_
10	vähem	vähem	ADV	D	_	11	advmod	_	_
11	huvitatud	huvitatud	ADJ	A	Degree=Pos|Tense=Past|VerbForm=Part|Voice=Pass	1	ccomp	_	_
12	ümberjaotusest	ümber_jaotus	NOUN	S	Case=Ela|Number=Sing	11	nmod	_	_
13	ja	ja	CONJ	J	_	11	cc	_	_
14	sissetulekute	sisse_tulek	NOUN	S	Case=Gen|Number=Plur	15	nmod	_	_
15	ebavõrdsus	eba_võrdsus	NOUN	S	Case=Nom|Number=Sing	18	nsubj:cop	_	_
16	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	cop	_	_
17	seega	seega	ADV	D	_	18	advmod	_	_
18	suurem	suurem	ADJ	A	Case=Nom|Degree=Cmp|Number=Sing	11	conj	_	_
19	(	(	PUNCT	Z	_	20	punct	_	_
20	Clarke	Clarke	PROPN	S	Case=Nom|Number=Sing	18	parataxis	_	_
21	,	,	PUNCT	Z	_	20	punct	_	_
22	Xu	Xu	PROPN	S	Case=Nom|Number=Sing	20	list	_	_
23	ja	ja	CONJ	J	_	20	cc	_	_
24	Zou	Zou	PROPN	S	Case=Nom|Number=Sing	20	foreign	_	_
25	,	,	PUNCT	Z	_	20	punct	_	_
26	2003	2003	NUM	N	Case=Nom|Number=Sing|NumForm=Digit|NumType=Card	24	nummod	_	_
27	)	)	PUNCT	Z	_	20	punct	_	_
28	.	.	PUNCT	Z	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 list	color:blue
1	a	a	NOUN	Y	Abbr=Yes	5	list	_	_
2	)	)	PUNCT	Z	_	5	punct	_	_
3	mulle	mina	PRON	P	Case=All|Number=Sing|Person=1|PronType=Prs	5	nmod	_	_
4	ei	ei	AUX	V	Mood=Ind|Negative=Neg|VerbForm=Fin	5	neg	_	_
5	meeldi	meeldima	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	teha	tegema	VERB	V	VerbForm=Inf	5	csubj	_	_
7	seda	see	PRON	P	Case=Par|Number=Sing|PronType=Dem	6	dobj	_	_
8	,	,	PUNCT	Z	_	11	punct	_	_
9	mida	mis	PRON	P	Case=Par|Number=Sing|PronType=Int,Rel	11	dobj	_	_
10	kõik	kõik	PRON	P	Case=Nom|Number=Plur|PronType=Tot	11	nsubj	_	_
11	teevad	tegema	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	_
12	;	;	PUNCT	Z	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 list	color:blue
1	1.	1.	ADJ	N	Case=Par|Number=Plur|NumForm=Digit|NumType=Ord	4	list	_	_
2	Kas	kas	ADV	D	_	4	advmod	_	_
3	ülikoole	üli_kool	NOUN	S	Case=Par|Number=Plur	4	nsubj	_	_
4	on	olema	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	liiga	liiga	ADV	D	_	6	advmod	_	_
6	palju	palju	ADV	D	_	4	advmod	_	_
7	?	?	PUNCT	Z	_	4	punct	_	_

~~~


