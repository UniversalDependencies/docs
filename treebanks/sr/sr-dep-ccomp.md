---
layout: base
title:  'Statistics of ccomp in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `ccomp`

This relation is universal.

1210 nodes (1%) are attached to their parents as `ccomp`.

1210 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.66776859504132.

The following 19 pairs of parts of speech are connected with `ccomp`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (771; 64% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (144; 12% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (99; 8% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (53; 4% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (49; 4% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (19; 2% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (15; 1% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (8; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Bitići	Bitići	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	_
2	kaže	kazati	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	7	mark	_	_
4	bi	biti	AUX	_	Number=Plur|Person=3|Tense=Past	7	aux	_	_
5	jači	jak	ADJ	_	Case=Nom|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	6	amod	_	_
6	sindikati	sindikat	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	_
7	doneli	doneti	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	2	ccomp	_	_
8	bolje	dobar	ADJ	_	Case=Acc|Definite=Def|Degree=Cmp|Gender=Masc|Number=Plur	9	amod	_	_
9	ishode	ishod	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	7	obj	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Deceniju	decenija	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	advmod	_	_
3	kasnije	kasno	ADV	_	Degree=Cmp	4	advmod	_	_
4	vidimo	videti	VERB	_	Number=Plur|Person=1|Tense=Pres	0	root	_	_
5	da	da	SCONJ	_	_	9	mark	_	_
6	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	cop	_	_
7	ekonomija	ekonomija	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	nsubj	_	_
8	užasno	užasno	ADV	_	Degree=Pos	9	advmod	_	_
9	nestrukturirana	nestrukturiran	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	4	ccomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 ccomp	color:blue
1	Novi	nov	ADJ	_	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	predsednik	predsednik	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
3	je	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	4	aux	_	_
4	rekao	reći	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	10	mark	_	_
6	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	10	aux	_	_
7	pridruživanje	pridruživanje	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	_
8	EU	EU	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	7	obl	_	_
9	biti	biti	AUX	_	VerbForm=Inf	10	cop	_	_
10	prioritet	prioritet	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


