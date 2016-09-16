

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

3512 nodes (1%) are attached to their parents as `cop`.

3511 instances of `cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.49458997722096.

The following 10 pairs of parts of speech are connected with `cop`: [hi-pos/NOUN]()-[hi-pos/VERB]() (2129; 61% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (1028; 29% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (116; 3% instances), [hi-pos/PROPN]()-[hi-pos/VERB]() (114; 3% instances), [hi-pos/DET]()-[hi-pos/VERB]() (61; 2% instances), [hi-pos/NUM]()-[hi-pos/VERB]() (33; 1% instances), [hi-pos/ADV]()-[hi-pos/VERB]() (19; 1% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (8; 0% instances), [hi-pos/X]()-[hi-pos/VERB]() (3; 0% instances), [hi-pos/SCONJ]()-[hi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 cop	color:blue
1	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=kuśīnagara
2	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=kā
3	सबसे	सबसे	ADV	INTF	AdvType=Deg	4	advmod	_	AltTag=avy-ADV|ChunkId=NP2|ChunkType=child|Translit=sabase
4	ज्‍यादा	ज्यादा	DET	QF	PronType=Ind	5	det	_	ChunkId=NP2|ChunkType=child|Translit=jyādā
5	महत्‍व	महत्व	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=mahatva
6	बौद्ध	बौद्ध	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=bauddha
7	तीर्थ	तीर्थ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0_के_रूप_में|Tam=0|ChunkId=NP3|ChunkType=head|Translit=tīrtha
8	के	के	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc	7	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
9	रूप	रूप	ADP	PSP	Case=Acc|Gender=Masc	7	case	_	ChunkId=NP3|ChunkType=child|Translit=rūpa
10	में	में	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child|Translit=meṁ
11	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
12	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 cop	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मंदिर	मंदिर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=maṁdira
3	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child|Translit=kā
4	स्‍थापत्‍य	स्थापत्य	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sthāpatya
5	अजंता	अजंता	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ajaṁtā
6	की	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Plur	5	case	_	ChunkId=NP3|ChunkType=child|Translit=kī
7	गुफाओं	गुफा	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	9	nmod	_	Vib=0_से|Tam=0|ChunkId=NP4|ChunkType=head|Translit=guphāoṁ
8	से	से	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP4|ChunkType=child|Translit=se
9	प्रेरित	प्रेरित	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=prerita
10	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
11	।	।	PUNCT	SYM	_	9	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cop	color:blue
1	यह	यह	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=yaha
2	संबंध	संबंध	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=saṁbaṁdha
3	इतने	इतना	DET	QF	Gender=Masc|Number=Plur	4	det	_	ChunkId=JJP|ChunkType=child|Translit=itane
4	बेहतर	बेहतर	ADJ	JJ	_	5	amod	_	ChunkId=JJP|ChunkType=head|Translit=behatara
5	कभी	कभी	PRON	PRP	PronType=Prs	0	root	_	ChunkId=NP2|ChunkType=head|Translit=kabhī
6	नहीं	नहीं	PART	NEG	Negative=Neg|PronType=Neg	7	neg	_	ChunkId=VGF|ChunkType=child|Translit=nahīṁ
7	थे	था	VERB	VM	Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	Vib=था|Tam=WA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=the
8	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


