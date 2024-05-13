---
layout: base
title:  'Statistics of obl in UD_Urdu'
udver: '2'
---

## Treebank Statistics: UD_Urdu: Relations: `obl`

This relation is universal.

2052 nodes (1%) are attached to their parents as `obl`.

2000 instances of `obl` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.36111111111111.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-NOUN.html">NOUN</a></tt> (1309; 64% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (307; 15% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PROPN.html">PROPN</a></tt> (267; 13% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-ADV.html">ADV</a></tt> (66; 3% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PART.html">PART</a></tt> (47; 2% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (30; 1% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (14; 1% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (7; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-X.html">X</a></tt> (2; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 2 obl	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 obl	color:blue
1	اس	یہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	10	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کے	کے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	علاوہ	علاوہ	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
4	انتخابات	انتخاب	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	تاریخ	تاریخ	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	9	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	6	case	_	ChunkId=NP3|ChunkType=child
8	بھی	بھی	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child
9	تعین	تعین	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کیا	کر	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
11	جا	جا	AUX	VAUX	_	10	aux	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=child
12	چکا	چک	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	11	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	10	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 obl	color:blue
1	پاکستان	پاکستان	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child
3	پہلا	پہلا	ADJ	QO	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	4	amod	_	ChunkId=NP2|ChunkType=child
4	میچ	میچ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	5	5	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child
6	مئی	مئی	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	کو	کو	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child
8	نیوزی	نیوزی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=child
9	لینڈ	لینڈ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کے	کے	ADP	PSP	AdpType=Post	9	case	_	ChunkId=NP4|ChunkType=child
11	خلاف	خلاف	ADP	PSP	_	9	case	_	ChunkId=NP4|ChunkType=child
12	ہوگا	ہو	VERB	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


