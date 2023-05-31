---
layout: base
title:  'Statistics of obl in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="pl_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="pl_pud-dep-obl-arg.html">obl:arg</a></tt>, <tt><a href="pl_pud-dep-obl-cmpr.html">obl:cmpr</a></tt>.

975 nodes (5%) are attached to their parents as `obl`.

642 instances of `obl` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26666666666667.

The following 16 pairs of parts of speech are connected with `obl`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (517; 53% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (175; 18% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (84; 9% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (58; 6% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (29; 3% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (26; 3% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PROPN.html">PROPN</a></tt> (23; 2% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (19; 2% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (9; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (4; 0% instances), <tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="pl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-X.html">X</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl	color:blue
1	Program	program	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	zarabia	zarabiać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	dzięki	dzięki	ADP	prep:dat	AdpType=Prep	4	case	4:case|6:case	Case=Dat
4	sponsorom	sponsor	NOUN	subst:pl:dat:m1	Animacy=Hum|Case=Dat|Gender=Masc|Number=Plur	2	obl	2:obl	_
5	i	i	CCONJ	conj	_	6	cc	6:cc	_
6	reklamom	reklama	NOUN	subst:pl:dat:f	Case=Dat|Gender=Fem|Number=Plur	4	conj	2:obl|4:conj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl	color:blue
1	Najpierw	najpierw	ADV	adv	_	2	advmod	2:advmod	_
2	zaczęła	zacząć	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	płakać	płakać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	jedna	jeden	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	6	case	6:case	Case=Gen
6	jezydek	jezydka	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	4	obl	4:obl	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
8	potem	potem	ADV	adv	_	10	advmod	10:advmod	_
9	jej	on	PRON	ppron3:sg:gen:f:ter:akc:npraep	Case=Gen|Gender=Fem|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	10	nmod	10:nmod	_
10	przyjaciółka	przyjaciółka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	conj	0:root|2:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl	color:blue
1	Pracował	pracować	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	dla	dla	ADP	prep:gen	AdpType=Prep	3	case	3:case	Case=Gen
3	BBC	BBC	PROPN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	1	obl	1:obl	_
4	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Acc
5	dekadę	dekada	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	1	obl	1:obl	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


