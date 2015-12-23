

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:loc](), [nmod:tmod]().

1042 nodes (1%) are attached to their parents as `nmod:poss`.

835 instances of `nmod:poss` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.45201535508637.

The following 21 pairs of parts of speech are connected with `nmod:poss`: [da-pos/NOUN]()-[da-pos/NOUN]() (630; 60% instances), [da-pos/NOUN]()-[da-pos/PROPN]() (283; 27% instances), [da-pos/PROPN]()-[da-pos/NOUN]() (61; 6% instances), [da-pos/PROPN]()-[da-pos/PROPN]() (22; 2% instances), [da-pos/NOUN]()-[da-pos/ADJ]() (8; 1% instances), [da-pos/X]()-[da-pos/NOUN]() (7; 1% instances), [da-pos/NOUN]()-[da-pos/X]() (4; 0% instances), [da-pos/PRON]()-[da-pos/VERB]() (4; 0% instances), [da-pos/NOUN]()-[da-pos/NUM]() (3; 0% instances), [da-pos/NOUN]()-[da-pos/PRON]() (3; 0% instances), [da-pos/PROPN]()-[da-pos/X]() (3; 0% instances), [da-pos/CONJ]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/NOUN]()-[da-pos/VERB]() (2; 0% instances), [da-pos/PRON]()-[da-pos/NOUN]() (2; 0% instances), [da-pos/PRON]()-[da-pos/X]() (2; 0% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/ADJ]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/ADV]()-[da-pos/PROPN]() (1; 0% instances), [da-pos/PROPN]()-[da-pos/VERB]() (1; 0% instances), [da-pos/VERB]()-[da-pos/NOUN]() (1; 0% instances), [da-pos/X]()-[da-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	Toiletter	toilet	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
2	,	,	PUNCT	_	_	1	punct	_	_
3	gangarealer	gangareal	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	1	conj	_	_
4	,	,	PUNCT	_	_	1	punct	_	_
5	pædagogernes	pædagog	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Plur	6	nmod:poss	_	_
6	the-køkken	the-køkken	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	1	conj	_	_
7	og	og	CONJ	_	_	1	cc	_	_
8	så	så	ADV	_	_	9	advmod	_	_
9	videre	videre	ADV	_	_	1	conj	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 nmod:poss	color:blue
1	Fortsættelsen	fortsættelse	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	bygger	bygge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	-	-	PUNCT	_	_	2	punct	_	_
4	meget	meget	ADV	_	Degree=Pos	5	advmod	_	_
5	frit	frit	ADV	_	Degree=Pos	2	advmod	_	_
6	-	-	PUNCT	_	_	5	punct	_	_
7	på	på	ADP	_	AdpType=Prep	8	case	_	_
8	Carit	Carit	PROPN	_	_	2	nmod	_	_
9	Etlars	Etlar	PROPN	_	Case=Gen	8	name	_	_
10	Dronningens	dronning	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	8	nmod:poss	_	_
11	Vagtmester	vagtmester	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	10	nmod:poss	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


