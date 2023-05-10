---
layout: base
title:  'Statistics of xcomp in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `xcomp`

This relation is universal.

652 nodes (0%) are attached to their parents as `xcomp`.

647 instances of `xcomp` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77760736196319.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt> (204; 31% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt> (195; 30% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt> (186; 29% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-PRON.html">PRON</a></tt> (29; 4% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-PROPN.html">PROPN</a></tt> (23; 4% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 xcomp	color:blue
1	انھوں	وہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|Polite=Form|PronType=Prs	3	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	نے	نے	ADP	PSP	AdpType=Post	1	case	_	ChunkId=NP|ChunkType=child
3	کہا	کہہ	VERB	VM	Aspect=Perf|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	0	root	_	Vib=یا|Tam=yA|ChunkId=VGF|ChunkType=head|Stype=declarative
4	کہ	کہ	SCONJ	CC	_	11	mark	_	AltTag=SCONJ-CCONJ|ChunkId=CCP|ChunkType=head
5	ہم	ہم	PRON	PRP	Case=Acc|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
6	عدالت	عدالت	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing|Person=3	11	obl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
7	مےں	مےں	ADP	PSP	_	6	case	_	ChunkId=NP3|ChunkType=child
8	یہ	یہ	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	obj	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	ثابت	ثابت	ADJ	JJ	_	10	compound	_	ChunkId=JJP|ChunkType=head
10	کر	کر	VERB	VM	Voice=Act	11	xcomp	_	Vib=0|Tam=0|ChunkId=VGF2|ChunkType=head|Stype=declarative
11	دکھائیں_گے	دکھا	VERB	VAUX	Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin	3	ccomp	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF2|ChunkType=child
12	۔	۔	PUNCT	SYM	_	11	punct	_	ChunkId=VGF2|ChunkType=child

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 xcomp	color:blue
1	آج	آج	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	3	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
2	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	1	case	_	ChunkId=NP|ChunkType=child
3	رشوت_ستانی	رشوت_ستانی	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
4	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	3	case	_	ChunkId=NP2|ChunkType=child
5	دور	دور	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	14	obl	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head
6	مےں	مےں	ADP	PSP	AdpType=Post	5	case	_	ChunkId=NP3|ChunkType=child
7	اس	یہ	DET	DEM	Case=Acc|Number=Sing|Person=3|PronType=Dem	8	det	_	ChunkId=NP4|ChunkType=child
8	طرح	طرح	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head
9	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	8	case	_	ChunkId=NP4|ChunkType=child
10	آفیسرس	آفیسر	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur|Person=3	14	nsubj	_	Vib=0|Tam=0|ChunkId=NP5|ChunkType=head
11	بہت	بہت	ADV	INTF	AdvType=Deg	13	advmod	_	ChunkId=JJP|ChunkType=child
12	ہی	ہی	PART	RP	_	11	dep	_	ChunkId=JJP|ChunkType=child
13	کم	کم	ADJ	JJ	_	14	xcomp	_	ChunkId=JJP|ChunkType=head
14	ملیں_گے	مل	VERB	VM	Gender=Fem|Mood=Ind|Number=Plur|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
15	۔	۔	PUNCT	SYM	_	14	punct	_	ChunkId=VGF|ChunkType=child

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 xcomp	color:blue
1	یہ	یہ	DET	DEM	Case=Nom|Number=Sing|Person=3|PronType=Dem	2	det	_	ChunkId=NP|ChunkType=child
2	کورس	کورس	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	6	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head
3	چالیس	چالیس	NUM	QC	NumType=Card	4	nummod	_	ChunkId=NP2|ChunkType=child
4	دن	دن	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	xcomp	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head
5	کا	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	4	case	_	ChunkId=NP2|ChunkType=child
6	رہےگا	رہ	VERB	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No|Vib=گا|Tam=gA|ChunkId=VGF|ChunkType=head|Stype=declarative
7	۔	۔	PUNCT	SYM	_	6	punct	_	ChunkId=VGF|ChunkType=child

~~~


