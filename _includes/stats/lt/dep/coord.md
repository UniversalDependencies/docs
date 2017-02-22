

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

2 nodes (0%) are attached to their parents as `coord`.

2 instances of `coord` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `coord`: [lt-pos/CCONJ]()-[lt-pos/PUNCT]() (2; 100% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 coord	color:blue
1	juk	juk	PART	Qg	_	2	advmod:emph	_	_
2	reikia	reikėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
3	nuspręsti	nuspręsti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	2	ccomp	_	_
4	ne	ne	PART	Qg	_	5	advmod:emph	_	_
5	tik	tik	PART	Qg	_	6	advmod:emph	_	_
6	tai	tas	PRON	Pgn--n	Case=Nom|PronType=Tot	12	dep:obj_co	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	ar	ar	CCONJ	Cg	_	9	mark	_	_
9	statyti	statyti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	6	dep:obj_exd	_	_
10	AE	AE	X	Ya	Abbr=Yes	9	obj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	12	coord	_	_
12	bet	bet	CCONJ	Cg	_	3	advmod	_	_
13	ir	ir	PART	Qg	_	14	advmod:emph	_	_
14	kokio	koks	PRON	Pgmsgn	Case=Nom|PronType=Tot	17	dep:atr_co	_	_
15	ji	jis	PRON	Pgfsnn	Case=Nom|PronType=Tot	16	dep:sub	_	_
16	bus	būti	VERB	Vgmf3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	12	dep:pred_obj	_	_
17	dydžio	dydis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	16	dep:predn	_	SpaceAfter=No
18	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


