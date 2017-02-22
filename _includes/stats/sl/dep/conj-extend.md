

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [conj]().

37 nodes (0%) are attached to their parents as `conj:extend`.

37 instances of `conj:extend` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 13 pairs of parts of speech are connected with `conj:extend`: [sl-pos/NOUN]()-[sl-pos/DET]() (7; 19% instances), [sl-pos/VERB]()-[sl-pos/DET]() (6; 16% instances), [sl-pos/VERB]()-[sl-pos/PRON]() (6; 16% instances), [sl-pos/VERB]()-[sl-pos/ADV]() (5; 14% instances), [sl-pos/ADJ]()-[sl-pos/ADV]() (2; 5% instances), [sl-pos/ADJ]()-[sl-pos/DET]() (2; 5% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (2; 5% instances), [sl-pos/VERB]()-[sl-pos/VERB]() (2; 5% instances), [sl-pos/ADJ]()-[sl-pos/PRON]() (1; 3% instances), [sl-pos/ADV]()-[sl-pos/PRON]() (1; 3% instances), [sl-pos/DET]()-[sl-pos/ADV]() (1; 3% instances), [sl-pos/NOUN]()-[sl-pos/NOUN]() (1; 3% instances), [sl-pos/PROPN]()-[sl-pos/ADV]() (1; 3% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 conj:extend	color:blue
1	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	word=mislim|msd=Ggnspe
2	sicer	sicer	CCONJ	Cc	_	7	discourse	_	word=sicer|msd=Vp
3	eem	eem	INTJ	I	_	7	discourse:filler	_	word=eem|msd=M
4	okej	okej	ADV	Rgp	Degree=Pos	7	discourse	_	word=okej|msd=Rsn
5	ful	ful	ADV	Rgp	Degree=Pos	7	advmod	_	word=ful|msd=Rsn
6	sem	biti	AUX	Va-r1s-n	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	word=sn|msd=Gp-spe-n
7	pogrešala	pogrešati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=pogrešala|msd=Ggnd-ez
8	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	word=jaz|msd=Zop-ei
9	kolege	kolega	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	word=kolege|msd=Sommt
10	pa	pa	CCONJ	Cc	_	11	cc	_	word=pa|msd=Vp
11	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	conj:extend	_	word=to|msd=Zk-sei
12	ful	ful	ADV	Rgp	Degree=Pos	7	dislocated	_	word=ful|msd=Rsn

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 conj:extend	color:blue
1	ko	ko	SCONJ	Cs	_	3	mark	_	word=ko|msd=Vd
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	word=je|msd=Gp-ste-n
3	bila	biti	VERB	Va-p-sf	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	word=bla|msd=Gp-d-ez
4	tam	tam	ADV	Rgp	Degree=Pos	3	advmod	_	word=tam|msd=Rsn
5	ali	ali	CCONJ	Cc	_	6	cc	_	word=al|msd=Vp
6	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	conj:extend	_	word=kaj|msd=Zv-sei
7	?	?	PUNCT	Z	_	3	punct	_	word=?|msd=U

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 conj:extend	color:blue
1	tudi	tudi	PART	Q	_	7	advmod	_	word=tut|msd=L
2	ko	ko	SCONJ	Cs	_	7	mark	_	word=ku|msd=Vd
3	pri	pri	ADP	Sl	Case=Loc	5	case	_	word=par|msd=Dm
4	štirje	štirje	NUM	Mlcmpn	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	word=Štirje|msd=Kbgmmi
5	revni	reven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	obl	_	word=revni|msd=Ppnmmi
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	word=vajš|msd=Ggnsde
7	špila	špilati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=špejla|msd=Ggnste
8	na	na	ADP	Sa	Case=Acc	9	case	_	word=na|msd=Dt
9	glavnik	glavnik	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	word=glavnejk|msd=Sometn
10	pa	pa	CCONJ	Cc	_	11	cc	_	word=pa|msd=Vp
11	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	conj:extend	_	word=tav|msd=Zk-sei

~~~


