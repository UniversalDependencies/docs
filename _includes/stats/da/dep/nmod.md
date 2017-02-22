

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

4658 nodes (5%) are attached to their parents as `nmod`.

4106 instances of `nmod` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06032632030915.

The following 41 pairs of parts of speech are connected with `nmod`: [da-pos/NOUN]()-[da-pos/NOUN]() (2956; 63% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (560; 12% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (283; 6% instances), [da-pos/PRON]()-[da-pos/NOUN]() (121; 3% instances), [da-pos/NOUN]()-[da-pos/NUM]() (107; 2% instances), [da-pos/NOUN]()-[da-pos/PRON]() (102; 2% instances), [da-pos/PRON]()-[da-pos/PRON]() (88; 2% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (75; 2% instances), [da-pos/ADP]()-[da-pos/NOUN]() (52; 1% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (52; 1% instances), [da-pos/X]()-[da-pos/NOUN]() (34; 1% instances), [da-pos/ADP]()-[da-pos/PROPN]() (29; 1% instances), [da-pos/NUM]()-[da-pos/X]() (25; 1% instances), [da-pos/NUM]()-[da-pos/NOUN]() (20; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (20; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (18; 0% instances), [da-pos/PRON]()-[da-pos/X]() (15; 0% instances), [da-pos/AUX]()-[da-pos/NOUN]() (12; 0% instances), [da-pos/PRON]()-[da-pos/ADJ]() (9; 0% instances), [da-pos/PRON]()-[da-pos/PROPN]() (8; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (8; 0% instances), [da-pos/NOUN]()-[da-pos/X]() (7; 0% instances), [da-pos/ADP]()-[da-pos/PRON]() (5; 0% instances), [da-pos/NUM]()-[da-pos/PROPN]() (5; 0% instances), [da-pos/PROPN]()-[da-pos/PRON]() (5; 0% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (4; 0% instances), [da-pos/INTJ]()-[da-pos/NOUN]() (4; 0% instances), [da-pos/PART]()-[da-pos/NOUN]() (4; 0% instances), [da-pos/X]()-[da-pos/PROPN]() (4; 0% instances), [da-pos/INTJ]()-[da-pos/PRON]() (3; 0% instances), [da-pos/NUM]()-[da-pos/PRON]() (3; 0% instances), [da-pos/PART]()-[da-pos/PRON]() (3; 0% instances), [da-pos/SYM]()-[da-pos/NOUN]() (3; 0% instances), [da-pos/VERB]()-[da-pos/PROPN]() (3; 0% instances), [da-pos/ADV]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/DET]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/INTJ]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/PROPN]()-[da-pos/ADJ]() (2; 0% instances), [da-pos/ADP]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/AUX]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/VERB]()-[da-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod	color:blue
1	"	"	PUNCT	_	_	3	punct	_	_
2	Vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	fralægger	fralægge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	os	vi	PRON	_	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Prs	3	iobj	_	_
5	ethvert	enhver	DET	_	Gender=Neut|Number=Sing|PronType=Ind	6	det	_	_
6	ansvar	ansvar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	obj	_	_
7	for	for	ADP	_	AdpType=Prep	8	case	_	_
8	mordene	mord	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	6	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	Til	til	ADP	_	AdpType=Prep	2	case	_	_
2	orgie	orgie	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
3	hos	hos	ADP	_	AdpType=Prep	4	case	_	_
4	Søren	Søren	PROPN	_	_	2	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nmod	color:blue
1	Jens	Jens	PROPN	_	_	3	nmod:poss	_	_
2	Madsens	Madsen	PROPN	_	Case=Gen	1	flat	_	_
3	udvisning	udvisning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	9	nsubj	_	_
4	i	i	ADP	_	AdpType=Prep	7	case	_	_
5	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	43.	43.	ADJ	_	NumType=Ord	7	amod	_	_
7	minut	minut	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	diskutabel	diskutabel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


