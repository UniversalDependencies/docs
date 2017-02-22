

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.
There are 1 language-specific subtypes of `advmod`: [advmod:emph]().

4431 nodes (5%) are attached to their parents as `advmod`.

3485 instances of `advmod` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82419318438276.

The following 26 pairs of parts of speech are connected with `advmod`: [sk-pos/VERB]()-[sk-pos/ADV]() (3136; 71% instances), [sk-pos/VERB]()-[sk-pos/PART]() (569; 13% instances), [sk-pos/ADJ]()-[sk-pos/ADV]() (356; 8% instances), [sk-pos/ADV]()-[sk-pos/ADV]() (76; 2% instances), [sk-pos/ADJ]()-[sk-pos/PART]() (73; 2% instances), [sk-pos/NOUN]()-[sk-pos/ADV]() (56; 1% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (52; 1% instances), [sk-pos/VERB]()-[sk-pos/SCONJ]() (21; 0% instances), [sk-pos/VERB]()-[sk-pos/X]() (20; 0% instances), [sk-pos/ADV]()-[sk-pos/PART]() (13; 0% instances), [sk-pos/NUM]()-[sk-pos/ADV]() (11; 0% instances), [sk-pos/DET]()-[sk-pos/ADV]() (9; 0% instances), [sk-pos/DET]()-[sk-pos/PART]() (5; 0% instances), [sk-pos/PRON]()-[sk-pos/PART]() (5; 0% instances), [sk-pos/ADV]()-[sk-pos/SCONJ]() (4; 0% instances), [sk-pos/VERB]()-[sk-pos/CCONJ]() (4; 0% instances), [sk-pos/X]()-[sk-pos/X]() (4; 0% instances), [sk-pos/NUM]()-[sk-pos/PART]() (3; 0% instances), [sk-pos/PROPN]()-[sk-pos/PART]() (3; 0% instances), [sk-pos/X]()-[sk-pos/ADV]() (3; 0% instances), [sk-pos/ADJ]()-[sk-pos/SCONJ]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/X]() (2; 0% instances), [sk-pos/ADJ]()-[sk-pos/CCONJ]() (1; 0% instances), [sk-pos/PRON]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/PROPN]()-[sk-pos/ADV]() (1; 0% instances), [sk-pos/VERB]()-[sk-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
1	Koalícia	koalícia	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	_	_
2	hádam	hádam	PART	T	_	3	advmod	_	_
3	zostane	zostať	VERB	VKdsc+	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pohromade	pohromade	ADV	Dx	Degree=Pos	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	ZIP	VerbForm=Inf	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	V	v	ADP	Eu6	AdpType=Prep|Case=Loc	3	case	_	_
2	prvom	prvý	ADJ	NAis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing|NumType=Ord	3	amod	_	_
3	rade	rad	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	5	obl	_	_
4	vraj	vraj	PART	T	_	5	advmod	_	_
5	došlo	dôjsť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	_
6	k	k	ADP	Eu3	AdpType=Prep|Case=Dat	7	case	_	_
7	nepochopeniu	nepochopenie	NOUN	SSns3	Case=Dat|Gender=Neut|Number=Sing	5	obj	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 advmod	color:blue
1	"	"	PUNCT	ZIP	VerbForm=Inf	9	punct	_	SpaceAfter=No
2	Naša	náš	DET	PFfs1	Case=Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Poss=Yes|PronType=Prs	3	det	_	_
3	mačka	mačka	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
4	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	9	cop	_	_
5	už	už	PART	T	_	6	advmod:emph	_	_
6	druhý	druhý	ADJ	NAis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|NumType=Ord	7	amod	_	_
7	deň	deň	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	_
8	veľmi	veľmi	ADV	Dx	Degree=Pos	9	advmod	_	_
9	nepokojná	nepokojný	ADJ	AAfs1x	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	ZIP	VerbForm=Inf	9	punct	_	_

~~~


