

--------------------------------------------------------------------------------

## Treebank Statistics (UD_German)

This relation is universal.

46 nodes (0%) are attached to their parents as `csubjpass`.

39 instances of `csubjpass` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.60869565217391.

The following 5 pairs of parts of speech are connected with `csubjpass`: [de-pos/VERB]()-[de-pos/VERB]() (39; 85% instances), [de-pos/VERB]()-[de-pos/ADJ]() (3; 7% instances), [de-pos/VERB]()-[de-pos/NOUN]() (2; 4% instances), [de-pos/NOUN]()-[de-pos/NOUN]() (1; 2% instances), [de-pos/VERB]()-[de-pos/CONJ]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 csubjpass	color:blue
1	Was	was	PRON	PWS	Case=Nom|Number=Sing|PronType=Int	3	nsubj	_	_
2	nicht	nicht	PART	PTKNEG	_	3	neg	_	_
3	gepasst	passen	VERB	VVPP	VerbForm=Part	10	csubjpass	_	_
4	hat	haben	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	,	,	PUNCT	$,	_	10	punct	_	_
6	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	auxpass	_	_
7	sehr	sehr	ADV	ADV	_	8	advmod	_	_
8	schnell	schnell	ADV	ADJD	_	10	advmod	_	_
9	passend	passend	ADJ	ADJD	Degree=Pos	10	xcomp	_	_
10	gemacht	machen	VERB	VVPP	VerbForm=Part	0	root	_	_
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubjpass	color:blue
1	So	so	ADV	ADV	_	3	advmod	_	_
2	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	auxpass	_	_
3	erzählt	erzählen	VERB	VVPP	VerbForm=Part	0	root	_	_
4	,	,	PUNCT	$,	_	3	punct	_	_
5	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	6	det	_	_
6	Juden	Jude	NOUN	NN	Case=Nom|Number=Plur	8	nsubj	_	_
7	seien	sein	VERB	VAFIN	Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	betrügerisch	betrügerisch	ADJ	ADJD	Degree=Pos	3	csubjpass	_	_
9	und	und	CONJ	KON	_	8	cc	_	_
10	würden	werden	AUX	VAFIN	VerbForm=Fin	15	aux	_	_
11	die	der	DET	ART	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	Brunnen	Brunnen	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	15	dobj	_	_
13	der	der	DET	ART	Definite=Def|PronType=Art	14	det	_	_
14	Stadt	Stadt	NOUN	NN	_	12	nmod	_	_
15	vergiften	vergiften	VERB	VVINF	VerbForm=Inf	8	conj	_	_
16	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubjpass	color:blue
1	Es	es	PRON	PPER	Case=Acc,Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	wird	werden	AUX	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	3	auxpass	_	_
3	angenommen	annehmen	VERB	VVPP	VerbForm=Part	0	root	_	_
4	,	,	PUNCT	$,	_	3	punct	_	_
5	dass	dass	SCONJ	KOUS	_	10	mark	_	_
6	das	der	DET	ART	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
7	Olešnice	Olešnice	PROPN	NE	_	9	name	_	_
8	-	-	PUNCT	$(	_	9	punct	_	_
9	Tal	Tal	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
10	Ausgangspunkt	Ausgangspunkt	NOUN	NN	_	3	csubjpass	_	_
11	der	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
12	deutschen	deutsch	ADJ	ADJA	Degree=Pos	13	amod	_	_
13	Kolonisation	Kolonisation	NOUN	NN	_	10	nmod	_	_
14	der	der	DET	ART	Definite=Def|PronType=Art	16	det	_	_
15	Hostinnér	Hostinnér	PROPN	NN	_	16	name	_	_
16	Gegend	Gegend	NOUN	NN	_	13	nmod	_	_
17	war	sein	VERB	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	cop	_	_
18	.	.	PUNCT	$.	_	3	punct	_	_

~~~


