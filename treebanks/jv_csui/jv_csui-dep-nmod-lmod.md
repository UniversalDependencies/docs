---
layout: base
title:  'Statistics of nmod:lmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:lmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="jv_csui-dep-nmod-tmod.html">nmod:tmod</a></tt>.

44 nodes (0%) are attached to their parents as `nmod:lmod`.

44 instances of `nmod:lmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15909090909091.

The following 6 pairs of parts of speech are connected with `nmod:lmod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (30; 68% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (7; 16% instances), <tt><a href="jv_csui-pos-NUM.html">NUM</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nmod:lmod	color:blue
1	Sarasehan	_	NOUN	_	Number=Sing	3	nsubj	_	_
2	bisa	_	AUX	_	Polite=Infm	3	aux	_	_
3	dadi	_	VERB	_	Mood=Ind|Polite=Infm|Voice=Act	0	root	_	_
4	wadhah	_	NOUN	_	Number=Sing	3	xcomp	_	_
5	tukar	_	VERB	_	Mood=Ind|Voice=Act	4	acl	_	_
6	kawruh	_	NOUN	_	Number=Sing	5	obj	_	_
7	antara	_	NOUN	_	Number=Sing|Polite=Infm	10	nmod:lmod	_	_
8	e	_	DET	_	Definite=Def|Polite=Infm|PronType=Art	7	det	_	_
9	para	_	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
10	rawuh	_	NOUN	_	Number=Sing|Polite=Elev	5	obl	_	SpaceAfter=No
11	.	_	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:lmod	color:blue
1	Dak	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	2	nsubj	_	_
2	sawang	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
3	bocah	_	NOUN	_	Number=Sing|Polite=Infm	11	nsubj	_	_
4	wadon	_	NOUN	_	Number=Sing|Polite=Infm	3	nmod	_	_
5	sing	_	PRON	_	Polite=Infm|PronType=Rel	6	nsubj	_	_
6	lungguh	_	VERB	_	Mood=Ind|Voice=Act	3	acl:relcl	_	_
7	neng	_	ADP	_	Polite=Infm	9	case	_	_
8	sanding	_	NOUN	_	Number=Sing	9	nmod:lmod	_	_
9	ku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	6	obl	_	_
10	iki	_	DET	_	Polite=Infm|PronType=Dem	3	det	_	_
11	nyambi	_	VERB	_	Mood=Ind|Voice=Act	2	ccomp	_	_
12	ngelusi	_	VERB	_	Mood=Ind|Voice=Act	11	advcl	_	_
13	buku-buku	_	NOUN	_	Number=Plur	12	obj	_	_
14	e	_	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	12	nmod:poss	_	_
15	.	_	PUNCT	_	_	2	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:lmod	color:blue
1	Kita	_	PRON	_	Number=Plur|Person=1|Polite=Infm|PronType=Prs	3	nsubj	_	_
2	kudu	_	AUX	_	Polite=Infm	3	aux	_	_
3	mong-kinemong	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	antara	_	NOUN	_	Number=Sing|Polite=Infm	6	nmod:lmod	_	_
5	e	_	DET	_	Definite=Def|Polite=Infm|PronType=Art	4	det	_	_
6	siji	_	NUM	_	NumType=Card|Polite=Infm	3	obl	_	_
7	lan	_	CCONJ	_	Polite=Infm	8	cc	_	_
8	siji	_	NUM	_	NumType=Card|Polite=Infm	6	conj	_	_
9	e	_	DET	_	Definite=Def|Polite=Infm|PronType=Art	8	det	_	_
10	.	_	PUNCT	_	_	3	punct	_	_

~~~


