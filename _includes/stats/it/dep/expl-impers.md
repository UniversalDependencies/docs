

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Italian)

This relation is a language-specific subtype of [expl]().

629 nodes (0%) are attached to their parents as `expl:impers`.

629 instances of `expl:impers` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.37042925278219.

The following 3 pairs of parts of speech are connected with `expl:impers`: [it-pos/VERB]()-[it-pos/PRON]() (624; 99% instances), [it-pos/AUX]()-[it-pos/PRON]() (4; 1% instances), [it-pos/ADJ]()-[it-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 expl:impers	color:blue
1	È	essere	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	stata	essere	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	cop	_	_
3	quello	quello	PRON	PD	Gender=Masc|Number=Sing|PronType=Dem	0	root	_	_
4	che	che	PRON	PR	PronType=Rel	7	dobj	_	_
5	ci	ci	PRON	PC	PronType=Clit	7	advmod	_	_
6	si	si	PRON	PC	Person=3|PronType=Clit	7	expl:impers	_	_
7	attendeva	attendere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	acl:relcl	_	_
8	:	:	PUNCT	FC	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl:impers	color:blue
1	Cosa	cosa	PRON	PQ	Number=Sing|PronType=Int	4	dobj	_	_
2	si	si	PRON	PC	Person=3|PronType=Clit	3	expl:impers	_	_
3	può	potere	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
4	trovare	trovare	VERB	V	VerbForm=Inf	0	root	_	_
5	a	a	ADP	E	_	8	case	_	_
6	il	il	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	"	"	PUNCT	FB	_	8	punct	_	_
8	Chester	Chester	PROPN	SP	_	4	nmod	_	_
9	Beatty	Beatty	PROPN	SP	_	8	name	_	_
10	"	"	PUNCT	FB	_	8	punct	_	_
11	?	?	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 expl:impers	color:blue
1	In	in	ADP	E	_	3	case	_	_
2	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
3	discorsi	discorso	NOUN	S	Gender=Masc|Number=Plur	10	nmod	_	_
4	e	e	CONJ	CC	_	3	cc	_	_
5	in	in	ADP	E	_	7	case	_	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	saggi	saggio	NOUN	S	Gender=Masc|Number=Plur	3	conj	_	_
8	si	si	PRON	PC	Person=3|PronType=Clit	10	expl:impers	_	_
9	è	essere	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	_
10	soliti	solito	ADJ	A	Gender=Masc|Number=Plur	0	root	_	_
11	ridur	ridurre	VERB	V	VerbForm=Inf	10	xcomp	_	_
12	lo	lo	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Clit	11	dobj	_	_
13	ormai	ormai	ADV	B	_	11	advmod	_	_
14	a	a	ADP	E	_	17	case	_	_
15	una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
16	sola	solo	ADJ	A	Gender=Fem|Number=Sing	17	amod	_	_
17	parola	parola	NOUN	S	Gender=Fem|Number=Sing	11	nmod	_	_
18	.	.	PUNCT	FS	_	10	punct	_	_

~~~


