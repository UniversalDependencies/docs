

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

69 nodes (1%) are attached to their parents as `mwe`.

55 instances of `mwe` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31884057971015.

The following 16 pairs of parts of speech are connected with `mwe`: [ro-pos/VERB]()-[ro-pos/NOUN]() (17; 25% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (12; 17% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (11; 16% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (9; 13% instances), [ro-pos/NOUN]()-[ro-pos/PROPN]() (3; 4% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (3; 4% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (2; 3% instances), [ro-pos/ADV]()-[ro-pos/CONJ]() (2; 3% instances), [ro-pos/NOUN]()-[ro-pos/DET]() (2; 3% instances), [ro-pos/SCONJ]()-[ro-pos/ADP]() (2; 3% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (1; 1% instances), [ro-pos/ADP]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 mwe	color:blue
1	Făt-frumos	Făt-frumos	PROPN	Npms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	_
2	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	3	iobj	_	_
3	spuse	spune	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	5	dobj	_	_
5	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
6	de	de	ADP	Sp	AdpType=Prep	7	mwe	_	_
7	gând	gând	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	mwe	_	_
8	să	să	PART	Qs	Mood=Sub	9	mark	_	_
9	facă	face	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 mwe	color:blue
1	Societatea	societate	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	nsubj	_	_
2	Scriitorilor	scriitor	NOUN	Ncmpoy	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	1	mwe	_	_
3	Români	român	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	mwe	_	_
4	beneficiază	beneficia	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
6	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	7	det	_	_
7	prezentare	prezentare	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod:pmod	_	_
8	destul_de	destul_de	ADV	Rp	_	9	advmod	_	_
9	amplă	amplu	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	_
10	(	(	PUNCT	LPAR	_	11	punct	_	_
11	11	11	NUM	Eni	NumType=Card	4	parataxis	_	_
12	/	/	SYM	SLASH	AdpType=Prep	13	punct	_	AltTag=SYM-ADP
13	1914	1914	NOUN	Etd	_	11	nmod	_	AltTag=NOUN-NUM
14	)	)	PUNCT	RPAR	_	11	punct	_	_
15	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mwe	color:blue
1	Făt-frumos	Făt-frumos	PROPN	Npms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	_
2	îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	3	iobj	_	_
3	spuse	spune	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	ce	ce	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	5	dobj	_	_
5	avea	avea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	3	ccomp	_	_
6	de	de	ADP	Sp	AdpType=Prep	7	mwe	_	_
7	gând	gând	NOUN	Ncmsrn	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	5	mwe	_	_
8	să	să	PART	Qs	Mood=Sub	9	mark	_	_
9	facă	face	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	_
10	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


