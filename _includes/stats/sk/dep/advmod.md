

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

4196 nodes (4%) are attached to their parents as `advmod`.

3239 instances of `advmod` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83269780743565.

The following 31 pairs of parts of speech are connected with `advmod`: [sk-pos/VERB]()-[sk-pos/ADV]() (2773; 66% instances), [sk-pos/VERB]()-[sk-pos/PART]() (604; 14% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (244; 6% instances), [sk-pos/VERB]()-[sk-pos/NUM]() (145; 3% instances), [sk-pos/ADV]()-[sk-pos/ADV]() (71; 2% instances), [sk-pos/VERB]()-[sk-pos/CONJ]() (62; 1% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (57; 1% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (39; 1% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (37; 1% instances), [sk-pos/VERB]()-[sk-pos/ADJ]() (33; 1% instances), [sk-pos/VERB]()-[sk-pos/X]() (31; 1% instances), [sk-pos/PRON]()-[sk-pos/ADV]() (13; 0% instances), [sk-pos/ADV]()-[sk-pos/PART]() (11; 0% instances), [sk-pos/ADJ]()-[sk-pos/CONJ]() (10; 0% instances), [sk-pos/PRON]()-[sk-pos/PART]() (9; 0% instances), [sk-pos/ADJ]()-[sk-pos/NUM]() (8; 0% instances), [sk-pos/ADV]()-[sk-pos/NUM]() (8; 0% instances), [sk-pos/NUM]()-[sk-pos/ADV]() (7; 0% instances), [sk-pos/ADV]()-[sk-pos/CONJ]() (5; 0% instances), [sk-pos/NOUN]()-[sk-pos/CONJ]() (5; 0% instances), [sk-pos/NUM]()-[sk-pos/NUM]() (4; 0% instances), [sk-pos/X]()-[sk-pos/X]() (4; 0% instances), [sk-pos/NUM]()-[sk-pos/PART]() (3; 0% instances), [sk-pos/PROPN]()-[sk-pos/PART]() (3; 0% instances), [sk-pos/X]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/VERB]()-[sk-pos/PRON]() (2; 0% instances), [sk-pos/PRON]()-[sk-pos/CONJ]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/NUM]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/ADP]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
1	Koalícia	koalícia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	hádam	hádam	PART	T	_	3	advmod	_	_
3	zostane	zostať	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pohromade	pohromade	ADV	Dx	Degree=Pos	3	advmod	_	_
5	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	NUM	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	3	nummod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	nmod	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	dobj	_	_
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod	color:blue
1	"	"	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_
2	Naša	náš	PRON	PFfs1	Case=Nom|Gender=Fem|Number=Sing|PronType=Prs	3	nmod	_	_
3	mačka	mačka	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
4	je	byť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
5	už	už	PART	T	_	6	advmod:emph	_	_
6	druhý	druhý	NUM	NAis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	nummod	_	_
7	deň	deň	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	nmod	_	_
8	veľmi	veľmi	ADV	Dx	Degree=Pos	9	advmod	_	_
9	nepokojná	nepokojný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	_
10	.	.	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_

~~~


