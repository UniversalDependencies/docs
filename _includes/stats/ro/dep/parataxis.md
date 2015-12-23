

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.

75 nodes (1%) are attached to their parents as `parataxis`.

50 instances of `parataxis` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.57333333333333.

The following 16 pairs of parts of speech are connected with `parataxis`: [ro-pos/VERB]()-[ro-pos/NUM]() (23; 31% instances), [ro-pos/VERB]()-[ro-pos/VERB]() (16; 21% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (8; 11% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (7; 9% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (5; 7% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (2; 3% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (2; 3% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (2; 3% instances), [ro-pos/NUM]()-[ro-pos/NUM]() (2; 3% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (2; 3% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 1% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 1% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/NOUN]() (1; 1% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 1% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 parataxis	color:blue
1	2.1.2	2.1.2	NUM	Mc	NumType=Card	5	parataxis	_	_
2	.	.	PUNCT	PERIOD	_	1	punct	_	_
3	Subsistemul	subsistem	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	5	nsubjpass	_	_
4	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	auxpass	_	_
5	montat	monta	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	solid	solid	ADV	Rgp	Degree=Pos	5	advmod	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	ținuta	ținută	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
9	normală	normal	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	drum	drum	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	8	nmod	_	_
12	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 parataxis	color:blue
1	Poți	putea	VERB	Vmip2s	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	tu	tu	PRON	Pp2-sn--------s	Case=Nom|Number=Sing|Person=2|PronType=Prs|Strength=Strong	1	nsubj	_	_
3	să	să	PART	Qs	Mood=Sub	5	mark	_	_
4	-mi	meu	PRON	Pp1-sd--------w	Case=Dat|Number=Sing|Person=1|PronType=Prs|Strength=Weak	5	iobj	_	_
5	spui	spune	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	,	,	PUNCT	COMMA	_	10	punct	_	_
7	Atâta	atâta	DET	Di3-sr	Case=Nom|Number=Sing|Person=3|PronType=Ind	8	det	_	_
8	frumusețe	frumusețe	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	10	nsubj	_	_
9	unde	unde	ADV	Rw	PronType=Int,Rel	10	advmod	_	_
10	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
11	?	?	PUNCT	QUEST	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 parataxis	color:blue
1	-	-	PUNCT	DASH	_	2	punct	_	_
2	nave	navă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
3	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	4	nsubj	_	_
4	practică	practica	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	acl	_	_
5	pescuitul	pescuit	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	4	dobj	_	_
6	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	undiță	undiță	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	5	nmod	_	_
8	:	:	PUNCT	COLON	_	2	punct	_	_
9	licențe	licență	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	parataxis	_	_
10	pentru	pentru	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	_
11	25	25	NUM	Mc	NumType=Card	12	nummod	_	_
12	TRB	TRB	PROPN	Np	_	9	nmod	_	_
13	/	/	SYM	SLASH	AdpType=Prep	14	punct	_	AltTag=SYM-ADP
14	lună	lună	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	_
15	,	,	PUNCT	COMMA	_	17	punct	_	_
16	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	_
17	medie	medie	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	12	nmod	_	_
18	anuală	anual	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	17	amod	_	_
19	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


