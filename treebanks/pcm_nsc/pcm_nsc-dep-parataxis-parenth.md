---
layout: base
title:  'Statistics of parataxis:parenth in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:parenth`

This relation is a language-specific subtype of .
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-obj.html">parataxis:obj</a></tt>.

11 nodes (0%) are attached to their parents as `parataxis:parenth`.

8 instances of `parataxis:parenth` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.27272727272727.

The following 8 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 27% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-PART.html">PART</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis:parenth	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	na	na	AUX	PART	_	4	cop	_	_
3	ma	ma	PRON	_	_	4	nmod:poss	_	_
4	team	team	NOUN	_	_	0	root	_	_
5	(	(	PUNCT	_	_	8	punct	_	_
6	I	I	PRON	_	_	8	nsubj	_	_
7	dey	dey	AUX	_	_	8	aux	_	_
8	patrol	patrol	VERB	_	_	4	parataxis:parenth	_	_
9	//)	//)	PUNCT	_	_	8	punct	_	_
10	>+	>+	PUNCT	_	_	14	punct	_	_
11	naim	naim	ADV	_	_	14	mark	_	_
12	dem	dem	PRON	_	_	14	nsubj	_	_
13	just	just	ADV	_	_	14	advmod	_	_
14	call	call	VERB	_	_	4	acl:cleft	_	_
15	us	us	PRON	_	_	14	obj	_	_
16	sey	sey	SCONJ	_	_	20	mark	_	_
17	[	[	PUNCT	_	_	20	punct	_	_
18	im	im	PRON	_	_	20	nsubj	_	_
19	don	don	AUX	_	_	20	aux	_	_
20	happen	happen	VERB	_	_	14	ccomp	_	_
21	]	]	PUNCT	_	_	20	punct	_	_
22	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis:parenth	color:blue
1	#	#	PUNCT	_	_	24	punct	_	_
2	{	{	PUNCT	_	_	6	punct	_	_
3	if	if	SCONJ	_	_	6	mark	_	_
4	im	im	PRON	_	_	6	nsubj	_	_
5	don	don	AUX	_	_	6	aux	_	_
6	happen	happen	VERB	_	_	24	advcl	_	_
7	to	to	ADP	_	_	8	case	_	_
8	you	you	PRON	_	_	6	obl:arg	_	_
9	(	(	PUNCT	_	_	11	punct	_	_
10	no	no	ADV	PART	_	11	advmod	_	_
11	lie	lie	VERB	_	_	6	parataxis:parenth	_	_
12	//)	//)	PUNCT	_	_	11	punct	_	_
13	|	|	PUNCT	_	_	16	punct	_	_
14	if	if	SCONJ	_	_	16	mark	_	_
15	don	don	AUX	_	_	16	aux	_	_
16	happen	happen	VERB	_	_	6	conj:dicto	_	_
17	to	to	ADP	_	_	18	case	_	_
18	you	you	PRON	_	_	16	obl:arg	_	_
19	}	}	PUNCT	_	_	6	punct	_	_
20	here	here	ADV	_	_	24	advmod	_	_
21	<	<	PUNCT	_	_	20	punct	_	_
22	make	make	AUX	_	_	24	aux	_	_
23	I	I	PRON	_	_	24	nsubj	_	_
24	see	see	VERB	_	_	0	root	_	_
25	your	your	PRON	_	_	26	nmod:poss	_	_
26	hand	hand	NOUN	_	_	24	obj	_	_
27	up	up	ADV	_	_	24	compound:prt	_	_
28	//	//	PUNCT	_	_	24	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 18 parataxis:parenth	color:blue
1	#	#	PUNCT	_	_	25	punct	_	_
2	at	at	ADP	_	_	3	case	_	_
3	time	time	NOUN	_	_	25	obl:periph	_	_
4	sef	sef	ADV	PART	_	3	advmod:emph	_	_
5	o	o	ADV	PART	_	4	advmod:emph	_	_
6	<	<	PUNCT	_	_	3	punct	_	_
7	#	#	PUNCT	_	_	3	punct	_	_
8	if	if	SCONJ	_	_	12	mark	_	_
9	rain	rain	NOUN	_	_	12	nsubj	_	_
10	no	no	ADV	PART	_	12	advmod	_	_
11	quick	quick	ADV	ADJ	_	12	advmod	_	_
12	fall	fall	VERB	_	_	25	advcl:periph	_	_
13	#	#	PUNCT	_	_	12	punct	_	_
14	<	<	PUNCT	_	_	12	punct	_	_
15	(	(	PUNCT	_	_	18	punct	_	_
16	for	for	ADP	_	_	18	case	_	_
17	some	some	DET	_	_	18	det	_	_
18	area	area	NOUN	_	_	25	parataxis:parenth	_	_
19	dem	dem	DET	PART	_	18	det	_	_
20	)	)	PUNCT	_	_	18	punct	_	_
21	#	#	PUNCT	_	_	18	punct	_	_
22	na	na	AUX	PART	_	25	cop	_	_
23	so	so	ADV	_	_	25	advmod	_	_
24	so	so	ADV	_	_	23	conj:redup	_	_
25	prayer	prayer	NOUN	_	_	0	root	_	_
26	>+	>+	PUNCT	_	_	30	punct	_	_
27	dem	dem	PRON	_	_	30	nsubj	_	_
28	go	go	AUX	_	_	30	aux	_	_
29	dey	dey	AUX	_	_	30	aux	_	_
30	pray	pray	VERB	_	_	25	acl:cleft	_	_
31	sey	sey	SCONJ	_	_	35	mark	_	_
32	[	[	PUNCT	_	_	35	punct	_	_
33	make	make	AUX	_	_	35	aux	_	_
34	God	God	PROPN	_	_	35	nsubj	_	_
35	forgive	forgive	VERB	_	_	30	ccomp	_	_
36	dem	dem	PRON	_	_	35	obj	_	_
37	o	o	ADV	PART	_	35	advmod:emph	_	_
38	>	>	PUNCT	_	_	41	punct	_	_
39	if	if	SCONJ	_	_	41	mark	_	_
40	na	na	AUX	PART	_	41	cop	_	_
41	sin	sin	NOUN	_	_	35	advcl	_	_
42	//	//	PUNCT	_	_	41	punct	_	_
43	]	]	PUNCT	_	_	35	punct	_	_
44	//	//	PUNCT	_	_	25	punct	_	_

~~~


