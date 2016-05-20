

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

1679 nodes (3%) are attached to their parents as `acl`.

1671 instances of `acl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42882668254914.

The following 11 pairs of parts of speech are connected with `acl`: [tr-pos/NOUN]()-[tr-pos/VERB]() (1091; 65% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (307; 18% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (139; 8% instances), [tr-pos/PROPN]()-[tr-pos/VERB]() (110; 7% instances), [tr-pos/PRON]()-[tr-pos/VERB]() (13; 1% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (9; 1% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (4; 0% instances), [tr-pos/CONJ]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/PUNCT]()-[tr-pos/VERB]() (2; 0% instances), [tr-pos/DET]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 acl	color:blue
1	Cumhurbaşkanı	cumhurbaşkanı	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	nmod	_	_
2	ile	ile	CONJ	Conj	_	3	cc	_	_
3	sürtüşen	sürtüş	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part	5	acl	_	_
4	bir	bir	NUM	ANum	NumType=Card	5	det	_	_
5	iktidar	iktidar	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound:lvc	_	_
6	olmak	ol	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Ger	7	ccomp	_	_
7	istemiyoruz	iste	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Neg|Number=Plur|Person=1|Register=Inf|Tense=Pres	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 acl	color:blue
1	babasına	baba	NOUN	Noun	Case=Dat|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	3	nmod	_	_
2	yemek	yemek	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	dobj	_	_
3	götürdük	götür	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Past	5	dobj	_	_
4	,	,	PUNCT	Punc	_	3	punct	_	_
5	dedi	de	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	Katana	katana	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
7	duyulur	duy	VERB	Verb	Aspect=Imp|Mood=Ind|Negative=Pos|Tense=Aor|VerbForm=Part|Voice=Pass	8	acl	_	_
8	duyulmaz	duy	VERB	Verb	Aspect=Imp|Mood=Ind|Negative=Neg|Tense=Aor|VerbForm=Part|Voice=Pass	10	acl	_	_
9	bir	bir	NUM	ANum	NumType=Card	10	det	_	_
10	sesle	ses	NOUN	Noun	Case=Ins|Number=Sing|Person=3	5	nmod	_	_
11	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 acl	color:blue
1	Atatürk'ün	Atatürk	PROPN	Prop	Case=Gen|Number=Sing|Person=3	4	nsubj	_	_
2	rakıyla	rakı	NOUN	Noun	Case=Ins|Number=Sing|Person=3	3	conj	_	_
3	leblebi	leblebi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	dobj	_	_
4	sevdiği	sev	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Negative=Pos|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	7	dobj	_	_
5	bilinen	bil	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	7	acl	_	_
6	bir	bir	NUM	ANum	NumType=Card	7	det	_	_
7	gerçek	gerçek	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


