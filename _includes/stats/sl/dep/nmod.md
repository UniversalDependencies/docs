

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

9411 nodes (7%) are attached to their parents as `nmod`.

8924 instances of `nmod` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.94230156200191.

The following 42 pairs of parts of speech are connected with `nmod`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (7030; 75% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (1381; 15% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (221; 2% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (139; 1% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (67; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (57; 1% instances), [sl-pos/PROPN]()-[sl-pos/X]() (57; 1% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (56; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (49; 1% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (49; 1% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (49; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (34; 0% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (30; 0% instances), [sl-pos/X]()-[sl-pos/X]() (28; 0% instances), [sl-pos/DET]()-[sl-pos/DET]() (23; 0% instances), [sl-pos/NOUN]()-[sl-pos/X]() (21; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (20; 0% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (18; 0% instances), [sl-pos/PRON]()-[sl-pos/DET]() (15; 0% instances), [sl-pos/NUM]()-[sl-pos/DET]() (9; 0% instances), [sl-pos/DET]()-[sl-pos/PRON]() (7; 0% instances), [sl-pos/X]()-[sl-pos/PROPN]() (7; 0% instances), [sl-pos/VERB]()-[sl-pos/ADP]() (6; 0% instances), [sl-pos/NUM]()-[sl-pos/PRON]() (5; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (4; 0% instances), [sl-pos/X]()-[sl-pos/NOUN]() (4; 0% instances), [sl-pos/ADV]()-[sl-pos/DET]() (3; 0% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (3; 0% instances), [sl-pos/ADJ]()-[sl-pos/X]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/PUNCT]()-[sl-pos/X]() (1; 0% instances), [sl-pos/X]()-[sl-pos/DET]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 nmod	color:blue
1	V	v	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
2	tem	ta	DET	Pd-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Dep=3|Rel=Atr
3	trenutku	trenutek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	5	obl	_	Dep=4|Rel=AdvO
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	bistveno	bistven	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=4|Rel=Atr
6	nerešeno	nerešen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Dep=4|Rel=Sb
8	odnosa	odnos	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Dep=7|Rel=Atr
9	do	do	ADP	Sg	Case=Gen	11	case	_	Dep=11|Rel=Atr
10	AM	AM	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	nmod	_	Dep=11|Rel=Atr
11	BUS-a	BUS	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=Atr
12	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 nmod	color:blue
1	V	v	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
2	tem	ta	DET	Pd-msl	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Dep=3|Rel=Atr
3	trenutku	trenutek	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	5	obl	_	Dep=4|Rel=AdvO
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
5	bistveno	bistven	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=4|Rel=Atr
6	nerešeno	nerešen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Dep=4|Rel=Sb
8	odnosa	odnos	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	7	nmod	_	Dep=7|Rel=Atr
9	do	do	ADP	Sg	Case=Gen	11	case	_	Dep=11|Rel=Atr
10	AM	AM	PROPN	Npmsn	Case=Nom|Gender=Masc|Number=Sing	11	nmod	_	Dep=11|Rel=Atr
11	BUS-a	BUS	PROPN	Npmsg	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No|Dep=8|Rel=Atr
12	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

447 nodes (2%) are attached to their parents as `nmod`.

410 instances of `nmod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.10961968680089.

The following 39 pairs of parts of speech are connected with `nmod`: [sl-pos/NOUN]()-[sl-pos/NOUN]() (244; 55% instances), [sl-pos/NOUN]()-[sl-pos/PROPN]() (80; 18% instances), [sl-pos/NOUN]()-[sl-pos/ADJ]() (14; 3% instances), [sl-pos/ADJ]()-[sl-pos/NOUN]() (10; 2% instances), [sl-pos/PROPN]()-[sl-pos/PROPN]() (9; 2% instances), [sl-pos/NOUN]()-[sl-pos/PRON]() (7; 2% instances), [sl-pos/PRON]()-[sl-pos/NOUN]() (7; 2% instances), [sl-pos/ADV]()-[sl-pos/NOUN]() (5; 1% instances), [sl-pos/DET]()-[sl-pos/DET]() (5; 1% instances), [sl-pos/DET]()-[sl-pos/NOUN]() (5; 1% instances), [sl-pos/NOUN]()-[sl-pos/DET]() (5; 1% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (4; 1% instances), [sl-pos/ADJ]()-[sl-pos/ADP]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/ADP]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/ADV]()-[sl-pos/PROPN]() (3; 1% instances), [sl-pos/DET]()-[sl-pos/PRON]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADP]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/ADV]() (3; 1% instances), [sl-pos/NOUN]()-[sl-pos/X]() (3; 1% instances), [sl-pos/PRON]()-[sl-pos/DET]() (3; 1% instances), [sl-pos/PROPN]()-[sl-pos/NOUN]() (3; 1% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (2; 0% instances), [sl-pos/ADJ]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/DET]()-[sl-pos/PROPN]() (2; 0% instances), [sl-pos/NOUN]()-[sl-pos/NUM]() (2; 0% instances), [sl-pos/NUM]()-[sl-pos/NOUN]() (2; 0% instances), [sl-pos/ADV]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/NUM]() (1; 0% instances), [sl-pos/DET]()-[sl-pos/X]() (1; 0% instances), [sl-pos/NUM]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PART]()-[sl-pos/DET]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/ADP]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PRON]()-[sl-pos/PROPN]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/PRON]() (1; 0% instances), [sl-pos/PROPN]()-[sl-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=veš|msd=Ggnsde
2	kako	kako	ADV	Rgp	Degree=Pos	3	advmod	_	word=kako|msd=Rsn
3	vrti	vrteti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	word=vrti|msd=Ggnste
4	tisto	tisti	DET	Pd-fsa	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	word=tisto|msd=Zk-zet
5	kosilnico	kosilnica	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	word=kosilnico|msd=Sozet
6	brez	brez	ADP	Sg	Case=Gen	7	case	_	word=brez|msd=Dr
7	motorja	motor	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	word=motorja|msd=Somer

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	najbolj	najbolj	ADV	Rgs	Degree=Sup	2	advmod	_	word=najbolj|msd=Rss
2	pozitiven	pozitiven	ADJ	Agpmsnn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	word=pozitivn|msd=Ppnmein
3	tak	tak	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	det	_	word=tak|msd=Zk-mei
4	del	del	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	8	xcomp	_	word=del|msd=Somei
5	slovenije	Slovenija	PROPN	Npfsg	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	word=Slovenije|msd=Slzer
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	8	expl	_	word=se|msd=Zp------k
7	mi	jaz	PRON	Pp1-sd--y	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	8	obj	_	word=mi|msd=Zop-ed--k
8	zdi	zdeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=zdi|msd=Ggnste
9	morje	morje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	8	parataxis	_	word=morje|msd=Sosei
10	…	…	PUNCT	Z	_	8	punct	_	word=…|msd=U
11	ja	ja	PART	Q	_	12	discourse	_	word=ja|msd=L
12	širina	širina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	8	parataxis	_	word=širina|msd=Sozei

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 nmod	color:blue
1	ja	ja	PART	Q	_	5	discourse	_	word=ja|msd=L
2	če	če	SCONJ	Cs	_	5	mark	_	word=če|msd=Vd
3	se	se	PRON	Px------y	PronType=Prs|Variant=Short	5	expl	_	word=se|msd=Zp------k
4	vam	ti	PRON	Pp2-pd	Case=Dat|Number=Plur|Person=2|PronType=Prs	5	obj	_	word=vam|msd=Zod-md
5	zdi	zdeti	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=zdi|msd=Ggnste
6	za	za	ADP	Sa	Case=Acc	7	reparandum	_	word=za|msd=Dt
7	za	za	ADP	Sa	Case=Acc	10	reparandum	_	word=za|msd=Dt
8	bolj	bolj	ADV	Rgc	Degree=Cmp	10	advmod	_	word=bolj|msd=Rsr
9	za	za	ADP	Sa	Case=Acc	10	case	_	word=za|msd=Dt
10	klasifikacijo	klasifikacija	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	word=klasifikacijo|msd=Sozet
11	nezasebno	nezaseben	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	nmod	_	word=nezasebno|msd=Ppnzet
12	kot	kot	SCONJ	Cs	_	13	case	_	word=kot|msd=Vd
13	zasebno	zaseben	ADJ	Agpfsa	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	10	nmod	_	word=zasebno|msd=Ppnzet
14	komot	komot	ADV	Rgp	Degree=Pos	5	discourse	_	word=kamot|msd=Rsn

~~~


