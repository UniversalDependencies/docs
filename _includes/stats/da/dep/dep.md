

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

77 nodes (0%) are attached to their parents as `dep`.

41 instances of `dep` (53%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.5974025974026.

The following 7 pairs of parts of speech are connected with `dep`: [da-pos/VERB]()-[da-pos/NOUN]() (58; 75% instances), [da-pos/VERB]()-[da-pos/PRON]() (12; 16% instances), [da-pos/SCONJ]()-[da-pos/NOUN]() (2; 3% instances), [da-pos/VERB]()-[da-pos/PROPN]() (2; 3% instances), [da-pos/ADJ]()-[da-pos/NOUN]() (1; 1% instances), [da-pos/ADJ]()-[da-pos/VERB]() (1; 1% instances), [da-pos/ADV]()-[da-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 dep	color:blue
1	Men	men	CONJ	_	_	0	root	_	_
2	som	som	ADP	_	PartType=Inf	1	case	_	_
3	sagt	sige	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	1	conj	_	_
4	:	:	PUNCT	_	_	3	punct	_	_
5	hendes	hendes	DET	_	Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
6	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	10	nsubj	_	_
7	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
8	ikke	ikke	ADV	_	_	10	neg	_	_
9	mine	min	DET	_	Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	10	det	_	_
10	kredse	kreds	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	3	dep	_	_
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 dep	color:blue
1	"	"	PUNCT	_	_	5	punct	_	_
2	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	ikke	ikke	ADV	_	_	5	neg	_	_
5	det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	dep	_	_
6	,	,	PUNCT	_	_	9	punct	_	_
7	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	9	nsubj	_	_
8	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	satse	satse	VERB	_	VerbForm=Inf|Voice=Act	2	acl:relcl	_	_
10	på	på	ADP	_	AdpType=Prep	9	mark	_	_
11	,	,	PUNCT	_	_	9	punct	_	_
12	"	"	PUNCT	_	_	5	punct	_	_
13	siger	sige	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
14	han	han	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
15	.	.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 dep	color:blue
1	Præcis	præcis	ADV	_	_	0	root	_	_
2	som	som	ADP	_	PartType=Inf	1	case	_	_
3	Morten	Morten	PROPN	_	_	8	nsubj	_	_
4	Olsen	Olsen	PROPN	_	_	3	name	_	_
5	før	før	SCONJ	_	_	8	mark	_	_
6	hver	hver	PRON	_	Gender=Com|Number=Sing|PronType=Ind	5	mark	_	_
7	Superliga-kamp	superliga-kamp	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	dep	_	_
8	våger	våge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	advcl	_	_
9	og	og	CONJ	_	_	8	cc	_	_
10	vogter	vogte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	_
11	over	over	ADP	_	AdpType=Prep	13	case	_	_
12	sin	sin	DET	_	Gender=Com|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	13	det	_	_
13	startopstilling	startopstilling	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	8	nmod	_	_
14	til	til	ADP	_	AdpType=Prep	16	mark	_	_
15	almindelig	almindelig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	16	amod	_	_
16	undren	undre	VERB	_	Definite=Ind|Gender=Com|Number=Sing|VerbForm=Ger	8	advcl	_	_
17	og	og	CONJ	_	_	16	cc	_	_
18	irritation	irritation	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	16	conj	_	_
19	for	for	ADP	_	AdpType=Prep	21	case	_	_
20	Brøndbys	Brøndby	PROPN	_	Case=Gen	21	nmod:poss	_	_
21	tilskuer-kunder	tilskuer-kunde	NOUN	_	Definite=Ind|Gender=Com|Number=Plur	16	nmod	_	_
22	.	.	PUNCT	_	_	1	punct	_	_

~~~


