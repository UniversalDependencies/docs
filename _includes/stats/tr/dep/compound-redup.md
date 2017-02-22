

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is a language-specific subtype of [compound]().
There are also 1 other language-specific subtypes of `compound`: [compound:lvc]().

163 nodes (0%) are attached to their parents as `compound:redup`.

162 instances of `compound:redup` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0920245398773.

The following 20 pairs of parts of speech are connected with `compound:redup`: [tr-pos/ADJ]()-[tr-pos/ADJ]() (59; 36% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (47; 29% instances), [tr-pos/VERB]()-[tr-pos/VERB]() (19; 12% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (7; 4% instances), [tr-pos/X]()-[tr-pos/X]() (7; 4% instances), [tr-pos/PRON]()-[tr-pos/PRON]() (6; 4% instances), [tr-pos/ADV]()-[tr-pos/ADJ]() (3; 2% instances), [tr-pos/ADJ]()-[tr-pos/VERB]() (2; 1% instances), [tr-pos/NUM]()-[tr-pos/NUM]() (2; 1% instances), [tr-pos/ADJ]()-[tr-pos/X]() (1; 1% instances), [tr-pos/ADP]()-[tr-pos/VERB]() (1; 1% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (1; 1% instances), [tr-pos/ADV]()-[tr-pos/VERB]() (1; 1% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (1; 1% instances), [tr-pos/NOUN]()-[tr-pos/X]() (1; 1% instances), [tr-pos/PROPN]()-[tr-pos/ADJ]() (1; 1% instances), [tr-pos/PROPN]()-[tr-pos/NOUN]() (1; 1% instances), [tr-pos/PROPN]()-[tr-pos/PROPN]() (1; 1% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (1; 1% instances), [tr-pos/X]()-[tr-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 compound:redup	color:blue
1	Belli	belli	ADJ	Adj	_	8	amod	_	_
2	ki	ki	CCONJ	Conj	_	1	mark	_	_
3	kız	kız	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	8	nsubj	_	_
4	dört	dört	NUM	NNum	Case=Nom|Number=Sing|NumType=Card|Person=3	8	obj	_	_
5	gününü	gün	NOUN	Noun	Case=Acc|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3	4	compound	_	_
6	doğru	doğru	ADJ	Adj	_	8	amod	_	_
7	dürüst	dürüst	ADJ	Adj	_	6	compound:redup	_	_
8	geçirmişti	geçir	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pqp	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:redup	color:blue
1	Koşa	koşa	ADJ	Adj	_	6	amod	_	_
2	koşa	koş	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	1	compound:redup	_	SpaceAfter=No
3	,	,	PUNCT	Punc	_	4	punct	_	_
4	nefes	nefes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	1	conj	_	_
5	nefese	nefes	NOUN	Noun	Case=Dat|Number=Sing|Person=3	4	compound:redup	_	_
6	geldiniz	gel	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Past	0	root	_	_
7	kıraathaneye	kıraathane	NOUN	Noun	Case=Dat|Number=Sing|Person=3	6	obl	_	SpaceAfter=No
8	...	...	PUNCT	Punc	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:redup	color:blue
1	El	el	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	vurdum	vur	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Past	1	compound	_	_
3	basa	bas	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	1	nmod	_	_
4	basa	bas	VERB	Verb	Aspect=Perf|Mood=Opt|Number=Sing|Person=3|Polarity=Pos|Tense=Pres	3	compound:redup	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


