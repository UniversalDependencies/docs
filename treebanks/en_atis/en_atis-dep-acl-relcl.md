---
layout: base
title:  'Statistics of acl:relcl in UD_English-Atis'
udver: '2'
---

## Treebank Statistics: UD_English-Atis: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="en_atis-dep-acl.html">acl</a></tt>.

1177 nodes (2%) are attached to their parents as `acl:relcl`.

1172 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.60917587085811.

The following 11 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1116; 95% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (16; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="en_atis-pos-PRON.html">PRON</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_atis-pos-VERB.html">VERB</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_atis-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_atis-pos-NUM.html">NUM</a></tt>-<tt><a href="en_atis-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 acl:relcl	color:blue
1	what	what	PRON	_	PronType=Int,Rel	0	root	_	_
2	's	be	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	the	the	DET	_	PronType=Art	5	det	_	_
4	earliest	early	ADJ	_	Degree=Sup	5	amod	_	_
5	flight	flight	NOUN	_	Number=Sing	1	nsubj	_	_
6	from	from	ADP	_	_	7	case	_	_
7	boston	boston	PROPN	_	Number=Sing	5	nmod	_	_
8	to	to	ADP	_	_	9	case	_	_
9	bwi	bwi	PROPN	_	Number=Sing	5	nmod	_	_
10	that	that	ADP	_	_	11	nsubj	_	_
11	serves	serve	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
12	lunch	lunch	NOUN	_	Number=Sing	11	obj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:relcl	color:blue
1	list	list	VERB	_	VerbForm=Inf	0	root	_	_
2	all	all	DET	_	PronType=Art	4	det:predet	_	_
3	the	the	DET	_	PronType=Art	4	det	_	_
4	airlines	airline	NOUN	_	Number=Plur	1	obj	_	_
5	that	that	ADP	_	_	6	mark	_	_
6	service	service	NOUN	_	Number=Sing	4	acl:relcl	_	_
7	denver	denver	PROPN	_	Number=Sing	6	obj	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	do	do	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	you	you	PRON	_	PronType=Prs	3	nsubj	_	_
3	have	have	VERB	_	VerbForm=Inf	0	root	_	_
4	a	a	DET	_	PronType=Art	5	det	_	_
5	747	747	PROPN	_	Number=Sing	3	obj	_	_
6	that	that	ADP	_	_	7	mark	_	_
7	flies	fly	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
8	from	from	ADP	_	_	9	case	_	_
9	san	san	PROPN	_	Number=Sing	7	obl	_	_
10	francisco	francisco	PROPN	_	Number=Sing	9	flat	_	_
11	to	to	ADP	_	_	12	case	_	_
12	baltimore	baltimore	PROPN	_	Number=Sing	7	obl	_	_

~~~


