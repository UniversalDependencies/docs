---
layout: base
title:  'Statistics of nmod:tmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>.

15 nodes (0%) are attached to their parents as `nmod:tmod`.

12 instances of `nmod:tmod` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8.

The following 5 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (8; 53% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 20% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 13% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 7% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod:tmod	color:blue
1	Apa	_	ADV	_	Polite=Infm|PronType=Int	4	advmod	_	_
2	durung	_	PART	_	Polarity=Neg|Polite=Infm	4	advmod	_	_
3	mbok	_	PRON	_	Number=Sing|Person=2|Polite=Infm|PronType=Prs	4	nsubj	_	_
4	pikir	_	NOUN	_	Number=Sing	0	root	_	_
5	guneman	_	NOUN	_	Number=Sing	4	obj	_	_
6	ku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	nmod:poss	_	_
7	rong	_	NUM	_	NumType=Card|Polite=Infm	8	nummod	_	_
8	minggu	_	NOUN	_	Number=Sing	5	nmod:tmod	_	_
9	kapungkur	_	ADV	_	_	8	advmod	_	SpaceAfter=No
10	?	_	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 nmod:tmod	color:blue
1	Ananging	_	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	_	PUNCT	_	_	1	punct	_	_
3	indhustri	_	NOUN	_	Number=Sing	7	nsubj	_	_
4	permata	_	NOUN	_	Number=Sing	3	nmod	_	_
5	Dubai	_	PROPN	_	_	3	nmod	_	_
6	punika	_	DET	_	Polite=Form|PronType=Dem	3	det	_	_
7	nglampahi	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
8	dampak	_	NOUN	_	Number=Sing	7	obj	_	_
9	saking	_	ADP	_	Polite=Form	10	case	_	_
10	Perang	_	PROPN	_	_	7	obl	_	_
11	Donya	_	PROPN	_	_	10	flat:name	_	_
12	I	_	PROPN	_	_	10	flat:name	_	SpaceAfter=No
13	,	_	PUNCT	_	_	15	punct	_	_
14	lajeng	_	ADV	_	Polite=Form	15	advmod	_	_
15	Depresi	_	PROPN	_	_	10	conj	_	_
16	Gedhe	_	PROPN	_	_	15	flat:name	_	_
17	ing	_	ADP	_	Polite=Infm	18	case	_	_
18	taun	_	NOUN	_	Number=Sing	15	nmod:tmod	_	_
19	1920-an	_	NUM	_	NumType=Card	18	nummod	_	SpaceAfter=No
20	.	_	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:tmod	color:blue
1	Antara	_	NOUN	_	Number=Sing|Polite=Infm	4	nmod:lmod	_	_
2	e	_	DET	_	Definite=Def|Polite=Infm|PronType=Art	1	det	_	_
3	rong	_	NUM	_	NumType=Card|Polite=Infm	4	nummod	_	_
4	bengi	_	NOUN	_	Number=Sing|Polite=Infm	6	nmod:tmod	_	SpaceAfter=No
5	,	_	PUNCT	_	_	6	punct	_	_
6	aku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	0	root	_	SpaceAfter=No
7	,	_	PUNCT	_	_	8	punct	_	_
8	kakang	_	NOUN	_	Number=Sing	6	conj	_	_
9	ku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	8	nmod:poss	_	_
10	lan	_	CCONJ	_	Polite=Infm	11	cc	_	_
11	Simbah	_	PROPN	_	_	6	conj	_	_
12	Kakung	_	PROPN	_	_	11	flat:name	_	_
13	kang	_	PRON	_	Polite=Infm|PronType=Rel	14	nsubj	_	_
14	ngrumat	_	VERB	_	Mood=Ind|Voice=Act	6	acl:relcl	_	_
15	Simbah	_	PROPN	_	_	14	obl	_	_
16	Putri	_	PROPN	_	_	15	flat:name	_	SpaceAfter=No
17	.	_	PUNCT	_	_	6	punct	_	SpacesAfter=\n

~~~


