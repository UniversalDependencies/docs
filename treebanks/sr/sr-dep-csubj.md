---
layout: base
title:  'Statistics of csubj in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `csubj`

This relation is universal.

164 nodes (0%) are attached to their parents as `csubj`.

159 instances of `csubj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.29268292682927.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (55; 34% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (34; 21% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (24; 15% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (23; 14% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (10; 6% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Očekuje	očekivati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	1	compound	_	_
3	da	da	SCONJ	_	_	5	mark	_	_
4	Komisija	komisija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
5	predstavi	predstaviti	VERB	_	Number=Sing|Person=3|Tense=Pres	1	csubj	_	_
6	svoje	svoj	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Reflex=Yes	7	det	_	_
7	preporuke	preporuka	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	5	obj	_	_
8	6.	6.	NUM	_	NumType=Ord	9	nummod	_	_
9	decembra	decembar	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 csubj	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Nije	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	3	cop	_	_
3	tačno	tačno	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	da	da	SCONJ	_	_	6	mark	_	_
5	otpuštanja	otpuštanje	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	_
6	imaju	imati	VERB	_	Number=Plur|Person=3|Tense=Pres	3	csubj	_	_
7	političku	politički	ADJ	_	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	pozadinu	pozadina	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Dobro	dobro	ADV	_	Degree=Pos	0	root	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	2	cop	_	_
4	da	da	SCONJ	_	_	6	mark	_	_
5	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	6	compound	_	_
6	postigne	postignuti	VERB	_	Number=Sing|Person=3|Tense=Pres	2	csubj	_	_
7	konsenzus	konsenzus	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	obj	_	_
8	i	i	CCONJ	_	_	10	cc	_	_
9	da	da	SCONJ	_	_	10	mark	_	_
10	imamo	imati	VERB	_	Number=Plur|Person=1|Tense=Pres	6	conj	_	_
11	jednog	jedan	NUM	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumType=Card	12	nummod	_	_
12	kandidata	kandidat	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	10	obj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


