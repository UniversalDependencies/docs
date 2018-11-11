---
layout: base
title:  'Statistics of aux in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_nonstandard-dep-aux-pass.html">aux:pass</a></tt>.

6018 nodes (3%) are attached to their parents as `aux`.

5540 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1053506148222.

The following 19 pairs of parts of speech are connected with `aux`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (5889; 98% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (47; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (31; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (14; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (8; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (7; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (6; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT17.16
2	aduș	aduce	VERB	Vmis1s	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT17.16
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT17.16
4	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	2	nmod:tmod	_	ref=MATT17.16
5	ucenicilor	ucenic	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	2	nmod:pmod	_	ref=MATT17.16
6	Tăi	tău	DET	Ds2mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	5	det	_	ref=MATT17.16
7	și	și	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT17.16
8	nu	nu	ADV	Qz	Polarity=Neg	11	advmod	_	ref=MATT17.16|SpaceAfter=No
9	-l	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	obj	_	ref=MATT17.16
10	putură	putea	AUX	Vais3p	Mood=Ind|Number=Plur|Person=3|Tense=Past	11	aux	_	ref=MATT17.16
11	vindeca	vindeca	VERB	Vmn	VerbForm=Inf	2	conj	_	ref=MATT17.16|SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT17.16

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Că	că	SCONJ	Csssp	Polarity=Pos	6	mark	_	ref=MATT19.30
2	mulți	mult	PRON	Pi3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	6	nsubj	_	ref=MATT19.30
3	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	4	aux	_	ref=MATT19.30
4	fi	fi	AUX	Van	VerbForm=Inf	6	cop	_	ref=MATT19.30
5	cei	cel	DET	Tdmpr	Case=Acc,Nom|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	ref=MATT19.30
6	dintîi	dintâi	NUM	Momp-ln	Definite=Ind|Gender=Masc|Number=Plur|NumForm=Word|NumType=Ord	0	root	_	ref=MATT19.30|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT19.30
8	apoi	apoi	ADV	Rg	_	6	advmod	_	ref=MATT19.30|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT19.30
10	și	și	CCONJ	Ccssp	Polarity=Pos	13	cc	_	ref=MATT19.30
11	cei	acela	PRON	Pd3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	13	nsubj	_	ref=MATT19.30
12	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	13	mark	_	ref=MATT19.30
13	apoi	apoi	ADV	Rg	_	6	conj	_	ref=MATT19.30|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	15	punct	_	ref=MATT19.30
15	întîi	întâi	NUM	Momp-ln	Definite=Ind|Gender=Masc|Number=Plur|NumForm=Word|NumType=Ord	13	advmod	_	ref=MATT19.30|SpaceAfter=No
16	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT19.30

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	5	cc	_	ref=LUCA1.22
2	eșind	ieși	VERB	Vmg-----p	Polarity=Pos|VerbForm=Ger	5	advcl	_	ref=LUCA1.22
3	nu	nu	ADV	Qz	Polarity=Neg	5	advmod	_	ref=LUCA1.22
4	putea	putea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	aux	_	ref=LUCA1.22
5	grăi	grăi	VERB	Vmn	VerbForm=Inf	0	root	_	ref=LUCA1.22
6	lor	el	PRON	Pp3-pd--------s	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Strong	5	iobj	_	ref=LUCA1.22|SpaceAfter=No
7	.	.	PUNCT	PERIOD	_	5	punct	_	ref=LUCA1.22

~~~


