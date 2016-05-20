

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Slovenian-SST)

This relation is a language-specific subtype of [parataxis]().
There are also 1 other language-specific subtypes of `parataxis`: [parataxis:restart]().

224 nodes (1%) are attached to their parents as `parataxis:discourse`.

143 instances of `parataxis:discourse` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.78571428571429.

The following 10 pairs of parts of speech are connected with `parataxis:discourse`: [sl-pos/VERB]()-[sl-pos/VERB]() (138; 62% instances), [sl-pos/NOUN]()-[sl-pos/VERB]() (38; 17% instances), [sl-pos/ADJ]()-[sl-pos/VERB]() (21; 9% instances), [sl-pos/PRON]()-[sl-pos/VERB]() (12; 5% instances), [sl-pos/ADV]()-[sl-pos/VERB]() (8; 4% instances), [sl-pos/NUM]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/PROPN]()-[sl-pos/VERB]() (2; 1% instances), [sl-pos/PART]()-[sl-pos/VERB]() (1; 0% instances), [sl-pos/VERB]()-[sl-pos/ADJ]() (1; 0% instances), [sl-pos/X]()-[sl-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 parataxis:discourse	color:blue
1	samo	samo	PART	Q	_	5	cc	_	word=sam|msd=L
2	jebi	jebati	VERB	Vmpm2s	Aspect=Imp|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	5	parataxis:discourse	_	word=jebiga[split_1-2]|msd=Ggnvde
3	ga	on	PRON	Pp3msa--y	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Variant=Short	2	dobj	_	word=jebiga[split_2-2]|msd=Zotmet--k
4	ampak	ampak	CONJ	Cc	_	5	cc	_	word=ampak|msd=Vp
5	sliši	slišati	VERB	Vmbr3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	word=sliš|msd=Ggvste
6	se	se	PRON	Px------y	PronType=Prs|Variant=Short	5	expl	_	word=se|msd=Zp------k
7	pa	pa	CONJ	Cc	_	5	advmod	_	word=pa|msd=Vp
8	ne	ne	PART	Q	_	5	discourse	_	word=ne|msd=L
9	a	a	ADV	Rgp	Degree=Pos	10	advmod	_	word=a|msd=Rsn
10	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	5	parataxis:discourse	_	word=veš|msd=Ggnsde

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 parataxis:discourse	color:blue
1	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
2	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
3	ja	ja	PART	Q	_	4	discourse	_	word=ja|msd=L
4	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	0	root	_	word=kej|msd=Zv-sei
5	pa	pa	CONJ	Cc	_	4	advmod	_	word=pa|msd=Vp
6	…	…	PUNCT	Z	_	4	punct	_	word=…|msd=U
7	mislim	misliti	VERB	Vmpr1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	parataxis:discourse	_	word=misim|msd=Ggnspe
8	brez	brez	ADP	Sg	Case=Gen	9	case	_	word=brez|msd=Dr
9	veze	veza	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	4	parataxis	_	word=veze|msd=Sozer
10	saj	saj	CONJ	Cc	_	9	discourse	_	word=sej|msd=Vp
11	saj	saj	CONJ	Cc	_	9	discourse	_	word=sej|msd=Vp

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 parataxis:discourse	color:blue
1	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	parataxis:discourse	_	word=veš|msd=Ggnsde
2	eee	eee	INTJ	I	_	9	discourse:filler	_	word=eee|msd=M
3	jaz	jaz	PRON	Pp1-sn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	word=jaz|msd=Zop-ei
4	bom	biti	VERB	Va-f1s-n	Mood=Ind|Negative=Pos|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin	9	cop	_	word=bom|msd=Gp-ppe-n
5	pa	pa	CONJ	Cc	_	9	advmod	_	word=pa|msd=Vp
6	od	od	ADP	Sg	Case=Gen	7	case	_	word=od|msd=Dr
7	srede	sreda	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	word=srejde|msd=Sozer
8	naprej	naprej	ADV	Rgp	Degree=Pos	7	advmod	_	word=naprej|msd=Rsn
9	fraj	fraj	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	word=fraj|msd=Ppnzei

~~~


