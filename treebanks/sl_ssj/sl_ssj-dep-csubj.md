---
layout: base
title:  'Statistics of csubj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `csubj`

This relation is universal.

894 nodes (0%) are attached to their parents as `csubj`.

835 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.08612975391499.

The following 19 pairs of parts of speech are connected with `csubj`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (388; 43% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (330; 37% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (78; 9% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (35; 4% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (23; 3% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	Prvo	prvi	ADJ	Mlonsn	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	2	amod	_	NER=O
2	pravilo	pravilo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	7	parataxis	_	NER=O|SpaceAfter=No
3	:	:	PUNCT	Z	_	2	punct	_	NER=O
4	Za	za	ADP	Sa	Case=Acc	5	case	_	NER=O
5	nakup	nakup	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	NER=O
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	NER=O
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
8	treba	treba	ADV	Rgp	Degree=Pos	7	advmod	_	NER=O
9	vzeti	vzeti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	NER=O
10	čas	čas	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	NER=O|SpaceAfter=No
11	.	.	PUNCT	Z	_	7	punct	_	NER=O

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	NER=O
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	NER=O|SpaceAfter=No
3	,	,	PUNCT	Z	_	5	punct	_	NER=O
4	da	da	SCONJ	Cs	_	5	mark	_	NER=O
5	zaužijete	zaužiti	VERB	Vmer2p	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	csubj	_	NER=O
6	tri	trije	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	NER=O
7	do	do	ADP	Sg	Case=Gen	8	case	_	NER=O
8	štiri	štirje	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	6	conj	_	NER=O
9	manjše	majhen	ADJ	Agcmpa	Case=Acc|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	NER=O
10	obroke	obrok	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	NER=O
11	na	na	ADP	Sa	Case=Acc	12	case	_	NER=O
12	dan	dan	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	NER=O|SpaceAfter=No
13	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Seveda	seveda	PART	Q	_	3	advmod	_	NER=O
2	pa	pa	CCONJ	Cc	_	3	advmod	_	NER=O
3	dobiti	dobiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	NER=O
4	podpis	podpis	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	NER=O
5	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	NER=O
6	lahka	lahek	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	NER=O
7	stvar	stvar	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	NER=O|SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	NER=O

~~~


