

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

23545 nodes (7%) are attached to their parents as `punct`.

21091 instances of `punct` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.46519430877044.

The following 30 pairs of parts of speech are connected with `punct`: [hi-pos/VERB]()-[hi-pos/PUNCT]() (15715; 67% instances), [hi-pos/PROPN]()-[hi-pos/PUNCT]() (3181; 14% instances), [hi-pos/NOUN]()-[hi-pos/PUNCT]() (2765; 12% instances), [hi-pos/ADJ]()-[hi-pos/PUNCT]() (980; 4% instances), [hi-pos/PRON]()-[hi-pos/PUNCT]() (184; 1% instances), [hi-pos/NUM]()-[hi-pos/PUNCT]() (154; 1% instances), [hi-pos/ADV]()-[hi-pos/PUNCT]() (133; 1% instances), [hi-pos/SCONJ]()-[hi-pos/PUNCT]() (107; 0% instances), [hi-pos/CONJ]()-[hi-pos/PUNCT]() (60; 0% instances), [hi-pos/PUNCT]()-[hi-pos/PUNCT]() (45; 0% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (41; 0% instances), [hi-pos/ADP]()-[hi-pos/PUNCT]() (41; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (36; 0% instances), [hi-pos/DET]()-[hi-pos/PUNCT]() (34; 0% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (14; 0% instances), [hi-pos/ADV]()-[hi-pos/ADP]() (12; 0% instances), [hi-pos/PART]()-[hi-pos/PUNCT]() (12; 0% instances), [hi-pos/PART]()-[hi-pos/ADP]() (8; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (5; 0% instances), [hi-pos/SCONJ]()-[hi-pos/SCONJ]() (4; 0% instances), [hi-pos/PROPN]()-[hi-pos/PROPN]() (3; 0% instances), [hi-pos/AUX]()-[hi-pos/PUNCT]() (2; 0% instances), [hi-pos/INTJ]()-[hi-pos/PUNCT]() (2; 0% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (1; 0% instances), [hi-pos/CONJ]()-[hi-pos/CONJ]() (1; 0% instances), [hi-pos/CONJ]()-[hi-pos/SCONJ]() (1; 0% instances), [hi-pos/DET]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/PART]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/PROPN]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 punct	color:blue
1	आइए	आ	VERB	VM	Mood=Sub|Number=Sing|Person=2|Polite=Pol|VerbForm=Fin|Voice=Act	2	vocative	_	Vib=एं|Tam=eM|ChunkId=VGF|ChunkType=head|Stype=imperative|Translit=āie
2	करें	कर	VERB	VM	Mood=Sub|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Vib=एं|Tam=eM|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=kareṁ
3	सैर	सैर	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=saira
4	-	-	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|Translit=-

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 punct	color:blue
1	कुशीनगर	कुशीनगर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=kuśīnagara
2	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=kā
3	महत्‍व	महत्व	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=mahatva
4	महापरिनिर्वाण	महापरिनिर्वाण	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=mahāparinirvāṇa
5	मंदिर	मंदिर	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0_से|Tam=0|ChunkId=NP3|ChunkType=head|Translit=maṁdira
6	से	से	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP3|ChunkType=child|Translit=se
7	है	है	VERB	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=hai
8	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 12 punct	color:blue
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


