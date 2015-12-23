

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Polish)

This relation is universal.

1084 nodes (1%) are attached to their parents as `aux`.

827 instances of `aux` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14944649446494.

The following 10 pairs of parts of speech are connected with `aux`: [pl-pos/VERB]()-[pl-pos/AUX]() (813; 75% instances), [pl-pos/VERB]()-[pl-pos/PART]() (167; 15% instances), [pl-pos/PART]()-[pl-pos/AUX]() (43; 4% instances), [pl-pos/NOUN]()-[pl-pos/AUX]() (19; 2% instances), [pl-pos/ADJ]()-[pl-pos/AUX]() (14; 1% instances), [pl-pos/AUX]()-[pl-pos/AUX]() (10; 1% instances), [pl-pos/ADJ]()-[pl-pos/PART]() (9; 1% instances), [pl-pos/AUX]()-[pl-pos/PART]() (6; 1% instances), [pl-pos/NOUN]()-[pl-pos/PART]() (2; 0% instances), [pl-pos/ADV]()-[pl-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Może	może	PART	qub:_	_	4	advmod	_	_
2	będą	być	AUX	bedzie:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	4	aux	_	_
3	mi	ja	PRON	ppron12:sg:dat:m1:pri:nakc	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=1|PronType=Prs|Variant=Short	4	dobj	_	_
4	dokuczać	dokuczać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	0	root	_	_
5	?	?	PUNCT	interp:_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 aux	color:blue
1	A	a	CONJ	conj:_	_	7	advmod	_	_
2	zresztą	zresztą	PART	qub:_	_	7	advmod	_	_
3	,	,	PUNCT	interp:_	_	2	punct	_	_
4	pewnie	pewnie	ADV	adv:pos	Degree=Pos	5	nmod	_	_
5	i	i	CONJ	conj:_	_	7	advmod	_	_
6	tak	tak	ADV	adv:_	_	5	case	_	_
7	zmarnowało	zmarnować	VERB	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	0	root	_	_
8	by	by	PART	qub:_	_	7	aux	_	_
9	te	ten	ADJ	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	10	amod	_	_
10	pieniądze	pieniądz	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	7	dobj	_	_
11	.	.	PUNCT	interp:_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 aux	color:blue
1	Sprawdźmy	sprawdzić	VERB	impt:pl:pri:perf	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
2	,	,	PUNCT	interp:_	_	5	punct	_	_
3	czy	czy	PART	qub:_	_	5	advmod	_	_
4	istotnie	istotnie	ADV	adv:pos	Degree=Pos	5	advmod	_	_
5	potrafili	potrafić	VERB	praet:pl:m1:imperf	Animacy=Anim|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	1	ccomp	_	_
6	by	by	PART	qub:_	_	5	aux	_	_
7	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|Variant=Short|VerbForm=Fin	6	aux	_	_
8	to	to	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	9	dobj	_	_
9	zrobić	zrobić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	5	xcomp	_	_
10	.	.	PUNCT	interp:_	_	1	punct	_	_

~~~


