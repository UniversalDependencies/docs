

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Turkish)

This relation is universal.

2043 nodes (4%) are attached to their parents as `det`.

2039 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18795888399413.

The following 33 pairs of parts of speech are connected with `det`: [tr-pos/NOUN]()-[tr-pos/NUM]() (835; 41% instances), [tr-pos/NOUN]()-[tr-pos/DET]() (739; 36% instances), [tr-pos/ADJ]()-[tr-pos/NUM]() (121; 6% instances), [tr-pos/ADJ]()-[tr-pos/DET]() (87; 4% instances), [tr-pos/NOUN]()-[tr-pos/ADJ]() (76; 4% instances), [tr-pos/ADJ]()-[tr-pos/ADJ]() (29; 1% instances), [tr-pos/NOUN]()-[tr-pos/PRON]() (29; 1% instances), [tr-pos/VERB]()-[tr-pos/NUM]() (29; 1% instances), [tr-pos/VERB]()-[tr-pos/DET]() (25; 1% instances), [tr-pos/ADJ]()-[tr-pos/PRON]() (10; 0% instances), [tr-pos/VERB]()-[tr-pos/ADJ]() (6; 0% instances), [tr-pos/ADP]()-[tr-pos/DET]() (5; 0% instances), [tr-pos/PROPN]()-[tr-pos/DET]() (5; 0% instances), [tr-pos/VERB]()-[tr-pos/PRON]() (5; 0% instances), [tr-pos/ADP]()-[tr-pos/NUM]() (4; 0% instances), [tr-pos/NOUN]()-[tr-pos/NOUN]() (4; 0% instances), [tr-pos/NUM]()-[tr-pos/DET]() (4; 0% instances), [tr-pos/ADJ]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/PRON]()-[tr-pos/ADJ]() (3; 0% instances), [tr-pos/PRON]()-[tr-pos/DET]() (3; 0% instances), [tr-pos/PRON]()-[tr-pos/PRON]() (3; 0% instances), [tr-pos/VERB]()-[tr-pos/NOUN]() (3; 0% instances), [tr-pos/ADV]()-[tr-pos/DET]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/NOUN]() (2; 0% instances), [tr-pos/CONJ]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/PROPN]()-[tr-pos/NUM]() (2; 0% instances), [tr-pos/ADV]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/CONJ]()-[tr-pos/PRON]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/ADP]() (1; 0% instances), [tr-pos/NOUN]()-[tr-pos/VERB]() (1; 0% instances), [tr-pos/NUM]()-[tr-pos/ADJ]() (1; 0% instances), [tr-pos/PRON]()-[tr-pos/NUM]() (1; 0% instances), [tr-pos/VERB]()-[tr-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Bir	bir	NUM	ANum	NumType=Card	2	det	_	_
2	taksi	taksi	NOUN	Noun	Case=Nom|Number=Sing|Person=3	3	dobj	_	_
3	bulduk	bul	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Plur|Person=1|Tense=Past	0	root	_	_
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ama	ama	CONJ	Conj	_	5	conj	_	_
2	dedemle	dede	NOUN	Noun	Case=Ins|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=1	5	nmod	_	_
3	her	her	DET	Det	_	4	det	_	_
4	konuda	konu	NOUN	Noun	Case=Loc|Number=Sing|Person=3	5	nmod	_	_
5	anlaşamıyoruz	anlaş	VERB	Verb	Aspect=Prog|Mood=Abil|Negative=Neg|Number=Plur|Person=1|Register=Inf|Tense=Pres	0	root	_	_
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Nasıl	nasıl	ADV	Adverb	_	3	advmod	_	_
2	bir	bir	NUM	ANum	NumType=Card	3	det	_	_
3	kadın	kadın	ADJ	NAdj	Case=Nom|Number=Sing|Person=3	7	dobj	_	_
4	o	o	PRON	Pers	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
5	?	?	PUNCT	Punc	_	7	punct	_	_
6	diye	diye	ADP	PCNom	_	3	case	_	_
7	sordum	sor	VERB	Verb	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Past	0	root	_	_
8	.	.	PUNCT	Punc	_	7	punct	_	_

~~~


