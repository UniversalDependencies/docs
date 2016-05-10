

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

7230 nodes (5%) are attached to their parents as `nsubj`.

5226 instances of `nsubj` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.57662517289073.

The following 27 pairs of parts of speech are connected with `nsubj`: [sl-pos/VERB]()-[sl-pos/NOUN]() (3985; 55% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (895; 12% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (793; 11% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (618; 9% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (347; 5% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (146; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (108; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (94; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (70; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (52; 1% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (42; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (19; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (12; 0% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (10; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (9; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (8; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (5; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Intenzivnost	intenzivnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=5|Rel=Sb
2	žalovanja	žalovanje	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
3	z	z	ADP	Si	Case=Ins	4	case	_	Dep=4|Rel=Atr
4	leti	leto	NOUN	Ncnpi	Case=Ins|Gender=Neut|Number=Plur	5	nmod	_	Dep=5|Rel=AdvO
5	raste	rasti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
6	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CONJ	Cc	_	1	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	VERB	Va-r3d-n	Mood=Ind|Negative=Pos|Number=Dual|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nsubj	color:blue
1	Srebrni	srebrn	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Dep=3|Rel=Atr
2	častni	časten	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Dep=3|Rel=Atr
3	znak	znak	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	dobj	_	Dep=5|Rel=Obj
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux	_	Dep=5|Rel=PPart
5	prejela	prejeti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
6	tudi	tudi	PART	Q	_	5	advmod	_	Dep=0|Rel=Root
7	Pia	Pia	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=5|Rel=Sb
8	Mlakar	Mlakar	PROPN	Npfsn	Case=Nom|Gender=Fem|Number=Sing	7	name	_	SpaceAfter=No|Dep=7|Rel=Atr
9	.	.	PUNCT	Z	_	5	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

1533 nodes (5%) are attached to their parents as `nsubj`.

1162 instances of `nsubj` (76%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.64514024787997.

The following 32 pairs of parts of speech are connected with `nsubj`: [sl-pos/VERB]()-[sl-pos/PRON]() (541; 35% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (411; 27% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (100; 7% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (97; 6% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (79; 5% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (66; 4% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (42; 3% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (38; 2% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (32; 2% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (22; 1% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (22; 1% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (14; 1% instances), [sl-pos/X]()-[sl-pos/PRON]() (11; 1% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (9; 1% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (5; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADJ]() (4; 0% instances), [sl-pos/AUX]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/PART]()-[sl-pos/PRON]() (3; 0% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (3; 0% instances), [sl-pos/VERB]()-[sl-pos/X]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (2; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/NOUN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nsubj	color:blue
1	edino	edino	ADV	Rgp	Degree=Pos	2	advmod	_	word=edino|msd=Rsn
2	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	word=to|msd=Zk-sei
3	da	da	SCONJ	Cs	_	6	mark	_	word=da|msd=Vd
4	se	se	PRON	Px------y	PronType=Prs|Variant=Short	6	expl	_	word=se|msd=Zp------k
5	nisi	biti	AUX	Va-r2s-y	Mood=Ind|Negative=Neg|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	aux	_	word=nisi|msd=Gp-sde-d
6	bal	bati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	2	acl	_	word=bal|msd=Ggnd-em
7	da	da	SCONJ	Cs	_	11	mark	_	word=da|msd=Vd
8	te	ti	PRON	Pp2-sa--y	Case=Acc|Number=Sing|Person=2|PronType=Prs|Variant=Short	11	dobj	_	word=te|msd=Zod-et--k
9	bo	biti	AUX	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	11	aux	_	word=bo|msd=Gp-pte-n
10	kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	11	nsubj	_	word=kdo|msd=Zv-mei
11	počil	počiti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	6	ccomp	_	word=počo|msd=Ggdd-em
12	kje	kje	ADV	Rgp	Degree=Pos	11	advmod	_	word=kje|msd=Rsn

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj	color:blue
1	tako	tak	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	word=takovo|msd=Zk-sei
2	življenje	življenje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	_	word=življenje|msd=Sosei
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	word=je|msd=Gp-ste-n
4	bilo	biti	VERB	Va-p-sn	Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	word=blo|msd=Gp-d-es
5	prej	prej	ADV	Rgc	Degree=Cmp	4	advmod	_	word=prek|msd=Rsr
6	in	in	CONJ	Cc	_	7	reparandum	_	word=i|msd=Vp
7	in	in	CONJ	Cc	_	4	cc	_	word=i|msd=Vp
8	sedaj	sedaj	ADV	Rgp	Degree=Pos	9	advmod	_	word=seda|msd=Rsn
9	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	word=je|msd=Gp-ste-n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	to	ta	PRON	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	word=to|msd=Zk-sei
2	ne	ne	PART	Q	_	4	neg	_	word=nav[split_1-2]|msd=L
3	bo	biti	VERB	Va-f3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	word=nav[split_2-2]|msd=Gp-pte-n
4	problem	problem	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	word=problem|msd=Somei
5	ne	ne	PART	Q	_	4	discourse	_	word=ne|msd=L

~~~


