

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovak)

This relation is universal.

45 nodes (0%) are attached to their parents as `discourse`.

37 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.86666666666667.

The following 5 pairs of parts of speech are connected with `discourse`: [sk-pos/VERB]()-[sk-pos/PRON]() (37; 82% instances), [sk-pos/PRON]()-[sk-pos/PRON]() (3; 7% instances), [sk-pos/NOUN]()-[sk-pos/PRON]() (2; 4% instances), [sk-pos/VERB]()-[sk-pos/PART]() (2; 4% instances), [sk-pos/NOUN]()-[sk-pos/PART]() (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	A	a	CONJ	O	_	4	cc	_	_
2	určite	určite	PART	T	_	4	advmod	_	_
3	si	si	PRON	R	PronType=Prs|Reflex=Yes	4	discourse	_	_
4	vyskúšajte	vyskúšať	VERB	VMdpb+	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=2|VerbForm=Fin	0	root	_	_
5	tento	tento	PRON	PFis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Prs	6	nmod	_	_
6	recept	recept	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	dobj	_	_
7	:	:	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
8	-	-	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
9	)	)	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_
10	.	.	PUNCT	ZIP	VerbForm=Inf	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 discourse	color:blue
1	“	“	PUNCT	Z	_	2	punct	_	_
2	Kto	kto	PRON	PFms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing|PronType=Prs	8	ccomp	_	_
3	sú	byť	VERB	VKepc+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	to	to	PRON	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Prs	2	discourse	_	_
5	ľudia	človek	NOUN	SSmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	_
6	?	?	PUNCT	Z	_	2	punct	_	_
7	“	“	PUNCT	Z	_	2	punct	_	_
8	vypytovala	vypytovať	VERB	VLescf+	Aspect=Imp|Gender=Fem|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	0	root	_	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	8	expl	_	_
10	zvedavo	zvedavo	ADV	Dx	Degree=Pos	8	advmod	_	_
11	Maja	maja	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	8	nsubj	_	_
12	.	.	PUNCT	Z	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	“	“	PUNCT	Z	_	5	punct	_	_
2	Ja	ja	PRON	PPhs1	Case=Nom|Number=Sing|PronType=Prs	5	nsubj	_	_
3	som	byť	VERB	VKesa+	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	ti	ty	PRON	PPhs3	Case=Dat|Number=Sing|PronType=Prs	5	discourse	_	_
5	had	had	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
6	?	?	PUNCT	Z	_	5	punct	_	_
7	“	“	PUNCT	Z	_	5	punct	_	_
8	zlomyseľne	zlomyseľne	ADV	Dx	Degree=Pos	10	advmod	_	_
9	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	10	expl	_	_
10	zarehotal	zarehotať	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Person=3|Tense=Past|VerbForm=Part	5	dep	_	_
11	Džafar	džafar	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	_
12	.	.	PUNCT	Z	_	5	punct	_	_

~~~


