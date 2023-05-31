---
layout: base
title:  'Statistics of nummod in UD_Urdu'
udver: '2'
---

## Treebank Statistics: UD_Urdu: Relations: `nummod`

This relation is universal.

2131 nodes (2%) are attached to their parents as `nummod`.

2039 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39042702956359.

The following 9 pairs of parts of speech are connected with `nummod`: <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (1963; 92% instances), <tt><a href="ur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (83; 4% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (57; 3% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (12; 1% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="ur-pos-PRON.html">PRON</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nummod	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	اقدام	اقدام	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	سے	سے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	سرکاری	سرکاری	ADJ	JJ	Case=Acc	5	amod	_	ChunkId=NP2|ChunkType=child
5	خزانہ	خزانہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	پر	پر	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	95	95	NUM	QCC	NumType=Card	8	case	_	ChunkId=NP3|ChunkType=child
8	کروڑ	کروڑ	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child
9	روپیوں	روپیہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
10	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child
11	خسارہ	خسارہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
12	ہوا	ہو	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nummod	color:blue
1	20	20	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP|ChunkType=child
2	سالہ	سالہ	ADJ	JJ	Case=Nom	4	amod	_	ChunkId=NP|ChunkType=child
3	سشیل	سشیل	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
4	رائنا	رائنا	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
5	اےک	اےک	NUM	QC	NumType=Card	6	nummod	_	ChunkId=NP2|ChunkType=child
6	کالج	کالج	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
7	کا	کالج	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP2|ChunkType=child
8	طالب_علم	طالب_علم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
10	۔	۔	PUNCT	SYM	_	9	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 nummod	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	طرح	طرح	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	advmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	4	det	_	ChunkId=NP2|ChunkType=child
4	مقدمہ	مقدمہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کے	کے	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child
6	لیے	لئے	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child
7	جملہ	جملہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	8	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
8	خرچ	خرچ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	10	10	NUM	QC	NumType=Card	12	nummod	_	ChunkId=NP4|ChunkType=child
10	تا	تا	PART	RP	_	9	dep	_	ChunkId=NP4|ChunkType=child
11	12	12	NUM	QCC	NumType=Card	12	dep	_	ChunkId=NP4|ChunkType=child
12	کروڑ	کروڑ	NUM	QC	NumType=Card	14	advmod	_	ChunkId=NP4|ChunkType=head
13	تک	تک	ADP	PSP	_	12	case	_	ChunkId=NP4|ChunkType=child
14	آ	آ	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
15	سکتا	سک	AUX	VAUX	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	14	aux	_	Vib=تا|Tam=wA|ChunkId=VGF|ChunkType=child
16	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
17	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF|ChunkType=child

~~~


