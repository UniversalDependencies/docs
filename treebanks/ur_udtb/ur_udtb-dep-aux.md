---
layout: base
title:  'Statistics of aux in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `aux`

This relation is universal.

7885 nodes (6%) are attached to their parents as `aux`.

7871 instances of `aux` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.34876347495244.

The following 3 pairs of parts of speech are connected with `aux`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-AUX.html">AUX</a></tt> (7879; 100% instances), <tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur_udtb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-AUX.html">AUX</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 aux	color:blue
1	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	اقدام	اقدام	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	سے	سے	ADP	PSP	AdpType=Post	2	case	_	ChunkId=NP|ChunkType=child
4	سرکاری	سرکاری	ADJ	JJ	Case=Acc	5	amod	_	ChunkId=NP2|ChunkType=child
5	خزانہ	خزانہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	پر	پر	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP2|ChunkType=child
7	95	95	NUM	QCC	NumType=Card	8	compound	_	ChunkId=NP3|ChunkType=child
8	کروڑ	کروڑ	NUM	QC	NumType=Card	9	nummod	_	ChunkId=NP3|ChunkType=child
9	روپیوں	روپیہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	11	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
10	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child
11	خسارہ	خسارہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
12	ہوا	ہو	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
13	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
14	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 aux	color:blue
1	اس	یہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	3	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child
3	وجہ	وجہ	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	یہ	یہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	0	root	_	ChunkId=NP3|ChunkType=head
5	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
6	کہ	کہ	SCONJ	CC	_	11	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
7	اس	یہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	10	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
8	کے	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Plur	7	case	_	ChunkId=NP4|ChunkType=child
9	برقی	برقی	ADJ	JJ	Case=Nom	10	amod	_	ChunkId=NP5|ChunkType=child
10	آلات	آلہ	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
11	ناکارہ	ناکارہ	ADJ	JJ	_	4	nmod	_	ChunkId=JJP|ChunkType=head
12	ہو	ہے	AUX	VM	Voice=Act	11	cop	_	AltTag=AUX-VERB|Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
13	گئے	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Plur|VerbForm=Part	11	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF2|ChunkType=child
14	تھے	تھا	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	aux	_	SpaceAfter=No|Vib=تھا|Tam=WA|ChunkId=VGF2|ChunkType=child
15	۔	۔	PUNCT	SYM	_	4	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 aux	color:blue
1	محمد	محمد	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
2	علی	علی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
3	الدین	الدین	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child
4	قادری	قادری	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
5	ناظم	ناظم	NOUN	NNZ	Case=Nom	0	root	_	ChunkId=NP2|ChunkType=head
6	اجلاس	اجلاس	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	ہوں	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative
8	گے	گا	AUX	VAUX	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	5	aux	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=child
9	۔	۔	PUNCT	SYM	_	5	punct	_	ChunkId=VGF|ChunkType=child

~~~


