---
layout: base
title:  'Statistics of ccomp in UD_Hindi-HDTB'
udver: '2'
---

## Treebank Statistics: UD_Hindi-HDTB: Relations: `ccomp`

This relation is universal.

762 nodes (0%) are attached to their parents as `ccomp`.

762 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 14.8293963254593.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (759; 100% instances), <tt><a href="hi_hdtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hi_hdtb-pos-VERB.html">VERB</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 ccomp	color:blue
1	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	ChunkId=NP|ChunkType=head|LTranslit=vaha|Tam=0|Translit=vaha|Vib=0
2	बताते	बताना	VERB	VM	Aspect=Imp|Gender=Masc|Number=Sing|Person=3|Polite=Form|VerbForm=Part|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=batānā|Stype=declarative|Tam=wA|Translit=batāte|Vib=ता_है
3	हैं	है	AUX	VAUX	Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Pres|VerbForm=Fin	2	aux	_	ChunkId=VGF|ChunkType=child|LTranslit=hai|Tam=hE|Translit=haiṁ|Vib=है
4	कि	कि	SCONJ	CC	_	11	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|LTranslit=ki|Translit=ki
5	समिति	समिति	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	11	nsubj	_	ChunkId=NP2|ChunkType=head|LTranslit=samiti|Tam=0|Translit=samiti|Vib=0
6	शंकराचार्य	शंकराचार्य	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	obl	_	ChunkId=NP3|ChunkType=head|LTranslit=śaṁkarācārya|Tam=0|Translit=śaṁkarācārya|Vib=0_के_प्रति
7	जी	जी	PART	RP	_	6	dep	_	ChunkId=NP3|ChunkType=child|LTranslit=jī|Translit=jī
8	के	के	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|LTranslit=ke|Translit=ke
9	प्रति	प्रति	ADP	PSP	AdpType=Post	6	case	_	ChunkId=NP3|ChunkType=child|LTranslit=prati|Translit=prati
10	उत्तरदायी	उत्तरदायी	ADJ	JJ	_	11	compound	_	ChunkId=JJP|ChunkType=head|LTranslit=uttaradāyī|Translit=uttaradāyī
11	होगी	होना	VERB	VM	Gender=Fem|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	2	ccomp	_	ChunkId=VGF2|ChunkType=head|LTranslit=honā|Stype=declarative|Tam=gA|Translit=hogī|Vib=गा
12	।	।	PUNCT	SYM	_	2	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 17 ccomp	color:blue
1	हालांकि	हालांकि	SCONJ	CC	_	7	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP|ChunkType=head|LTranslit=hālāṁki|Translit=hālāṁki
2	प्रधानमंत्री	प्रधानमंत्री	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	nsubj	_	ChunkId=NP|ChunkType=head|LTranslit=pradhānamaṁtrī|Tam=0|Translit=pradhānamaṁtrī|Vib=0
3	भी	भी	PART	RP	_	2	dep	_	ChunkId=NP|ChunkType=child|LTranslit=bhī|Translit=bhī
4	सदन	सदन	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	7	obl	_	ChunkId=NP2|ChunkType=head|LTranslit=sadana|Tam=0|Translit=sadana|Vib=0_में
5	में	में	ADP	PSP	AdpType=Post	4	case	_	ChunkId=NP2|ChunkType=child|LTranslit=meṁ|Translit=meṁ
6	उपस्थित	उपस्थित	ADJ	JJ	_	7	compound	_	ChunkId=JJP|ChunkType=head|LTranslit=upasthita|Translit=upasthita
7	थे	था	VERB	VM	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Polite=Form|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ChunkId=VGF|ChunkType=head|LTranslit=thā|Stype=declarative|Tam=WA|Translit=the|Vib=था
8	और	और	CCONJ	CC	_	11	cc	_	ChunkId=CCP2|ChunkType=head|LTranslit=aura|Translit=aura
9	समय	समय	NOUN	NN	Case=Acc|Gender=Masc|Number=Sing|Person=3	11	nmod	_	ChunkId=NP3|ChunkType=head|LTranslit=samaya|Tam=0|Translit=samaya|Vib=0_का
10	का	का	ADP	PSP	AdpType=Post|Case=Nom|Gender=Masc|Number=Sing	9	case	_	ChunkId=NP3|ChunkType=child|LTranslit=kā|Translit=kā
11	तकाजा	तकाजा	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing|Person=3	7	conj	_	ChunkId=NP4|ChunkType=head|LTranslit=takājā|Tam=0|Translit=takājā|Vib=0
12	था	था	AUX	VM	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	11	cop	_	ChunkId=VGF2|ChunkType=head|LTranslit=thā|Stype=declarative|Tam=WA|Translit=thā|Vib=था
13	कि	कि	SCONJ	CC	_	17	mark	_	AltTag=SCONJ-CONJ|ChunkId=CCP3|ChunkType=head|LTranslit=ki|Translit=ki
14	वह	वह	PRON	PRP	Case=Nom|Number=Sing|Person=3|PronType=Prs	17	nsubj	_	ChunkId=NP5|ChunkType=head|LTranslit=vaha|Tam=0|Translit=vaha|Vib=0
15	भी	भी	PART	RP	_	14	dep	_	ChunkId=NP5|ChunkType=child|LTranslit=bhī|Translit=bhī
16	श्रद्घांजलि	श्रद्घांजलि	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	17	obj	_	ChunkId=NP6|ChunkType=head|LTranslit=śradghāṁjali|Tam=0|Translit=śradghāṁjali|Vib=0
17	देते	देना	VERB	VM	Gender=Masc|Mood=Sub|Number=Sing|Person=3|Polite=Form|VerbForm=Fin|Voice=Act	11	ccomp	_	ChunkId=VGF3|ChunkType=head|LTranslit=denā|Stype=declarative|Tam=eM|Translit=dete|Vib=एं
18	।	।	PUNCT	SYM	_	7	punct	_	ChunkId=BLK|ChunkType=head|LTranslit=.|Translit=.

~~~


