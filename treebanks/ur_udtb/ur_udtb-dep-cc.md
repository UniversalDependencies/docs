---
layout: base
title:  'Statistics of cc in UD_Urdu-UDTB'
udver: '2'
---

## Treebank Statistics: UD_Urdu-UDTB: Relations: `cc`

This relation is universal.

3302 nodes (2%) are attached to their parents as `cc`.

3291 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.89188370684434.

The following 16 pairs of parts of speech are connected with `cc`: <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (1389; 42% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (1177; 36% instances), <tt><a href="ur_udtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (449; 14% instances), <tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (181; 5% instances), <tt><a href="ur_udtb-pos-PRON.html">PRON</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (25; 1% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-SCONJ.html">SCONJ</a></tt> (20; 1% instances), <tt><a href="ur_udtb-pos-NUM.html">NUM</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (17; 1% instances), <tt><a href="ur_udtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ur_udtb-pos-SCONJ.html">SCONJ</a></tt> (15; 0% instances), <tt><a href="ur_udtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ur_udtb-pos-SCONJ.html">SCONJ</a></tt> (13; 0% instances), <tt><a href="ur_udtb-pos-ADV.html">ADV</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (7; 0% instances), <tt><a href="ur_udtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ur_udtb-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="ur_udtb-pos-ADV.html">ADV</a></tt>-<tt><a href="ur_udtb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="ur_udtb-pos-DET.html">DET</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="ur_udtb-pos-ADV.html">ADV</a></tt>-<tt><a href="ur_udtb-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="ur_udtb-pos-PART.html">PART</a></tt>-<tt><a href="ur_udtb-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="ur_udtb-pos-VERB.html">VERB</a></tt>-<tt><a href="ur_udtb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 cc	color:blue
1	لیکن	لیکن	CCONJ	CC	_	9	cc	_	ChunkId=CCP|ChunkType=head|Translit=līkn|LTranslit=līkn
2	ان	یہ	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	4	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=ān|LTranslit=īh
3	کے	کا	ADP	PSP	AdpType=Post|Case=Acc|Gender=Masc|Number=Sing	2	case	_	ChunkId=NP|ChunkType=child|Translit=ke|LTranslit=kā
4	بیان	بیان	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	9	obj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=bīān|LTranslit=bīān
5	کو	کو	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|Translit=kū|LTranslit=kū
6	کوئی	کوئی	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	det	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=child|Translit=kūjī|LTranslit=kūjī
7	اہمیت	اہمیت	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	9	compound	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=āhmīt|LTranslit=āhmīt
8	نہیں	نہیں	PART	NEG	Polarity=Neg|PronType=Neg	9	advmod	_	ChunkId=VGF|ChunkType=child|Translit=nhīñ|LTranslit=nhīñ
9	دی	دےنا	VERB	VM	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=denā|Stype=declarative|Tam=yA|Translit=dī|Vib=یا
10	گئی	جانا	AUX	VAUX	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|VerbForm=Part	9	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=jānā|SpaceAfter=No|Tam=yA1|Translit=gjī|Vib=1یا
11	۔	۔	PUNCT	SYM	_	9	punct	_	ChunkId=VGF|ChunkType=child|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	پی	پی	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child|Translit=pī|LTranslit=pī
2	اے	اے	PROPN	NNPC	Case=Nom|Gender=Masc|Number=Sing|Person=3	3	compound	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=child|Translit=āe|LTranslit=āe
3	سی	سی	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	12	nsubj	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=sī|LTranslit=sī
4	مختلف	مختلف	ADJ	JJ	Case=Acc	5	amod	_	ChunkId=NP2|ChunkType=child|Translit=mxtlf|LTranslit=mxtlf
5	محکموں	محکمہ	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	10	nmod	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=mhkmūñ|LTranslit=mhkmh
6	اور	اور	CCONJ	CC	_	7	cc	_	ChunkId=CCP|ChunkType=head|Translit=āūr|LTranslit=āūr
7	وزارتوں	وزارت	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur|Person=3	5	conj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=ūzārtūñ|LTranslit=ūzārt
8	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	5	case	_	ChunkId=NP3|ChunkType=child|Translit=kī|LTranslit=kā
9	مالیتی	مالیتی	ADJ	JJ	Case=Acc	10	amod	_	ChunkId=NP4|ChunkType=child|Translit=mālītī|LTranslit=mālītī
10	آڈٹ	آڈٹ	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	12	obl	_	Vib=0|Tam=0|ChunkId=NP4|ChunkType=head|Translit=Āḍṭ|LTranslit=Āḍṭ
11	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	10	case	_	ChunkId=NP4|ChunkType=child|Translit=kī|LTranslit=kā
12	ذمہ_دار	ذمہ_دار	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=ðmh_dār|LTranslit=ðmh_dār
13	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=he|LTranslit=he
14	۔	۔	PUNCT	SYM	_	12	punct	_	ChunkId=VGF|ChunkType=child|Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	شکیل	شکیل	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing|Person=3	6	nmod	_	Vib=0|Tam=0|ChunkId=NP|ChunkType=head|Translit=škīl|LTranslit=škīl
2	اور	اور	CCONJ	CC	_	4	cc	_	ChunkId=CCP|ChunkType=head|Translit=āūr|LTranslit=āūr
3	پروین	پروین	PROPN	NNPC	Case=Nom|Gender=Fem|Number=Sing|Person=3	4	compound	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=child|Translit=prūīn|LTranslit=prūīn
4	بیگم	بیگم	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing|Person=3	1	conj	_	Vib=0|Tam=0|ChunkId=NP2|ChunkType=head|Translit=bīgm|LTranslit=bīgm
5	کی	کا	ADP	PSP	AdpType=Post|Case=Nom|Gender=Fem|Number=Sing	1	case	_	ChunkId=NP2|ChunkType=child|Translit=kī|LTranslit=kā
6	حالت	حالت	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	7	nsubj	_	Vib=0|Tam=0|ChunkId=NP3|ChunkType=head|Translit=hālt|LTranslit=hālt
7	تشویشناک	تشویشناک	ADJ	JJ	_	0	root	_	ChunkId=JJP|ChunkType=head|Translit=tšūīšnāk|LTranslit=tšūīšnāk
8	ہے	ہے	AUX	VM	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	SpaceAfter=No|AltTag=AUX-VERB|Vib=ہے|Tam=hE|ChunkId=VGF|ChunkType=head|Stype=declarative|Translit=he|LTranslit=he
9	۔	۔	PUNCT	SYM	_	7	punct	_	ChunkId=VGF|ChunkType=child|Translit=.|LTranslit=.

~~~


