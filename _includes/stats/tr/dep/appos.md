

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

50 nodes (0%) are attached to their parents as `appos`.

31 instances of `appos` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.22.

The following 4 pairs of parts of speech are connected with `appos`: [tr-pos/PROPN]()-[tr-pos/NOUN]() (25; 50% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (22; 44% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (2; 4% instances), [tr-pos/PRON]()-[tr-pos/NOUN]() (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 appos	color:blue
1	Ağbisi	ağbi	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	2	appos	_	_
2	Firuz	Firuz	PROPN	Prop	Case=Nom|Number=Sing|Person=3	5	nsubj	_	_
3	,	,	PUNCT	Punc	_	5	punct	_	_
4	savcı	savcı	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	dobj	_	_
5	olmuş	ol	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past	0	root	_	_
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Kutup	kutup	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	nmod:poss	_	_
2	porsuğunu	porsuk	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	11	dobj	_	_
3	(	(	PUNCT	Punc	_	11	punct	_	_
4	Gulo	gulo	NOUN	Noun	Case=Nom|Number=Sing|Person=3	5	nmod	_	_
5	gulo	gulo	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	nmod	_	_
6	l	l	NOUN	Noun	Case=Nom|Number=Sing|Person=3	2	appos	_	_
7	.	.	PUNCT	Punc	_	11	punct	_	_
8	)	)	PUNCT	Punc	_	11	punct	_	_
9	bu	bu	DET	Det	_	10	det	_	_
10	adla	ad	NOUN	Noun	Case=Ins|Number=Sing|Person=3	11	nmod	_	_
11	anıyorlardı	an	VERB	Verb	Aspect=Prog|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Register=Inf|Tense=Past	0	root	_	_
12	.	.	PUNCT	Punc	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 appos	color:blue
1	Bu	bu	DET	Det	_	2	det	_	_
2	savların	sav	NOUN	Noun	Case=Gen|Number=Plur|Person=3	3	nmod:poss	_	_
3	hepsinin	hepsi	PRON	Quant	Case=Gen|Number=Plur|Number[psor]=Plur|Person=3|Person[psor]=3|PronType=Ind	4	nmod:poss	_	_
4	yanlışlığı	yanlışlık	NOUN	Noun	Case=Nom|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	8	nsubj	_	_
5	(	(	PUNCT	Punc	_	8	punct	_	_
6	fallacies	fallacies	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	appos	_	_
7	)	)	PUNCT	Punc	_	8	punct	_	_
8	gösterilmiş	göster	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Past|Voice=Pass	12	conj	_	_
9	,	,	PUNCT	Punc	_	8	punct	_	_
10	idealist	idealist	ADJ	Adj	_	11	amod	_	_
11	dizgeler	dizge	NOUN	Noun	Case=Nom|Number=Plur|Person=3	12	nsubj	_	_
12	yadsınmıştır	yadsı	VERB	Verb	Aspect=Perf|Evidentiality=Nfh|Mood=Gen|Negative=Pos|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
13	(	(	PUNCT	Punc	_	12	punct	_	_
14	refuted	refuted	NOUN	Noun	Case=Nom|Number=Sing|Person=3	12	appos	_	_
15	)	)	PUNCT	Punc	_	12	punct	_	_
16	.	.	PUNCT	Punc	_	12	punct	_	_

~~~


