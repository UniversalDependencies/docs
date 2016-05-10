

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

587 nodes (0%) are attached to their parents as `csubj`.

549 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.33390119250426.

The following 18 pairs of parts of speech are connected with `csubj`: [ro-pos/VERB]()-[ro-pos/VERB]() (339; 58% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (87; 15% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (82; 14% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (27; 5% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (19; 3% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (7; 1% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (5; 1% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (4; 1% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (3; 1% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (3; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj	color:blue
1	Te-	tu	PRON	Pp2-sa--y-----w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak|Variant=Short	3	dobj	_	_
2	ar	avea	AUX	Va--3	Person=3	3	aux	_	_
3	interesa	interesa	VERB	Vmnp	Tense=Pres|VerbForm=Inf	0	root	_	_
4	cumva	cumva	ADV	Rgp	Degree=Pos	3	advmod	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl:pv	_	_
7	uiți	uita	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
8	prin	prin	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	el	el	PRON	Pp3msr--------s	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	7	nmod	_	_
10	?	?	PUNCT	QUEST	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	Nu	nu	PART	Qz	Negative=Neg	3	neg	_	_
2	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	cop	_	_
3	bine	bine	ADV	Rgp	Degree=Pos	0	root	_	_
4	să	să	PART	Qs	Mood=Sub	5	mark	_	_
5	refuzi	refuza	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	csubj	_	_
6	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 csubj	color:blue
1	Decizia	decizie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubjpass	_	_
2	2001	2001	NUM	Mc	NumType=Card	1	nummod	_	_
3	/	/	SYM	SLASH	AdpType=Prep	2	goeswith	_	_
4	881	881	NUM	Mc	NumType=Card	3	goeswith	_	_
5	/	/	SYM	SLASH	AdpType=Prep	4	goeswith	_	_
6	CE	CE	NOUN	Yn	Abbr=Yes	5	goeswith	_	_
7	ar	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	trebui	trebui	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
9	modificată	modificat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	csubj	_	_
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	9	advmod	_	_
11	consecință	consecință	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	10	mwe	_	_
12	.	.	PUNCT	PERIOD	_	8	punct	_	_

~~~


