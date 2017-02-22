

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

5042 nodes (2%) are attached to their parents as `nummod`.

5012 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31713605712019.

The following 7 pairs of parts of speech are connected with `nummod`: [hi-pos/NOUN]()-[hi-pos/NUM]() (4867; 97% instances), [hi-pos/PROPN]()-[hi-pos/NUM]() (83; 2% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (61; 1% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (14; 0% instances), [hi-pos/ADJ]()-[hi-pos/NUM]() (13; 0% instances), [hi-pos/DET]()-[hi-pos/NUM]() (2; 0% instances), [hi-pos/PRON]()-[hi-pos/NUM]() (2; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nummod	color:blue
1	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=maṁdira
2	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=ke
3	पूर्व	पूर्व	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=pūrva
4	हिस्‍से	हिस्सा	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=hisse
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
6	एक	एक	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|Translit=eka
7	स्‍तूप	स्तूप	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=stūpa
8	है	है	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
9	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मुठभेड़	मुठभेड़	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	13	obl	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=muṭhabheṛa
3	में	में	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
4	एक	एक	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP2|ChunkType=child|Translit=eka
5	जेसीओ	जेसीओ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	obl	_	Vib=0_सहित|Tam=0|ChunkId=NP2|ChunkType=head|Translit=jesīo
6	सहित	सहित	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child|Translit=sahita
7	सेना	सेना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=senā
8	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	7	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
9	चार	चार	NUM	QC	NumType=Card	10	nummod	_	ChunkId=NP4|ChunkType=child|Translit=cāra
10	जवान	जवान	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=javāna
11	भी	भी	PART	RP	_	10	dep	_	ChunkId=NP4|ChunkType=child|Translit=bhī
12	शहीद	शहीद	ADJ	JJ	_	13	compound	_	ChunkId=JJP|ChunkType=head|Translit=śahīda
13	हो	हो	VERB	VM	Number=Plur|Voice=Act	0	root	_	Vib=0_जा+या१|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=ho
14	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	13	aux	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nummod	color:blue
1	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=vaha
2	दो	दो	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child|Translit=do
3	-	-	PUNCT	SYM	_	2	punct	_	ChunkId=NP2|ChunkType=child|Translit=-
4	तीन	तीन	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP2|ChunkType=child|Translit=tīna
5	दिन	दिन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	obl	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=dina
6	में	में	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
7	नोएडा	नोएडा	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	obl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=noeḍā
8	पहुंच	पहुंच	VERB	VM	Gender=Fem|Number=Sing|Person=3|Voice=Act	0	root	_	Vib=0_रह+या_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=pahuṁca
9	रही	रह	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	8	aux	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=child|Translit=rahī
10	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
11	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


