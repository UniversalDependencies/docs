---
layout: base
title:  'Statistics of mark in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `mark`

This relation is universal.

1152 nodes (10%) are attached to their parents as `mark`.

1151 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.33246527777778.

The following 6 pairs of parts of speech are connected with `mark`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (658; 57% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (432; 38% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (56; 5% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 mark	color:blue
1	_	_	PUNCT	punct	_	2	punct	_	_
2	_	_	VERB	vt	Mood=Imp|Person[subj]=2|Subcat=Tran|VerbForm=Fin	11	parataxis:rep	_	_
3	_	_	NOUN	n	_	2	obj	_	_
4	_	_	PUNCT	punct	_	2	punct	_	_
5	_	_	PART	temprt	_	6	dep:mod	_	_
6	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	8	advcl	_	_
7	_	_	SCONJ	subordconn	_	6	mark	_	_
8	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	2	advcl	_	_
9	_	_	SCONJ	subordconn	_	8	mark	_	_
10	_	_	PUNCT	punct	_	2	punct	_	_
11	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
12	_	_	PUNCT	punct	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mark	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	NOUN	n	_	5	nsubj	_	_
5	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
6	_	_	PUNCT	punct	_	5	punct	_	_
7	_	_	PUNCT	punct	_	9	punct	_	_
8	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
9	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	5	parataxis:rep	_	_
10	_	_	PART	aspprt	_	9	dep:mod	_	_
11	_	_	PART	focprt	_	9	dep:mod	_	_
12	_	_	PUNCT	punct	_	9	punct	_	_
13	he'i	he'i	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	9	parataxis	_	say
14	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 mark	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	8	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	NOUN	n	_	8	nsubj	_	_
4	_	_	NOUN	n	_	3	compound	_	_
5	_	_	SCONJ	rel	_	3	mark	_	_
6	_	_	PART	discprt	_	3	dep:mod	_	_
7	_	_	PART	illocprt	_	3	dep:mod	_	_
8	_	_	VERB	n:pred	Mood=Ind|Subcat=Intr|VerbForm=Vnoun	0	root	_	_
9	_	_	PART	illocprt	_	8	dep:mod	_	_
10	_	_	PUNCT	punct	_	8	punct	_	_

~~~


