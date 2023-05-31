---
layout: base
title:  'Statistics of acl in UD_Portuguese-PetroGold'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PetroGold: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_petrogold-dep-acl-relcl.html">acl:relcl</a></tt>.

4709 nodes (2%) are attached to their parents as `acl`.

4634 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.61775323847951.

The following 14 pairs of parts of speech are connected with `acl`: <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (4384; 93% instances), <tt><a href="pt_petrogold-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (136; 3% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (78; 2% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (46; 1% instances), <tt><a href="pt_petrogold-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (29; 1% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (15; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_petrogold-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-SYM.html">SYM</a></tt>-<tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pt_petrogold-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_petrogold-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Sais	sal	NOUN	_	Gender=Masc|Number=Plur	6	nsubj	_	_
2	minerais	mineral	ADJ	_	Gender=Masc|Number=Plur	1	amod	_	_
3	dissolvidos	dissolver	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	1	acl	_	_
4	em	em	ADP	_	_	5	case	_	_
5	água	água	NOUN	_	Gender=Fem|Number=Sing	3	obl	_	_
6	aceleram	acelerar	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	taxa	taxa	NOUN	_	Gender=Fem|Number=Sing	6	obj	_	_
9	de	de	ADP	_	_	10	case	_	_
10	oxidação	oxidação	NOUN	_	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 acl	color:blue
1	Fonte	fonte	NOUN	_	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	_	_	3	punct	_	_
3	Modificado	modificar	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	acl	_	_
4	Diaz	Diaz	PROPN	_	Number=Sing	1	appos	_	_
5	(	(	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	2002	2002	NUM	_	NumType=Card	4	nmod	_	SpaceAfter=No
7	)	)	PUNCT	_	_	6	punct	_	SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Argilas	argila	NOUN	_	Gender=Fem|Number=Plur	6	nsubj	_	_
2	de	de	ADP	_	_	4	case	_	_
3	esse	esse	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	det	_	_
4	tipo	tipo	NOUN	_	Gender=Masc|Number=Sing	1	nmod	_	_
5	são	ser	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	as	o	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Dem	0	root	_	_
7	encontradas	encontrar	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	6	acl	_	_
8	em	em	ADP	_	_	10	case	_	_
9	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Brasil	Brasil	PROPN	_	Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


