---
layout: base
title:  'Statistics of ccomp:obj in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="hu_szeged-dep-ccomp.html">ccomp</a></tt>.
There are also 2 other language-specific subtypes of `ccomp`: <tt><a href="hu_szeged-dep-ccomp-obl.html">ccomp:obl</a></tt>, <tt><a href="hu_szeged-dep-ccomp-pred.html">ccomp:pred</a></tt>.

209 nodes (0%) are attached to their parents as `ccomp:obj`.

169 instances of `ccomp:obj` (81%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.42583732057416.

The following 9 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (166; 79% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt> (16; 8% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (11; 5% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="hu_szeged-pos-PRON.html">PRON</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="hu_szeged-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="hu_szeged-pos-ADV.html">ADV</a></tt>-<tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp:obj	color:blue
1	Persze	persze	ADV	_	_	3	advmod:mode	_	_
2	könnyen	könnyű	ADJ	_	Case=Ess|Degree=Pos|Number=Sing	3	advmod:mode	_	_
3	tehette	tesz	VERB	_	Definite=Def|Mood=Pot|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	hogy	hogy	SCONJ	_	_	7	mark	_	_
6	ilyeneket	ilyen	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Dem	7	obj	_	_
7	mondjon	mond	VERB	_	Definite=Ind|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp:obj	_	SpaceAfter=No
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp:obj	color:blue
1	Tudják	tud	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	_	_	5	punct	_	_
3	sehova	sehova	ADV	_	PronType=Neg	6	advmod:to	_	_
4	nem	nem	ADV	_	PronType=Neg	5	advmod	_	_
5	érdemes	érdemes	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	1	ccomp:obj	_	_
6	elindulni	el+indul	VERB	_	VerbForm=Inf|Voice=Act	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 ccomp:obj	color:blue
1	—	—	PUNCT	_	_	3	punct	_	_
2	Úgy	úgy	ADV	_	PronType=Dem	3	advmod:mode	_	_
3	vélem	vél	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	10	punct	_	_
5	aki	aki	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Rel	7	nsubj	_	_
6	színpadra	színpad	NOUN	_	Case=Sub|Number=Sing	7	obl	_	_
7	lép	lép	VERB	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	ccomp:obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	7	punct	_	_
9	annak	az	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Dem	10	nmod:att	_	_
10	kötelessége	kötelesség	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	3	ccomp:obj	_	_
11	a	a	DET	_	Definite=Def|PronType=Art	12	det	_	_
12	nyelv	nyelv	NOUN	_	Case=Nom|Number=Sing	13	nmod:att	_	_
13	ápolása	ápolás	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	10	nmod:att	_	SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


