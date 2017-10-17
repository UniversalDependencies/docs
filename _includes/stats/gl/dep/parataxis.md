

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

40 nodes (0%) are attached to their parents as `parataxis`.

35 instances of `parataxis` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 13.35.

The following 16 pairs of parts of speech are connected with `parataxis`: [gl-pos/VERB]()-[gl-pos/VERB]() (18; 45% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (4; 10% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (3; 8% instances), [gl-pos/ADJ]()-[gl-pos/NOUN]() (2; 5% instances), [gl-pos/NOUN]()-[gl-pos/ADV]() (2; 5% instances), [gl-pos/ADJ]()-[gl-pos/PRON]() (1; 3% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (1; 3% instances), [gl-pos/ADV]()-[gl-pos/NOUN]() (1; 3% instances), [gl-pos/NOUN]()-[gl-pos/PROPN]() (1; 3% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (1; 3% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (1; 3% instances), [gl-pos/PROPN]()-[gl-pos/PROPN]() (1; 3% instances), [gl-pos/PROPN]()-[gl-pos/VERB]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/ADV]() (1; 3% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (1; 3% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 parataxis	color:blue
1	Algúns	algún	PRON	Inmp	Gender=Masc|Number=Plur|PronType=Ind	2	nsubj	_	_
2	acadan	acadar	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	fama	fama	NOUN	Scfs	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	Q,	_	2	punct	_	_
6	parecen	parecer	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
7	definitivos	definitivo	ADJ	A0mp	Gender=Masc|Number=Plur	6	xcomp	_	_
8	e	e	CCONJ	Cc	_	15	cc	_	_
9	a	a	ADP	P	AdpType=Prep	15	case	_	_
10	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	fixed	_	_
11	cabo	cabo	NOUN	Scms	Gender=Masc|Number=Sing	9	fixed	_	_
12	de	de	ADP	P	AdpType=Prep	9	fixed	_	_
13	os	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	anos	ano	NOUN	Scmp	Gender=Masc|Number=Plur	15	obl	_	_
15	esvaen	esvaer	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	conj	_	_
16	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	15	expl	_	_
17	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	Xente	xente	NOUN	Scfs	Gender=Fem|Number=Sing	5	parataxis	_	_
2	nova	novo	ADJ	A0fs	Gender=Fem|Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	Q,	_	1	punct	_	_
4	como	como	ADV	Wr	PronType=Rel	5	advmod	_	_
5	dicía	dicir	VERB	Vii30s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
6	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	anuncio	anuncio	NOUN	Scms	Gender=Masc|Number=Sing	5	nsubj	_	SpaceAfter=No
8	,	,	PUNCT	Q,	_	7	punct	_	_
9	sobradamente	sobradamente	ADV	Wm	_	10	advmod	_	_
10	preparada	preparado	ADJ	A0fs	Gender=Fem|Number=Sing	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	Q.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 parataxis	color:blue
1	"	"	PUNCT	Q"	_	10	punct	_	SpaceAfter=No
2	A	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	cultura	cultura	NOUN	Scfs	Gender=Fem|Number=Sing	10	nsubj	_	_
4	subsidiada	subsidiado	ADJ	A0fs	Gender=Fem|Number=Sing	3	amod	_	_
5	_	_	PUNCT	Q_	_	6	punct	_	SpaceAfter=No
6	di	dicir	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	parataxis	_	SpaceAfter=No
7	_	_	PUNCT	Q_	_	6	punct	_	_
8	non	non	ADV	Wn	Polarity=Neg	10	advmod	_	_
9	é	ser	AUX	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	cultura	cultura	NOUN	Scfs	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	"	"	PUNCT	Q"	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	Q.	_	10	punct	_	_

~~~


