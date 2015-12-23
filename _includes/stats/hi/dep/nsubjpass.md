

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is universal.

562 nodes (0%) are attached to their parents as `nsubjpass`.

550 instances of `nsubjpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.23131672597865.

The following 6 pairs of parts of speech are connected with `nsubjpass`: [hi-pos/VERB]()-[hi-pos/NOUN]() (320; 57% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (156; 28% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (68; 12% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (13; 2% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (4; 1% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubjpass	color:blue
1	सेना	सेना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=senā
2	की	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=kī
3	जबावी	जबावी	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=jabāvī
4	कार्रवाई	कार्रवाई	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	8	nmod	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kārravāī
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
6	तीन	तीन	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|Translit=tīna
7	आतंकी	आतंकी	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	8	nsubjpass	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ātaṁkī
8	मारे	मार	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या१|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=māre
9	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	8	auxpass	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubjpass	color:blue
1	रिजवी	रिजवी	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubjpass	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=rijavī
2	समिति	समिति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=samiti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Pol	2	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
4	संयोजक	संयोजक	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	xcomp	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=saṁyojaka
5	बनाए	बना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Pol|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या१_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banāe
6	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Pol|VerbForm=Part	5	auxpass	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
7	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Pol|Tense=Pres|VerbForm=Fin	6	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
8	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubjpass	color:blue
1	उन्हें	वह	PRON	PRP	Case=Acc,Dat|Number=Plur|Person=3|PronType=Prs	5	nsubjpass	_	Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=unheṁ
2	भी	भी	PART	RP	_	1	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī
3	वही	वह	DET	DEM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child|Translit=vahī
4	लाभ	लाभ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	dobj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=lābha
5	दिए	दे	VERB	VM	Aspect=Perf|Gender=Masc|VerbForm=Part|Voice=Act	0	root	_	Vib=या_जा+ना_चाहिए|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=die
6	जाने	जा	AUX	VAUX	Gender=Masc|Number=Plur|VerbForm=Inf	5	auxpass	_	Vib=ना|Tam=nA|ChunkId=VGF|ChunkType=child|Translit=jāne
7	चाहिए	चाहिए	AUX	VAUX	_	6	auxpass	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=child|Translit=cāhie
8	जो	जो	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	11	dobj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=jo
9	अल्पसंख्यकों	अल्पसंख्यक	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	iobj	_	Vib=0_को|Tam=0|ChunkId=NP4|ChunkType=head|Translit=alpasaṁkhyakoṁ
10	को	को	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP4|ChunkType=child|Translit=ko
11	दिए	दे	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Part|Voice=Act	4	amod	_	Vib=या_जा+ता_है|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative|Translit=die
12	जाते	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	11	auxpass	_	Vib=ता|Tam=wA|ChunkId=VGF2|ChunkType=child|Translit=jāte
13	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	auxpass	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=child|Translit=haiṁ
14	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


