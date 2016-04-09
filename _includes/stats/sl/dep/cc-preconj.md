

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is a language-specific subtype of [cc]().

73 nodes (0%) are attached to their parents as `cc:preconj`.

73 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38356164383562.

The following 10 pairs of parts of speech are connected with `cc:preconj`: [sl-pos/NOUN]()-[sl-pos/CONJ]() (31; 42% instances), [sl-pos/ADJ]()-[sl-pos/CONJ]() (12; 16% instances), [sl-pos/VERB]()-[sl-pos/CONJ]() (10; 14% instances), [sl-pos/NOUN]()-[sl-pos/PART]() (8; 11% instances), [sl-pos/ADV]()-[sl-pos/CONJ]() (3; 4% instances), [sl-pos/PROPN]()-[sl-pos/CONJ]() (3; 4% instances), [sl-pos/ADJ]()-[sl-pos/PART]() (2; 3% instances), [sl-pos/PRON]()-[sl-pos/CONJ]() (2; 3% instances), [sl-pos/ADV]()-[sl-pos/PART]() (1; 1% instances), [sl-pos/PRON]()-[sl-pos/PART]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Tako	tako	CONJ	Cc	_	2	cc:preconj	_	Dep=2|Rel=Conj
2	ravnatelj	ravnatelj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Dep=0|Rel=Root
3	kot	kot	SCONJ	Cs	_	2	cc	_	Dep=4|Rel=Conj
4	profesorji	profesor	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	2	conj	_	SpaceAfter=No|Dep=2|Rel=Coord
5	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Zgodovina	zgodovina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
2	človeštva	človeštvo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
3	ni	biti	VERB	Va-r3s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
4	niti	niti	CONJ	Cc	_	5	cc:preconj	_	Dep=5|Rel=Conj
5	logična	logičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	Dep=3|Rel=Atr
6	niti	niti	CONJ	Cc	_	5	cc	_	Dep=7|Rel=Conj
7	pravična	pravičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No|Dep=5|Rel=Coord
8	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 9 cc:preconj	color:blue
1	Uživam	uživati	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
2	namreč	namreč	CONJ	Cc	_	1	advmod	_	Dep=0|Rel=Root
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	kuhanju	kuhanje	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=AdvO
5	in	in	CONJ	Cc	_	1	cc	_	Dep=7|Rel=Conj
6	rada	rad	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=AdvM
7	improviziram	improvizirati	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	conj	_	SpaceAfter=No|Dep=0|Rel=Root
8	,	,	PUNCT	Z	_	16	punct	_	Dep=0|Rel=Root
9	tako	tako	CONJ	Cc	_	16	cc:preconj	_	Dep=16|Rel=Conj
10	da	da	SCONJ	Cs	_	9	mwe	_	Dep=9|Rel=MWU
11	na	na	ADP	Sl	Case=Loc	12	case	_	Dep=12|Rel=Atr
12	začetku	začetek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	16	nmod	_	Dep=16|Rel=AdvO
13	nikoli	nikoli	ADV	Rgp	Degree=Pos	16	advmod	_	Dep=16|Rel=AdvO
14	prav	prav	PART	Q	_	16	advmod	_	Dep=0|Rel=Root
15	ne	ne	PART	Q	_	16	neg	_	Dep=16|Rel=PPart
16	vem	vedeti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
17	,	,	PUNCT	Z	_	20	punct	_	Dep=0|Rel=Root
18	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	20	nsubj	_	Dep=20|Rel=Conj
19	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	20	aux	_	Dep=20|Rel=PPart
20	nastalo	nastati	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	16	ccomp	_	SpaceAfter=No|Dep=16|Rel=Obj
21	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


