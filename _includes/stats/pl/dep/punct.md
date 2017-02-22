

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

11709 nodes (16%) are attached to their parents as `punct`.

8208 instances of `punct` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22299086173029.

The following 16 pairs of parts of speech are connected with `punct`: [pl-pos/VERB]()-[pl-pos/PUNCT]() (9117; 78% instances), [pl-pos/ADJ]()-[pl-pos/PUNCT]() (1113; 10% instances), [pl-pos/NOUN]()-[pl-pos/PUNCT]() (958; 8% instances), [pl-pos/X]()-[pl-pos/PUNCT]() (159; 1% instances), [pl-pos/PROPN]()-[pl-pos/PUNCT]() (141; 1% instances), [pl-pos/ADV]()-[pl-pos/PUNCT]() (48; 0% instances), [pl-pos/PRON]()-[pl-pos/PUNCT]() (46; 0% instances), [pl-pos/PART]()-[pl-pos/PUNCT]() (37; 0% instances), [pl-pos/AUX]()-[pl-pos/PUNCT]() (32; 0% instances), [pl-pos/NUM]()-[pl-pos/PUNCT]() (27; 0% instances), [pl-pos/DET]()-[pl-pos/PUNCT]() (20; 0% instances), [pl-pos/ADP]()-[pl-pos/PUNCT]() (5; 0% instances), [pl-pos/SCONJ]()-[pl-pos/PUNCT]() (2; 0% instances), [pl-pos/SCONJ]()-[pl-pos/VERB]() (2; 0% instances), [pl-pos/VERB]()-[pl-pos/ADJ]() (1; 0% instances), [pl-pos/VERB]()-[pl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 punct	color:blue
1	Zawahała	zawahać	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	się	się	PRON	qub	PronType=Prs|Reflex=Yes	1	expl:pv	_	SpaceAfter=No
3	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 punct	color:blue
1	-	-	PUNCT	interp	_	4	punct	_	_
2	Jesteśmy	być	AUX	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	4	obj	_	_
4	pisani	pisany	ADJ	ppas:pl:nom:m1:imperf:aff	Animacy=Hum|Aspect=Imp|Case=Nom|Gender=Masc|Number=Plur|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 punct	color:blue
1	Uświadomiła	uświadomić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	sobie	siebie	PRON	siebie:dat	Case=Dat|PronType=Prs|Reflex=Yes	1	iobj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	6	punct	_	_
4	że	że	SCONJ	comp	_	6	case	_	_
5	kilkadziesiąt	kilkadziesiąt	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Ind	6	det:numgov	_	_
6	sekund	sekunda	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	1	ccomp	_	_
7	to	to	AUX	pred	_	6	cop	_	_
8	całe	cały	ADJ	adj:pl:nom:m3:pos	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	9	amod	_	_
9	wieki	wiek	NOUN	subst:pl:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	interp	_	1	punct	_	_

~~~


