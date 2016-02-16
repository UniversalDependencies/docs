

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

14445 nodes (4%) are attached to their parents as `mark`.

7688 instances of `mark` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.14364832121841.

The following 25 pairs of parts of speech are connected with `mark`: [hi-pos/VERB]()-[hi-pos/ADP]() (7056; 49% instances), [hi-pos/VERB]()-[hi-pos/SCONJ]() (5657; 39% instances), [hi-pos/NOUN]()-[hi-pos/SCONJ]() (689; 5% instances), [hi-pos/VERB]()-[hi-pos/ADV]() (485; 3% instances), [hi-pos/ADJ]()-[hi-pos/SCONJ]() (275; 2% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (114; 1% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (37; 0% instances), [hi-pos/PROPN]()-[hi-pos/SCONJ]() (32; 0% instances), [hi-pos/PRON]()-[hi-pos/SCONJ]() (29; 0% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (21; 0% instances), [hi-pos/DET]()-[hi-pos/SCONJ]() (15; 0% instances), [hi-pos/NUM]()-[hi-pos/SCONJ]() (6; 0% instances), [hi-pos/ADV]()-[hi-pos/SCONJ]() (5; 0% instances), [hi-pos/PART]()-[hi-pos/SCONJ]() (4; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (4; 0% instances), [hi-pos/X]()-[hi-pos/SCONJ]() (3; 0% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (2; 0% instances), [hi-pos/AUX]()-[hi-pos/SCONJ]() (2; 0% instances), [hi-pos/DET]()-[hi-pos/DET]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/ADV]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/PART]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (1; 0% instances), [hi-pos/PROPN]()-[hi-pos/NOUN]() (1; 0% instances), [hi-pos/PROPN]()-[hi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 mark	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 3 mark	color:blue
1	गौरतलब	गौरतलब	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=gauratalaba
2	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
3	कि	कि	SCONJ	CC	_	10	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|Translit=ki
4	लोकल	लोकल	ADJ	JJ	Case=Acc	6	amod	_	ChunkId=NP2|ChunkType=child|Translit=lokala
5	फिक्सड	फिक्सड	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=phiksaḍa
6	फोन	फोन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0_पर|Tam=0|ChunkId=NP2|ChunkType=head|Translit=phona
7	पर	पर	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP2|ChunkType=child|Translit=para
8	एडीसी	एडीसी	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=eḍīsī
9	नहीं	नहीं	PART	NEG	Negative=Neg|PronType=Neg	10	neg	_	ChunkId=VGF2|ChunkType=child|Translit=nahīṁ
10	देनी	दे	VERB	VM	Gender=Fem|Number=Sing|Person=3|VerbForm=Inf|Voice=Act	1	nsubj	_	Vib=ना_पड़+ता_है|Tam=nA|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=denī
11	पड़ती	पड़	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Sing|Person=3|VerbForm=Part	10	aux	_	Vib=ता|Tam=wA|ChunkId=VGF2|ChunkType=child|Translit=paṛatī
12	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=child|Translit=hai
13	।	।	PUNCT	SYM	_	1	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	उन्होंने	वह	PRON	PRP	Case=Acc,Erg|Number=Sing|Person=3|Polite=Pol|PronType=Prs	2	nsubj	_	Vib=ने|Tam=ne|ChunkId=NP|ChunkType=head|Translit=unhoṁne
2	कहा	कह	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=kahā
3	कि	कि	SCONJ	CC	_	6	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|Translit=ki
4	यह	यह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=yaha
5	सरासर	सरासर	ADV	RB	_	6	advmod	_	ChunkId=RBP|ChunkType=head|Translit=sarāsara
6	विश्वासघात	विश्वासघात	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=viśvāsaghāta
7	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=hai
8	।	।	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


