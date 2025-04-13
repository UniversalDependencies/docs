---
layout: base
title:  'Statistics of iobj in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `iobj`

This relation is universal.

2518 nodes (1%) are attached to their parents as `iobj`.

2517 instances of `iobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.97458300238284.

The following 13 pairs of parts of speech are connected with `iobj`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (1388; 55% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (747; 30% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (331; 13% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (12; 0% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hi_hdtb-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 iobj	color:blue
1	इसके	यह	PRON	PRP	Case=Acc,Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	10	obl	_	ChunkId=NP|ChunkType=head|LTranslit=yaha|Tam=ke|Translit=isake|Vib=0_अलावा
2	अलावा	अलावा	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|LTranslit=alāvā|Translit=alāvā
3	टेक्सटाइल	टेक्सटाइल	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	ChunkId=NP2|ChunkType=child|LTranslit=ṭeksaṭāila|Tam=0|Translit=ṭeksaṭāila|Vib=0
4	क्षेत्र	क्षेत्र	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	iobj	_	ChunkId=NP2|ChunkType=head|LTranslit=kṣetra|Tam=0|Translit=kṣetra|Vib=0_को
5	को	को	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|LTranslit=ko|Translit=ko
6	भी	भी	PART	RP	_	4	dep	_	ChunkId=NP2|ChunkType=child|LTranslit=bhī|Translit=bhī
7	कुछ	कुछ	DET	QF	PronType=Ind	9	det	_	ChunkId=NP3|ChunkType=child|LTranslit=kucha|Translit=kucha
8	टैक्स	टैक्स	NOUN	NNC	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	compound	_	ChunkId=NP3|ChunkType=child|LTranslit=ṭaiksa|Tam=0|Translit=ṭaiksa|Vib=0
9	राहत	राहत	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	10	nsubj	_	ChunkId=NP3|ChunkType=head|LTranslit=rāhata|Tam=0|Translit=rāhata|Vib=0
10	मिल	मिलना	VERB	VM	Gender=Fem|Number=Sing|Person=3|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=milanā|Stype=declarative|Tam=0|Translit=mila|Vib=0_सक+ता_है
11	सकती	सकना	AUX	VAUX	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	10	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=sakanā|Tam=wA|Translit=sakatī|Vib=ता
12	है	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:pass	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=hai|Vib=है
13	।	।	PUNCT	SYM	_	10	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 iobj	color:blue
1	राजग	राजग	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nsubj	_	ChunkId=NP|ChunkType=head|LTranslit=rājaga|Tam=0|Translit=rājaga|Vib=0_ने
2	ने	ने	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child|LTranslit=ne|Translit=ne
3	सोमवार	सोमवार	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	obl	_	ChunkId=NP2|ChunkType=head|LTranslit=somavāra|Tam=0|Translit=somavāra|Vib=0
4	राष्ट्रपति	राष्ट्रपति	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	iobj	_	ChunkId=NP3|ChunkType=head|LTranslit=rāṣṭrapati|Tam=0|Translit=rāṣṭrapati|Vib=0_को
5	को	को	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP3|ChunkType=child|LTranslit=ko|Translit=ko
6	भी	भी	PART	RP	_	4	dep	_	ChunkId=NP3|ChunkType=child|LTranslit=bhī|Translit=bhī
7	इस	यह	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	8	det	_	ChunkId=NP4|ChunkType=child|LTranslit=yaha|Translit=isa
8	संबंध	संबंध	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obl	_	ChunkId=NP4|ChunkType=head|LTranslit=saṁbaṁdha|Tam=0|Translit=saṁbaṁdha|Vib=0_में
9	में	में	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP4|ChunkType=child|LTranslit=meṁ|Translit=meṁ
10	ज्ञापन	ज्ञापन	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	11	obj	_	ChunkId=NP5|ChunkType=head|LTranslit=jñāpana|Tam=0|Translit=jñāpana|Vib=0
11	सौंपा	सौंपना	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=sauṁpanā|Stype=declarative|Tam=yA|Translit=sauṁpā|Vib=या
12	।	।	PUNCT	SYM	_	11	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 iobj	color:blue
1	जबकि	जबकि	CCONJ	CC	_	12	cc	_	ChunkId=CCP|ChunkType=head|LTranslit=jabaki|Translit=jabaki
2	ससुर	ससुर	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obj	_	ChunkId=NP|ChunkType=head|LTranslit=sasura|Tam=0|Translit=sasura|Vib=0_को
3	को	को	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child|LTranslit=ko|Translit=ko
4	कोई	कोई	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	det	_	ChunkId=NP2|ChunkType=child|LTranslit=koī|Tam=0|Translit=koī|Vib=0
5	सजा	सजा	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nmod	_	ChunkId=NP2|ChunkType=head|LTranslit=sajā|Tam=0|Translit=sajā|Vib=0
6	तो	तो	PART	RP	_	5	dep	_	ChunkId=NP2|ChunkType=child|LTranslit=to|Translit=to
7	दूर	दूर	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	advmod	_	AltTag=ADV-NOUN|ChunkId=NP3|ChunkType=head|LTranslit=dūra|Translit=dūra
8	उसे	वह	PRON	PRP	Case=Acc,Dat|Number=Sing|Person=3|PronType=Prs	12	iobj	_	ChunkId=NP4|ChunkType=head|LTranslit=vaha|Tam=ko|Translit=use|Vib=को
9	'	'	PUNCT	SYM	_	10	punct	_	ChunkId=NP5|ChunkType=child|LTranslit='|SpaceAfter=No|Translit='
10	आजादी	आजादी	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	acl	_	ChunkId=NP5|ChunkType=head|LTranslit=ājādī|SpaceAfter=No|Tam=0|Translit=ājādī|Vib=0
11	'	'	PUNCT	SYM	_	10	punct	_	ChunkId=NP5|ChunkType=child|LTranslit='|Translit='
12	बख्श	बख्शना	VERB	VM	Number=Sing|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=bakhśanā|Stype=declarative|Tam=0|Translit=bakhśa|Vib=0_दे+या
13	दी	देना	VERB	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	12	compound	_	ChunkId=VGF|ChunkType=child|LTranslit=denā|Tam=yA|Translit=dī|Vib=या
14	।	।	PUNCT	SYM	_	12	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


