---
layout: base
title:  'Statistics of obj in UD_Galician-TreeGal'
udver: '2'
---

## Treebank Statistics: UD_Galician-TreeGal: Relations: `obj`

This relation is universal.

1171 nodes (5%) are attached to their parents as `obj`.

995 instances of `obj` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.30828351836038.

The following 7 pairs of parts of speech are connected with `obj`: <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (863; 74% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PRON.html">PRON</a></tt> (255; 22% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-PROPN.html">PROPN</a></tt> (29; 2% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt> (14; 1% instances), <tt><a href="gl_treegal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_treegal-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_treegal-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	"	"	PUNCT	Q"	_	2	punct	_	SpaceAfter=No
2	Votamos	votar	VERB	Vpi10p	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	Constitución	constitución	NOUN	Scfs	Gender=Fem|Number=Sing	2	obj	_	SpaceAfter=No
5	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Por	por	ADP	P	AdpType=Prep	2	mark	_	_
2	emocionar	emocionar	VERB	V0f000	VerbForm=Inf	0	root	_	_
3	nos	nos	PRON	Raa1ap	Case=Acc|Clitic=Yes|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	obj	_	_
4	e	e	CCONJ	Cc	_	5	cc	_	_
5	facer	facer	VERB	V0f000	VerbForm=Inf	2	conj	_	_
6	nos	nos	PRON	Raa1ap	Case=Acc|Clitic=Yes|Gender=Com|Number=Plur|Person=1|PronType=Prs	5	obj	_	_
7	sentir	sentir	VERB	V0f000	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Q.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obj	color:blue
1	Un	un	NUM	Ncdms	Gender=Masc|Number=Sing|NumType=Card	2	nummod	_	_
2	ano	ano	NOUN	Scms	Gender=Masc|Number=Sing	3	obl	_	_
3	lembrando	lembrar	VERB	V0x000	VerbForm=Ger	0	root	_	_
4	a	a	ADP	P	AdpType=Prep	5	case	_	_
5	Luísa	luísa	PROPN	Sp00	_	3	obj	_	_
6	Villalta	villalta	PROPN	Sp00	_	5	flat:name	_	_

~~~


