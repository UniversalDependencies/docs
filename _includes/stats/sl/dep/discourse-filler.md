

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [discourse]().

728 nodes (2%) are attached to their parents as `discourse:filler`.

707 instances of `discourse:filler` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.13873626373626.

The following 14 pairs of parts of speech are connected with `discourse:filler`: [sl-pos/VERB]()-[sl-pos/INTJ]() (345; 47% instances), [sl-pos/NOUN]()-[sl-pos/INTJ]() (207; 28% instances), [sl-pos/ADJ]()-[sl-pos/INTJ]() (60; 8% instances), [sl-pos/PRON]()-[sl-pos/INTJ]() (34; 5% instances), [sl-pos/ADV]()-[sl-pos/INTJ]() (19; 3% instances), [sl-pos/PART]()-[sl-pos/INTJ]() (18; 2% instances), [sl-pos/PROPN]()-[sl-pos/INTJ]() (15; 2% instances), [sl-pos/CONJ]()-[sl-pos/INTJ]() (7; 1% instances), [sl-pos/NUM]()-[sl-pos/INTJ]() (7; 1% instances), [sl-pos/ADP]()-[sl-pos/INTJ]() (5; 1% instances), [sl-pos/X]()-[sl-pos/INTJ]() (4; 1% instances), [sl-pos/DET]()-[sl-pos/INTJ]() (3; 0% instances), [sl-pos/INTJ]()-[sl-pos/INTJ]() (2; 0% instances), [sl-pos/SCONJ]()-[sl-pos/INTJ]() (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse:filler	color:blue
1	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
2	in	in	CONJ	Cc	_	6	cc	_	word=in|msd=Vp
3	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	reparandum	_	word=je|msd=Gp-ste-n
4	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
5	on	on	PRON	Pp3msn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	word=on|msd=Zotmei
6	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=je|msd=Gp-ste-n
7	tam	tam	ADV	Rgp	Degree=Pos	9	advmod	_	word=tm|msd=Rsn
8	na	na	ADP	Sl	Case=Loc	9	case	_	word=na|msd=Dm
9	intenzivi	intenziva	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	6	nmod	_	word=intenzivi|msd=Sozem

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 discourse:filler	color:blue
1	torej	torej	CONJ	Cc	_	7	cc	_	word=torej|msd=Vp
2	pač	pač	PART	Q	_	7	advmod	_	word=pač|msd=L
3	iz	iz	ADP	Sg	Case=Gen	7	case	_	word=iz|msd=Dr
4	eee	eee	INTJ	I	_	7	discourse:filler	_	word=eee|msd=M
5	pač	pač	PART	Q	_	7	advmod	_	word=pš|msd=L
6	tozadevnega	tozadeven	ADJ	Agpmsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	7	amod	_	word=tozadevnga|msd=Ppnmer
7	specialista	specialist	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	0	root	_	word=špecialista|msd=Somer
8	no	no	PART	Q	_	7	discourse	_	word=no|msd=L
9	…	…	PUNCT	Z	_	7	punct	_	word=…|msd=U
10	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M
11	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M
12	mhm	mhm	INTJ	I	_	7	discourse	_	word=mhm|msd=M

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 6 discourse:filler	color:blue
1	ne	ne	PART	Q	_	12	discourse	_	word=ne|msd=L
2	ta	ta	PRON	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	reparandum	_	word=ta|msd=Zk-zei
3	ta	ta	PRON	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	12	nsubj	_	word=ta|msd=Zk-zei
4	je	biti	VERB	Va-r3s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	word=je|msd=Gp-ste-n
5	taka	tak	DET	Pd-fsn	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	12	det	_	word=taka|msd=Zk-zei
6	eem	eem	INTJ	I	_	12	discourse:filler	_	word=eem|msd=M
7	k	_	X	Xt	_	9	reparandum	_	word=k|msd=Nt
8	[gap]	[gap]	X	X	_	12	punct	_	word=[gap]|msd=N
9	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	word=jz|msd=Zop-ei
10	temu	ta	PRON	Pd-nsd	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	11	dobj	_	word=temu|msd=Zk-sed
11	pravim	praviti	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	12	parataxis	_	word=pravm|msd=Ggvspe
12	življenjska	življenjski	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	word=živlenjska|msd=Ppnzei

~~~


