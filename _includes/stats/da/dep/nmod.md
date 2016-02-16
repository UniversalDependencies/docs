

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:loc](), [nmod:poss](), [nmod:tmod]().

11144 nodes (11%) are attached to their parents as `nmod`.

9528 instances of `nmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.62921751615219.

The following 55 pairs of parts of speech are connected with `nmod`: [da-pos/VERB]()-[da-pos/NOUN]() (3972; 36% instances), [da-pos/NOUN]()-[da-pos/NOUN]() (3375; 30% instances), [da-pos/ADV]()-[da-pos/NOUN]() (649; 6% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (622; 6% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (482; 4% instances), [da-pos/VERB]()-[da-pos/PROPN]() (388; 3% instances), [da-pos/VERB]()-[da-pos/PRON]() (306; 3% instances), [da-pos/PRON]()-[da-pos/NOUN]() (133; 1% instances), [da-pos/NOUN]()-[da-pos/NUM]() (128; 1% instances), [da-pos/NOUN]()-[da-pos/PRON]() (118; 1% instances), [da-pos/PRON]()-[da-pos/PRON]() (96; 1% instances), [da-pos/ADV]()-[da-pos/PROPN]() (85; 1% instances), [da-pos/VERB]()-[da-pos/ADJ]() (81; 1% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (79; 1% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (72; 1% instances), [da-pos/ADJ]()-[da-pos/PRON]() (69; 1% instances), [da-pos/ADV]()-[da-pos/PRON]() (64; 1% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (59; 1% instances), [da-pos/X]()-[da-pos/NOUN]() (37; 0% instances), [da-pos/ADJ]()-[da-pos/PROPN]() (36; 0% instances), [da-pos/ADP]()-[da-pos/PROPN]() (30; 0% instances), [da-pos/CONJ]()-[da-pos/NOUN]() (28; 0% instances), [da-pos/NUM]()-[da-pos/X]() (26; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (22; 0% instances), [da-pos/NUM]()-[da-pos/NOUN]() (22; 0% instances), [da-pos/ADP]()-[da-pos/NOUN]() (18; 0% instances), [da-pos/ADJ]()-[da-pos/X]() (16; 0% instances), [da-pos/PRON]()-[da-pos/X]() (15; 0% instances), [da-pos/ADV]()-[da-pos/ADJ]() (14; 0% instances), [da-pos/AUX]()-[da-pos/NOUN]() (13; 0% instances), [da-pos/PRON]()-[da-pos/ADJ]() (10; 0% instances), [da-pos/PRON]()-[da-pos/PROPN]() (9; 0% instances), [da-pos/NOUN]()-[da-pos/X]() (8; 0% instances), [da-pos/ADJ]()-[da-pos/ADJ]() (7; 0% instances), [da-pos/CONJ]()-[da-pos/PRON]() (5; 0% instances), [da-pos/PART]()-[da-pos/NOUN]() (5; 0% instances), [da-pos/PROPN]()-[da-pos/PRON]() (5; 0% instances), [da-pos/CONJ]()-[da-pos/PROPN]() (4; 0% instances), [da-pos/INTJ]()-[da-pos/NOUN]() (4; 0% instances), [da-pos/NUM]()-[da-pos/PROPN]() (4; 0% instances), [da-pos/SYM]()-[da-pos/NOUN]() (4; 0% instances), [da-pos/DET]()-[da-pos/NOUN]() (3; 0% instances), [da-pos/INTJ]()-[da-pos/PRON]() (3; 0% instances), [da-pos/NUM]()-[da-pos/PRON]() (3; 0% instances), [da-pos/PART]()-[da-pos/PRON]() (3; 0% instances), [da-pos/ADV]()-[da-pos/X]() (2; 0% instances), [da-pos/INTJ]()-[da-pos/PROPN]() (2; 0% instances), [da-pos/ADP]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/ADP]()-[da-pos/PRON]() (1; 0% instances), [da-pos/AUX]()-[da-pos/PRON]() (1; 0% instances), [da-pos/AUX]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/CONJ]()-[da-pos/ADJ]() (1; 0% instances), [da-pos/DET]()-[da-pos/PRON]() (1; 0% instances), [da-pos/VERB]()-[da-pos/SYM]() (1; 0% instances), [da-pos/X]()-[da-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 nmod	color:blue
1	Kelds	Keld	PROPN	_	Case=Gen	2	nmod:poss	_	_
2	oplæg	oplæg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	4	nsubjpass	_	_
3	blev	blive	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	auxpass	_	_
4	fulgt	følge	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	9	ccomp	_	_
5	100	100	NUM	_	NumType=Card	6	nummod	_	_
6	procent	procent	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	4	nmod	_	_
7	,	,	PUNCT	_	_	4	punct	_	_
8	"	"	PUNCT	_	_	4	punct	_	_
9	pointerer	pointere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	Susan	Susan	PROPN	_	_	9	nsubj	_	_
11	Mackensie	Mackensie	PROPN	_	_	10	name	_	_
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


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
6	ansvar	ansvar	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	dobj	_	_
7	for	for	ADP	_	AdpType=Prep	8	case	_	_
8	mordene	mord	NOUN	_	Definite=Def|Gender=Neut|Number=Plur	6	nmod	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	Skrab	skrabe	VERB	_	Mood=Imp|VerbForm=Fin	0	root	_	_
2	kernerne	kerne	NOUN	_	Definite=Def|Gender=Com|Number=Plur	1	dobj	_	_
3	ud	ud	ADV	_	_	1	nmod:loc	_	_
4	af	af	ADP	_	AdpType=Prep	5	case	_	_
5	agurk	agurk	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	3	nmod	_	_
6	,	,	PUNCT	_	_	1	punct	_	_
7	men	men	CONJ	_	_	1	cc	_	_
8	ikke	ikke	ADV	_	_	7	neg	_	_
9	af	af	ADP	_	AdpType=Prep	10	case	_	_
10	courgette	courgette	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	nmod	_	_
11	.	.	PUNCT	_	_	1	punct	_	_

~~~


