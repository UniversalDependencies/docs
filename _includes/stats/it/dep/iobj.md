

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is universal.

390 nodes (0%) are attached to their parents as `iobj`.

304 instances of `iobj` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.40769230769231.

The following 4 pairs of parts of speech are connected with `iobj`: [it-pos/VERB]()-[it-pos/PRON]() (382; 98% instances), [it-pos/ADJ]()-[it-pos/PRON]() (6; 2% instances), [it-pos/AUX]()-[it-pos/PRON]() (1; 0% instances), [it-pos/NOUN]()-[it-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	"	"	PUNCT	FB	_	3	punct	_	SpaceAfter=No
2	Mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Clit	3	iobj	_	_
3	pare	parere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	che	che	SCONJ	CS	_	6	mark	_	_
5	siano	essere	VERB	V	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	proposte	proposta	NOUN	S	Gender=Fem|Number=Plur	3	csubj	_	_
7	serie	serio	ADJ	A	Gender=Fem|Number=Plur	6	amod	_	_
8	e	e	CONJ	CC	_	7	cc	_	_
9	condivisibili	condivisibile	ADJ	A	Number=Plur	7	conj	_	SpaceAfter=No
10	"	"	PUNCT	FB	_	3	punct	_	_
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Le	lo	PRON	PC	Gender=Fem|Person=3|PronType=Clit	3	iobj	_	_
2	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	simpatica	simpatico	ADJ	A	Gender=Fem|Number=Sing	0	root	_	_
4	Nicole	Nicole	PROPN	SP	_	3	nsubj	_	_
5	Kidman	Kidman	PROPN	SP	_	4	name	_	_
6	?	?	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 iobj	color:blue
1	Pur	pure	ADV	B	_	2	advmod	_	_
2	sapendo	sapere	VERB	V	VerbForm=Ger	17	acl	_	_
3	che	che	SCONJ	CS	_	5	mark	_	_
4	si	si	PRON	PC	Person=3|PronType=Clit	5	expl	_	_
5	tratta	trattare	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
6	soltanto	soltanto	ADV	B	_	10	advmod	_	_
7	di	di	ADP	E	_	10	case	_	_
8	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
9	piccolo	piccolo	ADJ	A	Gender=Masc|Number=Sing	10	amod	_	_
10	passo	passo	NOUN	S	Gender=Masc|Number=Sing	5	nmod	_	_
11	verso	verso	ADP	E	_	14	case	_	_
12	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
13	maggiore	maggiore	ADJ	A	Degree=Cmp|Number=Sing	14	amod	_	_
14	sicurezza	sicurezza	NOUN	S	Gender=Fem|Number=Sing	10	nmod	_	_
15	,	,	PUNCT	FF	_	2	punct	_	_
16	vi	vi	PRON	PC	Number=Plur|Person=2|PronType=Clit	17	iobj	_	_
17	invito	invito	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
18	a	a	ADP	E	_	19	mark	_	_
19	votare	votare	VERB	V	VerbForm=Inf	17	acl	_	_
20	a	a	ADP	E	_	21	case	_	_
21	favore	favore	NOUN	S	Gender=Masc|Number=Sing	19	nmod	_	_
22	di	di	ADP	E	_	24	case	_	_
23	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	24	det	_	_
24	relazione	relazione	NOUN	S	Gender=Fem|Number=Sing	21	nmod	_	_
25	.	.	PUNCT	FS	_	17	punct	_	_

~~~


