

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

4960 nodes (1%) are attached to their parents as `dep`.

4207 instances of `dep` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36915322580645.

The following 24 pairs of parts of speech are connected with `dep`: [hi-pos/NOUN]()-[hi-pos/PART]() (2072; 42% instances), [hi-pos/PROPN]()-[hi-pos/PART]() (608; 12% instances), [hi-pos/PRON]()-[hi-pos/PART]() (594; 12% instances), [hi-pos/NUM]()-[hi-pos/PART]() (385; 8% instances), [hi-pos/VERB]()-[hi-pos/PART]() (306; 6% instances), [hi-pos/ADV]()-[hi-pos/PART]() (287; 6% instances), [hi-pos/ADP]()-[hi-pos/PART]() (261; 5% instances), [hi-pos/DET]()-[hi-pos/PART]() (135; 3% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (99; 2% instances), [hi-pos/ADJ]()-[hi-pos/PART]() (88; 2% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (48; 1% instances), [hi-pos/CONJ]()-[hi-pos/PART]() (31; 1% instances), [hi-pos/AUX]()-[hi-pos/PART]() (18; 0% instances), [hi-pos/SCONJ]()-[hi-pos/PART]() (8; 0% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (6; 0% instances), [hi-pos/PART]()-[hi-pos/PART]() (4; 0% instances), [hi-pos/ADV]()-[hi-pos/ADV]() (2; 0% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (2; 0% instances), [hi-pos/DET]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/PROPN]()-[hi-pos/PROPN]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/NUM]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dep	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मूर्ति	मूर्ति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=mūrti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	2	case	_	ChunkId=NP|ChunkType=child|Translit=ke
4	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
5	करीब	करीब	PART	RP	_	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=karība
6	पाँच	पाँच	NUM	QCC	NumType=Card	7	dep	_	ChunkId=NP2|ChunkType=child|Translit=pām̃ca
7	सौ	सौ	NUM	QC	NumType=Card	8	nummod	_	ChunkId=NP2|ChunkType=child|Translit=sau
8	वर्ष	वर्ष	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=varṣa
9	पुराना	पुराना	ADJ	JJ	Gender=Masc|Number=Sing	10	xcomp	_	ChunkId=JJP|ChunkType=head|Translit=purānā
10	होने	हो	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	12	nmod	_	Vib=ना_का|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=hone
11	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	10	mark	_	ChunkId=VGNN|ChunkType=child|Translit=kā
12	प्रमाण	प्रमाण	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=pramāṇa
13	मिलता	मिल	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=milatā
14	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 dep	color:blue
1	राजग	राजग	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	Vib=0_ने|Tam=0|ChunkId=NP|ChunkType=head|Translit=rājaga
2	ने	ने	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=ne
3	सोमवार	सोमवार	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=somavāra
4	राष्ट्रपति	राष्ट्रपति	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	iobj	_	Vib=0_को|Tam=0|ChunkId=NP3|ChunkType=head|Translit=rāṣṭrapati
5	को	को	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP3|ChunkType=child|Translit=ko
6	भी	भी	PART	RP	_	4	dep	_	ChunkId=NP3|ChunkType=child|Translit=bhī
7	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	8	det	_	ChunkId=NP4|ChunkType=child|Translit=isa
8	संबंध	संबंध	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0_में|Tam=0|ChunkId=NP4|ChunkType=head|Translit=saṁbaṁdha
9	में	में	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP4|ChunkType=child|Translit=meṁ
10	ज्ञापन	ज्ञापन	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	dobj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=jñāpana
11	सौंपा	सौंप	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=sauṁpā
12	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 dep	color:blue
1	अब	अब	PRON	PRP	Case=Nom|PronType=Prs	6	nmod	_	ChunkId=NP|ChunkType=head|Translit=aba
2	तो	तो	PART	RP	_	1	dep	_	ChunkId=NP|ChunkType=child|Translit=to
3	मुशर्रफ	मुशर्रफ	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=muśarrapha
4	एक	एक	NUM	QC	NumType=Card	5	nummod	_	ChunkId=NP3|ChunkType=child|Translit=eka
5	बयान	बयान	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=bayāna
6	देते	दे	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polite=Pol|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=dete
7	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Pol|Tense=Pres|VerbForm=Fin	6	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
8	और	और	CONJ	CC	_	6	cc	_	ChunkId=CCP|ChunkType=head|Translit=aura
9	अगले	अगला	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	10	amod	_	ChunkId=NP4|ChunkType=child|Translit=agale
10	दिन	दिन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=dina
11	उस	वह	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	13	nmod	_	Vib=0_पर|Tam=0|ChunkId=NP5|ChunkType=head|Translit=usa
12	पर	पर	ADP	PSP	AdpType=Post	11	case	_	ChunkId=NP5|ChunkType=child|Translit=para
13	पलट	पलट	VERB	VM	Gender=Masc|Number=Sing|Person=3|Polite=Pol|Voice=Act	6	conj	_	Vib=0_जा+ता_है|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=palaṭa
14	जाते	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polite=Pol|VerbForm=Part	13	aux	_	Vib=ता|Tam=wA|ChunkId=VGF2|ChunkType=child|Translit=jāte
15	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Pol|Tense=Pres|VerbForm=Fin	14	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=child|Translit=haiṁ
16	।	।	PUNCT	SYM	_	6	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


