

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

4660 nodes (10%) are attached to their parents as `root`.

4660 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.48175965665236.

The following 13 pairs of parts of speech are connected with `root`: [tr-pos/ROOT]()-[tr-pos/VERB]() (3181; 68% instances), [tr-pos/ROOT]()-[tr-pos/NOUN]() (784; 17% instances), [tr-pos/ROOT]()-[tr-pos/ADJ]() (430; 9% instances), [tr-pos/ROOT]()-[tr-pos/PRON]() (70; 2% instances), [tr-pos/ROOT]()-[tr-pos/PROPN]() (50; 1% instances), [tr-pos/ROOT]()-[tr-pos/ADV]() (49; 1% instances), [tr-pos/ROOT]()-[tr-pos/PUNCT]() (33; 1% instances), [tr-pos/ROOT]()-[tr-pos/NUM]() (27; 1% instances), [tr-pos/ROOT]()-[tr-pos/CCONJ]() (18; 0% instances), [tr-pos/ROOT]()-[tr-pos/ADP]() (14; 0% instances), [tr-pos/ROOT]()-[tr-pos/DET]() (2; 0% instances), [tr-pos/ROOT]()-[tr-pos/AUX]() (1; 0% instances), [tr-pos/ROOT]()-[tr-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Ama	ama	CCONJ	Conj	_	4	conj	_	_
2	annemin	anne	NOUN	Noun	Case=Gen|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	3	nmod:poss	_	_
3	şartları	şart	NOUN	Noun	Case=Nom|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3	4	nsubj	_	_
4	vardı	var	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Kazada	kaza	NOUN	Noun	Case=Loc|Number=Sing|Person=3	4	nmod	_	_
2	dört	dört	NUM	ANum	NumType=Card	3	nummod	_	_
3	pilot	pilot	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
4	şehit	şehit	NOUN	Noun	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	düştü	düş	VERB	Verb	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Past	4	compound	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 5 root	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


