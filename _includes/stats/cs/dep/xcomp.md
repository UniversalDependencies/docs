

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

18437 nodes (1%) are attached to their parents as `xcomp`.

17022 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.50886803709931.

The following 47 pairs of parts of speech are connected with `xcomp`: [cs-pos/VERB]()-[cs-pos/VERB]() (13578; 74% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (727; 4% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (707; 4% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (674; 4% instances), [cs-pos/ADJ]()-[cs-pos/VERB]() (555; 3% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (323; 2% instances), [cs-pos/NOUN]()-[cs-pos/ADJ]() (278; 2% instances), [cs-pos/NOUN]()-[cs-pos/PRON]() (277; 2% instances), [cs-pos/PRON]()-[cs-pos/NOUN]() (236; 1% instances), [cs-pos/PROPN]()-[cs-pos/NOUN]() (180; 1% instances), [cs-pos/NOUN]()-[cs-pos/VERB]() (147; 1% instances), [cs-pos/PRON]()-[cs-pos/PRON]() (147; 1% instances), [cs-pos/PRON]()-[cs-pos/ADJ]() (137; 1% instances), [cs-pos/PROPN]()-[cs-pos/ADJ]() (86; 0% instances), [cs-pos/PROPN]()-[cs-pos/PRON]() (77; 0% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (37; 0% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (33; 0% instances), [cs-pos/NOUN]()-[cs-pos/NUM]() (29; 0% instances), [cs-pos/PRON]()-[cs-pos/VERB]() (29; 0% instances), [cs-pos/PROPN]()-[cs-pos/VERB]() (22; 0% instances), [cs-pos/PART]()-[cs-pos/VERB]() (21; 0% instances), [cs-pos/ADJ]()-[cs-pos/PRON]() (15; 0% instances), [cs-pos/NUM]()-[cs-pos/NOUN]() (15; 0% instances), [cs-pos/PROPN]()-[cs-pos/PROPN]() (15; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADJ]() (11; 0% instances), [cs-pos/NUM]()-[cs-pos/VERB]() (11; 0% instances), [cs-pos/PRON]()-[cs-pos/NUM]() (10; 0% instances), [cs-pos/PROPN]()-[cs-pos/NUM]() (7; 0% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (6; 0% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (6; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (5; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (4; 0% instances), [cs-pos/NUM]()-[cs-pos/ADJ]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/NUM]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/PROPN]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/ADJ]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/PRON]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (2; 0% instances), [cs-pos/DET]()-[cs-pos/VERB]() (2; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/ADV]()-[cs-pos/VERB]() (1; 0% instances), [cs-pos/PART]()-[cs-pos/ADJ]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	Potřebujete	potřebovat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Negative=Pos|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	rychle	rychle	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	3	advmod	_	LDeriv=rychlý
3	poradit	poradit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	1	xcomp	_	SpaceAfter=No
4	?	?	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 xcomp	color:blue
1	*	*	PUNCT	Z:-------------	_	8	punct	_	_
2	Ale	ale	CONJ	J^-------------	_	8	cc	_	_
3	vyučení	vyučení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	8	nsubj	_	SpaceAfter=No|LDeriv=vyučit
4	,	,	PUNCT	Z:-------------	_	3	punct	_	_
5	či	či	CONJ	J^-------------	_	3	cc	_	_
6	přeškolení	přeškolení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	3	conj	_	LDeriv=přeškolit
7	by	být	AUX	Vc-------------	Mood=Cnd|VerbForm=Fin	8	aux	_	_
8	mělo	mít	VERB	VpNS---XR-AA---	Gender=Neut|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
9	být	být	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	10	cop	_	_
10	zárukou	záruka	NOUN	NNFS7-----A----	Case=Ins|Gender=Fem|Negative=Pos|Number=Sing	8	xcomp	_	_
11	kvalifikace	kvalifikace	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	Z:-------------	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 xcomp	color:blue
1	Proces	proces	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Negative=Pos|Number=Sing	2	dobj	_	_
2	nevidí	vidět	VERB	VB-S---3P-NA---	Mood=Ind|Negative=Neg|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jako	jako	SCONJ	J,-------------	_	7	mark	_	_
4	krátkodobou	krátkodobý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	7	amod	_	_
5	či	či	CONJ	J^-------------	_	4	cc	_	_
6	střednědobou	střednědobý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	conj	_	_
7	záležitost	záležitost	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Negative=Pos|Number=Sing	1	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


