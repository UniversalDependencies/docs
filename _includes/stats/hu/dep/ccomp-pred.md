

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hungarian)

This relation is a language-specific subtype of [ccomp]().
There are also 2 other language-specific subtypes of `ccomp`: [ccomp:obj](), [ccomp:obl]().

16 nodes (0%) are attached to their parents as `ccomp:pred`.

16 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.625.

The following 5 pairs of parts of speech are connected with `ccomp:pred`: [hu-pos/PRON]()-[hu-pos/VERB]() (6; 38% instances), [hu-pos/NOUN]()-[hu-pos/VERB]() (5; 31% instances), [hu-pos/PRON]()-[hu-pos/ADJ]() (2; 13% instances), [hu-pos/PRON]()-[hu-pos/PRON]() (2; 13% instances), [hu-pos/VERB]()-[hu-pos/VERB]() (1; 6% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	csak	csak	ADV	_	_	4	advmod:mode	_	_
4	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
5	:	:	PUNCT	_	_	4	punct	_	_
6	meg	meg	PART	_	_	11	compound:preverb	_	_
7	is	is	ADV	_	_	8	advmod:mode	_	_
8	tudja	tud	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:pred	_	_
9	-e	-e	ADV	_	PronType=Int	8	advmod:que	_	_
10	ott	ott	ADV	_	PronType=Dem	11	advmod:locy	_	_
11	tartani	tart	VERB	_	VerbForm=Inf|Voice=Act	8	xcomp	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	3	det	_	_
2	legáltalánosabb	általános	ADJ	_	Case=Nom|Degree=Sup|Number=Sing	3	amod:att	_	_
3	kritika	kritika	NOUN	_	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	_	_	3	punct	_	_
5	hogy	hogy	SCONJ	_	_	12	mark	_	_
6	a	a	DET	_	Definite=Def|PronType=Art	7	det	_	_
7	kormánynak	kormány	NOUN	_	Case=Gen|Number=Sing	12	nmod:att	_	_
8	nemhogy	nemhogy	CONJ	_	_	12	cc	_	_
9	katasztrófaelhárítási	katasztrófaelhárítási	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	10	amod:att	_	_
10	terve	terv	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	nem	nem	ADV	_	PronType=Neg	12	neg	_	_
12	volt	van	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp:pred	_	_
13	,	,	PUNCT	_	_	12	punct	_	_
14	de	de	CONJ	_	_	12	cc	_	_
15	a	a	DET	_	Definite=Def|PronType=Art	16	det	_	_
16	tragédia	tragédia	NOUN	_	Case=Nom|Number=Sing	17	nmod:att	_	_
17	bekövetkezte	bekövetkezte	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	20	nmod	_	_
18	után	után	ADP	_	_	17	case	_	_
19	sem	sem	CONJ	_	_	20	cc	_	_
20	állt	áll	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	_	_
21	a	a	DET	_	Definite=Def|PronType=Art	22	det	_	_
22	helyzet	helyzet	NOUN	_	Case=Nom|Number=Sing	23	nmod:att	_	_
23	magaslatán	magaslat	NOUN	_	Case=Sup|Number=Sing|Number[psor]=Sing|Person[psor]=3	20	nmod:obl	_	_
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp:pred	color:blue
1	A	a	DET	_	Definite=Def|PronType=Art	2	det	_	_
2	kérdés	kérdés	NOUN	_	Case=Nom|Number=Sing	4	nsubj	_	_
3	csak	csak	ADV	_	_	4	advmod:mode	_	_
4	az	az	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	0	root	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	hogy	hogy	SCONJ	_	_	7	mark	_	_
7	kivel	ki	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Int	4	ccomp:pred	_	_
8	és	és	CONJ	_	_	7	cc	_	_
9	mikor	mikor	ADV	_	PronType=Int	7	conj	_	_
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


