

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

729 nodes (0%) are attached to their parents as `xcomp`.

721 instances of `xcomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55006858710562.

The following 8 pairs of parts of speech are connected with `xcomp`: [hi-pos/VERB]()-[hi-pos/ADJ]() (320; 44% instances), [hi-pos/VERB]()-[hi-pos/NOUN]() (268; 37% instances), [hi-pos/VERB]()-[hi-pos/DET]() (38; 5% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (31; 4% instances), [hi-pos/VERB]()-[hi-pos/NUM]() (27; 4% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (26; 4% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (11; 2% instances), [hi-pos/VERB]()-[hi-pos/ADV]() (8; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 xcomp	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
1	मंदिर	मंदिर	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child|Translit=maṁdira
2	परिसर	परिसर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	advmod	_	Vib=0_में|Tam=0|ChunkId=NP|ChunkType=head|Translit=parisara
3	में	में	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=meṁ
4	मौजूद	मौजूद	ADJ	JJ	Case=Nom	5	amod	_	ChunkId=JJP|ChunkType=head|Translit=maujūda
5	चैत्‍य	चैत्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=caitya
6	सभी	सब	PRON	PRP	Case=Acc|PronType=Prs	8	nmod	_	Vib=0_का|ChunkId=NP3|ChunkType=head|Translit=sabhī
7	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
8	आकर्षण	आकर्षण	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0_का|Tam=0|ChunkId=NP4|ChunkType=head|Translit=ākarṣaṇa
9	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	8	case	_	ChunkId=NP4|ChunkType=child|Translit=kā
10	केंद्र	केंद्र	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	xcomp	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=keṁdra
11	बन	बन	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	Vib=0_जा+ता_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=bana
12	जाता	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	11	aux	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=jātā
13	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
14	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	पिछले	पिछला	ADJ	JJ	Case=Acc|Gender=Masc|Number=Sing	2	amod	_	ChunkId=NP|ChunkType=child|Translit=pichale
2	साल	साल	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	advmod	_	Vib=0_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=sāla
3	से	से	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=se
4	कम	कम	DET	QF	PronType=Ind	5	xcomp	_	AltTag=ADJ-DET|ChunkId=JJP|ChunkType=head|Translit=kama
5	पहुंचे	पहुंच	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	0	root	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=pahuṁce
6	भक्त	भक्त	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=bhakta
7	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


