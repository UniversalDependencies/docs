

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

6564 nodes (2%) are attached to their parents as `cc`.

5888 instances of `cc` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23826934795856.

The following 19 pairs of parts of speech are connected with `cc`: [hi-pos/VERB]()-[hi-pos/CONJ]() (2221; 34% instances), [hi-pos/NOUN]()-[hi-pos/CONJ]() (2114; 32% instances), [hi-pos/PROPN]()-[hi-pos/CONJ]() (1623; 25% instances), [hi-pos/ADJ]()-[hi-pos/CONJ]() (370; 6% instances), [hi-pos/ADJ]()-[hi-pos/ADJ]() (41; 1% instances), [hi-pos/NUM]()-[hi-pos/CONJ]() (38; 1% instances), [hi-pos/PRON]()-[hi-pos/CONJ]() (36; 1% instances), [hi-pos/NOUN]()-[hi-pos/PRON]() (32; 0% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (22; 0% instances), [hi-pos/NOUN]()-[hi-pos/PUNCT]() (15; 0% instances), [hi-pos/DET]()-[hi-pos/CONJ]() (13; 0% instances), [hi-pos/PROPN]()-[hi-pos/PUNCT]() (11; 0% instances), [hi-pos/VERB]()-[hi-pos/PUNCT]() (10; 0% instances), [hi-pos/ADV]()-[hi-pos/CONJ]() (9; 0% instances), [hi-pos/ADV]()-[hi-pos/NOUN]() (5; 0% instances), [hi-pos/PRON]()-[hi-pos/PRON]() (1; 0% instances), [hi-pos/PRON]()-[hi-pos/PUNCT]() (1; 0% instances), [hi-pos/SCONJ]()-[hi-pos/CONJ]() (1; 0% instances), [hi-pos/X]()-[hi-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 cc	color:blue
1	उन्होंने	वह	PRON	PRP	Case=Acc,Erg|Number=Sing|Person=3|Polite=Pol|PronType=Prs	12	nsubj	_	Vib=ने|Tam=ne|ChunkId=NP|ChunkType=head|Translit=unhoṁne
2	मुशर्रफ	मुशर्रफ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0_पर|Tam=0|ChunkId=NP2|ChunkType=head|Translit=muśarrapha
3	पर	पर	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP2|ChunkType=child|Translit=para
4	एजेंडा	एजेंडा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ejeṁḍā
5	बदलने	बदल	VERB	VM	Case=Acc|VerbForm=Inf	10	nmod	_	Vib=ना|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=badalane
6	और	और	CONJ	CC	_	5	cc	_	ChunkId=CCP|ChunkType=head|Translit=aura
7	पीछे	पीछे	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	AltTag=ADV-NOUN|ChunkId=NP4|ChunkType=head|Translit=pīche
8	हटने	हट	VERB	VM	Case=Acc|Number=Sing|VerbForm=Inf	5	conj	_	Vib=ना_का|Tam=nA|ChunkId=VGNN2|ChunkType=head|Translit=haṭane
9	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	8	mark	_	ChunkId=VGNN2|ChunkType=child|Translit=kā
10	आरोप	आरोप	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	dobj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=āropa
11	भी	भी	PART	RP	_	10	dep	_	ChunkId=NP5|ChunkType=child|Translit=bhī
12	लगाया	लगा	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=lagāyā
13	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 cc	color:blue
1	लेकिन	लेकिन	CONJ	CC	_	11	cc	_	ChunkId=CCP|ChunkType=head|Translit=lekina
2	,	COMMA	PUNCT	SYM	_	1	punct	_	ChunkId=CCP|ChunkType=child|Translit=,
3	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP|ChunkType=child|Translit=isa
4	समझौते	समझौता	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0_से|Tam=0|ChunkId=NP|ChunkType=head|Translit=samajhaute
5	से	से	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP|ChunkType=child|Translit=se
6	राजद	राजद	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=rājada
7	और	और	CONJ	CC	_	6	cc	_	ChunkId=CCP2|ChunkType=head|Translit=aura
8	माकपा	माकपा	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	conj	_	Vib=0_का|Tam=0|ChunkId=NP3|ChunkType=head|Translit=mākapā
9	की	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Plur	8	case	_	ChunkId=NP3|ChunkType=child|Translit=kī
10	भवें	भौं	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=bhaveṁ
11	तन	तन	VERB	VM	Gender=Fem|Number=Plur|Person=3|Voice=Act	0	root	_	Vib=0_जा+या१_है|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=tana
12	गई	जा	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Plur|VerbForm=Part	11	aux	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gaī
13	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
14	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


