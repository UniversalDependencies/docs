

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is universal.

6 nodes (0%) are attached to their parents as `goeswith`.

6 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66666666666667.

The following 5 pairs of parts of speech are connected with `goeswith`: [sl-pos/INTJ]()-[sl-pos/INTJ]() (2; 33% instances), [sl-pos/ADJ]()-[sl-pos/X]() (1; 17% instances), [sl-pos/ADV]()-[sl-pos/ADV]() (1; 17% instances), [sl-pos/DET]()-[sl-pos/ADV]() (1; 17% instances), [sl-pos/X]()-[sl-pos/X]() (1; 17% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 20 goeswith	color:blue
1	pa	pa	CCONJ	Cc	_	3	cc	_	word=pa|msd=Vp
2	če	če	SCONJ	Cs	_	3	mark	_	word=če|msd=Vd
3	noče	hoteti	VERB	Vmpr3s-y	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	11	advcl	_	word=noče|msd=Ggnste-d
4	zaspati	zaspati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	3	xcomp	_	word=zaspat|msd=Ggdn
5	ko	ko	SCONJ	Cs	_	8	mark	_	word=ko|msd=Vd
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	cop	_	word=je|msd=Gp-ste-n
7	še	še	PART	Q	_	8	advmod	_	word=še|msd=L
8	mala	mali	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	3	advcl	_	word=mala|msd=Ppnzei
9	pa	pa	CCONJ	Cc	_	11	cc	_	word=pa|msd=Vp
10	ji	on	PRON	Pp3fsd--y	Case=Dat|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Variant=Short	11	obj	_	word=ji|msd=Zotzed--k
11	špilaš	špilati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	word=špilaš|msd=Ggnsde
12	pred	pred	ADP	Si	Case=Ins	13	case	_	word=pred|msd=Do
13	posteljico	posteljica	NOUN	Ncfsi	Case=Ins|Gender=Fem|Number=Sing	11	obl	_	word=postelco|msd=Sozeo
14	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis:discourse	_	word=veš|msd=Ggnsde
15	[audience:laughter]	[audience:laughter]	X	X	_	11	punct	_	word=[audience:laughter]|msd=N
16	tako	tako	ADV	Rgp	Degree=Pos	17	advmod	_	word=tak|msd=Rsn
17	delaš	delati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	parataxis	_	word=delaš|msd=Ggnsde
18	ti	ti	INTJ	I	_	17	discourse	_	word=ti|msd=M
19	di	di	INTJ	I	_	18	goeswith	_	word=di|msd=M
20	di	di	INTJ	I	_	18	goeswith	_	word=di|msd=M
21	pa	pa	CCONJ	Cc	_	23	cc	_	word=pa|msd=Vp
22	še	še	PART	Q	_	23	advmod	_	word=še|msd=L
23	igraš	igrati	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	17	conj	_	word=igraš|msd=Ggnsde

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 goeswith	color:blue
1	koliko	koliko	DET	Rgp	PronType=Int	5	advmod	_	word=klik|msd=Rsn
2	bart	bart	ADV	Rgp	Degree=Pos	1	goeswith	_	word=bart|msd=Rsn
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	word=ji|msd=Gp-ste-n
4	že	že	PART	Q	_	5	advmod	_	word=ži|msd=L
5	vlačila	vlačiti	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=vačuva|msd=Ggnd-ez
6	nas	jaz	PRON	Pp1-pa	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	obj	_	word=nas|msd=Zop-mt
7	[name:personal]	[name:personal]	PROPN	X	_	5	nsubj	_	word=[name:personal]|msd=N
8	notri	notri	ADV	Rgp	Degree=Pos	10	advmod	_	word=tentri|msd=Rsn
9	po	po	ADP	Sl	Case=Loc	10	case	_	word=pu|msd=Dm
10	špitalih	špital	NOUN	Ncmpl	Case=Loc|Gender=Masc|Number=Plur	5	obl	_	word=špatalah|msd=Sommm
11	a	a	ADV	Rgp	Degree=Pos	5	discourse	_	word=a|msd=Rsn
12	?	?	PUNCT	Z	_	5	punct	_	word=?|msd=U
13	ja	ja	PART	Q	_	14	discourse	_	word=ja|msd=L
14	bom	biti	VERB	Va-f1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	parataxis	_	word=bom|msd=Gp-ppe-n
15	ti	ti	PRON	Pp2-sn	Case=Nom|Number=Sing|Person=2|PronType=Prs	17	nsubj	_	word=ti|msd=Zod-ei
16	pa	pa	CCONJ	Cc	_	17	advmod	_	word=pa|msd=Vp
17	izračunaj	izračunati	VERB	Vmem2s	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	14	parataxis	_	word=zračuni|msd=Ggdvde
18	ta	ta	DET	Pd-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	19	det	_	word=ti|msd=Zk-mei
19	prvo	prvo	ADV	Rgp	Degree=Pos	17	advmod	_	word=pruvi|msd=Rsn
20	ne	ne	PART	Q	_	22	discourse	_	word=nak|msd=L
21	skupaj	skupaj	ADV	Rgp	Degree=Pos	22	advmod	_	word=upi|msd=Rsn
22	računajva	računati	VERB	Vmpm1d	Aspect=Imp|Mood=Imp|Number=Dual|Person=1|VerbForm=Fin	14	parataxis	_	word=računama|msd=Ggnvpd
23	pojdi	iti	VERB	Vmbm2s	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	22	parataxis	_	word=pojd|msd=Ggvvde

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 goeswith	color:blue
1	saj	saj	CCONJ	Cc	_	9	cc	_	word=sej|msd=Vp
2	z	_	X	Xt	_	9	advmod	_	word=z|msd=Nt
3	[gap]	[gap]	X	X	_	9	punct	_	word=[gap]|msd=N
4	[gap]	[gap]	X	X	_	9	punct	_	word=[gap]|msd=N
5	dej	_	X	Xt	_	2	goeswith	_	word=dej|msd=Nt
6	pa	pa	CCONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
7	ja	ja	PART	Q	_	9	advmod	_	word=ja|msd=L
8	vse	ves	DET	Pg-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	9	obj	_	word=vse|msd=Zc-set
9	obdelajo	obdelati	VERB	Vmer3p	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=obdelajo|msd=Ggdstm

~~~


