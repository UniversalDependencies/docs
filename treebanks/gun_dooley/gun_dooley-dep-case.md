---
layout: base
title:  'Statistics of case in UD_Mbya_Guarani-Dooley'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Dooley: Relations: `case`

This relation is universal.

941 nodes (8%) are attached to their parents as `case`.

941 instances of `case` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22422954303932.

The following 7 pairs of parts of speech are connected with `case`: <tt><a href="gun_dooley-pos-PRON.html">PRON</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (472; 50% instances), <tt><a href="gun_dooley-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (394; 42% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (52; 6% instances), <tt><a href="gun_dooley-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (15; 2% instances), <tt><a href="gun_dooley-pos-ADV.html">ADV</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="gun_dooley-pos-PART.html">PART</a></tt>-<tt><a href="gun_dooley-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="gun_dooley-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_dooley-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	7	obl:sentcon	_	_
2	_	_	ADP	post	_	1	case	_	_
3	_	_	PART	discprt	_	1	dep:mod	_	_
4	_	_	PART	illocprt	_	1	dep:mod	_	_
5	_	_	NUM	num	NumType=Card	6	nummod	_	_
6	_	_	NOUN	n	_	7	obl	_	_
7	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	0	root	_	_
8	_	_	NOUN	n	_	7	obl	_	_
9	_	_	ADP	post	_	8	case	_	_
10	_	_	PUNCT	punct	_	7	punct	_	_
11	_	_	PUNCT	punct	_	15	punct	_	_
12	_	_	ADV	dem	_	15	advmod	_	_
13	_	_	PART	discprt	_	12	dep:mod	_	_
14	_	_	PRON	pro	Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
15	_	_	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Int|VerbForm=Fin	7	parataxis:rep	_	_
16	_	_	PART	aspprt	_	15	dep:mod	_	_
17	_	_	NOUN	n	_	15	obl	_	_
18	_	_	ADP	post	_	17	case	_	_
19	_	_	PUNCT	punct	_	15	punct	_	_
20	_	_	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	15	parataxis	_	_
21	_	_	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 case	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 case	color:blue
1	_	_	PRON	pro	Person=3|PronType=Prs	6	obl:sentcon	_	_
2	_	_	PART	illocprt	_	1	dep:mod	_	_
3	_	_	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	6	ccomp	_	_
4	_	_	SCONJ	subordconn	_	3	mark	_	_
5	re	e	ADP	post	_	3	case	_	R-ABL
6	_	_	VERB	vd:i	Mood=Ind|Person[subj]=3|Polarity=Neg|Subcat=IntInd|VerbForm=Fin	0	root	_	_
7	_	_	PUNCT	punct	_	6	punct	_	_

~~~


