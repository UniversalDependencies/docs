

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.71428571428571.

The following 4 pairs of parts of speech are connected with `csubj`: [tr-pos/VERB]()-[tr-pos/NOUN]() (3; 43% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (2; 29% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (1; 14% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 csubj	color:blue
1	Sınıfta	sınıf	NOUN	Noun	Case=Loc|Number=Sing|Person=3	5	obl	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	det	_	_
3	uğultu	uğultu	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	csubj	_	_
4	dur	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	3	cop	_	_
5	gidiyor	git	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Ben	ben	PRON	Pers	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	csubj	_	_
2	se	i	AUX	Zero	Aspect=Perf|Mood=Cnd|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
3	korkuyordum	kork	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Polite=Infm|Tense=Past	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 csubj	color:blue
1	Gözlem	gözlem	NOUN	Noun	Case=Nom|Number=Sing|Person=3	7	nsubj	_	_
2	ve	ve	CCONJ	Conj	_	3	cc	_	_
3	deneyler	deney	NOUN	Noun	Case=Nom|Number=Plur|Person=3	1	conj	_	_
4	öngörüler	öngörü	NOUN	Noun	Case=Nom|Number=Plur|Person=3	5	nmod:poss	_	_
5	doğrultusunda	doğrultu	NOUN	Noun	Case=Loc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	7	obl	_	_
6	sonuçlar	sonuç	NOUN	Noun	Case=Nom|Number=Plur|Person=3	7	obj	_	_
7	verirse	ver	VERB	Verb	Aspect=Imp|Mood=Cnd|Number=Sing|Person=3|Polarity=Pos|Tense=Aor	11	nmod	_	SpaceAfter=No
8	,	,	PUNCT	Punc	_	7	punct	_	_
9	kuram	kuram	NOUN	Noun	Case=Nom|Number=Sing|Person=3	10	nsubj	_	_
10	kanıtlandı	kanıtla	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past|Voice=Pass	11	nsubj	_	_
11	denmez	de	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Aor|Voice=Pass	0	root	_	SpaceAfter=No
12	,	,	PUNCT	Punc	_	17	punct	_	_
13	kuram	kuram	NOUN	Noun	Case=Nom|Number=Sing|Person=3	15	nsubj	_	_
14	gözlemlerle	gözlem	NOUN	Noun	Case=Ins|Number=Plur|Person=3	15	obl	_	_
15	tutarlı	tutarlı	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	17	csubj	_	_
16	dır	i	AUX	Zero	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	15	cop	_	_
17	denir	de	VERB	Verb	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Aor|Voice=Pass	11	conj	_	SpaceAfter=No
18	.	.	PUNCT	Punc	_	17	punct	_	_

~~~


