---
layout: base
title:  'Statistics of csubj in UD_Croatian'
udver: '2'
---

## Treebank Statistics: UD_Croatian: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="hr-dep-csubj-pass.html">csubj:pass</a></tt>.

298 nodes (0%) are attached to their parents as `csubj`.

277 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.84563758389262.

The following 24 pairs of parts of speech are connected with `csubj`: <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (72; 24% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (70; 23% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (46; 15% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (37; 12% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (16; 5% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="hr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (5; 2% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="hr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="hr-pos-VERB.html">VERB</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="hr-pos-ADP.html">ADP</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr-pos-ADV.html">ADV</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hr-pos-AUX.html">AUX</a></tt>-<tt><a href="hr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="hr-pos-DET.html">DET</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="hr-pos-DET.html">DET</a></tt>-<tt><a href="hr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hr-pos-NUM.html">NUM</a></tt>-<tt><a href="hr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="hr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Prvi	prvi	ADJ	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	0	root	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	da	da	SCONJ	_	_	8	mark	_	_
4	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	8	expl:pv	_	_
5	razvoj	razvoj	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
6	i	i	PART	_	_	7	discourse	_	_
7	dalje	daleko	ADV	_	Degree=Cmp	8	advmod	_	_
8	događa	događati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	_
9	sam	sam	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	8	obl	_	_
10	po	po	ADP	_	Case=Loc	11	case	_	_
11	sebi	sebe	PRON	_	Case=Loc|PronType=Prs|Reflex=Yes	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj	color:blue
1	Očekuje	očekivati	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|PronType=Prs|Reflex=Yes	1	expl:pv	_	_
3	kako	kako	SCONJ	_	_	7	mark	_	_
4	će	htjeti	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	suđenja	suđenje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	7	nsubj	_	_
6	osumnjičenima	osumnjičen	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	5	nmod	_	_
7	započeti	započeti	VERB	_	VerbForm=Inf	1	csubj	_	_
8	sredinom	sredina	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	7	obl	_	_
9	rujna	rujan	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	Bolje	dobro	ADV	_	Degree=Cmp	0	root	_	_
2	je	biti	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	zaustaviti	zaustaviti	VERB	_	VerbForm=Inf	1	csubj	_	_
4	sukobe	sukob	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	_
5	i	i	CCONJ	_	_	6	cc	_	_
6	razviti	razviti	VERB	_	VerbForm=Inf	3	conj	_	_
7	poslovanje	poslovanje	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	SpaceAfter=No
8	"	"	PUNCT	_	_	1	punct	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


