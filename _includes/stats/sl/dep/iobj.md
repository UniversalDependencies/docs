

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian)

This relation is universal.

555 nodes (0%) are attached to their parents as `iobj`.

387 instances of `iobj` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56756756756757.

The following 6 pairs of parts of speech are connected with `iobj`: [sl-pos/VERB]()-[sl-pos/PRON]() (276; 50% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (224; 40% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (32; 6% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (11; 2% instances), [sl-pos/VERB]()-[sl-pos/DET]() (11; 2% instances), [sl-pos/VERB]()-[sl-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 iobj	color:blue
1	A	a	CCONJ	Cc	_	7	cc	_	Dep=7|Rel=Conj
2	nekaj	nekaj	PRON	Pi-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Ind	7	nsubj	_	Dep=7|Rel=Sb
3	v	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
4	meni	jaz	PRON	Pp1-sl	Case=Loc|Number=Sing|Person=1|PronType=Prs	2	nmod	_	Dep=2|Rel=Atr
5	mi	jaz	PRON	Pp1-sd--y	Case=Dat|Number=Sing|Person=1|PronType=Prs|Variant=Short	7	iobj	_	Dep=7|Rel=Obj
6	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	aux	_	Dep=7|Rel=PPart
7	dovolilo	dovoliti	VERB	Vmep-sn	Aspect=Perf|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
8	,	,	PUNCT	Z	_	11	punct	_	Dep=0|Rel=Root
9	da	da	SCONJ	Cs	_	11	mark	_	Dep=11|Rel=Conj
10	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	11	aux	_	Dep=11|Rel=PPart
11	zaploskala	zaploskati	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	7	ccomp	_	SpaceAfter=No|Dep=7|Rel=Obj
12	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 iobj	color:blue
1	»	»	PUNCT	Z	_	8	punct	_	SpaceAfter=No|Dep=0|Rel=Root
2	V	v	ADP	Sl	Case=Loc	4	case	_	Dep=4|Rel=Atr
3	avtomobilski	avtomobilski	ADJ	Agpfsl	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	Dep=4|Rel=Atr
4	industriji	industrija	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	Dep=8|Rel=AdvO
5	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	Dep=8|Rel=PPart
6	naključju	naključje	NOUN	Ncnsd	Case=Dat|Gender=Neut|Number=Sing	8	iobj	_	Dep=8|Rel=Obj
7	ne	ne	PART	Q	Polarity=Neg	8	advmod	_	Dep=8|Rel=PPart
8	prepušča	prepuščati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
9	nič	nič	PRON	Pz-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	8	obj	_	SpaceAfter=No|Dep=8|Rel=Obj
10	.	.	PUNCT	Z	_	8	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 iobj	color:blue
1	Idi	Ida	PROPN	Npfsd	Case=Dat|Gender=Fem|Number=Sing	3	iobj	_	Dep=3|Rel=Obj
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	Dep=3|Rel=PPart
3	pomolil	pomoliti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
4	svoj	svoj	DET	Px-msa	Case=Acc|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs|Reflex=Yes	6	det	_	Dep=6|Rel=Atr
5	mobilni	mobilen	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	Dep=6|Rel=Atr
6	telefon	telefon	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	SpaceAfter=No|Dep=3|Rel=Obj
7	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

63 nodes (0%) are attached to their parents as `iobj`.

59 instances of `iobj` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.11111111111111.

The following 7 pairs of parts of speech are connected with `iobj`: [sl-pos/VERB]()-[sl-pos/PRON]() (53; 84% instances), [sl-pos/VERB]()-[sl-pos/NOUN]() (4; 6% instances), [sl-pos/VERB]()-[sl-pos/DET]() (2; 3% instances), [sl-pos/AUX]()-[sl-pos/PRON]() (1; 2% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 2% instances), [sl-pos/VERB]()-[sl-pos/PROPN]() (1; 2% instances), [sl-pos/X]()-[sl-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 iobj	color:blue
1	ko	ko	SCONJ	Cs	_	3	mark	_	word=ko|msd=Vd
2	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	3	aux	_	word=bo|msd=Gp-pte-n
3	prišel	priti	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	word=prešo|msd=Ggdd-em
4	domov	domov	ADV	Rgp	Degree=Pos	3	advmod	_	word=dumu|msd=Rsn
5	pa	pa	CCONJ	Cc	_	9	cc	_	word=pa|msd=Vp
6	ti	ti	PRON	Pp2-sd--y	Case=Dat|Number=Sing|Person=2|PronType=Prs|Variant=Short	9	iobj	_	word=ti|msd=Zod-ed--k
7	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	9	aux	_	word=bo|msd=Gp-pte-n
8	stopnice	stopnica	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	9	obj	_	word=stopnice|msd=Sozmt
9	pokozlal	pokozlati	VERB	Vmep-sm	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	3	conj	_	word=pokozlo|msd=Ggdd-em

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 iobj	color:blue
1	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	obj	_	word=to|msd=Zk-set
2	morate	morati	VERB	Vmpr2p	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=morte|msd=Ggnsdm
3	vprašati	vprašati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	2	xcomp	_	word=vprašat|msd=Ggdn
4	gospoda	gospod	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	iobj	_	word=gospoda|msd=Sometd
5	ministra	minister	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	4	nmod	_	word=ministra|msd=Sometd

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 iobj	color:blue
1	aaa	aaa	INTJ	I	_	3	discourse:filler	_	word=aaa|msd=M
2	edina	edin	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	amod	_	word=edina|msd=Ppnzei
3	stvar	stvar	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	word=stvar|msd=Sozei
4	ki	ki	SCONJ	Cs	_	5	reparandum	_	word=ki|msd=Vd
5	kateri	kateri	DET	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	12	iobj	_	word=kateri|msd=Zv-mei
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	12	aux	_	word=je|msd=Gp-ste-n
7	javnost	javnost	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	12	nsubj	_	word=javnost|msd=Sozei
8	in	in	CCONJ	Cc	_	10	cc	_	word=in|msd=Vp
9	tudi	tudi	PART	Q	_	10	advmod	_	word=tudi|msd=L
10	mediji	medij	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	conj	_	word=mediji|msd=Sommi
11	eee	eee	INTJ	I	_	12	discourse:filler	_	word=eee|msd=M
12	posvetili	posvetiti	VERB	Vmep-pm	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	3	acl	_	word=posvetili|msd=Ggdd-mm
13	pozornost	pozornost	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	12	obj	_	word=pozornost|msd=Sozet
14	so	biti	AUX	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	word=so|msd=Gp-stm-n
15	bili	biti	AUX	Va-p-pm	Gender=Masc|Number=Plur|VerbForm=Part	3	cop	_	word=bili|msd=Gp-d-mm
16	štirje	štirje	NUM	Mlcmpn	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	17	nummod	_	word=štirje|msd=Kbgmmi
17	inštruktorji	inštruktor	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	word=inštruktorji|msd=Sommi
18	v	v	ADP	Sl	Case=Loc	19	case	_	word=v|msd=Dm
19	iraku	Irak	PROPN	Npmsl	Case=Loc|Gender=Masc|Number=Sing	17	nmod	_	word=Iraku|msd=Slmem

~~~


