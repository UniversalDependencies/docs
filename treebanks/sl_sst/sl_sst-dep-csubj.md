---
layout: base
title:  'Statistics of csubj in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `csubj`

This relation is universal.

90 nodes (0%) are attached to their parents as `csubj`.

85 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.32222222222222.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (46; 51% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (19; 21% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (10; 11% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 csubj	color:blue
1	ja	ja	PART	Q	_	8	discourse	_	pronunciation=ja
2	…	…	PUNCT	Z	_	8	punct	_	pronunciation=…
3	čeprav	čeprav	SCONJ	Cs	_	8	mark	_	pronunciation=čeprav
4	ne	ne	PART	Q	Polarity=Neg	8	discourse	_	pronunciation=ne
5	prej	prej	ADV	Rgc	Degree=Cmp	8	advmod	_	pronunciation=prej
6	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	pronunciation=je
7	pa	pa	CCONJ	Cc	_	8	advmod	_	pronunciation=pa
8	bilo	biti	VERB	Vmpp-sn	Aspect=Imp|Gender=Neut|Number=Sing|VerbForm=Part	0	root	_	pronunciation=blo
9	ne	ne	PART	Q	Polarity=Neg	8	discourse	_	pronunciation=ne
10	da	da	SCONJ	Cs	_	11	mark	_	pronunciation=da
11	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	csubj	_	pronunciation=je
12	treba	treba	ADV	Rgp	Degree=Pos	11	advmod	_	pronunciation=trea
13	prositi	prositi	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	11	csubj	_	pronunciation=prosit
14	za	za	ADP	Sa	Case=Acc	16	case	_	pronunciation=za
15	ta	ta	DET	Pd-msa	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	16	det	_	pronunciation=ta
16	dar	dar	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obl	_	pronunciation=dar

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 csubj	color:blue
1	da	da	SCONJ	Cs	_	2	mark	_	pronunciation=da
2	si	biti	VERB	Va-r2s-n	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	csubj	_	pronunciation=si
3	ti	ti	PRON	Pp2-sn	Case=Nom|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	pronunciation=ti
4	nonstop	nonstop	ADV	Rgp	Degree=Pos	2	advmod	_	pronunciation=nonstop
5	na	na	ADP	Sl	Case=Loc	6	case	_	pronunciation=na
6	onemu	oni	DET	Pd-nsd	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	2	obl	_	pronunciation=unemu
7	n-	_	X	Xt	_	9	reparandum	_	pronunciation=n
8	[gap]	[gap]	PUNCT	X	_	9	punct	_	pronunciation=[gap]
9	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	pronunciation=je
10	premočno	premočen	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	pronunciation=premočno

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	ja	ja	PART	Q	_	3	discourse	_	pronunciation=ja
2	samo	samo	PART	Q	_	3	cc	_	pronunciation=sam
3	vprašanje	vprašanje	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	0	root	_	pronunciation=vprašanje
4	kdo	kdo	PRON	Pq-msn	Case=Nom|Gender=Masc|Number=Sing|PronType=Int	5	nsubj	_	pronunciation=kdo
5	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	csubj	_	pronunciation=je
6	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	5	expl	_	pronunciation=to
7	v	v	ADP	Sl	Case=Loc	8	case	_	pronunciation=v
8	resnici	resnica	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	5	obl	_	pronunciation=resnici
9	izza	izza	ADP	Sg	Case=Gen	10	case	_	pronunciation=izza
10	tega	ta	DET	Pd-nsg	Case=Gen|Gender=Neut|Number=Sing|PronType=Dem	5	obl	_	pronunciation=tega
11	ne	ne	PART	Q	Polarity=Neg	3	discourse	_	pronunciation=ne

~~~


