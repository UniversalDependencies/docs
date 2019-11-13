---
layout: base
title:  'Statistics of obl in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="gun_dooley-dep-obl-sentcon.html">obl:sentcon</a></tt>.

627 nodes (5%) are attached to their parents as `obl`.

330 instances of `obl` (53%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.40191387559809.

The following 10 pairs of parts of speech are connected with `obl`: <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (427; 68% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (167; 27% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt> (15; 2% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 obl	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	nsubj	_	_
2	_	_	PART	quantprt	_	1	dep:mod	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
6	_	_	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	5	compound:svc	_	_
7	_	_	NUM	num	NumType=Card	8	nummod	_	_
8	_	_	NOUN	n	_	5	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 obl	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	5	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	_
6	_	_	PRON	pro	Person=3|PronType=Prs	5	obl	_	_
7	_	_	SCONJ	rel	_	6	mark	_	_
8	_	_	ADP	post	_	6	case	_	_
9	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	5	advcl	_	_
10	rã	rã	SCONJ	subordconn	_	9	mark	_	DS
11	_	_	PART	illocprt	_	9	dep:mod	_	_
12	_	_	NOUN	n	_	13	nsubj	_	_
13	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	5	parataxis	_	_
14	_	_	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 obl	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	SCONJ	subordconn	_	1	mark	_	_
3	_	_	PART	illocprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	NOUN	n	_	6	nsubj	_	_
6	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
7	_	_	PROPN	nprop	_	6	obl	_	_
8	_	_	ADP	post	_	7	case	_	_
9	_	_	PUNCT	punct	_	6	punct	_	_
10	_	_	PUNCT	punct	_	14	punct	_	_
11	_	_	NOUN	n	Number[psor]=Sing	12	nmod	_	_
12	rogue'i	ogue	NOUN	n	_	14	obl	_	R-leaf-=DIM
13	_	_	ADP	post	_	12	case	_	_
14	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Int|VerbForm=Fin	6	parataxis:rep	_	_
15	_	_	PUNCT	punct	_	14	punct	_	_
16	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	14	parataxis	_	_
17	_	_	PUNCT	punct	_	6	punct	_	_

~~~


