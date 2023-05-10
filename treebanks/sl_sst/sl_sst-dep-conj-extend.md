---
layout: base
title:  'Statistics of conj:extend in UD_Slovenian-SST'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SST: Relations: `conj:extend`

This relation is a language-specific subtype of <tt><a href="sl_sst-dep-conj.html">conj</a></tt>.

58 nodes (0%) are attached to their parents as `conj:extend`.

58 instances of `conj:extend` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.93103448275862.

The following 18 pairs of parts of speech are connected with `conj:extend`: <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (9; 16% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (8; 14% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (7; 12% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (7; 12% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (3; 5% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (3; 5% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="sl_sst-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-DET.html">DET</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="sl_sst-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="sl_sst-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_sst-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sl_sst-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_sst-pos-PART.html">PART</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 conj:extend	color:blue
1	srbščine	srbščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	0	root	_	pronunciation=srbščine
2	in	in	CCONJ	Cc	_	3	cc	_	pronunciation=in
3	hrvaščine	hrvaščina	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	1	conj	_	pronunciation=hrvaščine
4	pa	pa	CCONJ	Cc	_	5	cc	_	pronunciation=pa
5	še	še	PART	Q	_	1	conj	_	pronunciation=še
6	[gap]	[gap]	PUNCT	X	_	8	punct	_	pronunciation=[gap]
7	pa	pa	CCONJ	Cc	_	8	cc	_	pronunciation=pa
8	cirilica	cirilica	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	1	conj	_	pronunciation=cirilica
9	pa	pa	CCONJ	Cc	_	10	cc	_	pronunciation=pa
10	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	1	conj:extend	_	pronunciation=to

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 conj:extend	color:blue
1	tudi	tudi	PART	Q	_	7	advmod	_	pronunciation=tut
2	ko	ko	SCONJ	Cs	_	7	mark	_	pronunciation=ku
3	pri	pri	ADP	Sl	Case=Loc	5	case	_	pronunciation=par
4	štirje	štirje	NUM	Mlcmpn	Case=Nom|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	5	nummod	_	pronunciation=Štirje
5	revni	reven	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	7	obl	_	pronunciation=revni
6	veš	vedeti	VERB	Vmpr2s	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	7	parataxis:discourse	_	pronunciation=vajš
7	špila	špilati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	pronunciation=špejla
8	na	na	ADP	Sa	Case=Acc	9	case	_	pronunciation=na
9	glavnik	glavnik	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	_	pronunciation=glavnejk
10	pa	pa	CCONJ	Cc	_	11	cc	_	pronunciation=pa
11	to	ta	DET	Pd-nsn	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	conj:extend	_	pronunciation=tav

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 conj:extend	color:blue
1	saj	saj	CCONJ	Cc	_	11	cc	_	pronunciation=sej
2	potem	potem	ADV	Rgp	Degree=Pos	8	advmod	_	pronunciation=potem
3	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	8	expl	_	pronunciation=si
4	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	aux	_	pronunciation=je
5	v	v	ADP	Sl	Case=Loc	6	case	_	pronunciation=v
6	bistvu	bistvo	NOUN	Ncnsl	Case=Loc|Gender=Neut|Number=Sing	8	obl	_	pronunciation=bistvu
7	sama	sam	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	8	obl	_	pronunciation=sama
8	kupila	kupiti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	pronunciation=kupila
9	ne	ne	PART	Q	Polarity=Neg	8	discourse	_	pronunciation=ne
10	ali	ali	CCONJ	Cc	_	11	cc	_	pronunciation=al
11	kako	kako	ADV	Rgp	Degree=Pos	8	conj:extend	_	pronunciation=kako
12	?	?	PUNCT	Z	_	8	punct	_	pronunciation=?

~~~


