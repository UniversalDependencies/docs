

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

46 nodes (1%) are attached to their parents as `appos`.

46 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.58695652173913.

The following 15 pairs of parts of speech are connected with `appos`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (18; 39% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (10; 22% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (2; 4% instances), [lt-pos/NOUN]()-[lt-pos/NUM]() (2; 4% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (2; 4% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (2; 4% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (2; 4% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/ADJ]()-[lt-pos/PROPN]() (1; 2% instances), [lt-pos/ADV]()-[lt-pos/PROPN]() (1; 2% instances), [lt-pos/NOUN]()-[lt-pos/DET]() (1; 2% instances), [lt-pos/NOUN]()-[lt-pos/X]() (1; 2% instances), [lt-pos/PROPN]()-[lt-pos/ADJ]() (1; 2% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (1; 2% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Apdovanojimą	apdovanojimas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	2	obj	_	En=award
2	teikia	teikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=provide
3	„	„	PUNCT	PUNCT	_	5	punct	_	En=„|SpaceAfter=No
4	Sugiharos	sugihara	PROPN	NNP	Case=Gen|Gender=Fem|Number=Sing	5	nmod	_	En=Sugihara
5	fondas	fondas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	En=foundation
6	–	–	PUNCT	PUNCT	_	7	punct	_	En=_
7	Diplomatai	diplomatas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	5	appos	_	En=diplomat
8	už	už	ADP	UH	_	9	case	_	En=for
9	gyvybę	gyvybė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	nmod	_	En=life|SpaceAfter=No
10	“	“	PUNCT	PUNCT	_	5	punct	_	En=“|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	En=.

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 appos	color:blue
1	Čia	čia	CCONJ	CC	_	5	cc	_	En=here
2	SSRS	SSRS	PROPN	NNP	_	3	nmod	_	En=SSRS
3	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	En=0
4	laikais	laikas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	En=time
5	veikė	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	En=function
6	milžiniška	milžiniškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	En=big
7	gamykla	gamykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	En=factory
8	„	„	PUNCT	PUNCT	_	9	punct	_	En=„|SpaceAfter=No
9	Vilma	Vilma	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	appos	_	En=Vilma|SpaceAfter=No
10	“	“	PUNCT	PUNCT	_	9	punct	_	En=“|SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 19 appos	color:blue
1	Bet	bet	CCONJ	CC	_	4	cc	_	En=but
2	turbūt	turbūt	PART	PARENTH	_	4	advmod:emph	_	En=probably
3	nebus	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Fut|VerbForm=Fin|Voice=Act	4	cop	_	En=be
4	nekuklu	nekuklus	ADJ	JJL	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	0	root	_	En=not-humble|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	7	punct	_	En=,
6	jei	jei	SCONJ	UH	_	7	mark	_	En=if
7	pasakysime	pasakyti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Fut|VerbForm=Fin|Voice=Act	4	advcl	_	En=say|SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	10	punct	_	En=,
9	kad	kad	SCONJ	UH	_	10	mark	_	En=that
10	turime	turėti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	ccomp	_	En=have
11	būti	būti	AUX	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	13	aux	_	En=be
12	lietuviškais	lietuviškas	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	13	amod	_	En=Lithianian
13	Faidonais	Faidonais	PROPN	NNP	Case=Ins|Gender=Masc|Number=Plur	10	xcomp	_	En=Faidone|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	15	punct	_	En=,
15	Faidrais	Faidrais	PROPN	NNP	Case=Ins|Gender=Fem|Number=Plur	13	conj	_	En=Fedra
16	arba	arba	CCONJ	CC	_	17	cc	_	En=or
17	Kritonais	Kritonais	PROPN	NNP	Case=Ins|Gender=Masc|Number=Plur	13	conj	_	En=Critone
18	–	–	PUNCT	PUNCT	_	19	punct	_	En=–
19	mokiniais	mokinys	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	13	appos	_	En=pupile|SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	21	punct	_	En=,
21	atsakingais	atsakingas	ADJ	JJL	Case=Ins|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	19	acl	_	En=answer
22	už	už	ADP	UH	_	26	case	_	En=for
23	savo	savo	DET	PRP$	_	24	det	_	En=one's
24	mokytojo	mokytojas	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	En=teacher
25	minčių	mintis	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	26	obj	_	En=idea
26	sklaidą	sklaida	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	En=dissemination
27	ir	ir	CCONJ	CC	_	30	cc	_	En=and
28	už	už	ADP	UH	_	29	case	_	En=for
29	jo	jo	DET	PRP$	_	30	det	_	En=his
30	atminimą	atminimas	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing	26	conj	_	En=memory|SpaceAfter=No
31	.	.	PUNCT	PUNCT	_	4	punct	_	En=.

~~~


