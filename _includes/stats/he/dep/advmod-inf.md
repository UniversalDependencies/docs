

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hebrew)

This relation is a language-specific subtype of [advmod]().
There are also 1 other language-specific subtypes of `advmod`: [advmod:phrase]().

16 nodes (0%) are attached to their parents as `advmod:inf`.

16 instances of `advmod:inf` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0625.

The following 2 pairs of parts of speech are connected with `advmod:inf`: [he-pos/NOUN]()-[he-pos/VERB]() (14; 88% instances), [he-pos/ADV]()-[he-pos/VERB]() (2; 13% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 advmod:inf	color:blue
1	עכשיו	_	ADV	ADV	_	2	advmod	_	_
2	עת	_	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	_
3	להרוג	_	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf	2	advmod:inf	_	_
4	.	_	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 advmod:inf	color:blue
1	ב	_	ADP	ADP	_	4	case	_	_
2	כל	_	DET	DET	Definite=Red	4	det	_	_
3	ה	_	SCONJ	SCONJ	_	4	mark	_	_
4	קשור	_	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1,2,3|VerbForm=Part	13	nmod	_	_
5	ל	_	ADP	ADP	_	6	case	_	_
6	סדרי	_	NOUN	NOUN	Definite=Red|Gender=Masc|Number=Plur	4	iobj	_	_
7	ה	_	DET	DET	PronType=Art	8	det:def	_	_
8	כניסה	_	NOUN	NOUN	Gender=Fem|Number=Sing	6	nmod:smixut	_	_
9	ו	_	CONJ	CONJ	_	8	cc	_	_
10	ה	_	DET	DET	PronType=Art	11	det:def	_	_
11	יציאה	_	NOUN	NOUN	Gender=Fem|Number=Sing	8	conj	_	_
12	,	_	PUNCT	PUNCT	_	13	punct	_	_
13	יש	_	VERB	VERB	HebExistential=True	0	root	_	_
14	ל	_	ADP	ADP	_	15	case	_	_
15	יוניוורסל	_	PROPN	PROPN	_	13	nmod	_	_
16	הרבה	_	DET	DET	Definite=Red	17	det	_	_
17	מה	_	ADV	ADV	PronType=Int	13	nsubj	_	_
18	לשפר	_	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf	17	advmod:inf	_	_
19	.	_	PUNCT	PUNCT	_	13	punct	_	_

~~~


