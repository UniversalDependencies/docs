

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Catalan)

This relation is a language-specific subtype of [auxpass]().

512 nodes (0%) are attached to their parents as `auxpass:reflex`.

499 instances of `auxpass:reflex` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.572265625.

The following 3 pairs of parts of speech are connected with `auxpass:reflex`: [ca-pos/VERB]()-[ca-pos/PRON]() (502; 98% instances), [ca-pos/ADJ]()-[ca-pos/PRON]() (7; 1% instances), [ca-pos/NOUN]()-[ca-pos/PRON]() (3; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 auxpass:reflex	color:blue
1	No	no	ADV	ADV	Negative=Neg	3	neg	_	_
2	es	es	PRON	PRON	_	3	auxpass:reflex	_	_
3	treballarà	treballar	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
4	el	el	DET	DET	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	dissabte	dissabte	NOUN	NOUN	AdvType=Tim	3	nmod	_	_
6	i	i	CONJ	CONJ	_	3	cc	_	_
7	es	es	PRON	PRON	_	8	dobj	_	_
8	reduiran	reduir	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	3	conj	_	_
9	les	el	DET	DET	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	extres	extra	ADJ	ADJ	Number=Plur	8	nsubj	_	_
11	.	.	PUNCT	PUNCT	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 auxpass:reflex	color:blue
1	Potser	potser	ADV	ADV	_	6	advmod	_	_
2	s'	es	PRON	PRON	_	6	auxpass:reflex	_	_
3	hagi	haver	AUX	AUX	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
4	de	de	ADP	ADP	AdpType=Prep	6	case	_	_
5	ser	ser	AUX	AUX	VerbForm=Inf	6	cop	_	_
6	comprensiu	comprensiu	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
7	amb	amb	ADP	ADP	AdpType=Prep	9	case	_	_
8	els	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	diputats	diputat	NOUN	NOUN	Gender=Masc|Number=Plur	6	nmod	_	_
10	.	.	PUNCT	PUNCT	PunctType=Peri	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 auxpass:reflex	color:blue
1	La	el	DET	DET	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	platea	platea	NOUN	NOUN	Gender=Fem|Number=Sing	20	nsubj	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
4	que	que	PRON	PRON	PronType=Rel	5	nsubj	_	_
5	sap	saber	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	acl	_	_
6	els	el	DET	DET	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	8	det	_	_
7	mals	mal	ADJ	ADJ	Gender=Masc|Number=Plur	8	amod	_	_
8	moments	moment	NOUN	NOUN	Gender=Masc|Number=Plur	5	dobj	_	_
9	que	que	PRON	PRON	PronType=Rel	11	nsubj	_	_
10	es	es	PRON	PRON	_	11	dobj	_	_
11	passen	passar	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
12	quan	quan	SCONJ	SCONJ	_	16	mark	_	_
13	s'	es	PRON	PRON	_	16	auxpass:reflex	_	_
14	és	ser	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
15	un	un	DET	DET	Gender=Masc|Number=Sing|PronType=Ind	16	det	_	_
16	incomprès	incomprès	NOUN	NOUN	Gender=Masc|Number=Sing	11	advcl	_	_
17	,	,	PUNCT	PUNCT	PunctType=Comm	5	punct	_	_
18	va	anar	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	_
19	deixar	deixar	AUX	AUX	VerbForm=Inf	20	aux	_	_
20	anar	anar	VERB	VERB	VerbForm=Inf	0	root	_	_
21	uns	un	DET	DET	Gender=Masc|Number=Plur|PronType=Ind	22	det	_	_
22	crits	crit	NOUN	NOUN	Gender=Masc|Number=Plur	20	dobj	_	_
23	de	de	ADP	ADP	AdpType=Prep	24	case	_	_
24	solidaritat	solidaritat	NOUN	NOUN	Gender=Fem|Number=Sing	22	nmod	_	_
25	.	.	PUNCT	PUNCT	PunctType=Peri	20	punct	_	_

~~~


