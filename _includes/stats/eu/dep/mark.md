

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

170 nodes (0%) are attached to their parents as `mark`.

160 instances of `mark` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.77647058823529.

The following 12 pairs of parts of speech are connected with `mark`: [eu-pos/VERB]()-[eu-pos/CCONJ]() (91; 54% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (27; 16% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (24; 14% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (18; 11% instances), [eu-pos/AUX]()-[eu-pos/ADV]() (2; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (2; 1% instances), [eu-pos/AUX]()-[eu-pos/DET]() (1; 1% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (1; 1% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (1; 1% instances), [eu-pos/VERB]()-[eu-pos/DET]() (1; 1% instances), [eu-pos/VERB]()-[eu-pos/INTJ]() (1; 1% instances), [eu-pos/VERB]()-[eu-pos/X]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mark	color:blue
1	Aurten	aurten	ADV	_	_	2	advmod	_	_
2	hasi	hasi	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
3	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	2	aux	_	_
4	jokatzen	jokatu	VERB	_	Case=Ine	2	advcl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	_	_
6	iaztik	iaz	ADV	_	Case=Abl	7	advmod	_	_
7	den	izan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	2	advcl	_	_
8	arren	arren	CCONJ	_	_	7	mark	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 mark	color:blue
1	Esanahi	esanahi	NOUN	_	_	0	root	_	_
2	diferenteak	diferente	ADJ	_	Case=Abs|Definite=Def|Number=Plur	1	amod	_	_
3	dira	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	1	cop	_	_
4	eraikuntza	eraikuntza	NOUN	_	_	3	advcl	_	_
5	sozialak	sozial	ADJ	_	Case=Abs|Definite=Def|Number=Plur	4	amod	_	_
6	dira	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Person[abs]=3	4	cop	_	_
7	-	-	PUNCT	_	_	1	punct	_	_
8	eta	eta	CCONJ	_	_	6	mark	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 mark	color:blue
1	Ez	ez	PART	_	Polarity=Neg	4	advmod	_	_
2	genuen	ukan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	4	aux	_	_
3	horretan	hori	DET	_	Case=Ine|Definite=Def|Number=Sing	4	obl	_	_
4	erreparatu	erreparatu	VERB	_	VerbForm=Part	0	root	_	_
5	eltzegorra	eltzegor	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	6	obj	_	_
6	jo	jo	VERB	_	Aspect=Perf|VerbForm=Part	4	advcl	_	_
7	genuen	ukan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	6	aux	_	_
8	arte	arte	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	6	mark	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


