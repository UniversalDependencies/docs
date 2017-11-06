---
layout: base
title:  'Statistics of cop in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `cop`

This relation is universal.

236 nodes (1%) are attached to their parents as `cop`.

172 instances of `cop` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83898305084746.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (85; 36% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (68; 29% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (27; 11% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (23; 10% instances), <tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (13; 6% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Apostolii	apostol	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	3	nsubj	_	ref=MATT 5.13.content
2	-s	fi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	ref=MATT 5.13.content
3	sare	sare	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	ref=MATT 5.13.content
4	şi	și	CCONJ	Ccssp	Polarity=Pos	5	cc	_	ref=MATT 5.13.content
5	lumina	lumină	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	conj	_	ref=MATT 5.13.content
6	lumii	lume	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	5	nmod	_	ref=MATT 5.13.content
7	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 5.13.content

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	Carii	care	PRON	Pw3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Int,Rel	3	nsubj	_	ref=MATT 5.1.content
2	-s	fi	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	ref=MATT 5.1.content
3	fericiţi	fericit	ADJ	Afpmprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	ref=MATT 5.1.content
4	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 5.1.content

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 3 cop	color:blue
1	Ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		11	cc	_
2	să	să	PART	Qs	PartType=Sub	3	mark	_	ref=MATT 5.37
3	fie	fi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	ref=MATT 5.37
4	cuvîntul	cuvânt	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	ref=MATT 5.37
5	vostru	tău	DET	Ds2ms-p	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|PronType=Poss	4	det	_	ref=MATT 5.37
6	,	,	PUNCT	COMMA	_	11	punct	_	ref=MATT 5.37
7	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		9	nsubj	_
8	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	ref=MATT 5.37
9	aşa	așa	ADV	Rg	_	11	csubj	_	ref=MATT 5.37
10	,	,	PUNCT	COMMA	_	11	punct	_	ref=MATT 5.37
11	aşa	așa	ADV	Rg	_	0	root	_	ref=MATT 5.37
12	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT 5.37
13	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		15	nsubj	_
14	nu	nu	ADV	Qz	Polarity=Neg	15	advmod	_	ref=MATT 5.37
15	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	csubj	_	ref=MATT 5.37
16	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT 5.37
17	nu	nu	ADV	Qz	Polarity=Neg	11	conj	_	ref=MATT 5.37
18	.	.	PUNCT	PERIOD	_	11	punct	_	ref=MATT 5.37

~~~


