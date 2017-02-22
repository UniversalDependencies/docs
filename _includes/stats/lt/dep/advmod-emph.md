

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is a language-specific subtype of [advmod]().

1027 nodes (3%) are attached to their parents as `advmod:emph`.

916 instances of `advmod:emph` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.69328140214216.

The following 18 pairs of parts of speech are connected with `advmod:emph`: [lt-pos/NOUN]()-[lt-pos/PART]() (260; 25% instances), [lt-pos/VERB]()-[lt-pos/PART]() (254; 25% instances), [lt-pos/ADV]()-[lt-pos/PART]() (168; 16% instances), [lt-pos/PRON]()-[lt-pos/PART]() (119; 12% instances), [lt-pos/PART]()-[lt-pos/PART]() (63; 6% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (62; 6% instances), [lt-pos/NUM]()-[lt-pos/PART]() (30; 3% instances), [lt-pos/CCONJ]()-[lt-pos/PART]() (21; 2% instances), [lt-pos/PROPN]()-[lt-pos/PART]() (19; 2% instances), [lt-pos/PUNCT]()-[lt-pos/PART]() (14; 1% instances), [lt-pos/X]()-[lt-pos/PART]() (6; 1% instances), [lt-pos/INTJ]()-[lt-pos/PART]() (3; 0% instances), [lt-pos/SYM]()-[lt-pos/PART]() (2; 0% instances), [lt-pos/VERB]()-[lt-pos/CCONJ]() (2; 0% instances), [lt-pos/PART]()-[lt-pos/CCONJ]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/INTJ]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/CCONJ]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod:emph	color:blue
1	Vilniaus	Vilnius	PROPN	Npmsgng	Case=Gen|Gender=Masc|Number=Sing	2	nmod	_	_
2	miesto	miestas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	_
3	lėšomis	lėšos	NOUN	Ncfpin-	Case=Ins|Gender=Fem|Number=Plur	0	root	_	_
4	tik	tik	PART	Qg	_	5	advmod:emph	_	_
5	vartai	vartai	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	3	dep:sub	_	_
6	į	į	ADP	Sga	AdpType=Prep	7	case	_	_
7	kompleksą	kompleksas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	5	dep:adj	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod:emph	color:blue
1	Todėl	todėl	ADV	Rgp	Degree=Pos	0	root	_	_
2	net	net	PART	Qg	_	4	advmod:emph	_	_
3	ir	ir	PART	Qg	_	2	advmod:emph	_	_
4	dirbdamas	dirbti	VERB	Vgh--sm-n--n--	Gender=Masc|Number=Sing|Polarity=Pos	1	dep:adj	_	_
5	namuose	namai	NOUN	Ncmpln-	Case=Loc|Gender=Masc|Number=Plur	4	dep:adj	_	_
6	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	8	nmod	_	_
7	darbo	darbas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	dep:atr_co	_	_
8	ir	ir	CCONJ	Cg	_	10	cc	_	_
9	poilsio	poilsis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	dep:atr_co	_	_
10	valandas	valanda	NOUN	Ncfpan-	Case=Acc|Gender=Fem|Number=Plur	1	obj	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 advmod:emph	color:blue
1	§	§	PUNCT	PUNCT	_	2	punct	_	_
2	Gidė	gidė	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	kad	kad	CCONJ	Cg	_	7	mark	_	_
5	akcijos	akcija	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	6	nmod	_	_
6	tikslas	tikslas	NOUN	Ncmsnn-	Case=Nom|Gender=Masc|Number=Sing	7	dep:sub	_	_
7	nebuvo	nebūti	VERB	Vgma3s--y--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin	2	dep:pred_obj	_	_
8	surinkti	surinkti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	7	dep:predv	_	_
9	kuo	kuo	PART	Qg	_	10	advmod:emph	_	_
10	daugiau	daug	ADV	Rgc	Degree=Cmp	8	dep:adj	_	_
11	pinigų	pinigai	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No
12	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


