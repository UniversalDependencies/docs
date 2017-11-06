---
layout: base
title:  'Statistics of det in UD_Urdu'
udver: '2'
---

## Treebank Statistics: UD_Urdu: Relations: `det`

This relation is universal.

2435 nodes (2%) are attached to their parents as `det`.

2435 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.16180698151951.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (2345; 96% instances), <tt><a href="ur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (32; 1% instances), <tt><a href="ur-pos-ADV.html">ADV</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (22; 1% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (13; 1% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (9; 0% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ur-pos-PRON.html">PRON</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ur-pos-NUM.html">NUM</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 det	color:blue
1	عبد	عبد	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	2	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	الرحمن	الرحمن	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	اور	اور	CCONJ	CC	_	6	cc	_	ChunkId=CCP|ChunkType=head
4	ان	وہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	ساتھی	ساتھی	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	2	conj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	ان	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	9	det	_	ChunkId=NP4|ChunkType=child
8	مارشل	مارشل	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	9	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=child
9	آرٹس	آرٹس	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	9	case	_	ChunkId=NP4|ChunkType=child
11	ٹریننگ	ٹریننگ	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	12	obj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
12	دیں_گے	دے	VERB	VM	Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	-	-	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	اس	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	دوران	دوران	ADV	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	12	advmod	_	AltTag=ADV-NOUN|ChunkId=NP|ChunkType=head
3	پڑوسی	پڑوسی	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child
4	بھوٹان	بھوٹان	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	ٹیموں	ٹیم	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	نے	نے	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child
8	بھی	بھی	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child
9	تلاشی	تلاشی	ADJ	JJ	Case=Nom	10	amod	_	ChunkId=NP4|ChunkType=child
10	مہم	مہم	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	شروع	شروع	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
12	کر	کر	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
13	دی	دے	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	12	aux	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=child
14	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
15	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


