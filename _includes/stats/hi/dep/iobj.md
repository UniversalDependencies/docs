

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

2518 nodes (1%) are attached to their parents as `iobj`.

2518 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.95949166004766.

The following 14 pairs of parts of speech are connected with `iobj`: [hi-pos/VERB]()-[hi-pos/NOUN]() (1388; 55% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (746; 30% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (331; 13% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (18; 1% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (12; 0% instances), [hi-pos/NOUN]()-[hi-pos/NOUN]() (5; 0% instances), [hi-pos/NOUN]()-[hi-pos/PROPN]() (5; 0% instances), [hi-pos/ADJ]()-[hi-pos/NOUN]() (3; 0% instances), [hi-pos/ADJ]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/ADJ]()-[hi-pos/PROPN]() (2; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/NUM]() (2; 0% instances), [hi-pos/PUNCT]()-[hi-pos/PROPN]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 iobj	color:blue
1	इसके	यह	PRON	PRP	Case=Acc,Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	nmod	_	Vib=0_अलावा|Tam=ke|ChunkId=NP|ChunkType=head|Translit=isake
2	अलावा	अलावा	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=alāvā
3	टेक्सटाइल	टेक्सटाइल	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=ṭeksaṭāila
4	क्षेत्र	क्षेत्र	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	iobj	_	Vib=0_को|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kṣetra
5	को	को	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=ko
6	भी	भी	PART	RP	_	4	dep	_	ChunkId=NP2|ChunkType=child|Translit=bhī
7	कुछ	कुछ	DET	QF	PronType=Ind	9	det	_	ChunkId=NP3|ChunkType=child|Translit=kucha
8	टैक्स	टैक्स	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=ṭaiksa
9	राहत	राहत	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=rāhata
10	मिल	मिल	VERB	VM	Gender=Fem|Number=Sing|Person=3|Voice=Act	0	root	_	Vib=0_सक+ता_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=mila
11	सकती	सक	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	10	aux	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=sakatī
12	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
13	।	.	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 iobj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 iobj	color:blue
1	जबकि	जबकि	CONJ	CC	_	12	cc	_	ChunkId=CCP|ChunkType=head|Translit=jabaki
2	ससुर	ससुर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	dobj	_	Vib=0_को|Tam=0|ChunkId=NP|ChunkType=head|Translit=sasura
3	को	को	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=ko
4	कोई	कोई	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	case	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=koī
5	सजा	सजा	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sajā
6	तो	तो	PART	RP	_	5	dep	_	ChunkId=NP2|ChunkType=child|Translit=to
7	दूर	दूर	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	advmod	_	AltTag=ADV-NOUN|ChunkId=NP3|ChunkType=head|Translit=dūra
8	उसे	वह	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	12	iobj	_	Vib=को|Tam=ko|ChunkId=NP4|ChunkType=head|Translit=use
9	'	SINGLE_QUOTE	PUNCT	SYM	_	10	punct	_	ChunkId=NP5|ChunkType=child|Translit='
10	आजादी	आजादी	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	acl	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=ājādī
11	'	SINGLE_QUOTE	PUNCT	SYM	_	10	punct	_	ChunkId=NP5|ChunkType=child|Translit='
12	बख्श	बख्श	VERB	VM	Number=Sing|Voice=Act	0	root	_	Vib=0_दे+या|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=bakhśa
13	दी	दे	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	12	aux	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=child|Translit=dī
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


