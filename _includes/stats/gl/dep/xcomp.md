

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Galician-TreeGal)

This relation is universal.

204 nodes (1%) are attached to their parents as `xcomp`.

203 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.96078431372549.

The following 9 pairs of parts of speech are connected with `xcomp`: [gl-pos/VERB]()-[gl-pos/VERB]() (159; 78% instances), [gl-pos/VERB]()-[gl-pos/ADJ]() (20; 10% instances), [gl-pos/VERB]()-[gl-pos/NOUN]() (11; 5% instances), [gl-pos/ADJ]()-[gl-pos/VERB]() (7; 3% instances), [gl-pos/NOUN]()-[gl-pos/VERB]() (2; 1% instances), [gl-pos/PRON]()-[gl-pos/VERB]() (2; 1% instances), [gl-pos/NOUN]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/PROPN]()-[gl-pos/ADJ]() (1; 0% instances), [gl-pos/VERB]()-[gl-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	por	por	ADP	P	AdpType=Prep	2	mark	_	_
2	emocionar	emocionar	VERB	V0f000	VerbForm=Inf	0	root	_	_
3	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	2	dobj	_	_
4	e	e	CONJ	Cc	_	2	cc	_	_
5	facer	facer	VERB	V0f000	VerbForm=Inf	2	conj	_	_
6	nos	nos	PRON	Raa1ap	Case=Acc|Gender=Com|Number=Plur|Person=1|PronType=Clit	5	dobj	_	_
7	sentir	sentir	VERB	V0f000	VerbForm=Inf	5	xcomp	_	_
8	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	demandan	demandar	VERB	Vpi30p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	Cs	_	6	mark	_	_
3	BNG	BNG	PROPN	Zg00	_	6	nsubj	_	_
4	e	e	CONJ	Cc	_	3	cc	_	_
5	PSOE	PSOE	PROPN	Zg00	_	3	conj	_	_
6	fagan	facer	VERB	Vps30p	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
7	críbel	críbel	ADJ	A0fs	Gender=Fem|Number=Sing	6	xcomp	_	_
8	unha	un	DET	Difs	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	alternativa	alternativa	NOUN	Scfs	Gender=Fem|Number=Sing	7	dobj	_	_
10	a	a	ADP	P	AdpType=Prep	11	case	_	_
11	Fraga	Fraga	PROPN	Sp00	_	9	nmod	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 xcomp	color:blue
1	dende	dende	ADP	P	AdpType=Prep	2	case	_	_
2	entón	entón	ADV	Wn	_	3	advmod	_	_
3	considero	considerar	VERB	Vpi10s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	o	o	PRON	Raa3ms	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Clit	3	dobj	_	_
5	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	mellor	mellor	ADJ	Acms	Degree=Cmp|Gender=Masc|Number=Sing	7	amod	_	_
7	profesor	profesor	NOUN	Scms	Gender=Masc|Number=Sing	3	xcomp	_	_
8	que	que	PRON	Tnms	Gender=Masc|Number=Sing|PronType=Rel	9	nsubj	_	_
9	tiven	ter	VERB	Vei10s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	7	acl	_	_
10	.	.	PUNCT	Q.	_	3	punct	_	_

~~~


