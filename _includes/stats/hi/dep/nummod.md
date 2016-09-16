

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

5588 nodes (2%) are attached to their parents as `nummod`.

5558 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.31084466714388.

The following 7 pairs of parts of speech are connected with `nummod`: [hi-pos/NOUN]()-[hi-pos/NUM]() (5391; 96% instances), [hi-pos/PROPN]()-[hi-pos/NUM]() (94; 2% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (67; 1% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (16; 0% instances), [hi-pos/ADJ]()-[hi-pos/NUM]() (16; 0% instances), [hi-pos/DET]()-[hi-pos/NUM]() (2; 0% instances), [hi-pos/PRON]()-[hi-pos/NUM]() (2; 0% instances).


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
8	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
9	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मुठभेड़	मुठभेड़	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	13	nmod	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=muṭhabheṛa
3	में	में	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
4	एक	एक	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP2|ChunkType=child|Translit=eka
5	जेसीओ	जेसीओ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nmod	_	Vib=0_सहित|Tam=0|ChunkId=NP2|ChunkType=head|Translit=jesīo
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nummod	color:blue
1	सीमा	सीमा	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=sīmā
2	में	में	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
3	इनके	यह	PRON	PRP	Case=Acc,Gen|Gender=Masc|Number=Plur|Person=3|Poss=Yes|PronType=Prs	4	dobj	_	Vib=का|Tam=kA|ChunkId=NP2|ChunkType=head|Translit=inake
4	घुसने	घुस	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	9	nmod	_	Vib=ना_का|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=ghusane
5	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	mark	_	ChunkId=VGNN|ChunkType=child|Translit=ke
6	एक	एक	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP3|ChunkType=child|Translit=eka
7	-	-	PUNCT	SYM	_	6	punct	_	ChunkId=NP3|ChunkType=child|Translit=-
8	दो	दो	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child|Translit=do
9	दिन	दिन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	nmod	_	Vib=0_के_भीतर|Tam=0|ChunkId=NP3|ChunkType=head|Translit=dina
10	के	के	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
11	भीतर	भीतर	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	9	case	_	AltTag=ADP-NOUN|ChunkId=NP3|ChunkType=child|Translit=bhītara
12	ही	ही	PART	RP	_	11	dep	_	ChunkId=NP3|ChunkType=child|Translit=hī
13	पता	पता	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	14	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=patā
14	चल	चल	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	Vib=0_जा+ता_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=cala
15	जाता	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	14	aux	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=jātā
16	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
17	।	।	PUNCT	SYM	_	14	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


