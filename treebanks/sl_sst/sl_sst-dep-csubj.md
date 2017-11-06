---
layout: base
title:  'Statistics of csubj in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `csubj`

This relation is universal.

89 nodes (0%) are attached to their parents as `csubj`.

84 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.34831460674157.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (46; 52% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (19; 21% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (10; 11% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	polmer	polmer	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	4	obj	_	word=polmer|msd=Sometn
2	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	0	root	_	word=bo|msd=Gp-pte-n
3	treba	treba	ADV	Rgp	Degree=Pos	2	advmod	_	word=treba|msd=Rsn
4	izračunati	izračunati	VERB	Vmen	Aspect=Perf|VerbForm=Inf	2	csubj	_	word=zračunat|msd=Ggdn
5	ne	ne	PART	Q	_	4	discourse	_	word=ne|msd=L

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 csubj	color:blue
1	zdaj	zdaj	ADV	Rgp	Degree=Pos	2	reparandum	_	word=zdaj|msd=Rsn
2	zdaj	zdaj	ADV	Rgp	Degree=Pos	5	advmod	_	word=zaj|msd=Rsn
3	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	cop	_	word=je|msd=Gp-ste-n
4	pa	pa	CCONJ	Cc	_	5	advmod	_	word=pa|msd=Vp
5	odvisno	odvisen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	word=odvisno|msd=Ppnsei
6	kako	kako	ADV	Rgp	Degree=Pos	10	advmod	_	word=kak|msd=Rsn
7	bo	biti	AUX	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	10	aux	_	word=bo|msd=Gp-pte-n
8	kaj	kaj	ADV	Rgp	Degree=Pos	10	advmod	_	word=kaj|msd=Rsn
9	ati	ati	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	10	nsubj	_	word=ati|msd=Somei
10	delal	delati	VERB	Vmpp-sm	Aspect=Imp|Gender=Masc|Number=Sing|VerbForm=Part	5	advcl	_	word=delal|msd=Ggnd-em
11	kje	kje	ADV	Rgp	Degree=Pos	12	advmod	_	word=ki|msd=Rsn
12	bo	biti	VERB	Va-f3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin	5	csubj	_	word=bo|msd=Gp-pte-n
13	kaj	kaj	PRON	Pq-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	12	nsubj	_	word=kaj|msd=Zv-sei

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 csubj	color:blue
1	a	a	ADV	Rgp	Degree=Pos	2	advmod	_	word=a|msd=Rsn
2	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	parataxis:discourse	_	word=veš|msd=Ggnsde
3	eee	eee	INTJ	I	_	6	discourse:filler	_	word=eee|msd=M
4	ker	ker	SCONJ	Cs	_	6	mark	_	word=ker|msd=Vd
5	oni	on	PRON	Pp3mpn	Case=Nom|Gender=Masc|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	word=oni|msd=Zotmmi
6	imajo	imeti	VERB	Vmpr3p-n	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	word=majo|msd=Ggnstm-n
7	tudi	tudi	PART	Q	_	6	advmod	_	word=tud|msd=L
8	samo	samo	PART	Q	_	6	advmod	_	word=sam|msd=L
9	podjetje	podjetje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	word=podjetje|msd=Soset
10	in	in	CCONJ	Cc	_	11	cc	_	word=in|msd=Vp
11	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	6	conj	_	word=vprašanje|msd=Sosei
12	a	a	ADV	Rgp	Degree=Pos	13	advmod	_	word=a|msd=Rsn
13	so	biti	VERB	Va-r3p-n	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	11	csubj	_	word=so|msd=Gp-stm-n

~~~


