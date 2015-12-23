

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

17134 nodes (5%) are attached to their parents as `dobj`.

12778 instances of `dobj` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.69866931247811.

The following 29 pairs of parts of speech are connected with `dobj`: [hi-pos/VERB]()-[hi-pos/NOUN]() (10377; 61% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (4007; 23% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (1089; 6% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (1065; 6% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (430; 3% instances), [hi-pos/VERB]()-[hi-pos/NUM]() (29; 0% instances), [hi-pos/NOUN]()-[hi-pos/VERB]() (26; 0% instances), [hi-pos/VERB]()-[hi-pos/DET]() (19; 0% instances), [hi-pos/ADJ]()-[hi-pos/NOUN]() (16; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (16; 0% instances), [hi-pos/NOUN]()-[hi-pos/NOUN]() (10; 0% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (9; 0% instances), [hi-pos/VERB]()-[hi-pos/ADV]() (7; 0% instances), [hi-pos/VERB]()-[hi-pos/X]() (5; 0% instances), [hi-pos/NOUN]()-[hi-pos/PROPN]() (4; 0% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (3; 0% instances), [hi-pos/ADJ]()-[hi-pos/VERB]() (3; 0% instances), [hi-pos/VERB]()-[hi-pos/PART]() (3; 0% instances), [hi-pos/ADJ]()-[hi-pos/PRON]() (2; 0% instances), [hi-pos/AUX]()-[hi-pos/VERB]() (2; 0% instances), [hi-pos/PROPN]()-[hi-pos/NOUN]() (2; 0% instances), [hi-pos/PUNCT]()-[hi-pos/NOUN]() (2; 0% instances), [hi-pos/VERB]()-[hi-pos/AUX]() (2; 0% instances), [hi-pos/ADJ]()-[hi-pos/DET]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/ADV]() (1; 0% instances), [hi-pos/ADV]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/AUX]()-[hi-pos/NOUN]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 dobj	color:blue
1	इन	यह	DET	DEM	Case=Acc|Number=Plur|Person=3|PronType=Dem	3	det	_	ChunkId=NP|ChunkType=child|Translit=ina
2	सभी	सभी	DET	QF	PronType=Ind	3	det	_	ChunkId=NP|ChunkType=child|Translit=sabhī
3	स्‍थानों	स्थान	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	12	nmod	_	Vib=0_पर|Tam=0|ChunkId=NP|ChunkType=head|Translit=sthānoṁ
4	पर	पर	ADP	PSP	AdpType=Post	3	case	_	ChunkId=NP|ChunkType=child|Translit=para
5	इन	यह	DET	DEM	Case=Acc|Number=Plur|Person=3|PronType=Dem	6	det	_	ChunkId=NP2|ChunkType=child|Translit=ina
6	भस्‍मों	भस्म	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=bhasmoṁ
7	और	और	CONJ	CC	_	6	cc	_	ChunkId=CCP|ChunkType=head|Translit=aura
8	अस्‍थियों	अस्थि	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	6	conj	_	Vib=0_के_ऊपर|Tam=0|ChunkId=NP3|ChunkType=head|Translit=asthiyoṁ
9	के	के	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP3|ChunkType=child|Translit=ke
10	ऊपर	ऊपर	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	case	_	AltTag=ADP-NOUN|ChunkId=NP3|ChunkType=child|Translit=ūpara
11	स्‍तूप	स्‍तूप	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	12	dobj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=stūpa
12	बनाए	बना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या1|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banāe
13	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	12	auxpass	_	Vib=या1|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 dobj	color:blue
1	लोग	लोग	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	13	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=loga
2	बरबस	बरबस	ADV	RB	_	13	advmod	_	ChunkId=RBP|ChunkType=head|Translit=barabasa
3	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child|Translit=isa
4	सोने	सोना	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=sone
5	की	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kī
6	परत	परत	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=parata
7	चढ़े	चढ़	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	8	acl	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=head|Translit=caṛhe
8	चैत्‍य	चैत्य	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	13	nmod	_	Vib=0_के_साथ|Tam=0|ChunkId=NP4|ChunkType=head|Translit=caitya
9	के	के	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP4|ChunkType=child|Translit=ke
10	साथ	साथ	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	case	_	AltTag=ADP-NOUN|ChunkId=NP4|ChunkType=child|Translit=sātha
11	फोटो	फोटो	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	dobj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=phoṭo
12	खींचना	खींच	VERB	VM	Case=Nom|VerbForm=Inf	13	dobj	_	Vib=ना|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=khīṁcanā
13	चाहते	चाह	VERB	VM	Aspect=Imp|Gender=Masc|Number=Plur|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=ता_है|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=cāhate
14	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
15	।	।	PUNCT	SYM	_	13	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 dobj	color:blue
1	कोई	कोई	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=koī
2	भी	भी	PART	RP	_	1	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
3	केवल	केवल	PART	RP	_	4	dep	_	ChunkId=NP2|ChunkType=child|Translit=kevala
4	जीवनयापन	जीवनयापन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=jīvanayāpana
5	के	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
6	मकसद	मकसद	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0_से|Tam=0|ChunkId=NP3|ChunkType=head|Translit=makasada
7	से	से	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|Translit=se
8	इसे	यह	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	10	dobj	_	Vib=को|Tam=ko|ChunkId=NP4|ChunkType=head|Translit=ise
9	नहीं	नहीं	PART	NEG	Negative=Neg|PronType=Neg	10	neg	_	ChunkId=VGF|ChunkType=child|Translit=nahīṁ
10	अपनाता	अपना	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=apanātā
11	।	।	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


