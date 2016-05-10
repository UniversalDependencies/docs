

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is a language-specific subtype of [det]().
There are also 1 other language-specific subtypes of `det`: [det:nummod]().

93 nodes (0%) are attached to their parents as `det:numgov`.

91 instances of `det:numgov` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.20430107526882.

The following 2 pairs of parts of speech are connected with `det:numgov`: [pl-pos/NOUN]()-[pl-pos/DET]() (92; 99% instances), [pl-pos/PRON]()-[pl-pos/DET]() (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det:numgov	color:blue
1	Minęło	minąć	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	już	już	PART	qub:_	_	3	nmod	_	_
3	kilka	kilka	DET	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	4	det:numgov	_	_
4	dni	dzień	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nsubj	_	_
5	,	,	PUNCT	interp:_	_	9	punct	_	_
6	odkąd	odkąd	ADV	adv:_	_	9	advmod	_	_
7	go	on	PRON	ppron3:sg:acc:m3:ter:nakc:npraep	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	9	dobj	_	_
8	jej	on	PRON	ppron3:sg:dat:f:ter:akc:npraep	Case=Dat|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	9	iobj	_	_
9	doręczono	doręczyć	VERB	imps:perf	Aspect=Perf|Case=Nom|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	1	advcl	_	_
10	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det:numgov	color:blue
1	Jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	ich	on	PRON	ppron3:pl:gen:m3:ter:akc:npraep	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	1	nsubj	_	_
3	kilkanaście	kilkanaście	DET	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind	2	det:numgov	_	_
4	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


