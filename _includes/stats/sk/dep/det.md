

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.
There are 1 language-specific subtypes of `det`: [det:numgov]().

2253 nodes (2%) are attached to their parents as `det`.

2206 instances of `det` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26320461606747.

The following 9 pairs of parts of speech are connected with `det`: [sk-pos/NOUN]()-[sk-pos/DET]() (2174; 96% instances), [sk-pos/PRON]()-[sk-pos/DET]() (26; 1% instances), [sk-pos/DET]()-[sk-pos/DET]() (17; 1% instances), [sk-pos/ADJ]()-[sk-pos/DET]() (16; 1% instances), [sk-pos/PROPN]()-[sk-pos/DET]() (12; 1% instances), [sk-pos/NUM]()-[sk-pos/DET]() (3; 0% instances), [sk-pos/X]()-[sk-pos/DET]() (3; 0% instances), [sk-pos/ADV]()-[sk-pos/DET]() (1; 0% instances), [sk-pos/INTJ]()-[sk-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 det	color:blue
1	Konajte	konať	VERB	VMepb+	Aspect=Imp|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	svoju	svoj	DET	PFfs4	Case=Acc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	3	det	_	_
3	povinnosť	povinnosť	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	1	obj	_	SpaceAfter=No
4	.	.	PUNCT	ZIP	VerbForm=Inf	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	Veď	veď	PART	T	_	7	advmod	_	_
2	nás	my	PRON	PPhp4	Case=Acc|Number=Plur|PronType=Prs	7	obj	_	_
3	všetkých	všetok	DET	PFmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur|PronType=Tot	2	det	_	_
4	štyroch	štyri	NUM	NNmp4	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	2	nummod	_	_
5	veľmi	veľmi	ADV	Dx	Degree=Pos	6	advmod	_	_
6	dobre	dobre	ADV	Dx	Degree=Pos	7	advmod	_	_
7	pozná	poznať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	Johnovi	john	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	_	_
2	Lee	lee	PROPN	SFms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	3	nmod	_	_
3	Hookerovi	hooker	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	7	obj	_	_
4	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	7	expl:pv	_	_
5	toto	toto	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
6	všetko	všetok	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	7	nsubj	_	_
7	podarilo	podariť	VERB	VLdscn+	Aspect=Perf|Gender=Neut|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	ZIP	VerbForm=Inf	7	punct	_	_

~~~


