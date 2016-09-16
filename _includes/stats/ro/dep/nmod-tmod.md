

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:agent](), [nmod:pmod]().

525 nodes (0%) are attached to their parents as `nmod:tmod`.

355 instances of `nmod:tmod` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.45904761904762.

The following 14 pairs of parts of speech are connected with `nmod:tmod`: [ro-pos/VERB]()-[ro-pos/NOUN]() (438; 83% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (45; 9% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (13; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (9; 2% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (8; 2% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (2; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/DET]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/VERB]()-[ro-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nmod:tmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	clipa	clipă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nmod:tmod	_	_
3	aceea	acela	DET	Dd3fsr---o	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|Position=Postnom|PronType=Dem	2	det	_	_
4	,	,	PUNCT	COMMA	_	2	punct	_	_
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	6	expl:pass	_	_
6	auzi	auzi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
7	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	8	det	_	_
8	bufnitură	bufnitură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nsubj	_	_
9	înspăimântătoare	înspăimântător	ADJ	Afpf--n	Definite=Ind|Degree=Pos|Gender=Fem	8	amod	_	_
10	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 nmod:tmod	color:blue
1	(	(	PUNCT	LPAR	_	2	punct	_	_
2	2	2	NUM	Mc	NumType=Card	13	parataxis	_	_
3	)	)	PUNCT	RPAR	_	2	punct	_	_
4	Sub	sub	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	rezerva	rezervă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nmod	_	_
6	încheierii	încheiere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	_
7	sale	său	DET	Ds3fsos	Case=Dat,Gen|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	6	det	_	_
8	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	10	case	_	_
9	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	10	det	_	_
10	dată	dată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	6	nmod:tmod	_	_
11	ulterioară	ulterior	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	_
12	,	,	PUNCT	COMMA	_	5	punct	_	_
13	este	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
15	dorit	dori	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	13	xcomp	_	_
16	semnarea	semnare	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
17	acordului	acord	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	16	nmod	_	_
18	parafat	parafa	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	17	acl	_	_
19	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	21	case	_	_
20	25	25	NUM	Mc	NumType=Card	21	nummod	_	_
21	iunie	iunie	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	nmod:tmod	_	_
22	2004	2004	NUM	Mc	NumType=Card	21	nmod	_	_
23	.	.	PUNCT	PERIOD	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod:tmod	color:blue
1	O	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	vreme	vreme	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod:tmod	_	_
3	fu	fi	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	auxpass	_	_
4	cuprins	cuprins	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	_
5	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	fel	fel	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nmod	_	_
8	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
9	isterie	isterie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	nmod:agent	_	_
10	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


