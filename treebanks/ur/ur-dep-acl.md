---
layout: base
title:  'Statistics of acl in UD_Urdu'
udver: '2'
---

## Treebank Statistics: UD_Urdu: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="ur-dep-acl-relcl.html">acl:relcl</a></tt>.

812 nodes (1%) are attached to their parents as `acl`.

484 instances of `acl` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.30665024630542.

The following 21 pairs of parts of speech are connected with `acl`: <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (281; 35% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-NOUN.html">NOUN</a></tt> (165; 20% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (157; 19% instances), <tt><a href="ur-pos-PRON.html">PRON</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (93; 11% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (57; 7% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="ur-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (8; 1% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-PUNCT.html">PUNCT</a></tt> (5; 1% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ur-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ur-pos-ADP.html">ADP</a></tt>-<tt><a href="ur-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances), <tt><a href="ur-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ur-pos-PART.html">PART</a></tt>-<tt><a href="ur-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ur-pos-VERB.html">VERB</a></tt>-<tt><a href="ur-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 13 acl	color:blue
1	اب	اب	PRON	PRP	Case=Nom|PronType=Prs	3	advmod	_	ChunkId=NP|ChunkType=head
2	وقت	وقت	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
3	آ	آ	VERB	VM	Voice=Act	0	root	_	Vib=0|Tam=0|ChunkId=VGF|ChunkType=head|Stype=declarative
4	گیا	جا	AUX	VAUX	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part	3	aux	_	Vib=1یا|Tam=yA1|ChunkId=VGF|ChunkType=child
5	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
6	کہ	کہ	SCONJ	CC	_	13	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
7	ایسے	ایسا	DET	DEM	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	ChunkId=NP3|ChunkType=child
8	افراد	فرد	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	13	obj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
9	کو	کو	ADP	PSP	AdpType=Post	8	case	_	ChunkId=NP3|ChunkType=child
10	سلاخوں	سلاخ	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur|Person=3	13	advmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
11	کے	کے	ADP	PSP	AdpType=Post	10	case	_	ChunkId=NP4|ChunkType=child
12	پیچھے	پیچھے	ADP	NST	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing|Person=3	10	case	_	AltTag=ADP-NOUN|ChunkId=NP4|ChunkType=child
13	ڈھکیلا	ڈھکیلا	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|VerbForm=Part|Voice=Act	2	acl	_	Vib=یا|Tam=yA|ChunkId=VGF2|ChunkType=head|Stype=declarative
14	جائے	جا	AUX	VAUX	Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin	13	aux	_	SpaceAfter=No|Vib=ئےں|Tam=eM|ChunkId=VGF2|ChunkType=child
15	۔	۔	PUNCT	SYM	_	13	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	اسی	اسی	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کو	کو	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	تقویٰ	تقویٰ	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	4	acl	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	کہتے	کہہ	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=تا|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative
5	ہےں	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
6	اور	اور	CCONJ	CC	_	14	cc	_	ChunkId=CCP|ChunkType=head
7	اس	وہ	PRON	PRP	Case=Acc|Number=Sing|Person=3|PronType=Prs	10	advmod	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
8	پر	پر	ADP	PSP	AdpType=Post	7	case	_	ChunkId=NP3|ChunkType=child
9	عمل	عمل	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	10	compound	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
10	کرنے	کر	VERB	VM	Case=Acc|VerbForm=Inf	14	obj	_	Vib=نا|Tam=nA|ChunkId=VGNN|ChunkType=head
11	والے	والا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	10	mark	_	ChunkId=VGNN|ChunkType=child
12	کو	کو	ADP	PSP	AdpType=Post	10	mark	_	ChunkId=VGNN|ChunkType=child
13	متقی	متقی	NOUN	NN	_	14	acl	_	ChunkId=NP5|ChunkType=head
14	کہتے	کہہ	VERB	VM	Aspect=Imp|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Act	4	conj	_	Vib=تا|Tam=wA|ChunkId=VGF2|ChunkType=head|Stype=declarative
15	ہیں	ہے	AUX	VAUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	14	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF2|ChunkType=child
16	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 acl	color:blue
1	ان	یہ	DET	DEM	Case=Acc|Number=Plur|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	ٹوپیوں	ٹوپی	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	4	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child
4	صفائی	صفائی	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	بھی	بھی	PART	RP	_	4	dep	_	ChunkId=NP2|ChunkType=child
6	مشکوک	مشکوک	ADJ	JJ	_	7	acl	_	ChunkId=JJP|ChunkType=head
7	رہتی	رہ	VERB	VM	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=تا|Tam=wA|ChunkId=VGF|ChunkType=head|Stype=declarative
8	ہے	ہے	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	SpaceAfter=No|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=child
9	۔	۔	PUNCT	SYM	_	7	punct	_	ChunkId=VGF|ChunkType=child

~~~


