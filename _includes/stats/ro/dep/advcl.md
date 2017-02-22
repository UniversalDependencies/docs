

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Romanian)

This relation is universal.
There are 1 language-specific subtypes of `advcl`: [advcl:tcl]().

3035 nodes (2%) are attached to their parents as `advcl`.

2257 instances of `advcl` (74%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.21317957166392.

The following 39 pairs of parts of speech are connected with `advcl`: [ro-pos/VERB]()-[ro-pos/VERB]() (2366; 78% instances), [ro-pos/ADJ]()-[ro-pos/VERB]() (187; 6% instances), [ro-pos/NOUN]()-[ro-pos/VERB]() (94; 3% instances), [ro-pos/VERB]()-[ro-pos/ADJ]() (90; 3% instances), [ro-pos/ADV]()-[ro-pos/VERB]() (80; 3% instances), [ro-pos/VERB]()-[ro-pos/NOUN]() (68; 2% instances), [ro-pos/VERB]()-[ro-pos/ADV]() (41; 1% instances), [ro-pos/PRON]()-[ro-pos/VERB]() (12; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADJ]() (10; 0% instances), [ro-pos/VERB]()-[ro-pos/ADP]() (10; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADJ]() (9; 0% instances), [ro-pos/VERB]()-[ro-pos/PRON]() (7; 0% instances), [ro-pos/ADJ]()-[ro-pos/NOUN]() (6; 0% instances), [ro-pos/NOUN]()-[ro-pos/NOUN]() (6; 0% instances), [ro-pos/ADP]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/AUX]()-[ro-pos/VERB]() (5; 0% instances), [ro-pos/ADV]()-[ro-pos/ADV]() (4; 0% instances), [ro-pos/NUM]()-[ro-pos/VERB]() (4; 0% instances), [ro-pos/VERB]()-[ro-pos/NUM]() (4; 0% instances), [ro-pos/ADV]()-[ro-pos/ADJ]() (3; 0% instances), [ro-pos/VERB]()-[ro-pos/SCONJ]() (3; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/ADV]()-[ro-pos/NOUN]() (2; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADV]() (2; 0% instances), [ro-pos/ADJ]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/NUM]() (1; 0% instances), [ro-pos/ADJ]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/ADV]()-[ro-pos/SCONJ]() (1; 0% instances), [ro-pos/DET]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/INTJ]()-[ro-pos/VERB]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/ADP]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/CCONJ]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PART]() (1; 0% instances), [ro-pos/NOUN]()-[ro-pos/PRON]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/ADJ]() (1; 0% instances), [ro-pos/NUM]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PRON]()-[ro-pos/NOUN]() (1; 0% instances), [ro-pos/PROPN]()-[ro-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advcl	color:blue
1	Un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	2	det	_	_
2	timp	timp	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
3	stătu	sta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
4	uitându	uita	VERB	Vmg-------y	Variant=Short|VerbForm=Ger	3	advcl	_	SpaceAfter=No
5	-se	sine	PRON	Px3--a--y-----w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak|Variant=Short	4	expl:pv	_	_
6	prostește	prostește	ADV	Rgp	Degree=Pos	4	advmod	_	_
7	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	hârtie	hârtie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 advcl	color:blue
1	Era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	primăvară	primăvară	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	nsubj	_	_
4	lină	lin	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	9	punct	_	_
6	cum	cum	ADV	Rw	PronType=Int,Rel	9	advmod	_	_
7	au	avea	AUX	Va--3p	Number=Plur|Person=3	9	aux	_	_
8	mai	mai	ADV	Rp	_	9	advmod	_	_
9	trecut	trece	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	4	advcl	_	_
10	pe-	pe	ADP	Spsay	AdpType=Prep|Case=Acc|Variant=Short	11	case	_	SpaceAfter=No
11	aicea	aicea	ADV	Rgp	Degree=Pos	9	advmod	_	SpaceAfter=No
12	,	,	PUNCT	COMMA	_	13	punct	_	_
13	mii	mie	NUM	Mcfp-ln	Definite=Ind|Gender=Fem|Number=Plur|NumForm=Word|NumType=Card	9	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 advcl	color:blue
1	Pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
2	buzele	buză	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	5	obl	_	_
3	tuturor	tot	PRON	Pi3-po	Case=Dat,Gen|Number=Plur|Person=3|PronType=Ind	2	nmod	_	_
4	a	avea	AUX	Va--3s	Number=Sing|Person=3	5	aux	_	_
5	înflorit	înflori	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	un	un	DET	Timsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	7	det	_	_
7	zâmbet	zâmbet	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
8	imposibil	imposibil	ADV	Rgp	Degree=Pos	10	advmod	_	_
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
10	stăpânit	stăpâni	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	7	advcl	_	SpaceAfter=No
11	.	.	PUNCT	PERIOD	_	5	punct	_	_

~~~


