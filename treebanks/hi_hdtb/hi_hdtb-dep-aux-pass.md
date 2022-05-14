---
layout: base
title:  'Statistics of aux:pass in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="hi_hdtb-dep-aux.html">aux</a></tt>.

11108 nodes (3%) are attached to their parents as `aux:pass`.

11104 instances of `aux:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68428159884768.

The following 5 pairs of parts of speech are connected with `aux:pass`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (11102; 100% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt>-<tt><a href="hi_hdtb-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 aux:pass	color:blue
1	यहाँ	यहाँ	PRON	PRP	Case=Acc|PronType=Prs	8	obl	_	Vib=0_पर|ChunkId=NP|ChunkType=head|Translit=yahām̃
2	पर	पर	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=para
3	भगवान	भगवान	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=bhagavāna
4	बुद्ध	बुद्ध	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	nmod	_	Vib=0_का|Tam=0|ChunkId=NP2|ChunkType=head|Translit=buddha
5	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kā
6	अंतिम	अंतिम	ADJ	JJ	Case=Nom	7	amod	_	ChunkId=NP3|ChunkType=child|Translit=aṁtima
7	संस्‍कार	संस्कार	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=saṁskāra
8	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=yA|Translit=kiyā|Vib=या_जा+या1_था
9	गया	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	8	aux:pass	_	Vib=या1|Tam=yA1|ChunkId=VGF|ChunkType=child|Translit=gayā
10	था	था	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	8	aux:pass	_	Vib=था|Tam=WA|ChunkId=VGF|ChunkType=child|Translit=thā
11	।	।	PUNCT	SYM	_	8	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 22 aux:pass	color:blue
1	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child|Translit=isa
2	मौके	मौका	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	30	obl	_	Vib=0_पर|Tam=0|ChunkId=NP|ChunkType=head|Translit=mauke
3	पर	पर	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|Translit=para
4	कमलनाथ	कमलनाथ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	30	nsubj	_	Vib=0_ने|Tam=0|ChunkId=NP2|ChunkType=head|Translit=kamalanātha
5	ने	ने	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=ne
6	यूके	यूके	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	19	nsubj:pass	_	Vib=0_द्वारा|Tam=0|ChunkId=NP3|ChunkType=head|Translit=yūke
7	द्वारा	द्वारा	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|Translit=dvārā
8	भारतीय	भारतीय	ADJ	JJ	Case=Acc	9	amod	_	ChunkId=NP4|ChunkType=child|Translit=bhāratīya
9	उत्पादों	उत्पाद	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	16	obj	_	Vib=0_को|Tam=0|ChunkId=NP4|ChunkType=head|Translit=utpādoṁ
10	को	को	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP4|ChunkType=child|Translit=ko
11	अपने	अपना	PRON	PRP	Case=Acc|Gender=Masc|PronType=Prs	12	nmod	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head|Translit=apane
12	बाजार	बाजार	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	16	obl	_	Vib=0_में|Tam=0|ChunkId=NP6|ChunkType=head|Translit=bājāra
13	में	में	ADP	PSP	AdpType=Post	12	case	_	ChunkId=NP6|ChunkType=child|Translit=meṁ
14	प्रवेश	प्रवेश	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	16	obl	_	Vib=0_से|Tam=0|ChunkId=NP7|ChunkType=head|Translit=praveśa
15	से	से	ADP	PSP	AdpType=Post	14	case	_	ChunkId=NP7|ChunkType=child|Translit=se
16	रोकने	रोक	VERB	VM	Case=Acc|VerbForm=Inf	19	advcl	_	Vib=ना_के_लिए|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=rokane
17	के	के	ADP	PSP	AdpType=Post	16	mark	_	ChunkId=VGNN|ChunkType=child|Translit=ke
18	लिए	लिए	ADP	PSP	AdpType=Post	16	mark	_	ChunkId=VGNN|ChunkType=child|Translit=lie
19	लगाई	लगा	VERB	VM	Aspect=Perf|Number=Sing|VerbForm=Part	26	acl	_	Vib=या_जा_रह+या|Tam=yA|ChunkId=VGNF|ChunkType=head|Translit=lagāī
20	जा	जा	AUX	VAUX	_	19	aux:pass	_	Vib=0|Tam=0|ChunkId=VGNF|ChunkType=child|Translit=jā
21	रही	रह	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	19	aux:pass	_	Vib=या|Tam=yA|ChunkId=VGNF|ChunkType=child|Translit=rahī
22	गैर	गैर	ADJ	JJC	Case=Nom	24	aux:pass	_	ChunkId=NP8|ChunkType=child|Translit=gaira
23	-	-	PUNCT	SYM	_	24	punct	_	ChunkId=NP8|ChunkType=child|Translit=-
24	शुल्कीय	शुल्कीय	ADJ	JJ	Case=Acc	26	amod	_	ChunkId=NP8|ChunkType=child|Translit=śulkīya
25	व्यापार	व्यापार	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	26	compound	_	Vib=0|Tam=0|ChunkId=NP8|ChunkType=child|Translit=vyāpāra
26	बाधाओं	बाधा	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	29	nmod	_	Vib=0_का|Tam=0|ChunkId=NP8|ChunkType=head|Translit=bādhāoṁ
27	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	26	case	_	ChunkId=NP8|ChunkType=child|Translit=kā
28	भी	भी	PART	RP	_	26	dep	_	ChunkId=NP8|ChunkType=child|Translit=bhī
29	जिक्र	जिक्र	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	30	compound	_	Vib=0|Tam=0|ChunkId=NP9|ChunkType=head|Translit=jikra
30	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=yA|Translit=kiyā|Vib=या
31	।	।	PUNCT	SYM	_	30	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 16 aux:pass	color:blue
1	पुलिस	पुलिस	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	obl	_	Vib=0_के_खिलाफ|Tam=0|ChunkId=NP|ChunkType=head|Translit=pulisa
2	के	के	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|Translit=ke
3	खिलाफ	खिलाफ	ADP	PSP	_	1	case	_	ChunkId=NP|ChunkType=child|Translit=khilāpha
4	एफआईआर	एफआईआर	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=ephaāīāra
5	दर्ज	दर्ज	ADJ	JJ	_	6	compound	_	ChunkId=JJP|ChunkType=head|Translit=darja
6	होने	हो	VERB	VM	Case=Acc|Number=Sing|Person=3|VerbForm=Inf	14	obl	_	Vib=ना_के_बाद|Tam=nA|ChunkId=VGNN|ChunkType=head|Translit=hone
7	के	के	ADP	PSP	AdpType=Post	6	mark	_	ChunkId=VGNN|ChunkType=child|Translit=ke
8	बाद	बाद	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	6	mark	_	AltTag=ADV-NOUN|ChunkId=VGNN|ChunkType=child|Translit=bāda
9	अनारा	अनारा	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	14	nsubj:pass	_	Vib=0_द्वारा|Tam=0|ChunkId=NP3|ChunkType=head|Translit=anārā
10	द्वारा	द्वारा	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP3|ChunkType=child|Translit=dvārā
11	मानहानि	मानहानि	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	14	obl	_	Vib=0_के_लिए|Tam=0|ChunkId=NP4|ChunkType=head|Translit=mānahāni
12	के	के	ADP	PSP	AdpType=Post	11	case	_	ChunkId=NP4|ChunkType=child|Translit=ke
13	लिए	लिए	ADP	PSP	AdpType=Post	11	case	_	ChunkId=NP4|ChunkType=child|Translit=lie
14	किया	कर	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	19	acl	_	Vib=या_जा+या१|Tam=yA|ChunkId=VGNF|ChunkType=head|Translit=kiyā
15	गया	जा	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	14	aux:pass	_	Vib=या१|Tam=yA1|ChunkId=VGNF|ChunkType=child|Translit=gayā
16	एक	एक	NUM	QCC	NumType=Card	17	aux:pass	_	ChunkId=NP5|ChunkType=child|Translit=eka
17	करोड़	करोड	NUM	QC	Case=Acc|NumType=Card	19	nmod	_	Vib=0_का|ChunkId=NP5|ChunkType=head|Translit=karoṛa
18	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	17	case	_	ChunkId=NP5|ChunkType=child|Translit=kā
19	दावा	दावा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	22	nsubj	_	Vib=0|Tam=0|ChunkId=NP6|ChunkType=head|Translit=dāvā
20	भी	भी	PART	RP	_	19	dep	_	ChunkId=NP6|ChunkType=child|Translit=bhī
21	पुख्ता	पुख्ता	ADJ	JJ	_	22	compound	_	ChunkId=JJP2|ChunkType=head|Translit=pukhtā
22	होता	हो	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	23	advcl	_	ChunkId=VGNF2|ChunkType=head|Stype=declarative|Tam=wA|Translit=hotā|Vib=ता
23	लग	लग	VERB	VM	Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|Stype=declarative|Tam=0|Translit=laga|Vib=0_रह+या_है
24	रहा	रह	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	23	aux	_	Vib=या|Tam=yA|ChunkId=VGF|ChunkType=child|Translit=rahā
25	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	23	aux:pass	_	Vib=है|Tam=hE|ChunkId=VGF|ChunkType=child|Translit=hai
26	।	।	PUNCT	SYM	_	23	punct	_	ChunkId=BLK|ChunkType=head|Translit=.

~~~


