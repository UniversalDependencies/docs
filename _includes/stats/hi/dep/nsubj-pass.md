

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Hindi)

This relation is a language-specific subtype of [nsubj]().

520 nodes (0%) are attached to their parents as `nsubj:pass`.

508 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.28269230769231.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: [hi-pos/VERB]()-[hi-pos/NOUN]() (299; 57% instances), [hi-pos/VERB]()-[hi-pos/PROPN]() (143; 28% instances), [hi-pos/VERB]()-[hi-pos/PRON]() (61; 12% instances), [hi-pos/VERB]()-[hi-pos/VERB]() (13; 3% instances), [hi-pos/NUM]()-[hi-pos/NUM]() (3; 1% instances), [hi-pos/VERB]()-[hi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj:pass	color:blue
1	सेना	सेना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=senā
2	की	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=kī
3	जबावी	जबावी	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=jabāvī
4	कार्रवाई	कार्रवाई	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obl	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kārravāī
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
6	तीन	तीन	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|Translit=tīna
7	आतंकी	आतंकी	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	8	nsubj:pass	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ātaṁkī
8	मारे	मार	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या१|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=māre
9	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	8	aux:pass	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	रिजवी	रिजवी	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj:pass	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=rijavī
2	समिति	समिति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=samiti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Form	2	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
4	संयोजक	संयोजक	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	xcomp	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=saṁyojaka
5	बनाए	बना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Pass	0	root	_	Vib=या_जा+या१_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=banāe
6	गए	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part	5	aux:pass	_	Vib=या१|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gae
7	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres|VerbForm=Fin	6	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ
8	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:pass	color:blue
1	इसे	यह	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	8	nsubj:pass	_	Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=ise
2	रेड	रेड	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=reḍa
3	फोर्ट	फोर्ट	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	obl	_	Vib=0_के_रूप_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=phorṭa
4	के	के	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc	3	case	_	ChunkId=NP2|ChunkType=child|Translit=ke
5	रूप	रूप	ADP	PSP	Case=Acc|Gender=Masc	3	case	_	ChunkId=NP2|ChunkType=child|Translit=rūpa
6	में	में	ADP	PSP	AdpType=Post	3	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ
7	भी	भी	PART	RP	_	3	dep	_	ChunkId=NP2|ChunkType=child|Translit=bhī
8	जाना	जान	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	0	root	_	Vib=या_जा+ता_है|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=jānā
9	जाता	जा	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	8	aux:pass	_	Vib=ता|Tam=wA|ChunkId=VGF|ChunkType=child|Translit=jātā
10	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux:pass	_	SpaceAfter=No|Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
11	.	.	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


