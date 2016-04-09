

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

16647 nodes (5%) are attached to their parents as `root`.

16647 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.4770228870067.

The following 11 pairs of parts of speech are connected with `root`: [hi-pos/ROOT]()-[hi-pos/VERB]() (14503; 87% instances), [hi-pos/ROOT]()-[hi-pos/NOUN]() (1249; 8% instances), [hi-pos/ROOT]()-[hi-pos/ADJ]() (677; 4% instances), [hi-pos/ROOT]()-[hi-pos/PROPN]() (79; 0% instances), [hi-pos/ROOT]()-[hi-pos/PRON]() (76; 0% instances), [hi-pos/ROOT]()-[hi-pos/DET]() (23; 0% instances), [hi-pos/ROOT]()-[hi-pos/NUM]() (23; 0% instances), [hi-pos/ROOT]()-[hi-pos/ADV]() (13; 0% instances), [hi-pos/ROOT]()-[hi-pos/AUX]() (2; 0% instances), [hi-pos/ROOT]()-[hi-pos/PART]() (1; 0% instances), [hi-pos/ROOT]()-[hi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	आइए	आ	VERB	VM	Mood=Sub|Number=Sing|Person=2|Polite=Pol|VerbForm=Fin|Voice=Act	2	vocative	_	Vib=एं|Tam=eM|ChunkId=VGF|ChunkType=head|Stype=imperative|Translit=āie
2	करें	कर	VERB	VM	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Vib=एं|Tam=eM|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=kareṁ
3	सैर	सैर	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=saira
4	-	-	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|Translit=-

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 7 root	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
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


