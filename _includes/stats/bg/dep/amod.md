

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Bulgarian)

This relation is universal.

11867 nodes (8%) are attached to their parents as `amod`.

11440 instances of `amod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30108704811663.

The following 10 pairs of parts of speech are connected with `amod`: [bg-pos/NOUN]()-[bg-pos/ADJ]() (11521; 97% instances), [bg-pos/PROPN]()-[bg-pos/ADJ]() (314; 3% instances), [bg-pos/NUM]()-[bg-pos/ADJ]() (9; 0% instances), [bg-pos/VERB]()-[bg-pos/ADJ]() (9; 0% instances), [bg-pos/PRON]()-[bg-pos/ADJ]() (8; 0% instances), [bg-pos/NOUN]()-[bg-pos/PROPN]() (2; 0% instances), [bg-pos/ADJ]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/DET]()-[bg-pos/ADJ]() (1; 0% instances), [bg-pos/NOUN]()-[bg-pos/ADV]() (1; 0% instances), [bg-pos/PROPN]()-[bg-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Огрените	огрея	ADJ	Vpptcv--p-d	Aspect=Perf|Definite=Def|Number=Plur|VerbForm=Part|Voice=Pass	2	amod	_	_
2	скали	скала	NOUN	Ncfpi	Definite=Ind|Gender=Fem|Number=Plur	4	nsubj	_	_
3	отсреща	отсреща	ADV	Dl	_	2	advmod	_	_
4	немееха	немея	VERB	Vpiif-m3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
5	.	.	PUNCT	punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Синьото	син	ADJ	Ansd	Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	2	amod	_	_
2	БЗНС	бзнс	PROPN	Npnsi	Definite=Ind|Gender=Neut|Number=Sing	5	nsubj	_	_
3	пак	пак	ADV	Dt	_	5	advmod	_	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	цепи	цепя-(се)	VERB	Vpitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 amod	color:blue
1	Знаеш	знам	VERB	Vpiif-r2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	,	,	PUNCT	punct	_	12	punct	_	_
4	че	че	SCONJ	Cs	_	12	mark	_	_
5	една	един	NUM	Mcfsi	Definite=Ind|Gender=Fem|Number=Sing|NumType=Card	12	nsubj	_	_
6	трета	трети	ADJ	Mofsi	Definite=Ind|Gender=Fem|Number=Sing|NumType=Ord	5	amod	_	_
7	от	от	ADP	R	_	8	case	_	_
8	хората	хора	NOUN	Nc-ld	Definite=Def|Number=Ptan	5	nmod	_	_
9	по	по	ADP	R	_	10	case	_	_
10	света	свят	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	8	nmod	_	_
11	са	съм	VERB	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
12	необразовани	необразован	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	1	ccomp	_	_
13	?	?	PUNCT	punct	_	1	punct	_	_

~~~


