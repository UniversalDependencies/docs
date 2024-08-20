---
layout: base
title:  'Statistics of nsubj:pass in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="hi_hdtb-dep-nsubj.html">nsubj</a></tt>.

558 nodes (0%) are attached to their parents as `nsubj:pass`.

546 instances of `nsubj:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.28853046594982.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (320; 57% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (156; 28% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (68; 12% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nsubj:pass	color:blue
1	सेना	सेना	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP|ChunkType=head|Translit=senā|LTranslit=senā
2	की	का	ADP	PSP	AdpType=Post|Case=Acc|Gender=Fem|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child|Translit=kī|LTranslit=kā
3	जबावी	जबावी	ADJ	JJ	Case=Acc	4	amod	_	ChunkId=NP2|ChunkType=child|Translit=jabāvī|LTranslit=jabāvī
4	कार्रवाई	कार्रवाई	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	8	obl	_	Vib=0_में|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kārravāī|LTranslit=kārravāī
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=meṁ|LTranslit=meṁ
6	तीन	तीन	NUM	QC	NumType=Card	7	nummod	_	ChunkId=NP3|ChunkType=child|Translit=tīna|LTranslit=tīna
7	आतंकी	आतंकी	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	8	nsubj:pass	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ātaṁkī|LTranslit=ātaṁkī
8	मारे	मारना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=māranā|Stype=declarative|Tam=yA|Translit=māre|Vib=या_जा+या१
9	गए	जाना	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	8	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=yA1|Translit=gae|Vib=या१
10	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	रिजवी	रिजवी	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj:pass	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=rijavī|LTranslit=rijavī
2	समिति	समिति	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	4	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=samiti|LTranslit=samiti
3	के	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3|Polite=Form	2	case	_	ChunkId=NP2|ChunkType=child|Translit=ke|LTranslit=kā
4	संयोजक	संयोजक	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	xcomp	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=saṁyojaka|LTranslit=saṁyojaka
5	बनाए	बनाना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=banānā|Stype=declarative|Tam=yA|Translit=banāe|Vib=या_जा+या१_है
6	गए	जाना	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part	5	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=yA1|Translit=gae|Vib=या१
7	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres|VerbForm=Fin	5	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=haiṁ|LTranslit=hai
8	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	उन्हें	वह	PRON	PRP	Case=Acc,Dat|Number=Plur|Person=3|PronType=Prs	5	nsubj:pass	_	Vib=को|Tam=ko|ChunkId=NP|ChunkType=head|Translit=unheṁ|LTranslit=vaha
2	भी	भी	PART	RP	_	1	dep	_	ChunkId=NP|ChunkType=child|Translit=bhī|LTranslit=bhī
3	वही	वह	DET	DEM	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child|Translit=vahī|LTranslit=vaha
4	लाभ	लाभ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=lābha|LTranslit=lābha
5	दिए	देना	VERB	VM	Aspect=Perf|Gender=Masc|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=denā|Stype=declarative|Tam=yA|Translit=die|Vib=या_जा+ना_चाहिए
6	जाने	जाना	AUX	VAUX	Gender=Masc|Number=Plur|VerbForm=Inf	5	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|Tam=nA|Translit=jāne|Vib=ना
7	चाहिए	चाहिए	AUX	VAUX	_	5	aux:pass	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=child|Translit=cāhie|LTranslit=cāhie
8	जो	जो	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	11	obj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=jo|LTranslit=jo
9	अल्पसंख्यकों	अल्पसंख्यक	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	iobj	_	Vib=0_को|Tam=0|ChunkId=NP4|ChunkType=head|Translit=alpasaṁkhyakoṁ|LTranslit=alpasaṁkhyaka
10	को	को	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP4|ChunkType=child|Translit=ko|LTranslit=ko
11	दिए	देना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|VerbForm=Part|Voice=Act	4	amod	_	ChunkId=VGF2|ChunkType=head|LTranslit=denā|Stype=declarative|Tam=yA|Translit=die|Vib=या_जा+ता_है
12	जाते	जाना	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part	11	aux:pass	_	ChunkId=VGF2|ChunkType=child|LTranslit=jānā|Tam=wA|Translit=jāte|Vib=ता
13	हैं	है	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF2|ChunkType=child|Translit=haiṁ|LTranslit=hai
14	।	।	PUNCT	SYM	_	5	punct	_	ChunkId=BLK|ChunkType=head|Translit=.|LTranslit=.

~~~


